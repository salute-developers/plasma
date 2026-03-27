import {
    bodyL,
    bodyLBold,
    bodyM,
    bodyMBold,
    bodyS,
    bodySBold,
    surfaceAccent,
    surfaceClear,
    textAccent,
    textAccentActive,
    textAccentHover,
    textInfo,
    textInfoActive,
    textInfoHover,
    textNegative,
    textNegativeActive,
    textNegativeHover,
    textPositive,
    textPositiveActive,
    textPositiveHover,
    textPrimary,
    textPrimaryActive,
    textPrimaryHover,
    textSecondary,
    textSecondaryActive,
    textSecondaryHover,
    textWarning,
    textWarningActive,
    textWarningHover,
} from '@salutejs/sdds-themes/tokens/sdds_finai';
import { css, embedIconButtonTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        focused: 'true',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${embedIconButtonTokens.embedIconButtonColor}: ${textPrimary};
                ${embedIconButtonTokens.embedIconButtonBackgroundColor}: ${surfaceClear};
                ${embedIconButtonTokens.embedIconButtonLoadingBackgroundColor}: var(${embedIconButtonTokens.embedIconButtonBackgroundColor});
                ${embedIconButtonTokens.embedIconButtonColorHover}: ${textPrimaryHover};
                ${embedIconButtonTokens.embedIconButtonColorActive}: ${textPrimaryActive};
            `,
            accent: css`
                ${embedIconButtonTokens.embedIconButtonColor}: ${textAccent};
                ${embedIconButtonTokens.embedIconButtonBackgroundColor}: ${surfaceClear};
                ${embedIconButtonTokens.embedIconButtonLoadingBackgroundColor}: var(${embedIconButtonTokens.embedIconButtonBackgroundColor});
                ${embedIconButtonTokens.embedIconButtonColorHover}: ${textAccentHover};
                ${embedIconButtonTokens.embedIconButtonColorActive}: ${textAccentActive};
            `,
            secondary: css`
                ${embedIconButtonTokens.embedIconButtonColor}: ${textSecondary};
                ${embedIconButtonTokens.embedIconButtonBackgroundColor}: ${surfaceClear};
                ${embedIconButtonTokens.embedIconButtonLoadingBackgroundColor}: var(${embedIconButtonTokens.embedIconButtonBackgroundColor});
                ${embedIconButtonTokens.embedIconButtonColorHover}: ${textSecondaryHover};
                ${embedIconButtonTokens.embedIconButtonColorActive}: ${textSecondaryActive};
            `,
            positive: css`
                ${embedIconButtonTokens.embedIconButtonColor}: ${textPositive};
                ${embedIconButtonTokens.embedIconButtonBackgroundColor}: ${surfaceClear};
                ${embedIconButtonTokens.embedIconButtonLoadingBackgroundColor}: var(${embedIconButtonTokens.embedIconButtonBackgroundColor});
                ${embedIconButtonTokens.embedIconButtonColorHover}: ${textPositiveHover};
                ${embedIconButtonTokens.embedIconButtonColorActive}: ${textPositiveActive};
            `,
            warning: css`
                ${embedIconButtonTokens.embedIconButtonColor}: ${textWarning};
                ${embedIconButtonTokens.embedIconButtonBackgroundColor}: ${surfaceClear};
                ${embedIconButtonTokens.embedIconButtonLoadingBackgroundColor}: var(${embedIconButtonTokens.embedIconButtonBackgroundColor});
                ${embedIconButtonTokens.embedIconButtonColorHover}: ${textWarningHover};
                ${embedIconButtonTokens.embedIconButtonColorActive}: ${textWarningActive};
            `,
            negative: css`
                ${embedIconButtonTokens.embedIconButtonColor}: ${textNegative};
                ${embedIconButtonTokens.embedIconButtonBackgroundColor}: ${surfaceClear};
                ${embedIconButtonTokens.embedIconButtonLoadingBackgroundColor}: var(${embedIconButtonTokens.embedIconButtonBackgroundColor});
                ${embedIconButtonTokens.embedIconButtonColorHover}: ${textNegativeHover};
                ${embedIconButtonTokens.embedIconButtonColorActive}: ${textNegativeActive};
            `,
            info: css`
                ${embedIconButtonTokens.embedIconButtonColor}: ${textInfo};
                ${embedIconButtonTokens.embedIconButtonBackgroundColor}: ${surfaceClear};
                ${embedIconButtonTokens.embedIconButtonLoadingBackgroundColor}: var(${embedIconButtonTokens.embedIconButtonBackgroundColor});
                ${embedIconButtonTokens.embedIconButtonColorHover}: ${textInfoHover};
                ${embedIconButtonTokens.embedIconButtonColorActive}: ${textInfoActive};
            `,
        },
        size: {
            l: css`
                ${embedIconButtonTokens.embedIconButtonHeight}: 2.25rem;
                ${embedIconButtonTokens.embedIconButtonWidth}: 2.25rem;
                ${embedIconButtonTokens.embedIconButtonPadding}: 0rem;
                ${embedIconButtonTokens.embedIconButtonRadius}: 0.75rem;
                ${embedIconButtonTokens.embedIconButtonFontFamily}: ${bodyL.fontFamily};
                ${embedIconButtonTokens.embedIconButtonFontSize}: ${bodyL.fontSize};
                ${embedIconButtonTokens.embedIconButtonFontStyle}: ${bodyL.fontStyle};
                ${embedIconButtonTokens.embedIconButtonFontWeight}: ${bodyLBold.fontWeight};
                ${embedIconButtonTokens.embedIconButtonLetterSpacing}: ${bodyL.letterSpacing};
                ${embedIconButtonTokens.embedIconButtonLineHeight}: ${bodyL.lineHeight};

                ${embedIconButtonTokens.embedIconButtonSpinnerSize}: 1.75rem;
                ${embedIconButtonTokens.embedIconButtonSpinnerColor}: inherit;
            `,
            m: css`
                ${embedIconButtonTokens.embedIconButtonHeight}: 1.5rem;
                ${embedIconButtonTokens.embedIconButtonWidth}: 1.5rem;
                ${embedIconButtonTokens.embedIconButtonPadding}: 0rem;
                ${embedIconButtonTokens.embedIconButtonRadius}: 0.625rem;
                ${embedIconButtonTokens.embedIconButtonFontFamily}: ${bodyM.fontFamily};
                ${embedIconButtonTokens.embedIconButtonFontSize}: ${bodyM.fontSize};
                ${embedIconButtonTokens.embedIconButtonFontStyle}: ${bodyM.fontStyle};
                ${embedIconButtonTokens.embedIconButtonFontWeight}: ${bodyMBold.fontWeight};
                ${embedIconButtonTokens.embedIconButtonLetterSpacing}: ${bodyM.letterSpacing};
                ${embedIconButtonTokens.embedIconButtonLineHeight}: ${bodyM.lineHeight};

                ${embedIconButtonTokens.embedIconButtonSpinnerSize}: 1.25rem;
                ${embedIconButtonTokens.embedIconButtonSpinnerColor}: inherit;
            `,
            s: css`
                ${embedIconButtonTokens.embedIconButtonHeight}: 1rem;
                ${embedIconButtonTokens.embedIconButtonWidth}: 1rem;
                ${embedIconButtonTokens.embedIconButtonPadding}: 0rem;
                ${embedIconButtonTokens.embedIconButtonRadius}: 0.5rem;
                ${embedIconButtonTokens.embedIconButtonFontFamily}: ${bodyS.fontFamily};
                ${embedIconButtonTokens.embedIconButtonFontSize}: ${bodyS.fontSize};
                ${embedIconButtonTokens.embedIconButtonFontStyle}: ${bodyS.fontStyle};
                ${embedIconButtonTokens.embedIconButtonFontWeight}: ${bodySBold.fontWeight};
                ${embedIconButtonTokens.embedIconButtonLetterSpacing}: ${bodyS.letterSpacing};
                ${embedIconButtonTokens.embedIconButtonLineHeight}: ${bodyS.lineHeight};

                ${embedIconButtonTokens.embedIconButtonSpinnerSize}: 0.75rem;
                ${embedIconButtonTokens.embedIconButtonSpinnerColor}: inherit;
            `,
        },
        disabled: {
            true: css`
                ${embedIconButtonTokens.embedIconButtonDisabledOpacity}: 0.4;
            `,
        },
        focused: {
            true: css`
                ${embedIconButtonTokens.embedIconButtonFocusColor}: ${surfaceAccent};
            `,
        },
    },
};
