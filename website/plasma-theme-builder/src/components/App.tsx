import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { H1 } from '@salutejs/plasma-b2c';

import { Footer } from './Footer/Footer';
import { Main } from './Main/Main';
import { Generator } from './Generator/Generator';
import { Theme } from './Theme/Theme';
import { SBSansTextMono } from './mixins';
import { Error } from './Error/Error';
import { useFetchTheme } from './hooks';
import { clearURLParam, getThemeName } from './utils';
import type { PageType } from './types';
import type { Theme as ThemeType } from '../builder/types';

const StyledRoot = styled.div`
    width: 60rem;
    min-height: 100vh;

    padding: 2rem 4rem;

    display: flex;
    flex-direction: column;
`;

const Header = styled(H1)`
    ${SBSansTextMono};
`;

const App = () => {
    const [state, setState] = useState<PageType>('main');
    const [data, setData] = useState<ThemeType>();

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

    return (
        <StyledRoot>
            <Header>Plasma</Header>
            {state === 'main' && <Main onGenerateTheme={onGenerateTheme} />}
            {state === 'generator' && <Generator onPreviewTheme={onPreviewTheme} />}
            {state === 'theme' && <Theme data={data} />}
            {state === 'error' && <Error message={errorMessage} onMain={onMain} />}
            <Footer />
        </StyledRoot>
    );
};

export default App;
