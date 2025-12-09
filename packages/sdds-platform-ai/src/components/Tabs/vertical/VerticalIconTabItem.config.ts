import { css, tabsTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'divider',
        size: 'm',
    },
    variations: {
        view: {
            divider: css`
                ${tabsTokens.itemColor}: var(--text-secondary);
                ${tabsTokens.itemBackgroundColor}: transparent;
                ${tabsTokens.itemColorHover}: var(--text-secondary-hover);
                ${tabsTokens.itemColorActive}: var(--text-secondary-active);
                ${tabsTokens.itemBackgroundColorHover}: transparent;
                ${tabsTokens.itemSelectedColor}: var(--text-primary);
                ${tabsTokens.itemSelectedBackgroundColor}: transparent;
                ${tabsTokens.itemSelectedColorHover}: var(--text-primary);
                ${tabsTokens.itemSelectedBackgroundColorHover}: transparent;
                ${tabsTokens.itemBackgroundTransition}: background-color 0.3s ease-in-out;

                ${tabsTokens.outlineFocusColor}: var(--surface-accent);

                ${tabsTokens.itemSelectedDividerWidth}: 0.125rem;
                ${tabsTokens.itemSelectedDividerColor}: var(--text-primary);
                ${tabsTokens.itemSelectedDividerColorHover}: var(--text-primary);

                ${tabsTokens.itemCursor}: pointer;
            `,
        },
        size: {
            m: css`
                ${tabsTokens.itemBorderRadius}: 0.625rem;
                ${tabsTokens.itemPaddingOrientationVertical}: 0.75rem 0.875rem;
                ${tabsTokens.itemContentGap}: 0.375rem;
                ${tabsTokens.itemContentPadding}: 0.125rem;

                ${tabsTokens.actionContentMarginLeft}: 0.125rem;
            `,
        },
        disabled: {
            true: css`
                ${tabsTokens.disabledOpacity}: 0.4;
            `,
        },
    },
};
