import { css } from '@linaria/core';

export const base = css`
    :focus {
        outline: none;
    }

    :focus-visible::before {
        top: -0.0625rem;
        right: -0.0625rem;
        opacity: 1;

        border-radius: 0.375rem;
        box-shadow: 0 0 0 0.0625rem var(--plasma-link-focus-color);

        border-bottom: none;
    }
`;
