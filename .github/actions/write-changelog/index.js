import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkStringify from 'remark-stringify';
import { visit } from 'unist-util-visit';

import * as core from '@actions/core';

import { writeChangelog } from './utils.js';
import { processingHeadingByPackages } from './processingHeadingByPackages.js';
import { rewriteHeadingValue } from './rewriteHeadingValue.js';

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

        // INFO: В коллекции будут или все пакеты так как были изменения в core,
        // INFO: или только те библиотеки в которых были изменения
        for (const pkg of Array.from(headings)) {
            const blackList = [...packages.filter((item) => pkg !== item), 'bugs'];

            const isPlasmaIcons = pkg === 'plasma-icons';

            const changelogMD = unified()
                .use(remarkParse)
                .use(() => processingHeadingByPackages(isPlasmaIcons ? [...blackList, 'core'] : blackList))
                .use(() => rewriteHeadingValue(pkg))
                .use(remarkStringify)
                .processSync(rawData);

            await writeChangelog(changelogMD.toString(), pkg);
        }
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();
