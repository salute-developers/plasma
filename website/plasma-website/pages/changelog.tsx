import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { ToastProvider } from '@salutejs/plasma-b2c';
import { useRouter } from 'next/router';
import styled, { createGlobalStyle } from 'styled-components';

import {
    PageHeader,
    ChangelogH1,
    StyledSectionHeader,
    VersionsList,
    StyledTextXS,
    ButtonToggle,
    NavigationControl,
    Page404,
    PageLoading,
} from '../components/changelog';
import { PlasmaCopyrightText } from '../components';
import { getFormattedDate, groupVersionsByMonth, currentYear } from '../utils';
import { ChangelogListContent } from '../components/changelog/ChangelogListContent';
import { packageNameMap } from '../utils/constants';

const GlobalStyle = createGlobalStyle`
    html, body {
        background-color: #171717 !important;
    }

    body {
        --grid-columns: 30;
        --grid-template-columns: repeat(var(--grid-columns), 28px);
        --column-gap: 8px;
        --margin-x: 64px;

        margin: 0 var(--margin-x) !important;
        height: 100vh;

        overflow: hidden;

        @media (min-width: 960px) and (max-width: 1199px) {
            --margin-x: 40px;
            --grid-columns: 24;
            --grid-template-columns: repeat(var(--grid-columns), 30px);
        }

        @media (min-width: 770px) and (max-width: 959px) {
            --margin-x: 28px;
            --grid-columns: 18;
            --grid-template-columns: repeat(var(--grid-columns), 32px);
        }

        @media (min-width: 560px) and (max-width: 769px) {
            --margin-x: 20px;
            --grid-columns: 12;
            --grid-template-columns: repeat(var(--grid-columns), 34px);
        }

        @media (max-width: 559px) {
            --margin-x: 20px;
            --grid-columns: 12;
            --grid-template-columns: repeat(var(--grid-columns), 34px);
        }
    }
`;

const ScrollablePageContainer = styled.div<{ hasVersionList?: boolean }>`
    margin-left: 6px;
    padding-top: 88px;

    max-height: 100vh;
    max-width: 1600px;

    overflow: auto;
    direction: rtl;
    box-sizing: border-box;
    scrollbar-gutter: stable;

    &::-webkit-scrollbar {
        width: 2px;
    }

    &::-webkit-scrollbar-track {
        margin-top: 120px;
        margin-bottom: 54px;

        background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background-color: rgba(255, 255, 255, 0.2);
        border-radius: 1px;
    }
`;

const PageGrid = styled.div`
    display: grid;
    grid-template-columns: var(--grid-template-columns);
    column-gap: var(--column-gap);
    direction: ltr;

    padding-top: 36px;
    padding-bottom: 68px;

    @media (max-width: 959px) {
        padding-bottom: 40px;
        min-height: calc(100vh - 88px - 36px - 40px);
        grid-template-rows: auto 1fr auto;
    }
`;

const SubgridContainer = styled.div<{ hasVersionList?: boolean }>`
    display: grid;
    grid-template-columns: subgrid;
    grid-column: 2 / -1;

    margin-left: -6px;

    direction: ltr;

    @media (max-width: 959px) {
        align-self: baseline;
    }

    @media (min-width: 770px) and (max-width: 959px) {
        grid-template-columns: ${({ hasVersionList = false }) =>
            hasVersionList ? 'repeat(5, 1fr) minmax(312px, 1fr)' : undefined};
    }

    @media (min-width: 560px) and (max-width: 769px) {
        grid-template-columns: ${({ hasVersionList = false }) =>
            hasVersionList ? 'repeat(5, 1fr) minmax(251px, 1fr)' : undefined};
    }

    @media (max-width: 559px) {
        grid-template-columns: ${({ hasVersionList = false }) =>
            hasVersionList ? 'repeat(5, 1fr) minmax(251px, 1fr)' : undefined};
    }
`;

const VersionListContainer = styled.div`
    grid-column: 1 / 6;
`;

const ContentContainer = styled.div<{ hasVersionList?: boolean }>`
    grid-column: ${({ hasVersionList = false }) => (hasVersionList ? '9 / -1' : '5 / -1')};

    @media (min-width: 960px) and (max-width: 1199px) {
        grid-column: ${({ hasVersionList = false }) => (hasVersionList ? '7 / -1' : '5 / -1')};
    }

    @media (min-width: 770px) and (max-width: 959px) {
        grid-column: ${({ hasVersionList = false }) => (hasVersionList ? '8 / -1' : '1 / -1')};
        min-width: 674px;
    }

    @media (min-width: 560px) and (max-width: 769px) {
        grid-column: ${({ hasVersionList = false }) => (hasVersionList ? '7 / -1' : '1 / -1')};
        min-width: 476px;
    }

    @media (max-width: 559px) {
        grid-column: ${({ hasVersionList = false }) => (hasVersionList ? '7 / -1' : '1 / -1')};
        min-width: 476px;
    }
`;

const PageControlsFixed = styled.div`
    position: fixed;
    left: var(--margin-x);

    display: grid;
    grid-template-columns: var(--grid-template-columns);
    column-gap: var(--column-gap);
    max-width: 1600px;

    direction: ltr;
`;

const PageControlsFixedTop = styled(PageControlsFixed)`
    @media (max-width: 959px) {
        display: inline-block;
        height: 16px;

        & > div {
            display: none;
        }
    }
`;

const PageControlsFixedBottom = styled(PageControlsFixed)`
    bottom: 0;

    padding-bottom: 33px;

    @media (max-width: 959px) {
        display: none;
    }
`;

export default function ChangelogPage() {
    const router = useRouter();

    const [changeLogData, setChangeLogData] = useState<{
        data: any;
        listVersionsByMonth: any;
        versions: string[];
    } | null>(null);
    const [loadingJSON, setLoadingJSON] = useState(false);
    const [hasVersionList, showVersionList] = useState(false);
    const [isScrolling, setIsScrolling] = useState(false);

    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const slugs = Object.keys(packageNameMap);

    // Мемоизируем функцию расчета соседних версий
    const calculateAdjacentVersions = useCallback((currentVersion: string, versions: string[]) => {
        const currentIndex = versions.findIndex((version) => version === currentVersion);
        const prevVersion = currentIndex > 0 ? versions[currentIndex - 1] : '';
        const nextVer = currentIndex < versions.length - 1 ? versions[currentIndex + 1] : '';
        return { prevVersion, nextVer };
    }, []);

    // Объединяем состояние navigation версий и вычисляем их через useMemo
    const navigationVersions = useMemo(() => {
        if (!router.isReady || !changeLogData) {
            return { previousVersion: '', nextVersion: '' };
        }

        const currentVersion = router.query.version as string;
        const { prevVersion, nextVer } = calculateAdjacentVersions(currentVersion, changeLogData.versions);

        return { previousVersion: prevVersion, nextVersion: nextVer };
    }, [router.isReady, router.query.version, changeLogData, calculateAdjacentVersions]);

    const handleVersionChange = useCallback(
        (selectedVersion: string) => {
            router.push(
                {
                    pathname: router.pathname,
                    query: {
                        ...router.query,
                        version: selectedVersion,
                    },
                },
                undefined,
                { shallow: true },
            );
        },
        [router],
    );

    // Загрузка данных
    useEffect(() => {
        if (!router.isReady) {
            return;
        }

        const lib = router.query.lib as string;

        if (!lib || !slugs.includes(lib)) {
            return;
        }

        const fetchData = async () => {
            try {
                setLoadingJSON(true);

                const basePath = process.env.BASE_PATH || '';
                const url = `${basePath}/data/${lib}.json`;

                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error(`Файл ${lib}.json не найден (${response.status})`);
                }

                const changelog = await response.json();

                const listVersionsByMonth = groupVersionsByMonth(changelog);

                setChangeLogData({
                    data: changelog,
                    listVersionsByMonth,
                    versions: Object.keys(changelog),
                });
            } catch (err) {
                console.error('Ошибка загрузки:', err);
            } finally {
                setLoadingJSON(false);
            }
        };

        fetchData();
    }, [router.isReady, router.query.lib]);

    useEffect(() => {
        if (!router.isReady || !changeLogData) {
            return;
        }

        const scrollContainer = scrollContainerRef.current;

        if (!scrollContainer) {
            return;
        }

        const handleScroll = () => {
            if (!scrollContainerRef || !scrollContainerRef.current) {
                return;
            }

            setIsScrolling(scrollContainerRef.current.scrollTop !== 0);
        };

        scrollContainer.addEventListener('scroll', handleScroll);

        return () => {
            scrollContainer.removeEventListener('scroll', handleScroll);
        };
    }, [router.isReady, changeLogData, loadingJSON]);

    // Мемоизируем обработчики навигации
    const handlePreviousVersion = useCallback(() => {
        if (!changeLogData || !navigationVersions.previousVersion) return;
        handleVersionChange(navigationVersions.previousVersion);
    }, [changeLogData, navigationVersions.previousVersion, handleVersionChange]);

    const handleNextVersion = useCallback(() => {
        if (!changeLogData || !navigationVersions.nextVersion) return;
        handleVersionChange(navigationVersions.nextVersion);
    }, [changeLogData, navigationVersions.nextVersion, handleVersionChange]);

    const onScrollTop = useCallback(() => {
        const scrollContainer = scrollContainerRef.current;

        if (!scrollContainer) {
            return;
        }

        scrollContainerRef?.current?.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, []);

    if (!router.isReady || !changeLogData || loadingJSON) {
        return <PageLoading />;
    }

    const version = router.query?.version as string;
    const packageName = router.query?.lib as keyof typeof packageNameMap;

    if (!changeLogData.data[version]) {
        return <Page404 />;
    }

    const { core = [], lib = [] } = changeLogData.data[version];
    const releaseDate = getFormattedDate({ date: changeLogData.data[version].date });

    return (
        <ToastProvider>
            <GlobalStyle />
            <PageHeader
                isScrolling={isScrolling}
                onScrollTop={onScrollTop}
                lib={packageNameMap[packageName]}
                version={version}
            />
            <ScrollablePageContainer
                className="scrollable-page-container"
                hasVersionList={hasVersionList}
                ref={scrollContainerRef}
            >
                <PageControlsFixedTop>
                    <ButtonToggle onClick={showVersionList} />
                    {navigationVersions.previousVersion && !hasVersionList && (
                        <NavigationControl
                            onChange={() => handlePreviousVersion()}
                            version={navigationVersions.previousVersion}
                        />
                    )}
                </PageControlsFixedTop>
                <PageGrid>
                    {navigationVersions.previousVersion && !hasVersionList && (
                        <NavigationControl
                            className="mobile margin-top"
                            onChange={() => handlePreviousVersion()}
                            version={navigationVersions.previousVersion}
                        />
                    )}
                    <SubgridContainer hasVersionList={hasVersionList}>
                        <VersionListContainer>
                            {hasVersionList && (
                                <VersionsList
                                    currentVersion={version}
                                    onClick={handleVersionChange}
                                    list={changeLogData.listVersionsByMonth}
                                />
                            )}
                        </VersionListContainer>

                        <ContentContainer hasVersionList={hasVersionList}>
                            <StyledSectionHeader>
                                <ChangelogH1>{version}</ChangelogH1>
                                <StyledTextXS>{releaseDate}</StyledTextXS>
                            </StyledSectionHeader>

                            {!!lib.length && (
                                <ChangelogListContent
                                    list={lib}
                                    heading="Обновления в библиотеке"
                                    releaseDate={releaseDate || ''}
                                />
                            )}

                            {!!core.length && (
                                <ChangelogListContent
                                    list={core}
                                    heading="Функциональные изменения в компонентах"
                                    releaseDate={releaseDate || ''}
                                />
                            )}
                        </ContentContainer>
                    </SubgridContainer>
                    {navigationVersions.nextVersion && !hasVersionList && (
                        <NavigationControl
                            className="mobile"
                            type="next"
                            onChange={() => handleNextVersion()}
                            version={navigationVersions.nextVersion}
                        />
                    )}
                </PageGrid>
                <PageControlsFixedBottom>
                    {navigationVersions.nextVersion && !hasVersionList && (
                        <NavigationControl
                            type="next"
                            onChange={() => handleNextVersion()}
                            version={navigationVersions.nextVersion}
                        />
                    )}
                </PageControlsFixedBottom>
            </ScrollablePageContainer>
            <PlasmaCopyrightText>{`©${currentYear} СалютДевайсы`}</PlasmaCopyrightText>
        </ToastProvider>
    );
}
