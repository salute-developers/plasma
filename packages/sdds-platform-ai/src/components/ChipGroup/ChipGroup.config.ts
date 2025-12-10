import { css, chipGroupTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';

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

                ${tokens.chipFontFamily}: var(--plasma-typo-body-xxs-font-family);
                ${tokens.chipFontSize}: var(--plasma-typo-body-xxs-font-size);
                ${tokens.chipFontStyle}: var(--plasma-typo-body-xxs-font-style);
                ${tokens.chipFontWeight}: var(--plasma-typo-body-xxs-font-weight);
                ${tokens.chipLetterSpacing}: var(--plasma-typo-body-xxs-letter-spacing);
                ${tokens.chipLineHeight}: var(--plasma-typo-body-xxs-line-height);

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
