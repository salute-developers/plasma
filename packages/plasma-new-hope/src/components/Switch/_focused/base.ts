import { css } from '@linaria/core';

import { tokens } from '../Switch.tokens';
import { StyledInput, StyledTrigger } from '../Switch.styles';

// TODO: https://github.com/salute-developers/plasma/issues/885
export const base = css`
    ${StyledTrigger}::before {
        content: '';
        position: absolute;
        inset: -0.125rem;
        display: block;
        box-sizing: content-box;
        border-radius: calc(0.125rem + var(${tokens.trackBorderRadius}));
        border: 0.125rem solid transparent;
        pointer-events: none;
        transition: box-shadow 0.2s ease-in-out;
    }

    ${StyledInput}.focus-visible ~ ${StyledTrigger}::before {
        box-shadow: 0 0 0 0.125rem var(${tokens.trackFocusColor});
    }
`;
