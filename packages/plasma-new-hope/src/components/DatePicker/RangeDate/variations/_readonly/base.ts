import { css } from '@linaria/core';

import { tokens } from '../../../DatePicker.tokens';

export const base = css`
    &[readonly] {
        ${tokens.textFieldBackgroundColorReadOnly}: transparent;
    }
`;
