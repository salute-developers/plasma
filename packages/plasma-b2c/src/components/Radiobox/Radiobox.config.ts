import {
    bodyL,
    bodyM,
    bodyS,
    bodyXS,
    inverseTextPrimary,
    onDarkTextPrimary,
    textAccent,
    textNegative,
    textParagraph,
    textPositive,
    textPrimary,
    textSecondary,
    textTertiary,
    textWarning,
} from '@salutejs/plasma-themes/tokens/plasma_b2c';
import { css, radioboxTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'accent',
        size: 'm',
        focused: 'true',
    },
    variations: {
        /**
         * Размер контрола.
         */
        size: {
            s: css`
                ${radioboxTokens.margin}: 0;
                ${radioboxTokens.triggerPadding}: 0.0625rem 0;
                ${radioboxTokens.triggerSize}: 1rem;
                ${radioboxTokens.triggerBorderRadius}: 1.125rem;
                ${radioboxTokens.triggerBorderWidth}: 0.125rem;
                ${radioboxTokens.ellipseSize}: 0.5rem;
                ${radioboxTokens.contentTopOffset}: 0;
                ${radioboxTokens.contentLeftOffset}: 0.5rem;
                ${radioboxTokens.descriptionMarginTop}: 0.125rem;
                ${radioboxTokens.labelFontFamily}: ${bodyS.fontFamily};
                ${radioboxTokens.labelFontSize}: ${bodyS.fontSize};
                ${radioboxTokens.labelFontStyle}: ${bodyS.fontStyle};
                ${radioboxTokens.labelFontWeight}: ${bodyS.fontWeight};
                ${radioboxTokens.labelLetterSpacing}: ${bodyS.letterSpacing};
                ${radioboxTokens.labelLineHeight}: ${bodyS.lineHeight};
                ${radioboxTokens.descriptionFontFamily}: ${bodyXS.fontFamily};
                ${radioboxTokens.descriptionFontSize}: ${bodyXS.fontSize};
                ${radioboxTokens.descriptionFontStyle}: ${bodyXS.fontStyle};
                ${radioboxTokens.descriptionFontWeight}: ${bodyXS.fontWeight};
                ${radioboxTokens.descriptionLetterSpacing}: ${bodyXS.letterSpacing};
                ${radioboxTokens.descriptionLineHeight}: ${bodyXS.lineHeight};
            `,
            m: css`
                ${radioboxTokens.margin}: 0;
                ${radioboxTokens.triggerPadding}: 0.0625rem;
                ${radioboxTokens.triggerSize}: 1.375rem;
                ${radioboxTokens.triggerBorderRadius}: 1.125rem;
                ${radioboxTokens.triggerBorderWidth}: 0.125rem;
                ${radioboxTokens.ellipseSize}: 0.625rem;
                ${radioboxTokens.contentTopOffset}: 0.125rem;
                ${radioboxTokens.contentLeftOffset}: 0.625rem;
                ${radioboxTokens.descriptionMarginTop}: 0.125rem;
                ${radioboxTokens.labelFontFamily}: ${bodyM.fontFamily};
                ${radioboxTokens.labelFontSize}: ${bodyM.fontSize};
                ${radioboxTokens.labelFontStyle}: ${bodyM.fontStyle};
                ${radioboxTokens.labelFontWeight}: ${bodyM.fontWeight};
                ${radioboxTokens.labelLetterSpacing}: ${bodyM.letterSpacing};
                ${radioboxTokens.labelLineHeight}: ${bodyM.lineHeight};
                ${radioboxTokens.descriptionFontFamily}: ${bodyS.fontFamily};
                ${radioboxTokens.descriptionFontSize}: ${bodyS.fontSize};
                ${radioboxTokens.descriptionFontStyle}: ${bodyS.fontStyle};
                ${radioboxTokens.descriptionFontWeight}: ${bodyS.fontWeight};
                ${radioboxTokens.descriptionLetterSpacing}: ${bodyS.letterSpacing};
                ${radioboxTokens.descriptionLineHeight}: ${bodyS.lineHeight};
            `,
            l: css`
                ${radioboxTokens.margin}: 0;
                ${radioboxTokens.triggerPadding}: 0.0625rem;
                ${radioboxTokens.triggerSize}: 1.375rem;
                ${radioboxTokens.triggerBorderRadius}: 1.125rem;
                ${radioboxTokens.triggerBorderWidth}: 0.125rem;
                ${radioboxTokens.ellipseSize}: 0.625rem;
                ${radioboxTokens.contentTopOffset}: 0.0625rem;
                ${radioboxTokens.contentLeftOffset}: 0.75rem;
                ${radioboxTokens.labelFontFamily}: ${bodyL.fontFamily};
                ${radioboxTokens.labelFontSize}: ${bodyL.fontSize};
                ${radioboxTokens.labelFontStyle}: ${bodyL.fontStyle};
                ${radioboxTokens.labelFontWeight}: ${bodyL.fontWeight};
                ${radioboxTokens.labelLetterSpacing}: ${bodyL.letterSpacing};
                ${radioboxTokens.labelLineHeight}: ${bodyL.lineHeight};
                ${radioboxTokens.descriptionFontFamily}: ${bodyM.fontFamily};
                ${radioboxTokens.descriptionMarginTop}: 0.125rem;
                ${radioboxTokens.descriptionFontSize}: ${bodyM.fontSize};
                ${radioboxTokens.descriptionFontStyle}: ${bodyM.fontStyle};
                ${radioboxTokens.descriptionFontWeight}: ${bodyM.fontWeight};
                ${radioboxTokens.descriptionLetterSpacing}: ${bodyM.letterSpacing};
                ${radioboxTokens.descriptionLineHeight}: ${bodyM.lineHeight};
            `,
        },
        /**
         * Вид контрола.
         */
        view: {
            accent: css`
                ${radioboxTokens.fillColor}: ${textAccent};
                ${radioboxTokens.ellipseColor}: ${onDarkTextPrimary};
                ${radioboxTokens.descriptionColor}: ${textSecondary};
                ${radioboxTokens.triggerBackgroundColor}: transparent;
                ${radioboxTokens.triggerBorderColor}: ${textSecondary};
                ${radioboxTokens.triggerBorderCheckedColor}: transparent;
            `,
            // deprecated
            default: css`
                ${radioboxTokens.fillColor}: ${textPrimary};
                ${radioboxTokens.ellipseColor}: ${inverseTextPrimary};
                ${radioboxTokens.descriptionColor}: ${textSecondary};
                ${radioboxTokens.triggerBackgroundColor}: transparent;
                ${radioboxTokens.triggerBorderColor}: ${textSecondary};
                ${radioboxTokens.triggerBorderCheckedColor}: transparent;
            `,
            // deprecated
            primary: css`
                ${radioboxTokens.fillColor}: ${textPrimary};
                ${radioboxTokens.ellipseColor}: ${inverseTextPrimary};
                ${radioboxTokens.descriptionColor}: ${textSecondary};
                ${radioboxTokens.triggerBackgroundColor}: transparent;
                ${radioboxTokens.triggerBorderColor}: ${textSecondary};
                ${radioboxTokens.triggerBorderCheckedColor}: transparent;
            `,
            // deprecated
            secondary: css`
                ${radioboxTokens.fillColor}: ${textSecondary};
                ${radioboxTokens.ellipseColor}: ${inverseTextPrimary};
                ${radioboxTokens.descriptionColor}: ${textSecondary};
                ${radioboxTokens.triggerBackgroundColor}: transparent;
                ${radioboxTokens.triggerBorderColor}: ${textSecondary};
                ${radioboxTokens.triggerBorderCheckedColor}: transparent;
            `,
            // deprecated
            tertiary: css`
                ${radioboxTokens.fillColor}: ${textTertiary};
                ${radioboxTokens.ellipseColor}: ${inverseTextPrimary};
                ${radioboxTokens.descriptionColor}: ${textSecondary};
                ${radioboxTokens.triggerBackgroundColor}: transparent;
                ${radioboxTokens.triggerBorderColor}: ${textSecondary};
                ${radioboxTokens.triggerBorderCheckedColor}: transparent;
            `,
            // deprecated
            paragraph: css`
                ${radioboxTokens.fillColor}: ${textParagraph};
                ${radioboxTokens.ellipseColor}: ${inverseTextPrimary};
                ${radioboxTokens.descriptionColor}: ${textSecondary};
                ${radioboxTokens.triggerBackgroundColor}: transparent;
                ${radioboxTokens.triggerBorderColor}: ${textSecondary};
                ${radioboxTokens.triggerBorderCheckedColor}: transparent;
            `,
            // deprecated
            positive: css`
                ${radioboxTokens.fillColor}: ${textPositive};
                ${radioboxTokens.ellipseColor}: ${onDarkTextPrimary};
                ${radioboxTokens.descriptionColor}: ${textSecondary};
                ${radioboxTokens.triggerBackgroundColor}: transparent;
                ${radioboxTokens.triggerBorderColor}: ${textSecondary};
                ${radioboxTokens.triggerBorderCheckedColor}: transparent;
            `,
            // deprecated
            warning: css`
                ${radioboxTokens.fillColor}: ${textWarning};
                ${radioboxTokens.ellipseColor}: ${onDarkTextPrimary};
                ${radioboxTokens.descriptionColor}: ${textSecondary};
                ${radioboxTokens.triggerBackgroundColor}: transparent;
                ${radioboxTokens.triggerBorderColor}: ${textSecondary};
                ${radioboxTokens.triggerBorderCheckedColor}: transparent;
            `,
            // deprecated
            negative: css`
                ${radioboxTokens.fillColor}: ${textNegative};
                ${radioboxTokens.ellipseColor}: ${onDarkTextPrimary};
                ${radioboxTokens.descriptionColor}: ${textSecondary};
                ${radioboxTokens.triggerBackgroundColor}: transparent;
                ${radioboxTokens.triggerBorderColor}: ${textSecondary};
                ${radioboxTokens.triggerBorderCheckedColor}: transparent;
            `,
        },
        disabled: {
            true: css`
                ${radioboxTokens.disabledOpacity}: 0.4;
            `,
        },
        focused: {
            true: css`
                ${radioboxTokens.focusColor}: ${textAccent};
            `,
        },
    },
};
