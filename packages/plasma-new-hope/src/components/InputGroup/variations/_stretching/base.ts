import { css } from '@linaria/core';

import { classes } from '../../InputGroup.tokens';

export const base = css`
    &.${classes.filledStretching} {
        width: 100%;

        .${classes.inputGroupItem} {
            width: 100%;
        }
    }
`;
