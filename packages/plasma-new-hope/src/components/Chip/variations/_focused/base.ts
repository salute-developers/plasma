import { css } from '@linaria/core';

import { tokens } from '../../Chip.tokens';

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

        inset: calc(-1 * var(${tokens.outlineSize}, 0.125rem));
        border: var(${tokens.outlineSize}) solid transparent;
        border-radius: var(${tokens.borderRadius});

        transition: box-shadow 0.2s ease-in-out 0s;
    }

    :focus-visible::before {
        box-shadow: 0 0 0 var(${tokens.outlineSize}, 0.125rem) var(${tokens.focusColor});
    }
`;
