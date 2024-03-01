import { css } from '@linaria/core';

import { tokens } from '../../Panel.tokens';

export const base = css`
    background: var(${tokens.background});
    box-shadow: var(${tokens.shadow});
    box-sizing: border-box;
`;
