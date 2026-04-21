import { css } from 'styled-components';

import { privateTokens, tokens } from '../../Badge.tokens';

export const base = css`
    color: var(${privateTokens.customColor}, var(${tokens.color}));
    background-color: var(${privateTokens.customBackground}, var(${tokens.background}));
`;
