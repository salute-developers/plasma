import { css, tabsTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'divider',
        size: 'l',
    },
    variations: {
        view: {
            clear: css`
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

                ${tabsTokens.outlineFocusColor}: var(--surface-accent);

                ${tabsTokens.itemSelectedDividerHeight}: 0rem;
                ${tabsTokens.itemSelectedDividerColor}: var(--text-primary);
                ${tabsTokens.itemSelectedDividerColorHover}: var(--text-primary);

                ${tabsTokens.itemCursor}: pointer;
            `,
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

                ${tabsTokens.outlineFocusColor}: var(--surface-accent);

                ${tabsTokens.itemSelectedDividerHeight}: 0.125rem;
                ${tabsTokens.itemSelectedDividerColor}: var(--text-primary);
                ${tabsTokens.itemSelectedDividerColorHover}: var(--text-primary);

                ${tabsTokens.itemCursor}: pointer;
            `,
        },
        size: {
            s: css`
                ${tabsTokens.itemBorderRadius}: 0.5rem;
                ${tabsTokens.itemWidth}: auto;
                ${tabsTokens.itemHeight}: 2.5rem;
                ${tabsTokens.itemPadding}: 0 0.125rem;
                ${tabsTokens.itemPaddingPilled}: 0 0.5rem;
                ${tabsTokens.itemMarginLeft}: 1.5rem;
                ${tabsTokens.itemContentGap}: 0.25rem;
                ${tabsTokens.itemContentPadding}: 0.125rem;

                ${tabsTokens.fontFamily}: var(--plasma-typo-body-s-font-family);
                ${tabsTokens.fontSize}: var(--plasma-typo-body-s-font-size);
                ${tabsTokens.fontStyle}: var(--plasma-typo-body-s-font-style);
                ${tabsTokens.fontWeight}: var(--plasma-typo-body-s-bold-font-weight);
                ${tabsTokens.letterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tabsTokens.lineHeight}: var(--plasma-typo-body-s-line-height);

                ${tabsTokens.actionContentMarginLeft}: 0.125rem;
            `,
            m: css`
                ${tabsTokens.itemBorderRadius}: 0.625rem;
                ${tabsTokens.itemWidth}: auto;
                ${tabsTokens.itemHeight}: 3rem;
                ${tabsTokens.itemPadding}: 0 0.125rem;
                ${tabsTokens.itemPaddingPilled}: 0 0.5rem;
                ${tabsTokens.itemMarginLeft}: 1.5rem;
                ${tabsTokens.itemContentGap}: 0.375rem;
                ${tabsTokens.itemContentPadding}: 0.125rem;

                ${tabsTokens.fontFamily}: var(--plasma-typo-body-m-font-family);
                ${tabsTokens.fontSize}: var(--plasma-typo-body-m-font-size);
                ${tabsTokens.fontStyle}: var(--plasma-typo-body-m-font-style);
                ${tabsTokens.fontWeight}: var(--plasma-typo-body-m-bold-font-weight);
                ${tabsTokens.letterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tabsTokens.lineHeight}: var(--plasma-typo-body-m-line-height);

                ${tabsTokens.actionContentMarginLeft}: 0.25rem;
            `,
        },
        disabled: {
            true: css`
                ${tabsTokens.disabledOpacity}: 0.4;
            `,
        },
        pilled: {
            true: css`
                ${tabsTokens.itemPilledBorderRadius}: 1.5rem;
            `,
        },
        truncate: {
            true: css``,
        },
    },
};
