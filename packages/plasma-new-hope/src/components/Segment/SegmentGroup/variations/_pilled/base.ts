import { css } from '@linaria/core';

import { tokens } from '../../../tokens';

export const base = css`
    &[data-pilled='true'] {
        border-radius: var(${tokens.groupPilledBorderRadius});
    }
`;
