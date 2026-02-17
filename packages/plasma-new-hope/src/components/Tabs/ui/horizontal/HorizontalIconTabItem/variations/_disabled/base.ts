import { css } from '@linaria/core';

import { classes, tokens } from '../../../../../tokens';

export const base = css`
    &[disabled] {
        cursor: not-allowed;
        opacity: var(${tokens.disabledOpacity});

        &:hover {
            color: var(${tokens.itemColor});
            background-color: var(${tokens.itemBackgroundColor});
        }

        &.${classes.selectedTabsItem}:hover {
            color: var(${tokens.itemSelectedColor});
            background-color: var(${tokens.itemSelectedBackgroundColor});
        }
    }
`;
