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
        
        inset: -0.125rem;
        border: 0.125rem solid transparent;
        /* TODO: br */
        /* border-radius: calc(var(--plasma-button-l-radius) + var(--plasma-outline-size)); */
        border-radius: 0.75rem;
        transition: box-shadow 0.2s ease-in-out 0s;
    }

    :focus::before {
        box-shadow: 0 0 0 0.125rem var(--plasma-button-focus-color);
    }
`;
