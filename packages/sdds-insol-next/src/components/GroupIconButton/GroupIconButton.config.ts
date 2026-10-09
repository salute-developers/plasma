import { css, groupIconButtonTokens } from '@salutejs/plasma-new-hope/styled-components';
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
                ${groupIconButtonTokens.buttonColor}: ${inverseTextPrimary};
                ${groupIconButtonTokens.buttonTextColor}: ${inverseTextPrimary};
                ${groupIconButtonTokens.buttonIconColor}: ${inverseTextPrimary};
                ${groupIconButtonTokens.buttonValueColor}: ${inverseTextSecondary};

                ${groupIconButtonTokens.buttonBackgroundColor}: ${surfaceSolidDefault};
                ${groupIconButtonTokens.buttonBackgroundColorHover}: ${surfaceSolidDefaultHover};
                ${groupIconButtonTokens.buttonBackgroundColorActive}: ${surfaceSolidDefaultActive};
                ${groupIconButtonTokens.buttonLoadingBackgroundColor}: var(${groupIconButtonTokens.buttonBackgroundColor});
            `,
            accent: css`
                ${groupIconButtonTokens.buttonColor}: ${onDarkTextPrimary};
                ${groupIconButtonTokens.buttonTextColor}: ${onDarkTextPrimary};
                ${groupIconButtonTokens.buttonIconColor}: ${onDarkTextPrimary};
                ${groupIconButtonTokens.buttonValueColor}: ${onDarkTextSecondary};

                ${groupIconButtonTokens.buttonBackgroundColor}: ${surfaceAccent};
                ${groupIconButtonTokens.buttonBackgroundColorHover}: ${surfaceAccentHover};
                ${groupIconButtonTokens.buttonBackgroundColorActive}: ${surfaceAccentActive};

                ${groupIconButtonTokens.buttonLoadingBackgroundColor}: var(${groupIconButtonTokens.buttonBackgroundColor});
            `,
            secondary: css`
                ${groupIconButtonTokens.buttonColor}: ${textPrimary};
                ${groupIconButtonTokens.buttonTextColor}: ${textPrimary};
                ${groupIconButtonTokens.buttonIconColor}: ${textPrimary};
                ${groupIconButtonTokens.buttonValueColor}: ${textSecondary};

                ${groupIconButtonTokens.buttonBackgroundColor}: ${surfaceTransparentSecondary};
                ${groupIconButtonTokens.buttonBackgroundColorHover}: ${surfaceTransparentSecondaryHover};
                ${groupIconButtonTokens.buttonBackgroundColorActive}: ${surfaceTransparentSecondaryActive};

                ${groupIconButtonTokens.buttonLoadingBackgroundColor}: var(${groupIconButtonTokens.buttonBackgroundColor});
            `,
            clear: css`
                ${groupIconButtonTokens.buttonColor}: ${textPrimary};
                ${groupIconButtonTokens.buttonTextColor}: ${textPrimary};
                ${groupIconButtonTokens.buttonIconColor}: ${textPrimary};
                ${groupIconButtonTokens.buttonValueColor}: ${textSecondary};

                ${groupIconButtonTokens.buttonBackgroundColor}: ${surfaceClear};
                ${groupIconButtonTokens.buttonBackgroundColorHover}: ${surfaceClear};
                ${groupIconButtonTokens.buttonBackgroundColorActive}: ${surfaceClear};

                ${groupIconButtonTokens.buttonLoadingBackgroundColor}: var(${groupIconButtonTokens.buttonBackgroundColor});
            `,
            success: css`
                ${groupIconButtonTokens.buttonColor}: ${onDarkTextPrimary};
                ${groupIconButtonTokens.buttonTextColor}: ${onDarkTextPrimary};
                ${groupIconButtonTokens.buttonIconColor}: ${onDarkTextPrimary};
                ${groupIconButtonTokens.buttonValueColor}: ${onDarkTextSecondary};

                ${groupIconButtonTokens.buttonBackgroundColor}: ${surfacePositive};
                ${groupIconButtonTokens.buttonBackgroundColorHover}: ${surfacePositiveHover};
                ${groupIconButtonTokens.buttonBackgroundColorActive}: ${surfacePositiveActive};

                ${groupIconButtonTokens.buttonLoadingBackgroundColor}: var(${groupIconButtonTokens.buttonBackgroundColor});
            `,
            warning: css`
                ${groupIconButtonTokens.buttonColor}: ${onDarkTextPrimary};
                ${groupIconButtonTokens.buttonTextColor}: ${onDarkTextPrimary};
                ${groupIconButtonTokens.buttonIconColor}: ${onDarkTextPrimary};
                ${groupIconButtonTokens.buttonValueColor}: ${onDarkTextSecondary};

                ${groupIconButtonTokens.buttonBackgroundColor}: ${surfaceWarning};
                ${groupIconButtonTokens.buttonBackgroundColorHover}: ${surfaceWarningHover};
                ${groupIconButtonTokens.buttonBackgroundColorActive}: ${surfaceWarningActive};

                ${groupIconButtonTokens.buttonLoadingBackgroundColor}: var(${groupIconButtonTokens.buttonBackgroundColor});
            `,
            critical: css`
                ${groupIconButtonTokens.buttonColor}: ${onDarkTextPrimary};
                ${groupIconButtonTokens.buttonTextColor}: ${onDarkTextPrimary};
                ${groupIconButtonTokens.buttonIconColor}: ${onDarkTextPrimary};
                ${groupIconButtonTokens.buttonValueColor}: ${onDarkTextSecondary};


                ${groupIconButtonTokens.buttonBackgroundColor}: ${surfaceNegative};
                ${groupIconButtonTokens.buttonBackgroundColorHover}: ${surfaceNegativeHover};
                ${groupIconButtonTokens.buttonBackgroundColorActive}: ${surfaceNegativeActive};

                ${groupIconButtonTokens.buttonLoadingBackgroundColor}: var(${groupIconButtonTokens.buttonBackgroundColor});
            `,
            dark: css`
                ${groupIconButtonTokens.buttonColor}: ${onDarkTextPrimary};
                ${groupIconButtonTokens.buttonTextColor}: ${onDarkTextPrimary};
                ${groupIconButtonTokens.buttonIconColor}: ${onDarkTextPrimary};
                ${groupIconButtonTokens.buttonValueColor}: ${onDarkTextSecondary};

                ${groupIconButtonTokens.buttonBackgroundColor}: ${onLightSurfaceTransparentDeep};
                ${groupIconButtonTokens.buttonBackgroundColorHover}: ${onLightSurfaceTransparentDeepHover};
                ${groupIconButtonTokens.buttonBackgroundColorActive}: ${onLightSurfaceTransparentDeepActive};

                ${groupIconButtonTokens.buttonLoadingBackgroundColor}: var(${groupIconButtonTokens.buttonBackgroundColor});
            `,
            black: css`
                ${groupIconButtonTokens.buttonColor}: ${onDarkTextPrimary};
                ${groupIconButtonTokens.buttonTextColor}: ${onDarkTextPrimary};
                ${groupIconButtonTokens.buttonIconColor}: ${onDarkTextPrimary};
                ${groupIconButtonTokens.buttonValueColor}: ${onDarkTextSecondary};

                ${groupIconButtonTokens.buttonBackgroundColor}: ${onLightSurfaceSolidDefault};
                ${groupIconButtonTokens.buttonBackgroundColorHover}: ${onLightSurfaceSolidDefaultHover};
                ${groupIconButtonTokens.buttonBackgroundColorActive}: ${onLightSurfaceSolidDefaultActive};

                ${groupIconButtonTokens.buttonLoadingBackgroundColor}: var(${groupIconButtonTokens.buttonBackgroundColor});
            `,
            white: css`
                ${groupIconButtonTokens.buttonColor}: ${onLightTextPrimary};
                ${groupIconButtonTokens.buttonTextColor}: ${onLightTextPrimary};
                ${groupIconButtonTokens.buttonIconColor}: ${onLightTextPrimary};
                ${groupIconButtonTokens.buttonValueColor}: ${onLightTextSecondary};

                ${groupIconButtonTokens.buttonBackgroundColor}: ${onDarkSurfaceSolidDefault};
                ${groupIconButtonTokens.buttonBackgroundColorHover}: ${onDarkSurfaceSolidDefaultHover};
                ${groupIconButtonTokens.buttonBackgroundColorActive}: ${onDarkSurfaceSolidDefaultActive};

                ${groupIconButtonTokens.buttonLoadingBackgroundColor}: var(${groupIconButtonTokens.buttonBackgroundColor});
            `,
            green: css`
                ${groupIconButtonTokens.buttonColor}: ${textAccent};
                ${groupIconButtonTokens.buttonTextColor}: ${textAccent};
                ${groupIconButtonTokens.buttonIconColor}: ${textAccent};
                ${groupIconButtonTokens.buttonValueColor}: ${textSecondary};

                ${groupIconButtonTokens.buttonBackgroundColor}: ${surfaceSolidCard};
                ${groupIconButtonTokens.buttonBackgroundColorHover}: ${surfaceSolidCardHover};
                ${groupIconButtonTokens.buttonBackgroundColorActive}: ${surfaceSolidCardActive};

                ${groupIconButtonTokens.buttonLoadingBackgroundColor}: var(${groupIconButtonTokens.buttonBackgroundColor});
            `,
        },
        size: {
            xl: css`
                ${groupIconButtonTokens.buttonDefaultRadius}: 1rem;
                ${groupIconButtonTokens.buttonSegmentedRadius}: 0.5rem;
                ${groupIconButtonTokens.buttonSideRadius}: 1rem;

                ${groupIconButtonTokens.buttonHeight}: 4rem;
                ${groupIconButtonTokens.buttonPadding}: 1.75rem;
                ${groupIconButtonTokens.buttonFontFamily}: ${bodyLBold.fontFamily};
                ${groupIconButtonTokens.buttonFontSize}: ${bodyLBold.fontSize};
                ${groupIconButtonTokens.buttonFontStyle}: ${bodyLBold.fontStyle};
                ${groupIconButtonTokens.buttonFontWeight}: ${bodyLBold.fontWeight};
                ${groupIconButtonTokens.buttonLetterSpacing}: ${bodyLBold.letterSpacing};
                ${groupIconButtonTokens.buttonLineHeight}: ${bodyLBold.lineHeight};
            `,
            l: css`
                ${groupIconButtonTokens.buttonDefaultRadius}: 0.875rem;
                ${groupIconButtonTokens.buttonSegmentedRadius}: 0.375rem;
                ${groupIconButtonTokens.buttonSideRadius}: 0.875rem;

                ${groupIconButtonTokens.buttonHeight}: 3.5rem;
                ${groupIconButtonTokens.buttonPadding}: 1.5rem;
                ${groupIconButtonTokens.buttonFontFamily}: ${bodyLBold.fontFamily};
                ${groupIconButtonTokens.buttonFontSize}: ${bodyLBold.fontSize};
                ${groupIconButtonTokens.buttonFontStyle}: ${bodyLBold.fontStyle};
                ${groupIconButtonTokens.buttonFontWeight}: ${bodyLBold.fontWeight};
                ${groupIconButtonTokens.buttonLetterSpacing}: ${bodyLBold.letterSpacing};
                ${groupIconButtonTokens.buttonLineHeight}: ${bodyLBold.lineHeight};
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
                ${groupIconButtonTokens.buttonFontFamily}: ${bodyXS.fontFamily};
                ${groupIconButtonTokens.buttonFontSize}: ${bodyXS.fontSize};
                ${groupIconButtonTokens.buttonFontStyle}: ${bodyXS.fontStyle};
                ${groupIconButtonTokens.buttonFontWeight}: ${bodyXSBold.fontWeight};
                ${groupIconButtonTokens.buttonLetterSpacing}: ${bodyXS.letterSpacing};
                ${groupIconButtonTokens.buttonLineHeight}: ${bodyXS.lineHeight};
            `,
            xxs: css`
                ${groupIconButtonTokens.buttonSegmentedRadius}: 0.125rem;
                ${groupIconButtonTokens.buttonDefaultRadius}: 0.375rem;
                ${groupIconButtonTokens.buttonSideRadius}: 0.375rem;

                ${groupIconButtonTokens.buttonHeight}: 1.5rem;
                ${groupIconButtonTokens.buttonPadding}: 0.625rem;
                ${groupIconButtonTokens.buttonFontFamily}: ${bodyXS.fontFamily};
                ${groupIconButtonTokens.buttonFontSize}: ${bodyXS.fontSize};
                ${groupIconButtonTokens.buttonFontStyle}: ${bodyXS.fontStyle};
                ${groupIconButtonTokens.buttonFontWeight}: ${bodyXSBold.fontWeight};
                ${groupIconButtonTokens.buttonLetterSpacing}: ${bodyXS.letterSpacing};
                ${groupIconButtonTokens.buttonLineHeight}: ${bodyXS.lineHeight};
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
