import { css } from '@linaria/core';

import { tokens } from '../../Pagination.tokens';

export const base = css`
    font-family: var(${tokens.paginationFontFamily});
    font-size: var(${tokens.paginationFontSize});
    font-style: var(${tokens.paginationFontStyle});
    font-weight: var(${tokens.paginationFontWeight});
`;
