import { css } from 'styled-components';

import { classes, privateTokens, tokens } from './TabBar.tokens';

export const weighted = `
    flex: var(${privateTokens.itemWeight}, 1) 1 0%;
    min-width: 0;

    &.${classes.fixed} {
        flex: none;
        min-width: auto;
    }
`;

export const base = css`
    display: flex;
    align-items: center;
    box-sizing: border-box;
    width: 100%;

    padding: var(${tokens.padding});
    gap: var(${tokens.gap});
    background: var(${tokens.background});
    border-radius: var(${tokens.borderRadius}) var(${tokens.borderRadius}) 0 0;

    &.${classes.island} {
        border-radius: var(${tokens.borderRadius});
    }

    /* Токен padding задаётся одним значением: нижний отступ складывается с safe-area. */
    &:not(.${classes.island}) {
        padding-bottom: calc(var(${tokens.padding}) + env(safe-area-inset-bottom, 0px));
    }

    &.${classes.shadow} {
        box-shadow: var(${tokens.boxShadow});
    }

    &.${classes.island}.${classes.shadow} {
        box-shadow: var(${tokens.islandBoxShadow});
    }

    &.${classes.divider} {
        border-top: var(${tokens.dividerWidth}) solid var(${tokens.dividerColor});
    }
`;
