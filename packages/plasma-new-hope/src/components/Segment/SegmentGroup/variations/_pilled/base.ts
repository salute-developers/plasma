import { css } from '@linaria/core';

import { tokens } from '../../../tokens';

export const base = css`
    &[data-pilled='true'] {
        --plasma_private-outline-radius: var(${tokens.groupPilledBorderRadius});
        border-radius: var(${tokens.groupPilledBorderRadius});
    }
`;
