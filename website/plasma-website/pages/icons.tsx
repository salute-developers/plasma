import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import Head from 'next/head';

import { Header, Main, SearchForm, IconsList, Footer } from '../components/roster';

const StyledMain = styled(Main)`
    max-width: 100%;
`;

export default function Home() {
    const [searchQuery, setSearchQuery] = useState('');

    const onSearchInput = useCallback<React.FormEventHandler<HTMLInputElement>>(
        (e) => setSearchQuery(e.currentTarget.value),
        [setSearchQuery],
    );

    return (
        <>
            <Head>
                <title>Plasma Icons</title>
            </Head>
            <Header />
            <StyledMain>
                <SearchForm onInput={onSearchInput} />
                <IconsList searchQuery={searchQuery} />
                <Footer />
            </StyledMain>
        </>
    );
}
