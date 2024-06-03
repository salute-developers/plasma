import React from 'react';

import { classes } from '../../SelectNew.tokens';
import { SelectNewProps } from '../../SelectNew.types';

import { StyledSpinner, Wrapper } from './InfiniteLoader.styles';

export const InfiniteLoader = ({ variant }: { variant: SelectNewProps['variant'] }) => {
    return (
        <Wrapper variant={variant}>
            <StyledSpinner className={classes.selectSpinner} />
            Загрузка
        </Wrapper>
    );
};
