import { Octokit } from 'octokit';

export const getFileSource = async (
    octokit: Octokit | undefined,
    owner: string,
    repo: string,
    path: string,
    branchName?: string,
    token?: string,
    type: 'raw' | 'full' = 'raw',
) => {
    const octokitInstance =
        octokit ??
        new Octokit({
            auth: token,
        });

    try {
        const result = await octokitInstance.rest.repos.getContent({
            headers: {
                accept: `application/vnd.github.v3.${type}`,
            },
            owner,
            repo,
            path,
            ref: branchName,
        });

        return result.data;
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
    }
};
