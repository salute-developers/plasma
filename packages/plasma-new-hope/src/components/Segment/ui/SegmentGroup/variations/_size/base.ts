import { css } from '@linaria/core';

import { tokens } from '../../../../tokens';

export const base = css`
    width: var(${tokens.groupWidth});
    height: var(${tokens.groupHeight});

    --plasma_private-outline-radius: var(${tokens.groupBorderRadius});
    border-radius: var(${tokens.groupBorderRadius});
`;
