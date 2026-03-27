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
    onDarkSurfaceSolidDefault,
    onDarkTextPrimary,
    onDarkTextPrimaryActive,
    onDarkTextPrimaryHover,
    onLightSurfaceSolidDefault,
    onLightSurfaceTransparentDeep,
    onLightTextPrimary,
    onLightTextPrimaryActive,
    onLightTextPrimaryHover,
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
} from '@salutejs/plasma-themes/tokens/plasma_giga';
import { css, iconButtonTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        focused: 'true',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${iconButtonTokens.iconButtonColor}: ${inverseTextPrimary};
                ${iconButtonTokens.iconButtonBackgroundColor}: ${surfaceSolidDefault};
                ${iconButtonTokens.iconButtonLoadingBackgroundColor}: var(${iconButtonTokens.iconButtonBackgroundColor});
                ${iconButtonTokens.iconButtonColorHover}: ${inverseTextPrimaryHover};
                ${iconButtonTokens.iconButtonColorActive}: ${inverseTextPrimaryActive};
            `,
            accent: css`
                ${iconButtonTokens.iconButtonColor}: ${onDarkTextPrimary};
                ${iconButtonTokens.iconButtonBackgroundColor}: ${surfaceAccent};
                ${iconButtonTokens.iconButtonLoadingBackgroundColor}: var(${iconButtonTokens.iconButtonBackgroundColor});
                ${iconButtonTokens.iconButtonBackgroundColorHover}: ${surfaceAccentHover};
                ${iconButtonTokens.iconButtonBackgroundColorActive}: ${surfaceAccentActive};
            `,
            secondary: css`
                ${iconButtonTokens.iconButtonColor}: ${textPrimary};
                ${iconButtonTokens.iconButtonBackgroundColor}: ${surfaceTransparentSecondary};
                ${iconButtonTokens.iconButtonLoadingBackgroundColor}: var(${iconButtonTokens.iconButtonBackgroundColor});
                ${iconButtonTokens.iconButtonBackgroundColorHover}: ${surfaceTransparentSecondaryHover};
                ${iconButtonTokens.iconButtonBackgroundColorActive}: ${surfaceTransparentSecondaryActive};
            `,
            clear: css`
                ${iconButtonTokens.iconButtonColor}: ${textPrimary};
                ${iconButtonTokens.iconButtonBackgroundColor}: ${surfaceClear};
                ${iconButtonTokens.iconButtonLoadingBackgroundColor}: var(${iconButtonTokens.iconButtonBackgroundColor});
                ${iconButtonTokens.iconButtonBackgroundColorHover}: ${surfaceTransparentSecondaryHover};
                ${iconButtonTokens.iconButtonBackgroundColorActive}: ${surfaceTransparentSecondaryActive};
            `,
            success: css`
                ${iconButtonTokens.iconButtonColor}: ${onDarkTextPrimary};
                ${iconButtonTokens.iconButtonBackgroundColor}: ${surfacePositive};
                ${iconButtonTokens.iconButtonLoadingBackgroundColor}: var(${iconButtonTokens.iconButtonBackgroundColor});
                ${iconButtonTokens.iconButtonBackgroundColorHover}: ${surfacePositiveHover};
                ${iconButtonTokens.iconButtonBackgroundColorActive}: ${surfacePositiveActive};
            `,
            warning: css`
                ${iconButtonTokens.iconButtonColor}: ${onDarkTextPrimary};
                ${iconButtonTokens.iconButtonBackgroundColor}: ${surfaceWarning};
                ${iconButtonTokens.iconButtonLoadingBackgroundColor}: var(${iconButtonTokens.iconButtonBackgroundColor});
                ${iconButtonTokens.iconButtonBackgroundColorHover}: ${surfaceWarningHover};
                ${iconButtonTokens.iconButtonBackgroundColorActive}: ${surfaceWarningActive};
            `,
            critical: css`
                ${iconButtonTokens.iconButtonColor}: ${onDarkTextPrimary};
                ${iconButtonTokens.iconButtonBackgroundColor}: ${surfaceNegative};
                ${iconButtonTokens.iconButtonLoadingBackgroundColor}: var(${iconButtonTokens.iconButtonBackgroundColor});
                ${iconButtonTokens.iconButtonBackgroundColorHover}: ${surfaceNegativeHover};
                ${iconButtonTokens.iconButtonBackgroundColorActive}: ${surfaceNegativeActive};
            `,
            dark: css`
                ${iconButtonTokens.iconButtonColor}: ${onDarkTextPrimary};
                ${iconButtonTokens.iconButtonBackgroundColor}: ${onLightSurfaceTransparentDeep};
                ${iconButtonTokens.iconButtonLoadingBackgroundColor}: var(${iconButtonTokens.iconButtonBackgroundColor});
                ${iconButtonTokens.iconButtonColorHover}: ${onDarkTextPrimaryHover};
                ${iconButtonTokens.iconButtonColorActive}: ${onDarkTextPrimaryActive};
            `,
            black: css`
                ${iconButtonTokens.iconButtonColor}: ${onDarkTextPrimary};
                ${iconButtonTokens.iconButtonBackgroundColor}: ${onLightSurfaceSolidDefault};
                ${iconButtonTokens.iconButtonLoadingBackgroundColor}: var(${iconButtonTokens.iconButtonBackgroundColor});
                ${iconButtonTokens.iconButtonColorHover}: ${onDarkTextPrimaryHover};
                ${iconButtonTokens.iconButtonColorActive}: ${onDarkTextPrimaryActive};
            `,
            white: css`
                ${iconButtonTokens.iconButtonColor}: ${onLightTextPrimary};
                ${iconButtonTokens.iconButtonBackgroundColor}: ${onDarkSurfaceSolidDefault};
                ${iconButtonTokens.iconButtonLoadingBackgroundColor}: var(${iconButtonTokens.iconButtonBackgroundColor});
                ${iconButtonTokens.iconButtonColorHover}: ${onLightTextPrimaryHover};
                ${iconButtonTokens.iconButtonColorActive}: ${onLightTextPrimaryActive};
            `,
        },
        size: {
            xl: css`
                ${iconButtonTokens.iconButtonHeight}: 4rem;
                ${iconButtonTokens.iconButtonWidth}: 4rem;
                ${iconButtonTokens.iconButtonPadding}: 1.75rem;
                ${iconButtonTokens.iconButtonRadius}: 1rem;
                ${iconButtonTokens.iconButtonFontFamily}: ${bodyL.fontFamily};
                ${iconButtonTokens.iconButtonFontSize}: ${bodyL.fontSize};
                ${iconButtonTokens.iconButtonFontStyle}: ${bodyL.fontStyle};
                ${iconButtonTokens.iconButtonFontWeight}: ${bodyLBold.fontWeight};
                ${iconButtonTokens.iconButtonLetterSpacing}: ${bodyL.letterSpacing};
                ${iconButtonTokens.iconButtonLineHeight}: ${bodyL.lineHeight};

                ${iconButtonTokens.iconButtonSpinnerSize}: 1.5rem;
                ${iconButtonTokens.iconButtonSpinnerColor}: inherit;
            `,
            l: css`
                ${iconButtonTokens.iconButtonHeight}: 3.5rem;
                ${iconButtonTokens.iconButtonWidth}: 3.5rem;
                ${iconButtonTokens.iconButtonPadding}: 1.5rem;
                ${iconButtonTokens.iconButtonRadius}: 0.875rem;
                ${iconButtonTokens.iconButtonFontFamily}: ${bodyL.fontFamily};
                ${iconButtonTokens.iconButtonFontSize}: ${bodyL.fontSize};
                ${iconButtonTokens.iconButtonFontStyle}: ${bodyL.fontStyle};
                ${iconButtonTokens.iconButtonFontWeight}: ${bodyLBold.fontWeight};
                ${iconButtonTokens.iconButtonLetterSpacing}: ${bodyL.letterSpacing};
                ${iconButtonTokens.iconButtonLineHeight}: ${bodyL.lineHeight};

                ${iconButtonTokens.iconButtonSpinnerSize}: 1.375rem;
                ${iconButtonTokens.iconButtonSpinnerColor}: inherit;
            `,
            m: css`
                ${iconButtonTokens.iconButtonHeight}: 3rem;
                ${iconButtonTokens.iconButtonWidth}: 3rem;
                ${iconButtonTokens.iconButtonPadding}: 1.25rem;
                ${iconButtonTokens.iconButtonRadius}: 0.75rem;
                ${iconButtonTokens.iconButtonFontFamily}: ${bodyM.fontFamily};
                ${iconButtonTokens.iconButtonFontSize}: ${bodyM.fontSize};
                ${iconButtonTokens.iconButtonFontStyle}: ${bodyM.fontStyle};
                ${iconButtonTokens.iconButtonFontWeight}: ${bodyMBold.fontWeight};
                ${iconButtonTokens.iconButtonLetterSpacing}: ${bodyM.letterSpacing};
                ${iconButtonTokens.iconButtonLineHeight}: ${bodyM.lineHeight};

                ${iconButtonTokens.iconButtonSpinnerSize}: 1.375rem;
                ${iconButtonTokens.iconButtonSpinnerColor}: inherit;
            `,
            s: css`
                ${iconButtonTokens.iconButtonHeight}: 2.5rem;
                ${iconButtonTokens.iconButtonWidth}: 2.5rem;
                ${iconButtonTokens.iconButtonPadding}: 1rem;
                ${iconButtonTokens.iconButtonRadius}: 0.625rem;
                ${iconButtonTokens.iconButtonFontFamily}: ${bodyS.fontFamily};
                ${iconButtonTokens.iconButtonFontSize}: ${bodyS.fontSize};
                ${iconButtonTokens.iconButtonFontStyle}: ${bodyS.fontStyle};
                ${iconButtonTokens.iconButtonFontWeight}: ${bodySBold.fontWeight};
                ${iconButtonTokens.iconButtonLetterSpacing}: ${bodyS.letterSpacing};
                ${iconButtonTokens.iconButtonLineHeight}: ${bodyS.lineHeight};

                ${iconButtonTokens.iconButtonSpinnerSize}: 1.375rem;
                ${iconButtonTokens.iconButtonSpinnerColor}: inherit;
            `,
            xs: css`
                ${iconButtonTokens.iconButtonHeight}: 2rem;
                ${iconButtonTokens.iconButtonWidth}: 2rem;
                ${iconButtonTokens.iconButtonPadding}: 0.75rem;
                ${iconButtonTokens.iconButtonRadius}: 0.5rem;
                ${iconButtonTokens.iconButtonFontFamily}: ${bodyXS.fontFamily};
                ${iconButtonTokens.iconButtonFontSize}: ${bodyXS.fontSize};
                ${iconButtonTokens.iconButtonFontStyle}: ${bodyXS.fontStyle};
                ${iconButtonTokens.iconButtonFontWeight}: ${bodyXSBold.fontWeight};
                ${iconButtonTokens.iconButtonLetterSpacing}: ${bodyXS.letterSpacing};
                ${iconButtonTokens.iconButtonLineHeight}: ${bodyXS.lineHeight};

                ${iconButtonTokens.iconButtonSpinnerSize}: 1rem;
                ${iconButtonTokens.iconButtonSpinnerColor}: inherit;
            `,
        },
        disabled: {
            true: css`
                ${iconButtonTokens.iconButtonDisabledOpacity}: 0.4;
            `,
        },
        focused: {
            true: css`
                ${iconButtonTokens.iconButtonFocusColor}: ${surfaceAccent};
            `,
        },
    },
};
