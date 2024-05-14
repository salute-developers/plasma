import React from 'react';

import { classes } from '../../Select.tokens';
import { SelectProps } from '../../Select.types';

import { StyledSpinner, Wrapper } from './InfiniteLoader.styles';

export const InfiniteLoader = ({ variant }: { variant: SelectProps['variant'] }) => {
    return (
        <Wrapper variant={variant}>
            <StyledSpinner className={classes.selectSpinner} />
            Загрузка
        </Wrapper>
    );
};
