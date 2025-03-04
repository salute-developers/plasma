import { css } from '@linaria/core';

import { classes, privateTokens, tokens } from '../../Badge.tokens';

export const base = css`
    &.${classes.badgeTransparent} {
        color: var(${privateTokens.customColor}, var(${tokens.colorTransparent}));
        background-color: var(${privateTokens.customBackground}, var(${tokens.backgroundTransparent}));
    }
`;
