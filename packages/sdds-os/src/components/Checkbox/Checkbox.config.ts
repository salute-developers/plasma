import {
    bodyM,
    bodyS,
    bodyXS,
    onDarkTextPrimary,
    textAccent,
    textNegative,
    textPrimary,
    textSecondary,
} from '@salutejs/sdds-themes/tokens/sdds_os';
import { css, checkboxTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'accent',
        size: 'm',
        focused: 'true',
    },
    variations: {
        size: {
            m: css`
                ${checkboxTokens.margin}: 0;
                ${checkboxTokens.triggerPadding}: 0.125rem;
                ${checkboxTokens.triggerSize}: 1.25rem;
                ${checkboxTokens.triggerBorderRadius}: 0.375rem;
                ${checkboxTokens.triggerBorderWidth}: 0.125rem;
                ${checkboxTokens.contentTopOffset}: 0.125rem;
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
