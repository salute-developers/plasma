import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkStringify from 'remark-stringify';
import { visit, SKIP } from 'unist-util-visit';

import * as core from '@actions/core';
import * as github from '@actions/github';

import { writeChangelog } from './utils.js';
import { swapSectionPlace } from './swapSectionPlace.js';
import { processingHeadingByPackages } from './processingHeadingByPackages.js';
import { rewriteHeadingValue } from './rewriteHeadingValue.js';
import { groupByHeadings } from './groupHeadingsByDeep.js';

async function run() {
    try {
        const token = core.getInput('token');

        const octokit = new github.getOctokit(token);
        // const context = github.context;
        //
        // if (context.payload.pull_request == null) {
        //     core.setFailed('No release pull request found');
        //
        //     return;
        // }

        const pr = await octokit.rest.pulls.get({
            owner: 'Yakutoc',
            repo: 'plasma-dev-stage',
            pull_number: 40,
        });

        const tree = unified().use(remarkParse).parse(pr.data.body);

        const data = [];

        visit(tree, (node, index, parent) => {
            if (node.type === 'heading' && node.depth === 2) {
                data.push(node.children[0].value);
            }
        });

        // TODO: Как добавляем изменения про токены?
        // TODO: Plasma-icons точно отдельным моментом
        const packages = data.map((item) => item.toLowerCase()).filter((item) => !['mics', 'core'].includes(item));

        for (const pkg of packages) {
            const list = packages.filter((item) => pkg !== item);

            const changelogMD = unified()
                .use(remarkParse)
                .use(() => swapSectionPlace(pkg))
                .use(() => processingHeadingByPackages(list))
                .use(() => (tree) => {
                    return groupByHeadings(tree);
                })
                .use(() => rewriteHeadingValue(pkg))
                .use(remarkStringify)
                .processSync(pr.data.body);

            await writeChangelog(changelogMD.toString(), pkg);
        }
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();
