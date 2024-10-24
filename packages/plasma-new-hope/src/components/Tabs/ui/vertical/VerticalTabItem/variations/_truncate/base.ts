import { css } from '@linaria/core';

import { classes } from '../../../../../tokens';
import { StyledContent, TabItemValue } from '../../VerticalTabItem.styles';

export const base = css`
    &.${classes.tabsTruncate} {
        ${StyledContent} {
            overflow: hidden;
            text-overflow: ellipsis;
        }

        ${TabItemValue} {
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
`;
