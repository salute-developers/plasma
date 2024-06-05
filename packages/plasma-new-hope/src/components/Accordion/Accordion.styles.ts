import { css } from '@linaria/core';

import { classes, tokens } from './Accordion.tokens';

export const base = css`
    display: flex;
    flex-direction: column;
    gap: var(${tokens.accordionGap});
    align-items: stretch;
    height: auto;
    background: var(${tokens.accordionBackground});

    &.${classes.fixedStretching} {
        width: var(${tokens.accordionWidth});
    }
    &.${classes.filledStretching} {
        width: 100%;
    }
`;
