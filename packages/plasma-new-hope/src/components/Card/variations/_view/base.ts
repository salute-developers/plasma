import { css } from 'styled-components';

import { classes, tokens } from '../../Card.tokens';

export const base = css`
    &.${classes.backgroundSolid} {
        background: var(${tokens.solidBackground});
    }
`;
