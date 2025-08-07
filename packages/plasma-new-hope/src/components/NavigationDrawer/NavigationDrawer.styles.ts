import { css } from '@linaria/core';

import { tokens } from './NavigationDrawer.tokens';

export const base = css`
    display: flex;
    box-sizing: border-box;
    height: 100%;
    position: relative;
`;

export const contentStyles = css`
    width: 100%;
    height: 100%;
`;

export const contentOverlayStyles = css`
    margin-left: calc(var(${tokens.sidebarWidthClosed}) + 24px);
`;

export const overlayStyles = css`
    position: absolute;
    top: 0;
    left: calc(var(${tokens.sidebarWidth}) + 24px);
    z-index: 1;
    background-color: var(${tokens.overlayBackground});
    height: 100%;
    width: 100%;
    cursor: pointer;
`;
