import { css } from '@linaria/core';

import { classes } from '../../Pagination.tokens';

export const base = css`
    &.${classes.compactType} {
        display: flex;
        justify-content: center;
    }
    &.${classes.defaultType} {
        display: flex;
    }
`;
