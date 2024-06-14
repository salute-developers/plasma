import { css } from '@linaria/core';

import { LeftHelper, StyledLabel } from '../../SingleDate.styles';
import { tokens } from '../../../DatePicker.tokens';

export const base = css`
    ${StyledLabel} {
        display: block;
        color: var(${tokens.labelColor});
    }

    ${LeftHelper} {
        color: var(${tokens.leftHelperColor});
    }
`;
