import { css } from '@linaria/core';

export const base = css`
    input[type='checkbox']:indeterminate + label .checkbox-trigger {
        border: none;
        background: var(--plasma-checkbox-fill-color);
        border-color: var(--plasma-checkbox-fill-color);
    }

    input:checked + label .checkbox-trigger {
        border: none;
        background: var(--plasma-checkbox-fill-color);
        border-color: var(--plasma-checkbox-fill-color);
    }
`;
