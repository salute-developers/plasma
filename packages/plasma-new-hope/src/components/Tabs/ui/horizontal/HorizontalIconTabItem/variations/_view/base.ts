import { css } from 'styled-components';

import { classes, tokens } from '../../../../../tokens';

export const base = css`
    color: var(${tokens.itemColor});
    background-color: var(${tokens.itemBackgroundColor});

    &:hover {
        color: var(${tokens.itemColorHover});
        background-color: var(${tokens.itemBackgroundColorHover});
    }

    &:active {
        color: var(${tokens.itemColorActive});
    }

    &.${classes.tabItemAnimated} {
        transition: var(${tokens.itemBackgroundTransition});
    }

    &.${classes.selectedTabsItem} {
        color: var(${tokens.itemSelectedColor});
        cursor: var(${tokens.itemCursor});

        &:hover {
            color: var(${tokens.itemSelectedColorHover});
        }
    }
`;
