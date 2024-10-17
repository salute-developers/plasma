import { css } from '@linaria/core';

import { classes } from '../../Badge.tokens';
import { StyledContentMain } from '../../Badge.styles';

export const base = css`
    &.${classes.badgeTruncate} {
        width: 100%;

        ${StyledContentMain} {
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
`;
