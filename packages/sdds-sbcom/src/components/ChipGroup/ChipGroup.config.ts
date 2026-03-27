import {
    bodyL,
    bodyM,
    bodyS,
    bodyXS,
    inverseTextPrimary,
    onDarkTextPrimary,
    surfaceAccent,
    surfaceAccentActive,
    surfaceAccentHover,
    surfaceSolidDefault,
    surfaceSolidDefaultActive,
    surfaceSolidDefaultHover,
    surfaceTransparentSecondary,
    surfaceTransparentSecondaryActive,
    surfaceTransparentSecondaryHover,
    textPrimary,
} from '@salutejs/sdds-themes/tokens/sdds_sbcom';
import { css, chipGroupTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${tokens.chipColor}: ${inverseTextPrimary};
                ${tokens.chipBackground}: ${surfaceSolidDefault};
                ${tokens.chipColorHover}: ${inverseTextPrimary};
                ${tokens.chipBackgroundHover}: ${surfaceSolidDefaultHover};
                ${tokens.chipColorActive}: ${inverseTextPrimary};
                ${tokens.chipBackgroundActive}: ${surfaceSolidDefaultActive};
            `,
            secondary: css`
                ${tokens.chipColor}: ${textPrimary};
                ${tokens.chipBackground}: ${surfaceTransparentSecondary};
                ${tokens.chipColorHover}: ${textPrimary};
                ${tokens.chipBackgroundHover}: ${surfaceTransparentSecondaryHover};
                ${tokens.chipColorActive}: ${textPrimary};
                ${tokens.chipBackgroundActive}: ${surfaceTransparentSecondaryActive};
            `,
            accent: css`
                ${tokens.chipColor}: ${onDarkTextPrimary};
                ${tokens.chipBackground}: ${surfaceAccent};
                ${tokens.chipColorHover}: ${onDarkTextPrimary};
                ${tokens.chipBackgroundHover}: ${surfaceAccentHover};
                ${tokens.chipColorActive}: ${onDarkTextPrimary};
                ${tokens.chipBackgroundActive}: ${surfaceAccentActive};
            `,
        },
        size: {
            l: css`
                ${tokens.chipBorderRadius}: 0.75rem;
                ${tokens.chipWidth}: auto;
                ${tokens.chipHeight}: 3rem;
                ${tokens.chipPadding}: 0 1rem;

                ${tokens.chipFontFamily}: ${bodyL.fontFamily};
                ${tokens.chipFontSize}: ${bodyL.fontSize};
                ${tokens.chipFontStyle}: ${bodyL.fontStyle};
                ${tokens.chipFontWeight}: ${bodyL.fontWeight};
                ${tokens.chipLetterSpacing}: ${bodyL.letterSpacing};
                ${tokens.chipLineHeight}: ${bodyL.lineHeight};

                ${tokens.chipLeftContentMarginLeft}: -0.125rem;
                ${tokens.chipLeftContentMarginRight}: 0.5rem;
                ${tokens.chipRightContentMarginLeft}: 0.5rem;
                ${tokens.chipRightContentMarginRight}: -0.125rem;
                ${tokens.chipClearContentMarginLeft}: 0.625rem;
                ${tokens.chipClearContentMarginRight}: -0.25rem;
                ${tokens.chipCloseIconSize}: 1.5rem;
            `,
            m: css`
                ${tokens.chipBorderRadius}: 0.625rem;
                ${tokens.chipWidth}: auto;
                ${tokens.chipHeight}: 2.5rem;
                ${tokens.chipPadding}: 0 0.875rem;

                ${tokens.chipFontFamily}: ${bodyM.fontFamily};
                ${tokens.chipFontSize}: ${bodyM.fontSize};
                ${tokens.chipFontStyle}: ${bodyM.fontStyle};
                ${tokens.chipFontWeight}: ${bodyM.fontWeight};
                ${tokens.chipLetterSpacing}: ${bodyM.letterSpacing};
                ${tokens.chipLineHeight}: ${bodyM.lineHeight};

                ${tokens.chipLeftContentMarginLeft}: -0.125rem;
                ${tokens.chipLeftContentMarginRight}: 0.375rem;
                ${tokens.chipRightContentMarginLeft}: 0.375rem;
                ${tokens.chipRightContentMarginRight}: -0.125rem;
                ${tokens.chipClearContentMarginLeft}: 0.5rem;
                ${tokens.chipClearContentMarginRight}: -0.25rem;
                ${tokens.chipCloseIconSize}: 1rem;
            `,
            s: css`
                ${tokens.chipBorderRadius}: 0.5rem;
                ${tokens.chipWidth}: auto;
                ${tokens.chipHeight}: 2rem;
                ${tokens.chipPadding}: 0 0.875rem;

                ${tokens.chipFontFamily}: ${bodyS.fontFamily};
                ${tokens.chipFontSize}: ${bodyS.fontSize};
                ${tokens.chipFontStyle}: ${bodyS.fontStyle};
                ${tokens.chipFontWeight}: ${bodyS.fontWeight};
                ${tokens.chipLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.chipLineHeight}: ${bodyS.lineHeight};

                ${tokens.chipLeftContentMarginLeft}: -0.125rem;
                ${tokens.chipLeftContentMarginRight}: 0.25rem;
                ${tokens.chipRightContentMarginLeft}: 0.25rem;
                ${tokens.chipRightContentMarginRight}: -0.125rem;
                ${tokens.chipClearContentMarginLeft}: 0.375rem;
                ${tokens.chipClearContentMarginRight}: -0.25rem;
                ${tokens.chipCloseIconSize}: 1rem;
            `,
            xs: css`
                ${tokens.chipBorderRadius}: 0.375rem;
                ${tokens.chipWidth}: auto;
                ${tokens.chipHeight}: 1.5rem;
                ${tokens.chipPadding}: 0 0.625rem;

                ${tokens.chipFontFamily}: ${bodyXS.fontFamily};
                ${tokens.chipFontSize}: ${bodyXS.fontSize};
                ${tokens.chipFontStyle}: ${bodyXS.fontStyle};
                ${tokens.chipFontWeight}: ${bodyXS.fontWeight};
                ${tokens.chipLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.chipLineHeight}: ${bodyXS.lineHeight};

                ${tokens.chipLeftContentMarginLeft}: -0.125rem;
                ${tokens.chipLeftContentMarginRight}: 0.25rem;
                ${tokens.chipRightContentMarginLeft}: 0.25rem;
                ${tokens.chipRightContentMarginRight}: -0.125rem;
                ${tokens.chipClearContentMarginLeft}: 0.25rem;
                ${tokens.chipClearContentMarginRight}: -0.25rem;
                ${tokens.chipCloseIconSize}: 1rem;
            `,
        },
        gap: {
            dense: css`
                ${tokens.chipGroupItemsGap}: 0.125rem;
            `,
            wide: css`
                ${tokens.chipGroupItemsGap}: 0.5rem;
            `,
        },
    },
};
