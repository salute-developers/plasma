import { css } from '@linaria/core';

import { privateTokens, tokens } from '../../Badge.tokens';

export const base = css`
    color: var(${privateTokens.customColor}, var(${tokens.color}));
    background-color: var(${privateTokens.customBackground}, var(${tokens.background}));
`;
