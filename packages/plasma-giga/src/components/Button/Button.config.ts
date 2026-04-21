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
    inverseTextPrimaryActive,
    inverseTextPrimaryHover,
    inverseTextSecondary,
    onDarkSurfaceSolidDefault,
    onDarkTextPrimary,
    onDarkTextPrimaryActive,
    onDarkTextPrimaryHover,
    onDarkTextSecondary,
    onLightSurfaceSolidDefault,
    onLightSurfaceTransparentDeep,
    onLightTextPrimary,
    onLightTextPrimaryActive,
    onLightTextPrimaryHover,
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
    surfaceTransparentSecondary,
    surfaceTransparentSecondaryActive,
    surfaceTransparentSecondaryHover,
    surfaceWarning,
    surfaceWarningActive,
    surfaceWarningHover,
    textPrimary,
    textSecondary,
} from '@salutejs/plasma-themes/tokens/plasma_giga';
import { css, buttonTokens } from '@salutejs/plasma-new-hope/styled-components';

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
                ${buttonTokens.buttonColorHover}: ${inverseTextPrimaryHover};
                ${buttonTokens.buttonColorActive}: ${inverseTextPrimaryActive};
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
                ${buttonTokens.buttonLoadingBackgroundColor}: var(${buttonTokens.buttonBackgroundColor});
                ${buttonTokens.buttonBackgroundColorHover}: ${surfaceTransparentSecondaryHover};
                ${buttonTokens.buttonBackgroundColorActive}: ${surfaceTransparentSecondaryActive};
            `,
            success: css`
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
            critical: css`
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
                ${buttonTokens.buttonColor}: ${onDarkTextPrimary};
                ${buttonTokens.buttonTextColor}: ${onDarkTextPrimary};
                ${buttonTokens.buttonIconColor}: ${onDarkTextPrimary};
                ${buttonTokens.buttonValueColor}: ${onDarkTextSecondary};
                ${buttonTokens.buttonBackgroundColor}: ${onLightSurfaceSolidDefault};
                ${buttonTokens.buttonLoadingBackgroundColor}: var(${buttonTokens.buttonBackgroundColor});
                ${buttonTokens.buttonColorHover}: ${onDarkTextPrimaryHover};
                ${buttonTokens.buttonColorActive}: ${onDarkTextPrimaryActive};
            `,
            white: css`
                ${buttonTokens.buttonColor}: ${onLightTextPrimary};
                ${buttonTokens.buttonTextColor}: ${onLightTextPrimary};
                ${buttonTokens.buttonIconColor}: ${onLightTextPrimary};
                ${buttonTokens.buttonValueColor}: ${onLightTextSecondary};
                ${buttonTokens.buttonBackgroundColor}: ${onDarkSurfaceSolidDefault};
                ${buttonTokens.buttonLoadingBackgroundColor}: var(${buttonTokens.buttonBackgroundColor});
                ${buttonTokens.buttonColorHover}: ${onLightTextPrimaryHover};
                ${buttonTokens.buttonColorActive}: ${onLightTextPrimaryActive};
            `,
        },
        size: {
            xl: css`
                ${buttonTokens.buttonHeight}: 4rem;
                ${buttonTokens.buttonWidth}: 12.5rem;
                ${buttonTokens.buttonPadding}: 1.75rem;
                ${buttonTokens.buttonRadius}: ${roundedRadius};
                ${buttonTokens.buttonFontFamily}: ${bodyL.fontFamily};
                ${buttonTokens.buttonFontSize}: ${bodyL.fontSize};
                ${buttonTokens.buttonFontStyle}: ${bodyL.fontStyle};
                ${buttonTokens.buttonFontWeight}: ${bodyLBold.fontWeight};
                ${buttonTokens.buttonLetterSpacing}: ${bodyL.letterSpacing};
                ${buttonTokens.buttonLineHeight}: ${bodyL.lineHeight};

                ${buttonTokens.buttonSpinnerSize}: 1.5rem;
                ${buttonTokens.buttonSpinnerColor}: inherit;

                ${buttonTokens.buttonLeftContentMargin}: 0 0.625rem 0 -0.125rem;
                ${buttonTokens.buttonRightContentMargin}: 0 -0.125rem 0 0.625rem;
                ${buttonTokens.buttonValueMargin}: 0 0 0 0.25rem;
                ${buttonTokens.buttonAdditionalContentMargin}: 0 0 0 0.5rem;
                ${buttonTokens.buttonAdditionalContentMarginRightWidthValue}: 0.375rem;
            `,
            l: css`
                ${buttonTokens.buttonHeight}: 3.5rem;
                ${buttonTokens.buttonWidth}: 12.5rem;
                ${buttonTokens.buttonPadding}: 1.5rem;
                ${buttonTokens.buttonRadius}: ${roundedRadius};
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
                ${buttonTokens.buttonPadding}: 1.25rem;
                ${buttonTokens.buttonRadius}: ${roundedRadius};
                ${buttonTokens.buttonFontFamily}: ${bodyM.fontFamily};
                ${buttonTokens.buttonFontSize}: ${bodyM.fontSize};
                ${buttonTokens.buttonFontStyle}: ${bodyM.fontStyle};
                ${buttonTokens.buttonFontWeight}: ${bodyMBold.fontWeight};
                ${buttonTokens.buttonLetterSpacing}: ${bodyM.letterSpacing};
                ${buttonTokens.buttonLineHeight}: ${bodyM.lineHeight};

                ${buttonTokens.buttonSpinnerSize}: 1.375rem;
                ${buttonTokens.buttonSpinnerColor}: inherit;

                ${buttonTokens.buttonLeftContentMargin}: 0 0.375rem 0 -0.125rem;
                ${buttonTokens.buttonRightContentMargin}: 0 -0.125rem 0 0.375rem;
                ${buttonTokens.buttonValueMargin}: 0 0 0 0.25rem;
                ${buttonTokens.buttonAdditionalContentMargin}: 0 0 0 0.375rem;
                ${buttonTokens.buttonAdditionalContentMarginRightWidthValue}: 0.25rem;
            `,
            s: css`
                ${buttonTokens.buttonHeight}: 2.5rem;
                ${buttonTokens.buttonWidth}: 11.25rem;
                ${buttonTokens.buttonPadding}: 1rem;
                ${buttonTokens.buttonRadius}: ${roundedRadius};
                ${buttonTokens.buttonFontFamily}: ${bodyS.fontFamily};
                ${buttonTokens.buttonFontSize}: ${bodyS.fontSize};
                ${buttonTokens.buttonFontStyle}: ${bodyS.fontStyle};
                ${buttonTokens.buttonFontWeight}: ${bodySBold.fontWeight};
                ${buttonTokens.buttonLetterSpacing}: ${bodyS.letterSpacing};
                ${buttonTokens.buttonLineHeight}: ${bodyS.lineHeight};

                ${buttonTokens.buttonSpinnerSize}: 1.375rem;
                ${buttonTokens.buttonSpinnerColor}: inherit;

                ${buttonTokens.buttonLeftContentMargin}: 0 0.25rem 0 -0.125rem;
                ${buttonTokens.buttonRightContentMargin}: 0 -0.125rem 0 0.25rem;
                ${buttonTokens.buttonValueMargin}: 0 0 0 0.25rem;
                ${buttonTokens.buttonAdditionalContentMargin}: 0 0 0 0.25rem;
                ${buttonTokens.buttonAdditionalContentMarginRightWidthValue}: 0.25rem;
            `,
            xs: css`
                ${buttonTokens.buttonHeight}: 2rem;
                ${buttonTokens.buttonWidth}: 10rem;
                ${buttonTokens.buttonPadding}: 0.75rem;
                ${buttonTokens.buttonRadius}: ${roundedRadius};
                ${buttonTokens.buttonFontFamily}: ${bodyXS.fontFamily};
                ${buttonTokens.buttonFontSize}: ${bodyXS.fontSize};
                ${buttonTokens.buttonFontStyle}: ${bodyXS.fontStyle};
                ${buttonTokens.buttonFontWeight}: ${bodyXSBold.fontWeight};
                ${buttonTokens.buttonLetterSpacing}: ${bodyXS.letterSpacing};
                ${buttonTokens.buttonLineHeight}: ${bodyXS.lineHeight};

                ${buttonTokens.buttonSpinnerSize}: 1rem;
                ${buttonTokens.buttonSpinnerColor}: inherit;

                ${buttonTokens.buttonLeftContentMargin}: 0 0.25rem 0 -0.125rem;
                ${buttonTokens.buttonRightContentMargin}: 0 -0.125rem 0 0.25rem;
                ${buttonTokens.buttonValueMargin}: 0 0 0 0.25rem;
                ${buttonTokens.buttonAdditionalContentMargin}: 0 0 0 0.25rem;
                ${buttonTokens.buttonAdditionalContentMarginRightWidthValue}: 0.125rem;
            `,
            xxs: css`
                ${buttonTokens.buttonHeight}: 1.5rem;
                ${buttonTokens.buttonWidth}: 8.75rem;
                ${buttonTokens.buttonPadding}: 0.625rem;
                ${buttonTokens.buttonRadius}: ${roundedRadius};
                ${buttonTokens.buttonFontFamily}: ${bodyXS.fontFamily};
                ${buttonTokens.buttonFontSize}: ${bodyXS.fontSize};
                ${buttonTokens.buttonFontStyle}: ${bodyXS.fontStyle};
                ${buttonTokens.buttonFontWeight}: ${bodyXSBold.fontWeight};
                ${buttonTokens.buttonLetterSpacing}: ${bodyXS.letterSpacing};
                ${buttonTokens.buttonLineHeight}: ${bodyXS.lineHeight};

                ${buttonTokens.buttonSpinnerSize}: 0.75rem;
                ${buttonTokens.buttonSpinnerColor}: inherit;

                ${buttonTokens.buttonLeftContentMargin}: 0 0.25rem 0 -0.125rem;
                ${buttonTokens.buttonRightContentMargin}: 0 -0.125rem 0 0.25rem;
                ${buttonTokens.buttonAdditionalContentMargin}: 0 0rem 0 0.25rem;
                ${buttonTokens.buttonValueMargin}: 0 0 0 0.25rem;
                ${buttonTokens.buttonAdditionalContentMarginRightWidthValue}: 0.125rem;
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
