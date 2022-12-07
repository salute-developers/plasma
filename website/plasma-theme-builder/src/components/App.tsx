import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { H1 } from '@salutejs/plasma-b2c';

import type { PageType } from './types';
import { Footer } from './Footer/Footer';
import { Main } from './Main/Main';
import { Generator } from './Generator/Generator';
import { Theme } from './Theme/Theme';
import { SBSansTextMono } from './mixins';
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

    const onClickMain = useCallback(() => {
        setState('generator');
    }, []);

    const onGenerate = useCallback((data: ThemeType) => {
        setState('theme');
        setData(data);
    }, []);

    return (
        <StyledRoot>
            <Header>Plasma</Header>
            {state === 'main' && <Main onClick={onClickMain} />}
            {state === 'generator' && <Generator onGenerate={onGenerate} />}
            {state === 'theme' && <Theme data={data} />}
            <Footer />
        </StyledRoot>
    );
};

export default App;
