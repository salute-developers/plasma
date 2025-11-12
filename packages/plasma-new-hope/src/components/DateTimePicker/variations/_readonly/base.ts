import { css } from '@linaria/core';

import { tokens } from '../../DateTimePicker.tokens';
import { LeftHelper } from '../../DateTimePicker.styles';

export const base = css`
    &[readonly] {
        cursor: default;

        ${LeftHelper} {
            color: var(${tokens.leftHelperColorReadOnly});
        }
    }
`;
