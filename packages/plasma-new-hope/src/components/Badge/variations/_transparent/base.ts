import { css } from '@linaria/core';

import { classes, tokens } from '../../Badge.tokens';

export const base = css`
    &.${classes.badgeTransparent} {
        color: var(${tokens.colorTransparent});
        background-color: var(${tokens.backgroundTransparent});
    }
`;
