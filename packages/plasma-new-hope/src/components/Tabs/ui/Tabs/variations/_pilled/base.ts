import { css } from '@linaria/core';

import { classes, tokens } from '../../../../tokens';

export const base = css`
    &.${String(classes.tabsPilled)} {
        --plasma_private-outline-radius: var(${tokens.tabsPilledBorderRadius});
        border-radius: var(${tokens.tabsPilledBorderRadius});
    }
`;
