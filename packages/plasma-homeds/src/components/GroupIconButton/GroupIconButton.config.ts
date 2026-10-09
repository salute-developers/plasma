import { css, groupIconButtonTokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    bodyM,
    bodyMBold,
    bodyS,
    bodySBold,
    bodyXS,
    bodyXSBold,
    inverseTextPrimary,
    inverseTextSecondary,
    onDarkTextPrimary,
    onDarkTextSecondary,
    surfaceAccent,
    surfaceAccentActive,
    surfaceAccentHover,
    surfaceClear,
    surfaceNegative,
    surfaceNegativeActive,
    surfaceNegativeHover,
    surfaceSolidDefault,
    surfaceSolidDefaultActive,
    surfaceSolidDefaultHover,
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
    textPrimaryActive,
    textPrimaryHover,
    textSecondary,
} from '@salutejs/plasma-themes/tokens/plasma_homeds';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${groupIconButtonTokens.buttonColor}: ${inverseTextPrimary};
                ${groupIconButtonTokens.buttonTextColor}: ${inverseTextPrimary};
                ${groupIconButtonTokens.buttonIconColor}: ${inverseTextPrimary};
                ${groupIconButtonTokens.buttonValueColor}: ${inverseTextSecondary};
                ${groupIconButtonTokens.buttonBackgroundColor}: ${surfaceSolidDefault};
                ${groupIconButtonTokens.buttonLoadingBackgroundColor}: var(${groupIconButtonTokens.buttonBackgroundColor});
                ${groupIconButtonTokens.buttonColorHover}: ${inverseTextPrimary};
                ${groupIconButtonTokens.buttonBackgroundColorHover}: ${surfaceSolidDefaultHover};
                ${groupIconButtonTokens.buttonColorActive}: ${inverseTextPrimary};
                ${groupIconButtonTokens.buttonBackgroundColorActive}: ${surfaceSolidDefaultActive};
            `,
            accent: css`
                ${groupIconButtonTokens.buttonColor}: ${onDarkTextPrimary};
                ${groupIconButtonTokens.buttonTextColor}: ${onDarkTextPrimary};
                ${groupIconButtonTokens.buttonIconColor}: ${onDarkTextPrimary};
                ${groupIconButtonTokens.buttonValueColor}: ${onDarkTextSecondary};
                ${groupIconButtonTokens.buttonBackgroundColor}: ${surfaceAccent};
                ${groupIconButtonTokens.buttonLoadingBackgroundColor}: var(${groupIconButtonTokens.buttonBackgroundColor});
                ${groupIconButtonTokens.buttonColorHover}: ${onDarkTextPrimary};
                ${groupIconButtonTokens.buttonBackgroundColorHover}: ${surfaceAccentHover};
                ${groupIconButtonTokens.buttonColorActive}: ${onDarkTextPrimary};
                ${groupIconButtonTokens.buttonBackgroundColorActive}: ${surfaceAccentActive};
            `,
            secondary: css`
                ${groupIconButtonTokens.buttonColor}: ${textPrimary};
                ${groupIconButtonTokens.buttonTextColor}: ${textPrimary};
                ${groupIconButtonTokens.buttonIconColor}: ${textPrimary};
                ${groupIconButtonTokens.buttonValueColor}: ${textSecondary};
                ${groupIconButtonTokens.buttonBackgroundColor}: ${surfaceTransparentSecondary};
                ${groupIconButtonTokens.buttonLoadingBackgroundColor}: var(${groupIconButtonTokens.buttonBackgroundColor});
                ${groupIconButtonTokens.buttonColorHover}: ${textPrimary};
                ${groupIconButtonTokens.buttonBackgroundColorHover}: ${surfaceTransparentSecondaryHover};
                ${groupIconButtonTokens.buttonColorActive}: ${textPrimary};
                ${groupIconButtonTokens.buttonBackgroundColorActive}: ${surfaceTransparentSecondaryActive};
            `,
            clear: css`
                ${groupIconButtonTokens.buttonColor}: ${textPrimary};
                ${groupIconButtonTokens.buttonTextColor}: ${textPrimary};
                ${groupIconButtonTokens.buttonIconColor}: ${textPrimary};
                ${groupIconButtonTokens.buttonValueColor}: ${textSecondary};
                ${groupIconButtonTokens.buttonBackgroundColor}: ${surfaceClear};
                ${groupIconButtonTokens.buttonLoadingBackgroundColor}: var(${groupIconButtonTokens.buttonBackgroundColor});
                ${groupIconButtonTokens.buttonColorHover}: ${textPrimaryHover};
                ${groupIconButtonTokens.buttonBackgroundColorHover}: ${surfaceClear};
                ${groupIconButtonTokens.buttonColorActive}: ${textPrimaryActive};
                ${groupIconButtonTokens.buttonBackgroundColorActive}: ${surfaceClear};
            `,
            warning: css`
                ${groupIconButtonTokens.buttonColor}: ${onDarkTextPrimary};
                ${groupIconButtonTokens.buttonTextColor}: ${onDarkTextPrimary};
                ${groupIconButtonTokens.buttonIconColor}: ${onDarkTextPrimary};
                ${groupIconButtonTokens.buttonValueColor}: ${onDarkTextSecondary};
                ${groupIconButtonTokens.buttonBackgroundColor}: ${surfaceWarning};
                ${groupIconButtonTokens.buttonLoadingBackgroundColor}: var(${groupIconButtonTokens.buttonBackgroundColor});
                ${groupIconButtonTokens.buttonColorHover}: ${onDarkTextPrimary};
                ${groupIconButtonTokens.buttonBackgroundColorHover}: ${surfaceWarningHover};
                ${groupIconButtonTokens.buttonColorActive}: ${onDarkTextPrimary};
                ${groupIconButtonTokens.buttonBackgroundColorActive}: ${surfaceWarningActive};
            `,
            negative: css`
                ${groupIconButtonTokens.buttonColor}: ${onDarkTextPrimary};
                ${groupIconButtonTokens.buttonTextColor}: ${onDarkTextPrimary};
                ${groupIconButtonTokens.buttonIconColor}: ${onDarkTextPrimary};
                ${groupIconButtonTokens.buttonValueColor}: ${onDarkTextSecondary};
                ${groupIconButtonTokens.buttonBackgroundColor}: ${surfaceNegative};
                ${groupIconButtonTokens.buttonLoadingBackgroundColor}: var(${groupIconButtonTokens.buttonBackgroundColor});
                ${groupIconButtonTokens.buttonColorHover}: ${onDarkTextPrimary};
                ${groupIconButtonTokens.buttonBackgroundColorHover}: ${surfaceNegativeHover};
                ${groupIconButtonTokens.buttonColorActive}: ${onDarkTextPrimary};
                ${groupIconButtonTokens.buttonBackgroundColorActive}: ${surfaceNegativeActive};
            `,
            dark: css`
                ${groupIconButtonTokens.buttonColor}: ${textPrimary};
                ${groupIconButtonTokens.buttonTextColor}: ${textPrimary};
                ${groupIconButtonTokens.buttonIconColor}: ${textPrimary};
                ${groupIconButtonTokens.buttonValueColor}: ${textSecondary};
                ${groupIconButtonTokens.buttonBackgroundColor}: ${surfaceSolidSecondary};
                ${groupIconButtonTokens.buttonLoadingBackgroundColor}: var(${groupIconButtonTokens.buttonBackgroundColor});
                ${groupIconButtonTokens.buttonColorHover}: ${textPrimary};
                ${groupIconButtonTokens.buttonBackgroundColorHover}: ${surfaceSolidSecondaryHover};
                ${groupIconButtonTokens.buttonColorActive}: ${textPrimary};
                ${groupIconButtonTokens.buttonBackgroundColorActive}: ${surfaceSolidSecondaryActive};
            `,
        },
        size: {
            m: css`
                ${groupIconButtonTokens.buttonSegmentedRadius}: 0.25rem;
                ${groupIconButtonTokens.buttonDefaultRadius}: 0.75rem;
                ${groupIconButtonTokens.buttonSideRadius}: 0.75rem;

                ${groupIconButtonTokens.buttonHeight}: 3rem;
                ${groupIconButtonTokens.buttonPadding}: 1.25rem;

                ${groupIconButtonTokens.buttonFontFamily}: ${bodyM.fontFamily};
                ${groupIconButtonTokens.buttonFontSize}: ${bodyM.fontSize};
                ${groupIconButtonTokens.buttonFontStyle}: ${bodyM.fontStyle};
                ${groupIconButtonTokens.buttonFontWeight}: ${bodyMBold.fontWeight};
                ${groupIconButtonTokens.buttonLetterSpacing}: ${bodyM.letterSpacing};
                ${groupIconButtonTokens.buttonLineHeight}: ${bodyM.lineHeight};
            `,
            s: css`
                ${groupIconButtonTokens.buttonSegmentedRadius}: 0.25rem;
                ${groupIconButtonTokens.buttonSideRadius}: 0.625rem;
                ${groupIconButtonTokens.buttonDefaultRadius}: 0.625rem;

                ${groupIconButtonTokens.buttonHeight}: 2.5rem;
                ${groupIconButtonTokens.buttonPadding}: 1rem;
                ${groupIconButtonTokens.buttonFontFamily}: ${bodyS.fontFamily};
                ${groupIconButtonTokens.buttonFontSize}: ${bodyS.fontSize};
                ${groupIconButtonTokens.buttonFontStyle}: ${bodyS.fontStyle};
                ${groupIconButtonTokens.buttonFontWeight}: ${bodySBold.fontWeight};
                ${groupIconButtonTokens.buttonLetterSpacing}: ${bodyS.letterSpacing};
                ${groupIconButtonTokens.buttonLineHeight}: ${bodyS.lineHeight};
            `,
            xs: css`
                ${groupIconButtonTokens.buttonSegmentedRadius}: 0.125rem;
                ${groupIconButtonTokens.buttonDefaultRadius}: 0.5rem;
                ${groupIconButtonTokens.buttonSideRadius}: 0.5rem;

                ${groupIconButtonTokens.buttonHeight}: 2rem;
                ${groupIconButtonTokens.buttonPadding}: 0.75rem;
                ${groupIconButtonTokens.buttonFontFamily}: ${bodyXS.fontFamily};
                ${groupIconButtonTokens.buttonFontSize}: ${bodyXS.fontSize};
                ${groupIconButtonTokens.buttonFontStyle}: ${bodyXS.fontStyle};
                ${groupIconButtonTokens.buttonFontWeight}: ${bodyXSBold.fontWeight};
                ${groupIconButtonTokens.buttonLetterSpacing}: ${bodyXS.letterSpacing};
                ${groupIconButtonTokens.buttonLineHeight}: ${bodyXS.lineHeight};
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
