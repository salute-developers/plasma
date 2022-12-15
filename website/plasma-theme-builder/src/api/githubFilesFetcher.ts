import { Octokit } from 'octokit';

const isString = (value: unknown): value is string => typeof value === 'string';

export const getFilesSource = async (owner: string, repo: string, path: string, token?: string): Promise<string> => {
    const octokit = new Octokit({
        auth: token,
    });

    const getFileSource = async (path: string) => {
        try {
            const result = await octokit.rest.repos.getContent({
                headers: {
                    accept: 'application/vnd.github.v3.raw',
                },
                owner,
                repo,
                path,
            });

            return result.data;
        } catch (error) {
            // eslint-disable-next-line no-console
            console.error(error);
        }
    };

    const filesSource = await getFileSource(path);

    return isString(filesSource) ? filesSource : '';
};

export const getThemeData = async (themeName: string, owner = 'salute-developers', repo = 'plasma', token?: string) =>
    getFilesSource(owner, repo, `packages/plasma-tokens/data/themes/${themeName}.json`, token);
