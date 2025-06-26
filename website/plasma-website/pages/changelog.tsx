import React, { useState, useEffect, useRef } from 'react';
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
} from '../components/changelog';
import { PlasmaCopyrightText } from '../components';
import { getFormattedDate, groupVersionsByMonth, currentYear } from '../utils';
import { ChangelogListContent } from '../components/changelog/ChangelogListContent';
import { packageNameMap } from '../utils/constants';

const GlobalStyle = createGlobalStyle`
    body {
        overflow: hidden;
        height: 100vh;

        background-color: #171717 !important;
    }
`;

const ScrollablePageContainer = styled.div`
    --grid-template-columns: repeat(30, 1fr);
    --margin-x: 64px;

    padding-top: 88px;
    margin: 0 var(--margin-x) 0 calc(var(--margin-x) - 2px);

    height: 100vh;
    max-width: 1600px;

    overflow-y: scroll;
    direction: rtl;
    box-sizing: border-box;

    &::-webkit-scrollbar {
        width: 2px;
        height: 16px;
    }

    &::-webkit-scrollbar-track {
        background-color: transparent;
        margin-top: calc(88px + 32px);
        margin-bottom: 52px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: rgba(255, 255, 255, 0.2);
        border-radius: 1px;
    }

    @media (min-width: 960px) and (max-width: 1199px) {
        --margin-x: 40px;
        --grid-template-columns: repeat(24, 1fr);
    }

    @media (min-width: 770px) and (max-width: 959px) {
        --margin-x: 28px;
        --grid-template-columns: repeat(18, minmax(36px, 1fr));

        margin-bottom: 40px;
    }

    @media (min-width: 560px) and (max-width: 769px) {
        --margin-x: 20px;
        --grid-template-columns: repeat(12, minmax(36px, 1fr));

        margin-bottom: 40px;
    }

    @media (max-width: 559px) {
        --margin-x: 16px;
        --grid-template-columns: repeat(12, minmax(36px, 1fr));

        margin: 0 var(--margin-x);
        margin-bottom: 40px;
    }
`;

const PageGrid = styled.div`
    display: grid;
    grid-template-columns: var(--grid-template-columns);
    column-gap: 8px;
    direction: ltr;
`;

const SubgridContainer = styled.div<{ hasVersionList?: boolean }>`
    display: grid;
    grid-template-columns: subgrid;
    grid-column: 2 / -1;
    grid-row: 2;

    direction: ltr;

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
    grid-column: 1 / 4;
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

const PageControlsContainer = styled.div`
    display: grid;
    grid-template-columns: subgrid;
    grid-column: 1/-1;

    max-width: 1600px;
    height: 16px;
    padding-bottom: 20px;
    direction: ltr;

    &.sticky {
        position: sticky;
    }

    &.mobile {
        display: none;
    }

    @media (max-width: 959px) {
        &.mobile {
            display: grid;
        }

        &.sticky > .hidde {
            display: none;
        }
    }
`;

const PageControlsContainerTop = styled(PageControlsContainer)`
    top: 0;

    grid-row: 1;

    @media (max-width: 959px) {
        &.sticky {
            grid-column: 1/1;
        }
    }
`;

const PageControlsContainerBottom = styled(PageControlsContainer)`
    bottom: 0;

    grid-row: 3;

    @media (max-width: 959px) {
        &.sticky {
            position: relative;
        }
    }
`;

export default function ChangelogPage() {
    const router = useRouter();

    const [changeLogData, setChangeLogData] = useState<{
        data: any;
        listVersionsByMonth: any;
        versions: string[];
    } | null>(null);

    const [previousVersion, setPreviousVersion] = useState('');
    const [nextVersion, setNextVersion] = useState('');
    const [hasVersionList, showVersionList] = useState(false);
    const [isScrolling, setIsScrolling] = useState(false);

    const slugs = Object.keys(packageNameMap);

    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const handleVersionChange = (selectedVersion: string) => {
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
    };

    const calculateAdjacentVersions = (currentVersion: string, versions: string[]) => {
        const currentIndex = versions.findIndex((version) => version === currentVersion);

        const prevVersion = currentIndex > 0 ? versions[currentIndex - 1] : '';
        const nextVer = currentIndex < versions.length - 1 ? versions[currentIndex + 1] : '';

        return { prevVersion, nextVer };
    };

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
            }
        };

        fetchData();
    }, [router.isReady, router.query.lib, router.query.version]);

    useEffect(() => {
        if (!router.isReady || !changeLogData) {
            return;
        }

        const currentVersion = router.query.version as string;

        const { prevVersion, nextVer } = calculateAdjacentVersions(currentVersion, changeLogData.versions);

        setPreviousVersion(prevVersion);
        setNextVersion(nextVer);
    }, [router.isReady, changeLogData]);

    useEffect(() => {
        if (!router.isReady) {
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
    }, [router.isReady, changeLogData]);

    if (!router.isReady || !changeLogData) {
        return <Page404 />;
    }

    const version = router.query?.version as string;
    const packageName = router.query?.lib as keyof typeof packageNameMap;

    if (!changeLogData.data[version]) {
        return <Page404 />;
    }

    const { core = [], lib = [] } = changeLogData.data[version];

    const releaseDate = getFormattedDate({ date: changeLogData.data[version].date });

    const handlePreviousVersion = (data: string) => {
        const currentIndex = changeLogData.versions.findIndex((version) => {
            return version === data;
        });

        handleVersionChange(changeLogData.versions[currentIndex]);

        const previousVersionCalc = changeLogData.versions[currentIndex - 1];

        if (currentIndex >= 0 && previousVersionCalc) {
            // Пересчитываем соседние версии после изменения
            const { prevVersion, nextVer } = calculateAdjacentVersions(previousVersionCalc, changeLogData.versions);

            setPreviousVersion(prevVersion);
            setNextVersion(nextVer);
        }
    };

    const handleNextVersion = (data: string) => {
        const currentIndex = changeLogData.versions.findIndex((version) => {
            return version === data;
        });

        const nextVersionCalc = changeLogData.versions[currentIndex + 1];

        // INFO: Текущая версия
        handleVersionChange(changeLogData.versions[currentIndex]);

        if (currentIndex <= changeLogData.versions.length - 1 && nextVersionCalc) {
            // Пересчитываем соседние версии после изменения
            const { prevVersion, nextVer } = calculateAdjacentVersions(nextVersionCalc, changeLogData.versions);

            setPreviousVersion(prevVersion);
            setNextVersion(nextVer);
        }
    };

    const onScrollTop = () => {
        const scrollContainer = scrollContainerRef.current;

        if (!scrollContainer) {
            return;
        }

        scrollContainerRef?.current?.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <ToastProvider>
            <GlobalStyle />
            <PageHeader
                isScrolling={isScrolling}
                onScrollTop={onScrollTop}
                lib={packageNameMap[packageName]}
                version={version}
            />
            <ScrollablePageContainer className="scrollable-page-container" ref={scrollContainerRef}>
                <PageGrid>
                    <PageControlsContainerTop className="sticky">
                        <ButtonToggle onClick={showVersionList} />
                        {previousVersion && !hasVersionList && (
                            <NavigationControl
                                className="hidde"
                                onChange={handlePreviousVersion}
                                version={previousVersion}
                            />
                        )}
                    </PageControlsContainerTop>
                    <PageControlsContainerTop className="mobile">
                        {previousVersion && !hasVersionList && (
                            <NavigationControl onChange={handlePreviousVersion} version={previousVersion} />
                        )}
                    </PageControlsContainerTop>
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
                                    heading="Функциональные изменения в компонентах"
                                    releaseDate={releaseDate || ''}
                                />
                            )}
                        </ContentContainer>
                    </SubgridContainer>
                    <PageControlsContainerBottom className="sticky">
                        {nextVersion && !hasVersionList && (
                            <NavigationControl type="next" onChange={handleNextVersion} version={nextVersion} />
                        )}
                    </PageControlsContainerBottom>
                </PageGrid>
            </ScrollablePageContainer>
            <PlasmaCopyrightText>{`©${currentYear} СалютДевайсы`}</PlasmaCopyrightText>
        </ToastProvider>
    );
}
