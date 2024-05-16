import { css } from '@linaria/core';

import { tokens } from '../../Radiobox.tokens';

export const base = css`
    input:disabled + label {
        opacity: var(${tokens.disabledOpacity});
    }

    input:disabled + label {
        cursor: not-allowed;
    }
`;
