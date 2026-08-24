import { css, linkButtonTokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    bodyS,
    bodySBold,
    bodyXS,
    bodyXSBold,
    bodyXXS,
    bodyXXSBold,
    surfaceAccent,
    surfaceClear,
    textAccent,
    textAccentActive,
    textAccentGradient,
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

export const config = {
    defaults: {
        view: 'default',
        size: 's',
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
            `,
            gradient: css`
                ${linkButtonTokens.linkButtonIconColor}: ${textAccentGradient};
                ${linkButtonTokens.linkButtonTextColor}: ${textAccentGradient};
                ${linkButtonTokens.linkButtonBackgroundColor}: ${surfaceClear};
                ${linkButtonTokens.linkButtonIconColorHover}: ${textAccentGradient};
                ${linkButtonTokens.linkButtonIconColorActive}: ${textAccentGradient};
                ${linkButtonTokens.linkButtonFocusColor}: ${surfaceAccent};
                ${linkButtonTokens.linkButtonTextColorHover}: ${textAccentGradient};
                ${linkButtonTokens.linkButtonTextColorActive}: ${textAccentGradient};
            `,
        },
        size: {
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
                ${linkButtonTokens.linkButtonFontFamily}: ${bodyXXS.fontFamily};
                ${linkButtonTokens.linkButtonFontSize}: ${bodyXXS.fontSize};
                ${linkButtonTokens.linkButtonFontStyle}: ${bodyXXS.fontStyle};
                ${linkButtonTokens.linkButtonFontWeight}: ${bodyXXSBold.fontWeight};
                ${linkButtonTokens.linkButtonLetterSpacing}: ${bodyXXS.letterSpacing};
                ${linkButtonTokens.linkButtonLineHeight}: ${bodyXXS.lineHeight};

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
