import { css, iconButtonTokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    bodyL,
    bodyLBold,
    bodyM,
    bodyMBold,
    bodyS,
    bodySBold,
    bodyXS,
    bodyXSBold,
    outlineAccent,
    outlineAccentActive,
    outlineAccentHover,
    outlineNegative,
    outlineNegativeActive,
    outlineNegativeHover,
    outlinePositive,
    outlinePositiveActive,
    outlinePositiveHover,
    outlineSolidDefault,
    outlineSolidDefaultActive,
    outlineSolidDefaultHover,
    outlineSolidPrimary,
    outlineSolidPrimaryActive,
    outlineSolidPrimaryHover,
    outlineWarning,
    outlineWarningActive,
    outlineWarningHover,
    surfaceAccent,
    surfaceClear,
    textAccent,
    textNegative,
    textPositive,
    textPrimary,
    textWarning,
} from '@salutejs/sdds-themes/tokens/sdds_insol_next';

export const config = {
    defaults: {
        view: 'default',
        focused: 'true',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${iconButtonTokens.iconButtonColor}: ${textPrimary};

                ${iconButtonTokens.iconButtonBorderColor}: ${outlineSolidDefault};
                ${iconButtonTokens.iconButtonBorderColorHover}: ${outlineSolidDefaultHover};
                ${iconButtonTokens.iconButtonBorderColorActive}: ${outlineSolidDefaultActive};

                ${iconButtonTokens.iconButtonBackgroundColor}: ${surfaceClear};
                ${iconButtonTokens.iconButtonBackgroundColorHover}: ${surfaceClear};
                ${iconButtonTokens.iconButtonBackgroundColorActive}: ${surfaceClear};

                ${iconButtonTokens.iconButtonLoadingBackgroundColor}: ${surfaceClear};
            `,
            accent: css`
                ${iconButtonTokens.iconButtonColor}: ${textAccent};

                ${iconButtonTokens.iconButtonBorderColor}: ${outlineAccent};
                ${iconButtonTokens.iconButtonBorderColorHover}: ${outlineAccentHover};
                ${iconButtonTokens.iconButtonBorderColorActive}: ${outlineAccentActive};

                ${iconButtonTokens.iconButtonBackgroundColor}: ${surfaceClear};
                ${iconButtonTokens.iconButtonBackgroundColorHover}: ${surfaceClear};
                ${iconButtonTokens.iconButtonBackgroundColorActive}: ${surfaceClear};

                ${iconButtonTokens.iconButtonLoadingBackgroundColor}: ${surfaceClear};
            `,
            secondary: css`
                ${iconButtonTokens.iconButtonColor}: ${textPrimary};

                ${iconButtonTokens.iconButtonBorderColor}: ${outlineSolidPrimary};
                ${iconButtonTokens.iconButtonBorderColorHover}: ${outlineSolidPrimaryHover};
                ${iconButtonTokens.iconButtonBorderColorActive}: ${outlineSolidPrimaryActive};

                ${iconButtonTokens.iconButtonBackgroundColor}: ${surfaceClear};
                ${iconButtonTokens.iconButtonBackgroundColorHover}: ${surfaceClear};
                ${iconButtonTokens.iconButtonBackgroundColorActive}: ${surfaceClear};

                ${iconButtonTokens.iconButtonLoadingBackgroundColor}: ${surfaceClear};
            `,
            positive: css`
                ${iconButtonTokens.iconButtonColor}: ${textPositive};

                ${iconButtonTokens.iconButtonBorderColor}: ${outlinePositive};
                ${iconButtonTokens.iconButtonBorderColorHover}: ${outlinePositiveHover};
                ${iconButtonTokens.iconButtonBorderColorActive}: ${outlinePositiveActive};

                ${iconButtonTokens.iconButtonBackgroundColor}: ${surfaceClear};
                ${iconButtonTokens.iconButtonBackgroundColorHover}: ${surfaceClear};
                ${iconButtonTokens.iconButtonBackgroundColorActive}: ${surfaceClear};

                ${iconButtonTokens.iconButtonLoadingBackgroundColor}: ${surfaceClear};
            `,
            warning: css`
                ${iconButtonTokens.iconButtonColor}: ${textWarning};

                ${iconButtonTokens.iconButtonBorderColor}: ${outlineWarning};
                ${iconButtonTokens.iconButtonBorderColorHover}: ${outlineWarningHover};
                ${iconButtonTokens.iconButtonBorderColorActive}: ${outlineWarningActive};

                ${iconButtonTokens.iconButtonBackgroundColor}: ${surfaceClear};
                ${iconButtonTokens.iconButtonBackgroundColorHover}: ${surfaceClear};
                ${iconButtonTokens.iconButtonBackgroundColorActive}: ${surfaceClear};

                ${iconButtonTokens.iconButtonLoadingBackgroundColor}: ${surfaceClear};
            `,
            negative: css`
                ${iconButtonTokens.iconButtonColor}: ${textNegative};

                ${iconButtonTokens.iconButtonBorderColor}: ${outlineNegative};
                ${iconButtonTokens.iconButtonBorderColorHover}: ${outlineNegativeHover};
                ${iconButtonTokens.iconButtonBorderColorActive}: ${outlineNegativeActive};

                ${iconButtonTokens.iconButtonBackgroundColor}: ${surfaceClear};
                ${iconButtonTokens.iconButtonBackgroundColorHover}: ${surfaceClear};
                ${iconButtonTokens.iconButtonBackgroundColorActive}: ${surfaceClear};

                ${iconButtonTokens.iconButtonLoadingBackgroundColor}: ${surfaceClear};
            `,
        },
        size: {
            xl: css`
                ${iconButtonTokens.iconButtonHeight}: 4rem;
                ${iconButtonTokens.iconButtonWidth}: 4rem;
                ${iconButtonTokens.iconButtonPadding}: 1.25rem;
                ${iconButtonTokens.iconButtonRadius}: 1rem;
                ${iconButtonTokens.iconButtonFontFamily}: ${bodyL.fontFamily};
                ${iconButtonTokens.iconButtonFontSize}: ${bodyL.fontSize};
                ${iconButtonTokens.iconButtonFontStyle}: ${bodyL.fontStyle};
                ${iconButtonTokens.iconButtonFontWeight}: ${bodyLBold.fontWeight};
                ${iconButtonTokens.iconButtonLetterSpacing}: ${bodyL.letterSpacing};
                ${iconButtonTokens.iconButtonLineHeight}: ${bodyL.lineHeight};

                ${iconButtonTokens.iconButtonSpinnerSize}: 1.5rem;
                ${iconButtonTokens.iconButtonSpinnerColor}: inherit;
            `,
            l: css`
                ${iconButtonTokens.iconButtonHeight}: 3.5rem;
                ${iconButtonTokens.iconButtonWidth}: 3.5rem;
                ${iconButtonTokens.iconButtonPadding}: 1rem;
                ${iconButtonTokens.iconButtonRadius}: 0.875rem;
                ${iconButtonTokens.iconButtonFontFamily}: ${bodyL.fontFamily};
                ${iconButtonTokens.iconButtonFontSize}: ${bodyL.fontSize};
                ${iconButtonTokens.iconButtonFontStyle}: ${bodyL.fontStyle};
                ${iconButtonTokens.iconButtonFontWeight}: ${bodyLBold.fontWeight};
                ${iconButtonTokens.iconButtonLetterSpacing}: ${bodyL.letterSpacing};
                ${iconButtonTokens.iconButtonLineHeight}: ${bodyL.lineHeight};

                ${iconButtonTokens.iconButtonSpinnerSize}: 1.375rem;
                ${iconButtonTokens.iconButtonSpinnerColor}: inherit;
            `,
            m: css`
                ${iconButtonTokens.iconButtonHeight}: 3rem;
                ${iconButtonTokens.iconButtonWidth}: 3rem;
                ${iconButtonTokens.iconButtonPadding}: 0.75rem;
                ${iconButtonTokens.iconButtonRadius}: 0.75rem;

                ${iconButtonTokens.iconButtonFontFamily}: ${bodyM.fontFamily};
                ${iconButtonTokens.iconButtonFontSize}: ${bodyM.fontSize};
                ${iconButtonTokens.iconButtonFontStyle}: ${bodyM.fontStyle};
                ${iconButtonTokens.iconButtonFontWeight}: ${bodyMBold.fontWeight};
                ${iconButtonTokens.iconButtonLetterSpacing}: ${bodyM.letterSpacing};
                ${iconButtonTokens.iconButtonLineHeight}: ${bodyM.lineHeight};

                ${iconButtonTokens.iconButtonSpinnerSize}: 1.5rem;
                ${iconButtonTokens.iconButtonSpinnerColor}: inherit;
            `,
            s: css`
                ${iconButtonTokens.iconButtonHeight}: 2.5rem;
                ${iconButtonTokens.iconButtonWidth}: 2.5rem;
                ${iconButtonTokens.iconButtonPadding}: 0.75rem;
                ${iconButtonTokens.iconButtonRadius}: 0.625rem;
                ${iconButtonTokens.iconButtonFontFamily}: ${bodyS.fontFamily};
                ${iconButtonTokens.iconButtonFontSize}: ${bodyS.fontSize};
                ${iconButtonTokens.iconButtonFontStyle}: ${bodyS.fontStyle};
                ${iconButtonTokens.iconButtonFontWeight}: ${bodySBold.fontWeight};
                ${iconButtonTokens.iconButtonLetterSpacing}: ${bodyS.letterSpacing};
                ${iconButtonTokens.iconButtonLineHeight}: ${bodyS.lineHeight};

                ${iconButtonTokens.iconButtonSpinnerSize}: 1.5rem;
                ${iconButtonTokens.iconButtonSpinnerColor}: inherit;
            `,
            xs: css`
                ${iconButtonTokens.iconButtonHeight}: 2rem;
                ${iconButtonTokens.iconButtonWidth}: 2rem;
                ${iconButtonTokens.iconButtonPadding}: 0.5rem;
                ${iconButtonTokens.iconButtonRadius}: 0.5rem;

                ${iconButtonTokens.iconButtonFontFamily}: ${bodyXS.fontFamily};
                ${iconButtonTokens.iconButtonFontSize}: ${bodyXS.fontSize};
                ${iconButtonTokens.iconButtonFontStyle}: ${bodyXS.fontStyle};
                ${iconButtonTokens.iconButtonFontWeight}: ${bodyXSBold.fontWeight};
                ${iconButtonTokens.iconButtonLetterSpacing}: ${bodyXS.letterSpacing};
                ${iconButtonTokens.iconButtonLineHeight}: ${bodyXS.lineHeight};

                ${iconButtonTokens.iconButtonSpinnerSize}: 1rem;
                ${iconButtonTokens.iconButtonSpinnerColor}: inherit;
            `,
            xxs: css`
                ${iconButtonTokens.iconButtonHeight}: 1.5rem;
                ${iconButtonTokens.iconButtonWidth}: 1.5rem;
                ${iconButtonTokens.iconButtonPadding}: 0.375rem;
                ${iconButtonTokens.iconButtonRadius}: 0.375rem;

                ${iconButtonTokens.iconButtonFontFamily}: ${bodyXS.fontFamily};
                ${iconButtonTokens.iconButtonFontSize}: ${bodyXS.fontSize};
                ${iconButtonTokens.iconButtonFontStyle}: ${bodyXS.fontStyle};
                ${iconButtonTokens.iconButtonFontWeight}: ${bodyXSBold.fontWeight};
                ${iconButtonTokens.iconButtonLetterSpacing}: ${bodyXS.letterSpacing};
                ${iconButtonTokens.iconButtonLineHeight}: ${bodyXS.lineHeight};

                ${iconButtonTokens.iconButtonSpinnerSize}: 0.75rem;
                ${iconButtonTokens.iconButtonSpinnerColor}: inherit;
            `,
        },
        disabled: {
            true: css`
                ${iconButtonTokens.iconButtonDisabledOpacity}: 0.4;
            `,
        },
        focused: {
            true: css`
                ${iconButtonTokens.iconButtonFocusColor}: ${surfaceAccent};
            `,
        },
    },
};
