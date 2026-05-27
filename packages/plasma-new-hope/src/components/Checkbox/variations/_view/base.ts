import { css } from 'styled-components';

import { StyledContentWrapper, StyledTrigger } from '../../Checkbox.styles';
import { tokens } from '../../Checkbox.tokens';

export const base = css`
    input[type='checkbox']:indeterminate + ${StyledContentWrapper} ${StyledTrigger} {
        background: var(${tokens.fillColor});
        border-color: var(${tokens.triggerBorderCheckedColor});
    }

    input:checked + ${StyledContentWrapper} ${StyledTrigger} {
        background: var(${tokens.fillColor});
        border-color: var(${tokens.triggerBorderCheckedColor});
    }

    input[type='checkbox']:indeterminate:not(:disabled) + ${StyledContentWrapper}:hover ${StyledTrigger} {
        background: var(${tokens.fillColorHover}, var(${tokens.fillColor}));
    }

    input:checked:not(:disabled) + ${StyledContentWrapper}:hover ${StyledTrigger} {
        background: var(${tokens.fillColorHover}, var(${tokens.fillColor}));
    }
`;
