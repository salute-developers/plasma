import { checkboxTokens, css } from '@salutejs/plasma-new-hope/styled-components';
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
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${checkboxTokens.descriptionFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${checkboxTokens.descriptionFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${checkboxTokens.descriptionFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${checkboxTokens.descriptionFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${checkboxTokens.descriptionLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${checkboxTokens.descriptionLineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
            m: css`
                ${checkboxTokens.margin}: 0;
                ${checkboxTokens.triggerPadding}: 0.125rem;
                ${checkboxTokens.triggerSize}: 1.25rem;
                ${checkboxTokens.triggerBorderRadius}: 0.375rem;
                ${checkboxTokens.triggerBorderWidth}: 0.125rem;
                ${checkboxTokens.contentTopOffset}: 0.125rem;
                ${checkboxTokens.contentLeftOffset}: 0.75rem;
                ${checkboxTokens.descriptionMarginTop}: 0.125rem;
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${checkboxTokens.labelFontFamily}: var(--plasma-typo-body-m-font-family);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${checkboxTokens.labelFontSize}: var(--plasma-typo-body-m-font-size);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${checkboxTokens.labelFontStyle}: var(--plasma-typo-body-m-font-style);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${checkboxTokens.labelFontWeight}: var(--plasma-typo-body-m-font-weight);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${checkboxTokens.labelLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${checkboxTokens.labelLineHeight}: var(--plasma-typo-body-m-line-height);
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
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${checkboxTokens.descriptionFontFamily}: var(--plasma-typo-body-m-font-family);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${checkboxTokens.descriptionFontSize}: var(--plasma-typo-body-m-font-size);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${checkboxTokens.descriptionFontStyle}: var(--plasma-typo-body-m-font-style);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${checkboxTokens.descriptionFontWeight}: var(--plasma-typo-body-m-font-weight);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${checkboxTokens.descriptionLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${checkboxTokens.descriptionLineHeight}: var(--plasma-typo-body-m-line-height);
            `,
        },
        view: {
            accent: css`
                ${checkboxTokens.fillColor}: ${textAccent};
                ${checkboxTokens.iconColor}: ${onDarkTextPrimary};
                ${checkboxTokens.labelColor}: ${textPrimary};
                ${checkboxTokens.descriptionColor}: ${textSecondary};
                ${checkboxTokens.triggerBackgroundColor}: transparent;
                ${checkboxTokens.triggerBorderColor}: ${textSecondary};
                ${checkboxTokens.triggerBorderCheckedColor}: transparent;
            `,
            // deprecated
            default: css`
                ${checkboxTokens.fillColor}: ${textPrimary};
                ${checkboxTokens.iconColor}: ${inverseTextPrimary};
                ${checkboxTokens.descriptionColor}: ${textSecondary};
                ${checkboxTokens.triggerBackgroundColor}: transparent;
                ${checkboxTokens.triggerBorderColor}: ${textSecondary};
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
            positive: css`
                ${checkboxTokens.fillColor}: ${textPositive};
                ${checkboxTokens.iconColor}: ${onDarkTextPrimary};
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
            negative: css`
                ${checkboxTokens.fillColor}: ${textNegative};
                ${checkboxTokens.iconColor}: ${onDarkTextPrimary};
                ${checkboxTokens.descriptionColor}: ${textSecondary};
                ${checkboxTokens.triggerBackgroundColor}: transparent;
                ${checkboxTokens.triggerBorderColor}: ${textNegative};
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
