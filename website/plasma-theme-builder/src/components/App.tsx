import React, { useCallback, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { Route, Routes, useNavigate } from 'react-router-dom';

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
// import { useDefaultThemeData, useFetchTheme } from '../hooks';
// import { multipleMediaQuery } from './mixins';
// import { getURLParams, pushHistoryState } from '../utils';
// import type { Theme as ThemeType } from '../types';
import { TokensEditor } from './_new/TokensEditor';
import { ToneGenerator } from './ColorGenerator/ToneGenerator';

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
    TONE: 'TONE',
    GRAYSCALE: 'GRAYSCALE',
    FONT_FAMILY: 'FONT_FAMILY',
    TOKENS_EDITOR: 'TOKENS_EDITOR',
} as const;

type PageType = typeof PAGE_TYPE[keyof typeof PAGE_TYPE];

const App = () => {
    const [state, setState] = useState<PageType>(PAGE_TYPE.TOKENS_EDITOR);
    const navigate = useNavigate();

    // const [data, setData] = useState<ThemeType>();
    // const [token, setToken] = useState<string | undefined>();
    // const defaultData = useDefaultThemeData();

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

    const onTokensEditor = () => {
        setState(PAGE_TYPE.TOKENS_EDITOR);
    };

    return (
        <Routes>
            <Route path="new" element={<TokensEditor onPreviousPage={onFontFamily} onNextPage={onTone} />} />
            <Route
                path="test"
                element={
                    <ToneGenerator
                        onPreviousPage={onTokensEditor}
                        onNextPage={() => {
                            navigate('/new');
                        }}
                    />
                }
            />
            {/* {state === PAGE_TYPE.TONE && <ToneGenerator onNextPage={onGrayScale} />}
                {state === PAGE_TYPE.GRAYSCALE && (
                    <GrayscaleGenerator onPreviousPage={onTone} onNextPage={onFontFamily} />
                )}
                {state === PAGE_TYPE.FONT_FAMILY && (
                    <FontFamilyGenerator onPreviousPage={onGrayScale} onNextPage={onTokensEditor} />
                )}
                {state === PAGE_TYPE.TOKENS_EDITOR && (
                    <TokensEditor onPreviousPage={onFontFamily} onNextPage={onTone} />
                )} */}
        </Routes>
    );
};

export default App;
