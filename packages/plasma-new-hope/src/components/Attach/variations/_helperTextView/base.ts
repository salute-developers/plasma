import { css } from '@linaria/core';

import { StyledHelperText } from '../../Attach.styles';
import { tokens } from '../../Attach.tokens';

export const base = css`
    ${StyledHelperText} {
        color: var(${tokens.helperTextColor});
    }
`;
