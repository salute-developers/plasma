/* eslint-disable no-console */
import { getInput, setFailed } from '@actions/core';
import { getOctokit } from '@actions/github';

import PerftestUpdatePRDescriptionApi from '../modules/updateDescription';

async function main() {
    const token = getInput('token', { required: true });
    const reportPath = getInput('reportPath', { required: true });
    const prId = Number(getInput('prId', { required: true }));
    const owner = getInput('owner', { required: true });
    const repo = getInput('repo', { required: true });

    const octokit = getOctokit(token);

    await new PerftestUpdatePRDescriptionApi({ octokit }).update({
        reportPath,
        prId,
        owner,
        repo,
    });
}

main().catch((err) => setFailed(err.message));
