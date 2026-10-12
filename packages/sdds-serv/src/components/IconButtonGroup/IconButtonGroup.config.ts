import { css, iconButtonGroupTokens } from '@salutejs/plasma-new-hope/styled-components';
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
} from '@salutejs/sdds-themes/tokens/sdds_serv';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${iconButtonGroupTokens.buttonColor}: ${inverseTextPrimary};
                ${iconButtonGroupTokens.buttonTextColor}: ${inverseTextPrimary};
                ${iconButtonGroupTokens.buttonIconColor}: ${inverseTextPrimary};
                ${iconButtonGroupTokens.buttonValueColor}: ${inverseTextSecondary};
                ${iconButtonGroupTokens.buttonBackgroundColor}: ${surfaceSolidDefault};
                ${iconButtonGroupTokens.buttonLoadingBackgroundColor}: var(${iconButtonGroupTokens.buttonBackgroundColor});
                ${iconButtonGroupTokens.buttonColorHover}: ${inverseTextPrimary};
                ${iconButtonGroupTokens.buttonBackgroundColorHover}: ${surfaceSolidDefaultHover};
                ${iconButtonGroupTokens.buttonColorActive}: ${inverseTextPrimary};
                ${iconButtonGroupTokens.buttonBackgroundColorActive}: ${surfaceSolidDefaultActive};
            `,
            accent: css`
                ${iconButtonGroupTokens.buttonColor}: ${onDarkTextPrimary};
                ${iconButtonGroupTokens.buttonTextColor}: ${onDarkTextPrimary};
                ${iconButtonGroupTokens.buttonIconColor}: ${onDarkTextPrimary};
                ${iconButtonGroupTokens.buttonValueColor}: ${onDarkTextSecondary};
                ${iconButtonGroupTokens.buttonBackgroundColor}: ${surfaceAccent};
                ${iconButtonGroupTokens.buttonLoadingBackgroundColor}: var(${iconButtonGroupTokens.buttonBackgroundColor});
                ${iconButtonGroupTokens.buttonColorHover}: ${onDarkTextPrimary};
                ${iconButtonGroupTokens.buttonBackgroundColorHover}: ${surfaceAccentHover};
                ${iconButtonGroupTokens.buttonColorActive}: ${onDarkTextPrimary};
                ${iconButtonGroupTokens.buttonBackgroundColorActive}: ${surfaceAccentActive};
            `,
            secondary: css`
                ${iconButtonGroupTokens.buttonColor}: ${textPrimary};
                ${iconButtonGroupTokens.buttonTextColor}: ${textPrimary};
                ${iconButtonGroupTokens.buttonIconColor}: ${textPrimary};
                ${iconButtonGroupTokens.buttonValueColor}: ${textSecondary};
                ${iconButtonGroupTokens.buttonBackgroundColor}: ${surfaceTransparentSecondary};
                ${iconButtonGroupTokens.buttonLoadingBackgroundColor}: var(${iconButtonGroupTokens.buttonBackgroundColor});
                ${iconButtonGroupTokens.buttonColorHover}: ${textPrimary};
                ${iconButtonGroupTokens.buttonBackgroundColorHover}: ${surfaceTransparentSecondaryHover};
                ${iconButtonGroupTokens.buttonColorActive}: ${textPrimary};
                ${iconButtonGroupTokens.buttonBackgroundColorActive}: ${surfaceTransparentSecondaryActive};
            `,
            clear: css`
                ${iconButtonGroupTokens.buttonColor}: ${textPrimary};
                ${iconButtonGroupTokens.buttonTextColor}: ${textPrimary};
                ${iconButtonGroupTokens.buttonIconColor}: ${textPrimary};
                ${iconButtonGroupTokens.buttonValueColor}: ${textSecondary};
                ${iconButtonGroupTokens.buttonBackgroundColor}: ${surfaceClear};
                ${iconButtonGroupTokens.buttonLoadingBackgroundColor}: var(${iconButtonGroupTokens.buttonBackgroundColor});
                ${iconButtonGroupTokens.buttonColorHover}: ${textPrimaryHover};
                ${iconButtonGroupTokens.buttonBackgroundColorHover}: ${surfaceClear};
                ${iconButtonGroupTokens.buttonColorActive}: ${textPrimaryActive};
                ${iconButtonGroupTokens.buttonBackgroundColorActive}: ${surfaceClear};
            `,
            success: css`
                ${iconButtonGroupTokens.buttonColor}: ${onDarkTextPrimary};
                ${iconButtonGroupTokens.buttonTextColor}: ${onDarkTextPrimary};
                ${iconButtonGroupTokens.buttonIconColor}: ${onDarkTextPrimary};
                ${iconButtonGroupTokens.buttonValueColor}: ${onDarkTextSecondary};
                ${iconButtonGroupTokens.buttonBackgroundColor}: ${surfacePositive};
                ${iconButtonGroupTokens.buttonLoadingBackgroundColor}: var(${iconButtonGroupTokens.buttonBackgroundColor});
                ${iconButtonGroupTokens.buttonColorHover}: ${onDarkTextPrimary};
                ${iconButtonGroupTokens.buttonBackgroundColorHover}: ${surfacePositiveHover};
                ${iconButtonGroupTokens.buttonColorActive}: ${onDarkTextPrimary};
                ${iconButtonGroupTokens.buttonBackgroundColorActive}: ${surfacePositiveActive};
            `,
            warning: css`
                ${iconButtonGroupTokens.buttonColor}: ${onDarkTextPrimary};
                ${iconButtonGroupTokens.buttonTextColor}: ${onDarkTextPrimary};
                ${iconButtonGroupTokens.buttonIconColor}: ${onDarkTextPrimary};
                ${iconButtonGroupTokens.buttonValueColor}: ${onDarkTextSecondary};
                ${iconButtonGroupTokens.buttonBackgroundColor}: ${surfaceWarning};
                ${iconButtonGroupTokens.buttonLoadingBackgroundColor}: var(${iconButtonGroupTokens.buttonBackgroundColor});
                ${iconButtonGroupTokens.buttonColorHover}: ${onDarkTextPrimary};
                ${iconButtonGroupTokens.buttonBackgroundColorHover}: ${surfaceWarningHover};
                ${iconButtonGroupTokens.buttonColorActive}: ${onDarkTextPrimary};
                ${iconButtonGroupTokens.buttonBackgroundColorActive}: ${surfaceWarningActive};
            `,
            critical: css`
                ${iconButtonGroupTokens.buttonColor}: ${onDarkTextPrimary};
                ${iconButtonGroupTokens.buttonTextColor}: ${onDarkTextPrimary};
                ${iconButtonGroupTokens.buttonIconColor}: ${onDarkTextPrimary};
                ${iconButtonGroupTokens.buttonValueColor}: ${onDarkTextSecondary};
                ${iconButtonGroupTokens.buttonBackgroundColor}: ${surfaceNegative};
                ${iconButtonGroupTokens.buttonLoadingBackgroundColor}: var(${iconButtonGroupTokens.buttonBackgroundColor});
                ${iconButtonGroupTokens.buttonColorHover}: ${onDarkTextPrimary};
                ${iconButtonGroupTokens.buttonBackgroundColorHover}: ${surfaceNegativeHover};
                ${iconButtonGroupTokens.buttonColorActive}: ${onDarkTextPrimary};
                ${iconButtonGroupTokens.buttonBackgroundColorActive}: ${surfaceNegativeActive};
            `,
            dark: css`
                ${iconButtonGroupTokens.buttonColor}: ${onDarkTextPrimary};
                ${iconButtonGroupTokens.buttonTextColor}: ${onDarkTextPrimary};
                ${iconButtonGroupTokens.buttonIconColor}: ${onDarkTextPrimary};
                ${iconButtonGroupTokens.buttonValueColor}: ${onDarkTextSecondary};
                ${iconButtonGroupTokens.buttonBackgroundColor}: ${onLightSurfaceTransparentDeep};
                ${iconButtonGroupTokens.buttonLoadingBackgroundColor}: var(${iconButtonGroupTokens.buttonBackgroundColor});
                ${iconButtonGroupTokens.buttonColorHover}: ${onDarkTextPrimary};
                ${iconButtonGroupTokens.buttonBackgroundColorHover}: ${onLightSurfaceTransparentDeepHover};
                ${iconButtonGroupTokens.buttonColorActive}: ${onDarkTextPrimary};
                ${iconButtonGroupTokens.buttonBackgroundColorActive}: ${onLightSurfaceTransparentDeepActive};
            `,
            black: css`
                ${iconButtonGroupTokens.buttonColor}: ${onDarkTextPrimary};
                ${iconButtonGroupTokens.buttonTextColor}: ${onDarkTextPrimary};
                ${iconButtonGroupTokens.buttonIconColor}: ${onDarkTextPrimary};
                ${iconButtonGroupTokens.buttonValueColor}: ${onDarkTextSecondary};
                ${iconButtonGroupTokens.buttonBackgroundColor}: ${onLightSurfaceSolidDefault};
                ${iconButtonGroupTokens.buttonLoadingBackgroundColor}: var(${iconButtonGroupTokens.buttonBackgroundColor});
                ${iconButtonGroupTokens.buttonColorHover}: ${onDarkTextPrimary};
                ${iconButtonGroupTokens.buttonBackgroundColorHover}: ${onLightSurfaceSolidDefaultHover};
                ${iconButtonGroupTokens.buttonColorActive}: ${onDarkTextPrimary};
                ${iconButtonGroupTokens.buttonBackgroundColorActive}: ${onLightSurfaceSolidDefaultActive};
            `,
            white: css`
                ${iconButtonGroupTokens.buttonColor}: ${onLightTextPrimary};
                ${iconButtonGroupTokens.buttonTextColor}: ${onLightTextPrimary};
                ${iconButtonGroupTokens.buttonIconColor}: ${onLightTextPrimary};
                ${iconButtonGroupTokens.buttonValueColor}: ${onLightTextSecondary};
                ${iconButtonGroupTokens.buttonBackgroundColor}: ${onDarkSurfaceSolidDefault};
                ${iconButtonGroupTokens.buttonLoadingBackgroundColor}: var(${iconButtonGroupTokens.buttonBackgroundColor});
                ${iconButtonGroupTokens.buttonColorHover}: ${onLightTextPrimary};
                ${iconButtonGroupTokens.buttonBackgroundColorHover}: ${onDarkSurfaceSolidDefaultHover};
                ${iconButtonGroupTokens.buttonColorActive}: ${onLightTextPrimary};
                ${iconButtonGroupTokens.buttonBackgroundColorActive}: ${onDarkSurfaceSolidDefaultActive};
            `,
        },
        size: {
            xl: css`
                ${iconButtonGroupTokens.buttonDefaultRadius}: 1rem;
                ${iconButtonGroupTokens.buttonSegmentedRadius}: 0.5rem;
                ${iconButtonGroupTokens.buttonSideRadius}: 1rem;

                ${iconButtonGroupTokens.buttonHeight}: 4rem;
                ${iconButtonGroupTokens.buttonPadding}: 1.75rem;
                ${iconButtonGroupTokens.buttonFontFamily}: ${bodyL.fontFamily};
                ${iconButtonGroupTokens.buttonFontSize}: ${bodyL.fontSize};
                ${iconButtonGroupTokens.buttonFontStyle}: ${bodyL.fontStyle};
                ${iconButtonGroupTokens.buttonFontWeight}: ${bodyLBold.fontWeight};
                ${iconButtonGroupTokens.buttonLetterSpacing}: ${bodyL.letterSpacing};
                ${iconButtonGroupTokens.buttonLineHeight}: ${bodyL.lineHeight};
            `,
            l: css`
                ${iconButtonGroupTokens.buttonDefaultRadius}: 0.875rem;
                ${iconButtonGroupTokens.buttonSegmentedRadius}: 0.375rem;
                ${iconButtonGroupTokens.buttonSideRadius}: 0.875rem;

                ${iconButtonGroupTokens.buttonHeight}: 3.5rem;
                ${iconButtonGroupTokens.buttonPadding}: 1.5rem;
                ${iconButtonGroupTokens.buttonFontFamily}: ${bodyL.fontFamily};
                ${iconButtonGroupTokens.buttonFontSize}: ${bodyL.fontSize};
                ${iconButtonGroupTokens.buttonFontStyle}: ${bodyL.fontStyle};
                ${iconButtonGroupTokens.buttonFontWeight}: ${bodyLBold.fontWeight};
                ${iconButtonGroupTokens.buttonLetterSpacing}: ${bodyL.letterSpacing};
                ${iconButtonGroupTokens.buttonLineHeight}: ${bodyL.lineHeight};
            `,
            m: css`
                ${iconButtonGroupTokens.buttonSegmentedRadius}: 0.25rem;
                ${iconButtonGroupTokens.buttonDefaultRadius}: 0.75rem;
                ${iconButtonGroupTokens.buttonSideRadius}: 0.75rem;

                ${iconButtonGroupTokens.buttonHeight}: 3rem;
                ${iconButtonGroupTokens.buttonPadding}: 1.25rem;

                ${iconButtonGroupTokens.buttonFontFamily}: ${bodyM.fontFamily};
                ${iconButtonGroupTokens.buttonFontSize}: ${bodyM.fontSize};
                ${iconButtonGroupTokens.buttonFontStyle}: ${bodyM.fontStyle};
                ${iconButtonGroupTokens.buttonFontWeight}: ${bodyMBold.fontWeight};
                ${iconButtonGroupTokens.buttonLetterSpacing}: ${bodyM.letterSpacing};
                ${iconButtonGroupTokens.buttonLineHeight}: ${bodyM.lineHeight};
            `,
            s: css`
                ${iconButtonGroupTokens.buttonSegmentedRadius}: 0.25rem;
                ${iconButtonGroupTokens.buttonSideRadius}: 0.625rem;
                ${iconButtonGroupTokens.buttonDefaultRadius}: 0.625rem;

                ${iconButtonGroupTokens.buttonHeight}: 2.5rem;
                ${iconButtonGroupTokens.buttonPadding}: 1rem;
                ${iconButtonGroupTokens.buttonFontFamily}: ${bodyS.fontFamily};
                ${iconButtonGroupTokens.buttonFontSize}: ${bodyS.fontSize};
                ${iconButtonGroupTokens.buttonFontStyle}: ${bodyS.fontStyle};
                ${iconButtonGroupTokens.buttonFontWeight}: ${bodySBold.fontWeight};
                ${iconButtonGroupTokens.buttonLetterSpacing}: ${bodyS.letterSpacing};
                ${iconButtonGroupTokens.buttonLineHeight}: ${bodyS.lineHeight};
            `,
            xs: css`
                ${iconButtonGroupTokens.buttonSegmentedRadius}: 0.125rem;
                ${iconButtonGroupTokens.buttonDefaultRadius}: 0.5rem;
                ${iconButtonGroupTokens.buttonSideRadius}: 0.5rem;

                ${iconButtonGroupTokens.buttonHeight}: 2rem;
                ${iconButtonGroupTokens.buttonPadding}: 0.75rem;
                ${iconButtonGroupTokens.buttonFontFamily}: ${bodyXS.fontFamily};
                ${iconButtonGroupTokens.buttonFontSize}: ${bodyXS.fontSize};
                ${iconButtonGroupTokens.buttonFontStyle}: ${bodyXS.fontStyle};
                ${iconButtonGroupTokens.buttonFontWeight}: ${bodyXSBold.fontWeight};
                ${iconButtonGroupTokens.buttonLetterSpacing}: ${bodyXS.letterSpacing};
                ${iconButtonGroupTokens.buttonLineHeight}: ${bodyXS.lineHeight};
            `,
            xxs: css`
                ${iconButtonGroupTokens.buttonSegmentedRadius}: 0.125rem;
                ${iconButtonGroupTokens.buttonDefaultRadius}: 0.375rem;
                ${iconButtonGroupTokens.buttonSideRadius}: 0.375rem;

                ${iconButtonGroupTokens.buttonHeight}: 1.5rem;
                ${iconButtonGroupTokens.buttonPadding}: 0.625rem;
                ${iconButtonGroupTokens.buttonFontFamily}: ${bodyXS.fontFamily};
                ${iconButtonGroupTokens.buttonFontSize}: ${bodyXS.fontSize};
                ${iconButtonGroupTokens.buttonFontStyle}: ${bodyXS.fontStyle};
                ${iconButtonGroupTokens.buttonFontWeight}: ${bodyXSBold.fontWeight};
                ${iconButtonGroupTokens.buttonLetterSpacing}: ${bodyXS.letterSpacing};
                ${iconButtonGroupTokens.buttonLineHeight}: ${bodyXS.lineHeight};
            `,
        },
        orientation: {
            horizontal: css`
                ${iconButtonGroupTokens.buttonGroupOrientation}: row;
            `,
            vertical: css`
                ${iconButtonGroupTokens.buttonGroupOrientation}: column;
            `,
        },
        gap: {
            none: css`
                ${iconButtonGroupTokens.buttonGroupItemsGap}: 0;
            `,
            dense: css`
                ${iconButtonGroupTokens.buttonGroupItemsGap}: 0.125rem;
            `,
            wide: css`
                ${iconButtonGroupTokens.buttonGroupItemsGap}: 0.5rem;
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
