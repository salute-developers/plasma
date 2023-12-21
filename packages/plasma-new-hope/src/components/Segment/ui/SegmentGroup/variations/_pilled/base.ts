import { css } from '@linaria/core';

import { classes, tokens } from '../../../../tokens';

export const base = css`
    &.${String(classes.segmentPilled)} {
        --plasma_private-outline-radius: var(${tokens.groupPilledBorderRadius});
        border-radius: var(${tokens.groupPilledBorderRadius});
    }
`;
