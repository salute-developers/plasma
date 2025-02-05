import { css } from '@linaria/core';

import { classes, tokens } from '../../Toast.tokens';

export const base = css`
    &.${String(classes.toastPilled)} {
        --plasma_private-content-left-margin: var(${tokens.contentLeftMargin});
        --plasma_private-close-icon-margin: var(${tokens.closeIconMargin});

        border-radius: var(${tokens.pilledBorderRadius});
    }
`;
