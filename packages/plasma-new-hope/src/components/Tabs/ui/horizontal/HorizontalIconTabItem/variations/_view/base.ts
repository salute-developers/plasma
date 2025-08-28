import { css } from '@linaria/core';

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
        background-color: var(${tokens.itemSelectedBackgroundColor});
        cursor: var(${tokens.itemCursor});

        &:hover {
            color: var(${tokens.itemSelectedColorHover});
            background-color: var(${tokens.itemSelectedBackgroundColorHover});

            &::after {
                background-color: var(${tokens.itemSelectedDividerColorHover});
            }
        }

        &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: var(${tokens.itemSelectedDividerColor});
            height: var(${tokens.itemSelectedDividerHeight});
            border-radius: 0.063rem;
        }
    }
`;
