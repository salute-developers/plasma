import { css } from '@linaria/core';

import { classes, tokens } from '../../../../tokens';

export const base = css`
    &.${String(classes.segmentGroupFilledBackground)} {
        background-color: var(${tokens.groupFilledBackgroundColor});
    }
`;
