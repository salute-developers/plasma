import React from 'react';

import { StyledSpinner, Wrapper } from './InfiniteLoader.styles';

export const InfiniteLoader = () => {
    return (
        <Wrapper>
            <StyledSpinner />
            Загрузка
        </Wrapper>
    );
};
