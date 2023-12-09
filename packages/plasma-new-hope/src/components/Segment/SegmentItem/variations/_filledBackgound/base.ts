import { css } from '@linaria/core';

import { classes, tokens } from '../../../tokens';

export const base = css`
    &[data-filled='true'] {
        color: var(${tokens.itemFilledColor});
        background-color: var(${tokens.itemFilledBackgroundColor});

        &:hover {
            color: var(${tokens.itemFilledColorHover});
            background-color: var(${tokens.itemFilledBackgroundColorHover});
        }

        &.${String(classes.selectedSegmentItem)} {
            color: var(${tokens.itemFilledColorSelected});
            background-color: var(${tokens.itemFilledBackgroundColorSelected});

            &:hover {
                color: var(${tokens.itemFilledSelectedColorHover});
                background-color: var(${tokens.itemFilledSelectedBackgroundColorHover});
            }
        }
    }
`;
