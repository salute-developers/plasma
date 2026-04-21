import { css, chipGroupTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    /*
     * NOTE: Mixed DS tokens + raw vars. Prefer @salutejs-ds/sdds_sbcom/theme/tokens where possible.
     * Missing tokens in @salutejs/sdds-themes/tokens: bodyM, bodyXs, surfaceAccent, surfaceAccentActive
     * surfaceAccentHover
     */
    bodyL,
    bodyS,
    inverseTextPrimary,
    onDarkTextPrimary,
    surfaceSolidDefault,
    surfaceSolidDefaultActive,
    surfaceSolidDefaultHover,
    surfaceTransparentSecondary,
    surfaceTransparentSecondaryActive,
    surfaceTransparentSecondaryHover,
    textPrimary,
} from '@salutejs-ds/sdds_sbcom/theme/tokens';

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
                /* NOTE: no token surfaceAccent in @salutejs/sdds-themes/tokens */
                ${tokens.chipBackground}: var(--surface-accent);
                ${tokens.chipColorHover}: ${onDarkTextPrimary};
                /* NOTE: no token surfaceAccentHover in @salutejs/sdds-themes/tokens */
                ${tokens.chipBackgroundHover}: var(--surface-accent-hover);
                ${tokens.chipColorActive}: ${onDarkTextPrimary};
                /* NOTE: no token surfaceAccentActive in @salutejs/sdds-themes/tokens */
                ${tokens.chipBackgroundActive}: var(--surface-accent-active);
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

                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${tokens.chipFontFamily}: var(--plasma-typo-body-m-font-family);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${tokens.chipFontSize}: var(--plasma-typo-body-m-font-size);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${tokens.chipFontStyle}: var(--plasma-typo-body-m-font-style);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${tokens.chipFontWeight}: var(--plasma-typo-body-m-font-weight);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${tokens.chipLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${tokens.chipLineHeight}: var(--plasma-typo-body-m-line-height);

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

                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.chipFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.chipFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.chipFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.chipFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.chipLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.chipLineHeight}: var(--plasma-typo-body-xs-line-height);

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
