import { css } from '@linaria/core';

import { classes, tokens } from '../../Toast.tokens';

export const base = css`
    &.${String(classes.toastPilled)} {
        --plasma_private-left-content-margin: var(${tokens.leftContentMargin});
        --plasma_private-close-icon-margin: var(${tokens.closeIconMargin});

        border-radius: var(${tokens.pilledBorderRadius});
    }
`;
