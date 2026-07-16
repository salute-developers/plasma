import { css, buttonTokens } from '@salutejs/plasma-new-hope/styled-components';
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
    onLightSurfaceSolidCard,
    onLightSurfaceSolidCardActive,
    onLightSurfaceSolidCardHover,
    onLightSurfaceSolidDefault,
    onLightSurfaceSolidDefaultActive,
    onLightSurfaceSolidDefaultHover,
    onLightSurfaceTransparentDeep,
    onLightSurfaceTransparentDeepActive,
    onLightSurfaceTransparentDeepHover,
    onLightTextAccent,
    onLightTextPrimary,
    onLightTextSecondary,
    surfaceAccent,
    surfaceAccentActive,
    surfaceAccentGradient,
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
    textPromoActive,
    textPromoHover,
    textSecondary,
} from '@salutejs/sdds-themes/tokens/sdds_insol_next';

// INFO: Rounded radius. Should be removed after token will be added in theme
const roundedRadius = '1000px';

export const config = {
    defaults: {
        view: 'default',
        focused: 'true',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${buttonTokens.buttonColor}: ${inverseTextPrimary};
                ${buttonTokens.buttonTextColor}: ${inverseTextPrimary};
                ${buttonTokens.buttonIconColor}: ${inverseTextPrimary};
                ${buttonTokens.buttonValueColor}: ${inverseTextSecondary};
                ${buttonTokens.buttonBackgroundColor}: ${surfaceSolidDefault};
                ${buttonTokens.buttonLoadingBackgroundColor}: var(${buttonTokens.buttonBackgroundColor});

                ${buttonTokens.buttonBackgroundColorHover}: ${surfaceSolidDefaultHover};
                ${buttonTokens.buttonBackgroundColorActive}: ${surfaceSolidDefaultActive};
            `,
            accent: css`
                ${buttonTokens.buttonColor}: ${onDarkTextPrimary};
                ${buttonTokens.buttonTextColor}: ${onDarkTextPrimary};
                ${buttonTokens.buttonIconColor}: ${onDarkTextPrimary};
                ${buttonTokens.buttonValueColor}: ${onDarkTextSecondary};
                ${buttonTokens.buttonBackgroundColor}: ${surfaceAccent};
                ${buttonTokens.buttonLoadingBackgroundColor}: var(${buttonTokens.buttonBackgroundColor});
                ${buttonTokens.buttonBackgroundColorHover}: ${surfaceAccentHover};
                ${buttonTokens.buttonBackgroundColorActive}: ${surfaceAccentActive};
            `,
            'accent-gradient': css`
                ${buttonTokens.buttonColor}: ${onDarkTextPrimary};

                ${buttonTokens.buttonTextColor}: ${onDarkTextPrimary};
                ${buttonTokens.buttonIconColor}: ${onDarkTextPrimary};
                ${buttonTokens.buttonValueColor}: ${onDarkTextSecondary};

                ${buttonTokens.buttonBackgroundColor}: ${surfaceAccentGradient};
                ${buttonTokens.buttonBackgroundColorHover}: linear-gradient(87deg, #53F5DA 0%, #31C2A7 67.31%);
                ${buttonTokens.buttonBackgroundColorActive}: ${surfaceAccentGradient};

                ${buttonTokens.buttonLoadingBackgroundColor}: var(${buttonTokens.buttonBackgroundColor});
            `,
            secondary: css`
                ${buttonTokens.buttonColor}: ${textPrimary};
                ${buttonTokens.buttonTextColor}: ${textPrimary};
                ${buttonTokens.buttonIconColor}: ${textPrimary};
                ${buttonTokens.buttonValueColor}: ${textSecondary};
                ${buttonTokens.buttonBackgroundColor}: ${surfaceTransparentSecondary};
                ${buttonTokens.buttonLoadingBackgroundColor}: var(${buttonTokens.buttonBackgroundColor});

                ${buttonTokens.buttonBackgroundColorHover}: ${surfaceTransparentSecondaryHover};
                ${buttonTokens.buttonBackgroundColorActive}: ${surfaceTransparentSecondaryActive};
            `,
            clear: css`
                ${buttonTokens.buttonColor}: ${textPrimary};
                ${buttonTokens.buttonTextColor}: ${textPrimary};
                ${buttonTokens.buttonIconColor}: ${textPrimary};
                ${buttonTokens.buttonValueColor}: ${textSecondary};

                ${buttonTokens.buttonBackgroundColor}: ${surfaceClear};
                ${buttonTokens.buttonBackgroundColorHover}: ${surfaceClear};
                ${buttonTokens.buttonBackgroundColorActive}: ${surfaceClear};

                ${buttonTokens.buttonLoadingBackgroundColor}: var(${buttonTokens.buttonBackgroundColor});
            `,
            positive: css`
                ${buttonTokens.buttonColor}: ${onDarkTextPrimary};
                ${buttonTokens.buttonTextColor}: ${onDarkTextPrimary};
                ${buttonTokens.buttonIconColor}: ${onDarkTextPrimary};
                ${buttonTokens.buttonValueColor}: ${onDarkTextSecondary};
                ${buttonTokens.buttonBackgroundColor}: ${surfacePositive};
                ${buttonTokens.buttonLoadingBackgroundColor}: var(${buttonTokens.buttonBackgroundColor});

                ${buttonTokens.buttonBackgroundColorHover}: ${surfacePositiveHover};
                ${buttonTokens.buttonBackgroundColorActive}: ${surfacePositiveActive};
            `,
            warning: css`
                ${buttonTokens.buttonColor}: ${onDarkTextPrimary};
                ${buttonTokens.buttonTextColor}: ${onDarkTextPrimary};
                ${buttonTokens.buttonIconColor}: ${onDarkTextPrimary};
                ${buttonTokens.buttonValueColor}: ${onDarkTextSecondary};
                ${buttonTokens.buttonBackgroundColor}: ${surfaceWarning};
                ${buttonTokens.buttonLoadingBackgroundColor}: var(${buttonTokens.buttonBackgroundColor});

                ${buttonTokens.buttonBackgroundColorHover}: ${surfaceWarningHover};
                ${buttonTokens.buttonBackgroundColorActive}: ${surfaceWarningActive};
            `,
            negative: css`
                ${buttonTokens.buttonColor}: ${onDarkTextPrimary};
                ${buttonTokens.buttonTextColor}: ${onDarkTextPrimary};
                ${buttonTokens.buttonIconColor}: ${onDarkTextPrimary};
                ${buttonTokens.buttonValueColor}: ${onDarkTextSecondary};
                ${buttonTokens.buttonBackgroundColor}: ${surfaceNegative};
                ${buttonTokens.buttonLoadingBackgroundColor}: var(${buttonTokens.buttonBackgroundColor});
                ${buttonTokens.buttonBackgroundColorHover}: ${surfaceNegativeHover};
                ${buttonTokens.buttonBackgroundColorActive}: ${surfaceNegativeActive};
            `,
            dark: css`
                ${buttonTokens.buttonColor}: ${onDarkTextPrimary};
                ${buttonTokens.buttonTextColor}: ${onDarkTextPrimary};
                ${buttonTokens.buttonIconColor}: ${onDarkTextPrimary};
                ${buttonTokens.buttonValueColor}: ${onDarkTextSecondary};
                ${buttonTokens.buttonBackgroundColor}: ${onLightSurfaceTransparentDeep};
                ${buttonTokens.buttonLoadingBackgroundColor}: var(${buttonTokens.buttonBackgroundColor});

                ${buttonTokens.buttonBackgroundColorHover}: ${onLightSurfaceTransparentDeepHover};
                ${buttonTokens.buttonBackgroundColorActive}: ${onLightSurfaceTransparentDeepActive};
            `,
            black: css`
                ${buttonTokens.buttonColor}: ${onDarkTextPrimary};
                ${buttonTokens.buttonTextColor}: ${onDarkTextPrimary};
                ${buttonTokens.buttonIconColor}: ${onDarkTextPrimary};
                ${buttonTokens.buttonValueColor}: ${onDarkTextSecondary};
                ${buttonTokens.buttonBackgroundColor}: ${onLightSurfaceSolidDefault};
                ${buttonTokens.buttonLoadingBackgroundColor}: var(${buttonTokens.buttonBackgroundColor});

                ${buttonTokens.buttonBackgroundColorHover}: ${onLightSurfaceSolidDefaultHover};
                ${buttonTokens.buttonBackgroundColorActive}: ${onLightSurfaceSolidDefaultActive};
            `,
            white: css`
                ${buttonTokens.buttonColor}: ${onLightTextPrimary};
                ${buttonTokens.buttonColorHover}: ${onLightTextPrimary};
                ${buttonTokens.buttonColorActive}: ${onLightTextPrimary};
                ${buttonTokens.buttonTextColor}: ${onLightTextPrimary};
                ${buttonTokens.buttonIconColor}: ${onLightTextPrimary};
                ${buttonTokens.buttonValueColor}: ${onLightTextSecondary};
                ${buttonTokens.buttonBackgroundColor}: ${onDarkSurfaceSolidDefault};
                ${buttonTokens.buttonLoadingBackgroundColor}: var(${buttonTokens.buttonBackgroundColor});

                ${buttonTokens.buttonBackgroundColorHover}: ${onDarkSurfaceSolidDefaultHover};
                ${buttonTokens.buttonBackgroundColorActive}: ${onDarkSurfaceSolidDefaultActive};
            `,
            green: css`
                ${buttonTokens.buttonColor}: ${onLightTextAccent};
                ${buttonTokens.buttonColorHover}: ${textPromoHover};
                ${buttonTokens.buttonColorActive}: ${textPromoActive};
                ${buttonTokens.buttonTextColor}: ${onLightTextAccent};
                ${buttonTokens.buttonIconColor}: ${onLightTextAccent};
                ${buttonTokens.buttonValueColor}: ${onLightTextSecondary};
                ${buttonTokens.buttonBackgroundColor}: ${onLightSurfaceSolidCard};
                ${buttonTokens.buttonLoadingBackgroundColor}: var(${buttonTokens.buttonBackgroundColor});

                ${buttonTokens.buttonBackgroundColorHover}: ${onLightSurfaceSolidCardHover};
                ${buttonTokens.buttonBackgroundColorActive}: ${onLightSurfaceSolidCardActive};
            `,
        },
        size: {
            xl: css`
                ${buttonTokens.buttonHeight}: 4rem;
                ${buttonTokens.buttonWidth}: 12.5rem;
                ${buttonTokens.buttonPadding}: 1.75rem;
                ${buttonTokens.buttonRadius}: ${roundedRadius};

                ${buttonTokens.buttonFontFamily}: ${bodyLBold.fontFamily};
                ${buttonTokens.buttonFontSize}: ${bodyLBold.fontSize};
                ${buttonTokens.buttonFontStyle}: ${bodyLBold.fontStyle};
                ${buttonTokens.buttonFontWeight}: ${bodyLBold.fontWeight};
                ${buttonTokens.buttonLetterSpacing}: ${bodyLBold.letterSpacing};
                ${buttonTokens.buttonLineHeight}: ${bodyLBold.lineHeight};

                ${buttonTokens.buttonValueFontWeight}: ${bodyL.fontWeight};

                ${buttonTokens.buttonSpinnerSize}: 1.5rem;
                ${buttonTokens.buttonSpinnerColor}: inherit;

                ${buttonTokens.buttonLeftContentMargin}: 0 0.625rem 0 -0.125rem;
                ${buttonTokens.buttonRightContentMargin}: 0 -0.125rem 0 0.625rem;
                ${buttonTokens.buttonAdditionalContentMargin}: 0 0 0 0.5rem;
                ${buttonTokens.buttonValueMargin}: 0 0 0 0.375rem;
                ${buttonTokens.buttonAdditionalContentMarginRightWidthValue}: 0.375rem;
            `,
            l: css`
                ${buttonTokens.buttonHeight}: 3.5rem;
                ${buttonTokens.buttonWidth}: 12.5rem;
                ${buttonTokens.buttonPadding}: 1.375rem;
                ${buttonTokens.buttonRadius}: ${roundedRadius};

                ${buttonTokens.buttonFontFamily}: ${bodyLBold.fontFamily};
                ${buttonTokens.buttonFontSize}: ${bodyLBold.fontSize};
                ${buttonTokens.buttonFontStyle}: ${bodyLBold.fontStyle};
                ${buttonTokens.buttonFontWeight}: ${bodyLBold.fontWeight};
                ${buttonTokens.buttonLetterSpacing}: ${bodyLBold.letterSpacing};
                ${buttonTokens.buttonLineHeight}: ${bodyLBold.lineHeight};

                ${buttonTokens.buttonValueFontWeight}: ${bodyL.fontWeight};

                ${buttonTokens.buttonSpinnerSize}: 1.375rem;
                ${buttonTokens.buttonSpinnerColor}: inherit;

                ${buttonTokens.buttonLeftContentMargin}: 0 0.5rem 0 -0.125rem;
                ${buttonTokens.buttonRightContentMargin}: 0 -0.125rem 0 0.5rem;
                ${buttonTokens.buttonAdditionalContentMargin}: 0 0 0 0.5rem;
                ${buttonTokens.buttonValueMargin}: 0 0 0 0.375rem;
                ${buttonTokens.buttonAdditionalContentMarginRightWidthValue}: 0.375rem;
            `,
            m: css`
                ${buttonTokens.buttonHeight}: 3rem;
                ${buttonTokens.buttonWidth}: 11.25rem;
                ${buttonTokens.buttonPadding}: 1.25rem;
                ${buttonTokens.buttonRadius}: ${roundedRadius};

                ${buttonTokens.buttonFontFamily}: ${bodyMBold.fontFamily};
                ${buttonTokens.buttonFontSize}: ${bodyMBold.fontSize};
                ${buttonTokens.buttonFontStyle}: ${bodyMBold.fontStyle};
                ${buttonTokens.buttonFontWeight}: ${bodyMBold.fontWeight};
                ${buttonTokens.buttonLetterSpacing}: ${bodyMBold.letterSpacing};
                ${buttonTokens.buttonLineHeight}: ${bodyMBold.lineHeight};

                ${buttonTokens.buttonValueFontWeight}: ${bodyM.fontWeight};

                ${buttonTokens.buttonSpinnerSize}: 1.5rem;
                ${buttonTokens.buttonSpinnerColor}: inherit;

                ${buttonTokens.buttonLeftContentMargin}: 0 0.375rem 0 -0.125rem;
                ${buttonTokens.buttonRightContentMargin}: 0 -0.125rem 0 0.375rem;
                ${buttonTokens.buttonAdditionalContentMargin}: 0 0 0 0.375rem;
                ${buttonTokens.buttonValueMargin}: 0 0 0 0.25rem;
                ${buttonTokens.buttonAdditionalContentMarginRightWidthValue}: 0.25rem;
            `,
            s: css`
                ${buttonTokens.buttonHeight}: 2.5rem;
                ${buttonTokens.buttonWidth}: 11.25rem;
                ${buttonTokens.buttonPadding}: 1rem;
                ${buttonTokens.buttonRadius}: ${roundedRadius};

                ${buttonTokens.buttonFontFamily}: ${bodySBold.fontFamily};
                ${buttonTokens.buttonFontSize}: ${bodySBold.fontSize};
                ${buttonTokens.buttonFontStyle}: ${bodySBold.fontStyle};
                ${buttonTokens.buttonFontWeight}: ${bodySBold.fontWeight};
                ${buttonTokens.buttonLetterSpacing}: ${bodySBold.letterSpacing};
                ${buttonTokens.buttonLineHeight}: ${bodySBold.lineHeight};

                ${buttonTokens.buttonValueFontWeight}: ${bodyS.fontWeight};

                ${buttonTokens.buttonSpinnerSize}: 1.5rem;
                ${buttonTokens.buttonSpinnerColor}: inherit;

                ${buttonTokens.buttonLeftContentMargin}: 0 0.25rem 0 -0.125rem;
                ${buttonTokens.buttonRightContentMargin}: 0 -0.125rem 0 0.25rem;
                ${buttonTokens.buttonAdditionalContentMargin}: 0 0 0 0.375rem;
                ${buttonTokens.buttonValueMargin}: 0 0 0 0.25rem;
                ${buttonTokens.buttonAdditionalContentMarginRightWidthValue}: 0.25rem;
            `,
            xs: css`
                ${buttonTokens.buttonHeight}: 2rem;
                ${buttonTokens.buttonWidth}: 10rem;
                ${buttonTokens.buttonPadding}: 0.75rem;
                ${buttonTokens.buttonRadius}: ${roundedRadius};

                ${buttonTokens.buttonFontFamily}: ${bodyXSBold.fontFamily};
                ${buttonTokens.buttonFontSize}: ${bodyXSBold.fontSize};
                ${buttonTokens.buttonFontStyle}: ${bodyXSBold.fontStyle};
                ${buttonTokens.buttonFontWeight}: ${bodyXSBold.fontWeight};
                ${buttonTokens.buttonLetterSpacing}: ${bodyXSBold.letterSpacing};
                ${buttonTokens.buttonLineHeight}: ${bodyXSBold.lineHeight};

                ${buttonTokens.buttonValueFontWeight}: ${bodyXS.fontWeight};

                ${buttonTokens.buttonSpinnerSize}: 1rem;
                ${buttonTokens.buttonSpinnerColor}: inherit;

                ${buttonTokens.buttonLeftContentMargin}: 0 0.25rem 0 -0.125rem;
                ${buttonTokens.buttonRightContentMargin}: 0 -0.125rem 0 0.25rem;
                ${buttonTokens.buttonAdditionalContentMargin}: 0 0 0 0.25rem;
                ${buttonTokens.buttonValueMargin}: 0 0 0 0.125rem;
                ${buttonTokens.buttonAdditionalContentMarginRightWidthValue}: 0.25rem;
            `,
            xxs: css`
                ${buttonTokens.buttonHeight}: 1.5rem;
                ${buttonTokens.buttonWidth}: 8.75rem;
                ${buttonTokens.buttonPadding}: 0.625rem;
                ${buttonTokens.buttonRadius}: ${roundedRadius};

                ${buttonTokens.buttonFontFamily}: ${bodyXSBold.fontFamily};
                ${buttonTokens.buttonFontSize}: ${bodyXSBold.fontSize};
                ${buttonTokens.buttonFontStyle}: ${bodyXSBold.fontStyle};
                ${buttonTokens.buttonFontWeight}: ${bodyXSBold.fontWeight};
                ${buttonTokens.buttonLetterSpacing}: ${bodyXSBold.letterSpacing};
                ${buttonTokens.buttonLineHeight}: ${bodyXSBold.lineHeight};

                ${buttonTokens.buttonValueFontWeight}: ${bodyXS.fontWeight};

                ${buttonTokens.buttonSpinnerSize}: 0.75rem;
                ${buttonTokens.buttonSpinnerColor}: inherit;

                ${buttonTokens.buttonLeftContentMargin}: 0 0.25rem 0 -0.125rem;
                ${buttonTokens.buttonRightContentMargin}: 0 -0.125rem 0 0.25rem;
                ${buttonTokens.buttonValueMargin}: 0 0 0 0.25rem;
                ${buttonTokens.buttonAdditionalContentMarginRightWidthValue}: 0.125rem;
                ${buttonTokens.buttonAdditionalContentMargin}: 0 0 0 0.25rem;
            `,
        },
        disabled: {
            true: css`
                ${buttonTokens.buttonDisabledOpacity}: 0.4;
            `,
        },
        focused: {
            true: css`
                ${buttonTokens.buttonFocusColor}: ${surfaceAccent};
            `,
        },
        stretching: {
            auto: css``,
            filled: css``,
            fixed: css``,
        },
    },
};
