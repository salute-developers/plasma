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
    getPullRequestList,
} from '../api';
import { deleteTheme } from '../utils';
import { THEME_BUILDER_PREFIX, Steps } from '../types';

interface RunProcessGithubPR {
    owner: string;
    repo: string;
}

interface CreatePR {
    commitMessage: string;
    prTitle: string;
    filesTree: Record<string, string>;
    themeName: string;
    defaultBranch: string;
    token?: string;
    branchNameFromParam?: string;
}

const saveMetaData = (octokit: Octokit, owner: string, repo: string) => <T>(fn: (...args: any[]) => Promise<T>) => (
    ...args: any[]
) => fn(octokit, owner, repo, ...args);

export const useRunGithubPRProcess = ({ owner, repo }: RunProcessGithubPR) => {
    const [step, setStep] = useState<Steps>(Steps.INIT);

    const onCreatePullRequest = useCallback(
        async ({
            commitMessage,
            prTitle,
            filesTree,
            token,
            themeName,
            branchNameFromParam,
            defaultBranch,
        }: CreatePR) => {
            const branchName = `${THEME_BUILDER_PREFIX}-${themeName}`;
            const octokit = new Octokit({
                auth: token,
            });

            const withMetaData = (step: Steps) => {
                setStep(step);
                return saveMetaData(octokit, owner, repo);
            };

            if (branchNameFromParam !== branchName) {
                await withMetaData(Steps.CREATE_BRANCH)(createBranch)(branchName, defaultBranch);
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
            if (branchNameFromParam !== branchName) {
                pullRequest = await withMetaData(Steps.CREATE_PULL_REQUEST)(createPullRequest)(
                    branchName,
                    prTitle,
                    defaultBranch,
                );
            } else {
                pullRequest = await withMetaData(Steps.READ_PULL_REQUEST)(getPullRequestList)(
                    defaultBranch,
                    branchName,
                );
            }

            setStep(Steps.DONE);
            deleteTheme(branchName);
            return pullRequest;
        },
        [owner, repo],
    );

    return [step, onCreatePullRequest] as const;
};
