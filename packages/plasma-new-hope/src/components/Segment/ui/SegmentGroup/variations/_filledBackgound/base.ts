import { css } from '@linaria/core';

import { tokens } from '../../../../tokens';

export const base = css`
    &[data-filled='true'] {
        background-color: var(${tokens.groupFilledBackgroundColor});
    }
`;
