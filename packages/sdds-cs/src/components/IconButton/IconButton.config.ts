import {
    bodyS,
    bodySBold,
    onDarkTextPrimary,
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
} from '@salutejs/sdds-themes/tokens/sdds_cs';
import { css, iconButtonTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'accent',
        focused: 'true',
        size: 's',
    },
    variations: {
        view: {
            accent: css`
                ${iconButtonTokens.iconButtonColor}: ${onDarkTextPrimary};
                ${iconButtonTokens.iconButtonBackgroundColor}: ${surfaceAccent};
                ${iconButtonTokens.iconButtonLoadingBackgroundColor}: var(${iconButtonTokens.iconButtonBackgroundColor});
                ${iconButtonTokens.iconButtonBackgroundColorHover}: ${surfaceAccentHover};
                ${iconButtonTokens.iconButtonBackgroundColorActive}: ${surfaceAccentActive};
            `,
            secondary: css`
                ${iconButtonTokens.iconButtonColor}: ${textAccent};
                ${iconButtonTokens.iconButtonColorHover}: ${textAccentMinor};
                
                ${iconButtonTokens.iconButtonBackgroundColor}: ${surfaceSolidSecondary};
                ${iconButtonTokens.iconButtonBackgroundColorHover}: ${surfaceSolidSecondaryHover};
                ${iconButtonTokens.iconButtonBackgroundColorActive}: ${surfaceSolidSecondaryActive};
                ${iconButtonTokens.iconButtonLoadingBackgroundColor}: var(${iconButtonTokens.iconButtonBackgroundColor});
                
                ${iconButtonTokens.iconButtonColorActive}: ${textAccentActive};
            `,
            clear: css`
                ${iconButtonTokens.iconButtonColor}: ${textAccent};
                ${iconButtonTokens.iconButtonBackgroundColor}: ${surfaceClear};
                ${iconButtonTokens.iconButtonLoadingBackgroundColor}: ${surfaceTransparentAccent};
                ${iconButtonTokens.iconButtonBackgroundColorHover}: ${surfaceTransparentAccent};
                ${iconButtonTokens.iconButtonBackgroundColorActive}: ${surfaceTransparentAccentActive};
            `,
        },
        size: {
            s: css`
                ${iconButtonTokens.iconButtonHeight}: 2.5rem;
                ${iconButtonTokens.iconButtonWidth}: 2.5rem;
                ${iconButtonTokens.iconButtonPadding}: 1rem;
                ${iconButtonTokens.iconButtonRadius}: 0.75rem;
                ${iconButtonTokens.iconButtonFontFamily}: ${bodyS.fontFamily};
                ${iconButtonTokens.iconButtonFontSize}: ${bodyS.fontSize};
                ${iconButtonTokens.iconButtonFontStyle}: ${bodyS.fontStyle};
                ${iconButtonTokens.iconButtonFontWeight}: ${bodySBold.fontWeight};
                ${iconButtonTokens.iconButtonLetterSpacing}: ${bodyS.letterSpacing};
                ${iconButtonTokens.iconButtonLineHeight}: ${bodyS.lineHeight};

                ${iconButtonTokens.iconButtonSpinnerSize}: 1.375rem;
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
