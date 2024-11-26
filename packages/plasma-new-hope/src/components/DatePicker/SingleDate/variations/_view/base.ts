import { css } from '@linaria/core';

import { LeftHelper } from '../../SingleDate.styles';
import { tokens } from '../../../DatePicker.tokens';

export const base = css`
    ${LeftHelper} {
        color: var(${tokens.leftHelperColor});
    }
`;
