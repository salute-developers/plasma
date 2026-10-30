import { css } from 'styled-components';

import { tokens } from './Form.tokens';

export const base = css`
    display: flex;
    box-sizing: border-box;
    width: 100%;
    gap: var(${tokens.gap});
`;
