import { css } from '@linaria/core';

import { classes, tokens } from '../../../../../tokens';
import { TabItemValue } from '../../VerticalTabItem.styles';

export const base = css`
    color: var(${tokens.itemColor});
    background-color: var(${tokens.itemBackgroundColor});

    &:hover {
        color: var(${tokens.itemColorHover});
        background-color: var(${tokens.itemBackgroundColorHover});

        ${TabItemValue} {
            color: var(${tokens.itemValueColorHover});
        }
    }

    &:active {
        color: var(${tokens.itemColorActive});

        ${TabItemValue} {
            color: var(${tokens.itemValueColorActive});
        }
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
                background: var(${tokens.itemSelectedDividerColorHover});
            }
        }

        ${TabItemValue} {
            color: var(${tokens.itemSelectedValueColorHover});

            &:hover {
                color: var(${tokens.itemSelectedValueColorHover});
            }
        }

        &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            background: var(${tokens.itemSelectedDividerColor});
            width: var(${tokens.itemSelectedDividerWidth});

            border-radius: 0.063rem;
        }
    }
`;
