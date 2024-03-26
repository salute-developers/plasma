import { css } from '@linaria/core';

import { tokens } from '../../Cell.tokens';

export const base = css`
    color: var(${tokens.cellColor});
    background-color: var(${tokens.cellBackgroundColor});

    width: 100%;
    display: flex;
    align-items: stretch;
    gap: var(${tokens.cellGap});

    &:focus {
        outline: 0 none;
    }
`;
