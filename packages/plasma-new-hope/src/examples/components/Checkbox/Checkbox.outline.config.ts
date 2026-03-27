import {
    bodyL,
    bodyM,
    bodyS,
    bodyXS,
    outlineAccent,
    outlineNegative,
    outlineTransparentTertiary,
    textAccent,
    textParagraph,
    textPositive,
    textPrimary,
    textSecondary,
    textTertiary,
    textWarning,
} from '@salutejs/plasma-themes/tokens/plasma_b2c';
import { css } from '@linaria/core';

import { checkboxTokens } from '../../../components/Checkbox';

export const config = {
    defaults: {
        view: 'accent',
    },
    variations: {
        /**
         * Размер контрола.
         */
        size: {
            s: css`
                ${checkboxTokens.margin}: 0;
                ${checkboxTokens.triggerPadding}: 0.0625rem;
                ${checkboxTokens.triggerSize}: 0.875rem;
                ${checkboxTokens.triggerBorderRadius}: 0.25rem;
                ${checkboxTokens.triggerBorderWidth}: 0.0625rem;
                ${checkboxTokens.contentTopOffset}: 0;
                ${checkboxTokens.contentLeftOffset}: 0.5rem;
                ${checkboxTokens.labelFontFamily}: ${bodyS.fontFamily};
                ${checkboxTokens.labelFontSize}: ${bodyS.fontSize};
                ${checkboxTokens.labelFontStyle}: ${bodyS.fontStyle};
                ${checkboxTokens.labelFontWeight}: ${bodyS.fontWeight};
                ${checkboxTokens.labelLetterSpacing}: ${bodyS.letterSpacing};
                ${checkboxTokens.labelLineHeight}: ${bodyS.lineHeight};
                ${checkboxTokens.descriptionMarginTop}: 0.125rem;
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
                ${checkboxTokens.triggerBorderWidth}: 0.0625rem;
                ${checkboxTokens.contentTopOffset}: 0.125rem;
                ${checkboxTokens.contentLeftOffset}: 0.75rem;
                ${checkboxTokens.labelFontFamily}: ${bodyM.fontFamily};
                ${checkboxTokens.labelFontSize}: ${bodyM.fontSize};
                ${checkboxTokens.labelFontStyle}: ${bodyM.fontStyle};
                ${checkboxTokens.labelFontWeight}: ${bodyM.fontWeight};
                ${checkboxTokens.labelLetterSpacing}: ${bodyM.letterSpacing};
                ${checkboxTokens.labelLineHeight}: ${bodyM.lineHeight};
                ${checkboxTokens.descriptionMarginTop}: 0.125rem;
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
                ${checkboxTokens.triggerBorderWidth}: 0.0625rem;
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
        /**
         * Вид контрола.
         */
        view: {
            accent: css`
                ${checkboxTokens.fillColor}: transparent;
                ${checkboxTokens.iconColor}: ${outlineAccent};
                ${checkboxTokens.labelColor}: ${textPrimary};
                ${checkboxTokens.descriptionColor}: ${outlineTransparentTertiary};
                ${checkboxTokens.triggerBackgroundColor}: transparent;
                ${checkboxTokens.triggerBorderColor}: ${textSecondary};
                ${checkboxTokens.triggerBorderCheckedColor}: ${outlineAccent};
            `,
            // deprecated
            default: css`
                ${checkboxTokens.fillColor}: transparent;
                ${checkboxTokens.iconColor}: ${textPrimary};
                ${checkboxTokens.labelColor}: ${textPrimary};
                ${checkboxTokens.descriptionColor}: ${textSecondary};
                ${checkboxTokens.triggerBackgroundColor}: transparent;
                ${checkboxTokens.triggerBorderColor}: ${textSecondary};
                ${checkboxTokens.triggerBorderCheckedColor}: ${textPrimary};
            `,
            // deprecated
            secondary: css`
                ${checkboxTokens.fillColor}: transparent;
                ${checkboxTokens.iconColor}: ${textSecondary};
                ${checkboxTokens.labelColor}: ${textPrimary};
                ${checkboxTokens.descriptionColor}: ${textSecondary};
                ${checkboxTokens.triggerBackgroundColor}: transparent;
                ${checkboxTokens.triggerBorderColor}: ${textSecondary};
                ${checkboxTokens.triggerBorderCheckedColor}: ${textSecondary};
            `,
            // deprecated
            tertiary: css`
                ${checkboxTokens.fillColor}: transparent;
                ${checkboxTokens.iconColor}: ${textTertiary};
                ${checkboxTokens.labelColor}: ${textPrimary};
                ${checkboxTokens.descriptionColor}: ${textSecondary};
                ${checkboxTokens.triggerBackgroundColor}: transparent;
                ${checkboxTokens.triggerBorderColor}: ${textSecondary};
                ${checkboxTokens.triggerBorderCheckedColor}: ${textTertiary};
            `,
            // deprecated
            paragraph: css`
                ${checkboxTokens.fillColor}: transparent;
                ${checkboxTokens.iconColor}: ${textParagraph};
                ${checkboxTokens.labelColor}: ${textPrimary};
                ${checkboxTokens.descriptionColor}: ${textSecondary};
                ${checkboxTokens.triggerBackgroundColor}: transparent;
                ${checkboxTokens.triggerBorderColor}: ${textSecondary};
                ${checkboxTokens.triggerBorderCheckedColor}: ${textParagraph};
            `,
            // deprecated
            positive: css`
                ${checkboxTokens.fillColor}: transparent;
                ${checkboxTokens.iconColor}: ${textPositive};
                ${checkboxTokens.labelColor}: ${textPrimary};
                ${checkboxTokens.descriptionColor}: ${textSecondary};
                ${checkboxTokens.triggerBackgroundColor}: transparent;
                ${checkboxTokens.triggerBorderColor}: ${textSecondary};
                ${checkboxTokens.triggerBorderCheckedColor}: ${textPositive};
            `,
            // deprecated
            warning: css`
                ${checkboxTokens.fillColor}: transparent;
                ${checkboxTokens.iconColor}: ${textWarning};
                ${checkboxTokens.labelColor}: ${textPrimary};
                ${checkboxTokens.descriptionColor}: ${textSecondary};
                ${checkboxTokens.triggerBackgroundColor}: transparent;
                ${checkboxTokens.triggerBorderColor}: ${textSecondary};
                ${checkboxTokens.triggerBorderCheckedColor}: ${textWarning};
            `,
            negative: css`
                ${checkboxTokens.fillColor}: transparent;
                ${checkboxTokens.iconColor}: ${outlineNegative};
                ${checkboxTokens.labelColor}: ${textPrimary};
                ${checkboxTokens.descriptionColor}: ${textSecondary};
                ${checkboxTokens.triggerBackgroundColor}: transparent;
                ${checkboxTokens.triggerBorderColor}: ${outlineNegative};
                ${checkboxTokens.triggerBorderCheckedColor}: ${outlineNegative};
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
