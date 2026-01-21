import { css } from '@linaria/core';

import { tokens } from '../../../DatePicker.tokens';

export const base = css`
    &[readonly] {
        cursor: default;
        ${tokens.textFieldBackgroundColorReadOnly}: transparent;
    }
`;
