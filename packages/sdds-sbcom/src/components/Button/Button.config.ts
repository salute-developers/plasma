import { css, buttonTokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    bodySMedium,
    h4Medium,
    onDarkTextPrimary,
    onDarkTextPrimaryActive,
    onDarkTextPrimaryHover,
    onDarkTextSecondary,
    onLightSurfaceAccent,
    onLightSurfaceSolidPrimary,
    onLightTextAccent,
    onLightTextPrimary,
    spacing2x,
    spacing3x,
    surfaceAccent,
    surfaceAccentActive,
    surfaceAccentHover,
    surfaceClear,
    surfaceNegativeActive,
    surfaceNegativeHover,
    surfacePositiveActive,
    surfacePositiveHover,
    surfaceTransparentNegative,
    surfaceTransparentSecondary,
    surfaceTransparentSecondaryActive,
    surfaceTransparentSecondaryHover,
    surfaceWarningActive,
    surfaceWarningHover,
    textAccent,
    textNegative,
    textPrimary,
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
                ${buttonTokens.buttonLoadingBackgroundColor}: var(${buttonTokens.buttonBackgroundColor});
                ${buttonTokens.buttonBackgroundColorHover}: ${surfaceAccentHover};
                ${buttonTokens.buttonBackgroundColorActive}: ${surfaceAccentActive};
            `,
            accentWhite: css`
                ${buttonTokens.buttonColor}: ${textPrimary};
                ${buttonTokens.buttonTextColor}: ${onLightTextAccent};
                ${buttonTokens.buttonSpinnerColor}: ${onLightTextAccent};
                ${buttonTokens.buttonIconColor}: ${textPrimary};
                ${buttonTokens.buttonValueColor}: ${textSecondary};
                ${buttonTokens.buttonBackgroundColor}: ${onLightSurfaceSolidPrimary};
                ${buttonTokens.buttonLoadingBackgroundColor}: var(${buttonTokens.buttonBackgroundColor});
                ${buttonTokens.buttonBackgroundColorHover}: ${surfaceTransparentSecondaryHover};
                ${buttonTokens.buttonBackgroundColorActive}: ${surfaceTransparentSecondaryActive};
            `,
            primaryWhite: css`
                ${buttonTokens.buttonColor}: ${onDarkTextPrimary};
                ${buttonTokens.buttonTextColor}: ${onLightTextPrimary};
                ${buttonTokens.buttonSpinnerColor}: ${onLightTextPrimary};
                ${buttonTokens.buttonIconColor}: ${onDarkTextPrimary};
                ${buttonTokens.buttonValueColor}: ${onDarkTextSecondary};
                ${buttonTokens.buttonBackgroundColor}: ${onLightSurfaceSolidPrimary};
                ${buttonTokens.buttonLoadingBackgroundColor}: var(${buttonTokens.buttonBackgroundColor});
                ${buttonTokens.buttonBackgroundColorHover}: ${surfacePositiveHover};
                ${buttonTokens.buttonBackgroundColorActive}: ${surfacePositiveActive};
            `,
            accentGrey: css`
                ${buttonTokens.buttonColor}: ${onDarkTextPrimary};
                ${buttonTokens.buttonTextColor}: ${textAccent};
                ${buttonTokens.buttonSpinnerColor}: ${textAccent};
                ${buttonTokens.buttonIconColor}: ${onDarkTextPrimary};
                ${buttonTokens.buttonValueColor}: ${onDarkTextSecondary};
                ${buttonTokens.buttonBackgroundColor}: ${surfaceTransparentSecondary};
                ${buttonTokens.buttonLoadingBackgroundColor}: var(${buttonTokens.buttonBackgroundColor});
                ${buttonTokens.buttonBackgroundColorHover}: ${surfaceWarningHover};
                ${buttonTokens.buttonBackgroundColorActive}: ${surfaceWarningActive};
            `,
            accentClear: css`
                ${buttonTokens.buttonColor}: ${textPrimary};
                ${buttonTokens.buttonTextColor}: ${textAccent};
                ${buttonTokens.buttonSpinnerColor}: ${textAccent};
                ${buttonTokens.buttonIconColor}: ${textPrimary};
                ${buttonTokens.buttonValueColor}: ${textSecondary};
                ${buttonTokens.buttonBackgroundColor}: ${surfaceClear};
                ${buttonTokens.buttonLoadingBackgroundColor}: var(${buttonTokens.buttonBackgroundColor});
                ${buttonTokens.buttonBackgroundColorHover}: ${surfaceTransparentSecondaryHover};
                ${buttonTokens.buttonBackgroundColorActive}: ${surfaceTransparentSecondaryActive};
            `,
            dangerTint: css`
                ${buttonTokens.buttonColor}: ${onDarkTextPrimary};
                ${buttonTokens.buttonTextColor}: ${textNegative};
                ${buttonTokens.buttonSpinnerColor}: ${textNegative};
                ${buttonTokens.buttonIconColor}: ${onDarkTextPrimary};
                ${buttonTokens.buttonValueColor}: ${onDarkTextSecondary};
                ${buttonTokens.buttonBackgroundColor}: ${surfaceTransparentNegative};
                ${buttonTokens.buttonLoadingBackgroundColor}: var(${buttonTokens.buttonBackgroundColor});
                ${buttonTokens.buttonBackgroundColorHover}: ${surfaceNegativeHover};
                ${buttonTokens.buttonBackgroundColorActive}: ${surfaceNegativeActive};
            `,
            dangerClear: css`
                ${buttonTokens.buttonColor}: ${onDarkTextPrimary};
                ${buttonTokens.buttonTextColor}: ${textNegative};
                ${buttonTokens.buttonSpinnerColor}: ${textNegative};
                ${buttonTokens.buttonIconColor}: ${onDarkTextPrimary};
                ${buttonTokens.buttonValueColor}: ${onDarkTextSecondary};
                ${buttonTokens.buttonBackgroundColor}: ${surfaceClear};
                ${buttonTokens.buttonLoadingBackgroundColor}: var(${buttonTokens.buttonBackgroundColor});
                ${buttonTokens.buttonColorHover}: ${onDarkTextPrimaryHover};
                ${buttonTokens.buttonColorActive}: ${onDarkTextPrimaryActive};
            `,
            primaryGrey: css`
                ${buttonTokens.buttonColor}: ${onDarkTextPrimary};
                ${buttonTokens.buttonTextColor}: ${textPrimary};
                ${buttonTokens.buttonSpinnerColor}: ${textPrimary};
                ${buttonTokens.buttonIconColor}: ${onDarkTextPrimary};
                ${buttonTokens.buttonValueColor}: ${onDarkTextSecondary};
                ${buttonTokens.buttonBackgroundColor}: ${surfaceTransparentSecondary};
                ${buttonTokens.buttonLoadingBackgroundColor}: var(${buttonTokens.buttonBackgroundColor});
                ${buttonTokens.buttonColorHover}: ${onDarkTextPrimaryHover};
                ${buttonTokens.buttonColorActive}: ${onDarkTextPrimaryActive};
            `,
        },
        size: {
            xl: css`
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
            l: css`
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
            m: css`
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
            s: css`
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
