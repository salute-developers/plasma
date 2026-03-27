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
    onDarkSurfaceSolidDefault,
    onDarkTextPrimary,
    onDarkTextPrimaryActive,
    onDarkTextPrimaryHover,
    onLightSurfaceTransparentDeep,
    onLightTextPrimary,
    onLightTextPrimaryActive,
    onLightTextPrimaryHover,
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
    surfaceSolidDefaultActive,
    surfaceSolidDefaultHover,
    surfaceTransparentSecondaryActive,
    surfaceTransparentSecondaryHover,
    surfaceWarning,
    surfaceWarningActive,
    surfaceWarningHover,
    textAccent,
    textPrimary,
} from '@salutejs/sdds-themes/tokens/sdds_platform_ai';
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
                ${iconButtonTokens.iconButtonBackgroundColorHover}: ${surfaceSolidDefaultHover};
                ${iconButtonTokens.iconButtonBackgroundColorActive}: ${surfaceSolidDefaultActive};

                ${iconButtonTokens.iconButtonLoadingBackgroundColor}: var(${iconButtonTokens.iconButtonBackgroundColor});
            `,
            accent: css`
                ${iconButtonTokens.iconButtonColor}: ${textPrimary};
                ${iconButtonTokens.iconButtonBackgroundColor}: ${surfaceAccentGradient};

                ${iconButtonTokens.iconButtonLoadingBackgroundColor}: var(${iconButtonTokens.iconButtonBackgroundColor});
            `,
            secondary: css`
                ${iconButtonTokens.iconButtonColor}: ${textPrimary};

                ${iconButtonTokens.iconButtonBackgroundColor}: transparent;

                ${iconButtonTokens.iconButtonLoadingBackgroundColor}: var(${iconButtonTokens.iconButtonBackgroundColor});

                ${iconButtonTokens.iconButtonBorderColor}: ${textPrimary};
                ${iconButtonTokens.iconButtonBorderColorHover}: ${textPrimary};
                ${iconButtonTokens.iconButtonBorderColorActive}: ${textPrimary};
            `,
            clear: css`
                ${iconButtonTokens.iconButtonColor}: ${textPrimary};

                ${iconButtonTokens.iconButtonBackgroundColor}: ${surfaceClear};
                ${iconButtonTokens.iconButtonBackgroundColorHover}: ${surfaceTransparentSecondaryHover};
                ${iconButtonTokens.iconButtonBackgroundColorActive}: ${surfaceTransparentSecondaryActive};

                ${iconButtonTokens.iconButtonLoadingBackgroundColor}: var(${iconButtonTokens.iconButtonBackgroundColor});
            `,
            positive: css`
                ${iconButtonTokens.iconButtonColor}: ${onDarkTextPrimary};

                ${iconButtonTokens.iconButtonBackgroundColor}: ${surfacePositive};
                ${iconButtonTokens.iconButtonBackgroundColorHover}: ${surfacePositiveHover};
                ${iconButtonTokens.iconButtonBackgroundColorActive}: ${surfacePositiveActive};

                ${iconButtonTokens.iconButtonLoadingBackgroundColor}: var(${iconButtonTokens.iconButtonBackgroundColor});
            `,
            warning: css`
                ${iconButtonTokens.iconButtonColor}: ${onDarkTextPrimary};

                ${iconButtonTokens.iconButtonBackgroundColor}: ${surfaceWarning};
                ${iconButtonTokens.iconButtonBackgroundColorHover}: ${surfaceWarningHover};
                ${iconButtonTokens.iconButtonBackgroundColorActive}: ${surfaceWarningActive};

                ${iconButtonTokens.iconButtonLoadingBackgroundColor}: var(${iconButtonTokens.iconButtonBackgroundColor});
            `,
            negative: css`
                ${iconButtonTokens.iconButtonColor}: ${onDarkTextPrimary};

                ${iconButtonTokens.iconButtonBackgroundColor}: ${surfaceNegative};
                ${iconButtonTokens.iconButtonBackgroundColorHover}: ${surfaceNegativeHover};
                ${iconButtonTokens.iconButtonBackgroundColorActive}: ${surfaceNegativeActive};
                ${iconButtonTokens.iconButtonLoadingBackgroundColor}: var(${iconButtonTokens.iconButtonBackgroundColor});
            `,
            dark: css`
                ${iconButtonTokens.iconButtonColor}: ${onDarkTextPrimary};
                ${iconButtonTokens.iconButtonColorHover}: ${onDarkTextPrimaryHover};
                ${iconButtonTokens.iconButtonColorActive}: ${onDarkTextPrimaryActive};

                ${iconButtonTokens.iconButtonBackgroundColor}: ${onLightSurfaceTransparentDeep};
                ${iconButtonTokens.iconButtonLoadingBackgroundColor}: var(${iconButtonTokens.iconButtonBackgroundColor});
            `,
            black: css`
                ${iconButtonTokens.iconButtonColor}: ${textAccent};

                ${iconButtonTokens.iconButtonBackgroundColor}: ${surfaceSolidDefault};
                ${iconButtonTokens.iconButtonLoadingBackgroundColor}: var(${iconButtonTokens.iconButtonBackgroundColor});
            `,
            white: css`
                ${iconButtonTokens.iconButtonColor}: ${onLightTextPrimary};
                ${iconButtonTokens.iconButtonColorHover}: ${onLightTextPrimaryHover};
                ${iconButtonTokens.iconButtonColorActive}: ${onLightTextPrimaryActive};

                ${iconButtonTokens.iconButtonBackgroundColor}: ${onDarkSurfaceSolidDefault};
                ${iconButtonTokens.iconButtonLoadingBackgroundColor}: var(${iconButtonTokens.iconButtonBackgroundColor});
            `,
        },
        size: {
            xl: css`
                ${iconButtonTokens.iconButtonHeight}: 4rem;
                ${iconButtonTokens.iconButtonWidth}: 4.25rem;
                ${iconButtonTokens.iconButtonPadding}: 1.375rem;
                ${iconButtonTokens.iconButtonRadius}: 1.75rem;

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
                ${iconButtonTokens.iconButtonWidth}: 3.25rem;
                ${iconButtonTokens.iconButtonPadding}: 0.875rem;
                ${iconButtonTokens.iconButtonRadius}: 1.25rem;

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
                ${iconButtonTokens.iconButtonWidth}: 2.75rem;

                ${iconButtonTokens.iconButtonPadding}: 1rem;
                ${iconButtonTokens.iconButtonRadius}: 1.125rem;

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
