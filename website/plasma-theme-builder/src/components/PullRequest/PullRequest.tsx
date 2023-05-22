import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { nanoid } from 'nanoid';
import { BodyS, H5, Link, Progress } from '@salutejs/plasma-b2c';
import { tertiary } from '@salutejs/plasma-tokens-b2c';

import type { Theme as ThemeType } from '../../builder/types';
import { Steps, useRunGithubPRProcess } from '../../hooks/useRunGithubPRProcess';
import { getFilesTree } from '../utils';

const StyledPullRequest = styled.div`
    margin: 2rem 0;
    width: 70rem;
`;

const ProgressGroup = styled.div`
    padding: 1rem;

    border: 1px solid ${tertiary};
    border-radius: 0.5rem;
`;

const Status = styled(BodyS)`
    margin-bottom: 1rem;
`;

const Header = styled(H5)`
    margin-bottom: 1rem;
`;

const statusMap: Record<number, string> = {
    [Steps.INIT]: 'Подготовка...',
    [Steps.CREATE_BRANCH]: 'Создание новой ветки...',
    [Steps.LATEST_COMMIT]: 'Получение последнего коммита из master ветки...',
    [Steps.CREATE_FILES_BLOB]: 'Создание blob объекта из темы...',
    [Steps.CREATE_FILES_TREE]: 'Создание дерева объектов из темы...',
    [Steps.CREATE_COMMIT]: 'Создание нового коммита...',
    [Steps.SET_COMMIT_TO_BRANCH]: 'Установка коммита на ветку...',
    [Steps.CREATE_PULL_REQUEST]: 'Создание пул-реквеста...',
    [Steps.DONE]: 'Работа завершена',
};

interface PullRequestProps {
    data?: ThemeType;
    token?: string;
}

export const PullRequest = ({ data, token }: PullRequestProps) => {
    const [step, createPullRequest] = useRunGithubPRProcess({
        owner: 'salute-developers',
        repo: 'plasma',
        branchName: `theme-${nanoid()}`,
    });
    const [pullRequestLink, setPullRequestLink] = useState<string | undefined>('');

    useEffect(() => {
        if (step) {
            return;
        }

        const themeName = data?.config.name || 'default';
        const content = JSON.stringify(data, null, 4) + '\n';
        const filesTree = getFilesTree(content, themeName);

        const commitType = 'feat';
        const commitMessage = `Add theme ${themeName}`;
        const pullRequestHeader = `auto generate ${themeName} theme`;

        const getResult = async () => {
            const result = await createPullRequest({
                commitMessage: `${commitType}(plasma-tokens): ${commitMessage}`,
                prTitle: `${commitType}(plasma-tokens): ${pullRequestHeader}`,
                filesTree,
                token,
            });
            setPullRequestLink(result?.data.html_url);
        };

        getResult();
    }, [createPullRequest, data, step, token]);

    return (
        <StyledPullRequest>
            <ProgressGroup>
                <Header>Статус создания пул-реквеста в Github</Header>
                {pullRequestLink ? (
                    <Link href={pullRequestLink}>Ссылка на реквест</Link>
                ) : (
                    <>
                        <Status>{statusMap[step]}</Status>
                        <Progress value={100 / (8 / step)} status="accent" />
                    </>
                )}
            </ProgressGroup>
        </StyledPullRequest>
    );
};
