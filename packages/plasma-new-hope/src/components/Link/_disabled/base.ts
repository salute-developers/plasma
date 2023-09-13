import { css } from '@linaria/core';

export const base = css`
    &[disabled] {
        opacity: var(--plasma-link-disabled-opacity);
        cursor: not-allowed;

        :hover,
        :active {
            color: var(--plasma-link-color);
        }

        ::before {
            opacity: 1;
        }
    }
`;
