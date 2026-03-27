import {
    bodyM,
    bodyS,
    onDarkTextPrimary,
    outlineAccent,
    outlineSolidPrimary,
    surfaceSolidTertiary,
    textAccent,
    textPrimary,
    textSecondary,
} from '@salutejs/sdds-themes/tokens/sdds_cs';
import { css, checkboxTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'accent',
        size: 's',
        focused: 'true',
    },
    variations: {
        size: {
            s: css`
                ${checkboxTokens.margin}: 0;
                ${checkboxTokens.triggerPadding}: 0.125rem;
                ${checkboxTokens.triggerSize}: 1.25rem;
                ${checkboxTokens.triggerBorderRadius}: 0.375rem;
                ${checkboxTokens.triggerBorderWidth}: 0.125rem;
                ${checkboxTokens.contentTopOffset}: 0rem;
                ${checkboxTokens.contentLeftOffset}: 0.75rem;
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
        },
        view: {
            accent: css`
                ${checkboxTokens.fillColor}: ${textAccent};
                ${checkboxTokens.iconColor}: ${onDarkTextPrimary};
                ${checkboxTokens.labelColor}: ${textPrimary};
                ${checkboxTokens.descriptionColor}: ${textSecondary};
                ${checkboxTokens.triggerBorderColor}: ${outlineAccent};
                ${checkboxTokens.triggerBackgroundColor}: transparent;
                ${checkboxTokens.triggerBorderCheckedColor}: transparent;
            `,
        },
        disabled: {
            true: css`
                ${checkboxTokens.triggerBorderColor}: ${outlineSolidPrimary};
                ${checkboxTokens.fillColor}: ${surfaceSolidTertiary};
                ${checkboxTokens.labelColor}: ${textSecondary};
            `,
        },
        focused: {
            true: css`
                ${checkboxTokens.focusColor}: ${textAccent};
            `,
        },
    },
};
