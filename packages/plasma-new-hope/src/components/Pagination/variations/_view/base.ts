import { css } from '@linaria/core';

import { classes } from '../../Pagination.tokens';

export const base = css`
    .${classes.paginationIconReverse} {
        transform: rotate(180deg);
    }
`;
