import {
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
} from '@salutejs/sdds-themes/tokens/sdds_finai';
import { css, linkButtonTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 's',
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
        },
        disabled: {
            true: css`
                ${linkButtonTokens.linkButtonDisabledOpacity}: 0.4;
            `,
        },
    },
};
