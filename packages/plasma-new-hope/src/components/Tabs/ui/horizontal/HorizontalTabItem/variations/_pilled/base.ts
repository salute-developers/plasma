import { css } from '@linaria/core';

import { classes, tokens } from '../../../../../tokens';

export const base = css`
    &.${classes.tabsPilled} {
        --plasma_private-outline-radius: var(${tokens.itemPilledBorderRadius});
        border-radius: var(${tokens.itemPilledBorderRadius});

        padding: var(${tokens.itemPaddingPilled});
    }
`;
