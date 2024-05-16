import { css } from '@linaria/core';

import { StyledContentWrapper, StyledTrigger } from '../../Checkbox.styles';
import { tokens } from '../../Checkbox.tokens';

export const base = css`
    input[type='checkbox']:indeterminate + ${StyledContentWrapper} ${StyledTrigger} {
        border: none;
        background: var(${tokens.fillColor});
        border-color: var(${tokens.fillColor});
    }

    input:checked + ${StyledContentWrapper} ${StyledTrigger} {
        border: none;
        background: var(${tokens.fillColor});
        border-color: var(${tokens.fillColor});
    }
`;
