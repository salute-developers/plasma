import React, { useCallback, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

import { Footer } from './Footer/Footer';
import { Main } from './Main/Main';
import { Generator } from './Generator/Generator';
import { Theme } from './Theme/Theme';
import { Error } from './Error/Error';
import { PullRequest } from './PullRequest/PullRequest';
import { useFetchTheme } from '../hooks';
import { clearURLParam, getThemeName } from './utils';
import type { PageType } from './types';
import type { Theme as ThemeType } from '../builder/types';
import { multipleMediaQuery } from './mixins';

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

    const themeName = getThemeName();
    const [themeData, errorMessage] = useFetchTheme(themeName);

    useEffect(() => {
        if (themeData) {
            setState('theme');
            setData(themeData);
        }

        if (errorMessage) {
            setState('error');
        }
    }, [themeData, errorMessage]);

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
            {state === 'theme' && <Theme data={data} onPullRequest={onPullRequest} />}
            {state === 'pull-request' && <PullRequest data={data} token={token} />}
            {state === 'error' && <Error message={errorMessage} onMain={onMain} />}
            <Footer />
        </StyledRoot>
    );
};

export default App;
