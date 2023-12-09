import { css } from '@linaria/core';

import { classes, tokens } from '../../../tokens';

export const base = css`
    color: var(${tokens.itemColor});
    background-color: var(${tokens.itemBackgroundColor});

    &:hover {
        color: var(${tokens.itemColorHover});
        background-color: var(${tokens.itemBackgroundColorHover});
    }

    &.${String(classes.selectedSegmentItem)} {
        color: var(${tokens.itemSelectedColor});
        background-color: var(${tokens.itemSelectedBackgroundColor});

        &:hover {
            color: var(${tokens.itemSelectedColorHover});
            background-color: var(${tokens.itemSelectedBackgroundColorHover});
        }
    }
`;
