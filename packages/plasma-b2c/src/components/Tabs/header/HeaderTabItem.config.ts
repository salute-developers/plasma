import { css, tabsTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'divider',
        size: 'h5',
    },
    variations: {
        view: {
            divider: css`
                ${tabsTokens.itemColor}: var(--text-secondary);
                ${tabsTokens.itemValueColor}: var(--text-tertiary);
                ${tabsTokens.itemBackgroundColor}: transparent;
                ${tabsTokens.itemColorHover}: var(--text-secondary-hover);
                ${tabsTokens.itemValueColorHover}: var(--text-secondary);
                ${tabsTokens.itemColorActive}: var(--text-secondary-active);
                ${tabsTokens.itemValueColorActive}: var(--text-secondary);
                ${tabsTokens.itemBackgroundColorHover}: transparent;
                ${tabsTokens.itemSelectedColor}: var(--text-primary);
                ${tabsTokens.itemSelectedValueColor}: var(--text-secondary);
                ${tabsTokens.itemSelectedBackgroundColor}: transparent;
                ${tabsTokens.itemSelectedColorHover}: var(--text-primary);
                ${tabsTokens.itemSelectedValueColorHover}: var(--text-secondary);
                ${tabsTokens.itemSelectedBackgroundColorHover}: transparent;
                ${tabsTokens.itemBackgroundTransition}: background-color 0.3s ease-in-out;

                ${tabsTokens.itemPaddingClear}: 0;
                ${tabsTokens.itemContentPaddingClear}: 0;

                ${tabsTokens.outlineFocusColor}: var(--surface-accent);

                ${tabsTokens.itemSelectedDividerHeight}: 0.125rem;
                ${tabsTokens.itemSelectedDividerColor}: var(--text-primary);
                ${tabsTokens.itemSelectedDividerColorHover}: var(--text-primary);
            `,
        },
        size: {
            h5: css`
                ${tabsTokens.itemBorderRadius}: 0.375rem;
                ${tabsTokens.itemWidth}: auto;
                ${tabsTokens.itemHeight}: 3rem;
                ${tabsTokens.itemPadding}: 0rem;
                ${tabsTokens.itemMarginLeft}: 1.75rem;
                ${tabsTokens.itemContentGap}: 0.625rem;

                ${tabsTokens.fontFamily}: var(--plasma-typo-h5-font-family);
                ${tabsTokens.fontSize}: var(--plasma-typo-h5-font-size);
                ${tabsTokens.fontStyle}: var(--plasma-typo-h5-font-style);
                ${tabsTokens.fontWeight}: var(--plasma-typo-h5-font-weight);
                ${tabsTokens.letterSpacing}: var(--plasma-typo-h5-letter-spacing);
                ${tabsTokens.lineHeight}: var(--plasma-typo-h5-line-height);
            `,
            h4: css`
                ${tabsTokens.itemBorderRadius}: 0.375rem;
                ${tabsTokens.itemWidth}: auto;
                ${tabsTokens.itemHeight}: 3.25rem;
                ${tabsTokens.itemPadding}: 0rem;
                ${tabsTokens.itemMarginLeft}: 2rem;
                ${tabsTokens.itemContentGap}: 0.625rem;

                ${tabsTokens.fontFamily}: var(--plasma-typo-h4-font-family);
                ${tabsTokens.fontSize}: var(--plasma-typo-h4-font-size);
                ${tabsTokens.fontStyle}: var(--plasma-typo-h4-font-style);
                ${tabsTokens.fontWeight}: var(--plasma-typo-h4-font-weight);
                ${tabsTokens.letterSpacing}: var(--plasma-typo-h4-letter-spacing);
                ${tabsTokens.lineHeight}: var(--plasma-typo-h4-line-height);
            `,
            h3: css`
                ${tabsTokens.itemBorderRadius}: 0.5rem;
                ${tabsTokens.itemWidth}: auto;
                ${tabsTokens.itemHeight}: 3.875rem;
                ${tabsTokens.itemPadding}: 0rem;
                ${tabsTokens.itemMarginLeft}: 2.25rem;
                ${tabsTokens.itemContentGap}: 0.75rem;

                ${tabsTokens.fontFamily}: var(--plasma-typo-h3-font-family);
                ${tabsTokens.fontSize}: var(--plasma-typo-h3-font-size);
                ${tabsTokens.fontStyle}: var(--plasma-typo-h3-font-style);
                ${tabsTokens.fontWeight}: var(--plasma-typo-h3-font-weight);
                ${tabsTokens.letterSpacing}: var(--plasma-typo-h3-letter-spacing);
                ${tabsTokens.lineHeight}: var(--plasma-typo-h3-line-height);
            `,
            h2: css`
                ${tabsTokens.itemBorderRadius}: 0.625rem;
                ${tabsTokens.itemWidth}: auto;
                ${tabsTokens.itemHeight}: 4.5rem;
                ${tabsTokens.itemPadding}: 0rem;
                ${tabsTokens.itemMarginLeft}: 2.5rem;
                ${tabsTokens.itemContentGap}: 1rem;

                ${tabsTokens.fontFamily}: var(--plasma-typo-h2-font-family);
                ${tabsTokens.fontSize}: var(--plasma-typo-h2-font-size);
                ${tabsTokens.fontStyle}: var(--plasma-typo-h2-font-style);
                ${tabsTokens.fontWeight}: var(--plasma-typo-h2-font-weight);
                ${tabsTokens.letterSpacing}: var(--plasma-typo-h2-letter-spacing);
                ${tabsTokens.lineHeight}: var(--plasma-typo-h2-line-height);
            `,
            h1: css`
                ${tabsTokens.itemBorderRadius}: 0.75rem;
                ${tabsTokens.itemWidth}: auto;
                ${tabsTokens.itemHeight}: 5.75rem;
                ${tabsTokens.itemPadding}: 0rem;
                ${tabsTokens.itemMarginLeft}: 3.5rem;
                ${tabsTokens.itemContentGap}: 0.5rem;

                ${tabsTokens.fontFamily}: var(--plasma-typo-h1-font-family);
                ${tabsTokens.fontSize}: var(--plasma-typo-h1-font-size);
                ${tabsTokens.fontStyle}: var(--plasma-typo-h1-font-style);
                ${tabsTokens.fontWeight}: var(--plasma-typo-h1-font-weight);
                ${tabsTokens.letterSpacing}: var(--plasma-typo-h1-letter-spacing);
                ${tabsTokens.lineHeight}: var(--plasma-typo-h1-line-height);
            `,
        },
        disabled: {
            true: css`
                ${tabsTokens.disabledOpacity}: 0.4;
            `,
        },
    },
};
