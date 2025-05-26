import { css } from '@linaria/core';

import { CaptionWrapper, CodeGroup, CodeWrapper, ItemInput } from '../../CodeInput.styles';
import { tokens, classes } from '../../CodeInput.tokens';

export const base = css`
    gap: var(${tokens.captionGap});

    ${CodeWrapper}, ${CodeGroup} {
        gap: var(${tokens.codeItemsGap});
    }

    && .${classes.largeScreen} {
        ${ItemInput} {
            width: var(${tokens.codeItemLargeWidth});
            height: var(${tokens.codeItemLargeHeight});
            font-size: var(${tokens.largeScreenFontSize});
            line-height: var(${tokens.largeScreenLineHeight});
        }
    }

    && .${classes.mediumScreen} {
        ${ItemInput} {
            width: var(${tokens.codeItemMediumWidth});
            height: var(${tokens.codeItemMediumHeight});
            font-size: var(${tokens.mediumScreenFontSize});
            line-height: var(${tokens.mediumScreenLineHeight});
        }
    }

    && .${classes.smallScreen} {
        ${ItemInput} {
            width: var(${tokens.codeItemSmallWidth});
            height: var(${tokens.codeItemSmallHeight});
            font-size: var(${tokens.smallScreenFontSize});
            line-height: var(${tokens.smallScreenLineHeight});
        }
    }

    ${ItemInput} {
        font-family: var(${tokens.fontFamily});
        font-style: var(${tokens.fontStyle});
        font-weight: var(${tokens.fontWeight});
        letter-spacing: var(${tokens.letterSpacing});
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
