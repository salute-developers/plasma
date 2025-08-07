import { css } from '@linaria/core';

import { tokens } from '../../NavigationDrawer.tokens';

export const baseSidebarStyles = css`
    display: flex;
    flex-direction: column;
    overflow-y: auto;

    height: var(${tokens.sidebarHeight});
    padding: var(${tokens.sidebarPadding});
    gap: var(${tokens.sidebarGap});
    min-width: var(${tokens.sidebarWidth});
    max-width: var(${tokens.sidebarWidth});
    box-shadow: var(${tokens.sidebarBoxShadow});
    background: var(${tokens.sidebarBackground});
`;

export const sidebarStyles = css`
    width: 100%;
`;

export const siderbarClosedStyles = css`
    min-width: var(${tokens.sidebarWidthClosed});
    max-width: var(${tokens.sidebarWidthClosed});
`;

export const sidebarOverlayStyles = css`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
`;
