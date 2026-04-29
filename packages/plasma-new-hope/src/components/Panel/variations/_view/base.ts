import { css } from 'styled-components';

import { privateTokens, tokens } from '../../Panel.tokens';

export const base = css`
    background: var(${privateTokens.backgroundColor}, var(${tokens.background}));
    box-shadow: var(${tokens.shadow});
    box-sizing: border-box;
`;
