import { css } from '@linaria/core';

import { tokens } from '../../Link/Link.tokens';

export const base = css`
    font-family: var(${tokens.linkFontFamily});
    font-size: var(${tokens.linkFontSize});
    font-style: var(${tokens.linkFontStyle});
    font-weight: var(${tokens.linkFontWeight});
    letter-spacing: var(${tokens.linkLetterSpacing});
    line-height: var(${tokens.linkLineHeight});
`;
