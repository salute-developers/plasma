import { getInput, setFailed } from '@actions/core';

import PerftestSendReportApi from '../modules/sendReport';

async function main() {
    const commitHash = getInput('commitHash', { required: true });
    const reportPath = getInput('reportPath', { required: true });
    const subject = getInput('subject', { required: true });
    const referrer = getInput('referrer', { required: true });

    await new PerftestSendReportApi().send({
        reportPath,
        commitHash,
        subject,
        referrer,
    });
}

main().catch((err) => setFailed(err.message));
