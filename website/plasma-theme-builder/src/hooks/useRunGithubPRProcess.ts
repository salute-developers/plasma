import { Octokit } from 'octokit';
import { useCallback, useState } from 'react';

import {
    createBlob,
    createBranch,
    createCommit,
    createPullRequest,
    createTree,
    getCurrentSha,
    updateCommit,
} from '../api';

interface RunProcessGithubPR {
    owner: string;
    repo: string;
    branchName: string;
}

interface CreatePR {
    commitMessage: string;
    prTitle: string;
    filesTree: Record<string, string>;
    token?: string;
}

export const enum Steps {
    INIT = 0,
    CREATE_BRANCH = 1,
    LATEST_COMMIT = 2,
    CREATE_FILES_BLOB = 3,
    CREATE_FILES_TREE = 4,
    CREATE_COMMIT = 5,
    SET_COMMIT_TO_BRANCH = 6,
    CREATE_PULL_REQUEST = 7,
    DONE = 8,
}

const saveMetaData = (octokit: Octokit, owner: string, repo: string) => <T>(fn: (...args: any[]) => Promise<T>) => (
    ...args: any[]
) => fn(octokit, owner, repo, ...args);

export const sleep = async (seconds: number) => new Promise((r) => setTimeout(r, seconds));

export const useRunGithubPRProcess = ({ owner, repo, branchName }: RunProcessGithubPR) => {
    const [step, setStep] = useState<Steps>(Steps.INIT);

    const onCreatePullRequest = useCallback(
        async ({ commitMessage, prTitle, filesTree, token }: CreatePR) => {
            const octokit = new Octokit({
                auth: token,
            });

            const withMetaData = (step: Steps) => {
                setStep(step);
                return saveMetaData(octokit, owner, repo);
            };

            if (branchName !== 'master') {
                await withMetaData(Steps.CREATE_BRANCH)(createBranch)(branchName);
            }

            const { commitSha, treeSha } = await withMetaData(Steps.LATEST_COMMIT)(getCurrentSha)(branchName);

            const filesSource = Object.values(filesTree);
            const filesBlobs = await Promise.all(filesSource.map(withMetaData(Steps.CREATE_FILES_BLOB)(createBlob)));

            const filesPaths = Object.keys(filesTree);
            const { sha: newTreeSha } = await withMetaData(Steps.CREATE_FILES_TREE)(createTree)(
                filesBlobs,
                filesPaths,
                treeSha,
            );

            const { sha: newCommitSha } = await withMetaData(Steps.CREATE_COMMIT)(createCommit)(
                commitMessage,
                newTreeSha,
                commitSha,
            );

            await withMetaData(Steps.SET_COMMIT_TO_BRANCH)(updateCommit)(branchName, newCommitSha);

            let pullRequest;
            if (branchName !== 'master') {
                pullRequest = await withMetaData(Steps.CREATE_PULL_REQUEST)(createPullRequest)(branchName, prTitle);
            }

            setStep(Steps.DONE);
            return pullRequest;
        },
        [branchName, owner, repo],
    );

    return [step, onCreatePullRequest] as const;
};
