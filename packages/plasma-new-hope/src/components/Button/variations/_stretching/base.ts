import { css } from 'styled-components';

import { classes, tokens } from '../../Button.tokens';

export const base = css`
    &.${classes.fixedStretching} {
        width: var(${tokens.buttonWidth});
    }
    &.${classes.filledStretching} {
        width: 100%;
    }
    &.${classes.autoStretching} {
        width: fit-content;
    }
`;
