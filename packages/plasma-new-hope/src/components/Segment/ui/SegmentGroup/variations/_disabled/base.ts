import { css } from '@linaria/core';

import { tokens } from '../../../../tokens';

export const base = css`
    &[disabled] {
        opacity: var(${tokens.disabledOpacity});
        cursor: not-allowed;
    }
`;
