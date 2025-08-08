import { css } from '@linaria/core';
import { styled } from '@linaria/react';

import { classes, tokens } from './NavigationDrawer.tokens';

export const base = css`
    display: flex;
    box-sizing: border-box;
    height: 100%;
    position: relative;

    .${classes.navigationDrawerMenuItemSelected} {
        background: var(${tokens.menuItemSelectedColor});
    }

    .${classes.navigationDrawerMenuItemDisabled} {
        cursor: not-allowed;
        opacity: var(${tokens.menuItemDisabledOpacity});
    }

    .${classes.navigationDrawerMenuLink} {
        text-decoration: none;
        color: inherit;
    }

    .${classes.navigationDrawerMenuItem} {
        padding: var(${tokens.menuItemPadding});
        display: flex;
        gap: var(${tokens.menuItemGap});
        align-items: center;
        cursor: pointer;
        border-radius: var(${tokens.menuItemBorderRadius});
        line-height: 1;
        font-size: var(${tokens.menuItemFontSize});

        &:hover {
            background: var(${tokens.menuItemHoverColor});
        }
    }

    .${classes.navigationDrawerMenuItemWithoutContentLeft} {
        justify-content: space-between;
        align-items: center;
    }

    .${classes.navigationDrawerMenuIndicator} {
        position: absolute;
        top: -6px;
        right: -6px;
    }

    .${classes.navigationDrawerMenuCounter} {
        position: absolute;
        top: -10px;
        right: -10px;
    }

    .${classes.navigationDrawerSidebar} {
        width: 100%;
        display: flex;
        flex-direction: column;
        overflow-y: auto;

        height: var(${tokens.sidebarHeight});
        padding: var(${tokens.sidebarPadding});
        min-width: var(${tokens.sidebarWidth});
        max-width: var(${tokens.sidebarWidth});
        box-shadow: var(${tokens.sidebarBoxShadow});
        background: var(${tokens.sidebarBackground});
    }

    .${classes.navigationDrawerSidebarClosed} {
        min-width: var(${tokens.sidebarWidthClosed});
        max-width: var(${tokens.sidebarWidthClosed});
    }

    .${classes.navigationDrawerSidebarOverlay} {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1;
    }

    .${classes.navigationDrawerContentOverlay} {
        margin-left: calc(var(${tokens.sidebarWidthClosed}) + 24px);
    }
`;

export const Content = styled.div`
    width: 100%;
    height: 100%;
`;

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: calc(var(${tokens.sidebarWidth}) + 24px);
    width: calc(100% - 250px + 8px);
    z-index: 1;
    background-color: var(${tokens.overlayBackground});
    height: 100%;
    cursor: pointer;
`;
