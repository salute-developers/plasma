import { css } from '@linaria/core';

import { tokens } from '../../../../tokens';

export const base = css`
    &[data-pilled='true'] {
        --plasma_private-outline-radius: var(${tokens.itemPilledBorderRadius});
        border-radius: var(${tokens.itemPilledBorderRadius});
    }
`;
