import {
    bodyM,
    bodyMBold,
    onDarkTextPrimary,
    onLightTextAccentMinor,
    surfaceAccent,
    surfaceAccentActive,
    surfaceAccentHover,
    surfaceClear,
    surfaceSolidSecondary,
    surfaceSolidSecondaryActive,
    surfaceSolidSecondaryHover,
    surfaceTransparentAccent,
    surfaceTransparentAccentActive,
    textAccent,
    textAccentActive,
    textAccentMinor,
    textSecondary,
} from '@salutejs/sdds-themes/tokens/sdds_cs';
import { css, buttonTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'accent',
        focused: 'true',
        size: 's',
    },
    variations: {
        view: {
            accent: css`
                ${buttonTokens.buttonColor}: ${onDarkTextPrimary};
                ${buttonTokens.buttonTextColor}: ${onDarkTextPrimary};
                ${buttonTokens.buttonIconColor}: ${onDarkTextPrimary};
                ${buttonTokens.buttonValueColor}: ${onLightTextAccentMinor};
                ${buttonTokens.buttonBackgroundColor}: ${surfaceAccent};
                ${buttonTokens.buttonLoadingBackgroundColor}: var(${buttonTokens.buttonBackgroundColor});
                ${buttonTokens.buttonBackgroundColorHover}: ${surfaceAccentHover};
                ${buttonTokens.buttonBackgroundColorActive}: ${surfaceAccentActive};
            `,
            secondary: css`
                ${buttonTokens.buttonColor}: ${textAccent};
                ${buttonTokens.buttonColorHover}: ${textAccentMinor};
                ${buttonTokens.buttonColorActive}: ${textAccentActive};
                ${buttonTokens.buttonTextColor}: ${textAccent};
                ${buttonTokens.buttonIconColor}: ${textAccent};
                ${buttonTokens.buttonValueColor}: ${textSecondary};
                ${buttonTokens.buttonBackgroundColor}: ${surfaceSolidSecondary};
                ${buttonTokens.buttonLoadingBackgroundColor}: var(${buttonTokens.buttonBackgroundColor});
                ${buttonTokens.buttonBackgroundColorHover}: ${surfaceSolidSecondaryHover};
                ${buttonTokens.buttonBackgroundColorActive}: ${surfaceSolidSecondaryActive};
            `,
            clear: css`
                ${buttonTokens.buttonColor}: ${textAccent};
                ${buttonTokens.buttonTextColor}: ${textAccent};
                ${buttonTokens.buttonIconColor}: ${textAccent};
                ${buttonTokens.buttonValueColor}: ${textAccentMinor};
                ${buttonTokens.buttonBackgroundColor}: ${surfaceClear};
                ${buttonTokens.buttonLoadingBackgroundColor}: ${surfaceTransparentAccent};
                ${buttonTokens.buttonBackgroundColorHover}: ${surfaceTransparentAccent};
                ${buttonTokens.buttonBackgroundColorActive}: ${surfaceTransparentAccentActive};
            `,
        },
        size: {
            s: css`
                ${buttonTokens.buttonHeight}: 2.5rem;
                ${buttonTokens.buttonWidth}: 11.25rem;
                ${buttonTokens.buttonPadding}: 1rem;
                ${buttonTokens.buttonRadius}: 0.75rem;
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
            `,
            sr: css`
                ${buttonTokens.buttonHeight}: 2.5rem;
                ${buttonTokens.buttonWidth}: 11.25rem;
                ${buttonTokens.buttonFontFamily}: ${bodyM.fontFamily};
                ${buttonTokens.buttonFontSize}: ${bodyM.fontSize};
                ${buttonTokens.buttonFontStyle}: ${bodyM.fontStyle};
                ${buttonTokens.buttonFontWeight}: ${bodyMBold.fontWeight};
                ${buttonTokens.buttonLetterSpacing}: ${bodyM.letterSpacing};
                ${buttonTokens.buttonLineHeight}: ${bodyM.lineHeight};

                ${buttonTokens.buttonSpinnerSize}: 1.375rem;
                ${buttonTokens.buttonSpinnerColor}: inherit;

                ${buttonTokens.buttonLeftContentMargin}: 0 0.25rem 0 0;
                ${buttonTokens.buttonRightContentMargin}: 0 0 0 0.25rem;
                ${buttonTokens.buttonValueMargin}: 0 0 0 0.25rem;
                ${buttonTokens.buttonAdditionalContentMargin}: 0 0 0 0.25rem;
                ${buttonTokens.buttonAdditionalContentMarginRightWidthValue}: 0.25rem;
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
