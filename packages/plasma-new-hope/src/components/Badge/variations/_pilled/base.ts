import { css } from '@linaria/core';

import { classes, tokens } from '../../Badge.tokens';

export const base = css`
    &.${String(classes.badgePilled)} {
        border-radius: var(${tokens.pilledBorderRadius});
    }
`;
