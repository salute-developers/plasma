import { css } from '@linaria/core';

import { classes } from '../../../../../tokens';
import {
    base as TabItemBase,
    StyledContent as TabItemStyledContent,
    TabItemValue,
} from '../../../HorizontalTabItem/HorizontalTabItem.styles';
import { StyledContent } from '../../HorizontalTabs.styles';

export const base = css`
    &.${classes.tabsTruncate} {
        width: 100%;
        overflow: hidden;

        .${TabItemBase} {
            min-width: 0;
        }

        ${StyledContent} {
            width: 100%;
        }

        ${TabItemStyledContent} {
            overflow: hidden;
            text-overflow: ellipsis;
        }

        ${TabItemValue} {
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
`;
