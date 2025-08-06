import { css } from '@linaria/core';

import { classes } from './NavigationDrawer.tokens';

export const base = css`
    display: flex;
    box-sizing: border-box;
    height: 100%;

    .${classes.navigationDrawerContent} {
        width: 100%;
        height: 100%;
    }
`;
