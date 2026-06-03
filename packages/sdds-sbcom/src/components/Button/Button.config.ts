import { css, buttonTokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    bodySMedium,
    h4Medium,
    onDarkTextPrimary,
    onDarkTextPrimaryHover,
    onDarkTextSecondary,
    onLightSurfaceAccent,
    onLightSurfaceSolidPrimary,
    onLightSurfaceSolidPrimaryActive,
    onLightSurfaceSolidPrimaryHover,
    onLightTextAccent,
    onLightTextPrimary,
    spacing2x,
    spacing3x,
    surfaceAccent,
    surfaceAccentActive,
    surfaceAccentHover,
    surfaceClear,
    surfaceTransparentNegative,
    surfaceTransparentNegativeActive,
    surfaceTransparentNegativeHover,
    surfaceTransparentSecondary,
    surfaceTransparentSecondaryActive,
    surfaceTransparentSecondaryHover,
    textAccent,
    textAccentHover,
    textNegative,
    textNegativeActive,
    textPrimary,
    textPrimaryActive,
    textPrimaryHover,
    textSecondary,
} from '@salutejs-ds/sdds_sbcom/theme/tokens';

/*
 * NOTE: Mixed DS tokens + raw vars. Prefer @salutejs-ds/sdds_sbcom/theme/tokens where possible.
 * Missing tokens in @salutejs/sdds-themes/tokens: bodyXs, bodyXsBold
 */
export const config = {
    defaults: {
        view: 'accentFiled',
        focused: 'true',
        size: 'm',
    },
    variations: {
        view: {
            accentFiled: css`
                ${buttonTokens.buttonColor}: ${onDarkTextPrimary};
                ${buttonTokens.buttonTextColor}: ${onDarkTextPrimary};
                ${buttonTokens.buttonSpinnerColor}: ${onDarkTextPrimary};
                ${buttonTokens.buttonIconColor}: ${onDarkTextPrimary};
                ${buttonTokens.buttonValueColor}: ${onDarkTextSecondary};
                ${buttonTokens.buttonBackgroundColor}: ${onLightSurfaceAccent};
                ${buttonTokens.buttonLoadingBackgroundColor}: color-mix(in srgb, ${onLightSurfaceAccent} 40%, transparent);
                ${buttonTokens.buttonBackgroundColorHover}: ${surfaceAccentHover};
                ${buttonTokens.buttonBackgroundColorActive}: ${surfaceAccentActive};
            `,
            accentWhite: css`
                ${buttonTokens.buttonColor}: ${onLightTextAccent};
                ${buttonTokens.buttonTextColor}: ${onLightTextAccent};
                ${buttonTokens.buttonSpinnerColor}: ${onLightTextAccent};
                ${buttonTokens.buttonIconColor}: ${onLightTextAccent};
                ${buttonTokens.buttonValueColor}: ${textSecondary};
                ${buttonTokens.buttonBackgroundColor}: ${onLightSurfaceSolidPrimary};
                ${buttonTokens.buttonLoadingBackgroundColor}: color-mix(in srgb, ${onLightSurfaceSolidPrimary} 40%, transparent);
                ${buttonTokens.buttonBackgroundColorHover}: ${onLightSurfaceSolidPrimaryHover};
                ${buttonTokens.buttonBackgroundColorActive}: ${onLightSurfaceSolidPrimaryActive};
            `,
            primaryWhite: css`
                ${buttonTokens.buttonColor}: ${onDarkTextPrimary};
                ${buttonTokens.buttonTextColor}: ${onLightTextPrimary};
                ${buttonTokens.buttonSpinnerColor}: ${onLightTextPrimary};
                ${buttonTokens.buttonIconColor}: ${onLightTextPrimary};
                ${buttonTokens.buttonValueColor}: ${onDarkTextSecondary};
                ${buttonTokens.buttonBackgroundColor}: ${onLightSurfaceSolidPrimary};
                ${buttonTokens.buttonLoadingBackgroundColor}: color-mix(in srgb, ${onLightSurfaceSolidPrimary} 40%, transparent);
                ${buttonTokens.buttonBackgroundColorHover}: ${onLightSurfaceSolidPrimaryHover};
                ${buttonTokens.buttonBackgroundColorActive}: ${onLightSurfaceSolidPrimaryActive};
            `,
            accentGrey: css`
                ${buttonTokens.buttonColor}: ${textAccent};
                ${buttonTokens.buttonTextColor}: ${textAccent};
                ${buttonTokens.buttonSpinnerColor}: ${textAccent};
                ${buttonTokens.buttonIconColor}: ${textAccent};
                ${buttonTokens.buttonValueColor}: ${onDarkTextSecondary};
                ${buttonTokens.buttonBackgroundColor}: ${surfaceTransparentSecondary};
                ${buttonTokens.buttonLoadingBackgroundColor}: color-mix(in srgb, ${surfaceTransparentSecondary} 40%, transparent);
                ${buttonTokens.buttonBackgroundColorHover}: ${surfaceTransparentSecondaryHover};
                ${buttonTokens.buttonBackgroundColorActive}: ${surfaceTransparentSecondaryActive};
            `,
            accentGreyClear: css`
                ${buttonTokens.buttonColor}: ${textAccent};
                ${buttonTokens.buttonTextColor}: ${textAccent};
                ${buttonTokens.buttonColorHover}: ${textAccentHover};
                ${buttonTokens.buttonSpinnerColor}: ${textAccent};
                ${buttonTokens.buttonIconColor}: ${textAccent};
                ${buttonTokens.buttonValueColor}: ${textSecondary};
                ${buttonTokens.buttonBackgroundColor}: ${surfaceClear};
                ${buttonTokens.buttonLoadingBackgroundColor}: color-mix(in srgb, ${surfaceClear} 40%, transparent);
                ${buttonTokens.buttonBackgroundColorHover}: ${surfaceClear};
                ${buttonTokens.buttonBackgroundColorActive}: ${surfaceClear};
            `,
            dangerTint: css`
                ${buttonTokens.buttonColor}: ${textNegative};
                ${buttonTokens.buttonTextColor}: ${textNegative};
                ${buttonTokens.buttonSpinnerColor}: ${textNegative};
                ${buttonTokens.buttonIconColor}: ${textNegative};
                ${buttonTokens.buttonValueColor}: ${onDarkTextSecondary};
                ${buttonTokens.buttonBackgroundColor}: ${surfaceTransparentNegative};
                ${buttonTokens.buttonLoadingBackgroundColor}: color-mix(in srgb, ${surfaceTransparentNegative} 40%, transparent);
                ${buttonTokens.buttonBackgroundColorHover}: ${surfaceTransparentNegativeHover};
                ${buttonTokens.buttonBackgroundColorActive}: ${surfaceTransparentNegativeActive};
            `,
            dangerTintClear: css`
                ${buttonTokens.buttonColor}: ${textNegative};
                ${buttonTokens.buttonTextColor}: ${textNegative};
                ${buttonTokens.buttonSpinnerColor}: ${textNegative};
                ${buttonTokens.buttonIconColor}: ${textNegative};
                ${buttonTokens.buttonValueColor}: ${onDarkTextSecondary};
                ${buttonTokens.buttonBackgroundColor}: ${surfaceClear};
                ${buttonTokens.buttonLoadingBackgroundColor}: color-mix(in srgb, ${surfaceClear} 40%, transparent);
                ${buttonTokens.buttonBackgroundColorHover}: ${surfaceClear};
                ${buttonTokens.buttonColorHover}: ${onDarkTextPrimaryHover};
                ${buttonTokens.buttonBackgroundColorActive}: ${surfaceClear};
                ${buttonTokens.buttonColorActive}: ${textNegativeActive};
            `,
            primaryGrey: css`
                ${buttonTokens.buttonColor}: ${textPrimary};
                ${buttonTokens.buttonTextColor}: ${textPrimary};
                ${buttonTokens.buttonSpinnerColor}: ${textPrimary};
                ${buttonTokens.buttonIconColor}: ${textPrimary};
                ${buttonTokens.buttonValueColor}: ${onDarkTextSecondary};
                ${buttonTokens.buttonBackgroundColor}: ${surfaceTransparentSecondary};
                ${buttonTokens.buttonLoadingBackgroundColor}: color-mix(in srgb, ${surfaceTransparentSecondary} 40%, transparent);
                ${buttonTokens.buttonBackgroundColorHover}: ${surfaceTransparentSecondaryHover};
                ${buttonTokens.buttonColorHover}: ${onDarkTextPrimaryHover};
            `,
            primaryGreyClear: css`
                ${buttonTokens.buttonColor}: ${textPrimary};
                ${buttonTokens.buttonTextColor}: ${textPrimary};
                ${buttonTokens.buttonSpinnerColor}: ${textPrimary};
                ${buttonTokens.buttonIconColor}: ${textPrimary};
                ${buttonTokens.buttonValueColor}: ${onDarkTextSecondary};
                ${buttonTokens.buttonBackgroundColor}: ${surfaceClear};
                ${buttonTokens.buttonLoadingBackgroundColor}: color-mix(in srgb, ${surfaceClear} 40%, transparent);
                ${buttonTokens.buttonBackgroundColorHover}: ${surfaceClear};
                ${buttonTokens.buttonColorHover}: ${textPrimaryHover};
                ${buttonTokens.buttonColorActive}: ${textPrimaryActive};
            `,
        },
        size: {
            48: css`
                ${buttonTokens.buttonHeight}: 3rem;
                ${buttonTokens.buttonWidth}: 12.5rem;
                ${buttonTokens.buttonRadius}: 2rem;
                padding: 0.875rem 1.5rem;
                ${buttonTokens.buttonFontFamily}: ${h4Medium.fontFamily};
                ${buttonTokens.buttonFontSize}: ${h4Medium.fontSize};
                ${buttonTokens.buttonFontStyle}: ${h4Medium.fontStyle};
                ${buttonTokens.buttonFontWeight}: ${h4Medium.fontWeight};
                ${buttonTokens.buttonLetterSpacing}: ${h4Medium.letterSpacing};
                ${buttonTokens.buttonLineHeight}: ${h4Medium.lineHeight};

                ${buttonTokens.buttonSpinnerSize}: 1.5rem;



                ${buttonTokens.buttonLeftContentMargin}: 0 ${spacing3x} 0 0;
                ${buttonTokens.buttonRightContentMargin}: 0 0 0 ${spacing3x};
                ${buttonTokens.buttonValueMargin}: 0 0 0 0.25rem;
                ${buttonTokens.buttonAdditionalContentMargin}: 0 0 0 0.5rem;
                ${buttonTokens.buttonAdditionalContentMarginRightWidthValue}: 0.375rem;
            `,
            40: css`
                ${buttonTokens.buttonHeight}: 2.5rem;
                ${buttonTokens.buttonWidth}: 12.5rem;
                ${buttonTokens.buttonRadius}: 2rem;
                padding: 0.625rem 1.25rem;
                ${buttonTokens.buttonFontFamily}: ${h4Medium.fontFamily};
                ${buttonTokens.buttonFontSize}: ${h4Medium.fontSize};
                ${buttonTokens.buttonFontStyle}: ${h4Medium.fontStyle};
                ${buttonTokens.buttonFontWeight}: ${h4Medium.fontWeight};
                ${buttonTokens.buttonLetterSpacing}: ${h4Medium.letterSpacing};
                ${buttonTokens.buttonLineHeight}: ${h4Medium.lineHeight};

                ${buttonTokens.buttonSpinnerSize}: 1.5rem;

                ${buttonTokens.buttonLeftContentMargin}: 0 ${spacing3x} 0 0;
                ${buttonTokens.buttonRightContentMargin}: 0 0 0 ${spacing3x};
                ${buttonTokens.buttonValueMargin}: 0 0 0 0.25rem;
                ${buttonTokens.buttonAdditionalContentMargin}: 0 0 0 0.5rem;
                ${buttonTokens.buttonAdditionalContentMarginRightWidthValue}: 0.375rem;
            `,
            32: css`
                ${buttonTokens.buttonHeight}: 2rem;
                ${buttonTokens.buttonWidth}: 11.25rem;
                ${buttonTokens.buttonRadius}: 2rem;
                padding: 0.375rem 1rem;
                ${buttonTokens.buttonFontFamily}: ${h4Medium.fontFamily};
                ${buttonTokens.buttonFontSize}: ${h4Medium.fontSize};
                ${buttonTokens.buttonFontStyle}: ${h4Medium.fontStyle};
                ${buttonTokens.buttonFontWeight}: ${h4Medium.fontWeight};
                ${buttonTokens.buttonLetterSpacing}: ${h4Medium.letterSpacing};
                ${buttonTokens.buttonLineHeight}: ${h4Medium.lineHeight};

                ${buttonTokens.buttonSpinnerSize}: 1rem;

                ${buttonTokens.buttonLeftContentMargin}: 0 ${spacing3x} 0 0;
                ${buttonTokens.buttonRightContentMargin}: 0 0 0 ${spacing3x};
                ${buttonTokens.buttonValueMargin}: 0 0 0 0.25rem;
                ${buttonTokens.buttonAdditionalContentMargin}: 0 0 0 0.375rem;
                ${buttonTokens.buttonAdditionalContentMarginRightWidthValue}: 0.25rem;
            `,
            24: css`
                ${buttonTokens.buttonHeight}: 1.5rem;
                ${buttonTokens.buttonWidth}: 11.25rem;
                ${buttonTokens.buttonRadius}: 2rem;
                padding: 0.25rem 0.75rem;
                ${buttonTokens.buttonFontFamily}: ${bodySMedium.fontFamily};
                ${buttonTokens.buttonFontSize}: ${bodySMedium.fontSize};
                ${buttonTokens.buttonFontStyle}: ${bodySMedium.fontStyle};
                ${buttonTokens.buttonFontWeight}: ${bodySMedium.fontWeight};
                ${buttonTokens.buttonLetterSpacing}: ${bodySMedium.letterSpacing};
                ${buttonTokens.buttonLineHeight}: ${bodySMedium.lineHeight};

                ${buttonTokens.buttonSpinnerSize}: 1rem;

                ${buttonTokens.buttonLeftContentMargin}: 0 ${spacing2x} 0 0;
                ${buttonTokens.buttonRightContentMargin}: 0 0 0 ${spacing2x};
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
