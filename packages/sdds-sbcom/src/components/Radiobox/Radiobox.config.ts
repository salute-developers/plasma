import { css, radioboxTokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    /*
     * NOTE: Mixed DS tokens + raw vars. Prefer @salutejs-ds/sdds_sbcom/theme/tokens where possible.
     * Missing tokens in @salutejs/sdds-themes/tokens: bodyM, bodyXs
     */
    bodyL,
    bodyS,
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
} from '@salutejs-ds/sdds_sbcom/theme/tokens';

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
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${radioboxTokens.descriptionFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${radioboxTokens.descriptionFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${radioboxTokens.descriptionFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${radioboxTokens.descriptionFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${radioboxTokens.descriptionLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${radioboxTokens.descriptionLineHeight}: var(--plasma-typo-body-xs-line-height);
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
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${radioboxTokens.labelFontFamily}: var(--plasma-typo-body-m-font-family);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${radioboxTokens.labelFontSize}: var(--plasma-typo-body-m-font-size);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${radioboxTokens.labelFontStyle}: var(--plasma-typo-body-m-font-style);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${radioboxTokens.labelFontWeight}: var(--plasma-typo-body-m-font-weight);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${radioboxTokens.labelLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${radioboxTokens.labelLineHeight}: var(--plasma-typo-body-m-line-height);
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
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${radioboxTokens.descriptionFontFamily}: var(--plasma-typo-body-m-font-family);
                ${radioboxTokens.descriptionMarginTop}: 0.125rem;
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${radioboxTokens.descriptionFontSize}: var(--plasma-typo-body-m-font-size);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${radioboxTokens.descriptionFontStyle}: var(--plasma-typo-body-m-font-style);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${radioboxTokens.descriptionFontWeight}: var(--plasma-typo-body-m-font-weight);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${radioboxTokens.descriptionLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${radioboxTokens.descriptionLineHeight}: var(--plasma-typo-body-m-line-height);
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
