import { css } from '@linaria/core';

import { classes } from './ChipGroup.tokens';

export const base = css`
    display: inline-flex;

    &.${classes.wrap} {
        flex-wrap: wrap;
    }
`;
