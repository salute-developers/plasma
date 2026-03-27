import {
    bodyS,
    bodySBold,
    onDarkTextPrimary,
    onLightTextAccentMinor,
    surfaceAccent,
    surfaceAccentActive,
    surfaceAccentHover,
    surfaceClear,
    surfaceSolidPrimary,
    surfaceSolidPrimaryActive,
    surfaceSolidPrimaryHover,
    surfaceTransparentAccent,
    textAccent,
    textAccentActive,
    textAccentMinor,
    textSecondary,
} from '@salutejs/sdds-themes/tokens/sdds_cs';
import { css, buttonGroupTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'accent',
        size: 's',
    },
    variations: {
        view: {
            accent: css`
                ${buttonGroupTokens.buttonColor}: ${onDarkTextPrimary};
                ${buttonGroupTokens.buttonTextColor}: ${onDarkTextPrimary};
                ${buttonGroupTokens.buttonValueColor}: ${onLightTextAccentMinor};
                ${buttonGroupTokens.buttonBackgroundColor}: ${surfaceAccent};
                ${buttonGroupTokens.buttonLoadingBackgroundColor}: var(${buttonGroupTokens.buttonBackgroundColor});
                ${buttonGroupTokens.buttonColorHover}: ${onDarkTextPrimary};
                ${buttonGroupTokens.buttonBackgroundColorHover}: ${surfaceAccentHover};
                ${buttonGroupTokens.buttonColorActive}: ${onDarkTextPrimary};
                ${buttonGroupTokens.buttonBackgroundColorActive}: ${surfaceAccentActive};
            `,
            secondary: css`
                ${buttonGroupTokens.buttonColor}:  ${textAccent};
                ${buttonGroupTokens.buttonTextColor}: ${textAccent};
                ${buttonGroupTokens.buttonIconColor}: ${textAccent};
                ${buttonGroupTokens.buttonValueColor}: ${textSecondary};
                ${buttonGroupTokens.buttonBackgroundColor}: ${surfaceSolidPrimary};
                ${buttonGroupTokens.buttonLoadingBackgroundColor}: var(${buttonGroupTokens.buttonBackgroundColor});
                ${buttonGroupTokens.buttonColorHover}: ${textAccentMinor};
                ${buttonGroupTokens.buttonBackgroundColorHover}: ${surfaceSolidPrimaryHover};
                ${buttonGroupTokens.buttonColorActive}: ${textAccentActive};
                ${buttonGroupTokens.buttonBackgroundColorActive}: ${surfaceSolidPrimaryActive};
            `,
            clear: css`
                ${buttonGroupTokens.buttonColor}: ${textAccent};
                ${buttonGroupTokens.buttonTextColor}: ${textAccent};
                ${buttonGroupTokens.buttonValueColor}: ${textAccent};
                ${buttonGroupTokens.buttonBackgroundColor}: ${surfaceClear};
                ${buttonGroupTokens.buttonLoadingBackgroundColor}: ${surfaceTransparentAccent};
                ${buttonGroupTokens.buttonColorHover}: ${textAccentMinor};
                ${buttonGroupTokens.buttonBackgroundColorHover}: ${surfaceTransparentAccent};
                ${buttonGroupTokens.buttonColorActive}: ${textAccentActive};
                ${buttonGroupTokens.buttonBackgroundColorActive}: ${surfaceClear};
            `,
        },
        size: {
            s: css`
                ${buttonGroupTokens.buttonSegmentedRadius}: 0.25rem;
                ${buttonGroupTokens.buttonSideRadius}: 0.75rem;
                ${buttonGroupTokens.buttonDefaultRadius}: 0.75rem;

                ${buttonGroupTokens.buttonHeight}: 2.5rem;
                ${buttonGroupTokens.buttonPadding}: 1rem;
                ${buttonGroupTokens.buttonFontFamily}: ${bodyS.fontFamily};
                ${buttonGroupTokens.buttonFontSize}: ${bodyS.fontSize};
                ${buttonGroupTokens.buttonFontStyle}: ${bodyS.fontStyle};
                ${buttonGroupTokens.buttonFontWeight}: ${bodySBold.fontWeight};
                ${buttonGroupTokens.buttonLetterSpacing}: ${bodyS.letterSpacing};
                ${buttonGroupTokens.buttonLineHeight}: ${bodyS.lineHeight};
            `,
            sr: css`
                ${buttonGroupTokens.buttonSegmentedRadius}: 0.25rem;
                ${buttonGroupTokens.buttonDefaultRadius}: 0.75rem;
                ${buttonGroupTokens.buttonSideRadius}: 0.75rem;

                ${buttonGroupTokens.buttonHeight}: 2.5rem;
                ${buttonGroupTokens.buttonFontFamily}: ${bodyS.fontFamily};
                ${buttonGroupTokens.buttonFontSize}: ${bodyS.fontSize};
                ${buttonGroupTokens.buttonFontStyle}: ${bodyS.fontStyle};
                ${buttonGroupTokens.buttonFontWeight}: ${bodySBold.fontWeight};
                ${buttonGroupTokens.buttonLetterSpacing}: ${bodyS.letterSpacing};
                ${buttonGroupTokens.buttonLineHeight}: ${bodyS.lineHeight};
            `,
        },
        orientation: {
            horizontal: css`
                ${buttonGroupTokens.buttonGroupOrientation}: row;
            `,
            vertical: css`
                ${buttonGroupTokens.buttonGroupOrientation}: column;
            `,
        },
        gap: {
            none: css`
                ${buttonGroupTokens.buttonGroupItemsGap}: 0;
            `,
            dense: css`
                ${buttonGroupTokens.buttonGroupItemsGap}: 0.125rem;
            `,
            wide: css`
                ${buttonGroupTokens.buttonGroupItemsGap}: 0.5rem;
            `,
        },
        shape: {
            segmented: css``,
            default: css``,
        },
        stretching: {
            auto: css``,
            filled: css``,
        },
    },
};
