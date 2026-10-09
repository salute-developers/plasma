import { css, groupIconButtonTokens } from '@salutejs/plasma-new-hope/styled-components';
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
    onDarkTextPrimary,
    onDarkTextSecondary,
    onLightSurfaceTransparentDeep,
    onLightSurfaceTransparentDeepActive,
    onLightSurfaceTransparentDeepHover,
    onLightTextPrimary,
    onLightTextSecondary,
    outlineSolidDefault,
    outlineSolidDefaultActive,
    outlineSolidDefaultHover,
    surfaceAccentGradient,
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
    surfaceWarning,
    surfaceWarningActive,
    surfaceWarningHover,
    textAccent,
    textPrimary,
    textSecondary,
} from '@salutejs/sdds-themes/tokens/sdds_platform_ai';

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
                ${groupIconButtonTokens.buttonColor}: ${textPrimary};
                ${groupIconButtonTokens.buttonTextColor}: ${textPrimary};
                ${groupIconButtonTokens.buttonIconColor}: ${textPrimary};

                ${groupIconButtonTokens.buttonValueColor}: ${onDarkTextSecondary};

                ${groupIconButtonTokens.buttonBackgroundColor}: ${surfaceAccentGradient};

                ${groupIconButtonTokens.buttonLoadingBackgroundColor}: var(${groupIconButtonTokens.buttonBackgroundColor});
            `,
            secondary: css`
                ${groupIconButtonTokens.buttonColor}: ${textPrimary};
                ${groupIconButtonTokens.buttonTextColor}: ${textPrimary};
                ${groupIconButtonTokens.buttonIconColor}: ${textPrimary};

                ${groupIconButtonTokens.buttonValueColor}: ${textSecondary};

                ${groupIconButtonTokens.buttonBackgroundColor}: transparent;
                ${groupIconButtonTokens.buttonLoadingBackgroundColor}: var(${groupIconButtonTokens.buttonBackgroundColor});

                ${groupIconButtonTokens.buttonBorderColor}: ${outlineSolidDefault};
                ${groupIconButtonTokens.buttonBorderColorHover}: ${outlineSolidDefaultHover};
                ${groupIconButtonTokens.buttonBorderColorActive}: ${outlineSolidDefaultActive};
            `,
            clear: css`
                ${groupIconButtonTokens.buttonColor}: ${textPrimary};
                ${groupIconButtonTokens.buttonTextColor}: ${textPrimary};
                ${groupIconButtonTokens.buttonIconColor}: ${textPrimary};
                ${groupIconButtonTokens.buttonValueColor}: ${textSecondary};

                ${groupIconButtonTokens.buttonBackgroundColor}: ${surfaceClear};
                ${groupIconButtonTokens.buttonBackgroundColorHover}: ${onDarkSurfaceSolidDefault};
                ${groupIconButtonTokens.buttonBackgroundColorActive}: ${onDarkSurfaceSolidDefault};
                ${groupIconButtonTokens.buttonLoadingBackgroundColor}: var(${groupIconButtonTokens.buttonBackgroundColor});
            `,
            positive: css`
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
            negative: css`
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
                ${groupIconButtonTokens.buttonColor}: ${textAccent};
                ${groupIconButtonTokens.buttonTextColor}: ${textAccent};
                ${groupIconButtonTokens.buttonIconColor}: ${textAccent};

                ${groupIconButtonTokens.buttonValueColor}: ${onDarkTextSecondary};

                ${groupIconButtonTokens.buttonBackgroundColor}: ${surfaceSolidDefault};
                ${groupIconButtonTokens.buttonBackgroundColorHover}: ${surfaceSolidDefaultHover};
                ${groupIconButtonTokens.buttonBackgroundColorActive}: ${surfaceSolidDefaultActive};

                ${groupIconButtonTokens.buttonLoadingBackgroundColor}: var(${groupIconButtonTokens.buttonBackgroundColor});
            `,
            white: css`
                ${groupIconButtonTokens.buttonColor}: ${onLightTextPrimary};
                ${groupIconButtonTokens.buttonTextColor}: ${onLightTextPrimary};
                ${groupIconButtonTokens.buttonIconColor}: ${onLightTextPrimary};
                ${groupIconButtonTokens.buttonValueColor}: ${onLightTextSecondary};

                ${groupIconButtonTokens.buttonBackgroundColor}: ${onDarkSurfaceSolidDefault};
                ${groupIconButtonTokens.buttonBackgroundColorHover}: ${surfaceClear};
                ${groupIconButtonTokens.buttonBackgroundColorActive}: ${surfaceClear};

                ${groupIconButtonTokens.buttonLoadingBackgroundColor}: var(${groupIconButtonTokens.buttonBackgroundColor});
            `,
        },
        size: {
            xl: css`
                ${groupIconButtonTokens.buttonDefaultRadius}: 2rem;
                ${groupIconButtonTokens.buttonSegmentedRadius}: 0.5rem;
                ${groupIconButtonTokens.buttonSideRadius}: 2rem;

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
                ${groupIconButtonTokens.buttonSegmentedRadius}: 0.375rem;
                ${groupIconButtonTokens.buttonDefaultRadius}: 1.75rem;
                ${groupIconButtonTokens.buttonSideRadius}: 1.75rem;

                ${groupIconButtonTokens.buttonHeight}: 3.5rem;
                ${groupIconButtonTokens.buttonPadding}: 1.75rem;

                ${groupIconButtonTokens.buttonFontFamily}: ${bodyL.fontFamily};
                ${groupIconButtonTokens.buttonFontSize}: ${bodyL.fontSize};
                ${groupIconButtonTokens.buttonFontStyle}: ${bodyL.fontStyle};
                ${groupIconButtonTokens.buttonFontWeight}: ${bodyLBold.fontWeight};
                ${groupIconButtonTokens.buttonLetterSpacing}: ${bodyL.letterSpacing};
                ${groupIconButtonTokens.buttonLineHeight}: ${bodyL.lineHeight};
            `,
            m: css`
                ${groupIconButtonTokens.buttonSegmentedRadius}: 0.25rem;
                ${groupIconButtonTokens.buttonDefaultRadius}: 1.5rem;
                ${groupIconButtonTokens.buttonSideRadius}: 1.5rem;

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
                ${groupIconButtonTokens.buttonSideRadius}: 1.375rem;
                ${groupIconButtonTokens.buttonDefaultRadius}: 1.375rem;

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
                ${groupIconButtonTokens.buttonSegmentedRadius}: 0.25rem;
                ${groupIconButtonTokens.buttonSideRadius}: 1.375rem;
                ${groupIconButtonTokens.buttonDefaultRadius}: 1.375rem;

                ${groupIconButtonTokens.buttonHeight}: 2.5rem;
                ${groupIconButtonTokens.buttonPadding}: 1rem;
                ${groupIconButtonTokens.buttonFontFamily}: ${bodyXS.fontFamily};
                ${groupIconButtonTokens.buttonFontSize}: ${bodyXS.fontSize};
                ${groupIconButtonTokens.buttonFontStyle}: ${bodyXS.fontStyle};
                ${groupIconButtonTokens.buttonFontWeight}: ${bodyXSBold.fontWeight};
                ${groupIconButtonTokens.buttonLetterSpacing}: ${bodyXS.letterSpacing};
                ${groupIconButtonTokens.buttonLineHeight}: ${bodyXS.lineHeight};
            `,
            xxs: css`
                ${groupIconButtonTokens.buttonSegmentedRadius}: 0.25rem;
                ${groupIconButtonTokens.buttonSideRadius}: 0.75rem;
                ${groupIconButtonTokens.buttonDefaultRadius}: 0.75rem;

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
