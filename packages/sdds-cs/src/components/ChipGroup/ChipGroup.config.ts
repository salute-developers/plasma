import { css, chipGroupTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 's',
    },
    variations: {
        view: {
            default: css`
                ${tokens.chipColor}: var(--inverse-text-primary);
                ${tokens.chipBackground}: var(--surface-solid-default);
                ${tokens.chipColorHover}: var(--inverse-text-primary);
                ${tokens.chipBackgroundHover}: var(--surface-solid-default);
                ${tokens.chipColorActive}: var(--inverse-text-primary);
                ${tokens.chipBackgroundActive}: var(--surface-solid-default);
            `,
            secondary: css`
                ${tokens.chipColor}: var(--text-primary);
                ${tokens.chipBackground}: var(--surface-solid-primary);
                ${tokens.chipColorHover}: var(--text-primary);
                ${tokens.chipBackgroundHover}: var(--surface-solid-primary);
                ${tokens.chipColorActive}: var(--text-primary);
                ${tokens.chipBackgroundActive}: var(--surface-solid-primary);
            `,
            accent: css`
                ${tokens.chipColor}: var(--on-dark-text-primary);
                ${tokens.chipBackground}: var(--surface-accent);
                ${tokens.chipColorHover}: var(--on-dark-text-primary);
                ${tokens.chipBackgroundHover}: var(--surface-accent);
                ${tokens.chipColorActive}: var(--on-dark-text-primary);
                ${tokens.chipBackgroundActive}: var(--surface-accent);
            `,
        },
        size: {
            s: css`
                ${tokens.chipBorderRadius}: 0.5rem;
                ${tokens.chipWidth}: auto;
                ${tokens.chipHeight}: 2.5rem;
                ${tokens.chipPadding}: 0 1rem;

                ${tokens.chipFontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.chipFontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.chipFontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.chipFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tokens.chipLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.chipLineHeight}: var(--plasma-typo-body-m-line-height);

                ${tokens.chipLeftContentMarginLeft}: -0.25rem;
                ${tokens.chipLeftContentMarginRight}: 0.25rem;
                ${tokens.chipRightContentMarginLeft}: 0.25rem;
                ${tokens.chipRightContentMarginRight}: -0.25rem;
                ${tokens.chipClearContentMarginLeft}: 0.5rem;
                ${tokens.chipClearContentMarginRight}: -0.25rem;
                ${tokens.chipCloseIconSize}: 1.5rem;
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
