import { css } from '@linaria/core';

export const base = css`
    input:disabled + label {
        opacity: var(--plasma-checkbox-disabled-opacity);
    }

    input:disabled + label {
        cursor: not-allowed;
    }
`;
