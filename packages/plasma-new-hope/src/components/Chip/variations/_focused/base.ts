import { css } from '@linaria/core';

import { tokens } from '../../Chip.tokens';

export const base = css`
    --plasma_private-chip-outline-size: var(${tokens.outlineSize}, 0.125rem);

    :focus {
        outline: none;
    }

    ::before {
        content: '';
        position: absolute;
        display: block;
        box-sizing: content-box;
        pointer-events: none;

        inset: calc(-1 * var(--plasma_private-chip-outline-size));
        border: var(--plasma_private-chip-outline-size) solid transparent;
        border-radius: calc(var(${tokens.borderRadius}) + var(--plasma_private-chip-outline-size));

        transition: box-shadow 0.2s ease-in-out 0s;
    }

    :focus-visible::before {
        box-shadow: 0 0 0 var(--plasma_private-chip-outline-size) var(${tokens.focusColor});
    }
`;
