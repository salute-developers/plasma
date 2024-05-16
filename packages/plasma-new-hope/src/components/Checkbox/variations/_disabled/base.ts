import { css } from '@linaria/core';

import { StyledContentWrapper } from '../../Checkbox.styles';
import { tokens } from '../../Checkbox.tokens';

export const base = css`
    input:disabled + ${StyledContentWrapper} {
        opacity: var(${tokens.disabledOpacity});
    }

    input:disabled + ${StyledContentWrapper} {
        cursor: not-allowed;
    }
`;
