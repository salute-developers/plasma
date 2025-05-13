import { css } from '@linaria/core';

import { classes, tokens } from '../../List.tokens';
import { StyledListItem } from '../../ui/ListItem.styles';

export const base = css`
    &.${classes.tightListItem} {
        ${StyledListItem} {
            padding: calc(var(${tokens.listItemPaddingTop}) - var(${tokens.listItemTightDifference}))
                var(${tokens.listItemPaddingRight})
                calc(var(${tokens.listItemPaddingBottom}) - var(${tokens.listItemTightDifference}))
                var(${tokens.listItemPaddingLeft});
        }
    }
`;
