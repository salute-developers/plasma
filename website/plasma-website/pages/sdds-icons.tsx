import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import styled, { css } from 'styled-components';
import { BodyXS, H4, LineSkeleton, ToastProvider } from '@salutejs/plasma-b2c';
import { searchIcons } from '@salutejs/sdds-mcp/icon-search';
import type { IconManifest } from '@salutejs/sdds-mcp/icon-search';

import { Footer, Header, IconFilterMenu, Main } from '../components/roster';
import { multipleMediaQuery } from '../mixins';
import { StyledActionIcon } from '../components/roster/StyledActionIcon';

const manifestUrl = 'https://plasma.sberdevices.ru/mcp/sdds-icons/manifest.json';

type ManifestState = { status: 'loading' } | { status: 'loaded'; manifest: IconManifest } | { status: 'error' };

const StyledSection = styled.div`
    --page-padding-y: 4rem;

    --common-transition-config: 120ms ease-in;

    --color-transition: color var(--common-transition-config);
    --opacity-transition: opacity var(--common-transition-config);
    --box-shadow-transition: box-shadow var(--common-transition-config);
    --background-color-transition: background-color var(--common-transition-config);
    --border-radius-transition: border-radius var(--common-transition-config);

    position: relative;
    display: grid;
    grid-template-rows: auto 1fr auto;
    grid-template-columns: 100%;
    min-height: 100vh;

    ${multipleMediaQuery(['M'])(css`
        --page-padding-y: 3.5rem;
    `)}

    ${multipleMediaQuery(['S'])(css`
        --page-padding-y: 1rem;
    `)}
`;

const StyledIconBackWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 1.375rem;
    z-index: 1;
    padding: 2rem 0;

    min-height: calc(100% - 7.125rem);
    max-width: 1.25rem;

    ${multipleMediaQuery(['S'])(css`
        left: 0.5rem;
    `)}
`;

const StyledFilterWrapper = styled.div`
    position: absolute;
    top: 0;
    right: 1.375rem;
    z-index: 1;

    min-height: calc(100% - 7.125rem);
    max-width: 1.25rem;

    ${multipleMediaQuery(['S'])(css`
        right: 0.5rem;
    `)}
`;

const StyledIconNavigation = styled.button`
    position: sticky;
    top: 0.75rem;

    width: 1.25rem;
    height: 1.25rem;
    padding: 0;

    color: inherit;
    background: transparent;
    border: 0;

    ${StyledActionIcon};
`;

const StyledMain = styled(Main)`
    max-width: 100%;
`;

const StyledSearchSection = styled.section`
    padding-top: 5rem;
    padding-bottom: 7.5rem;

    ${multipleMediaQuery(['M'])(css`
        padding-top: 3rem;
        padding-bottom: 4rem;
    `)}

    ${multipleMediaQuery(['S'])(css`
        padding-top: 1rem;
        padding-bottom: 2.5rem;
    `)}
`;

const StyledSearchInput = styled.input`
    width: 100%;
    max-width: calc(100vw - var(--page-padding-y) * 2);
    height: 7.125rem;
    padding: 0;

    font-family: var(--plasma-typo-h2-font-family);
    font-size: 5.5rem;
    line-height: 7.125rem;
    color: rgba(255, 255, 255, 0.96);

    background-color: transparent;
    border: none;
    outline: none;

    &::placeholder {
        color: rgba(255, 255, 255, 0.12);
        opacity: 1;
    }

    ${multipleMediaQuery(['M'])(css`
        height: 4rem;
        font-size: 4rem;
        line-height: 4rem;
    `)}

    ${multipleMediaQuery(['S'])(css`
        height: 5rem;
        font-size: 3rem;
        line-height: 3rem;
    `)}
`;

const StyledSearchHint = styled(BodyXS)`
    display: block;
    margin-top: 2rem;
    color: rgba(255, 255, 255, 0.56);
`;

const StyledManifestState = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2.5rem;

    background: rgba(255, 255, 255, 0.04);
    border: 0.063rem solid rgba(255, 255, 255, 0.12);
    border-radius: 1.5rem;

    ${multipleMediaQuery(['S'])(css`
        padding: 1.5rem;
        border-radius: 1rem;
    `)}
`;

const StyledStateTitle = styled(H4)`
    color: rgba(255, 255, 255, 0.96);
`;

const StyledStateText = styled(BodyXS)`
    max-width: 40rem;
    color: rgba(255, 255, 255, 0.56);
`;

const StyledLineSkeleton = styled(LineSkeleton)`
    width: 14rem;
`;

const SddsIconsList = dynamic(
    () => import('../components/sdds-icons/SddsIconsList').then((module) => module.SddsIconsList),
    {
        loading: () => (
            <StyledManifestState>
                <StyledStateTitle>Загружаем иконки</StyledStateTitle>
                <StyledLineSkeleton size="body1" />
            </StyledManifestState>
        ),
        ssr: false,
    },
);

const isIconManifest = (value: unknown): value is IconManifest => {
    if (!value || typeof value !== 'object') {
        return false;
    }

    const manifest = value as Partial<IconManifest>;

    return (
        typeof manifest.schemaVersion === 'number' &&
        typeof manifest.version === 'string' &&
        typeof manifest.builtAt === 'string' &&
        Array.isArray(manifest.icons)
    );
};

function SddsIconsPage() {
    const router = useRouter();
    const sectionRef = useRef<HTMLDivElement>(null);
    const [manifestState, setManifestState] = useState<ManifestState>({ status: 'loading' });
    const [searchQuery, setSearchQuery] = useState('');

    const loadManifest = useCallback(async (signal?: AbortSignal) => {
        setManifestState({ status: 'loading' });

        try {
            const response = await fetch(manifestUrl, { signal });

            if (!response.ok) {
                throw new Error(`Cannot load SDDS Icons manifest: ${response.status}`);
            }

            const manifest: unknown = await response.json();

            if (!isIconManifest(manifest)) {
                throw new Error('SDDS Icons manifest has an unsupported format');
            }

            setManifestState({ status: 'loaded', manifest });
        } catch (error) {
            if (error instanceof DOMException && error.name === 'AbortError') {
                return;
            }

            setManifestState({ status: 'error' });
        }
    }, []);

    useEffect(() => {
        const controller = new AbortController();

        loadManifest(controller.signal);

        return () => controller.abort();
    }, [loadManifest]);

    const visibleIcons = useMemo(() => {
        if (manifestState.status !== 'loaded') {
            return [];
        }

        if (!searchQuery.trim()) {
            return manifestState.manifest.icons;
        }

        return searchIcons(manifestState.manifest, searchQuery);
    }, [manifestState, searchQuery]);

    return (
        <ToastProvider>
            <Head>
                <title>SDDS Icons</title>
            </Head>
            <StyledSection ref={sectionRef}>
                <StyledIconBackWrapper>
                    <StyledIconNavigation
                        aria-label="Вернуться на главную"
                        onClick={() => router.push('/')}
                        type="button"
                    >
                        ←
                    </StyledIconNavigation>
                </StyledIconBackWrapper>
                <StyledFilterWrapper>
                    <IconFilterMenu setInputFocus={() => undefined} showSearch={false} />
                </StyledFilterWrapper>
                <Header showMeta={false} title="SDDS Icons" />
                <StyledMain>
                    <StyledSearchSection>
                        <StyledSearchInput
                            aria-label="Поиск по SDDS Icons"
                            disabled={manifestState.status !== 'loaded'}
                            onChange={(event) => setSearchQuery(event.target.value)}
                            placeholder="Знаю, что ищу"
                            type="search"
                            value={searchQuery}
                        />
                        <StyledSearchHint>
                            Поиск по названию, категории и тегам. Для запроса показываются до 20 наиболее подходящих
                            иконок.
                        </StyledSearchHint>
                    </StyledSearchSection>

                    {manifestState.status === 'loading' && (
                        <StyledManifestState>
                            <StyledStateTitle>Загружаем каталог</StyledStateTitle>
                            <StyledLineSkeleton size="body1" />
                        </StyledManifestState>
                    )}

                    {manifestState.status === 'error' && (
                        <StyledManifestState>
                            <StyledStateTitle>Manifest пока недоступен</StyledStateTitle>
                            <StyledStateText>Не удалось загрузить локальный каталог SDDS Icons.</StyledStateText>
                        </StyledManifestState>
                    )}

                    {manifestState.status === 'loaded' && visibleIcons.length > 0 && (
                        <SddsIconsList icons={visibleIcons} pageRef={sectionRef} />
                    )}

                    {manifestState.status === 'loaded' && visibleIcons.length === 0 && (
                        <StyledManifestState>
                            <StyledStateTitle>Ничего не найдено</StyledStateTitle>
                            <StyledStateText>Попробуйте изменить поисковый запрос.</StyledStateText>
                        </StyledManifestState>
                    )}
                </StyledMain>
                <Footer />
            </StyledSection>
        </ToastProvider>
    );
}

export default dynamic(() => Promise.resolve(SddsIconsPage), { ssr: false });
