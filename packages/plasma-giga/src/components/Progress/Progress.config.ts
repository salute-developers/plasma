import { css, progressTokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    bodyL,
    bodyM,
    bodyS,
    bodyXS,
    surfaceAccent,
    surfaceAccentGradient,
    surfaceInfo,
    surfaceNegative,
    surfacePositive,
    surfaceSolidDefault,
    surfaceTransparentSecondary,
    surfaceTransparentTertiary,
    surfaceWarning,
    textNegative,
    textPositive,
    textPrimary,
    textSecondary,
    textWarning,
} from '@salutejs/plasma-themes/tokens/plasma_giga';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
        progressSize: '4',
    },
    variations: {
        view: {
            default: css`
                ${progressTokens.trackBackgroundColor}: ${surfaceTransparentSecondary};
                ${progressTokens.progressFilledBackgroundColor}: ${surfaceSolidDefault};
                ${progressTokens.labelColor}: ${textPrimary};
                ${progressTokens.labelIconColor}: ${textPrimary};
                ${progressTokens.valueColor}: ${textSecondary};
                ${progressTokens.captionColor}: ${textSecondary};
            `,
            secondary: css`
                ${progressTokens.trackBackgroundColor}: ${surfaceTransparentSecondary};
                ${progressTokens.progressFilledBackgroundColor}: ${surfaceTransparentTertiary};
                ${progressTokens.labelColor}: ${textPrimary};
                ${progressTokens.labelIconColor}: ${textPrimary};
                ${progressTokens.valueColor}: ${textSecondary};
                ${progressTokens.captionColor}: ${textSecondary};
            `,
            // deprecated
            primary: css`
                ${progressTokens.trackBackgroundColor}: ${surfaceTransparentSecondary};
                ${progressTokens.progressFilledBackgroundColor}: ${surfaceAccent};
                ${progressTokens.labelColor}: ${textPrimary};
                ${progressTokens.labelIconColor}: ${textPrimary};
                ${progressTokens.valueColor}: ${textSecondary};
                ${progressTokens.captionColor}: ${textSecondary};
            `,
            accent: css`
                ${progressTokens.trackBackgroundColor}: ${surfaceTransparentSecondary};
                ${progressTokens.progressFilledBackgroundColor}: ${surfaceAccent};
                ${progressTokens.labelColor}: ${textPrimary};
                ${progressTokens.labelIconColor}: ${textPrimary};
                ${progressTokens.valueColor}: ${textSecondary};
                ${progressTokens.captionColor}: ${textSecondary};
            `,
            accentGradient: css`
                ${progressTokens.trackBackgroundColor}: ${surfaceTransparentSecondary};
                ${progressTokens.progressFilledBackgroundColor}: ${surfaceAccentGradient};
                ${progressTokens.labelColor}: ${textPrimary};
                ${progressTokens.labelIconColor}: ${textPrimary};
                ${progressTokens.valueColor}: ${textSecondary};
                ${progressTokens.captionColor}: ${textSecondary};
            `,
            info: css`
                ${progressTokens.trackBackgroundColor}: ${surfaceTransparentSecondary};
                ${progressTokens.progressFilledBackgroundColor}: ${surfaceInfo};
                ${progressTokens.labelColor}: ${textPrimary};
                ${progressTokens.labelIconColor}: ${textPrimary};
                ${progressTokens.valueColor}: ${textSecondary};
                ${progressTokens.captionColor}: ${textSecondary};
            `,
            // deprecated
            success: css`
                ${progressTokens.trackBackgroundColor}: ${surfaceTransparentSecondary};
                ${progressTokens.progressFilledBackgroundColor}: ${surfacePositive};
                ${progressTokens.labelColor}: ${textPrimary};
                ${progressTokens.labelIconColor}: ${textPrimary};
                ${progressTokens.valueColor}: ${textSecondary};
                ${progressTokens.captionColor}: ${textPositive};
            `,
            positive: css`
                ${progressTokens.trackBackgroundColor}: ${surfaceTransparentSecondary};
                ${progressTokens.progressFilledBackgroundColor}: ${surfacePositive};
                ${progressTokens.labelColor}: ${textPrimary};
                ${progressTokens.labelIconColor}: ${textPrimary};
                ${progressTokens.valueColor}: ${textSecondary};
                ${progressTokens.captionColor}: ${textPositive};
            `,
            warning: css`
                ${progressTokens.trackBackgroundColor}: ${surfaceTransparentSecondary};
                ${progressTokens.progressFilledBackgroundColor}: ${surfaceWarning};
                ${progressTokens.labelColor}: ${textPrimary};
                ${progressTokens.labelIconColor}: ${textPrimary};
                ${progressTokens.valueColor}: ${textSecondary};
                ${progressTokens.captionColor}: ${textWarning};
            `,
            // deprecated
            error: css`
                ${progressTokens.trackBackgroundColor}: ${surfaceTransparentSecondary};
                ${progressTokens.progressFilledBackgroundColor}: ${surfaceNegative};
                ${progressTokens.labelColor}: ${textPrimary};
                ${progressTokens.labelIconColor}: ${textPrimary};
                ${progressTokens.valueColor}: ${textSecondary};
                ${progressTokens.captionColor}: ${textNegative};
            `,
            negative: css`
                ${progressTokens.trackBackgroundColor}: ${surfaceTransparentSecondary};
                ${progressTokens.progressFilledBackgroundColor}: ${surfaceNegative};
                ${progressTokens.labelColor}: ${textPrimary};
                ${progressTokens.labelIconColor}: ${textPrimary};
                ${progressTokens.valueColor}: ${textSecondary};
                ${progressTokens.captionColor}: ${textNegative};
            `,
        },
        size: {
            l: css`
                ${progressTokens.topRowMarginBottom}: 1.25rem;
                ${progressTokens.labelWrapperGap}: 0.375rem;
                ${progressTokens.labelWrapperMarginRight}: 1.5rem;

                ${progressTokens.labelFontFamily}: ${bodyL.fontFamily};
                ${progressTokens.labelFontSize}: ${bodyL.fontSize};
                ${progressTokens.labelFontStyle}: ${bodyL.fontStyle};
                ${progressTokens.labelFontWeight}: ${bodyL.fontWeight};
                ${progressTokens.labelLetterSpacing}: ${bodyL.letterSpacing};
                ${progressTokens.labelLineHeight}: ${bodyL.lineHeight};

                ${progressTokens.valueFontFamily}: ${bodyL.fontFamily};
                ${progressTokens.valueFontSize}: ${bodyL.fontSize};
                ${progressTokens.valueFontStyle}: ${bodyL.fontStyle};
                ${progressTokens.valueFontWeight}: ${bodyL.fontWeight};
                ${progressTokens.valueLetterSpacing}: ${bodyL.letterSpacing};
                ${progressTokens.valueLineHeight}: ${bodyL.lineHeight};
                ${progressTokens.valueMarginLeft}: 1.5rem;

                ${progressTokens.captionFontFamily}: ${bodyXS.fontFamily};
                ${progressTokens.captionFontSize}: ${bodyXS.fontSize};
                ${progressTokens.captionFontStyle}: ${bodyXS.fontStyle};
                ${progressTokens.captionFontWeight}: ${bodyXS.fontWeight};
                ${progressTokens.captionLetterSpacing}: ${bodyXS.letterSpacing};
                ${progressTokens.captionLineHeight}: ${bodyXS.lineHeight};
                ${progressTokens.captionMarginTop}: 0.5rem;
            `,
            m: css`
                ${progressTokens.topRowMarginBottom}: 1rem;
                ${progressTokens.labelWrapperGap}: 0.375rem;
                ${progressTokens.labelWrapperMarginRight}: 1.25rem;

                ${progressTokens.labelFontFamily}: ${bodyM.fontFamily};
                ${progressTokens.labelFontSize}: ${bodyM.fontSize};
                ${progressTokens.labelFontStyle}: ${bodyM.fontStyle};
                ${progressTokens.labelFontWeight}: ${bodyM.fontWeight};
                ${progressTokens.labelLetterSpacing}: ${bodyM.letterSpacing};
                ${progressTokens.labelLineHeight}: ${bodyM.lineHeight};

                ${progressTokens.valueFontFamily}: ${bodyM.fontFamily};
                ${progressTokens.valueFontSize}: ${bodyM.fontSize};
                ${progressTokens.valueFontStyle}: ${bodyM.fontStyle};
                ${progressTokens.valueFontWeight}: ${bodyM.fontWeight};
                ${progressTokens.valueLetterSpacing}: ${bodyM.letterSpacing};
                ${progressTokens.valueLineHeight}: ${bodyM.lineHeight};
                ${progressTokens.valueMarginLeft}: 1.25rem;

                ${progressTokens.captionFontFamily}: ${bodyXS.fontFamily};
                ${progressTokens.captionFontSize}: ${bodyXS.fontSize};
                ${progressTokens.captionFontStyle}: ${bodyXS.fontStyle};
                ${progressTokens.captionFontWeight}: ${bodyXS.fontWeight};
                ${progressTokens.captionLetterSpacing}: ${bodyXS.letterSpacing};
                ${progressTokens.captionLineHeight}: ${bodyXS.lineHeight};
                ${progressTokens.captionMarginTop}: 0.5rem;
            `,
            s: css`
                ${progressTokens.topRowMarginBottom}: 0.875rem;
                ${progressTokens.labelWrapperGap}: 0.375rem;
                ${progressTokens.labelWrapperMarginRight}: 1rem;

                ${progressTokens.labelFontFamily}: ${bodyS.fontFamily};
                ${progressTokens.labelFontSize}: ${bodyS.fontSize};
                ${progressTokens.labelFontStyle}: ${bodyS.fontStyle};
                ${progressTokens.labelFontWeight}: ${bodyS.fontWeight};
                ${progressTokens.labelLetterSpacing}: ${bodyS.letterSpacing};
                ${progressTokens.labelLineHeight}: ${bodyS.lineHeight};

                ${progressTokens.valueFontFamily}: ${bodyS.fontFamily};
                ${progressTokens.valueFontSize}: ${bodyS.fontSize};
                ${progressTokens.valueFontStyle}: ${bodyS.fontStyle};
                ${progressTokens.valueFontWeight}: ${bodyS.fontWeight};
                ${progressTokens.valueLetterSpacing}: ${bodyS.letterSpacing};
                ${progressTokens.valueLineHeight}: ${bodyS.lineHeight};
                ${progressTokens.valueMarginLeft}: 1rem;

                ${progressTokens.captionFontFamily}: ${bodyXS.fontFamily};
                ${progressTokens.captionFontSize}: ${bodyXS.fontSize};
                ${progressTokens.captionFontStyle}: ${bodyXS.fontStyle};
                ${progressTokens.captionFontWeight}: ${bodyXS.fontWeight};
                ${progressTokens.captionLetterSpacing}: ${bodyXS.letterSpacing};
                ${progressTokens.captionLineHeight}: ${bodyXS.lineHeight};
                ${progressTokens.captionMarginTop}: 0.5rem;
            `,
        },
        progressSize: {
            2: css`
                ${progressTokens.trackHeight}: 0.125rem;
                ${progressTokens.trackBorderRadius}: 1000px;

                ${progressTokens.progressFilledHeight}: 0.125rem;
                ${progressTokens.progressFilledBorderRadius}: 1000px;
            `,
            4: css`
                ${progressTokens.trackHeight}: 0.25rem;
                ${progressTokens.trackBorderRadius}: 1000px;

                ${progressTokens.progressFilledHeight}: 0.25rem;
                ${progressTokens.progressFilledBorderRadius}: 1000px;
            `,
            6: css`
                ${progressTokens.trackHeight}: 0.375rem;
                ${progressTokens.trackBorderRadius}: 1000px;

                ${progressTokens.progressFilledHeight}: 0.375rem;
                ${progressTokens.progressFilledBorderRadius}: 1000px;
            `,
            8: css`
                ${progressTokens.trackHeight}: 0.5rem;
                ${progressTokens.trackBorderRadius}: 1000px;

                ${progressTokens.progressFilledHeight}: 0.5rem;
                ${progressTokens.progressFilledBorderRadius}: 1000px;
            `,
        },
    },
};
