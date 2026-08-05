import { css, radioboxTokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    bodyL,
    bodyM,
    bodyS,
    bodyXS,
    onDarkSurfaceSolidDefault,
    outlineNegative,
    outlineTransparentSecondary,
    surfaceAccent,
    textAccent,
    textSecondary,
} from '@salutejs/sdds-themes/tokens/sdds_insol_next';

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
                ${radioboxTokens.triggerBorderWidth}: 0.0625rem;
                ${radioboxTokens.ellipseSize}: 0.5rem;
                ${radioboxTokens.contentTopOffset}: 0;
                ${radioboxTokens.contentLeftOffset}: 0.5rem;

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
                ${radioboxTokens.descriptionMarginTop}: 0.125rem;
            `,
            m: css`
                ${radioboxTokens.margin}: 0;
                ${radioboxTokens.triggerPadding}: 0.0625rem;
                ${radioboxTokens.triggerSize}: 1.125rem;
                ${radioboxTokens.triggerBorderRadius}: 1.125rem;
                ${radioboxTokens.triggerBorderWidth}: 0.0625rem;
                ${radioboxTokens.ellipseSize}: 0.5rem;
                ${radioboxTokens.contentLeftOffset}: 0.625rem;

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

                ${radioboxTokens.descriptionMarginTop}: 0.125rem;
            `,
            l: css`
                ${radioboxTokens.margin}: 0;
                ${radioboxTokens.triggerPadding}: 0.0625rem;
                ${radioboxTokens.triggerSize}: 1.375rem;
                ${radioboxTokens.triggerBorderRadius}: 1.125rem;
                ${radioboxTokens.triggerBorderWidth}: 0.0625rem;
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
                ${radioboxTokens.descriptionFontSize}: ${bodyM.fontSize};
                ${radioboxTokens.descriptionFontStyle}: ${bodyM.fontStyle};
                ${radioboxTokens.descriptionFontWeight}: ${bodyM.fontWeight};
                ${radioboxTokens.descriptionLetterSpacing}: ${bodyM.letterSpacing};
                ${radioboxTokens.descriptionLineHeight}: ${bodyM.lineHeight};
                ${radioboxTokens.descriptionMarginTop}: 0.125rem;
            `,
        },
        /**
         * Вид контрола.
         */
        view: {
            accent: css`
                ${radioboxTokens.fillColor}: ${surfaceAccent};
                ${radioboxTokens.ellipseColor}: ${onDarkSurfaceSolidDefault};
                ${radioboxTokens.descriptionColor}: ${textSecondary};
                ${radioboxTokens.triggerBackgroundColor}: transparent;
                ${radioboxTokens.triggerBorderColor}: ${outlineTransparentSecondary};
                ${radioboxTokens.triggerBorderCheckedColor}: transparent;
            `,
            negative: css`
                ${radioboxTokens.fillColor}: transparent;
                ${radioboxTokens.ellipseColor}: ${outlineNegative};
                ${radioboxTokens.descriptionColor}: ${textSecondary};
                ${radioboxTokens.triggerBackgroundColor}: transparent;
                ${radioboxTokens.triggerBorderColor}: ${outlineNegative};
                ${radioboxTokens.triggerBorderCheckedColor}: ${outlineNegative};
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
