import { css } from '@linaria/core';


// TODO: focus-visible

export const base = css`
    :focus {
        outline: none;
    }

    ::before {
        content: "";
        position: absolute;
        display: block;
        box-sizing: content-box;
        pointer-events: none;
        
        inset: calc(-1 * var(--btn-outline-size));
        border: var(--btn-outline-size) solid transparent;
        
        /* NOTE: border => _size */

        transition: box-shadow 0.2s ease-in-out 0s;
    }

    :focus-visible::before {
        box-shadow: 0 0 0 var(--btn-outline-size) var(--plasma-button-focus-color);
    }
`;
