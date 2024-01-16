import { css } from '@linaria/core';

import { tabsTokens } from '../../../../components/Tabs';

export const config = {
    defaults: {
        view: 'clear',
        size: 'xs',
        disabled: 'false',
    },
    variations: {
        view: {
            clear: css`
                ${tabsTokens.arrowColor}: var(--text-secondary);
                ${tabsTokens.tabsBackgroundColor}: tranparent;
                ${tabsTokens.outlineFocusColor}: var(--plasma-colors-button-focused);

                ${tabsTokens.tabsDividerHeight}: 0.125rem;
                ${tabsTokens.tabsDividerColor}: var(--surface-transparent-secondary);
            `,
            filled: css`
                ${tabsTokens.arrowColor}: var(--text-secondary);
                ${tabsTokens.tabsBackgroundColor}: transparent;
                ${tabsTokens.outlineFocusColor}: var(--plasma-colors-button-focused);
            `,
        },
        size: {
            xs: css`
                ${tabsTokens.tabsBorderRadius}: 0.5rem;
                ${tabsTokens.tabsWidth}: auto;
                ${tabsTokens.tabsHeight}: auto;
            `,
            s: css`
                ${tabsTokens.tabsBorderRadius}: 0.625rem;
                ${tabsTokens.tabsWidth}: auto;
                ${tabsTokens.tabsHeight}: auto;
            `,
            m: css`
                ${tabsTokens.tabsBorderRadius}: 0.75rem;
                ${tabsTokens.tabsWidth}: auto;
                ${tabsTokens.tabsHeight}: auto;
            `,
            l: css`
                ${tabsTokens.tabsBorderRadius}: 0.75rem;
                ${tabsTokens.tabsWidth}: auto;
                ${tabsTokens.tabsHeight}: auto;
            `,
            h5: css`
                ${tabsTokens.tabsBorderRadius}: 0.5rem;
                ${tabsTokens.tabsWidth}: auto;
                ${tabsTokens.tabsHeight}: auto;
            `,
            h4: css`
                ${tabsTokens.tabsBorderRadius}: 0.5rem;
                ${tabsTokens.tabsWidth}: auto;
                ${tabsTokens.tabsHeight}: auto;
            `,
            h3: css`
                ${tabsTokens.tabsBorderRadius}: 0.625rem;
                ${tabsTokens.tabsWidth}: auto;
                ${tabsTokens.tabsHeight}: auto;
            `,
            h2: css`
                ${tabsTokens.tabsBorderRadius}: 0.75rem;
                ${tabsTokens.tabsWidth}: auto;
                ${tabsTokens.tabsHeight}: auto;
            `,
            h1: css`
                ${tabsTokens.tabsBorderRadius}: 0.75rem;
                ${tabsTokens.tabsWidth}: auto;
                ${tabsTokens.tabsHeight}: auto;
            `,
        },
        stretch: {
            true: css`
                ${tabsTokens.containerWidth}: 100%;
            `,
        },
        disabled: {
            true: css`
                ${tabsTokens.disabledOpacity}: 0.4;
            `,
        },
        pilled: {
            true: css`
                ${tabsTokens.tabsPilledBorderRadius}: 1.75rem;
            `,
        },
        filledBackground: {
            true: css`
                ${tabsTokens.tabsFilledBackgroundColor}: var(--surface-transparent-primary);
            `,
        },
    },
};
