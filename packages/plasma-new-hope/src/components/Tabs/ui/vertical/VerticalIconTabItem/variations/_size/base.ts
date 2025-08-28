import { css } from '@linaria/core';

import { tokens } from '../../../../../tokens';

export const base = css`
    --plasma_private-outline-radius: var(${tokens.itemBorderRadius});
    border-radius: var(${tokens.itemBorderRadius});
    padding: var(${tokens.itemPaddingOrientationVertical});
`;
