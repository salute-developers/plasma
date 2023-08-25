import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BodyS, H5, Link, Progress } from '@salutejs/plasma-b2c';
import { tertiary } from '@salutejs/plasma-tokens-b2c';

import { getDefaultBranch } from '../../api';
import { useRunGithubPRProcess } from '../../hooks';
import { Steps } from '../../types';
import type { Theme as ThemeType } from '../../types';
import { getBrands, getFilesTree, getThemes, getThemesTokenSet } from '../../utils';

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

const Links = styled.div`
    margin-top: 2rem;

    display: flex;
    gap: 1rem;
    flex-direction: column;
`;

const LinkWrapper = styled.div``;

const getFilesPath = (name: string) => ({
    theme: `packages/plasma-tokens/data/themes/${name}.json`,
});

const getFilesTree = (themeContent: string, name: string) => ({
    [getFilesPath(name).theme]: themeContent,
});

const statusMap: Record<number, string> = {
    [Steps.INIT]: 'Подготовка...',
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
    const owner = 'salute-developers';
    const repo = 'plasma';

    const [step, createPullRequest] = useRunGithubPRProcess({ owner, repo });
    const [pullRequestLink, setPullRequestLink] = useState<string | undefined>('');
    const [continueEditLink, setContinueEditLink] = useState<string | undefined>('');

    useEffect(() => {
        if (step) {
            return;
        }

        const themeName = data?.config.name || 'default';
        const commitType = 'feat';
        const commitMessage = `Add theme ${themeName}`;
        const pullRequestHeader = `auto generate ${themeName} theme`;

        const getContentForCommit = async (defaultBranch: string) => {
            const scheme = JSON.stringify(data, null, 4) + '\n';
            const themesTokensSet = getThemesTokenSet(scheme);
            const themes = await getThemes(themesTokensSet, owner, repo, defaultBranch);
            const brands = getBrands(themesTokensSet, themeName);

            return [scheme, ...themes, brands];
        };

        const getResult = async () => {
            const defaultBranch = await getDefaultBranch(undefined, owner, repo, token);

            const content = await getContentForCommit(defaultBranch);
            const filesTree = getFilesTree(content, themeName);

            const result = await createPullRequest({
                prTitle: `${commitType}(plasma-tokens): ${pullRequestHeader}`,
                commitMessage: `${commitType}(plasma-tokens): ${commitMessage}`,
                filesTree,
                token,
                themeName,
                defaultBranch,
                branchNameFromParam,
            });

            const link = (Array.isArray(result?.data) ? result?.data[0] : result?.data).html_url;

            setPullRequestLink(link);
            setContinueEditLink(`?theme=${themeName}&branch=${branchNameFromParam}`);
        };

        getResult();
    }, [createPullRequest, branchNameFromParam, data, step, token]);

    return (
        <StyledPullRequest>
            <ProgressGroup>
                <Header>Статус работы с пул-реквестом в Github</Header>
                {pullRequestLink ? (
                    <Links>
                        <LinkWrapper>
                            <Link href={continueEditLink}>Продолжить редактировать тему</Link>
                        </LinkWrapper>
                        <LinkWrapper>
                            <Link target="_blank" href={pullRequestLink}>
                                Ссылка на пул-реквест в GitHub
                            </Link>
                        </LinkWrapper>
                    </Links>
                ) : (
                    <>
                        <Status>{statusMap[step]}</Status>
                        <Progress value={Math.round(100 / (8 / step))} status="accent" />
                    </>
                )}
            </ProgressGroup>
        </StyledPullRequest>
    );
};
