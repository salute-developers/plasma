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
                ${iconButtonGroupTokens.buttonColor}: ${textPrimary};
                ${iconButtonGroupTokens.buttonTextColor}: ${textPrimary};
                ${iconButtonGroupTokens.buttonIconColor}: ${textPrimary};

                ${iconButtonGroupTokens.buttonValueColor}: ${onDarkTextSecondary};

                ${iconButtonGroupTokens.buttonBackgroundColor}: ${surfaceAccentGradient};

                ${iconButtonGroupTokens.buttonLoadingBackgroundColor}: var(${iconButtonGroupTokens.buttonBackgroundColor});
            `,
            secondary: css`
                ${iconButtonGroupTokens.buttonColor}: ${textPrimary};
                ${iconButtonGroupTokens.buttonTextColor}: ${textPrimary};
                ${iconButtonGroupTokens.buttonIconColor}: ${textPrimary};

                ${iconButtonGroupTokens.buttonValueColor}: ${textSecondary};

                ${iconButtonGroupTokens.buttonBackgroundColor}: transparent;
                ${iconButtonGroupTokens.buttonLoadingBackgroundColor}: var(${iconButtonGroupTokens.buttonBackgroundColor});

                ${iconButtonGroupTokens.buttonBorderColor}: ${outlineSolidDefault};
                ${iconButtonGroupTokens.buttonBorderColorHover}: ${outlineSolidDefaultHover};
                ${iconButtonGroupTokens.buttonBorderColorActive}: ${outlineSolidDefaultActive};
            `,
            clear: css`
                ${iconButtonGroupTokens.buttonColor}: ${textPrimary};
                ${iconButtonGroupTokens.buttonTextColor}: ${textPrimary};
                ${iconButtonGroupTokens.buttonIconColor}: ${textPrimary};
                ${iconButtonGroupTokens.buttonValueColor}: ${textSecondary};

                ${iconButtonGroupTokens.buttonBackgroundColor}: ${surfaceClear};
                ${iconButtonGroupTokens.buttonBackgroundColorHover}: ${onDarkSurfaceSolidDefault};
                ${iconButtonGroupTokens.buttonBackgroundColorActive}: ${onDarkSurfaceSolidDefault};
                ${iconButtonGroupTokens.buttonLoadingBackgroundColor}: var(${iconButtonGroupTokens.buttonBackgroundColor});
            `,
            positive: css`
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
            negative: css`
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
                ${iconButtonGroupTokens.buttonColor}: ${textAccent};
                ${iconButtonGroupTokens.buttonTextColor}: ${textAccent};
                ${iconButtonGroupTokens.buttonIconColor}: ${textAccent};

                ${iconButtonGroupTokens.buttonValueColor}: ${onDarkTextSecondary};

                ${iconButtonGroupTokens.buttonBackgroundColor}: ${surfaceSolidDefault};
                ${iconButtonGroupTokens.buttonBackgroundColorHover}: ${surfaceSolidDefaultHover};
                ${iconButtonGroupTokens.buttonBackgroundColorActive}: ${surfaceSolidDefaultActive};

                ${iconButtonGroupTokens.buttonLoadingBackgroundColor}: var(${iconButtonGroupTokens.buttonBackgroundColor});
            `,
            white: css`
                ${iconButtonGroupTokens.buttonColor}: ${onLightTextPrimary};
                ${iconButtonGroupTokens.buttonTextColor}: ${onLightTextPrimary};
                ${iconButtonGroupTokens.buttonIconColor}: ${onLightTextPrimary};
                ${iconButtonGroupTokens.buttonValueColor}: ${onLightTextSecondary};

                ${iconButtonGroupTokens.buttonBackgroundColor}: ${onDarkSurfaceSolidDefault};
                ${iconButtonGroupTokens.buttonBackgroundColorHover}: ${surfaceClear};
                ${iconButtonGroupTokens.buttonBackgroundColorActive}: ${surfaceClear};

                ${iconButtonGroupTokens.buttonLoadingBackgroundColor}: var(${iconButtonGroupTokens.buttonBackgroundColor});
            `,
        },
        size: {
            xl: css`
                ${iconButtonGroupTokens.buttonDefaultRadius}: 2rem;
                ${iconButtonGroupTokens.buttonSegmentedRadius}: 0.5rem;
                ${iconButtonGroupTokens.buttonSideRadius}: 2rem;

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
                ${iconButtonGroupTokens.buttonSegmentedRadius}: 0.375rem;
                ${iconButtonGroupTokens.buttonDefaultRadius}: 1.75rem;
                ${iconButtonGroupTokens.buttonSideRadius}: 1.75rem;

                ${iconButtonGroupTokens.buttonHeight}: 3.5rem;
                ${iconButtonGroupTokens.buttonPadding}: 1.75rem;

                ${iconButtonGroupTokens.buttonFontFamily}: ${bodyL.fontFamily};
                ${iconButtonGroupTokens.buttonFontSize}: ${bodyL.fontSize};
                ${iconButtonGroupTokens.buttonFontStyle}: ${bodyL.fontStyle};
                ${iconButtonGroupTokens.buttonFontWeight}: ${bodyLBold.fontWeight};
                ${iconButtonGroupTokens.buttonLetterSpacing}: ${bodyL.letterSpacing};
                ${iconButtonGroupTokens.buttonLineHeight}: ${bodyL.lineHeight};
            `,
            m: css`
                ${iconButtonGroupTokens.buttonSegmentedRadius}: 0.25rem;
                ${iconButtonGroupTokens.buttonDefaultRadius}: 1.5rem;
                ${iconButtonGroupTokens.buttonSideRadius}: 1.5rem;

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
                ${iconButtonGroupTokens.buttonSideRadius}: 1.375rem;
                ${iconButtonGroupTokens.buttonDefaultRadius}: 1.375rem;

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
                ${iconButtonGroupTokens.buttonSegmentedRadius}: 0.25rem;
                ${iconButtonGroupTokens.buttonSideRadius}: 1.375rem;
                ${iconButtonGroupTokens.buttonDefaultRadius}: 1.375rem;

                ${iconButtonGroupTokens.buttonHeight}: 2.5rem;
                ${iconButtonGroupTokens.buttonPadding}: 1rem;
                ${iconButtonGroupTokens.buttonFontFamily}: ${bodyXS.fontFamily};
                ${iconButtonGroupTokens.buttonFontSize}: ${bodyXS.fontSize};
                ${iconButtonGroupTokens.buttonFontStyle}: ${bodyXS.fontStyle};
                ${iconButtonGroupTokens.buttonFontWeight}: ${bodyXSBold.fontWeight};
                ${iconButtonGroupTokens.buttonLetterSpacing}: ${bodyXS.letterSpacing};
                ${iconButtonGroupTokens.buttonLineHeight}: ${bodyXS.lineHeight};
            `,
            xxs: css`
                ${iconButtonGroupTokens.buttonSegmentedRadius}: 0.25rem;
                ${iconButtonGroupTokens.buttonSideRadius}: 0.75rem;
                ${iconButtonGroupTokens.buttonDefaultRadius}: 0.75rem;

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
