import { css, buttonGroupTokens } from '@salutejs/plasma-new-hope/styled-components';
import {
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
    surfaceSolidCard,
    surfaceSolidCardActive,
    surfaceSolidCardHover,
    surfaceSolidDefault,
    surfaceSolidDefaultActive,
    surfaceSolidDefaultHover,
    surfaceTransparentSecondary,
    surfaceTransparentSecondaryActive,
    surfaceTransparentSecondaryHover,
    surfaceWarning,
    surfaceWarningActive,
    surfaceWarningHover,
    textAccent,
    textPrimary,
    textSecondary,
} from '@salutejs/sdds-themes/tokens/sdds_insol_next';

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
                ${buttonGroupTokens.buttonBackgroundColorHover}: ${surfaceSolidDefaultHover};
                ${buttonGroupTokens.buttonBackgroundColorActive}: ${surfaceSolidDefaultActive};
                ${buttonGroupTokens.buttonLoadingBackgroundColor}: var(${buttonGroupTokens.buttonBackgroundColor});
            `,
            accent: css`
                ${buttonGroupTokens.buttonColor}: ${onDarkTextPrimary};
                ${buttonGroupTokens.buttonTextColor}: ${onDarkTextPrimary};
                ${buttonGroupTokens.buttonIconColor}: ${onDarkTextPrimary};
                ${buttonGroupTokens.buttonValueColor}: ${onDarkTextSecondary};

                ${buttonGroupTokens.buttonBackgroundColor}: ${surfaceAccent};
                ${buttonGroupTokens.buttonBackgroundColorHover}: ${surfaceAccentHover};
                ${buttonGroupTokens.buttonBackgroundColorActive}: ${surfaceAccentActive};

                ${buttonGroupTokens.buttonLoadingBackgroundColor}: var(${buttonGroupTokens.buttonBackgroundColor});
            `,
            secondary: css`
                ${buttonGroupTokens.buttonColor}: ${textPrimary};
                ${buttonGroupTokens.buttonTextColor}: ${textPrimary};
                ${buttonGroupTokens.buttonIconColor}: ${textPrimary};
                ${buttonGroupTokens.buttonValueColor}: ${textSecondary};

                ${buttonGroupTokens.buttonBackgroundColor}: ${surfaceTransparentSecondary};
                ${buttonGroupTokens.buttonBackgroundColorHover}: ${surfaceTransparentSecondaryHover};
                ${buttonGroupTokens.buttonBackgroundColorActive}: ${surfaceTransparentSecondaryActive};

                ${buttonGroupTokens.buttonLoadingBackgroundColor}: var(${buttonGroupTokens.buttonBackgroundColor});
            `,
            clear: css`
                ${buttonGroupTokens.buttonColor}: ${textPrimary};
                ${buttonGroupTokens.buttonTextColor}: ${textPrimary};
                ${buttonGroupTokens.buttonIconColor}: ${textPrimary};
                ${buttonGroupTokens.buttonValueColor}: ${textSecondary};

                ${buttonGroupTokens.buttonBackgroundColor}: ${surfaceClear};
                ${buttonGroupTokens.buttonBackgroundColorHover}: ${surfaceClear};
                ${buttonGroupTokens.buttonBackgroundColorActive}: ${surfaceClear};

                ${buttonGroupTokens.buttonLoadingBackgroundColor}: var(${buttonGroupTokens.buttonBackgroundColor});
            `,
            success: css`
                ${buttonGroupTokens.buttonColor}: ${onDarkTextPrimary};
                ${buttonGroupTokens.buttonTextColor}: ${onDarkTextPrimary};
                ${buttonGroupTokens.buttonIconColor}: ${onDarkTextPrimary};
                ${buttonGroupTokens.buttonValueColor}: ${onDarkTextSecondary};

                ${buttonGroupTokens.buttonBackgroundColor}: ${surfacePositive};
                ${buttonGroupTokens.buttonBackgroundColorHover}: ${surfacePositiveHover};
                ${buttonGroupTokens.buttonBackgroundColorActive}: ${surfacePositiveActive};

                ${buttonGroupTokens.buttonLoadingBackgroundColor}: var(${buttonGroupTokens.buttonBackgroundColor});
            `,
            warning: css`
                ${buttonGroupTokens.buttonColor}: ${onDarkTextPrimary};
                ${buttonGroupTokens.buttonTextColor}: ${onDarkTextPrimary};
                ${buttonGroupTokens.buttonIconColor}: ${onDarkTextPrimary};
                ${buttonGroupTokens.buttonValueColor}: ${onDarkTextSecondary};

                ${buttonGroupTokens.buttonBackgroundColor}: ${surfaceWarning};
                ${buttonGroupTokens.buttonBackgroundColorHover}: ${surfaceWarningHover};
                ${buttonGroupTokens.buttonBackgroundColorActive}: ${surfaceWarningActive};

                ${buttonGroupTokens.buttonLoadingBackgroundColor}: var(${buttonGroupTokens.buttonBackgroundColor});
            `,
            critical: css`
                ${buttonGroupTokens.buttonColor}: ${onDarkTextPrimary};
                ${buttonGroupTokens.buttonTextColor}: ${onDarkTextPrimary};
                ${buttonGroupTokens.buttonIconColor}: ${onDarkTextPrimary};
                ${buttonGroupTokens.buttonValueColor}: ${onDarkTextSecondary};


                ${buttonGroupTokens.buttonBackgroundColor}: ${surfaceNegative};
                ${buttonGroupTokens.buttonBackgroundColorHover}: ${surfaceNegativeHover};
                ${buttonGroupTokens.buttonBackgroundColorActive}: ${surfaceNegativeActive};

                ${buttonGroupTokens.buttonLoadingBackgroundColor}: var(${buttonGroupTokens.buttonBackgroundColor});
            `,
            dark: css`
                ${buttonGroupTokens.buttonColor}: ${onDarkTextPrimary};
                ${buttonGroupTokens.buttonTextColor}: ${onDarkTextPrimary};
                ${buttonGroupTokens.buttonIconColor}: ${onDarkTextPrimary};
                ${buttonGroupTokens.buttonValueColor}: ${onDarkTextSecondary};

                ${buttonGroupTokens.buttonBackgroundColor}: ${onLightSurfaceTransparentDeep};
                ${buttonGroupTokens.buttonBackgroundColorHover}: ${onLightSurfaceTransparentDeepHover};
                ${buttonGroupTokens.buttonBackgroundColorActive}: ${onLightSurfaceTransparentDeepActive};

                ${buttonGroupTokens.buttonLoadingBackgroundColor}: var(${buttonGroupTokens.buttonBackgroundColor});
            `,
            black: css`
                ${buttonGroupTokens.buttonColor}: ${onDarkTextPrimary};
                ${buttonGroupTokens.buttonTextColor}: ${onDarkTextPrimary};
                ${buttonGroupTokens.buttonIconColor}: ${onDarkTextPrimary};
                ${buttonGroupTokens.buttonValueColor}: ${onDarkTextSecondary};

                ${buttonGroupTokens.buttonBackgroundColor}: ${onLightSurfaceSolidDefault};
                ${buttonGroupTokens.buttonBackgroundColorHover}: ${onLightSurfaceSolidDefaultHover};
                ${buttonGroupTokens.buttonBackgroundColorActive}: ${onLightSurfaceSolidDefaultActive};

                ${buttonGroupTokens.buttonLoadingBackgroundColor}: var(${buttonGroupTokens.buttonBackgroundColor});
            `,
            white: css`
                ${buttonGroupTokens.buttonColor}: ${onLightTextPrimary};
                ${buttonGroupTokens.buttonTextColor}: ${onLightTextPrimary};
                ${buttonGroupTokens.buttonIconColor}: ${onLightTextPrimary};
                ${buttonGroupTokens.buttonValueColor}: ${onLightTextSecondary};

                ${buttonGroupTokens.buttonBackgroundColor}: ${onDarkSurfaceSolidDefault};
                ${buttonGroupTokens.buttonBackgroundColorHover}: ${onDarkSurfaceSolidDefaultHover};
                ${buttonGroupTokens.buttonBackgroundColorActive}: ${onDarkSurfaceSolidDefaultActive};

                ${buttonGroupTokens.buttonLoadingBackgroundColor}: var(${buttonGroupTokens.buttonBackgroundColor});
            `,
            green: css`
                ${buttonGroupTokens.buttonColor}: ${textAccent};
                ${buttonGroupTokens.buttonTextColor}: ${textAccent};
                ${buttonGroupTokens.buttonIconColor}: ${textAccent};
                ${buttonGroupTokens.buttonValueColor}: ${textSecondary};

                ${buttonGroupTokens.buttonBackgroundColor}: ${surfaceSolidCard};
                ${buttonGroupTokens.buttonBackgroundColorHover}: ${surfaceSolidCardHover};
                ${buttonGroupTokens.buttonBackgroundColorActive}: ${surfaceSolidCardActive};

                ${buttonGroupTokens.buttonLoadingBackgroundColor}: var(${buttonGroupTokens.buttonBackgroundColor});
            `,
        },
        size: {
            xl: css`
                ${buttonGroupTokens.buttonDefaultRadius}: 1rem;
                ${buttonGroupTokens.buttonSegmentedRadius}: 0.5rem;
                ${buttonGroupTokens.buttonSideRadius}: 1rem;

                ${buttonGroupTokens.buttonHeight}: 4rem;
                ${buttonGroupTokens.buttonPadding}: 1.75rem;
                ${buttonGroupTokens.buttonFontFamily}: ${bodyLBold.fontFamily};
                ${buttonGroupTokens.buttonFontSize}: ${bodyLBold.fontSize};
                ${buttonGroupTokens.buttonFontStyle}: ${bodyLBold.fontStyle};
                ${buttonGroupTokens.buttonFontWeight}: ${bodyLBold.fontWeight};
                ${buttonGroupTokens.buttonLetterSpacing}: ${bodyLBold.letterSpacing};
                ${buttonGroupTokens.buttonLineHeight}: ${bodyLBold.lineHeight};
            `,
            l: css`
                ${buttonGroupTokens.buttonDefaultRadius}: 0.875rem;
                ${buttonGroupTokens.buttonSegmentedRadius}: 0.375rem;
                ${buttonGroupTokens.buttonSideRadius}: 0.875rem;

                ${buttonGroupTokens.buttonHeight}: 3.5rem;
                ${buttonGroupTokens.buttonPadding}: 1.5rem;
                ${buttonGroupTokens.buttonFontFamily}: ${bodyLBold.fontFamily};
                ${buttonGroupTokens.buttonFontSize}: ${bodyLBold.fontSize};
                ${buttonGroupTokens.buttonFontStyle}: ${bodyLBold.fontStyle};
                ${buttonGroupTokens.buttonFontWeight}: ${bodyLBold.fontWeight};
                ${buttonGroupTokens.buttonLetterSpacing}: ${bodyLBold.letterSpacing};
                ${buttonGroupTokens.buttonLineHeight}: ${bodyLBold.lineHeight};
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
