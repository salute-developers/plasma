import {
    bodyM,
    bodyS,
    bodyXS,
    onDarkTextPrimary,
    textAccent,
    textSecondary,
} from '@salutejs/sdds-themes/tokens/sdds_platform_ai';
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
