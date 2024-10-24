import { css } from '@linaria/core';

import { classes } from '../../Badge.tokens';
import { StyledContentMain } from '../../Badge.styles';

export const base = css`
    &.${classes.badgeTruncate} {
        max-width: 100%;

        ${StyledContentMain} {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
`;
