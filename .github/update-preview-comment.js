const TITLE = 'Documentation preview deployed!';

const isWebsite = (line) => line.startsWith('website: ');
const isLanding = (line) => line.startsWith('landing: ');
const isStorybook = (line) => line.includes(' storybook: ');

const renderBody = (existingBody, section, lines) => {
    const existingLines = existingBody ? existingBody.split('\n').slice(2) : [];
    const documentationLines = section === 'documentation' ? lines : existingLines;
    const landingLines = section === 'landing' ? lines : existingLines;
    const website = documentationLines.find(isWebsite);
    const landing = landingLines.find(isLanding);
    const storybooks = documentationLines.filter(isStorybook);
    const otherLines = existingLines.filter(
        (line) => line && !isWebsite(line) && !isLanding(line) && !isStorybook(line),
    );

    return [TITLE, '', website, landing, ...storybooks, ...otherLines].filter((line) => line !== undefined).join('\n');
};

const updatePreviewComment = async ({ github, context, section, lines }) => {
    const { owner, repo } = context.repo;
    const issue_number = context.issue.number;
    const { viewer } = await github.graphql('query { viewer { login } }');
    const comments = await github.paginate(github.rest.issues.listComments, {
        owner,
        repo,
        issue_number,
        per_page: 100,
    });
    const comment = comments.find(({ body, user }) => user?.login === viewer.login && body?.startsWith(TITLE));
    const body = renderBody(comment?.body, section, lines);

    if (comment && body !== comment.body) {
        await github.rest.issues.updateComment({ owner, repo, comment_id: comment.id, body });
    } else if (!comment) {
        await github.rest.issues.createComment({ owner, repo, issue_number, body });
    }
};

module.exports = updatePreviewComment;
module.exports.renderBody = renderBody;
