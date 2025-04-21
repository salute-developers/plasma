import React from 'react';
import styled from 'styled-components';

import { ChangelogH2 } from './index';

const StyledPage = styled.div`
    --margin-x: 64px;

    display: flex;
    justify-content: center;
    align-items: center;

    margin: 0 var(--margin-x);

    height: 100vh;
    max-width: 1600px;

    @media (min-width: 960px) and (max-width: 1199px) {
        --margin-x: 40px;
    }

    @media (min-width: 770px) and (max-width: 959px) {
        --margin-x: 28px;
    }

    @media (min-width: 560px) and (max-width: 769px) {
        --margin-x: 20px;
    }

    @media (max-width: 559px) {
        --margin-x: 16px;
    }
`;

export const Page404 = () => {
    return (
        <StyledPage>
            <ChangelogH2>Страница не найдена.</ChangelogH2>
        </StyledPage>
    );
};
