import { css } from '@linaria/core';

import { tokens } from '../../../tokens';

export const base = css`
    width: var(${tokens.groupWidth});
    height: var(${tokens.groupHeight});
    padding: var(${tokens.groupPadding});
    border-radius: var(${tokens.groupBorderRadius});
`;
