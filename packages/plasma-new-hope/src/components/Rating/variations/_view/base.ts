import { css } from '@linaria/core';

import { classes, tokens } from '../../Rating.tokens';
import { HelperText, Score, Star } from '../../Rating.styles';

export const base = css`
    ${Score} {
        color: var(${tokens.color});
    }

    ${HelperText} {
        color: var(${tokens.helperTextColor});
    }

    ${Star} {
        color: var(${tokens.iconColor});
        fill: var(${tokens.iconColor});

        &.${classes.iconOutline} {
            color: unset;

            path {
                fill: var(${tokens.outlineIconColor});
            }
        }
    }
`;
