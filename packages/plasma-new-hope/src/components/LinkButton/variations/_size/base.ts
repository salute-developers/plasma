import { css } from '@linaria/core';

import { tokens } from '../../LinkButton.tokens';

export const base = css`
    height: var(${tokens.linkButtonHeight});

    padding: var(${tokens.linkButtonPadding});

    font-family: var(${tokens.linkButtonFontFamily});
    font-size: var(${tokens.linkButtonFontSize});
    font-style: var(${tokens.linkButtonFontStyle});
    font-weight: var(${tokens.linkButtonFontWeight});
    letter-spacing: var(${tokens.linkButtonLetterSpacing});
    line-height: var(${tokens.linkButtonLineHeight});
`;
