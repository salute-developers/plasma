import { css } from '@linaria/core';

import { classes, tokens } from '../../Badge.tokens';

export const base = css`
    &.${classes.badgeClear} {
        color: var(${tokens.colorClear});
        background-color: transparent;
        padding: 0;
    }
`;
