import { css } from 'styled-components';

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
