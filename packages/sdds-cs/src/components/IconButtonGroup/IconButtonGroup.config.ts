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
import { css, iconButtonGroupTokens } from '@salutejs/plasma-new-hope/emotion';

export const config = {
    defaults: {
        view: 'accent',
        size: 's',
    },
    variations: {
        view: {
            accent: css`
                ${iconButtonGroupTokens.buttonColor}: ${onDarkTextPrimary};
                ${iconButtonGroupTokens.buttonTextColor}: ${onDarkTextPrimary};
                ${iconButtonGroupTokens.buttonValueColor}: ${onLightTextAccentMinor};
                ${iconButtonGroupTokens.buttonBackgroundColor}: ${surfaceAccent};
                ${iconButtonGroupTokens.buttonLoadingBackgroundColor}: var(${iconButtonGroupTokens.buttonBackgroundColor});
                ${iconButtonGroupTokens.buttonColorHover}: ${onDarkTextPrimary};
                ${iconButtonGroupTokens.buttonBackgroundColorHover}: ${surfaceAccentHover};
                ${iconButtonGroupTokens.buttonColorActive}: ${onDarkTextPrimary};
                ${iconButtonGroupTokens.buttonBackgroundColorActive}: ${surfaceAccentActive};
            `,
            secondary: css`
                ${iconButtonGroupTokens.buttonColor}:  ${textAccent};
                ${iconButtonGroupTokens.buttonTextColor}: ${textAccent};
                ${iconButtonGroupTokens.buttonIconColor}: ${textAccent};
                ${iconButtonGroupTokens.buttonValueColor}: ${textSecondary};
                ${iconButtonGroupTokens.buttonBackgroundColor}: ${surfaceSolidPrimary};
                ${iconButtonGroupTokens.buttonLoadingBackgroundColor}: var(${iconButtonGroupTokens.buttonBackgroundColor});
                ${iconButtonGroupTokens.buttonColorHover}: ${textAccentMinor};
                ${iconButtonGroupTokens.buttonBackgroundColorHover}: ${surfaceSolidPrimaryHover};
                ${iconButtonGroupTokens.buttonColorActive}: ${textAccentActive};
                ${iconButtonGroupTokens.buttonBackgroundColorActive}: ${surfaceSolidPrimaryActive};
            `,
            clear: css`
                ${iconButtonGroupTokens.buttonColor}: ${textAccent};
                ${iconButtonGroupTokens.buttonTextColor}: ${textAccent};
                ${iconButtonGroupTokens.buttonValueColor}: ${textAccent};
                ${iconButtonGroupTokens.buttonBackgroundColor}: ${surfaceClear};
                ${iconButtonGroupTokens.buttonLoadingBackgroundColor}: ${surfaceTransparentAccent};
                ${iconButtonGroupTokens.buttonColorHover}: ${textAccentMinor};
                ${iconButtonGroupTokens.buttonBackgroundColorHover}: ${surfaceTransparentAccent};
                ${iconButtonGroupTokens.buttonColorActive}: ${textAccentActive};
                ${iconButtonGroupTokens.buttonBackgroundColorActive}: ${surfaceClear};
            `,
        },
        size: {
            s: css`
                ${iconButtonGroupTokens.buttonSegmentedRadius}: 0.25rem;
                ${iconButtonGroupTokens.buttonSideRadius}: 0.75rem;
                ${iconButtonGroupTokens.buttonDefaultRadius}: 0.75rem;

                ${iconButtonGroupTokens.buttonHeight}: 2.5rem;
                ${iconButtonGroupTokens.buttonPadding}: 1rem;
                ${iconButtonGroupTokens.buttonFontFamily}: ${bodyS.fontFamily};
                ${iconButtonGroupTokens.buttonFontSize}: ${bodyS.fontSize};
                ${iconButtonGroupTokens.buttonFontStyle}: ${bodyS.fontStyle};
                ${iconButtonGroupTokens.buttonFontWeight}: ${bodySBold.fontWeight};
                ${iconButtonGroupTokens.buttonLetterSpacing}: ${bodyS.letterSpacing};
                ${iconButtonGroupTokens.buttonLineHeight}: ${bodyS.lineHeight};
            `,
            sr: css`
                ${iconButtonGroupTokens.buttonSegmentedRadius}: 0.25rem;
                ${iconButtonGroupTokens.buttonDefaultRadius}: 0.75rem;
                ${iconButtonGroupTokens.buttonSideRadius}: 0.75rem;

                ${iconButtonGroupTokens.buttonHeight}: 2.5rem;
                ${iconButtonGroupTokens.buttonFontFamily}: ${bodyS.fontFamily};
                ${iconButtonGroupTokens.buttonFontSize}: ${bodyS.fontSize};
                ${iconButtonGroupTokens.buttonFontStyle}: ${bodyS.fontStyle};
                ${iconButtonGroupTokens.buttonFontWeight}: ${bodySBold.fontWeight};
                ${iconButtonGroupTokens.buttonLetterSpacing}: ${bodyS.letterSpacing};
                ${iconButtonGroupTokens.buttonLineHeight}: ${bodyS.lineHeight};
            `,
        },
        orientation: {
            horizontal: css`
                ${iconButtonGroupTokens.buttonGroupOrientation}: row;
            `,
            vertical: css`
                ${iconButtonGroupTokens.buttonGroupOrientation}: column;
            `,
        },
        gap: {
            none: css`
                ${iconButtonGroupTokens.buttonGroupItemsGap}: 0;
            `,
            dense: css`
                ${iconButtonGroupTokens.buttonGroupItemsGap}: 0.125rem;
            `,
            wide: css`
                ${iconButtonGroupTokens.buttonGroupItemsGap}: 0.5rem;
            `,
        },
        shape: {
            segmented: css``,
            default: css``,
            pilled: css``,
        },
        stretching: {
            auto: css``,
            filled: css``,
        },
    },
};
