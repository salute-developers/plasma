import { css } from '@linaria/core';

import { classes, tokens } from '../../../../tokens';

export const base = css`
    &.${String(classes.segmentPilled)} {
        &:before {
            border-radius: var(${tokens.groupPilledBorderRadius});
        }
    }
`;
