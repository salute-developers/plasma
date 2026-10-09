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
import { css, groupIconButtonTokens } from '@salutejs/plasma-new-hope/emotion';

export const config = {
    defaults: {
        view: 'accent',
        size: 's',
    },
    variations: {
        view: {
            accent: css`
                ${groupIconButtonTokens.buttonColor}: ${onDarkTextPrimary};
                ${groupIconButtonTokens.buttonTextColor}: ${onDarkTextPrimary};
                ${groupIconButtonTokens.buttonValueColor}: ${onLightTextAccentMinor};
                ${groupIconButtonTokens.buttonBackgroundColor}: ${surfaceAccent};
                ${groupIconButtonTokens.buttonLoadingBackgroundColor}: var(${groupIconButtonTokens.buttonBackgroundColor});
                ${groupIconButtonTokens.buttonColorHover}: ${onDarkTextPrimary};
                ${groupIconButtonTokens.buttonBackgroundColorHover}: ${surfaceAccentHover};
                ${groupIconButtonTokens.buttonColorActive}: ${onDarkTextPrimary};
                ${groupIconButtonTokens.buttonBackgroundColorActive}: ${surfaceAccentActive};
            `,
            secondary: css`
                ${groupIconButtonTokens.buttonColor}:  ${textAccent};
                ${groupIconButtonTokens.buttonTextColor}: ${textAccent};
                ${groupIconButtonTokens.buttonIconColor}: ${textAccent};
                ${groupIconButtonTokens.buttonValueColor}: ${textSecondary};
                ${groupIconButtonTokens.buttonBackgroundColor}: ${surfaceSolidPrimary};
                ${groupIconButtonTokens.buttonLoadingBackgroundColor}: var(${groupIconButtonTokens.buttonBackgroundColor});
                ${groupIconButtonTokens.buttonColorHover}: ${textAccentMinor};
                ${groupIconButtonTokens.buttonBackgroundColorHover}: ${surfaceSolidPrimaryHover};
                ${groupIconButtonTokens.buttonColorActive}: ${textAccentActive};
                ${groupIconButtonTokens.buttonBackgroundColorActive}: ${surfaceSolidPrimaryActive};
            `,
            clear: css`
                ${groupIconButtonTokens.buttonColor}: ${textAccent};
                ${groupIconButtonTokens.buttonTextColor}: ${textAccent};
                ${groupIconButtonTokens.buttonValueColor}: ${textAccent};
                ${groupIconButtonTokens.buttonBackgroundColor}: ${surfaceClear};
                ${groupIconButtonTokens.buttonLoadingBackgroundColor}: ${surfaceTransparentAccent};
                ${groupIconButtonTokens.buttonColorHover}: ${textAccentMinor};
                ${groupIconButtonTokens.buttonBackgroundColorHover}: ${surfaceTransparentAccent};
                ${groupIconButtonTokens.buttonColorActive}: ${textAccentActive};
                ${groupIconButtonTokens.buttonBackgroundColorActive}: ${surfaceClear};
            `,
        },
        size: {
            s: css`
                ${groupIconButtonTokens.buttonSegmentedRadius}: 0.25rem;
                ${groupIconButtonTokens.buttonSideRadius}: 0.75rem;
                ${groupIconButtonTokens.buttonDefaultRadius}: 0.75rem;

                ${groupIconButtonTokens.buttonHeight}: 2.5rem;
                ${groupIconButtonTokens.buttonPadding}: 1rem;
                ${groupIconButtonTokens.buttonFontFamily}: ${bodyS.fontFamily};
                ${groupIconButtonTokens.buttonFontSize}: ${bodyS.fontSize};
                ${groupIconButtonTokens.buttonFontStyle}: ${bodyS.fontStyle};
                ${groupIconButtonTokens.buttonFontWeight}: ${bodySBold.fontWeight};
                ${groupIconButtonTokens.buttonLetterSpacing}: ${bodyS.letterSpacing};
                ${groupIconButtonTokens.buttonLineHeight}: ${bodyS.lineHeight};
            `,
            sr: css`
                ${groupIconButtonTokens.buttonSegmentedRadius}: 0.25rem;
                ${groupIconButtonTokens.buttonDefaultRadius}: 0.75rem;
                ${groupIconButtonTokens.buttonSideRadius}: 0.75rem;

                ${groupIconButtonTokens.buttonHeight}: 2.5rem;
                ${groupIconButtonTokens.buttonFontFamily}: ${bodyS.fontFamily};
                ${groupIconButtonTokens.buttonFontSize}: ${bodyS.fontSize};
                ${groupIconButtonTokens.buttonFontStyle}: ${bodyS.fontStyle};
                ${groupIconButtonTokens.buttonFontWeight}: ${bodySBold.fontWeight};
                ${groupIconButtonTokens.buttonLetterSpacing}: ${bodyS.letterSpacing};
                ${groupIconButtonTokens.buttonLineHeight}: ${bodyS.lineHeight};
            `,
        },
        orientation: {
            horizontal: css`
                ${groupIconButtonTokens.buttonGroupOrientation}: row;
            `,
            vertical: css`
                ${groupIconButtonTokens.buttonGroupOrientation}: column;
            `,
        },
        gap: {
            none: css`
                ${groupIconButtonTokens.buttonGroupItemsGap}: 0;
            `,
            dense: css`
                ${groupIconButtonTokens.buttonGroupItemsGap}: 0.125rem;
            `,
            wide: css`
                ${groupIconButtonTokens.buttonGroupItemsGap}: 0.5rem;
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
