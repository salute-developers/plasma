import { css, iconButtonTokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    /*
     * NOTE: Mixed DS tokens + raw vars. Prefer @salutejs-ds/sdds_sbcom/theme/tokens where possible.
     * Missing tokens in @salutejs/sdds-themes/tokens: bodyM, bodyMBold, bodyXs, bodyXsBold, surfaceAccent
     * surfaceAccentActive, surfaceAccentHover
     */
    bodyL,
    bodyLBold,
    bodyS,
    bodySBold,
    inverseTextPrimary,
    inverseTextPrimaryActive,
    inverseTextPrimaryHover,
    onDarkSurfaceSolidDefault,
    onDarkTextPrimary,
    onDarkTextPrimaryActive,
    onDarkTextPrimaryHover,
    onLightSurfaceSolidDefault,
    onLightSurfaceTransparentDeep,
    onLightTextPrimary,
    onLightTextPrimaryActive,
    onLightTextPrimaryHover,
    surfaceClear,
    surfaceNegative,
    surfaceNegativeActive,
    surfaceNegativeHover,
    surfacePositive,
    surfacePositiveActive,
    surfacePositiveHover,
    surfaceSolidDefault,
    surfaceTransparentSecondary,
    surfaceTransparentSecondaryActive,
    surfaceTransparentSecondaryHover,
    surfaceWarning,
    surfaceWarningActive,
    surfaceWarningHover,
    textPrimary,
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
                ${iconButtonTokens.iconButtonColor}: ${inverseTextPrimary};
                ${iconButtonTokens.iconButtonBackgroundColor}: ${surfaceSolidDefault};
                ${iconButtonTokens.iconButtonLoadingBackgroundColor}: var(${iconButtonTokens.iconButtonBackgroundColor});
                ${iconButtonTokens.iconButtonColorHover}: ${inverseTextPrimaryHover};
                ${iconButtonTokens.iconButtonColorActive}: ${inverseTextPrimaryActive};
            `,
            accent: css`
                ${iconButtonTokens.iconButtonColor}: ${onDarkTextPrimary};
                /* NOTE: no token surfaceAccent in @salutejs/sdds-themes/tokens */
                ${iconButtonTokens.iconButtonBackgroundColor}: var(--surface-accent);
                ${iconButtonTokens.iconButtonLoadingBackgroundColor}: var(${iconButtonTokens.iconButtonBackgroundColor});
                /* NOTE: no token surfaceAccentHover in @salutejs/sdds-themes/tokens */
                ${iconButtonTokens.iconButtonBackgroundColorHover}: var(--surface-accent-hover);
                /* NOTE: no token surfaceAccentActive in @salutejs/sdds-themes/tokens */
                ${iconButtonTokens.iconButtonBackgroundColorActive}: var(--surface-accent-active);
            `,
            secondary: css`
                ${iconButtonTokens.iconButtonColor}: ${textPrimary};
                ${iconButtonTokens.iconButtonBackgroundColor}: ${surfaceTransparentSecondary};
                ${iconButtonTokens.iconButtonLoadingBackgroundColor}: var(${iconButtonTokens.iconButtonBackgroundColor});
                ${iconButtonTokens.iconButtonBackgroundColorHover}: ${surfaceTransparentSecondaryHover};
                ${iconButtonTokens.iconButtonBackgroundColorActive}: ${surfaceTransparentSecondaryActive};
            `,
            clear: css`
                ${iconButtonTokens.iconButtonColor}: ${textPrimary};
                ${iconButtonTokens.iconButtonBackgroundColor}: ${surfaceClear};
                ${iconButtonTokens.iconButtonLoadingBackgroundColor}: var(${iconButtonTokens.iconButtonBackgroundColor});
                ${iconButtonTokens.iconButtonBackgroundColorHover}: ${surfaceTransparentSecondaryHover};
                ${iconButtonTokens.iconButtonBackgroundColorActive}: ${surfaceTransparentSecondaryActive};
            `,
            success: css`
                ${iconButtonTokens.iconButtonColor}: ${onDarkTextPrimary};
                ${iconButtonTokens.iconButtonBackgroundColor}: ${surfacePositive};
                ${iconButtonTokens.iconButtonLoadingBackgroundColor}: var(${iconButtonTokens.iconButtonBackgroundColor});
                ${iconButtonTokens.iconButtonBackgroundColorHover}: ${surfacePositiveHover};
                ${iconButtonTokens.iconButtonBackgroundColorActive}: ${surfacePositiveActive};
            `,
            warning: css`
                ${iconButtonTokens.iconButtonColor}: ${onDarkTextPrimary};
                ${iconButtonTokens.iconButtonBackgroundColor}: ${surfaceWarning};
                ${iconButtonTokens.iconButtonLoadingBackgroundColor}: var(${iconButtonTokens.iconButtonBackgroundColor});
                ${iconButtonTokens.iconButtonBackgroundColorHover}: ${surfaceWarningHover};
                ${iconButtonTokens.iconButtonBackgroundColorActive}: ${surfaceWarningActive};
            `,
            critical: css`
                ${iconButtonTokens.iconButtonColor}: ${onDarkTextPrimary};
                ${iconButtonTokens.iconButtonBackgroundColor}: ${surfaceNegative};
                ${iconButtonTokens.iconButtonLoadingBackgroundColor}: var(${iconButtonTokens.iconButtonBackgroundColor});
                ${iconButtonTokens.iconButtonBackgroundColorHover}: ${surfaceNegativeHover};
                ${iconButtonTokens.iconButtonBackgroundColorActive}: ${surfaceNegativeActive};
            `,
            dark: css`
                ${iconButtonTokens.iconButtonColor}: ${onDarkTextPrimary};
                ${iconButtonTokens.iconButtonBackgroundColor}: ${onLightSurfaceTransparentDeep};
                ${iconButtonTokens.iconButtonLoadingBackgroundColor}: var(${iconButtonTokens.iconButtonBackgroundColor});
                ${iconButtonTokens.iconButtonColorHover}: ${onDarkTextPrimaryHover};
                ${iconButtonTokens.iconButtonColorActive}: ${onDarkTextPrimaryActive};
            `,
            black: css`
                ${iconButtonTokens.iconButtonColor}: ${onDarkTextPrimary};
                ${iconButtonTokens.iconButtonBackgroundColor}: ${onLightSurfaceSolidDefault};
                ${iconButtonTokens.iconButtonLoadingBackgroundColor}: var(${iconButtonTokens.iconButtonBackgroundColor});
                ${iconButtonTokens.iconButtonColorHover}: ${onDarkTextPrimaryHover};
                ${iconButtonTokens.iconButtonColorActive}: ${onDarkTextPrimaryActive};
            `,
            white: css`
                ${iconButtonTokens.iconButtonColor}: ${onLightTextPrimary};
                ${iconButtonTokens.iconButtonBackgroundColor}: ${onDarkSurfaceSolidDefault};
                ${iconButtonTokens.iconButtonLoadingBackgroundColor}: var(${iconButtonTokens.iconButtonBackgroundColor});
                ${iconButtonTokens.iconButtonColorHover}: ${onLightTextPrimaryHover};
                ${iconButtonTokens.iconButtonColorActive}: ${onLightTextPrimaryActive};
            `,
        },
        size: {
            xl: css`
                ${iconButtonTokens.iconButtonHeight}: 4rem;
                ${iconButtonTokens.iconButtonWidth}: 4rem;
                ${iconButtonTokens.iconButtonPadding}: 1.75rem;
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
                ${iconButtonTokens.iconButtonPadding}: 1.5rem;
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
                ${iconButtonTokens.iconButtonPadding}: 1.25rem;
                ${iconButtonTokens.iconButtonRadius}: 0.75rem;
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${iconButtonTokens.iconButtonFontFamily}: var(--plasma-typo-body-m-font-family);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${iconButtonTokens.iconButtonFontSize}: var(--plasma-typo-body-m-font-size);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${iconButtonTokens.iconButtonFontStyle}: var(--plasma-typo-body-m-font-style);
                /* NOTE: no token bodyMBold in @salutejs/sdds-themes/tokens */
                ${iconButtonTokens.iconButtonFontWeight}: var(--plasma-typo-body-m-bold-font-weight);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${iconButtonTokens.iconButtonLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${iconButtonTokens.iconButtonLineHeight}: var(--plasma-typo-body-m-line-height);

                ${iconButtonTokens.iconButtonSpinnerSize}: 1.375rem;
                ${iconButtonTokens.iconButtonSpinnerColor}: inherit;
            `,
            s: css`
                ${iconButtonTokens.iconButtonHeight}: 2.5rem;
                ${iconButtonTokens.iconButtonWidth}: 2.5rem;
                ${iconButtonTokens.iconButtonPadding}: 1rem;
                ${iconButtonTokens.iconButtonRadius}: 0.625rem;
                ${iconButtonTokens.iconButtonFontFamily}: ${bodyS.fontFamily};
                ${iconButtonTokens.iconButtonFontSize}: ${bodyS.fontSize};
                ${iconButtonTokens.iconButtonFontStyle}: ${bodyS.fontStyle};
                ${iconButtonTokens.iconButtonFontWeight}: ${bodySBold.fontWeight};
                ${iconButtonTokens.iconButtonLetterSpacing}: ${bodyS.letterSpacing};
                ${iconButtonTokens.iconButtonLineHeight}: ${bodyS.lineHeight};

                ${iconButtonTokens.iconButtonSpinnerSize}: 1.375rem;
                ${iconButtonTokens.iconButtonSpinnerColor}: inherit;
            `,
            xs: css`
                ${iconButtonTokens.iconButtonHeight}: 2rem;
                ${iconButtonTokens.iconButtonWidth}: 2rem;
                ${iconButtonTokens.iconButtonPadding}: 0.75rem;
                ${iconButtonTokens.iconButtonRadius}: 0.5rem;
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${iconButtonTokens.iconButtonFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${iconButtonTokens.iconButtonFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${iconButtonTokens.iconButtonFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXsBold in @salutejs/sdds-themes/tokens */
                ${iconButtonTokens.iconButtonFontWeight}: var(--plasma-typo-body-xs-bold-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${iconButtonTokens.iconButtonLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${iconButtonTokens.iconButtonLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${iconButtonTokens.iconButtonSpinnerSize}: 1rem;
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
                /* NOTE: no token surfaceAccent in @salutejs/sdds-themes/tokens */
                ${iconButtonTokens.iconButtonFocusColor}: var(--surface-accent);
            `,
        },
    },
};
