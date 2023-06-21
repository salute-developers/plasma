import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
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
    [Steps.GET_DEFAULT_BRANCH]: 'Создание базовой ветки...',
    [Steps.CREATE_BRANCH]: 'Создание новой ветки...',
    [Steps.LATEST_COMMIT]: 'Получение последнего коммита из master ветки...',
    [Steps.CREATE_FILES_BLOB]: 'Создание blob объекта из темы...',
    [Steps.CREATE_FILES_TREE]: 'Создание дерева объектов из темы...',
    [Steps.CREATE_COMMIT]: 'Создание нового коммита...',
    [Steps.SET_COMMIT_TO_BRANCH]: 'Установка коммита на ветку...',
    [Steps.CREATE_PULL_REQUEST]: 'Создание пул-реквеста...',
    [Steps.READ_PULL_REQUEST]: 'Чтение пул-реквеста...',
    [Steps.DONE]: 'Работа завершена',
};

interface PullRequestProps {
    data?: ThemeType;
    token?: string;
    branchNameFromParam?: string;
}

export const PullRequest = ({ data, token, branchNameFromParam }: PullRequestProps) => {
    const [step, createPullRequest] = useRunGithubPRProcess({
        owner: 'salute-developers',
        repo: 'plasma',
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
                prTitle: `${commitType}(plasma-tokens): ${pullRequestHeader}`,
                commitMessage: `${commitType}(plasma-tokens): ${commitMessage}`,
                filesTree,
                token,
                themeName,
                branchNameFromParam,
            });

            const link = (Array.isArray(result?.data) ? result?.data[0] : result?.data).html_url;

            setPullRequestLink(link);
        };

        getResult();
    }, [createPullRequest, branchNameFromParam, data, step, token]);

    return (
        <StyledPullRequest>
            <ProgressGroup>
                <Header>Статус работы с пул-реквестом в Github</Header>
                {pullRequestLink ? (
                    <Link target='_blank' href={pullRequestLink}>Ссылка на реквест</Link>
                ) : (
                    <>
                        <Status>{statusMap[step]}</Status>
                        <Progress value={Math.round(100 / (9 / step))} status="accent" />
                    </>
                )}
            </ProgressGroup>
        </StyledPullRequest>
    );
};
