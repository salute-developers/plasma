import { css } from '@linaria/core';

import { tokens, classes } from '../../Cell.tokens';

export const base = css`
    height: var(${tokens.cellHeight});

    &.${classes.cellLeftContent} {
        height: var(${tokens.cellLeftContentHeight});
    }

    &.${classes.cellRightContent} {
        height: var(${tokens.cellRightContentHeight});
    }
`;
