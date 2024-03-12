import { css } from '@linaria/core';

import { classes, tokens } from './Toolbar.tokens';

export const base = css`
    display: inline-flex;
    box-sizing: border-box;
    border-radius: var(${tokens.borderRadius});
    background: var(${tokens.background});
    padding: var(${tokens.padding});

    &.${classes.shadow} {
        box-shadow: var(${tokens.boxShadow});
    }

    &.${classes.vertical} {
        flex-direction: column;
        width: var(${tokens.size});
    }

    &.${classes.horizontal} {
        flex-direction: row;
        height: var(${tokens.size});
    }

    &.${classes.vertical} .${classes.divider} {
        width: var(${tokens.dividerSize});
        height: 0.063rem;

        margin: var(${tokens.dividerOffset}) 0 var(${tokens.dividerOffset}) 0;
    }

    &.${classes.horizontal} .${classes.divider} {
        width: 0.063rem;
        height: var(${tokens.dividerSize});

        margin: 0 var(${tokens.dividerOffset}) 0 var(${tokens.dividerOffset});
    }
`;
