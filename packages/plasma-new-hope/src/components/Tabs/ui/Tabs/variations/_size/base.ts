import { css } from '@linaria/core';

import { tokens } from '../../../../tokens';

export const base = css`
    width: var(${tokens.tabsWidth});
    height: var(${tokens.tabsHeight});

    --plasma_private-outline-radius: var(${tokens.tabsBorderRadius});
    border-radius: var(${tokens.tabsBorderRadius});
`;
