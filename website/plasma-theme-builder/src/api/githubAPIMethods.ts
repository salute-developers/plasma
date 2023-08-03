import { Octokit } from 'octokit';

/*
100644 - файлы (blob), 
100755 - исполняемый файл (blob), 
040000 - подкаталог (tree), 
160000 - сабмодули (commit), 
120000 - большой двоичный объект
*/
type FileMode = '100644' | '100755' | '040000' | '160000' | '120000';

type FileType = 'tree' | 'blob' | 'commit';
export interface GitCreateBlobResponse {
    url?: string;
    sha?: string | null;
    path?: string;
    mode?: FileMode;
    type?: FileType;
}

export const getDefaultBranch = async (octokit: Octokit, owner: string, repo: string) => {
    const { data: refData } = await octokit.rest.repos.get({
        owner,
        repo,
    });

    return refData.default_branch;
};

export const getCurrentSha = async (octokit: Octokit, owner: string, repo: string, branchName: string) => {
    const { data: refData } = await octokit.rest.git.getRef({
        owner,
        repo,
        ref: `heads/${branchName}`,
    });

    const { data: commitData } = await octokit.rest.git.getCommit({
        owner,
        repo,
        commit_sha: refData.object.sha,
    });

    return {
        commitSha: refData.object.sha,
        treeSha: commitData.tree.sha,
    };
};

export const createBlob = async (octokit: Octokit, owner: string, repo: string, content: string) =>
    (
        await octokit.rest.git.createBlob({
            owner,
            repo,
            content,
            encoding: 'utf-8',
        })
    ).data;

export const createTree = async (
    octokit: Octokit,
    owner: string,
    repo: string,
    blobs: GitCreateBlobResponse[],
    paths: string[],
    parentTreeSha: string,
) => {
    const tree = blobs.map(
        ({ sha }, index): GitCreateBlobResponse => ({
            path: paths[index],
            mode: '100644',
            type: 'blob',
            sha,
        }),
    );

    const { data } = await octokit.rest.git.createTree({
        owner,
        repo,
        tree,
        base_tree: parentTreeSha,
    });

    return data;
};

export const createCommit = async (
    octokit: Octokit,
    owner: string,
    repo: string,
    message: string,
    currentTreeSha: string,
    currentCommitSha: string,
) =>
    (
        await octokit.rest.git.createCommit({
            owner,
            repo,
            message,
            tree: currentTreeSha,
            parents: [currentCommitSha],
        })
    ).data;

export const updateCommit = async (octokit: Octokit, owner: string, repo: string, branchName: string, sha: string) =>
    octokit.rest.git.updateRef({
        owner,
        repo,
        ref: `heads/${branchName}`,
        sha,
    });

export const createBranch = async (octokit: Octokit, owner: string, repo: string, branchName: string, base: string) => {
    const { commitSha } = await getCurrentSha(octokit, owner, repo, base);

    await octokit.rest.git.createRef({
        owner,
        repo,
        ref: `refs/heads/${branchName}`,
        sha: commitSha,
    });
};

export const getPullRequestList = async (
    octokit: Octokit,
    owner: string,
    repo: string,
    base: string,
    branchName: string,
) =>
    octokit.rest.pulls.list({
        owner,
        repo,
        state: 'open',
        base: base,
        head: `${owner}:${branchName}`,
    });

export const createPullRequest = async (
    octokit: Octokit,
    owner: string,
    repo: string,
    branchName: string,
    title: string,
    base: string,
) =>
    octokit.rest.pulls.create({
        owner,
        repo,
        base: `refs/heads/${base}`,
        head: `refs/heads/${branchName}`,
        title,
    });
