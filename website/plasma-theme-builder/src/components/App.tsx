import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { H1 } from '@salutejs/plasma-b2c';

import type { PageType } from './types';
import { Footer } from './Footer/Footer';
import { Main } from './Main/Main';
import { Generator } from './Generator/Generator';
import { EditTheme } from './EditTheme/EditTheme';
import { SBSansTextMono } from './mixins';

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

    const onClickMain = useCallback(() => {
        setState('theme-builder');
    }, []);

    const onClickEdit = useCallback(() => {
        setState('edit-theme');
    }, []);

    return (
        <StyledRoot>
            <Header>Plasma</Header>
            {state === 'main' && <Main onClick={onClickMain} />}
            {state === 'theme-builder' && <Generator onClick={onClickEdit} />}
            {state === 'edit-theme' && <EditTheme />}
            <Footer />
        </StyledRoot>
    );
};

export default App;
