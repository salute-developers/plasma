import { css } from '@linaria/core';

import { chipGroupTokens as tokens } from '../../../components/ChipGroup';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${tokens.chipColor}: var(--inverse-text-primary);
                ${tokens.chipBackground}: var(--surface-solid-default);
                ${tokens.chipColorHover}: var(--inverse-text-primary);
                ${tokens.chipBackgroundHover}: var(--surface-solid-default-hover);
                ${tokens.chipColorActive}: var(--inverse-text-primary);
                ${tokens.chipBackgroundActive}: var(--surface-solid-default-active);
            `,
            secondary: css`
                ${tokens.chipColor}: var(--text-primary);
                ${tokens.chipBackground}: var(--surface-transparent-secondary);
                ${tokens.chipColorHover}: var(--text-primary);
                ${tokens.chipBackgroundHover}: var(--surface-transparent-secondary-hover);
                ${tokens.chipColorActive}: var(--text-primary);
                ${tokens.chipBackgroundActive}: var(--surface-transparent-secondary-active);
            `,
            accent: css`
                ${tokens.chipColor}: var(--on-dark-text-primary);
                ${tokens.chipBackground}: var(--surface-accent);
                ${tokens.chipColorHover}: var(--on-dark-text-primary);
                ${tokens.chipBackgroundHover}: var(--surface-accent-hover);
                ${tokens.chipColorActive}: var(--on-dark-text-primary);
                ${tokens.chipBackgroundActive}: var(--surface-accent-active);
            `,
        },
        size: {
            l: css`
                ${tokens.chipBorderRadius}: 0.75rem;
                ${tokens.chipWidth}: auto;
                ${tokens.chipHeight}: 3rem;
                ${tokens.chipPadding}: 0 1rem;

                ${tokens.chipFontFamily}: var(--plasma-typo-body-l-font-family);
                ${tokens.chipFontSize}: var(--plasma-typo-body-l-font-size);
                ${tokens.chipFontStyle}: var(--plasma-typo-body-l-font-style);
                ${tokens.chipFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${tokens.chipLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${tokens.chipLineHeight}: var(--plasma-typo-body-l-line-height);

                ${tokens.chipLeftContentMarginLeft}: -0.125rem;
                ${tokens.chipLeftContentMarginRight}: 0.5rem;
                ${tokens.chipClearContentMarginLeft}: 0.625rem;
                ${tokens.chipClearContentMarginRight}: -0.25rem;
                ${tokens.chipCloseIconSize}: 1.5rem;
            `,
            m: css`
                ${tokens.chipBorderRadius}: 0.625rem;
                ${tokens.chipWidth}: auto;
                ${tokens.chipHeight}: 2.5rem;
                ${tokens.chipPadding}: 0 0.875rem;

                ${tokens.chipFontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.chipFontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.chipFontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.chipFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tokens.chipLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.chipLineHeight}: var(--plasma-typo-body-m-line-height);

                ${tokens.chipLeftContentMarginLeft}: -0.125rem;
                ${tokens.chipLeftContentMarginRight}: 0.375rem;
                ${tokens.chipClearContentMarginLeft}: 0.5rem;
                ${tokens.chipClearContentMarginRight}: -0.25rem;
                ${tokens.chipCloseIconSize}: 1rem;
            `,
            s: css`
                ${tokens.chipBorderRadius}: 0.5rem;
                ${tokens.chipWidth}: auto;
                ${tokens.chipHeight}: 2rem;
                ${tokens.chipPadding}: 0 0.875rem;

                ${tokens.chipFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.chipFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.chipFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.chipFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.chipLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.chipLineHeight}: var(--plasma-typo-body-s-line-height);

                ${tokens.chipLeftContentMarginLeft}: -0.125rem;
                ${tokens.chipLeftContentMarginRight}: 0.25rem;
                ${tokens.chipClearContentMarginLeft}: 0.375rem;
                ${tokens.chipClearContentMarginRight}: -0.25rem;
                ${tokens.chipCloseIconSize}: 1rem;
            `,
            xs: css`
                ${tokens.chipBorderRadius}: 0.375rem;
                ${tokens.chipWidth}: auto;
                ${tokens.chipHeight}: 1.5rem;
                ${tokens.chipPadding}: 0 0.625rem;

                ${tokens.chipFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.chipFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.chipFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.chipFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.chipLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.chipLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.chipLeftContentMarginLeft}: -0.125rem;
                ${tokens.chipLeftContentMarginRight}: 0.25rem;
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
