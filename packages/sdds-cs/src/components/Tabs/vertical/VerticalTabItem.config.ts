import { css, tabsTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'divider',
        size: 's',
    },
    variations: {
        view: {
            divider: css`
                ${tabsTokens.itemColor}: var(--text-accent);
                ${tabsTokens.itemValueColor}: var(--text-secondary);
                ${tabsTokens.itemBackgroundColor}: transparent;
                ${tabsTokens.itemColorHover}: #1A9E32;
                ${tabsTokens.itemValueColorHover}: var(--text-secondary);
                ${tabsTokens.itemColorActive}: var(--text-accent-active);
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

                ${tabsTokens.itemSelectedDividerWidth}: 0.125rem;
                ${tabsTokens.itemSelectedDividerHeight}: 0.125rem;
                ${tabsTokens.itemSelectedDividerColor}: var(--surface-solid-default);
                ${tabsTokens.itemSelectedDividerColorHover}: var(--text-primary);

                ${tabsTokens.itemCursor}: default;
                ${tabsTokens.itemCursorOverNotSelected}: pointer;
            `,
        },
        size: {
            s: css`
                ${tabsTokens.itemBorderRadius}: 0.5rem;
                ${tabsTokens.itemWidth}: auto;
                ${tabsTokens.itemHeight}: 2.5rem;
                ${tabsTokens.itemPadding}: 0 0.625rem;
                ${tabsTokens.itemPaddingPilled}: 0 0.5rem;
                ${tabsTokens.itemPaddingOrientationVertical}: 0.5rem 1rem;
                ${tabsTokens.itemMarginLeft}: 0.75rem;
                ${tabsTokens.itemContentGap}: 0.25rem;
                ${tabsTokens.itemContentPadding}: 0.125rem;

                ${tabsTokens.fontFamily}: var(--plasma-typo-body-m-bold-font-family);
                ${tabsTokens.fontSize}: var(--plasma-typo-body-m-bold-font-size);
                ${tabsTokens.fontStyle}: var(--plasma-typo-body-m-bold-font-style);
                ${tabsTokens.fontWeight}: var(--plasma-typo-body-m-bold-font-weight);
                ${tabsTokens.letterSpacing}: var(--plasma-typo-body-m-bold-letter-spacing);
                ${tabsTokens.lineHeight}: var(--plasma-typo-body-m-bold-line-height);

                ${tabsTokens.valueFontFamily}: var(--plasma-typo-body-m-font-family);
                ${tabsTokens.valueFontSize}: var(--plasma-typo-body-m-font-size);
                ${tabsTokens.valueFontStyle}: var(--plasma-typo-body-m-font-style);
                ${tabsTokens.valueFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tabsTokens.valueLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tabsTokens.valueLineHeight}: var(--plasma-typo-body-m-line-height);
            `,
        },
        disabled: {
            true: css`
                ${tabsTokens.itemColor}: var(--text-secondary);
                ${tabsTokens.itemValueColor}: var(--text-secondary);
                ${tabsTokens.itemColorHover}: var(--text-secondary);
                ${tabsTokens.itemValueColorHover}: var(--text-secondary);
                ${tabsTokens.itemColorActive}: var(--text-secondary);
                ${tabsTokens.itemValueColorActive}: var(--text-secondary);
                ${tabsTokens.itemSelectedColor}: var(--text-secondary);
                ${tabsTokens.itemSelectedDividerColor}: none;
                ${tabsTokens.itemSelectedDividerColorHover}: none;
            `,
        },
        truncate: {
            true: css``,
        },
    },
};
