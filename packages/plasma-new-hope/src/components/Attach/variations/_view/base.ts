import { css } from '@linaria/core';

import { classes } from '../../Attach.tokens';

export const base = css`
    &.${classes.horizontal} {
        flex-direction: row;
    }

    &.${classes.vertical} {
        flex-direction: column;
    }

    &.${classes.auto} {
        flex-wrap: wrap;
    }
`;
