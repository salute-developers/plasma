import { css } from '@linaria/core';

import { tokens } from '../../../../../tokens';

export const base = css`
    font-family: var(${tokens.fontFamily});
    font-size: var(${tokens.fontSize});
    font-style: var(${tokens.fontStyle});
    font-weight: var(${tokens.fontWeight});
    letter-spacing: var(${tokens.letterSpacing});
    line-height: var(${tokens.lineHeight});

    --plasma_private-outline-radius: var(${tokens.itemBorderRadius});
    border-radius: var(${tokens.itemBorderRadius});

    width: var(${tokens.itemWidth});
    height: var(${tokens.itemHeight});
`;
