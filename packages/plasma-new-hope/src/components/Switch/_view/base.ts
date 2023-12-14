import { css } from '@linaria/core';

import { tokens } from '../Switch.tokens';
import { StyledTrigger, StyledInput } from '../Switch.styles';

export const base = css`
    ${StyledTrigger} {
        background-color: var(${tokens.trackBackgroundColorOff});
    }

    ${StyledTrigger}:hover {
        background-color: var(${tokens.trackBackgroundColorOffHover}, var(${tokens.trackBackgroundColorOff}));
    }

    ${StyledInput}:checked ~ ${StyledTrigger} {
        background-color: var(${tokens.trackBackgroundColorOn});
    }

    ${StyledInput}:checked:hover ~ ${StyledTrigger} {
        background-color: var(${tokens.trackBackgroundColorOnHover}, var(${tokens.trackBackgroundColorOn}));
    }

    ${StyledTrigger}::after {
        background-color: var(${tokens.thumbBackgroundColor});
        box-shadow: var(${tokens.thumbBoxShadow});
    }

    ${StyledInput}:checked ~ ${StyledTrigger}::after {
        box-shadow: var(${tokens.thumbBoxShadowOn}, var(${tokens.thumbBoxShadow}));
    }
`;
