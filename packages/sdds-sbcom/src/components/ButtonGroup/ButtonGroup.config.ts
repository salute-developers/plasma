import { css, buttonGroupTokens } from '@salutejs/plasma-new-hope/styled-components';
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
    inverseTextSecondary,
    onDarkSurfaceSolidDefault,
    onDarkSurfaceSolidDefaultActive,
    onDarkSurfaceSolidDefaultHover,
    onDarkTextPrimary,
    onDarkTextSecondary,
    onLightSurfaceSolidDefault,
    onLightSurfaceSolidDefaultActive,
    onLightSurfaceSolidDefaultHover,
    onLightSurfaceTransparentDeep,
    onLightSurfaceTransparentDeepActive,
    onLightSurfaceTransparentDeepHover,
    onLightTextPrimary,
    onLightTextSecondary,
    surfaceClear,
    surfaceNegative,
    surfaceNegativeActive,
    surfaceNegativeHover,
    surfacePositive,
    surfacePositiveActive,
    surfacePositiveHover,
    surfaceSolidDefault,
    surfaceSolidDefaultActive,
    surfaceSolidDefaultHover,
    surfaceTransparentSecondary,
    surfaceTransparentSecondaryActive,
    surfaceTransparentSecondaryHover,
    surfaceWarning,
    surfaceWarningActive,
    surfaceWarningHover,
    textPrimary,
    textPrimaryActive,
    textPrimaryHover,
    textSecondary,
} from '@salutejs-ds/sdds_sbcom/theme/tokens';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${buttonGroupTokens.buttonColor}: ${inverseTextPrimary};
                ${buttonGroupTokens.buttonTextColor}: ${inverseTextPrimary};
                ${buttonGroupTokens.buttonIconColor}: ${inverseTextPrimary};
                ${buttonGroupTokens.buttonValueColor}: ${inverseTextSecondary};
                ${buttonGroupTokens.buttonBackgroundColor}: ${surfaceSolidDefault};
                ${buttonGroupTokens.buttonLoadingBackgroundColor}: var(${buttonGroupTokens.buttonBackgroundColor});
                ${buttonGroupTokens.buttonColorHover}: ${inverseTextPrimary};
                ${buttonGroupTokens.buttonBackgroundColorHover}: ${surfaceSolidDefaultHover};
                ${buttonGroupTokens.buttonColorActive}: ${inverseTextPrimary};
                ${buttonGroupTokens.buttonBackgroundColorActive}: ${surfaceSolidDefaultActive};
            `,
            accent: css`
                ${buttonGroupTokens.buttonColor}: ${onDarkTextPrimary};
                ${buttonGroupTokens.buttonTextColor}: ${onDarkTextPrimary};
                ${buttonGroupTokens.buttonIconColor}: ${onDarkTextPrimary};
                ${buttonGroupTokens.buttonValueColor}: ${onDarkTextSecondary};
                /* NOTE: no token surfaceAccent in @salutejs/sdds-themes/tokens */
                ${buttonGroupTokens.buttonBackgroundColor}: var(--surface-accent);
                ${buttonGroupTokens.buttonLoadingBackgroundColor}: var(${buttonGroupTokens.buttonBackgroundColor});
                ${buttonGroupTokens.buttonColorHover}: ${onDarkTextPrimary};
                /* NOTE: no token surfaceAccentHover in @salutejs/sdds-themes/tokens */
                ${buttonGroupTokens.buttonBackgroundColorHover}: var(--surface-accent-hover);
                ${buttonGroupTokens.buttonColorActive}: ${onDarkTextPrimary};
                /* NOTE: no token surfaceAccentActive in @salutejs/sdds-themes/tokens */
                ${buttonGroupTokens.buttonBackgroundColorActive}: var(--surface-accent-active);
            `,
            secondary: css`
                ${buttonGroupTokens.buttonColor}: ${textPrimary};
                ${buttonGroupTokens.buttonTextColor}: ${textPrimary};
                ${buttonGroupTokens.buttonIconColor}: ${textPrimary};
                ${buttonGroupTokens.buttonValueColor}: ${textSecondary};
                ${buttonGroupTokens.buttonBackgroundColor}: ${surfaceTransparentSecondary};
                ${buttonGroupTokens.buttonLoadingBackgroundColor}: var(${buttonGroupTokens.buttonBackgroundColor});
                ${buttonGroupTokens.buttonColorHover}: ${textPrimary};
                ${buttonGroupTokens.buttonBackgroundColorHover}: ${surfaceTransparentSecondaryHover};
                ${buttonGroupTokens.buttonColorActive}: ${textPrimary};
                ${buttonGroupTokens.buttonBackgroundColorActive}: ${surfaceTransparentSecondaryActive};
            `,
            clear: css`
                ${buttonGroupTokens.buttonColor}: ${textPrimary};
                ${buttonGroupTokens.buttonTextColor}: ${textPrimary};
                ${buttonGroupTokens.buttonIconColor}: ${textPrimary};
                ${buttonGroupTokens.buttonValueColor}: ${textSecondary};
                ${buttonGroupTokens.buttonBackgroundColor}: ${surfaceClear};
                ${buttonGroupTokens.buttonLoadingBackgroundColor}: var(${buttonGroupTokens.buttonBackgroundColor});
                ${buttonGroupTokens.buttonColorHover}: ${textPrimaryHover};
                ${buttonGroupTokens.buttonBackgroundColorHover}: ${surfaceClear};
                ${buttonGroupTokens.buttonColorActive}: ${textPrimaryActive};
                ${buttonGroupTokens.buttonBackgroundColorActive}: ${surfaceClear};
            `,
            success: css`
                ${buttonGroupTokens.buttonColor}: ${onDarkTextPrimary};
                ${buttonGroupTokens.buttonTextColor}: ${onDarkTextPrimary};
                ${buttonGroupTokens.buttonIconColor}: ${onDarkTextPrimary};
                ${buttonGroupTokens.buttonValueColor}: ${onDarkTextSecondary};
                ${buttonGroupTokens.buttonBackgroundColor}: ${surfacePositive};
                ${buttonGroupTokens.buttonLoadingBackgroundColor}: var(${buttonGroupTokens.buttonBackgroundColor});
                ${buttonGroupTokens.buttonColorHover}: ${onDarkTextPrimary};
                ${buttonGroupTokens.buttonBackgroundColorHover}: ${surfacePositiveHover};
                ${buttonGroupTokens.buttonColorActive}: ${onDarkTextPrimary};
                ${buttonGroupTokens.buttonBackgroundColorActive}: ${surfacePositiveActive};
            `,
            warning: css`
                ${buttonGroupTokens.buttonColor}: ${onDarkTextPrimary};
                ${buttonGroupTokens.buttonTextColor}: ${onDarkTextPrimary};
                ${buttonGroupTokens.buttonIconColor}: ${onDarkTextPrimary};
                ${buttonGroupTokens.buttonValueColor}: ${onDarkTextSecondary};
                ${buttonGroupTokens.buttonBackgroundColor}: ${surfaceWarning};
                ${buttonGroupTokens.buttonLoadingBackgroundColor}: var(${buttonGroupTokens.buttonBackgroundColor});
                ${buttonGroupTokens.buttonColorHover}: ${onDarkTextPrimary};
                ${buttonGroupTokens.buttonBackgroundColorHover}: ${surfaceWarningHover};
                ${buttonGroupTokens.buttonColorActive}: ${onDarkTextPrimary};
                ${buttonGroupTokens.buttonBackgroundColorActive}: ${surfaceWarningActive};
            `,
            critical: css`
                ${buttonGroupTokens.buttonColor}: ${onDarkTextPrimary};
                ${buttonGroupTokens.buttonTextColor}: ${onDarkTextPrimary};
                ${buttonGroupTokens.buttonIconColor}: ${onDarkTextPrimary};
                ${buttonGroupTokens.buttonValueColor}: ${onDarkTextSecondary};
                ${buttonGroupTokens.buttonBackgroundColor}: ${surfaceNegative};
                ${buttonGroupTokens.buttonLoadingBackgroundColor}: var(${buttonGroupTokens.buttonBackgroundColor});
                ${buttonGroupTokens.buttonColorHover}: ${onDarkTextPrimary};
                ${buttonGroupTokens.buttonBackgroundColorHover}: ${surfaceNegativeHover};
                ${buttonGroupTokens.buttonColorActive}: ${onDarkTextPrimary};
                ${buttonGroupTokens.buttonBackgroundColorActive}: ${surfaceNegativeActive};
            `,
            dark: css`
                ${buttonGroupTokens.buttonColor}: ${onDarkTextPrimary};
                ${buttonGroupTokens.buttonTextColor}: ${onDarkTextPrimary};
                ${buttonGroupTokens.buttonIconColor}: ${onDarkTextPrimary};
                ${buttonGroupTokens.buttonValueColor}: ${onDarkTextSecondary};
                ${buttonGroupTokens.buttonBackgroundColor}: ${onLightSurfaceTransparentDeep};
                ${buttonGroupTokens.buttonLoadingBackgroundColor}: var(${buttonGroupTokens.buttonBackgroundColor});
                ${buttonGroupTokens.buttonColorHover}: ${onDarkTextPrimary};
                ${buttonGroupTokens.buttonBackgroundColorHover}: ${onLightSurfaceTransparentDeepHover};
                ${buttonGroupTokens.buttonColorActive}: ${onDarkTextPrimary};
                ${buttonGroupTokens.buttonBackgroundColorActive}: ${onLightSurfaceTransparentDeepActive};
            `,
            black: css`
                ${buttonGroupTokens.buttonColor}: ${onDarkTextPrimary};
                ${buttonGroupTokens.buttonTextColor}: ${onDarkTextPrimary};
                ${buttonGroupTokens.buttonIconColor}: ${onDarkTextPrimary};
                ${buttonGroupTokens.buttonValueColor}: ${onDarkTextSecondary};
                ${buttonGroupTokens.buttonBackgroundColor}: ${onLightSurfaceSolidDefault};
                ${buttonGroupTokens.buttonLoadingBackgroundColor}: var(${buttonGroupTokens.buttonBackgroundColor});
                ${buttonGroupTokens.buttonColorHover}: ${onDarkTextPrimary};
                ${buttonGroupTokens.buttonBackgroundColorHover}: ${onLightSurfaceSolidDefaultHover};
                ${buttonGroupTokens.buttonColorActive}: ${onDarkTextPrimary};
                ${buttonGroupTokens.buttonBackgroundColorActive}: ${onLightSurfaceSolidDefaultActive};
            `,
            white: css`
                ${buttonGroupTokens.buttonColor}: ${onLightTextPrimary};
                ${buttonGroupTokens.buttonTextColor}: ${onLightTextPrimary};
                ${buttonGroupTokens.buttonIconColor}: ${onLightTextPrimary};
                ${buttonGroupTokens.buttonValueColor}: ${onLightTextSecondary};
                ${buttonGroupTokens.buttonBackgroundColor}: ${onDarkSurfaceSolidDefault};
                ${buttonGroupTokens.buttonLoadingBackgroundColor}: var(${buttonGroupTokens.buttonBackgroundColor});
                ${buttonGroupTokens.buttonColorHover}: ${onLightTextPrimary};
                ${buttonGroupTokens.buttonBackgroundColorHover}: ${onDarkSurfaceSolidDefaultHover};
                ${buttonGroupTokens.buttonColorActive}: ${onLightTextPrimary};
                ${buttonGroupTokens.buttonBackgroundColorActive}: ${onDarkSurfaceSolidDefaultActive};
            `,
        },
        size: {
            xl: css`
                ${buttonGroupTokens.buttonDefaultRadius}: 1rem;
                ${buttonGroupTokens.buttonSegmentedRadius}: 0.5rem;
                ${buttonGroupTokens.buttonSideRadius}: 1rem;

                ${buttonGroupTokens.buttonHeight}: 4rem;
                ${buttonGroupTokens.buttonPadding}: 1.75rem;
                ${buttonGroupTokens.buttonFontFamily}: ${bodyL.fontFamily};
                ${buttonGroupTokens.buttonFontSize}: ${bodyL.fontSize};
                ${buttonGroupTokens.buttonFontStyle}: ${bodyL.fontStyle};
                ${buttonGroupTokens.buttonFontWeight}: ${bodyLBold.fontWeight};
                ${buttonGroupTokens.buttonLetterSpacing}: ${bodyL.letterSpacing};
                ${buttonGroupTokens.buttonLineHeight}: ${bodyL.lineHeight};
            `,
            l: css`
                ${buttonGroupTokens.buttonDefaultRadius}: 0.875rem;
                ${buttonGroupTokens.buttonSegmentedRadius}: 0.375rem;
                ${buttonGroupTokens.buttonSideRadius}: 0.875rem;

                ${buttonGroupTokens.buttonHeight}: 3.5rem;
                ${buttonGroupTokens.buttonPadding}: 1.5rem;
                ${buttonGroupTokens.buttonFontFamily}: ${bodyL.fontFamily};
                ${buttonGroupTokens.buttonFontSize}: ${bodyL.fontSize};
                ${buttonGroupTokens.buttonFontStyle}: ${bodyL.fontStyle};
                ${buttonGroupTokens.buttonFontWeight}: ${bodyLBold.fontWeight};
                ${buttonGroupTokens.buttonLetterSpacing}: ${bodyL.letterSpacing};
                ${buttonGroupTokens.buttonLineHeight}: ${bodyL.lineHeight};
            `,
            m: css`
                ${buttonGroupTokens.buttonSegmentedRadius}: 0.25rem;
                ${buttonGroupTokens.buttonDefaultRadius}: 0.75rem;
                ${buttonGroupTokens.buttonSideRadius}: 0.75rem;

                ${buttonGroupTokens.buttonHeight}: 3rem;
                ${buttonGroupTokens.buttonPadding}: 1.25rem;

                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${buttonGroupTokens.buttonFontFamily}: var(--plasma-typo-body-m-font-family);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${buttonGroupTokens.buttonFontSize}: var(--plasma-typo-body-m-font-size);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${buttonGroupTokens.buttonFontStyle}: var(--plasma-typo-body-m-font-style);
                /* NOTE: no token bodyMBold in @salutejs/sdds-themes/tokens */
                ${buttonGroupTokens.buttonFontWeight}: var(--plasma-typo-body-m-bold-font-weight);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${buttonGroupTokens.buttonLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${buttonGroupTokens.buttonLineHeight}: var(--plasma-typo-body-m-line-height);
            `,
            s: css`
                ${buttonGroupTokens.buttonSegmentedRadius}: 0.25rem;
                ${buttonGroupTokens.buttonSideRadius}: 0.625rem;
                ${buttonGroupTokens.buttonDefaultRadius}: 0.625rem;

                ${buttonGroupTokens.buttonHeight}: 2.5rem;
                ${buttonGroupTokens.buttonPadding}: 1rem;
                ${buttonGroupTokens.buttonFontFamily}: ${bodyS.fontFamily};
                ${buttonGroupTokens.buttonFontSize}: ${bodyS.fontSize};
                ${buttonGroupTokens.buttonFontStyle}: ${bodyS.fontStyle};
                ${buttonGroupTokens.buttonFontWeight}: ${bodySBold.fontWeight};
                ${buttonGroupTokens.buttonLetterSpacing}: ${bodyS.letterSpacing};
                ${buttonGroupTokens.buttonLineHeight}: ${bodyS.lineHeight};
            `,
            xs: css`
                ${buttonGroupTokens.buttonSegmentedRadius}: 0.125rem;
                ${buttonGroupTokens.buttonDefaultRadius}: 0.5rem;
                ${buttonGroupTokens.buttonSideRadius}: 0.5rem;

                ${buttonGroupTokens.buttonHeight}: 2rem;
                ${buttonGroupTokens.buttonPadding}: 0.75rem;
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${buttonGroupTokens.buttonFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${buttonGroupTokens.buttonFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${buttonGroupTokens.buttonFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXsBold in @salutejs/sdds-themes/tokens */
                ${buttonGroupTokens.buttonFontWeight}: var(--plasma-typo-body-xs-bold-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${buttonGroupTokens.buttonLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${buttonGroupTokens.buttonLineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
            xxs: css`
                ${buttonGroupTokens.buttonSegmentedRadius}: 0.125rem;
                ${buttonGroupTokens.buttonDefaultRadius}: 0.375rem;
                ${buttonGroupTokens.buttonSideRadius}: 0.375rem;

                ${buttonGroupTokens.buttonHeight}: 1.5rem;
                ${buttonGroupTokens.buttonPadding}: 0.625rem;
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${buttonGroupTokens.buttonFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${buttonGroupTokens.buttonFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${buttonGroupTokens.buttonFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXsBold in @salutejs/sdds-themes/tokens */
                ${buttonGroupTokens.buttonFontWeight}: var(--plasma-typo-body-xs-bold-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${buttonGroupTokens.buttonLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${buttonGroupTokens.buttonLineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
        },
        orientation: {
            horizontal: css`
                ${buttonGroupTokens.buttonGroupOrientation}: row;
            `,
            vertical: css`
                ${buttonGroupTokens.buttonGroupOrientation}: column;
            `,
        },
        gap: {
            none: css`
                ${buttonGroupTokens.buttonGroupItemsGap}: 0;
            `,
            dense: css`
                ${buttonGroupTokens.buttonGroupItemsGap}: 0.125rem;
            `,
            wide: css`
                ${buttonGroupTokens.buttonGroupItemsGap}: 0.5rem;
            `,
        },
        shape: {
            segmented: css``,
            default: css``,
        },
        stretching: {
            auto: css``,
            filled: css``,
        },
    },
};
