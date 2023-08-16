import { css } from '@linaria/core';

// TODO: focus-visible #711

export const base = css`
    :focus {
        outline: none;
    }

    ::before {
        content: '';
        position: absolute;
        display: block;
        box-sizing: content-box;
        pointer-events: none;

        inset: calc(-1 * var(--plasma_private-btn-outline-size));
        border: var(--plasma_private-btn-outline-size) solid transparent;

        /* NOTE: --plasma_private-btn-outline-size is defined in _size */

        transition: box-shadow 0.2s ease-in-out 0s;
    }

    :focus-visible::before {
        box-shadow: 0 0 0 var(--plasma_private-btn-outline-size) var(--plasma-button-focus-color);
    }
`;
