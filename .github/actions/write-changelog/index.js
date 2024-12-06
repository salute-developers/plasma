import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkStringify from 'remark-stringify';
import { visit } from 'unist-util-visit';

import * as core from '@actions/core';
import * as github from '@actions/github';

import { writeChangelog } from './utils.js';
import { swapSectionPlace } from './swapSectionPlace.js';
import { processingHeadingByPackages } from './processingHeadingByPackages.js';
import { rewriteHeadingValue } from './rewriteHeadingValue.js';
import { groupByHeadings } from './groupHeadingsByDeep.js';

import * as META from '../../meta-prod.js';

const whiteList = [...Object.keys(META.default), 'plasma-icons'];

async function run() {
    try {
        const rawData = core.getInput('data');

        if (!rawData) {
            console.log('Нет данных для записи');

            return;
        }

        const tree = unified().use(remarkParse).parse(rawData);

        const data = [];

        visit(tree, (node, index, parent) => {
            if (node.type === 'heading' && node.depth === 2) {
                data.push(node.children[0].value);
            }
        });

        const packages = Array.from(new Set(data))
            .map((item) => item.toLowerCase())
            .filter((item) => whiteList.includes(item));

        for (const pkg of packages) {
            let blackList = [...packages.filter((item) => pkg !== item), 'tokens', 'bugs'];

            const isPlasmaIcons = pkg === 'plasma-icons';

            const changelogMD = unified()
                .use(remarkParse)
                .use(() => swapSectionPlace(pkg))
                .use(() => processingHeadingByPackages(isPlasmaIcons ? [...blackList, 'core'] : blackList))
                .use(() => groupByHeadings)
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
