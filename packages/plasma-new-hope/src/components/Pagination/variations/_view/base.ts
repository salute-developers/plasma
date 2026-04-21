import { css } from 'styled-components';

import { classes } from '../../Pagination.tokens';

export const base = css`
    .${classes.paginationIconReverse} {
        transform: rotate(180deg);
    }
`;
