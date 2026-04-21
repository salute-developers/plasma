import {
    bodyL,
    bodyLBold,
    bodyM,
    bodyMBold,
    bodyS,
    bodySBold,
    bodyXS,
    bodyXSBold,
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
} from '@salutejs/sdds-themes/tokens/sdds_insol';
import { css, buttonGroupTokens } from '@salutejs/plasma-new-hope/styled-components';

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
                ${buttonGroupTokens.buttonBackgroundColor}: ${surfaceAccent};
                ${buttonGroupTokens.buttonLoadingBackgroundColor}: var(${buttonGroupTokens.buttonBackgroundColor});
                ${buttonGroupTokens.buttonColorHover}: ${onDarkTextPrimary};
                ${buttonGroupTokens.buttonBackgroundColorHover}: ${surfaceAccentHover};
                ${buttonGroupTokens.buttonColorActive}: ${onDarkTextPrimary};
                ${buttonGroupTokens.buttonBackgroundColorActive}: ${surfaceAccentActive};
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

                ${buttonGroupTokens.buttonFontFamily}: ${bodyM.fontFamily};
                ${buttonGroupTokens.buttonFontSize}: ${bodyM.fontSize};
                ${buttonGroupTokens.buttonFontStyle}: ${bodyM.fontStyle};
                ${buttonGroupTokens.buttonFontWeight}: ${bodyMBold.fontWeight};
                ${buttonGroupTokens.buttonLetterSpacing}: ${bodyM.letterSpacing};
                ${buttonGroupTokens.buttonLineHeight}: ${bodyM.lineHeight};
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
                ${buttonGroupTokens.buttonFontFamily}: ${bodyXS.fontFamily};
                ${buttonGroupTokens.buttonFontSize}: ${bodyXS.fontSize};
                ${buttonGroupTokens.buttonFontStyle}: ${bodyXS.fontStyle};
                ${buttonGroupTokens.buttonFontWeight}: ${bodyXSBold.fontWeight};
                ${buttonGroupTokens.buttonLetterSpacing}: ${bodyXS.letterSpacing};
                ${buttonGroupTokens.buttonLineHeight}: ${bodyXS.lineHeight};
            `,
            xxs: css`
                ${buttonGroupTokens.buttonSegmentedRadius}: 0.125rem;
                ${buttonGroupTokens.buttonDefaultRadius}: 0.375rem;
                ${buttonGroupTokens.buttonSideRadius}: 0.375rem;

                ${buttonGroupTokens.buttonHeight}: 1.5rem;
                ${buttonGroupTokens.buttonPadding}: 0.625rem;
                ${buttonGroupTokens.buttonFontFamily}: ${bodyXS.fontFamily};
                ${buttonGroupTokens.buttonFontSize}: ${bodyXS.fontSize};
                ${buttonGroupTokens.buttonFontStyle}: ${bodyXS.fontStyle};
                ${buttonGroupTokens.buttonFontWeight}: ${bodyXSBold.fontWeight};
                ${buttonGroupTokens.buttonLetterSpacing}: ${bodyXS.letterSpacing};
                ${buttonGroupTokens.buttonLineHeight}: ${bodyXS.lineHeight};
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
