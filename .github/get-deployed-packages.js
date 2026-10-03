const DEPLOY_ARTIFACTS_JOB_PATTERN = /^Deploy artifacts \((.+)\)$/;

/**
 * Returns package names from successful deploy-artifacts matrix jobs in the current workflow run.
 */
module.exports = async (github, context) => {
    const deployedPackages = [];
    let page = 1;

    while (true) {
        const { data } = await github.rest.actions.listJobsForWorkflowRun({
            owner: context.repo.owner,
            repo: context.repo.repo,
            run_id: context.runId,
            per_page: 100,
            page,
        });

        for (const job of data.jobs) {
            if (job.conclusion !== 'success') {
                continue;
            }

            const match = job.name.match(DEPLOY_ARTIFACTS_JOB_PATTERN);

            if (match) {
                deployedPackages.push(match[1]);
            }
        }

        if (data.jobs.length < 100) {
            break;
        }

        page += 1;
    }

    return deployedPackages.sort();
};
