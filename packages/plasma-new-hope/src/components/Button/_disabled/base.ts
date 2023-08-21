import { css } from '@linaria/core';


export const base = css`
    :disabled {
        opacity: var(--plasma-button-disabled-opacity);
        cursor: not-allowed;
    
        :hover,
        :active {
            transform: none;
            scale: none;
        }
    }
`;
