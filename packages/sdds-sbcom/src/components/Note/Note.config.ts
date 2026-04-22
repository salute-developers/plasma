import {
    bodyL,
    bodyLBold,
    bodyM,
    bodyMBold,
    bodyS,
    bodySBold,
    bodyXS,
    bodyXSBold,
    surfaceInfo,
    surfaceNegative,
    surfacePositive,
    surfaceTransparentSecondary,
    surfaceWarning,
    textInfo,
    textNegative,
    textPositive,
    textPrimary,
    textSecondary,
    textSecondaryHover,
    textWarning,
} from '@salutejs-ds/sdds_sbcom/theme/tokens';
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
                ${tokens.background}: ${surfacePositive};
                ${tokens.color}: ${textPrimary};
                ${tokens.contentBeforeColor}: ${textPositive};
            `,
            warning: css`
                ${tokens.background}: ${surfaceWarning};
                ${tokens.color}: ${textPrimary};
                ${tokens.contentBeforeColor}: ${textWarning};
            `,
            negative: css`
                ${tokens.background}: ${surfaceNegative};
                ${tokens.color}: ${textPrimary};
                ${tokens.contentBeforeColor}: ${textNegative};
            `,
            info: css`
                ${tokens.background}: ${surfaceInfo};
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

                ${tokens.titleFontFamily}: ${bodyL.fontFamily};
                ${tokens.titleFontSize}: ${bodyL.fontSize};
                ${tokens.titleFontStyle}: ${bodyL.fontStyle};
                ${tokens.titleFontWeight}: ${bodyLBold.fontWeight};
                ${tokens.titleLetterSpacing}: ${bodyL.letterSpacing};
                ${tokens.titleLineHeight}: ${bodyL.lineHeight};
                ${tokens.titlePaddingRight}: 1.875rem;

                ${tokens.textFontFamily}: ${bodyL.fontFamily};
                ${tokens.textFontSize}: ${bodyL.fontSize};
                ${tokens.textFontStyle}: ${bodyL.fontStyle};
                ${tokens.textFontWeight}: ${bodyL.fontWeight};
                ${tokens.textLetterSpacing}: ${bodyL.letterSpacing};
                ${tokens.textLineHeight}: ${bodyL.lineHeight};
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

                ${tokens.titleFontFamily}: ${bodyM.fontFamily};
                ${tokens.titleFontSize}: ${bodyM.fontSize};
                ${tokens.titleFontStyle}: ${bodyM.fontStyle};
                ${tokens.titleFontWeight}: ${bodyMBold.fontWeight};
                ${tokens.titleLetterSpacing}: ${bodyM.letterSpacing};
                ${tokens.titleLineHeight}: ${bodyM.lineHeight};
                ${tokens.titlePaddingRight}: 1.75rem;

                ${tokens.textFontFamily}: ${bodyM.fontFamily};
                ${tokens.textFontSize}: ${bodyM.fontSize};
                ${tokens.textFontStyle}: ${bodyM.fontStyle};
                ${tokens.textFontWeight}: ${bodyM.fontWeight};
                ${tokens.textLetterSpacing}: ${bodyM.letterSpacing};
                ${tokens.textLineHeight}: ${bodyM.lineHeight};
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

                ${tokens.titleFontFamily}: ${bodyS.fontFamily};
                ${tokens.titleFontSize}: ${bodyS.fontSize};
                ${tokens.titleFontStyle}: ${bodyS.fontStyle};
                ${tokens.titleFontWeight}: ${bodySBold.fontWeight};
                ${tokens.titleLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.titleLineHeight}: ${bodyS.lineHeight};
                ${tokens.titlePaddingRight}: 1.625rem;

                ${tokens.textFontFamily}: ${bodyS.fontFamily};
                ${tokens.textFontSize}: ${bodyS.fontSize};
                ${tokens.textFontStyle}: ${bodyS.fontStyle};
                ${tokens.textFontWeight}: ${bodyS.fontWeight};
                ${tokens.textLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.textLineHeight}: ${bodyS.lineHeight};
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

                ${tokens.titleFontFamily}: ${bodyXS.fontFamily};
                ${tokens.titleFontSize}: ${bodyXS.fontSize};
                ${tokens.titleFontStyle}: ${bodyXS.fontStyle};
                ${tokens.titleFontWeight}: ${bodyXSBold.fontWeight};
                ${tokens.titleLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.titleLineHeight}: ${bodyXS.lineHeight};
                ${tokens.titlePaddingRight}: 1.5rem;

                ${tokens.textFontFamily}: ${bodyXS.fontFamily};
                ${tokens.textFontSize}: ${bodyXS.fontSize};
                ${tokens.textFontStyle}: ${bodyXS.fontStyle};
                ${tokens.textFontWeight}: ${bodyXS.fontWeight};
                ${tokens.textLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.textLineHeight}: ${bodyXS.lineHeight};
            `,
        },
    },
};
