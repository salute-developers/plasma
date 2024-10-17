import { css } from '@linaria/core';

import { classes, tokens } from '../../../../tokens';

export const base = css`
    position: relative;

    &.${String(classes.segmentGroupFilledBackground)} {
        &:before {
            content: '';
            position: absolute;
            inset: -0.125rem;
            background-color: var(${tokens.groupFilledBackgroundColor});
        }
    }
`;
