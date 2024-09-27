import { css } from '@linaria/core';

import { classes } from '../../Slider.tokens';

export const base = css`
    &.${classes.verticalOrientation} {
        height: 100%;
        display: inline-flex;
    }
`;
