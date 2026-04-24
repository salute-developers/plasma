import { css, radioboxTokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    bodyL,
    bodyM,
    bodyS,
    textAccent,
    textParagraph,
    textSecondary,
    surfaceTransparentSecondary,
} from '@salutejs-ds/sdds_sbcom/theme/tokens';

/*
 * NOTE: Mixed DS tokens + raw vars. Prefer @salutejs-ds/sdds_sbcom/theme/tokens where possible.
 * Missing tokens in @salutejs/sdds-themes/tokens: bodyXs
 */
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
                ${radioboxTokens.descriptionFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${radioboxTokens.descriptionFontSize}: var(--plasma-typo-body-xs-font-size);
                ${radioboxTokens.descriptionFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${radioboxTokens.descriptionFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${radioboxTokens.descriptionLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${radioboxTokens.descriptionLineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
            m: css`
                ${radioboxTokens.margin}: 0;
                ${radioboxTokens.triggerPadding}: 0.0625rem;
                ${radioboxTokens.triggerSize}: 1.375rem;
                ${radioboxTokens.triggerBorderRadius}: 1.125rem;
                ${radioboxTokens.triggerBorderWidth}: 0.125rem;
                ${radioboxTokens.ellipseSize}: 0.75rem;
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
                ${radioboxTokens.ellipseSize}: 0.75rem;
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
                ${radioboxTokens.fillColor}: transparent;
                ${radioboxTokens.ellipseColor}: ${textAccent};
                ${radioboxTokens.descriptionColor}: ${textSecondary};
                ${radioboxTokens.triggerBackgroundColor}: ${surfaceTransparentSecondary};
                ${radioboxTokens.triggerBorderColor}: ${textParagraph};
                ${radioboxTokens.triggerBorderCheckedColor}: ${textAccent};
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
