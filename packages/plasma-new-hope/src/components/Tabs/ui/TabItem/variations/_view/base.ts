import { css } from '@linaria/core';

import { classes, tokens } from '../../../../tokens';
import { RightContent } from '../../TabItem.styles';

export const base = css`
    color: var(${tokens.itemColor});
    background-color: var(${tokens.itemBackgroundColor});

    margin-left: var(${tokens.itemMarginLeft});

    &:hover {
        color: var(${tokens.itemColorHover});
        background-color: var(${tokens.itemBackgroundColorHover});

        ${RightContent} {
            color: var(${tokens.additionalContentHoverColor});
        }
    }

    &.${String(classes.tabItemAnimated)} {
        transition: var(${tokens.itemBackgroundTransition});
    }

    &.${String(classes.selectedTabsItem)} {
        color: var(${tokens.itemSelectedColor});
        background-color: var(${tokens.itemSelectedBackgroundColor});

        &:hover {
            color: var(${tokens.itemSelectedColorHover});
            background-color: var(${tokens.itemSelectedBackgroundColorHover});
        }

        ${RightContent} {
            color: var(${tokens.additionalContentSelectedColor});

            &:hover {
                color: var(${tokens.additionalContentSelectedHoverColor});
            }
        }

        &::after {
            content: '';
            position: absolute;
            bottom: 0px;
            left: 0;
            right: 0;
            background: var(${tokens.itemSelectedDividerColor});
            height: var(${tokens.itemSelectedDividerHeight});
            border-radius: 1px;
        }
    }
`;
