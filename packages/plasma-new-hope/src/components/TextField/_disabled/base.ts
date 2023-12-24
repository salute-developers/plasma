import { css } from '@linaria/core';

import { tokens } from '../TextField.tokens';

export const base = css`
    &[disabled] {
        opacity: var(${tokens.disabledOpacity});
        cursor: not-allowed;

        input {
            cursor: not-allowed;
        }
    }
`;
