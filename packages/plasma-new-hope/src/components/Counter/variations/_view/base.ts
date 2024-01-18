import { css } from '@linaria/core';

import { tokens } from '../../Counter.tokens';

export const base = css`
    color: var(${tokens.color});
    background-color: var(${tokens.background});
`;
