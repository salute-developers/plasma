import { css } from '@linaria/core';

import { tokens, classes } from '../../CodeField.tokens';
import { ItemInput } from '../../CodeField.styles';

export const base = css`
    ${ItemInput} {
        border-radius: var(${tokens.borderRadius});

        &.${classes.segmented} {
            border-radius: var(${tokens.borderRadiusSegmented});

            &:first-child {
                border-top-left-radius: var(${tokens.segmentedSideBorderRadius});
                border-bottom-left-radius: var(${tokens.segmentedSideBorderRadius});
            }

            &:last-child {
                border-top-right-radius: var(${tokens.segmentedSideBorderRadius});
                border-bottom-right-radius: var(${tokens.segmentedSideBorderRadius});
            }
        }
    }
`;
