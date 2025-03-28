import { css } from '@linaria/core';

import { StyledContentWrapper, StyledTrigger } from '../../Checkbox.styles';
import { tokens } from '../../Checkbox.tokens';

export const base = css`
    input[type='checkbox']:indeterminate + ${StyledContentWrapper} ${StyledTrigger} {
        background: var(${tokens.triggerBackgroundColorChecked});
        border-color: var(${tokens.triggerBorderColorChecked});
    }

    input:checked + ${StyledContentWrapper} ${StyledTrigger} {
        background: var(${tokens.triggerBackgroundColorChecked});
        border-color: var(${tokens.triggerBorderColorChecked});
    }
`;
