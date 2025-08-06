import { css } from '@linaria/core';

import { tokens } from './NavigationDrawer.tokens';

export const base = css`
    display: flex;
    box-sizing: border-box;
    height: 100%;
`;

export const contentStyles = css`
    width: 100%;
    height: 100%;
`;

export const contentOverlayStyles = css`
    margin-left: calc(var(${tokens.sidebarWidthClosed}) + 24px);
`;
