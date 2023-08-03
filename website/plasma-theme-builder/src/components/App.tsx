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
import { clearURLParam, getURLParams } from '../utils';
import type { PageType, Theme as ThemeType } from '../types';

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

const App = () => {
    const [state, setState] = useState<PageType>('main');
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
            setState('theme');
            setData(themeData);
            return;
        }

        if (errorMessage) {
            setState('error');
        }
    }, [themeData, token, errorMessage]);

    const onSetToken = useCallback((value: string) => {
        setToken(value);
    }, []);

    const onMain = useCallback(() => {
        setState('main');
        clearURLParam();
    }, []);

    const onGenerateTheme = useCallback(() => {
        setState('generator');
    }, []);

    const onPreviewTheme = useCallback((data: ThemeType) => {
        setState('theme');
        setData(data);
    }, []);

    const onPullRequest = useCallback((data: ThemeType) => {
        setState('pull-request');
        setData(data);
    }, []);

    return (
        <StyledRoot>
            {state === 'main' && <Main onSetToken={onSetToken} onGenerateTheme={onGenerateTheme} />}
            {state === 'generator' && <Generator onPreviewTheme={onPreviewTheme} />}
            {state === 'theme' && (
                <Theme
                    data={data}
                    defaultData={defaultData}
                    branchNameFromParam={branchName}
                    onPullRequest={onPullRequest}
                />
            )}
            {state === 'pull-request' && <PullRequest branchNameFromParam={branchName} data={data} token={token} />}
            {state === 'error' && <Error message={errorMessage} onMain={onMain} />}
            <Footer />
        </StyledRoot>
    );
};

export default App;
