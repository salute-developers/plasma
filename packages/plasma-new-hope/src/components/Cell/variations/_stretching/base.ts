import { css } from '@linaria/core';

import { classes, tokens } from '../../Cell.tokens';

export const base = css`
    &.${classes.fixedStretching} {
        width: var(${tokens.cellWidth});
    }
    &.${classes.filledStretching} {
        width: 100%;
    }
    &.${classes.autoStretching} {
        width: auto;
    }
`;
