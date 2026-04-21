import { css } from 'styled-components';

import { classes } from './ChipGroup.tokens';

export const base = css`
    display: inline-flex;

    &.${classes.wrap} {
        flex-wrap: wrap;
    }
`;
