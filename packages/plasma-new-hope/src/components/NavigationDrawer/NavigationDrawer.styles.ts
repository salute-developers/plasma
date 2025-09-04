import { css } from '@linaria/core';
import { styled } from '@linaria/react';

import { classes, tokens } from './NavigationDrawer.tokens';

export const base = css`
    display: flex;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    position: relative;

    .${classes.navigationDrawerMenuItemSelected} {
        background: var(${tokens.menuItemSelectedColor});
    }

    .${classes.navigationDrawerMenuLink} {
        text-decoration: none;
        color: var(--text-primary);

        &:visited,
        &:hover,
        &:visited:hover {
            color: var(--text-primary);
        }
    }

    .${classes.navigationDrawerMenuItem} {
        padding: var(${tokens.menuItemPadding});
        display: flex;
        gap: var(${tokens.menuItemGap});
        align-items: center;
        cursor: pointer;
        border-radius: var(${tokens.menuItemBorderRadius});
        box-sizing: border-box;
        height: var(${tokens.sidebarWidthClosed});
        min-width: var(${tokens.sidebarWidthClosed});
        line-height: var(${tokens.iconContainerSize});

        font-family: var(${tokens.menuItemFontFamily});
        font-size: var(${tokens.menuItemFontSize});
        font-style: var(${tokens.menuItemFontStyle});
        font-weight: var(${tokens.menuItemFontWeight});
        letter-spacing: var(${tokens.menuItemFontLetterSpacing});
        line-height: var(${tokens.menuItemFontLineHeight});

        &:hover {
            background: var(${tokens.menuItemHoverColor});
        }
    }

    .${classes.navigationDrawerMenuItemDisabled} {
        cursor: not-allowed;
        opacity: var(${tokens.menuItemDisabledOpacity});
    }

    .${classes.navigationDrawerMenuItemWithoutContentLeft} {
        justify-content: space-between;
        align-items: center;
    }

    .${classes.navigationDrawerMenuItemContentLeft} {
        gap: var(${tokens.menuItemContentLeftMargin});
        padding: var(${tokens.menuItemContentLeftMargin});

        .${classes.navigationDrawerMenuIndicator} {
            position: absolute;
            top: 0;
            right: 0;
        }

        .${classes.navigationDrawerMenuCounter} {
            position: absolute;
            top: -0.25rem;
            right: -0.25rem;
        }
    }

    .${classes.navigationDrawerMenuIndicator} {
        position: absolute;
        top: -0.375rem;
        right: -0.375rem;
    }

    .${classes.navigationDrawerMenuCounter} {
        position: absolute;
        top: -0.625rem;
        right: -0.625rem;
    }

    .${classes.navigationDrawerSidebar} {
        width: 100%;
        display: flex;
        flex-direction: column;
        overflow-y: auto;
        box-sizing: content-box;
        color: var(--text-primary);

        height: calc(100% - 2rem);
        padding: var(${tokens.sidebarPadding});
        min-width: var(${tokens.sidebarWidth});
        max-width: var(${tokens.sidebarWidth});
        box-shadow: var(${tokens.sidebarBoxShadow});
        background: var(${tokens.sidebarBackground});

        &::-webkit-scrollbar {
            width: 0.188rem;
        }

        &::-webkit-scrollbar-thumb {
            background-color: var(--surface-transparent-tertiary);
            background-clip: content-box;
            border: 0.063rem solid transparent;
            border-radius: 1rem;
        }

        &::-webkit-scrollbar-track {
            background-color: var(--surface-transparent-primary);
            background-clip: content-box;
            border: 0.063rem solid transparent;
            border-radius: 1rem;
        }
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
        margin-left: calc(var(${tokens.sidebarWidthClosed}) + 1.5rem);
    }

    .${classes.navigationDrawerArrowInverse} {
        transform: rotate(-180deg);
    }
`;

export const Content = styled.div`
    width: 100%;
    height: 100%;
`;

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: calc(var(${tokens.sidebarWidth}) + 1.5rem);
    bottom: 0;
    z-index: 1;
    background-color: var(${tokens.overlayBackground});
    cursor: pointer;
`;

export const Footer = styled.div`
    margin-top: auto;
`;
