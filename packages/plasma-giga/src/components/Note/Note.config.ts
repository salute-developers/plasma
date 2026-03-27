import {
    surfaceTransparentInfo,
    surfaceTransparentNegative,
    surfaceTransparentPositive,
    surfaceTransparentSecondary,
    surfaceTransparentWarning,
    textInfo,
    textL,
    textLBold,
    textM,
    textMBold,
    textNegative,
    textPositive,
    textPrimary,
    textS,
    textSBold,
    textSecondary,
    textSecondaryHover,
    textWarning,
    textXS,
    textXSBold,
} from '@salutejs/plasma-themes/tokens/plasma_giga';
import { css, noteTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 'l',
    },
    variations: {
        view: {
            default: css`
                ${tokens.background}: ${surfaceTransparentSecondary};
                ${tokens.color}: ${textPrimary};
                ${tokens.contentBeforeColor}: ${textPrimary};
            `,
            positive: css`
                ${tokens.background}: ${surfaceTransparentPositive};
                ${tokens.color}: ${textPrimary};
                ${tokens.contentBeforeColor}: ${textPositive};
            `,
            warning: css`
                ${tokens.background}: ${surfaceTransparentWarning};
                ${tokens.color}: ${textPrimary};
                ${tokens.contentBeforeColor}: ${textWarning};
            `,
            negative: css`
                ${tokens.background}: ${surfaceTransparentNegative};
                ${tokens.color}: ${textPrimary};
                ${tokens.contentBeforeColor}: ${textNegative};
            `,
            info: css`
                ${tokens.background}: ${surfaceTransparentInfo};
                ${tokens.color}: ${textPrimary};
                ${tokens.contentBeforeColor}: ${textInfo};
            `,
        },
        size: {
            l: css`
                ${tokens.padding}: 1.5rem 1.875rem;
                ${tokens.paddingScalable}: 1.5rem 1.75rem;
                ${tokens.borderRadius}: 0.875rem;
                ${tokens.gap}: 0.75rem;
                ${tokens.gapScalable}: 1rem;
                ${tokens.contentGap}: 0.25rem;

                ${tokens.closeIconTop}: 1rem;
                ${tokens.closeIconRight}: 1rem;
                ${tokens.closeIconColor}: ${textSecondary};
                ${tokens.closeIconColorOnHover}: ${textSecondaryHover};
                ${tokens.closeIconSize}: 1.5rem;
                ${tokens.closeIconButtonSize}: 1.5rem;

                ${tokens.fixedContentBeforeWidth}: 1.5rem;
                ${tokens.fixedContentBeforeHeight}: 2rem;
                ${tokens.fixedContentBeforePadding}: 0.25rem 0;

                ${tokens.titleFontFamily}: ${textL.fontFamily};
                ${tokens.titleFontSize}: ${textL.fontSize};
                ${tokens.titleFontStyle}: ${textL.fontStyle};
                ${tokens.titleFontWeight}: ${textLBold.fontWeight};
                ${tokens.titleLetterSpacing}: ${textL.letterSpacing};
                ${tokens.titleLineHeight}: ${textL.lineHeight};
                ${tokens.titlePaddingRight}: 1.875rem;

                ${tokens.textFontFamily}: ${textL.fontFamily};
                ${tokens.textFontSize}: ${textL.fontSize};
                ${tokens.textFontStyle}: ${textL.fontStyle};
                ${tokens.textFontWeight}: ${textL.fontWeight};
                ${tokens.textLetterSpacing}: ${textL.letterSpacing};
                ${tokens.textLineHeight}: ${textL.lineHeight};
            `,
            m: css`
                ${tokens.padding}: 1.25rem 1.5rem;
                ${tokens.paddingScalable}: 1.25rem;
                ${tokens.borderRadius}: 0.75rem;
                ${tokens.gap}: 0.625rem;
                ${tokens.gapScalable}: 0.75rem;
                ${tokens.contentGap}: 0.125rem;

                ${tokens.closeIconTop}: 0.75rem;
                ${tokens.closeIconRight}: 0.75rem;
                ${tokens.closeIconColor}: ${textSecondary};
                ${tokens.closeIconColorOnHover}: ${textSecondaryHover};
                ${tokens.closeIconSize}: 1.5rem;
                ${tokens.closeIconButtonSize}: 1.5rem;

                ${tokens.fixedContentBeforeWidth}: 1.5rem;
                ${tokens.fixedContentBeforeHeight}: 1.5rem;
                ${tokens.fixedContentBeforePadding}: 0;

                ${tokens.titleFontFamily}: ${textM.fontFamily};
                ${tokens.titleFontSize}: ${textM.fontSize};
                ${tokens.titleFontStyle}: ${textM.fontStyle};
                ${tokens.titleFontWeight}: ${textMBold.fontWeight};
                ${tokens.titleLetterSpacing}: ${textM.letterSpacing};
                ${tokens.titleLineHeight}: ${textM.lineHeight};
                ${tokens.titlePaddingRight}: 1.75rem;

                ${tokens.textFontFamily}: ${textM.fontFamily};
                ${tokens.textFontSize}: ${textM.fontSize};
                ${tokens.textFontStyle}: ${textM.fontStyle};
                ${tokens.textFontWeight}: ${textM.fontWeight};
                ${tokens.textLetterSpacing}: ${textM.letterSpacing};
                ${tokens.textLineHeight}: ${textM.lineHeight};
            `,
            s: css`
                ${tokens.padding}: 1rem 1.25rem;
                ${tokens.paddingScalable}: 1rem;
                ${tokens.borderRadius}: 0.625rem;
                ${tokens.gap}: 0.5rem;
                ${tokens.gapScalable}: 0.75rem;
                ${tokens.contentGap}: 0.125rem;

                ${tokens.closeIconTop}: 0.625rem;
                ${tokens.closeIconRight}: 0.625rem;
                ${tokens.closeIconColor}: ${textSecondary};
                ${tokens.closeIconColorOnHover}: ${textSecondaryHover};
                ${tokens.closeIconSize}: 1.5rem;
                ${tokens.closeIconButtonSize}: 1.5rem;

                ${tokens.fixedContentBeforeWidth}: 1rem;
                ${tokens.fixedContentBeforeHeight}: 1.125rem;
                ${tokens.fixedContentBeforePadding}: 0.063rem 0;

                ${tokens.titleFontFamily}: ${textS.fontFamily};
                ${tokens.titleFontSize}: ${textS.fontSize};
                ${tokens.titleFontStyle}: ${textS.fontStyle};
                ${tokens.titleFontWeight}: ${textSBold.fontWeight};
                ${tokens.titleLetterSpacing}: ${textS.letterSpacing};
                ${tokens.titleLineHeight}: ${textS.lineHeight};
                ${tokens.titlePaddingRight}: 1.625rem;

                ${tokens.textFontFamily}: ${textS.fontFamily};
                ${tokens.textFontSize}: ${textS.fontSize};
                ${tokens.textFontStyle}: ${textS.fontStyle};
                ${tokens.textFontWeight}: ${textS.fontWeight};
                ${tokens.textLetterSpacing}: ${textS.letterSpacing};
                ${tokens.textLineHeight}: ${textS.lineHeight};
            `,
            xs: css`
                ${tokens.padding}: 0.75rem 1rem;
                ${tokens.paddingScalable}: 0.75rem;
                ${tokens.borderRadius}: 0.5rem;
                ${tokens.gap}: 0.375rem;
                ${tokens.gapScalable}: 0.5rem;
                ${tokens.contentGap}: 0.125rem;

                ${tokens.closeIconTop}: 0.625rem;
                ${tokens.closeIconRight}: 0.625rem;
                ${tokens.closeIconColor}: ${textSecondary};
                ${tokens.closeIconColorOnHover}: ${textSecondaryHover};
                ${tokens.closeIconSize}: 1rem;
                ${tokens.closeIconButtonSize}: 1rem;

                ${tokens.fixedContentBeforeWidth}: 1rem;
                ${tokens.fixedContentBeforeHeight}: 1rem;
                ${tokens.fixedContentBeforePadding}: 0;

                ${tokens.titleFontFamily}: ${textXS.fontFamily};
                ${tokens.titleFontSize}: ${textXS.fontSize};
                ${tokens.titleFontStyle}: ${textXS.fontStyle};
                ${tokens.titleFontWeight}: ${textXSBold.fontWeight};
                ${tokens.titleLetterSpacing}: ${textXS.letterSpacing};
                ${tokens.titleLineHeight}: ${textXS.lineHeight};
                ${tokens.titlePaddingRight}: 1.5rem;

                ${tokens.textFontFamily}: ${textXS.fontFamily};
                ${tokens.textFontSize}: ${textXS.fontSize};
                ${tokens.textFontStyle}: ${textXS.fontStyle};
                ${tokens.textFontWeight}: ${textXS.fontWeight};
                ${tokens.textLetterSpacing}: ${textXS.letterSpacing};
                ${tokens.textLineHeight}: ${textXS.lineHeight};
            `,
        },
    },
};
