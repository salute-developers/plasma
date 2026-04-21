import { css, embedIconButtonTokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    /*
     * NOTE: Mixed DS tokens + raw vars. Prefer @salutejs-ds/sdds_sbcom/theme/tokens where possible.
     * Missing tokens in @salutejs/sdds-themes/tokens: bodyM, bodyMBold, surfaceAccent, surfaceTransparentClear
     */
    bodyL,
    bodyLBold,
    bodyS,
    bodySBold,
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
} from '@salutejs-ds/sdds_sbcom/theme/tokens';

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
                /* NOTE: no token surfaceTransparentClear in @salutejs/sdds-themes/tokens */
                ${embedIconButtonTokens.embedIconButtonBackgroundColor}: var(--surface-transparent-clear);
                ${embedIconButtonTokens.embedIconButtonLoadingBackgroundColor}: var(${embedIconButtonTokens.embedIconButtonBackgroundColor});
                ${embedIconButtonTokens.embedIconButtonColorHover}: ${textPrimaryHover};
                ${embedIconButtonTokens.embedIconButtonColorActive}: ${textPrimaryActive};
            `,
            accent: css`
                ${embedIconButtonTokens.embedIconButtonColor}: ${textAccent};
                /* NOTE: no token surfaceTransparentClear in @salutejs/sdds-themes/tokens */
                ${embedIconButtonTokens.embedIconButtonBackgroundColor}: var(--surface-transparent-clear);
                ${embedIconButtonTokens.embedIconButtonLoadingBackgroundColor}: var(${embedIconButtonTokens.embedIconButtonBackgroundColor});
                ${embedIconButtonTokens.embedIconButtonColorHover}: ${textAccentHover};
                ${embedIconButtonTokens.embedIconButtonColorActive}: ${textAccentActive};
            `,
            secondary: css`
                ${embedIconButtonTokens.embedIconButtonColor}: ${textSecondary};
                /* NOTE: no token surfaceTransparentClear in @salutejs/sdds-themes/tokens */
                ${embedIconButtonTokens.embedIconButtonBackgroundColor}: var(--surface-transparent-clear);
                ${embedIconButtonTokens.embedIconButtonLoadingBackgroundColor}: var(${embedIconButtonTokens.embedIconButtonBackgroundColor});
                ${embedIconButtonTokens.embedIconButtonColorHover}: ${textSecondaryHover};
                ${embedIconButtonTokens.embedIconButtonColorActive}: ${textSecondaryActive};
            `,
            positive: css`
                ${embedIconButtonTokens.embedIconButtonColor}: ${textPositive};
                /* NOTE: no token surfaceTransparentClear in @salutejs/sdds-themes/tokens */
                ${embedIconButtonTokens.embedIconButtonBackgroundColor}: var(--surface-transparent-clear);
                ${embedIconButtonTokens.embedIconButtonLoadingBackgroundColor}: var(${embedIconButtonTokens.embedIconButtonBackgroundColor});
                ${embedIconButtonTokens.embedIconButtonColorHover}: ${textPositiveHover};
                ${embedIconButtonTokens.embedIconButtonColorActive}: ${textPositiveActive};
            `,
            warning: css`
                ${embedIconButtonTokens.embedIconButtonColor}: ${textWarning};
                /* NOTE: no token surfaceTransparentClear in @salutejs/sdds-themes/tokens */
                ${embedIconButtonTokens.embedIconButtonBackgroundColor}: var(--surface-transparent-clear);
                ${embedIconButtonTokens.embedIconButtonLoadingBackgroundColor}: var(${embedIconButtonTokens.embedIconButtonBackgroundColor});
                ${embedIconButtonTokens.embedIconButtonColorHover}: ${textWarningHover};
                ${embedIconButtonTokens.embedIconButtonColorActive}: ${textWarningActive};
            `,
            negative: css`
                ${embedIconButtonTokens.embedIconButtonColor}: ${textNegative};
                /* NOTE: no token surfaceTransparentClear in @salutejs/sdds-themes/tokens */
                ${embedIconButtonTokens.embedIconButtonBackgroundColor}: var(--surface-transparent-clear);
                ${embedIconButtonTokens.embedIconButtonLoadingBackgroundColor}: var(${embedIconButtonTokens.embedIconButtonBackgroundColor});
                ${embedIconButtonTokens.embedIconButtonColorHover}: ${textNegativeHover};
                ${embedIconButtonTokens.embedIconButtonColorActive}: ${textNegativeActive};
            `,
            info: css`
                ${embedIconButtonTokens.embedIconButtonColor}: ${textInfo};
                /* NOTE: no token surfaceTransparentClear in @salutejs/sdds-themes/tokens */
                ${embedIconButtonTokens.embedIconButtonBackgroundColor}: var(--surface-transparent-clear);
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
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${embedIconButtonTokens.embedIconButtonFontFamily}: var(--plasma-typo-body-m-font-family);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${embedIconButtonTokens.embedIconButtonFontSize}: var(--plasma-typo-body-m-font-size);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${embedIconButtonTokens.embedIconButtonFontStyle}: var(--plasma-typo-body-m-font-style);
                /* NOTE: no token bodyMBold in @salutejs/sdds-themes/tokens */
                ${embedIconButtonTokens.embedIconButtonFontWeight}: var(--plasma-typo-body-m-bold-font-weight);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${embedIconButtonTokens.embedIconButtonLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${embedIconButtonTokens.embedIconButtonLineHeight}: var(--plasma-typo-body-m-line-height);

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
                /* NOTE: no token surfaceAccent in @salutejs/sdds-themes/tokens */
                ${embedIconButtonTokens.embedIconButtonFocusColor}: var(--surface-accent);
            `,
        },
    },
};
