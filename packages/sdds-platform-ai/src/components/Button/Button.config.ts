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
    onLightTextPrimary,
    onLightTextPrimaryActive,
    onLightTextPrimaryHover,
    onLightTextSecondary,
    outlineSolidDefault,
    surfaceAccent,
    surfaceAccentGradient,
    surfaceClear,
    surfaceNegative,
    surfaceNegativeActive,
    surfaceNegativeHover,
    surfacePositive,
    surfacePositiveActive,
    surfacePositiveHover,
    surfaceSolidDefault,
    surfaceTransparentSecondaryActive,
    surfaceTransparentSecondaryHover,
    surfaceWarning,
    surfaceWarningActive,
    surfaceWarningHover,
    textAccent,
    textPrimary,
    textSecondary,
} from '@salutejs/sdds-themes/tokens/sdds_platform_ai';
import { css, buttonTokens } from '@salutejs/plasma-new-hope/styled-components';

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
                ${buttonTokens.buttonColorHover}: ${inverseTextPrimaryHover};
                ${buttonTokens.buttonColorActive}: ${inverseTextPrimaryActive};
            `,
            accent: css`
                ${buttonTokens.buttonColor}: ${textPrimary};
                ${buttonTokens.buttonTextColor}: ${textPrimary};
                ${buttonTokens.buttonIconColor}: ${textPrimary};

                ${buttonTokens.buttonValueColor}: ${onDarkTextSecondary};

                ${buttonTokens.buttonBackgroundColor}: ${surfaceAccentGradient};
                ${buttonTokens.buttonLoadingBackgroundColor}: var(${buttonTokens.buttonBackgroundColor});
            `,
            secondary: css`
                ${buttonTokens.buttonColor}: ${textPrimary};
                ${buttonTokens.buttonTextColor}: ${textPrimary};
                ${buttonTokens.buttonIconColor}: ${textPrimary};

                ${buttonTokens.buttonValueColor}: ${textSecondary};

                ${buttonTokens.buttonBackgroundColor}: transparent;
                ${buttonTokens.buttonLoadingBackgroundColor}: var(${buttonTokens.buttonBackgroundColor});

                ${buttonTokens.buttonBorderColor}: ${outlineSolidDefault};
                ${buttonTokens.buttonBorderColorHover}: ${outlineSolidDefault};
                ${buttonTokens.buttonBorderColorActive}: ${outlineSolidDefault};
            `,
            clear: css`
                ${buttonTokens.buttonColor}: ${textPrimary};
                ${buttonTokens.buttonTextColor}: ${textPrimary};
                ${buttonTokens.buttonIconColor}: ${textPrimary};
                ${buttonTokens.buttonValueColor}: ${textSecondary};

                ${buttonTokens.buttonBackgroundColor}: ${surfaceClear};
                ${buttonTokens.buttonLoadingBackgroundColor}: var(${buttonTokens.buttonBackgroundColor});
                ${buttonTokens.buttonBackgroundColorHover}: ${surfaceTransparentSecondaryHover};
                ${buttonTokens.buttonBackgroundColorActive}: ${surfaceTransparentSecondaryActive};
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
                ${buttonTokens.buttonColorHover}: ${onDarkTextPrimaryHover};
                ${buttonTokens.buttonColorActive}: ${onDarkTextPrimaryActive};
            `,
            black: css`
                ${buttonTokens.buttonColor}: ${textAccent};
                ${buttonTokens.buttonTextColor}: ${textAccent};
                ${buttonTokens.buttonIconColor}: ${textAccent};

                ${buttonTokens.buttonValueColor}: ${onDarkTextSecondary};

                ${buttonTokens.buttonBackgroundColor}: ${surfaceSolidDefault};

                ${buttonTokens.buttonLoadingBackgroundColor}: var(${buttonTokens.buttonBackgroundColor});
            `,
            white: css`
                ${buttonTokens.buttonColor}: ${onLightTextPrimary};
                ${buttonTokens.buttonColorHover}: ${onLightTextPrimaryHover};
                ${buttonTokens.buttonColorActive}: ${onLightTextPrimaryActive};

                ${buttonTokens.buttonTextColor}: ${onLightTextPrimary};
                ${buttonTokens.buttonIconColor}: ${onLightTextPrimary};
                ${buttonTokens.buttonValueColor}: ${onLightTextSecondary};

                ${buttonTokens.buttonBackgroundColor}: ${onDarkSurfaceSolidDefault};
                ${buttonTokens.buttonLoadingBackgroundColor}: var(${buttonTokens.buttonBackgroundColor});
            `,
        },
        size: {
            xl: css`
                ${buttonTokens.buttonHeight}: 4rem;
                ${buttonTokens.buttonWidth}: 12.5rem;
                ${buttonTokens.buttonPadding}: 1.75rem;
                ${buttonTokens.buttonRadius}: 2rem;
                ${buttonTokens.buttonFontFamily}: ${bodyL.fontFamily};
                ${buttonTokens.buttonFontSize}: ${bodyL.fontSize};
                ${buttonTokens.buttonFontStyle}: ${bodyL.fontStyle};
                ${buttonTokens.buttonFontWeight}: ${bodyLBold.fontWeight};
                ${buttonTokens.buttonLetterSpacing}: ${bodyL.letterSpacing};
                ${buttonTokens.buttonLineHeight}: ${bodyL.lineHeight};

                ${buttonTokens.buttonSpinnerSize}: 1.5rem;
                ${buttonTokens.buttonSpinnerColor}: inherit;

                ${buttonTokens.buttonLeftContentMargin}: 0 0.375rem 0 -0.125rem;
                ${buttonTokens.buttonRightContentMargin}: 0 -0.125rem 0 0.375rem;
                ${buttonTokens.buttonValueMargin}: 0 0 0 0.25rem;
                ${buttonTokens.buttonAdditionalContentMargin}: 0 0 0 0.5rem;
                ${buttonTokens.buttonAdditionalContentMarginRightWidthValue}: 0.375rem;
            `,
            l: css`
                ${buttonTokens.buttonHeight}: 3.5rem;
                ${buttonTokens.buttonWidth}: 12.5rem;
                ${buttonTokens.buttonPadding}: 1.75rem;
                ${buttonTokens.buttonRadius}: 1.75rem;

                ${buttonTokens.buttonFontFamily}: ${bodyL.fontFamily};
                ${buttonTokens.buttonFontSize}: ${bodyL.fontSize};
                ${buttonTokens.buttonFontStyle}: ${bodyL.fontStyle};
                ${buttonTokens.buttonFontWeight}: ${bodyLBold.fontWeight};
                ${buttonTokens.buttonLetterSpacing}: ${bodyL.letterSpacing};
                ${buttonTokens.buttonLineHeight}: ${bodyL.lineHeight};

                ${buttonTokens.buttonSpinnerSize}: 1.375rem;
                ${buttonTokens.buttonSpinnerColor}: inherit;

                ${buttonTokens.buttonLeftContentMargin}: 0 0.5rem 0 -0.125rem;
                ${buttonTokens.buttonRightContentMargin}: 0 -0.125rem 0 0.5rem;
                ${buttonTokens.buttonValueMargin}: 0 0 0 0.25rem;
                ${buttonTokens.buttonAdditionalContentMargin}: 0 0 0 0.5rem;
                ${buttonTokens.buttonAdditionalContentMarginRightWidthValue}: 0.375rem;
            `,
            m: css`
                ${buttonTokens.buttonHeight}: 3rem;
                ${buttonTokens.buttonWidth}: 11.25rem;
                ${buttonTokens.buttonPadding}: 1.5rem;
                ${buttonTokens.buttonRadius}: 1.5rem;
                ${buttonTokens.buttonFontFamily}: ${bodyM.fontFamily};
                ${buttonTokens.buttonFontSize}: ${bodyM.fontSize};
                ${buttonTokens.buttonFontStyle}: ${bodyM.fontStyle};
                ${buttonTokens.buttonFontWeight}: ${bodyMBold.fontWeight};
                ${buttonTokens.buttonLetterSpacing}: ${bodyM.letterSpacing};
                ${buttonTokens.buttonLineHeight}: ${bodyM.lineHeight};

                ${buttonTokens.buttonSpinnerSize}: 1.375rem;
                ${buttonTokens.buttonSpinnerColor}: inherit;

                ${buttonTokens.buttonLeftContentMargin}: 0 0.25rem 0 -0.125rem;
                ${buttonTokens.buttonRightContentMargin}: 0 -0.125rem 0 0.25rem;
                ${buttonTokens.buttonValueMargin}: 0 0 0 0.25rem;
                ${buttonTokens.buttonAdditionalContentMargin}: 0 0 0 0.375rem;
                ${buttonTokens.buttonAdditionalContentMarginRightWidthValue}: 0.25rem;
            `,
            s: css`
                ${buttonTokens.buttonHeight}: 2.5rem;
                ${buttonTokens.buttonWidth}: 11.25rem;
                ${buttonTokens.buttonPadding}: 1rem;
                ${buttonTokens.buttonRadius}: 1.375rem;
                ${buttonTokens.buttonFontFamily}: ${bodyS.fontFamily};
                ${buttonTokens.buttonFontSize}: ${bodyS.fontSize};
                ${buttonTokens.buttonFontStyle}: ${bodyS.fontStyle};
                ${buttonTokens.buttonFontWeight}: ${bodySBold.fontWeight};
                ${buttonTokens.buttonLetterSpacing}: ${bodyS.letterSpacing};
                ${buttonTokens.buttonLineHeight}: ${bodyS.lineHeight};

                ${buttonTokens.buttonSpinnerSize}: 1.375rem;
                ${buttonTokens.buttonSpinnerColor}: inherit;

                ${buttonTokens.buttonLeftContentMargin}: 0 0.125rem 0 -0.125rem;
                ${buttonTokens.buttonRightContentMargin}: 0 -0.125rem 0 0.125rem;
                ${buttonTokens.buttonValueMargin}: 0 0 0 0.25rem;
                ${buttonTokens.buttonAdditionalContentMargin}: 0 0 0 0.25rem;
                ${buttonTokens.buttonAdditionalContentMarginRightWidthValue}: 0.25rem;
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
