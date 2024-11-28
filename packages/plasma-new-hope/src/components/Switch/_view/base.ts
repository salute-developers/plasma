import { css } from '@linaria/core';

import { tokens } from '../Switch.tokens';
import { StyledTrigger, StyledInput, StyledLabel, StyledDescription } from '../Switch.styles';

export const base = css`
    ${StyledTrigger} {
        background-color: var(${tokens.trackBackgroundColorOff});
        border-color: var(${tokens.trackBorderColorOff});
    }

    ${StyledInput}:not([disabled]) ~ ${StyledTrigger}:hover {
        background-color: var(${tokens.trackBackgroundColorOffHover}, var(${tokens.trackBackgroundColorOff}));
        border-color: var(${tokens.trackBorderColorOffHover}, var(${tokens.trackBorderColorOff}));
    }

    ${StyledInput}:checked ~ ${StyledTrigger} {
        background-color: var(${tokens.trackBackgroundColorOn});
        border-color: var(${tokens.trackBorderColorOn});
    }

    ${StyledInput}:checked:not([disabled]) ~ ${StyledTrigger}:hover  {
        background-color: var(${tokens.trackBackgroundColorOnHover}, var(${tokens.trackBackgroundColorOn}));
        border-color: var(${tokens.trackBorderColorOnHover}, var(${tokens.trackBorderColorOn}));
    }

    ${StyledTrigger}::after {
        background-color: var(${tokens.thumbBackgroundColorOff});
        box-shadow: var(${tokens.thumbBoxShadow});
    }

    ${StyledInput}:checked ~ ${StyledTrigger}::after {
        background-color: var(${tokens.thumbBackgroundColorOn});
        box-shadow: var(${tokens.thumbBoxShadowOn}, var(${tokens.thumbBoxShadow}));
    }

    ${StyledLabel} {
        color: var(${tokens.labelColor});
    }

    ${StyledDescription} {
        color: var(${tokens.descriptionColor});
    }
`;
