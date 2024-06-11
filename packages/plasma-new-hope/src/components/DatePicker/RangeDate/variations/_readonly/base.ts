import { css } from '@linaria/core';

import { tokens } from '../../../DatePicker.tokens';
import { LeftHelper, StyledLabel } from '../../DatePicker.styles';

export const base = css`
    &[readonly] {
        cursor: default;
        ${tokens.textFieldBackgroundColorReadOnly}: transparent;

        ${StyledLabel} {
            display: block;
            color: var(${tokens.labelColorReadOnly});
        }

        ${LeftHelper} {
            color: var(${tokens.leftHelperColorReadOnly});
        }
    }
`;
