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
    onDarkTextPrimary,
    surfaceAccent,
    surfaceAccentActive,
    surfaceAccentHover,
    surfaceClear,
    surfaceNegative,
    surfaceNegativeActive,
    surfaceNegativeHover,
    surfaceSolidDefault,
    surfaceSolidSecondary,
    surfaceSolidSecondaryActive,
    surfaceSolidSecondaryHover,
    surfaceTransparentSecondary,
    surfaceTransparentSecondaryActive,
    surfaceTransparentSecondaryHover,
    surfaceWarning,
    surfaceWarningActive,
    surfaceWarningHover,
    textPrimary,
} from '@salutejs/plasma-themes/tokens/plasma_homeds';
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
            warning: css`
                ${iconButtonTokens.iconButtonColor}: ${onDarkTextPrimary};
                ${iconButtonTokens.iconButtonBackgroundColor}: ${surfaceWarning};
                ${iconButtonTokens.iconButtonLoadingBackgroundColor}: var(${iconButtonTokens.iconButtonBackgroundColor});
                ${iconButtonTokens.iconButtonBackgroundColorHover}: ${surfaceWarningHover};
                ${iconButtonTokens.iconButtonBackgroundColorActive}: ${surfaceWarningActive};
            `,
            negative: css`
                ${iconButtonTokens.iconButtonColor}: ${onDarkTextPrimary};
                ${iconButtonTokens.iconButtonBackgroundColor}: ${surfaceNegative};
                ${iconButtonTokens.iconButtonLoadingBackgroundColor}: var(${iconButtonTokens.iconButtonBackgroundColor});
                ${iconButtonTokens.iconButtonBackgroundColorHover}: ${surfaceNegativeHover};
                ${iconButtonTokens.iconButtonBackgroundColorActive}: ${surfaceNegativeActive};
            `,
            dark: css`
                ${iconButtonTokens.iconButtonColor}: ${textPrimary};
                ${iconButtonTokens.iconButtonBackgroundColor}: ${surfaceSolidSecondary};
                ${iconButtonTokens.iconButtonLoadingBackgroundColor}: var(${iconButtonTokens.iconButtonBackgroundColor});
                ${iconButtonTokens.iconButtonBackgroundColorHover}: ${surfaceSolidSecondaryHover};
                ${iconButtonTokens.iconButtonBackgroundColorActive}: ${surfaceSolidSecondaryActive};
            `,
        },
        size: {
            l: css`
                ${iconButtonTokens.iconButtonHeight}: 3.5rem;
                ${iconButtonTokens.iconButtonWidth}: 3.5rem;
                ${iconButtonTokens.iconButtonPadding}: 1.5rem;
                ${iconButtonTokens.iconButtonRadius}: 50%;
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
                ${iconButtonTokens.iconButtonRadius}: 50%;
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
                ${iconButtonTokens.iconButtonRadius}: 50%;
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
                ${iconButtonTokens.iconButtonRadius}: 50%;
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
