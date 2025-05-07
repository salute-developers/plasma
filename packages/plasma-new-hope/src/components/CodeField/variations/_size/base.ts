import { css } from '@linaria/core';

import { CaptionWrapper, CodeGroup, CodeWrapper, ItemInput } from '../../CodeField.styles';
import { tokens } from '../../CodeField.tokens';

export const base = css`
    gap: var(${tokens.captionGap});

    ${CodeWrapper}, ${CodeGroup} {
        gap: var(${tokens.codeItemsGap});
    }

    ${ItemInput} {
        width: var(${tokens.codeItemWidth});
        height: var(${tokens.codeItemHeight});

        font-family: var(${tokens.fontFamily});
        font-size: var(${tokens.fontSize});
        font-style: var(${tokens.fontStyle});
        font-weight: var(${tokens.fontWeight});
        letter-spacing: var(${tokens.letterSpacing});
        line-height: var(${tokens.lineHeight});
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
