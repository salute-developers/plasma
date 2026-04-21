import {
    bodyL,
    bodyLBold,
    bodyM,
    bodyMBold,
    bodyS,
    bodySBold,
    inverseTextPrimary,
    inverseTextPrimaryActive,
    inverseTextPrimaryHover,
    inverseTextSecondary,
    onDarkSurfaceSolidDefault,
    onDarkTextPrimary,
    onDarkTextPrimaryActive,
    onDarkTextPrimaryHover,
    onDarkTextSecondary,
    onLightSurfaceTransparentDeep,
    onLightSurfaceTransparentDeepActive,
    onLightSurfaceTransparentDeepHover,
    onLightTextPrimary,
    onLightTextPrimaryActive,
    onLightTextPrimaryHover,
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
    textPrimaryHover,
    textSecondary,
} from '@salutejs/sdds-themes/tokens/sdds_platform_ai';
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
                ${buttonGroupTokens.buttonBackgroundColorHover}: ${surfaceSolidDefaultHover};
                ${buttonGroupTokens.buttonBackgroundColorActive}: ${surfaceSolidDefaultActive};
                ${buttonGroupTokens.buttonLoadingBackgroundColor}: var(${buttonGroupTokens.buttonBackgroundColor});
                ${buttonGroupTokens.buttonColorHover}: ${inverseTextPrimaryHover};
                ${buttonGroupTokens.buttonColorActive}: ${inverseTextPrimaryActive};
            `,
            accent: css`
                ${buttonGroupTokens.buttonColor}: ${textPrimary};
                ${buttonGroupTokens.buttonTextColor}: ${textPrimary};
                ${buttonGroupTokens.buttonIconColor}: ${textPrimary};

                ${buttonGroupTokens.buttonValueColor}: ${onDarkTextSecondary};

                ${buttonGroupTokens.buttonBackgroundColor}: ${surfaceAccentGradient};
                ${buttonGroupTokens.buttonLoadingBackgroundColor}: var(${buttonGroupTokens.buttonBackgroundColor});
            `,
            secondary: css`
                ${buttonGroupTokens.buttonColor}: ${textPrimary};
                ${buttonGroupTokens.buttonColorHover}: ${textPrimaryHover};
                ${buttonGroupTokens.buttonTextColor}: ${textPrimary};
                ${buttonGroupTokens.buttonIconColor}: ${textPrimary};

                ${buttonGroupTokens.buttonValueColor}: ${textSecondary};

                ${buttonGroupTokens.buttonBackgroundColor}: transparent;
                ${buttonGroupTokens.buttonLoadingBackgroundColor}: var(${buttonGroupTokens.buttonBackgroundColor});

                ${buttonGroupTokens.buttonBorderColor}: ${outlineSolidDefault};
                ${buttonGroupTokens.buttonBorderColorHover}: ${outlineSolidDefaultHover};
                ${buttonGroupTokens.buttonBorderColorActive}: ${outlineSolidDefaultActive};
            `,
            clear: css`
                ${buttonGroupTokens.buttonColor}: ${textPrimary};
                ${buttonGroupTokens.buttonTextColor}: ${textPrimary};
                ${buttonGroupTokens.buttonIconColor}: ${textPrimary};
                ${buttonGroupTokens.buttonValueColor}: ${textSecondary};

                ${buttonGroupTokens.buttonBackgroundColor}: ${surfaceClear};
                ${buttonGroupTokens.buttonBackgroundColorHover}: ${onDarkSurfaceSolidDefault};
                ${buttonGroupTokens.buttonBackgroundColorActive}: ${onDarkSurfaceSolidDefault};
                ${buttonGroupTokens.buttonLoadingBackgroundColor}: var(${buttonGroupTokens.buttonBackgroundColor});
            `,
            positive: css`
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
            negative: css`
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
                ${buttonGroupTokens.buttonColorHover}: ${onDarkTextPrimaryHover};
                ${buttonGroupTokens.buttonColorActive}: ${onDarkTextPrimaryActive};
                ${buttonGroupTokens.buttonTextColor}: ${onDarkTextPrimary};
                ${buttonGroupTokens.buttonIconColor}: ${onDarkTextPrimary};
                ${buttonGroupTokens.buttonValueColor}: ${onDarkTextSecondary};

                ${buttonGroupTokens.buttonBackgroundColor}: ${onLightSurfaceTransparentDeep};
                ${buttonGroupTokens.buttonBackgroundColorHover}: ${onLightSurfaceTransparentDeepHover};
                ${buttonGroupTokens.buttonBackgroundColorActive}: ${onLightSurfaceTransparentDeepActive};

                ${buttonGroupTokens.buttonLoadingBackgroundColor}: var(${buttonGroupTokens.buttonBackgroundColor});
            `,
            black: css`
                ${buttonGroupTokens.buttonColor}: ${textAccent};
                ${buttonGroupTokens.buttonTextColor}: ${textAccent};
                ${buttonGroupTokens.buttonIconColor}: ${textAccent};

                ${buttonGroupTokens.buttonValueColor}: ${onDarkTextSecondary};

                ${buttonGroupTokens.buttonBackgroundColor}: ${surfaceSolidDefault};
                ${buttonGroupTokens.buttonBackgroundColorHover}: ${surfaceSolidDefaultHover};
                ${buttonGroupTokens.buttonBackgroundColorActive}: ${surfaceSolidDefaultActive};

                ${buttonGroupTokens.buttonLoadingBackgroundColor}: var(${buttonGroupTokens.buttonBackgroundColor});
            `,
            white: css`
                ${buttonGroupTokens.buttonColor}: ${onLightTextPrimary};
                ${buttonGroupTokens.buttonColorHover}: ${onLightTextPrimaryHover};
                ${buttonGroupTokens.buttonColorActive}: ${onLightTextPrimaryActive};

                ${buttonGroupTokens.buttonTextColor}: ${onLightTextPrimary};
                ${buttonGroupTokens.buttonIconColor}: ${onLightTextPrimary};
                ${buttonGroupTokens.buttonValueColor}: ${onLightTextSecondary};

                ${buttonGroupTokens.buttonBackgroundColor}: ${onDarkSurfaceSolidDefault};
                ${buttonGroupTokens.buttonBackgroundColorHover}: ${surfaceClear};
                ${buttonGroupTokens.buttonBackgroundColorActive}: ${surfaceClear};

                ${buttonGroupTokens.buttonLoadingBackgroundColor}: var(${buttonGroupTokens.buttonBackgroundColor});
            `,
        },
        size: {
            xl: css`
                ${buttonGroupTokens.buttonDefaultRadius}: 2rem;
                ${buttonGroupTokens.buttonSegmentedRadius}: 0.5rem;
                ${buttonGroupTokens.buttonSideRadius}: 2rem;

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
                ${buttonGroupTokens.buttonSegmentedRadius}: 0.375rem;
                ${buttonGroupTokens.buttonDefaultRadius}: 1.75rem;
                ${buttonGroupTokens.buttonSideRadius}: 1.75rem;

                ${buttonGroupTokens.buttonHeight}: 3.5rem;
                ${buttonGroupTokens.buttonPadding}: 1.75rem;

                ${buttonGroupTokens.buttonFontFamily}: ${bodyL.fontFamily};
                ${buttonGroupTokens.buttonFontSize}: ${bodyL.fontSize};
                ${buttonGroupTokens.buttonFontStyle}: ${bodyL.fontStyle};
                ${buttonGroupTokens.buttonFontWeight}: ${bodyLBold.fontWeight};
                ${buttonGroupTokens.buttonLetterSpacing}: ${bodyL.letterSpacing};
                ${buttonGroupTokens.buttonLineHeight}: ${bodyL.lineHeight};
            `,
            m: css`
                ${buttonGroupTokens.buttonSegmentedRadius}: 0.25rem;
                ${buttonGroupTokens.buttonDefaultRadius}: 1.5rem;
                ${buttonGroupTokens.buttonSideRadius}: 1.5rem;

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
                ${buttonGroupTokens.buttonSideRadius}: 1.375rem;
                ${buttonGroupTokens.buttonDefaultRadius}: 1.375rem;

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
                ${buttonGroupTokens.buttonSegmentedRadius}: 0.25rem;
                ${buttonGroupTokens.buttonSideRadius}: 1.375rem;
                ${buttonGroupTokens.buttonDefaultRadius}: 1.375rem;

                ${buttonGroupTokens.buttonHeight}: 2.5rem;
                ${buttonGroupTokens.buttonPadding}: 1rem;
                ${buttonGroupTokens.buttonFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${buttonGroupTokens.buttonFontSize}: var(--plasma-typo-body-xs-font-size);
                ${buttonGroupTokens.buttonFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${buttonGroupTokens.buttonFontWeight}: var(--plasma-typo-body-xs-bold-font-weight);
                ${buttonGroupTokens.buttonLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
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
