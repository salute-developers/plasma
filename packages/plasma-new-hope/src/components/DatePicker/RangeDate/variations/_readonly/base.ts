import { css } from '@linaria/core';

import { tokens } from '../../../DatePicker.tokens';
import { LeftHelper } from '../../RangeDate.styles';

export const base = css`
    &[readonly] {
        cursor: default;
        ${tokens.textFieldBackgroundColorReadOnly}: transparent;

        ${LeftHelper} {
            color: var(${tokens.leftHelperColorReadOnly});
        }
    }
`;
