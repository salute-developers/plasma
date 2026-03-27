import {
    bodyL,
    bodyLBold,
    bodyM,
    bodyMBold,
    bodyS,
    bodySBold,
    bodyXS,
    bodyXSBold,
    surfaceAccent,
    surfaceClear,
    textAccent,
    textAccentActive,
    textAccentHover,
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
} from '@salutejs/plasma-themes/tokens/plasma_web';
import { css, linkButtonTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${linkButtonTokens.linkButtonColor}: ${textPrimary};
                ${linkButtonTokens.linkButtonIconColor}: ${textPrimary};
                ${linkButtonTokens.linkButtonTextColor}: ${textPrimary};
                ${linkButtonTokens.linkButtonBackgroundColor}: ${surfaceClear};
                ${linkButtonTokens.linkButtonColorHover}: ${textPrimaryHover};
                ${linkButtonTokens.linkButtonColorActive}: ${textPrimaryActive};
                ${linkButtonTokens.linkButtonFocusColor}: ${surfaceAccent};
                ${linkButtonTokens.linkButtonTextColorHover}: ${textPrimaryHover};
                ${linkButtonTokens.linkButtonTextColorActive}: ${textPrimaryActive};
            `,
            accent: css`
                ${linkButtonTokens.linkButtonColor}: ${textAccent};
                ${linkButtonTokens.linkButtonIconColor}: ${textAccent};
                ${linkButtonTokens.linkButtonTextColor}: ${textAccent};
                ${linkButtonTokens.linkButtonBackgroundColor}: ${surfaceClear};
                ${linkButtonTokens.linkButtonColorHover}: ${textAccentHover};
                ${linkButtonTokens.linkButtonColorActive}: ${textAccentActive};
                ${linkButtonTokens.linkButtonFocusColor}: ${surfaceAccent};
                ${linkButtonTokens.linkButtonTextColorHover}: ${textAccentHover};
                ${linkButtonTokens.linkButtonTextColorActive}: ${textAccentActive};
            `,
            secondary: css`
                ${linkButtonTokens.linkButtonColor}: ${textSecondary};
                ${linkButtonTokens.linkButtonIconColor}: ${textSecondary};
                ${linkButtonTokens.linkButtonTextColor}: ${textSecondary};
                ${linkButtonTokens.linkButtonBackgroundColor}: ${surfaceClear};
                ${linkButtonTokens.linkButtonColorHover}: ${textSecondaryHover};
                ${linkButtonTokens.linkButtonColorActive}: ${textSecondaryActive};
                ${linkButtonTokens.linkButtonFocusColor}: ${surfaceAccent};
                ${linkButtonTokens.linkButtonTextColorHover}: ${textSecondaryHover};
                ${linkButtonTokens.linkButtonTextColorActive}: ${textSecondaryActive};
            `,
            positive: css`
                ${linkButtonTokens.linkButtonColor}: ${textPositive};
                ${linkButtonTokens.linkButtonIconColor}: ${textPositive};
                ${linkButtonTokens.linkButtonTextColor}: ${textPositive};
                ${linkButtonTokens.linkButtonBackgroundColor}: ${surfaceClear};
                ${linkButtonTokens.linkButtonColorHover}: ${textPositiveHover};
                ${linkButtonTokens.linkButtonColorActive}: ${textPositiveActive};
                ${linkButtonTokens.linkButtonFocusColor}: ${surfaceAccent};
                ${linkButtonTokens.linkButtonTextColorHover}: ${textPositiveHover};
                ${linkButtonTokens.linkButtonTextColorActive}: ${textPositiveActive};
            `,
            warning: css`
                ${linkButtonTokens.linkButtonColor}: ${textWarning};
                ${linkButtonTokens.linkButtonIconColor}: ${textWarning};
                ${linkButtonTokens.linkButtonTextColor}: ${textWarning};
                ${linkButtonTokens.linkButtonBackgroundColor}: ${surfaceClear};
                ${linkButtonTokens.linkButtonColorHover}: ${textWarningHover};
                ${linkButtonTokens.linkButtonColorActive}: ${textWarningActive};
                ${linkButtonTokens.linkButtonFocusColor}: ${surfaceAccent};
                ${linkButtonTokens.linkButtonTextColorHover}: ${textWarningHover};
                ${linkButtonTokens.linkButtonTextColorActive}: ${textWarningActive};
            `,
            negative: css`
                ${linkButtonTokens.linkButtonColor}: ${textNegative};
                ${linkButtonTokens.linkButtonIconColor}: ${textNegative};
                ${linkButtonTokens.linkButtonTextColor}: ${textNegative};
                ${linkButtonTokens.linkButtonBackgroundColor}: ${surfaceClear};
                ${linkButtonTokens.linkButtonColorHover}: ${textNegativeHover};
                ${linkButtonTokens.linkButtonColorActive}: ${textNegativeActive};
                ${linkButtonTokens.linkButtonFocusColor}: ${surfaceAccent};
                ${linkButtonTokens.linkButtonTextColorHover}: ${textNegativeHover};
                ${linkButtonTokens.linkButtonTextColorActive}: ${textNegativeActive};
            `,
        },
        size: {
            xl: css`
                ${linkButtonTokens.linkButtonHeight}: 4rem;
                ${linkButtonTokens.linkButtonPadding}: 1.25rem 0;
                ${linkButtonTokens.linkButtonRadius}: 1rem;
                ${linkButtonTokens.linkButtonFontFamily}: ${bodyL.fontFamily};
                ${linkButtonTokens.linkButtonFontSize}: ${bodyL.fontSize};
                ${linkButtonTokens.linkButtonFontStyle}: ${bodyL.fontStyle};
                ${linkButtonTokens.linkButtonFontWeight}: ${bodyLBold.fontWeight};
                ${linkButtonTokens.linkButtonLetterSpacing}: ${bodyL.letterSpacing};
                ${linkButtonTokens.linkButtonLineHeight}: ${bodyL.lineHeight};

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
                ${linkButtonTokens.linkButtonRadius}: 0.875rem;
                ${linkButtonTokens.linkButtonFontFamily}: ${bodyL.fontFamily};
                ${linkButtonTokens.linkButtonFontSize}: ${bodyL.fontSize};
                ${linkButtonTokens.linkButtonFontStyle}: ${bodyL.fontStyle};
                ${linkButtonTokens.linkButtonFontWeight}: ${bodyLBold.fontWeight};
                ${linkButtonTokens.linkButtonLetterSpacing}: ${bodyL.letterSpacing};
                ${linkButtonTokens.linkButtonLineHeight}: ${bodyL.lineHeight};

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
                ${linkButtonTokens.linkButtonRadius}: 0.75rem;
                ${linkButtonTokens.linkButtonFontFamily}: ${bodyM.fontFamily};
                ${linkButtonTokens.linkButtonFontSize}: ${bodyM.fontSize};
                ${linkButtonTokens.linkButtonFontStyle}: ${bodyM.fontStyle};
                ${linkButtonTokens.linkButtonFontWeight}: ${bodyMBold.fontWeight};
                ${linkButtonTokens.linkButtonLetterSpacing}: ${bodyM.letterSpacing};
                ${linkButtonTokens.linkButtonLineHeight}: ${bodyM.lineHeight};

                ${linkButtonTokens.linkButtonSpinnerSize}: 1.375rem;
                ${linkButtonTokens.linkButtonSpinnerColor}: inherit;

                ${linkButtonTokens.linkButtonTextPadding}: 0.125rem 0;
                ${linkButtonTokens.linkButtonLeftContentMargin}: 0 0.375rem 0 0;
                ${linkButtonTokens.linkButtonRightContentMargin}: 0 0 0 0.375rem;
                ${linkButtonTokens.linkButtonAdditionalContentMargin}: 0 0 0 0.375rem;
            `,
            s: css`
                ${linkButtonTokens.linkButtonHeight}: 2.5rem;
                ${linkButtonTokens.linkButtonPadding}: 0.5rem 0;
                ${linkButtonTokens.linkButtonRadius}: 0.625rem;
                ${linkButtonTokens.linkButtonFontFamily}: ${bodyS.fontFamily};
                ${linkButtonTokens.linkButtonFontSize}: ${bodyS.fontSize};
                ${linkButtonTokens.linkButtonFontStyle}: ${bodyS.fontStyle};
                ${linkButtonTokens.linkButtonFontWeight}: ${bodySBold.fontWeight};
                ${linkButtonTokens.linkButtonLetterSpacing}: ${bodyS.letterSpacing};
                ${linkButtonTokens.linkButtonLineHeight}: ${bodyS.lineHeight};

                ${linkButtonTokens.linkButtonSpinnerSize}: 1.375rem;
                ${linkButtonTokens.linkButtonSpinnerColor}: inherit;

                ${linkButtonTokens.linkButtonTextPadding}: 0.063rem 0;
                ${linkButtonTokens.linkButtonLeftContentMargin}: 0 0.25rem 0 0;
                ${linkButtonTokens.linkButtonRightContentMargin}: 0 0 0 0.25rem;
                ${linkButtonTokens.linkButtonAdditionalContentMargin}: 0 0 0 0.25rem;
            `,
            xs: css`
                ${linkButtonTokens.linkButtonHeight}: 2rem;
                ${linkButtonTokens.linkButtonPadding}: 0.5rem 0;
                ${linkButtonTokens.linkButtonRadius}: 0.5rem;
                ${linkButtonTokens.linkButtonFontFamily}: ${bodyXS.fontFamily};
                ${linkButtonTokens.linkButtonFontSize}: ${bodyXS.fontSize};
                ${linkButtonTokens.linkButtonFontStyle}: ${bodyXS.fontStyle};
                ${linkButtonTokens.linkButtonFontWeight}: ${bodyXSBold.fontWeight};
                ${linkButtonTokens.linkButtonLetterSpacing}: ${bodyXS.letterSpacing};
                ${linkButtonTokens.linkButtonLineHeight}: ${bodyXS.lineHeight};

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
                ${linkButtonTokens.linkButtonRadius}: 0.375rem;
                ${linkButtonTokens.linkButtonFontFamily}: ${bodyXS.fontFamily};
                ${linkButtonTokens.linkButtonFontSize}: ${bodyXS.fontSize};
                ${linkButtonTokens.linkButtonFontStyle}: ${bodyXS.fontStyle};
                ${linkButtonTokens.linkButtonFontWeight}: ${bodyXSBold.fontWeight};
                ${linkButtonTokens.linkButtonLetterSpacing}: ${bodyXS.letterSpacing};
                ${linkButtonTokens.linkButtonLineHeight}: ${bodyXS.lineHeight};

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
