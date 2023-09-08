import React, { useCallback, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

import { Footer } from './Footer/Footer';
import { Main } from './Main/Main';
import { Generator } from './Generator/Generator';
import { Theme } from './Theme/Theme';
import { Error } from './Error/Error';
import { PullRequest } from './PullRequest/PullRequest';

import { useDefaultThemeData, useFetchTheme } from '../hooks';
import { multipleMediaQuery } from './mixins';
import { getURLParams, pushHistoryState } from '../utils';
import type { Theme as ThemeType } from '../types';

const StyledRoot = styled.div`
    min-width: 35rem;
    min-height: 100vh;

    padding: 2rem 4rem;

    ${multipleMediaQuery(['M', 'S'])(
        css`
            padding: 2rem 3.5rem;
        `,
    )}

    position: relative;
    display: flex;
    flex-direction: column;
`;

const PAGE_TYPE = {
    MAIN: 'MAIN',
    GENERATOR: 'GENERATOR',
    THEME: 'THEME',
    PULL_REQUEST: 'PULL_REQUEST',
    ERROR: 'ERROR',
} as const;

type PageType = typeof PAGE_TYPE[keyof typeof PAGE_TYPE];

const App = () => {
    const [state, setState] = useState<PageType>(PAGE_TYPE.MAIN);
    const [data, setData] = useState<ThemeType>();
    const [token, setToken] = useState<string | undefined>();
    const defaultData = useDefaultThemeData();

    const [themeName, branchName] = getURLParams(['theme', 'branch']);
    const [themeData, errorMessage] = useFetchTheme(themeName, branchName);

    useEffect(() => {
        if (!token) {
            return;
        }

        if (themeData) {
            setState(PAGE_TYPE.THEME);
            setData(themeData);
            return;
        }

        if (errorMessage) {
            setState(PAGE_TYPE.ERROR);
        }
    }, [themeData, token, errorMessage]);

    const onSetToken = useCallback((value: string) => {
        setToken(value);
    }, []);

    const onMain = useCallback(() => {
        setState(PAGE_TYPE.MAIN);
        pushHistoryState('./');
    }, []);

    const onGenerateTheme = useCallback(() => {
        setState(PAGE_TYPE.GENERATOR);
        pushHistoryState('./');
    }, []);

    const onPreviewTheme = useCallback((data: ThemeType) => {
        setState(PAGE_TYPE.THEME);
        setData(data);
    }, []);

    const onPullRequest = useCallback((data: ThemeType) => {
        setState(PAGE_TYPE.PULL_REQUEST);
        setData(data);
    }, []);

    return (
        <StyledRoot>
            {state === PAGE_TYPE.MAIN && <Main onSetToken={onSetToken} onGenerateTheme={onGenerateTheme} />}
            {state === PAGE_TYPE.GENERATOR && <Generator onMain={onMain} onPreviewTheme={onPreviewTheme} />}
            {state === PAGE_TYPE.THEME && (
                <Theme
                    data={data}
                    defaultData={defaultData}
                    themeNameFromParam={themeName}
                    branchNameFromParam={branchName}
                    onGenerateTheme={onGenerateTheme}
                    onPullRequest={onPullRequest}
                />
            )}
            {state === PAGE_TYPE.PULL_REQUEST && <PullRequest data={data} token={token} />}
            {state === PAGE_TYPE.ERROR && <Error message={errorMessage} onMain={onMain} />}
            <Footer />
        </StyledRoot>
    );
};

export default App;
