import { css } from '@linaria/core';

import { tokens } from '../../../../tokens';

export const base = css`
    width: var(${tokens.groupWidth});
    height: var(${tokens.groupHeight});

    &:before {
        border-radius: var(${tokens.groupBorderRadius});
    }
`;
