import {
    bodyM,
    bodyS,
    onDarkTextPrimary,
    outlineAccent,
    surfaceSolidCard,
    textAccent,
    textSecondary,
} from '@salutejs/sdds-themes/tokens/sdds_cs';
import { css, radioboxTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'accent',
        size: 's',
        focused: 'true',
    },
    variations: {
        /**
         * Размер контрола.
         */
        size: {
            s: css`
                ${radioboxTokens.margin}: 0;
                ${radioboxTokens.triggerPadding}: 0.125rem;
                ${radioboxTokens.triggerSize}: 1.25rem;
                ${radioboxTokens.triggerBorderRadius}: 1.125rem;
                ${radioboxTokens.triggerBorderWidth}: 0.125rem;
                ${radioboxTokens.ellipseSize}: 0.625rem;
                ${radioboxTokens.contentTopOffset}: 0;
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
                ${radioboxTokens.triggerBackgroundColor}: ${surfaceSolidCard};
                ${radioboxTokens.triggerBorderColor}: ${outlineAccent};
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
