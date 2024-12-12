import { css } from '@linaria/core';

import { tokens } from '../../../DatePicker.tokens';
import { LeftHelper } from '../../SingleDate.styles';

export const base = css`
    &[readonly] {
        cursor: default;

        ${LeftHelper} {
            color: var(${tokens.leftHelperColorReadOnly});
        }
    }
`;
