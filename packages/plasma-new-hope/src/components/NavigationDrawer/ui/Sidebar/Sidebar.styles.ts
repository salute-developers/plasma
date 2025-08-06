import { css } from '@linaria/core';

import { classes, tokens } from '../../NavigationDrawer.tokens';

export const sidebarStyles = css`
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: auto;

    height: var(${tokens.sidebarHeight});
    padding: var(${tokens.sidebarPadding});
    gap: var(${tokens.sidebarGap});
    min-width: var(${tokens.sidebarWidth});
    max-width: var(${tokens.sidebarWidth});
    box-shadow: var(${tokens.sidebarBoxShadow});

    &.${classes.navigationDrawerSidebarClosed} {
        min-width: var(${tokens.sidebarWidthClosed});
        max-width: var(${tokens.sidebarWidthClosed});
    }

    .${classes.navigationDrawerMenuItemIcon} {
        width: var(${tokens.menuItemIconSize});
        height: var(${tokens.menuItemIconSize});
    }
`;
