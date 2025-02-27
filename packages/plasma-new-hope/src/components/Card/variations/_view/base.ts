import { css } from '@linaria/core';

import { classes, tokens } from '../../Card.tokens';

export const base = css`
    &.${classes.backgroundSolid} {
        background: var(${tokens.solidBackground});
    }
`;
