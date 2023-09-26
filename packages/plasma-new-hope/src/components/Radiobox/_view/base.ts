import { css } from '@linaria/core';

export const base = css`
    input:checked + label .radiobox-trigger {
        border: none;
        background: var(--plasma-radiobox-fill-color);
        border-color: var(--plasma-radiobox-fill-color);
    }
`;
