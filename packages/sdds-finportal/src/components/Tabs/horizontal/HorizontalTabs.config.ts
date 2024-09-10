import { css, tabsTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'filled',
        size: 'l',
    },
    variations: {
        view: {
            clear: css`
                ${tabsTokens.arrowColor}: var(--text-secondary);
                ${tabsTokens.tabsBackgroundColor}: transparent;
                ${tabsTokens.outlineFocusColor}: var(--surface-accent);

                ${tabsTokens.tabsDividerHeight}: 0rem;
                ${tabsTokens.tabsDividerColor}: transparent;
                ${tabsTokens.tabsDividerBorderRadius}: 0rem;
            `,
            filled: css`
                ${tabsTokens.arrowColor}: var(--text-secondary);
                ${tabsTokens.tabsBackgroundColor}: var(--surface-transparent-primary);
                ${tabsTokens.outlineFocusColor}: var(--surface-accent);

                ${tabsTokens.tabsDividerHeight}: 0rem;
                ${tabsTokens.tabsDividerColor}: transparent;
                ${tabsTokens.tabsDividerBorderRadius}: 0rem;
            `,
            divider: css`
                ${tabsTokens.arrowColor}: var(--text-secondary);
                ${tabsTokens.tabsBackgroundColor}: transparent;
                ${tabsTokens.outlineFocusColor}: var(--surface-accent);

                ${tabsTokens.tabsDividerHeight}: 0.0625rem;
                ${tabsTokens.tabsDividerColor}: var(--surface-transparent-tertiary);
                ${tabsTokens.tabsDividerBorderRadius}: 0.0625rem;
            `,
        },
        size: {
            xs: css`
                ${tabsTokens.tabsBorderRadius}: 0.5rem;
                ${tabsTokens.tabsWidth}: fit-content;
                ${tabsTokens.tabsHeight}: auto;
                ${tabsTokens.arrowInnerPadding}: 0rem;
                ${tabsTokens.arrowOuterPadding}: 0.125rem;
            `,
            s: css`
                ${tabsTokens.tabsBorderRadius}: 0.625rem;
                ${tabsTokens.tabsWidth}: fit-content;
                ${tabsTokens.tabsHeight}: auto;
                ${tabsTokens.arrowInnerPadding}: 0rem;
                ${tabsTokens.arrowOuterPadding}: 0.25rem;
            `,
            m: css`
                ${tabsTokens.tabsBorderRadius}: 0.75rem;
                ${tabsTokens.tabsWidth}: fit-content;
                ${tabsTokens.tabsHeight}: auto;
                ${tabsTokens.arrowInnerPadding}: 0rem;
                ${tabsTokens.arrowOuterPadding}: 0.625rem;
            `,
            l: css`
                ${tabsTokens.tabsBorderRadius}: 0.875rem;
                ${tabsTokens.tabsWidth}: fit-content;
                ${tabsTokens.tabsHeight}: auto;
                ${tabsTokens.arrowInnerPadding}: 0rem;
                ${tabsTokens.arrowOuterPadding}: 0.75rem;
            `,
            h5: css`
                ${tabsTokens.tabsBorderRadius}: 0.5rem;
                ${tabsTokens.tabsWidth}: fit-content;
                ${tabsTokens.tabsHeight}: auto;
                ${tabsTokens.arrowInnerPadding}: 0.25rem;
                ${tabsTokens.arrowOuterPadding}: 0rem;
            `,
            h4: css`
                ${tabsTokens.tabsBorderRadius}: 0.5rem;
                ${tabsTokens.tabsWidth}: fit-content;
                ${tabsTokens.tabsHeight}: auto;
                ${tabsTokens.arrowInnerPadding}: 0.25rem;
                ${tabsTokens.arrowOuterPadding}: 0rem;
            `,
            h3: css`
                ${tabsTokens.tabsBorderRadius}: 0.625rem;
                ${tabsTokens.tabsWidth}: fit-content;
                ${tabsTokens.tabsHeight}: auto;
                ${tabsTokens.arrowInnerPadding}: 0.375rem;
                ${tabsTokens.arrowOuterPadding}: 0rem;
            `,
            h2: css`
                ${tabsTokens.tabsBorderRadius}: 0.75rem;
                ${tabsTokens.tabsWidth}: fit-content;
                ${tabsTokens.tabsHeight}: auto;
                ${tabsTokens.arrowInnerPadding}: 0.5rem;
                ${tabsTokens.arrowOuterPadding}: 0rem;
            `,
            h1: css`
                ${tabsTokens.tabsBorderRadius}: 0.75rem;
                ${tabsTokens.tabsWidth}: fit-content;
                ${tabsTokens.tabsHeight}: auto;
                ${tabsTokens.arrowInnerPadding}: 1rem;
                ${tabsTokens.arrowOuterPadding}: 0rem;
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
                ${tabsTokens.tabsPilledBorderRadius}: 1.625rem;
            `,
        },
    },
};
