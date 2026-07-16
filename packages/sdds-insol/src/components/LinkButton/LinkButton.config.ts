import { css, linkButtonTokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    bodyLBold,
    bodyMBold,
    bodySBold,
    bodyXSBold,
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
} from '@salutejs/sdds-themes/tokens/sdds_insol_next';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${linkButtonTokens.linkButtonIconColor}: ${textPrimary};
                ${linkButtonTokens.linkButtonTextColor}: ${textPrimary};
                ${linkButtonTokens.linkButtonBackgroundColor}: ${surfaceClear};
                ${linkButtonTokens.linkButtonIconColorHover}: ${textPrimaryHover};
                ${linkButtonTokens.linkButtonIconColorActive}: ${textPrimaryActive};
                ${linkButtonTokens.linkButtonFocusColor}: ${surfaceAccent};
                ${linkButtonTokens.linkButtonTextColorHover}: ${textPrimaryHover};
                ${linkButtonTokens.linkButtonTextColorActive}: ${textPrimaryActive};

                ${linkButtonTokens.linkButtonFocusColor}: ${surfaceAccent};
            `,
            accent: css`
                ${linkButtonTokens.linkButtonIconColor}: ${textAccent};
                ${linkButtonTokens.linkButtonTextColor}: ${textAccent};
                ${linkButtonTokens.linkButtonBackgroundColor}: ${surfaceClear};
                ${linkButtonTokens.linkButtonIconColorHover}: ${textAccentHover};
                ${linkButtonTokens.linkButtonIconColorActive}: ${textAccentActive};
                ${linkButtonTokens.linkButtonFocusColor}: ${surfaceAccent};
                ${linkButtonTokens.linkButtonTextColorHover}: ${textAccentHover};
                ${linkButtonTokens.linkButtonTextColorActive}: ${textAccentActive};

                ${linkButtonTokens.linkButtonFocusColor}: ${surfaceAccent};
            `,
            secondary: css`
                ${linkButtonTokens.linkButtonIconColor}: ${textSecondary};
                ${linkButtonTokens.linkButtonTextColor}: ${textSecondary};
                ${linkButtonTokens.linkButtonBackgroundColor}: ${surfaceClear};
                ${linkButtonTokens.linkButtonIconColorHover}: ${textSecondaryHover};
                ${linkButtonTokens.linkButtonIconColorActive}: ${textSecondaryActive};
                ${linkButtonTokens.linkButtonFocusColor}: ${surfaceAccent};
                ${linkButtonTokens.linkButtonTextColorHover}: ${textSecondaryHover};
                ${linkButtonTokens.linkButtonTextColorActive}: ${textSecondaryActive};

                ${linkButtonTokens.linkButtonFocusColor}: ${surfaceAccent};
            `,
            positive: css`
                ${linkButtonTokens.linkButtonIconColor}: ${textPositive};
                ${linkButtonTokens.linkButtonTextColor}: ${textPositive};
                ${linkButtonTokens.linkButtonBackgroundColor}: ${surfaceClear};
                ${linkButtonTokens.linkButtonIconColorHover}: ${textPositiveHover};
                ${linkButtonTokens.linkButtonIconColorActive}: ${textPositiveActive};
                ${linkButtonTokens.linkButtonFocusColor}: ${surfaceAccent};
                ${linkButtonTokens.linkButtonTextColorHover}: ${textPositiveHover};
                ${linkButtonTokens.linkButtonTextColorActive}: ${textPositiveActive};

                ${linkButtonTokens.linkButtonFocusColor}: ${surfaceAccent};
            `,
            warning: css`
                ${linkButtonTokens.linkButtonIconColor}: ${textWarning};
                ${linkButtonTokens.linkButtonTextColor}: ${textWarning};
                ${linkButtonTokens.linkButtonBackgroundColor}: ${surfaceClear};
                ${linkButtonTokens.linkButtonIconColorHover}: ${textWarningHover};
                ${linkButtonTokens.linkButtonIconColorActive}: ${textWarningActive};
                ${linkButtonTokens.linkButtonFocusColor}: ${surfaceAccent};
                ${linkButtonTokens.linkButtonTextColorHover}: ${textWarningHover};
                ${linkButtonTokens.linkButtonTextColorActive}: ${textWarningActive};

                ${linkButtonTokens.linkButtonFocusColor}: ${surfaceAccent};
            `,
            negative: css`
                ${linkButtonTokens.linkButtonIconColor}: ${textNegative};
                ${linkButtonTokens.linkButtonTextColor}: ${textNegative};
                ${linkButtonTokens.linkButtonBackgroundColor}: ${surfaceClear};
                ${linkButtonTokens.linkButtonIconColorHover}: ${textNegativeHover};
                ${linkButtonTokens.linkButtonIconColorActive}: ${textNegativeActive};
                ${linkButtonTokens.linkButtonFocusColor}: ${surfaceAccent};
                ${linkButtonTokens.linkButtonTextColorHover}: ${textNegativeHover};
                ${linkButtonTokens.linkButtonTextColorActive}: ${textNegativeActive};

                ${linkButtonTokens.linkButtonFocusColor}: ${surfaceAccent};
            `,
            info: css`
                ${linkButtonTokens.linkButtonIconColor}: ${textInfo};
                ${linkButtonTokens.linkButtonTextColor}: ${textInfo};
                ${linkButtonTokens.linkButtonBackgroundColor}: ${surfaceClear};
                ${linkButtonTokens.linkButtonIconColorHover}: ${textInfoHover};
                ${linkButtonTokens.linkButtonIconColorActive}: ${textInfoActive};
                ${linkButtonTokens.linkButtonFocusColor}: ${surfaceAccent};
                ${linkButtonTokens.linkButtonTextColorHover}: ${textInfoHover};
                ${linkButtonTokens.linkButtonTextColorActive}: ${textInfoActive};

                ${linkButtonTokens.linkButtonFocusColor}: ${surfaceAccent};
            `,
        },
        size: {
            xl: css`
                ${linkButtonTokens.linkButtonHeight}: 4rem;
                ${linkButtonTokens.linkButtonPadding}: 1.25rem 0;

                ${linkButtonTokens.linkButtonFontFamily}: ${bodyLBold.fontFamily};
                ${linkButtonTokens.linkButtonFontSize}: ${bodyLBold.fontSize};
                ${linkButtonTokens.linkButtonFontStyle}: ${bodyLBold.fontStyle};
                ${linkButtonTokens.linkButtonFontWeight}: ${bodyLBold.fontWeight};
                ${linkButtonTokens.linkButtonLetterSpacing}: ${bodyLBold.letterSpacing};
                ${linkButtonTokens.linkButtonLineHeight}: ${bodyLBold.lineHeight};

                ${linkButtonTokens.linkButtonSpinnerSize}: 1.5rem;
                ${linkButtonTokens.linkButtonSpinnerColor}: inherit;

                ${linkButtonTokens.linkButtonTextPadding}: 0.063rem 0;
                ${linkButtonTokens.linkButtonLeftContentMargin}: 0 0.5rem 0 0;
                ${linkButtonTokens.linkButtonRightContentMargin}: 0 0 0 0.5rem;
                ${linkButtonTokens.linkButtonAdditionalContentMargin}: 0 0 0 0.5rem;
            `,
            l: css`
                ${linkButtonTokens.linkButtonHeight}: 3.5rem;
                ${linkButtonTokens.linkButtonPadding}: 1rem 0;

                ${linkButtonTokens.linkButtonFontFamily}: ${bodyLBold.fontFamily};
                ${linkButtonTokens.linkButtonFontSize}: ${bodyLBold.fontSize};
                ${linkButtonTokens.linkButtonFontStyle}: ${bodyLBold.fontStyle};
                ${linkButtonTokens.linkButtonFontWeight}: ${bodyLBold.fontWeight};
                ${linkButtonTokens.linkButtonLetterSpacing}: ${bodyLBold.letterSpacing};
                ${linkButtonTokens.linkButtonLineHeight}: ${bodyLBold.lineHeight};

                ${linkButtonTokens.linkButtonSpinnerSize}: 1.375rem;
                ${linkButtonTokens.linkButtonSpinnerColor}: inherit;

                ${linkButtonTokens.linkButtonTextPadding}: 0.063rem 0;
                ${linkButtonTokens.linkButtonLeftContentMargin}: 0 0.5rem 0 0;
                ${linkButtonTokens.linkButtonRightContentMargin}: 0 0 0 0.5rem;
                ${linkButtonTokens.linkButtonAdditionalContentMargin}: 0 0 0 0.5rem;
            `,
            m: css`
                ${linkButtonTokens.linkButtonHeight}: 3rem;
                ${linkButtonTokens.linkButtonPadding}: 0.75rem 0;

                ${linkButtonTokens.linkButtonFontFamily}: ${bodyMBold.fontFamily};
                ${linkButtonTokens.linkButtonFontSize}: ${bodyMBold.fontSize};
                ${linkButtonTokens.linkButtonFontStyle}: ${bodyMBold.fontStyle};
                ${linkButtonTokens.linkButtonFontWeight}: ${bodyMBold.fontWeight};
                ${linkButtonTokens.linkButtonLetterSpacing}: ${bodyMBold.letterSpacing};
                ${linkButtonTokens.linkButtonLineHeight}: ${bodyMBold.lineHeight};

                ${linkButtonTokens.linkButtonSpinnerSize}: 1.5rem;
                ${linkButtonTokens.linkButtonSpinnerColor}: inherit;

                ${linkButtonTokens.linkButtonTextPadding}: 0.125rem 0;
                ${linkButtonTokens.linkButtonLeftContentMargin}: 0 0.375rem 0 0;
                ${linkButtonTokens.linkButtonRightContentMargin}: 0 0 0 0.375rem;
                ${linkButtonTokens.linkButtonAdditionalContentMargin}: 0 0 0 0.375rem;
            `,
            s: css`
                ${linkButtonTokens.linkButtonHeight}: 2.5rem;
                ${linkButtonTokens.linkButtonPadding}: 0.5rem 0;

                ${linkButtonTokens.linkButtonFontFamily}: ${bodySBold.fontFamily};
                ${linkButtonTokens.linkButtonFontSize}: ${bodySBold.fontSize};
                ${linkButtonTokens.linkButtonFontStyle}: ${bodySBold.fontStyle};
                ${linkButtonTokens.linkButtonFontWeight}: ${bodySBold.fontWeight};
                ${linkButtonTokens.linkButtonLetterSpacing}: ${bodySBold.letterSpacing};
                ${linkButtonTokens.linkButtonLineHeight}: ${bodySBold.lineHeight};

                ${linkButtonTokens.linkButtonSpinnerSize}: 1.5rem;
                ${linkButtonTokens.linkButtonSpinnerColor}: inherit;

                ${linkButtonTokens.linkButtonTextPadding}: 0.063rem 0;
                ${linkButtonTokens.linkButtonLeftContentMargin}: 0 0.25rem 0 0;
                ${linkButtonTokens.linkButtonRightContentMargin}: 0 0 0 0.25rem;
                ${linkButtonTokens.linkButtonAdditionalContentMargin}: 0 0 0 0.25rem;
            `,
            xs: css`
                ${linkButtonTokens.linkButtonHeight}: 2rem;
                ${linkButtonTokens.linkButtonPadding}: 0.5rem 0;

                ${linkButtonTokens.linkButtonFontFamily}: ${bodyXSBold.fontFamily};
                ${linkButtonTokens.linkButtonFontSize}: ${bodyXSBold.fontSize};
                ${linkButtonTokens.linkButtonFontStyle}: ${bodyXSBold.fontStyle};
                ${linkButtonTokens.linkButtonFontWeight}: ${bodyXSBold.fontWeight};
                ${linkButtonTokens.linkButtonLetterSpacing}: ${bodyXSBold.letterSpacing};
                ${linkButtonTokens.linkButtonLineHeight}: ${bodyXSBold.lineHeight};

                ${linkButtonTokens.linkButtonSpinnerSize}: 1rem;
                ${linkButtonTokens.linkButtonSpinnerColor}: inherit;

                ${linkButtonTokens.linkButtonTextPadding}: 0.063rem 0;
                ${linkButtonTokens.linkButtonLeftContentMargin}: 0 0.25rem 0 0;
                ${linkButtonTokens.linkButtonRightContentMargin}: 0 0 0 0.25rem;
                ${linkButtonTokens.linkButtonAdditionalContentMargin}: 0 0 0 0.25rem;
            `,
            xxs: css`
                ${linkButtonTokens.linkButtonHeight}: 1.5rem;
                ${linkButtonTokens.linkButtonPadding}: 0.375rem 0;

                ${linkButtonTokens.linkButtonFontFamily}: ${bodyXSBold.fontFamily};
                ${linkButtonTokens.linkButtonFontSize}: ${bodyXSBold.fontSize};
                ${linkButtonTokens.linkButtonFontStyle}: ${bodyXSBold.fontStyle};
                ${linkButtonTokens.linkButtonFontWeight}: ${bodyXSBold.fontWeight};
                ${linkButtonTokens.linkButtonLetterSpacing}: ${bodyXSBold.letterSpacing};
                ${linkButtonTokens.linkButtonLineHeight}: ${bodyXSBold.lineHeight};

                ${linkButtonTokens.linkButtonSpinnerSize}: 0.75rem;
                ${linkButtonTokens.linkButtonSpinnerColor}: inherit;

                ${linkButtonTokens.linkButtonLeftContentMargin}: 0.063rem 0.25rem 0.063rem 0;
                ${linkButtonTokens.linkButtonRightContentMargin}: 0.063rem 0 0.063rem 0.25rem;
                ${linkButtonTokens.linkButtonAdditionalContentMargin}: 0 0 0 0.25rem;
            `,
        },
        disabled: {
            true: css`
                ${linkButtonTokens.linkButtonDisabledOpacity}: 0.4;
            `,
        },
    },
};
