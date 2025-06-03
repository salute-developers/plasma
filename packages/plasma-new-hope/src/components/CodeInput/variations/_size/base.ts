import { css } from '@linaria/core';

import { CaptionWrapper, CodeGroup, CodeWrapper, ItemInput } from '../../CodeInput.styles';
import { tokens, privateTokens } from '../../CodeInput.tokens';

export const base = css`
    gap: var(${tokens.captionGap});

    ${CodeWrapper}, ${CodeGroup} {
        gap: var(${tokens.codeItemsGap});
    }

    ${ItemInput} {
        font-size: var(${privateTokens.fontSize});
        font-family: var(${tokens.fontFamily});
        font-style: var(${tokens.fontStyle});
        font-weight: var(${tokens.fontWeight});
        letter-spacing: var(${tokens.letterSpacing});
        line-height: var(${privateTokens.lineHeight});
        width: var(${privateTokens.itemWidth});
        height: var(${privateTokens.itemHeight});
    }

    ${CaptionWrapper} {
        font-family: var(${tokens.captionFontFamily});
        font-size: var(${tokens.captionFontSize});
        font-style: var(${tokens.captionFontStyle});
        font-weight: var(${tokens.captionFontWeight});
        letter-spacing: var(${tokens.captionLetterSpacing});
        line-height: var(${tokens.captionLineHeight});
    }
`;
