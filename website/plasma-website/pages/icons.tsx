import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { ToastProvider } from '@salutejs/plasma-b2c';
import Head from 'next/head';

import { Header, Main, SearchForm, IconsList, Footer } from '../components/roster';

const StyledSection = styled.section`
    display: grid;
    grid-template-rows: auto 1fr auto;
    grid-template-columns: 100%;

    min-height: 100vh;
`;

const StyledMain = styled(Main)`
    --common-transition-config: 120ms ease-in;

    --color-transition: color var(--common-transition-config);
    --opacity-transition: opacity var(--common-transition-config);
    --box-shadow-transition: box-shadow var(--common-transition-config);
    --background-color-transition: background-color var(--common-transition-config);
    --border-radius-transition: border-radius var(--common-transition-config);

    max-width: 100%;
`;

export default function Home() {
    const [searchQuery, setSearchQuery] = useState('');

    const onSearchInput = useCallback<React.FormEventHandler<HTMLInputElement>>(
        (e) => setSearchQuery(e.currentTarget.value),
        [setSearchQuery],
    );

    return (
        <ToastProvider>
            <Head>
                <title>Plasma Icons</title>
            </Head>
            <StyledSection>
                <Header />
                <StyledMain>
                    <SearchForm onInput={onSearchInput} />
                    <IconsList searchQuery={searchQuery} />
                </StyledMain>
                <Footer />
            </StyledSection>
        </ToastProvider>
    );
}
