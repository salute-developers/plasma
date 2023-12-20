import { css } from '@linaria/core';

import { classes, tokens } from '../../../../tokens';

export const base = css`
    &[data-selected-view='true'] {
        &.${String(classes.selectedSegmentItem)} {
            color: var(${tokens.itemSelectedViewColor});
            background-color: var(${tokens.itemSelectedViewBackgroundColor});

            &:hover {
                color: var(${tokens.itemSelectedViewColorHover});
                background-color: var(${tokens.itemSelectedViewBackgroundColorHover});
            }
        }
    }
`;
