import { css } from '@linaria/core';

import { classes, tokens } from '../../../../../tokens';
import { TabItemValue } from '../../HorizontalTabItem.styles';

export const base = css`
    &[disabled] {
        cursor: not-allowed;
        opacity: var(${tokens.disabledOpacity});

        &:hover {
            color: var(${tokens.itemColor});
            background-color: var(${tokens.itemBackgroundColor});

            ${TabItemValue} {
                color: var(${tokens.itemValueColor});
            }
        }

        &.${classes.selectedTabsItem}:hover {
            color: var(${tokens.itemSelectedColor});
            background-color: var(${tokens.itemSelectedBackgroundColor});

            ${TabItemValue} {
                color: var(${tokens.itemSelectedValueColor});
            }
        }
    }
`;
