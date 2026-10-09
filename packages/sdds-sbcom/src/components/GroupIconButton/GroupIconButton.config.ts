import { css, groupIconButtonTokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    bodyL,
    bodyLBold,
    bodyM,
    bodyMBold,
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
    surfaceAccent,
    surfaceAccentActive,
    surfaceAccentHover,
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

/*
 * NOTE: Mixed DS tokens + raw vars. Prefer @salutejs-ds/sdds_sbcom/theme/tokens where possible.
 * Missing tokens in @salutejs/sdds-themes/tokens: bodyXs, bodyXsBold
 */
export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${groupIconButtonTokens.buttonColor}: ${inverseTextPrimary};
                ${groupIconButtonTokens.buttonTextColor}: ${inverseTextPrimary};
                ${groupIconButtonTokens.buttonIconColor}: ${inverseTextPrimary};
                ${groupIconButtonTokens.buttonValueColor}: ${inverseTextSecondary};
                ${groupIconButtonTokens.buttonBackgroundColor}: ${surfaceSolidDefault};
                ${groupIconButtonTokens.buttonLoadingBackgroundColor}: var(${groupIconButtonTokens.buttonBackgroundColor});
                ${groupIconButtonTokens.buttonColorHover}: ${inverseTextPrimary};
                ${groupIconButtonTokens.buttonBackgroundColorHover}: ${surfaceSolidDefaultHover};
                ${groupIconButtonTokens.buttonColorActive}: ${inverseTextPrimary};
                ${groupIconButtonTokens.buttonBackgroundColorActive}: ${surfaceSolidDefaultActive};
            `,
            accent: css`
                ${groupIconButtonTokens.buttonColor}: ${onDarkTextPrimary};
                ${groupIconButtonTokens.buttonTextColor}: ${onDarkTextPrimary};
                ${groupIconButtonTokens.buttonIconColor}: ${onDarkTextPrimary};
                ${groupIconButtonTokens.buttonValueColor}: ${onDarkTextSecondary};
                ${groupIconButtonTokens.buttonBackgroundColor}: ${surfaceAccent};
                ${groupIconButtonTokens.buttonLoadingBackgroundColor}: var(${groupIconButtonTokens.buttonBackgroundColor});
                ${groupIconButtonTokens.buttonColorHover}: ${onDarkTextPrimary};
                ${groupIconButtonTokens.buttonBackgroundColorHover}: ${surfaceAccentHover};
                ${groupIconButtonTokens.buttonColorActive}: ${onDarkTextPrimary};
                ${groupIconButtonTokens.buttonBackgroundColorActive}: ${surfaceAccentActive};
            `,
            secondary: css`
                ${groupIconButtonTokens.buttonColor}: ${textPrimary};
                ${groupIconButtonTokens.buttonTextColor}: ${textPrimary};
                ${groupIconButtonTokens.buttonIconColor}: ${textPrimary};
                ${groupIconButtonTokens.buttonValueColor}: ${textSecondary};
                ${groupIconButtonTokens.buttonBackgroundColor}: ${surfaceTransparentSecondary};
                ${groupIconButtonTokens.buttonLoadingBackgroundColor}: var(${groupIconButtonTokens.buttonBackgroundColor});
                ${groupIconButtonTokens.buttonColorHover}: ${textPrimary};
                ${groupIconButtonTokens.buttonBackgroundColorHover}: ${surfaceTransparentSecondaryHover};
                ${groupIconButtonTokens.buttonColorActive}: ${textPrimary};
                ${groupIconButtonTokens.buttonBackgroundColorActive}: ${surfaceTransparentSecondaryActive};
            `,
            clear: css`
                ${groupIconButtonTokens.buttonColor}: ${textPrimary};
                ${groupIconButtonTokens.buttonTextColor}: ${textPrimary};
                ${groupIconButtonTokens.buttonIconColor}: ${textPrimary};
                ${groupIconButtonTokens.buttonValueColor}: ${textSecondary};
                ${groupIconButtonTokens.buttonBackgroundColor}: ${surfaceClear};
                ${groupIconButtonTokens.buttonLoadingBackgroundColor}: var(${groupIconButtonTokens.buttonBackgroundColor});
                ${groupIconButtonTokens.buttonColorHover}: ${textPrimaryHover};
                ${groupIconButtonTokens.buttonBackgroundColorHover}: ${surfaceClear};
                ${groupIconButtonTokens.buttonColorActive}: ${textPrimaryActive};
                ${groupIconButtonTokens.buttonBackgroundColorActive}: ${surfaceClear};
            `,
            success: css`
                ${groupIconButtonTokens.buttonColor}: ${onDarkTextPrimary};
                ${groupIconButtonTokens.buttonTextColor}: ${onDarkTextPrimary};
                ${groupIconButtonTokens.buttonIconColor}: ${onDarkTextPrimary};
                ${groupIconButtonTokens.buttonValueColor}: ${onDarkTextSecondary};
                ${groupIconButtonTokens.buttonBackgroundColor}: ${surfacePositive};
                ${groupIconButtonTokens.buttonLoadingBackgroundColor}: var(${groupIconButtonTokens.buttonBackgroundColor});
                ${groupIconButtonTokens.buttonColorHover}: ${onDarkTextPrimary};
                ${groupIconButtonTokens.buttonBackgroundColorHover}: ${surfacePositiveHover};
                ${groupIconButtonTokens.buttonColorActive}: ${onDarkTextPrimary};
                ${groupIconButtonTokens.buttonBackgroundColorActive}: ${surfacePositiveActive};
            `,
            warning: css`
                ${groupIconButtonTokens.buttonColor}: ${onDarkTextPrimary};
                ${groupIconButtonTokens.buttonTextColor}: ${onDarkTextPrimary};
                ${groupIconButtonTokens.buttonIconColor}: ${onDarkTextPrimary};
                ${groupIconButtonTokens.buttonValueColor}: ${onDarkTextSecondary};
                ${groupIconButtonTokens.buttonBackgroundColor}: ${surfaceWarning};
                ${groupIconButtonTokens.buttonLoadingBackgroundColor}: var(${groupIconButtonTokens.buttonBackgroundColor});
                ${groupIconButtonTokens.buttonColorHover}: ${onDarkTextPrimary};
                ${groupIconButtonTokens.buttonBackgroundColorHover}: ${surfaceWarningHover};
                ${groupIconButtonTokens.buttonColorActive}: ${onDarkTextPrimary};
                ${groupIconButtonTokens.buttonBackgroundColorActive}: ${surfaceWarningActive};
            `,
            critical: css`
                ${groupIconButtonTokens.buttonColor}: ${onDarkTextPrimary};
                ${groupIconButtonTokens.buttonTextColor}: ${onDarkTextPrimary};
                ${groupIconButtonTokens.buttonIconColor}: ${onDarkTextPrimary};
                ${groupIconButtonTokens.buttonValueColor}: ${onDarkTextSecondary};
                ${groupIconButtonTokens.buttonBackgroundColor}: ${surfaceNegative};
                ${groupIconButtonTokens.buttonLoadingBackgroundColor}: var(${groupIconButtonTokens.buttonBackgroundColor});
                ${groupIconButtonTokens.buttonColorHover}: ${onDarkTextPrimary};
                ${groupIconButtonTokens.buttonBackgroundColorHover}: ${surfaceNegativeHover};
                ${groupIconButtonTokens.buttonColorActive}: ${onDarkTextPrimary};
                ${groupIconButtonTokens.buttonBackgroundColorActive}: ${surfaceNegativeActive};
            `,
            dark: css`
                ${groupIconButtonTokens.buttonColor}: ${onDarkTextPrimary};
                ${groupIconButtonTokens.buttonTextColor}: ${onDarkTextPrimary};
                ${groupIconButtonTokens.buttonIconColor}: ${onDarkTextPrimary};
                ${groupIconButtonTokens.buttonValueColor}: ${onDarkTextSecondary};
                ${groupIconButtonTokens.buttonBackgroundColor}: ${onLightSurfaceTransparentDeep};
                ${groupIconButtonTokens.buttonLoadingBackgroundColor}: var(${groupIconButtonTokens.buttonBackgroundColor});
                ${groupIconButtonTokens.buttonColorHover}: ${onDarkTextPrimary};
                ${groupIconButtonTokens.buttonBackgroundColorHover}: ${onLightSurfaceTransparentDeepHover};
                ${groupIconButtonTokens.buttonColorActive}: ${onDarkTextPrimary};
                ${groupIconButtonTokens.buttonBackgroundColorActive}: ${onLightSurfaceTransparentDeepActive};
            `,
            black: css`
                ${groupIconButtonTokens.buttonColor}: ${onDarkTextPrimary};
                ${groupIconButtonTokens.buttonTextColor}: ${onDarkTextPrimary};
                ${groupIconButtonTokens.buttonIconColor}: ${onDarkTextPrimary};
                ${groupIconButtonTokens.buttonValueColor}: ${onDarkTextSecondary};
                ${groupIconButtonTokens.buttonBackgroundColor}: ${onLightSurfaceSolidDefault};
                ${groupIconButtonTokens.buttonLoadingBackgroundColor}: var(${groupIconButtonTokens.buttonBackgroundColor});
                ${groupIconButtonTokens.buttonColorHover}: ${onDarkTextPrimary};
                ${groupIconButtonTokens.buttonBackgroundColorHover}: ${onLightSurfaceSolidDefaultHover};
                ${groupIconButtonTokens.buttonColorActive}: ${onDarkTextPrimary};
                ${groupIconButtonTokens.buttonBackgroundColorActive}: ${onLightSurfaceSolidDefaultActive};
            `,
            white: css`
                ${groupIconButtonTokens.buttonColor}: ${onLightTextPrimary};
                ${groupIconButtonTokens.buttonTextColor}: ${onLightTextPrimary};
                ${groupIconButtonTokens.buttonIconColor}: ${onLightTextPrimary};
                ${groupIconButtonTokens.buttonValueColor}: ${onLightTextSecondary};
                ${groupIconButtonTokens.buttonBackgroundColor}: ${onDarkSurfaceSolidDefault};
                ${groupIconButtonTokens.buttonLoadingBackgroundColor}: var(${groupIconButtonTokens.buttonBackgroundColor});
                ${groupIconButtonTokens.buttonColorHover}: ${onLightTextPrimary};
                ${groupIconButtonTokens.buttonBackgroundColorHover}: ${onDarkSurfaceSolidDefaultHover};
                ${groupIconButtonTokens.buttonColorActive}: ${onLightTextPrimary};
                ${groupIconButtonTokens.buttonBackgroundColorActive}: ${onDarkSurfaceSolidDefaultActive};
            `,
        },
        size: {
            xl: css`
                ${groupIconButtonTokens.buttonDefaultRadius}: 1rem;
                ${groupIconButtonTokens.buttonSegmentedRadius}: 0.5rem;
                ${groupIconButtonTokens.buttonSideRadius}: 1rem;

                ${groupIconButtonTokens.buttonHeight}: 4rem;
                ${groupIconButtonTokens.buttonPadding}: 1.75rem;
                ${groupIconButtonTokens.buttonFontFamily}: ${bodyL.fontFamily};
                ${groupIconButtonTokens.buttonFontSize}: ${bodyL.fontSize};
                ${groupIconButtonTokens.buttonFontStyle}: ${bodyL.fontStyle};
                ${groupIconButtonTokens.buttonFontWeight}: ${bodyLBold.fontWeight};
                ${groupIconButtonTokens.buttonLetterSpacing}: ${bodyL.letterSpacing};
                ${groupIconButtonTokens.buttonLineHeight}: ${bodyL.lineHeight};
            `,
            l: css`
                ${groupIconButtonTokens.buttonDefaultRadius}: 0.875rem;
                ${groupIconButtonTokens.buttonSegmentedRadius}: 0.375rem;
                ${groupIconButtonTokens.buttonSideRadius}: 0.875rem;

                ${groupIconButtonTokens.buttonHeight}: 3.5rem;
                ${groupIconButtonTokens.buttonPadding}: 1.5rem;
                ${groupIconButtonTokens.buttonFontFamily}: ${bodyL.fontFamily};
                ${groupIconButtonTokens.buttonFontSize}: ${bodyL.fontSize};
                ${groupIconButtonTokens.buttonFontStyle}: ${bodyL.fontStyle};
                ${groupIconButtonTokens.buttonFontWeight}: ${bodyLBold.fontWeight};
                ${groupIconButtonTokens.buttonLetterSpacing}: ${bodyL.letterSpacing};
                ${groupIconButtonTokens.buttonLineHeight}: ${bodyL.lineHeight};
            `,
            m: css`
                ${groupIconButtonTokens.buttonSegmentedRadius}: 0.25rem;
                ${groupIconButtonTokens.buttonDefaultRadius}: 0.75rem;
                ${groupIconButtonTokens.buttonSideRadius}: 0.75rem;

                ${groupIconButtonTokens.buttonHeight}: 3rem;
                ${groupIconButtonTokens.buttonPadding}: 1.25rem;

                ${groupIconButtonTokens.buttonFontFamily}: ${bodyM.fontFamily};
                ${groupIconButtonTokens.buttonFontSize}: ${bodyM.fontSize};
                ${groupIconButtonTokens.buttonFontStyle}: ${bodyM.fontStyle};
                ${groupIconButtonTokens.buttonFontWeight}: ${bodyMBold.fontWeight};
                ${groupIconButtonTokens.buttonLetterSpacing}: ${bodyM.letterSpacing};
                ${groupIconButtonTokens.buttonLineHeight}: ${bodyM.lineHeight};
            `,
            s: css`
                ${groupIconButtonTokens.buttonSegmentedRadius}: 0.25rem;
                ${groupIconButtonTokens.buttonSideRadius}: 0.625rem;
                ${groupIconButtonTokens.buttonDefaultRadius}: 0.625rem;

                ${groupIconButtonTokens.buttonHeight}: 2.5rem;
                ${groupIconButtonTokens.buttonPadding}: 1rem;
                ${groupIconButtonTokens.buttonFontFamily}: ${bodyS.fontFamily};
                ${groupIconButtonTokens.buttonFontSize}: ${bodyS.fontSize};
                ${groupIconButtonTokens.buttonFontStyle}: ${bodyS.fontStyle};
                ${groupIconButtonTokens.buttonFontWeight}: ${bodySBold.fontWeight};
                ${groupIconButtonTokens.buttonLetterSpacing}: ${bodyS.letterSpacing};
                ${groupIconButtonTokens.buttonLineHeight}: ${bodyS.lineHeight};
            `,
            xs: css`
                ${groupIconButtonTokens.buttonSegmentedRadius}: 0.125rem;
                ${groupIconButtonTokens.buttonDefaultRadius}: 0.5rem;
                ${groupIconButtonTokens.buttonSideRadius}: 0.5rem;

                ${groupIconButtonTokens.buttonHeight}: 2rem;
                ${groupIconButtonTokens.buttonPadding}: 0.75rem;
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${groupIconButtonTokens.buttonFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${groupIconButtonTokens.buttonFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${groupIconButtonTokens.buttonFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXsBold in @salutejs/sdds-themes/tokens */
                ${groupIconButtonTokens.buttonFontWeight}: var(--plasma-typo-body-xs-bold-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${groupIconButtonTokens.buttonLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${groupIconButtonTokens.buttonLineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
            xxs: css`
                ${groupIconButtonTokens.buttonSegmentedRadius}: 0.125rem;
                ${groupIconButtonTokens.buttonDefaultRadius}: 0.375rem;
                ${groupIconButtonTokens.buttonSideRadius}: 0.375rem;

                ${groupIconButtonTokens.buttonHeight}: 1.5rem;
                ${groupIconButtonTokens.buttonPadding}: 0.625rem;
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${groupIconButtonTokens.buttonFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${groupIconButtonTokens.buttonFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${groupIconButtonTokens.buttonFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXsBold in @salutejs/sdds-themes/tokens */
                ${groupIconButtonTokens.buttonFontWeight}: var(--plasma-typo-body-xs-bold-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${groupIconButtonTokens.buttonLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${groupIconButtonTokens.buttonLineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
        },
        orientation: {
            horizontal: css`
                ${groupIconButtonTokens.buttonGroupOrientation}: row;
            `,
            vertical: css`
                ${groupIconButtonTokens.buttonGroupOrientation}: column;
            `,
        },
        gap: {
            none: css`
                ${groupIconButtonTokens.buttonGroupItemsGap}: 0;
            `,
            dense: css`
                ${groupIconButtonTokens.buttonGroupItemsGap}: 0.125rem;
            `,
            wide: css`
                ${groupIconButtonTokens.buttonGroupItemsGap}: 0.5rem;
            `,
        },
        shape: {
            segmented: css``,
            default: css``,
            pilled: css``,
        },
        stretching: {
            auto: css``,
            filled: css``,
        },
    },
};
