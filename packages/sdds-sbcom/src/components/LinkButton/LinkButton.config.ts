import { css, linkButtonTokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    /*
     * NOTE: Mixed DS tokens + raw vars. Prefer @salutejs-ds/sdds_sbcom/theme/tokens where possible.
     * Missing tokens in @salutejs/sdds-themes/tokens: bodyM, bodyMBold, bodyXs, bodyXsBold, surfaceAccent
     * surfaceTransparentClear
     */
    bodyL,
    bodyLBold,
    bodyS,
    bodySBold,
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
} from '@salutejs-ds/sdds_sbcom/theme/tokens';

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
                /* NOTE: no token surfaceTransparentClear in @salutejs/sdds-themes/tokens */
                ${linkButtonTokens.linkButtonBackgroundColor}: var(--surface-transparent-clear);
                ${linkButtonTokens.linkButtonColorHover}: ${textPrimaryHover};
                ${linkButtonTokens.linkButtonColorActive}: ${textPrimaryActive};
                /* NOTE: no token surfaceAccent in @salutejs/sdds-themes/tokens */
                ${linkButtonTokens.linkButtonFocusColor}: var(--surface-accent);
                ${linkButtonTokens.linkButtonTextColorHover}: ${textPrimaryHover};
                ${linkButtonTokens.linkButtonTextColorActive}: ${textPrimaryActive};
            `,
            accent: css`
                ${linkButtonTokens.linkButtonColor}: ${textAccent};
                ${linkButtonTokens.linkButtonIconColor}: ${textAccent};
                ${linkButtonTokens.linkButtonTextColor}: ${textAccent};
                /* NOTE: no token surfaceTransparentClear in @salutejs/sdds-themes/tokens */
                ${linkButtonTokens.linkButtonBackgroundColor}: var(--surface-transparent-clear);
                ${linkButtonTokens.linkButtonColorHover}: ${textAccentHover};
                ${linkButtonTokens.linkButtonColorActive}: ${textAccentActive};
                /* NOTE: no token surfaceAccent in @salutejs/sdds-themes/tokens */
                ${linkButtonTokens.linkButtonFocusColor}: var(--surface-accent);
                ${linkButtonTokens.linkButtonTextColorHover}: ${textAccentHover};
                ${linkButtonTokens.linkButtonTextColorActive}: ${textAccentActive};
            `,
            secondary: css`
                ${linkButtonTokens.linkButtonColor}: ${textSecondary};
                ${linkButtonTokens.linkButtonIconColor}: ${textSecondary};
                ${linkButtonTokens.linkButtonTextColor}: ${textSecondary};
                /* NOTE: no token surfaceTransparentClear in @salutejs/sdds-themes/tokens */
                ${linkButtonTokens.linkButtonBackgroundColor}: var(--surface-transparent-clear);
                ${linkButtonTokens.linkButtonColorHover}: ${textSecondaryHover};
                ${linkButtonTokens.linkButtonColorActive}: ${textSecondaryActive};
                /* NOTE: no token surfaceAccent in @salutejs/sdds-themes/tokens */
                ${linkButtonTokens.linkButtonFocusColor}: var(--surface-accent);
                ${linkButtonTokens.linkButtonTextColorHover}: ${textSecondaryHover};
                ${linkButtonTokens.linkButtonTextColorActive}: ${textSecondaryActive};
            `,
            positive: css`
                ${linkButtonTokens.linkButtonColor}: ${textPositive};
                ${linkButtonTokens.linkButtonIconColor}: ${textPositive};
                ${linkButtonTokens.linkButtonTextColor}: ${textPositive};
                /* NOTE: no token surfaceTransparentClear in @salutejs/sdds-themes/tokens */
                ${linkButtonTokens.linkButtonBackgroundColor}: var(--surface-transparent-clear);
                ${linkButtonTokens.linkButtonColorHover}: ${textPositiveHover};
                ${linkButtonTokens.linkButtonColorActive}: ${textPositiveActive};
                /* NOTE: no token surfaceAccent in @salutejs/sdds-themes/tokens */
                ${linkButtonTokens.linkButtonFocusColor}: var(--surface-accent);
                ${linkButtonTokens.linkButtonTextColorHover}: ${textPositiveHover};
                ${linkButtonTokens.linkButtonTextColorActive}: ${textPositiveActive};
            `,
            warning: css`
                ${linkButtonTokens.linkButtonColor}: ${textWarning};
                ${linkButtonTokens.linkButtonIconColor}: ${textWarning};
                ${linkButtonTokens.linkButtonTextColor}: ${textWarning};
                /* NOTE: no token surfaceTransparentClear in @salutejs/sdds-themes/tokens */
                ${linkButtonTokens.linkButtonBackgroundColor}: var(--surface-transparent-clear);
                ${linkButtonTokens.linkButtonColorHover}: ${textWarningHover};
                ${linkButtonTokens.linkButtonColorActive}: ${textWarningActive};
                /* NOTE: no token surfaceAccent in @salutejs/sdds-themes/tokens */
                ${linkButtonTokens.linkButtonFocusColor}: var(--surface-accent);
                ${linkButtonTokens.linkButtonTextColorHover}: ${textWarningHover};
                ${linkButtonTokens.linkButtonTextColorActive}: ${textWarningActive};
            `,
            negative: css`
                ${linkButtonTokens.linkButtonColor}: ${textNegative};
                ${linkButtonTokens.linkButtonIconColor}: ${textNegative};
                ${linkButtonTokens.linkButtonTextColor}: ${textNegative};
                /* NOTE: no token surfaceTransparentClear in @salutejs/sdds-themes/tokens */
                ${linkButtonTokens.linkButtonBackgroundColor}: var(--surface-transparent-clear);
                ${linkButtonTokens.linkButtonColorHover}: ${textNegativeHover};
                ${linkButtonTokens.linkButtonColorActive}: ${textNegativeActive};
                /* NOTE: no token surfaceAccent in @salutejs/sdds-themes/tokens */
                ${linkButtonTokens.linkButtonFocusColor}: var(--surface-accent);
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
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${linkButtonTokens.linkButtonFontFamily}: var(--plasma-typo-body-m-font-family);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${linkButtonTokens.linkButtonFontSize}: var(--plasma-typo-body-m-font-size);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${linkButtonTokens.linkButtonFontStyle}: var(--plasma-typo-body-m-font-style);
                /* NOTE: no token bodyMBold in @salutejs/sdds-themes/tokens */
                ${linkButtonTokens.linkButtonFontWeight}: var(--plasma-typo-body-m-bold-font-weight);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${linkButtonTokens.linkButtonLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${linkButtonTokens.linkButtonLineHeight}: var(--plasma-typo-body-m-line-height);

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
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${linkButtonTokens.linkButtonFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${linkButtonTokens.linkButtonFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${linkButtonTokens.linkButtonFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXsBold in @salutejs/sdds-themes/tokens */
                ${linkButtonTokens.linkButtonFontWeight}: var(--plasma-typo-body-xs-bold-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${linkButtonTokens.linkButtonLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${linkButtonTokens.linkButtonLineHeight}: var(--plasma-typo-body-xs-line-height);

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
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${linkButtonTokens.linkButtonFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${linkButtonTokens.linkButtonFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${linkButtonTokens.linkButtonFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXsBold in @salutejs/sdds-themes/tokens */
                ${linkButtonTokens.linkButtonFontWeight}: var(--plasma-typo-body-xs-bold-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${linkButtonTokens.linkButtonLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${linkButtonTokens.linkButtonLineHeight}: var(--plasma-typo-body-xs-line-height);

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
