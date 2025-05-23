import { css } from '@linaria/core';

import { tokens } from './List.tokens';

export const base = css`
    display: flex;
    flex-direction: column;
    gap: var(${tokens.listGap});
    align-items: stretch;
    height: auto;
    width: 100%;
    list-style-type: none;
    padding: 0;
    margin: 0;
`;
