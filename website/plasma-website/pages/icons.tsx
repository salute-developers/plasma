import React, { useState, useCallback, useEffect } from 'react';
import type { FormEvent } from 'react';
import { useRouter } from 'next/router';
import styled, { css } from 'styled-components';
import { ToastProvider } from '@salutejs/plasma-b2c';
import Head from 'next/head';
import { IconArrowLeft, IconArrowUp } from '@salutejs/plasma-icons';

import { multipleMediaQuery } from '../mixins';
import { Header, Main, SearchForm, IconsList, Footer, IconFilterMenu } from '../components/roster';
import { StyledActionIcon } from '../components/roster/StyledActionIcon';

const StyledSection = styled.section`
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

const StyledIconBackWrapper = styled(StyledFilterWrapper)`
    right: auto;
    left: 1.375rem;

    ${multipleMediaQuery(['S'])(css`
        left: 0.5rem;
    `)}
`;

const StyledIconNavigation = styled.span`
    position: sticky;
    top: 2.125rem;
    left: 1.375rem;

    ${StyledActionIcon};
`;

const StyledMain = styled(Main)`
    max-width: 100%;
`;

export default function Home() {
    const [searchQuery, setSearchQuery] = useState('');
    const [isScrolling, setIsScrolling] = useState(false);

    const router = useRouter();

    const onSearchInput = useCallback(
        (input: FormEvent<HTMLInputElement> | string) => {
            if (typeof input === 'string') {
                setSearchQuery(input);
            } else {
                setSearchQuery((input.currentTarget as HTMLInputElement).value);
            }
        },
        [setSearchQuery],
    );

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolling(window.scrollY !== 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <ToastProvider>
            <Head>
                <title>Plasma Icons</title>
            </Head>
            <StyledSection>
                <StyledIconBackWrapper>
                    {!isScrolling && (
                        <StyledIconNavigation onClick={() => router.push('/')}>
                            <IconArrowLeft size="xs" color="inherit" />
                        </StyledIconNavigation>
                    )}
                    {isScrolling && (
                        <StyledIconNavigation onClick={scrollToTop}>
                            <IconArrowUp size="xs" color="inherit" />
                        </StyledIconNavigation>
                    )}
                </StyledIconBackWrapper>

                <StyledFilterWrapper>
                    <IconFilterMenu />
                </StyledFilterWrapper>
                <Header />
                <StyledMain>
                    <SearchForm searchQuery={searchQuery} onInput={onSearchInput} />
                    <IconsList searchQuery={searchQuery} />
                </StyledMain>
                <Footer />
            </StyledSection>
        </ToastProvider>
    );
}
