import { css } from '@linaria/core';

import { tokens } from '../../Toast.tokens';

export const base = css`
    padding: var(${tokens.padding});
    border-radius: var(${tokens.borderRadius});
    max-width: var(${tokens.maxWidth});
    flex-shrink: 0;
    transform: translateX(-50%);

    font-family: var(${tokens.fontFamily});
    font-size: var(${tokens.fontSize});
    font-style: var(${tokens.fontStyle});
    font-weight: var(${tokens.fontWeight});
    letter-spacing: var(${tokens.letterSpacing});
    line-height: var(${tokens.lineHeight});
`;
