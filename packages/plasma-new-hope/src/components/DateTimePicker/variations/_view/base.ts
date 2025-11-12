import { css } from '@linaria/core';

import { LeftHelper } from '../../DateTimePicker.styles';
import { tokens } from '../../DateTimePicker.tokens';

export const base = css`
    ${LeftHelper} {
        color: var(${tokens.leftHelperColor});
    }
`;
