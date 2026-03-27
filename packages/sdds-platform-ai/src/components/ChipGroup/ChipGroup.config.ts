import {
    bodyM,
    bodyXXS,
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
} from '@salutejs/sdds-themes/tokens/sdds_platform_ai';
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
            xxs: css`
                ${tokens.chipBorderRadius}: 0.375rem;
                ${tokens.chipWidth}: auto;
                ${tokens.chipHeight}: 1.25rem;
                ${tokens.chipPadding}: 0 0.5rem;

                ${tokens.chipFontFamily}: ${bodyXXS.fontFamily};
                ${tokens.chipFontSize}: ${bodyXXS.fontSize};
                ${tokens.chipFontStyle}: ${bodyXXS.fontStyle};
                ${tokens.chipFontWeight}: ${bodyXXS.fontWeight};
                ${tokens.chipLetterSpacing}: ${bodyXXS.letterSpacing};
                ${tokens.chipLineHeight}: ${bodyXXS.lineHeight};

                ${tokens.chipLeftContentMarginLeft}: -0.125rem;
                ${tokens.chipLeftContentMarginRight}: 0.125rem;
                ${tokens.chipRightContentMarginLeft}: 0.125rem;
                ${tokens.chipRightContentMarginRight}: -0.125rem;
                ${tokens.chipClearContentMarginLeft}: 0.25rem;
                ${tokens.chipClearContentMarginRight}: -0.25rem;
                ${tokens.chipCloseIconSize}: 0.75rem;
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
