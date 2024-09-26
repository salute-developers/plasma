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
                ${tabsTokens.disabledOpacity}: 0.4;
            `,
        },
    },
};
