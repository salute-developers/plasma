import { css, iconButtonGroupTokens } from '@salutejs/plasma-new-hope/styled-components';
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
                ${iconButtonGroupTokens.buttonColor}: ${inverseTextPrimary};
                ${iconButtonGroupTokens.buttonTextColor}: ${inverseTextPrimary};
                ${iconButtonGroupTokens.buttonIconColor}: ${inverseTextPrimary};
                ${iconButtonGroupTokens.buttonValueColor}: ${inverseTextSecondary};

                ${iconButtonGroupTokens.buttonBackgroundColor}: ${surfaceSolidDefault};
                ${iconButtonGroupTokens.buttonBackgroundColorHover}: ${surfaceSolidDefaultHover};
                ${iconButtonGroupTokens.buttonBackgroundColorActive}: ${surfaceSolidDefaultActive};
                ${iconButtonGroupTokens.buttonLoadingBackgroundColor}: var(${iconButtonGroupTokens.buttonBackgroundColor});
            `,
            accent: css`
                ${iconButtonGroupTokens.buttonColor}: ${onDarkTextPrimary};
                ${iconButtonGroupTokens.buttonTextColor}: ${onDarkTextPrimary};
                ${iconButtonGroupTokens.buttonIconColor}: ${onDarkTextPrimary};
                ${iconButtonGroupTokens.buttonValueColor}: ${onDarkTextSecondary};

                ${iconButtonGroupTokens.buttonBackgroundColor}: ${surfaceAccent};
                ${iconButtonGroupTokens.buttonBackgroundColorHover}: ${surfaceAccentHover};
                ${iconButtonGroupTokens.buttonBackgroundColorActive}: ${surfaceAccentActive};

                ${iconButtonGroupTokens.buttonLoadingBackgroundColor}: var(${iconButtonGroupTokens.buttonBackgroundColor});
            `,
            secondary: css`
                ${iconButtonGroupTokens.buttonColor}: ${textPrimary};
                ${iconButtonGroupTokens.buttonTextColor}: ${textPrimary};
                ${iconButtonGroupTokens.buttonIconColor}: ${textPrimary};
                ${iconButtonGroupTokens.buttonValueColor}: ${textSecondary};

                ${iconButtonGroupTokens.buttonBackgroundColor}: ${surfaceTransparentSecondary};
                ${iconButtonGroupTokens.buttonBackgroundColorHover}: ${surfaceTransparentSecondaryHover};
                ${iconButtonGroupTokens.buttonBackgroundColorActive}: ${surfaceTransparentSecondaryActive};

                ${iconButtonGroupTokens.buttonLoadingBackgroundColor}: var(${iconButtonGroupTokens.buttonBackgroundColor});
            `,
            clear: css`
                ${iconButtonGroupTokens.buttonColor}: ${textPrimary};
                ${iconButtonGroupTokens.buttonTextColor}: ${textPrimary};
                ${iconButtonGroupTokens.buttonIconColor}: ${textPrimary};
                ${iconButtonGroupTokens.buttonValueColor}: ${textSecondary};

                ${iconButtonGroupTokens.buttonBackgroundColor}: ${surfaceClear};
                ${iconButtonGroupTokens.buttonBackgroundColorHover}: ${surfaceClear};
                ${iconButtonGroupTokens.buttonBackgroundColorActive}: ${surfaceClear};

                ${iconButtonGroupTokens.buttonLoadingBackgroundColor}: var(${iconButtonGroupTokens.buttonBackgroundColor});
            `,
            success: css`
                ${iconButtonGroupTokens.buttonColor}: ${onDarkTextPrimary};
                ${iconButtonGroupTokens.buttonTextColor}: ${onDarkTextPrimary};
                ${iconButtonGroupTokens.buttonIconColor}: ${onDarkTextPrimary};
                ${iconButtonGroupTokens.buttonValueColor}: ${onDarkTextSecondary};

                ${iconButtonGroupTokens.buttonBackgroundColor}: ${surfacePositive};
                ${iconButtonGroupTokens.buttonBackgroundColorHover}: ${surfacePositiveHover};
                ${iconButtonGroupTokens.buttonBackgroundColorActive}: ${surfacePositiveActive};

                ${iconButtonGroupTokens.buttonLoadingBackgroundColor}: var(${iconButtonGroupTokens.buttonBackgroundColor});
            `,
            warning: css`
                ${iconButtonGroupTokens.buttonColor}: ${onDarkTextPrimary};
                ${iconButtonGroupTokens.buttonTextColor}: ${onDarkTextPrimary};
                ${iconButtonGroupTokens.buttonIconColor}: ${onDarkTextPrimary};
                ${iconButtonGroupTokens.buttonValueColor}: ${onDarkTextSecondary};

                ${iconButtonGroupTokens.buttonBackgroundColor}: ${surfaceWarning};
                ${iconButtonGroupTokens.buttonBackgroundColorHover}: ${surfaceWarningHover};
                ${iconButtonGroupTokens.buttonBackgroundColorActive}: ${surfaceWarningActive};

                ${iconButtonGroupTokens.buttonLoadingBackgroundColor}: var(${iconButtonGroupTokens.buttonBackgroundColor});
            `,
            critical: css`
                ${iconButtonGroupTokens.buttonColor}: ${onDarkTextPrimary};
                ${iconButtonGroupTokens.buttonTextColor}: ${onDarkTextPrimary};
                ${iconButtonGroupTokens.buttonIconColor}: ${onDarkTextPrimary};
                ${iconButtonGroupTokens.buttonValueColor}: ${onDarkTextSecondary};


                ${iconButtonGroupTokens.buttonBackgroundColor}: ${surfaceNegative};
                ${iconButtonGroupTokens.buttonBackgroundColorHover}: ${surfaceNegativeHover};
                ${iconButtonGroupTokens.buttonBackgroundColorActive}: ${surfaceNegativeActive};

                ${iconButtonGroupTokens.buttonLoadingBackgroundColor}: var(${iconButtonGroupTokens.buttonBackgroundColor});
            `,
            dark: css`
                ${iconButtonGroupTokens.buttonColor}: ${onDarkTextPrimary};
                ${iconButtonGroupTokens.buttonTextColor}: ${onDarkTextPrimary};
                ${iconButtonGroupTokens.buttonIconColor}: ${onDarkTextPrimary};
                ${iconButtonGroupTokens.buttonValueColor}: ${onDarkTextSecondary};

                ${iconButtonGroupTokens.buttonBackgroundColor}: ${onLightSurfaceTransparentDeep};
                ${iconButtonGroupTokens.buttonBackgroundColorHover}: ${onLightSurfaceTransparentDeepHover};
                ${iconButtonGroupTokens.buttonBackgroundColorActive}: ${onLightSurfaceTransparentDeepActive};

                ${iconButtonGroupTokens.buttonLoadingBackgroundColor}: var(${iconButtonGroupTokens.buttonBackgroundColor});
            `,
            black: css`
                ${iconButtonGroupTokens.buttonColor}: ${onDarkTextPrimary};
                ${iconButtonGroupTokens.buttonTextColor}: ${onDarkTextPrimary};
                ${iconButtonGroupTokens.buttonIconColor}: ${onDarkTextPrimary};
                ${iconButtonGroupTokens.buttonValueColor}: ${onDarkTextSecondary};

                ${iconButtonGroupTokens.buttonBackgroundColor}: ${onLightSurfaceSolidDefault};
                ${iconButtonGroupTokens.buttonBackgroundColorHover}: ${onLightSurfaceSolidDefaultHover};
                ${iconButtonGroupTokens.buttonBackgroundColorActive}: ${onLightSurfaceSolidDefaultActive};

                ${iconButtonGroupTokens.buttonLoadingBackgroundColor}: var(${iconButtonGroupTokens.buttonBackgroundColor});
            `,
            white: css`
                ${iconButtonGroupTokens.buttonColor}: ${onLightTextPrimary};
                ${iconButtonGroupTokens.buttonTextColor}: ${onLightTextPrimary};
                ${iconButtonGroupTokens.buttonIconColor}: ${onLightTextPrimary};
                ${iconButtonGroupTokens.buttonValueColor}: ${onLightTextSecondary};

                ${iconButtonGroupTokens.buttonBackgroundColor}: ${onDarkSurfaceSolidDefault};
                ${iconButtonGroupTokens.buttonBackgroundColorHover}: ${onDarkSurfaceSolidDefaultHover};
                ${iconButtonGroupTokens.buttonBackgroundColorActive}: ${onDarkSurfaceSolidDefaultActive};

                ${iconButtonGroupTokens.buttonLoadingBackgroundColor}: var(${iconButtonGroupTokens.buttonBackgroundColor});
            `,
            green: css`
                ${iconButtonGroupTokens.buttonColor}: ${textAccent};
                ${iconButtonGroupTokens.buttonTextColor}: ${textAccent};
                ${iconButtonGroupTokens.buttonIconColor}: ${textAccent};
                ${iconButtonGroupTokens.buttonValueColor}: ${textSecondary};

                ${iconButtonGroupTokens.buttonBackgroundColor}: ${surfaceSolidCard};
                ${iconButtonGroupTokens.buttonBackgroundColorHover}: ${surfaceSolidCardHover};
                ${iconButtonGroupTokens.buttonBackgroundColorActive}: ${surfaceSolidCardActive};

                ${iconButtonGroupTokens.buttonLoadingBackgroundColor}: var(${iconButtonGroupTokens.buttonBackgroundColor});
            `,
        },
        size: {
            xl: css`
                ${iconButtonGroupTokens.buttonDefaultRadius}: 1rem;
                ${iconButtonGroupTokens.buttonSegmentedRadius}: 0.5rem;
                ${iconButtonGroupTokens.buttonSideRadius}: 1rem;

                ${iconButtonGroupTokens.buttonHeight}: 4rem;
                ${iconButtonGroupTokens.buttonPadding}: 1.75rem;
                ${iconButtonGroupTokens.buttonFontFamily}: ${bodyLBold.fontFamily};
                ${iconButtonGroupTokens.buttonFontSize}: ${bodyLBold.fontSize};
                ${iconButtonGroupTokens.buttonFontStyle}: ${bodyLBold.fontStyle};
                ${iconButtonGroupTokens.buttonFontWeight}: ${bodyLBold.fontWeight};
                ${iconButtonGroupTokens.buttonLetterSpacing}: ${bodyLBold.letterSpacing};
                ${iconButtonGroupTokens.buttonLineHeight}: ${bodyLBold.lineHeight};
            `,
            l: css`
                ${iconButtonGroupTokens.buttonDefaultRadius}: 0.875rem;
                ${iconButtonGroupTokens.buttonSegmentedRadius}: 0.375rem;
                ${iconButtonGroupTokens.buttonSideRadius}: 0.875rem;

                ${iconButtonGroupTokens.buttonHeight}: 3.5rem;
                ${iconButtonGroupTokens.buttonPadding}: 1.5rem;
                ${iconButtonGroupTokens.buttonFontFamily}: ${bodyLBold.fontFamily};
                ${iconButtonGroupTokens.buttonFontSize}: ${bodyLBold.fontSize};
                ${iconButtonGroupTokens.buttonFontStyle}: ${bodyLBold.fontStyle};
                ${iconButtonGroupTokens.buttonFontWeight}: ${bodyLBold.fontWeight};
                ${iconButtonGroupTokens.buttonLetterSpacing}: ${bodyLBold.letterSpacing};
                ${iconButtonGroupTokens.buttonLineHeight}: ${bodyLBold.lineHeight};
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
