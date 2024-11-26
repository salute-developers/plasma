import { css } from '@linaria/core';

import { LeftHelper } from '../../RangeDate.styles';
import { tokens } from '../../../DatePicker.tokens';

export const base = css`
    ${LeftHelper} {
        color: var(${tokens.leftHelperColor});
    }
`;
