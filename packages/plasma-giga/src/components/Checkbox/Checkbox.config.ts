import { css, checkboxTokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    bodyL,
    bodyM,
    bodyS,
    bodyXS,
    inverseTextPrimary,
    onDarkTextPrimary,
    outlineNegative,
    outlinePositive,
    surfaceNegative,
    surfacePositive,
    surfaceSolidDefault,
    textAccent,
    textParagraph,
    textPositive,
    textPrimary,
    textSecondary,
    textTertiary,
    textWarning,
} from '@salutejs/plasma-themes/tokens/plasma_giga';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
        focused: 'true',
    },
    variations: {
        size: {
            s: css`
                ${checkboxTokens.margin}: 0;
                ${checkboxTokens.triggerPadding}: 0.0625rem;
                ${checkboxTokens.triggerSize}: 0.875rem;
                ${checkboxTokens.triggerBorderRadius}: 0.25rem;
                ${checkboxTokens.triggerBorderWidth}: 0.125rem;
                ${checkboxTokens.contentTopOffset}: 0;
                ${checkboxTokens.contentLeftOffset}: 0.5rem;
                ${checkboxTokens.descriptionMarginTop}: 0.125rem;
                ${checkboxTokens.labelFontFamily}: ${bodyS.fontFamily};
                ${checkboxTokens.labelFontSize}: ${bodyS.fontSize};
                ${checkboxTokens.labelFontStyle}: ${bodyS.fontStyle};
                ${checkboxTokens.labelFontWeight}: ${bodyS.fontWeight};
                ${checkboxTokens.labelLetterSpacing}: ${bodyS.letterSpacing};
                ${checkboxTokens.labelLineHeight}: ${bodyS.lineHeight};
                ${checkboxTokens.descriptionFontFamily}: ${bodyXS.fontFamily};
                ${checkboxTokens.descriptionFontSize}: ${bodyXS.fontSize};
                ${checkboxTokens.descriptionFontStyle}: ${bodyXS.fontStyle};
                ${checkboxTokens.descriptionFontWeight}: ${bodyXS.fontWeight};
                ${checkboxTokens.descriptionLetterSpacing}: ${bodyXS.letterSpacing};
                ${checkboxTokens.descriptionLineHeight}: ${bodyXS.lineHeight};
            `,
            m: css`
                ${checkboxTokens.margin}: 0;
                ${checkboxTokens.triggerPadding}: 0.125rem;
                ${checkboxTokens.triggerSize}: 1.25rem;
                ${checkboxTokens.triggerBorderRadius}: 0.375rem;
                ${checkboxTokens.triggerBorderWidth}: 0.125rem;
                ${checkboxTokens.contentTopOffset}: 0.125rem;
                ${checkboxTokens.contentLeftOffset}: 0.5rem;
                ${checkboxTokens.descriptionMarginTop}: 0.125rem;
                ${checkboxTokens.labelFontFamily}: ${bodyM.fontFamily};
                ${checkboxTokens.labelFontSize}: ${bodyM.fontSize};
                ${checkboxTokens.labelFontStyle}: ${bodyM.fontStyle};
                ${checkboxTokens.labelFontWeight}: ${bodyM.fontWeight};
                ${checkboxTokens.labelLetterSpacing}: ${bodyM.letterSpacing};
                ${checkboxTokens.labelLineHeight}: ${bodyM.lineHeight};
                ${checkboxTokens.descriptionFontFamily}: ${bodyS.fontFamily};
                ${checkboxTokens.descriptionFontSize}: ${bodyS.fontSize};
                ${checkboxTokens.descriptionFontStyle}: ${bodyS.fontStyle};
                ${checkboxTokens.descriptionFontWeight}: ${bodyS.fontWeight};
                ${checkboxTokens.descriptionLetterSpacing}: ${bodyS.letterSpacing};
                ${checkboxTokens.descriptionLineHeight}: ${bodyS.lineHeight};
            `,
            l: css`
                ${checkboxTokens.margin}: 0;
                ${checkboxTokens.triggerPadding}: 0.125rem;
                ${checkboxTokens.triggerSize}: 1.25rem;
                ${checkboxTokens.triggerBorderRadius}: 0.375rem;
                ${checkboxTokens.triggerBorderWidth}: 0.125rem;
                ${checkboxTokens.contentTopOffset}: 0.0625rem;
                ${checkboxTokens.contentLeftOffset}: 0.75rem;
                ${checkboxTokens.labelFontFamily}: ${bodyL.fontFamily};
                ${checkboxTokens.labelFontSize}: ${bodyL.fontSize};
                ${checkboxTokens.labelFontStyle}: ${bodyL.fontStyle};
                ${checkboxTokens.labelFontWeight}: ${bodyL.fontWeight};
                ${checkboxTokens.labelLetterSpacing}: ${bodyL.letterSpacing};
                ${checkboxTokens.labelLineHeight}: ${bodyL.lineHeight};
                ${checkboxTokens.descriptionMarginTop}: 0.125rem;
                ${checkboxTokens.descriptionFontFamily}: ${bodyM.fontFamily};
                ${checkboxTokens.descriptionFontSize}: ${bodyM.fontSize};
                ${checkboxTokens.descriptionFontStyle}: ${bodyM.fontStyle};
                ${checkboxTokens.descriptionFontWeight}: ${bodyM.fontWeight};
                ${checkboxTokens.descriptionLetterSpacing}: ${bodyM.letterSpacing};
                ${checkboxTokens.descriptionLineHeight}: ${bodyM.lineHeight};
            `,
        },
        view: {
            default: css`
                ${checkboxTokens.fillColor}: ${surfaceSolidDefault};
                ${checkboxTokens.iconColor}: ${inverseTextPrimary};
                ${checkboxTokens.labelColor}: ${textPrimary};
                ${checkboxTokens.descriptionColor}: ${textSecondary};
                ${checkboxTokens.triggerBackgroundColor}: transparent;
                ${checkboxTokens.triggerBorderColor}: ${textSecondary};
                ${checkboxTokens.triggerBorderCheckedColor}: transparent;
            `,
            positive: css`
                ${checkboxTokens.fillColor}: ${textPositive};
                ${checkboxTokens.iconColor}: ${onDarkTextPrimary};
                ${checkboxTokens.labelColor}: ${textPrimary};
                ${checkboxTokens.descriptionColor}: ${textSecondary};
                ${checkboxTokens.triggerBackgroundColor}: transparent;
                ${checkboxTokens.triggerBorderColor}: ${textSecondary};
                ${checkboxTokens.triggerBorderCheckedColor}: transparent;
            `,
            negative: css`
                ${checkboxTokens.fillColor}: ${surfaceNegative};
                ${checkboxTokens.iconColor}: ${onDarkTextPrimary};
                ${checkboxTokens.labelColor}: ${textPrimary};
                ${checkboxTokens.descriptionColor}: ${textSecondary};
                ${checkboxTokens.triggerBackgroundColor}: transparent;
                ${checkboxTokens.triggerBorderColor}: ${outlineNegative};
                ${checkboxTokens.triggerBorderCheckedColor}: transparent;
            `,
            // deprecated
            accent: css`
                ${checkboxTokens.fillColor}: ${surfacePositive};
                ${checkboxTokens.iconColor}: ${onDarkTextPrimary};
                ${checkboxTokens.labelColor}: ${textPrimary};
                ${checkboxTokens.descriptionColor}: ${textSecondary};
                ${checkboxTokens.triggerBackgroundColor}: transparent;
                ${checkboxTokens.triggerBorderColor}: ${outlinePositive};
                ${checkboxTokens.triggerBorderCheckedColor}: transparent;
            `,
            // deprecated
            secondary: css`
                ${checkboxTokens.fillColor}: ${textSecondary};
                ${checkboxTokens.iconColor}: ${inverseTextPrimary};
                ${checkboxTokens.descriptionColor}: ${textSecondary};
                ${checkboxTokens.triggerBackgroundColor}: transparent;
                ${checkboxTokens.triggerBorderColor}: ${textSecondary};
                ${checkboxTokens.triggerBorderCheckedColor}: transparent;
            `,
            // deprecated
            tertiary: css`
                ${checkboxTokens.fillColor}: ${textTertiary};
                ${checkboxTokens.iconColor}: ${inverseTextPrimary};
                ${checkboxTokens.descriptionColor}: ${textSecondary};
                ${checkboxTokens.triggerBackgroundColor}: transparent;
                ${checkboxTokens.triggerBorderColor}: ${textSecondary};
                ${checkboxTokens.triggerBorderCheckedColor}: transparent;
            `,
            // deprecated
            paragraph: css`
                ${checkboxTokens.fillColor}: ${textParagraph};
                ${checkboxTokens.iconColor}: ${inverseTextPrimary};
                ${checkboxTokens.descriptionColor}: ${textSecondary};
                ${checkboxTokens.triggerBackgroundColor}: transparent;
                ${checkboxTokens.triggerBorderColor}: ${textSecondary};
                ${checkboxTokens.triggerBorderCheckedColor}: transparent;
            `,
            // deprecated
            warning: css`
                ${checkboxTokens.fillColor}: ${textWarning};
                ${checkboxTokens.iconColor}: ${onDarkTextPrimary};
                ${checkboxTokens.descriptionColor}: ${textSecondary};
                ${checkboxTokens.triggerBackgroundColor}: transparent;
                ${checkboxTokens.triggerBorderColor}: ${textSecondary};
                ${checkboxTokens.triggerBorderCheckedColor}: transparent;
            `,
        },
        disabled: {
            true: css`
                ${checkboxTokens.disabledOpacity}: 0.4;
            `,
        },
        focused: {
            true: css`
                ${checkboxTokens.focusColor}: ${textAccent};
            `,
        },
    },
};
