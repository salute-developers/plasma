import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkStringify from 'remark-stringify';
import { visit } from 'unist-util-visit';
import { readFileSync, writeFileSync } from 'fs';

import * as core from '@actions/core';

import { writeChangelog, getJSONFilePath, getChangelogCreateDate, getPackageVersionSync } from './utils.js';
import { processingHeadingByPackages } from './processingHeadingByPackages.js';
import { rewriteHeadingValue } from './rewriteHeadingValue.js';
import { parseChangelog } from './parseChangelog.js';

// INFO: Для локального тестирования, использовать вместо `core.getInput('data');`
// import { getMock } from './mock/getMock.js';
// const rawData = await getMock();

import * as META from '../../meta-prod.js';

// INFO: List of packages/libs as "plasma-web" or "sdds-serv"
const packages = Object.keys(META.default);

async function run() {
    try {
        const rawData = core.getInput('data');

        if (!rawData) {
            console.log('Нет данных для записи');

            return;
        }

        const tree = unified().use(remarkParse).parse(rawData);

        const headings = new Set();

        // TODO: Переписать на метод map утилитарного пакета unist-util-*
        // INFO: Собираем массив пакетов в которых есть изменения
        visit(tree, 'heading', (node) => {
            const { depth } = node;
            const heading = node?.children[0]?.value.toLowerCase() || '';

            if (!heading || depth !== 2 || headings.has(heading)) {
                return;
            }

            if (heading === 'core') {
                packages.forEach((pkg) => {
                    headings.add(pkg);
                });

                return;
            }

            headings.add(heading);
        });

        // INFO: Новый блок генерации changelog as JSON на основе входящих данных
        for (const pkg of Array.from(headings)) {
            const blackList = [...packages.filter((item) => pkg !== item), 'bugs'];

            const isPlasmaIcons = pkg === 'plasma-icons';

            unified()
                .use(remarkParse)
                .use(() => processingHeadingByPackages(isPlasmaIcons ? [...blackList, 'core'] : blackList))
                .use(() => (tree) => {
                    const version = getPackageVersionSync(pkg);
                    const changelogCreateDate = getChangelogCreateDate(new Date());
                    const currentChangelogData = parseChangelog(tree, version, changelogCreateDate);

                    const mdFilePAth = getJSONFilePath(pkg, 'changelog.json');

                    const existingContent = readFileSync(mdFilePAth, 'utf8');

                    const data = Object.assign(currentChangelogData, JSON.parse(existingContent));

                    writeFileSync(mdFilePAth, JSON.stringify(data, null, 2), 'utf8');
                })
                .use(remarkStringify)
                .processSync(rawData);
        }
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();
