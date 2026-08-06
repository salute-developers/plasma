const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
    try {
        const token = core.getInput('token', { required: true });
        const octokit = github.getOctokit(token);
        const { context } = github;

        if (context.eventName === 'workflow_dispatch') {
            core.setOutput('allowed', 'true');
            core.setOutput('package', context.payload.inputs.package);
            core.setOutput('build', context.payload.inputs.build || '');
            core.setOutput('pr-number', '');
            core.setOutput('head-sha', context.sha);

            return;
        }

        const comment = context.payload.comment;
        const issue = context.payload.issue;

        if (!issue || !issue.pull_request) {
            core.setOutput('allowed', 'false');

            return;
        }

        const match = comment.body.match(/^\/next-build\s+(\S+)(?:\s+(\S+))?\s*$/m);

        if (!match) {
            core.setOutput('allowed', 'false');

            return;
        }

        const allowedAssociations = ['OWNER', 'MEMBER', 'COLLABORATOR'];

        if (!allowedAssociations.includes(comment.author_association)) {
            core.setOutput('allowed', 'false');
            core.warning(
                `/next-build triggered by ${comment.user.login} (${comment.author_association}) — not authorized, skipping.`,
            );

            return;
        }

        const { data: pr } = await octokit.rest.pulls.get({
            owner: context.repo.owner,
            repo: context.repo.repo,
            pull_number: issue.number,
        });

        core.setOutput('allowed', 'true');
        core.setOutput('package', match[1]);
        core.setOutput('build', match[2] || '');
        core.setOutput('pr-number', String(issue.number));
        core.setOutput('head-sha', pr.head.sha);

        await octokit.rest.reactions.createForIssueComment({
            owner: context.repo.owner,
            repo: context.repo.repo,
            comment_id: comment.id,
            content: 'eyes',
        });
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();
