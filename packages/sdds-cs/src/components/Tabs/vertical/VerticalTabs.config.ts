import { css, tabsTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'divider',
        size: 's',
    },
    variations: {
        view: {
            divider: css`
                ${tabsTokens.arrowColor}: var(--text-accent);
                ${tabsTokens.arrowColorHover}: var(--text-accent-minor);
                ${tabsTokens.arrowColorActive}: var(--text-accent-active);
                ${tabsTokens.tabsBackgroundColor}: transparent;
                ${tabsTokens.outlineFocusColor}: var(--surface-accent);

                ${tabsTokens.tabsDividerWidth}: 0.0625rem;
                ${tabsTokens.tabsDividerHeight}: 0.0625rem;
                ${tabsTokens.tabsDividerColor}: var(--outline-solid-primary);
                ${tabsTokens.tabsDividerBorderRadius}: 0.0625rem;
            `,
        },
        size: {
            s: css`
                ${tabsTokens.tabsBorderRadius}: 0.625rem;
                ${tabsTokens.tabsWidth}: fit-content;
                ${tabsTokens.tabsHeight}: auto;
                ${tabsTokens.arrowInnerPadding}: 0rem;
                ${tabsTokens.arrowOuterPadding}: 0.25rem;
            `,
        },
        stretch: {
            true: css`
                ${tabsTokens.containerHeight}: 100%;
            `,
        },
        disabled: {
            true: css`
                ${tabsTokens.arrowColor}: var(--text-secondary);
                ${tabsTokens.itemColor}: var(--text-secondary);
                ${tabsTokens.itemValueColor}: var(--text-secondary);
                ${tabsTokens.itemColorHover}: var(--text-secondary);
                ${tabsTokens.itemValueColorHover}: var(--text-secondary);
                ${tabsTokens.itemColorActive}: var(--text-secondary);
                ${tabsTokens.itemValueColorActive}: var(--text-secondary);
                ${tabsTokens.itemSelectedColor}: var(--text-secondary);
                ${tabsTokens.itemSelectedDividerColor}: none;
                ${tabsTokens.itemSelectedDividerColorHover}: none;
                ${tabsTokens.tabsDividerColor}: transparent;
            `,
        },
    },
};
