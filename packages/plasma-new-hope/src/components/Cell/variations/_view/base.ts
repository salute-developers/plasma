import { css } from '@linaria/core';

import { tokens } from '../../Cell.tokens';

export const base = css`
    color: var(${tokens.cellColor});
    background-color: var(${tokens.cellBackgroundColor});
`;
