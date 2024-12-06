import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkStringify from 'remark-stringify';

import * as core from '@actions/core';

import { groupByHeadings } from './groupByHeadings.js';

async function run() {
    try {
        const data = core.getInput('data', { required: true });

        const changelog = await unified()
            .use(remarkParse)
            .use(() => groupByHeadings)
            .use(remarkStringify)
            .process(data);

        core.setOutput('changelog', changelog.toLocaleString());
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();
