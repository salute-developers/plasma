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
    flex-direction: column;
    box-sizing: border-box;
    width: 100%;

    background: var(${tokens.background});
    border-radius: var(${tokens.borderRadius}) var(${tokens.borderRadius}) 0 0;

    .${classes.items} {
        display: flex;
        align-items: center;
        padding: var(${tokens.padding});
        gap: var(${tokens.gap});
    }

    &.${classes.island} {
        border-radius: var(${tokens.borderRadius});
    }

    /* Токен padding задаётся одним значением: нижний отступ складывается с safe-area. */
    &:not(.${classes.island}) .${classes.items} {
        padding-bottom: calc(var(${tokens.padding}) + env(safe-area-inset-bottom, 0px));
    }

    &.${classes.hasHomeIndicator}:not(.${classes.island}) .${classes.items} {
        padding-bottom: var(${tokens.padding});
    }

    &.${classes.hasHomeIndicator}.${classes.island} {
        background: none;
        border-radius: 0;
    }

    &.${classes.hasHomeIndicator}.${classes.island} .${classes.items} {
        background: var(${tokens.background});
        border-radius: var(${tokens.borderRadius});
    }

    &.${classes.shadow} {
        box-shadow: var(${tokens.boxShadow});
    }

    &.${classes.island}.${classes.shadow} {
        box-shadow: var(${tokens.islandBoxShadow});
    }

    &.${classes.hasHomeIndicator}.${classes.island}.${classes.shadow} {
        box-shadow: none;
    }

    &.${classes.hasHomeIndicator}.${classes.island}.${classes.shadow} .${classes.items} {
        box-shadow: var(${tokens.islandBoxShadow});
    }

    &.${classes.divider} {
        border-top: var(${tokens.dividerWidth}) solid var(${tokens.dividerColor});
    }

    .${classes.homeIndicator} {
        display: flex;
        justify-content: center;
        box-sizing: border-box;
        width: 100%;
        padding: var(${tokens.homeIndicatorPadding});
        pointer-events: none;
    }

    .${classes.homeIndicator}::before {
        content: '';
        width: var(${tokens.homeIndicatorWidth});
        height: var(${tokens.homeIndicatorHeight});
        border-radius: var(${tokens.homeIndicatorRadius});
        background: var(${tokens.homeIndicatorColor});
    }
`;
