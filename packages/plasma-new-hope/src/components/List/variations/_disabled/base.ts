import { css } from '@linaria/core';

import { classes, tokens } from '../../List.tokens';
import { StyledListItem } from '../../ui/ListItem.styles';

export const base = css`
    &.${classes.disabledList} {
        ${StyledListItem} {
            cursor: not-allowed;
            opacity: var(${tokens.listDisabledOpacity});
        }
    }
`;
