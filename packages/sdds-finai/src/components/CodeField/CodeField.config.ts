import {
    bodyL,
    bodyLBold,
    bodyM,
    bodyMBold,
    bodyS,
    bodyXS,
    outlineAccent,
    surfaceAccent,
    surfaceTransparentNegative,
    surfaceTransparentPrimary,
    surfaceTransparentPrimaryHover,
    surfaceTransparentSecondary,
    textNegative,
    textPrimary,
    textSecondary,
} from '@salutejs/sdds-themes/tokens/sdds_finai';
import { css, codeFieldTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 'l',
        shape: 'default',
    },
    variations: {
        view: {
            default: css`
                ${tokens.caretColor}: ${surfaceAccent};

                ${tokens.captionColor}: ${textSecondary};
                ${tokens.captionColorError}: ${textNegative};

                ${tokens.codeColor}: ${textPrimary};
                ${tokens.codeColorError}: ${textNegative};
                ${tokens.borderColorFocus}: ${outlineAccent};

                ${tokens.backgroundColor}: ${surfaceTransparentPrimary};
                ${tokens.backgroundColorHover}: ${surfaceTransparentPrimaryHover};
                ${tokens.backgroundColorFocus}: ${surfaceTransparentSecondary};
                ${tokens.backgroundErrorColor}: ${surfaceTransparentNegative};
            `,
        },
        size: {
            l: css`
                ${tokens.captionGap}: 0.875rem;
                ${tokens.codeItemsGap}: 0.125rem;

                ${tokens.separatorWidth}: 0.25rem;

                ${tokens.codeItemWidth}: 2.75rem;
                ${tokens.codeItemHeight}: 3.5rem;

                ${tokens.fontFamily}: ${bodyL.fontFamily};
                ${tokens.fontSize}: ${bodyL.fontSize};
                ${tokens.fontStyle}: ${bodyL.fontStyle};
                ${tokens.fontWeight}: ${bodyLBold.fontWeight};
                ${tokens.letterSpacing}: ${bodyL.letterSpacing};
                ${tokens.lineHeight}: ${bodyL.lineHeight};

                ${tokens.captionFontFamily}: ${bodyS.fontFamily};
                ${tokens.captionFontSize}: ${bodyS.fontSize};
                ${tokens.captionFontStyle}: ${bodyS.fontStyle};
                ${tokens.captionFontWeight}: ${bodyS.fontWeight};
                ${tokens.captionLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.captionLineHeight}: ${bodyS.lineHeight};

                ${tokens.borderRadius}: 0.875rem;
                ${tokens.borderRadiusSegmented}: 0.375rem;
                ${tokens.segmentedSideBorderRadius}: 0.875rem;
            `,
            m: css`
                ${tokens.captionGap}: 0.75rem;
                ${tokens.codeItemsGap}: 0.125rem;

                ${tokens.separatorWidth}: 0.25rem;

                ${tokens.codeItemWidth}: 2.375rem;
                ${tokens.codeItemHeight}: 3rem;

                ${tokens.fontFamily}: ${bodyM.fontFamily};
                ${tokens.fontSize}: ${bodyM.fontSize};
                ${tokens.fontStyle}: ${bodyM.fontStyle};
                ${tokens.fontWeight}: ${bodyMBold.fontWeight};
                ${tokens.letterSpacing}: ${bodyM.letterSpacing};
                ${tokens.lineHeight}: ${bodyM.lineHeight};

                ${tokens.captionFontFamily}: ${bodyXS.fontFamily};
                ${tokens.captionFontSize}: ${bodyXS.fontSize};
                ${tokens.captionFontStyle}: ${bodyXS.fontStyle};
                ${tokens.captionFontWeight}: ${bodyXS.fontWeight};
                ${tokens.captionLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.captionLineHeight}: ${bodyXS.lineHeight};

                ${tokens.borderRadius}: 0.75rem;
                ${tokens.borderRadiusSegmented}: 0.25rem;
                ${tokens.segmentedSideBorderRadius}: 0.75rem;
            `,
        },
        shape: {
            default: css``,
            segmented: css``,
        },
        disabled: {
            true: css`
                ${tokens.disabledOpacity}: 0.4;
            `,
        },
    },
};
