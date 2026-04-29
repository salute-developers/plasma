import { css } from 'styled-components';

import { classes } from '../../Slider.tokens';

export const base = css`
    &.${classes.verticalOrientation} {
        height: 100%;
        display: inline-flex;
    }
`;
