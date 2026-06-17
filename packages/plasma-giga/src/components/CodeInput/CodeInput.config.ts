import { css, codeInputTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    bodyM,
    bodyMBold,
    bodyS,
    bodySBold,
    dsplL,
    dsplLBold,
    dsplM,
    dsplS,
    h3,
    h4,
    h5,
    outlineAccent,
    textNegative,
    textPrimary,
    textSecondary,
} from '@salutejs/plasma-themes/tokens/plasma_giga';

export const config = {
    defaults: {
        view: 'default',
        size: 'l',
    },
    variations: {
        view: {
            default: css`
                ${tokens.captionColor}: ${textSecondary};
                ${tokens.captionColorError}: ${textNegative};

                ${tokens.codeColor}: ${textPrimary};
                ${tokens.codeColorError}: ${textNegative};
                ${tokens.borderColorFocus}: ${outlineAccent};
            `,
        },
        size: {
            l: css`
                ${tokens.captionGap}: 2.5rem;
                ${tokens.codeItemsGap}: 0.75rem;

                ${tokens.separatorWidth}: 0.75rem;

                ${tokens.fontFamily}: ${dsplL.fontFamily};
                ${tokens.fontStyle}: ${dsplL.fontStyle};
                ${tokens.fontWeight}: ${dsplLBold.fontWeight};
                ${tokens.letterSpacing}: ${dsplL.letterSpacing};

                ${tokens.largeFontSize}: 8rem;
                ${tokens.largeLineHeight}: 8rem;

                ${tokens.mediumFontSize}: 7rem;
                ${tokens.mediumLineHeight}: 7rem;

                ${tokens.smallFontSize}: 5.5rem;
                ${tokens.smallLineHeight}: 5.75rem;

                ${tokens.captionFontFamily}: ${h3.fontFamily};
                ${tokens.captionFontSize}: ${h3.fontSize};
                ${tokens.captionFontStyle}: ${h3.fontStyle};
                ${tokens.captionFontWeight}: ${h3.fontWeight};
                ${tokens.captionLetterSpacing}: ${h3.letterSpacing};
                ${tokens.captionLineHeight}: ${h3.lineHeight};

                ${tokens.largeCodeItemWidth}: 5rem;
                ${tokens.largeCodeItemHeight}: 8rem;

                ${tokens.mediumCodeItemWidth}: 4.5rem;
                ${tokens.mediumCodeItemHeight}: 7rem;

                ${tokens.smallCodeItemWidth}: 3.5rem;
                ${tokens.smallCodeItemHeight}: 5.75rem;

                ${tokens.codeItemCircleBorderWidth}: 0.125rem;
                ${tokens.codeItemCircleSize}: 1.5rem;
            `,
            m: css`
                ${tokens.captionGap}: 1.75rem;
                ${tokens.codeItemsGap}: 0.5rem;

                ${tokens.separatorWidth}: 0.75rem;

                ${tokens.fontFamily}: ${dsplM.fontFamily};
                ${tokens.fontStyle}: ${bodyM.fontStyle};
                ${tokens.fontWeight}: ${bodyMBold.fontWeight};
                ${tokens.letterSpacing}: ${bodyM.letterSpacing};

                ${tokens.largeFontSize}: 5.5rem;
                ${tokens.largeLineHeight}: 5.75rem;

                ${tokens.mediumFontSize}: 4.5rem;
                ${tokens.mediumLineHeight}: 4.75rem;

                ${tokens.smallFontSize}: 3.5rem;
                ${tokens.smallLineHeight}: 3.75rem;

                ${tokens.captionFontFamily}: ${h4.fontFamily};
                ${tokens.captionFontSize}: ${h4.fontSize};
                ${tokens.captionFontStyle}: ${h4.fontStyle};
                ${tokens.captionFontWeight}: ${h4.fontWeight};
                ${tokens.captionLetterSpacing}: ${h4.letterSpacing};
                ${tokens.captionLineHeight}: ${h4.lineHeight};

                ${tokens.largeCodeItemWidth}: 3.5rem;
                ${tokens.largeCodeItemHeight}: 5.75rem;

                ${tokens.mediumCodeItemWidth}: 3rem;
                ${tokens.mediumCodeItemHeight}: 4.75rem;

                ${tokens.smallCodeItemWidth}: 2.25rem;
                ${tokens.smallCodeItemHeight}: 3.75rem;

                ${tokens.codeItemCircleBorderWidth}: 0.094rem;
                ${tokens.codeItemCircleSize}: 1rem;
            `,
            s: css`
                ${tokens.captionGap}: 1.5rem;
                ${tokens.codeItemsGap}: 0.25rem;

                ${tokens.separatorWidth}: 0.5rem;

                ${tokens.fontFamily}: ${dsplS.fontFamily};
                ${tokens.fontStyle}: ${bodyS.fontStyle};
                ${tokens.fontWeight}: ${bodySBold.fontWeight};
                ${tokens.letterSpacing}: ${bodyS.letterSpacing};

                ${tokens.largeFontSize}: 4rem;
                ${tokens.largeLineHeight}: 4.25rem;

                ${tokens.mediumFontSize}: 3rem;
                ${tokens.mediumLineHeight}: 3.25rem;

                ${tokens.smallFontSize}: 2.5rem;
                ${tokens.smallLineHeight}: 2.75rem;

                ${tokens.captionFontFamily}: ${h5.fontFamily};
                ${tokens.captionFontSize}: ${h5.fontSize};
                ${tokens.captionFontStyle}: ${h5.fontStyle};
                ${tokens.captionFontWeight}: ${h5.fontWeight};
                ${tokens.captionLetterSpacing}: ${h5.letterSpacing};
                ${tokens.captionLineHeight}: ${h5.lineHeight};

                ${tokens.largeCodeItemWidth}: 2.5rem;
                ${tokens.largeCodeItemHeight}: 4.25rem;

                ${tokens.mediumCodeItemWidth}: 2rem;
                ${tokens.mediumCodeItemHeight}: 3.25rem;

                ${tokens.smallCodeItemWidth}: 1.625rem;
                ${tokens.smallCodeItemHeight}: 2.75rem;

                ${tokens.codeItemCircleBorderWidth}: 0.063rem;
                ${tokens.codeItemCircleSize}: 0.75rem;
            `,
        },
        disabled: {
            true: css`
                ${tokens.disabledOpacity}: 0.4;
            `,
        },
    },
};
