import { css } from '@linaria/core';

import { classes } from '../../ButtonGroup.tokens';
import { buttonClasses } from '../../../Button';

export const base = css`
    &.${classes.filledStretching} {
        width: 100%;

        .${buttonClasses.buttonItem} {
            width: 100%;
        }
    }
`;
