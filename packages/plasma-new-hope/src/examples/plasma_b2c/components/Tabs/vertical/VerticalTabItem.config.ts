import { css } from '@linaria/core';

import { tabsTokens } from '../../../../../components/Tabs';

export const config = {
    defaults: {
        view: 'divider',
        size: 'xs',
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

                ${tabsTokens.itemPaddingClear}: 0;
                ${tabsTokens.itemContentPaddingClear}: 0;

                ${tabsTokens.outlineFocusColor}: var(--surface-accent);

                ${tabsTokens.itemSelectedDividerHeight}: 0.125rem;
                ${tabsTokens.itemSelectedDividerColor}: var(--text-primary);
                ${tabsTokens.itemSelectedDividerColorHover}: var(--text-primary);

                ${tabsTokens.additionalContentColor}: var(--text-tertiary);
                ${tabsTokens.additionalContentHoverColor}: var(--text-secondary);
                ${tabsTokens.additionalContentSelectedColor}: var(--text-secondary);
                ${tabsTokens.additionalContentSelectedHoverColor}: var(--text-secondary);
            `,
        },
        size: {
            xs: css`
                ${tabsTokens.itemBorderRadius}: 0.375rem;
                ${tabsTokens.itemWidth}: auto;
                ${tabsTokens.itemHeight}: 2rem;
                ${tabsTokens.itemPadding}: 0 0.5rem;
                ${tabsTokens.itemPaddingPilled}: 0 0.375rem;
                ${tabsTokens.itemMarginLeft}: 0.625rem;
                ${tabsTokens.itemContentGap}: 0.25rem;
                ${tabsTokens.itemContentPadding}: 0.125rem;

                ${tabsTokens.fontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tabsTokens.fontSize}: var(--plasma-typo-body-xs-font-size);
                ${tabsTokens.fontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tabsTokens.fontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tabsTokens.letterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tabsTokens.lineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
            s: css`
                ${tabsTokens.itemBorderRadius}: 0.5rem;
                ${tabsTokens.itemWidth}: auto;
                ${tabsTokens.itemHeight}: 2.5rem;
                ${tabsTokens.itemPadding}: 0 0.625rem;
                ${tabsTokens.itemPaddingPilled}: 0 0.5rem;
                ${tabsTokens.itemMarginLeft}: 0.75rem;
                ${tabsTokens.itemContentGap}: 0.25rem;
                ${tabsTokens.itemContentPadding}: 0.125rem;

                ${tabsTokens.fontFamily}: var(--plasma-typo-body-s-font-family);
                ${tabsTokens.fontSize}: var(--plasma-typo-body-s-font-size);
                ${tabsTokens.fontStyle}: var(--plasma-typo-body-s-font-style);
                ${tabsTokens.fontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tabsTokens.letterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tabsTokens.lineHeight}: var(--plasma-typo-body-s-line-height);
            `,
            m: css`
                ${tabsTokens.itemBorderRadius}: 0.625rem;
                ${tabsTokens.itemWidth}: auto;
                ${tabsTokens.itemHeight}: 3rem;
                ${tabsTokens.itemPadding}: 0 0.625rem;
                ${tabsTokens.itemPaddingPilled}: 0 0.5rem;
                ${tabsTokens.itemMarginLeft}: 1.125rem;
                ${tabsTokens.itemContentGap}: 0.375rem;
                ${tabsTokens.itemContentPadding}: 0.125rem;

                ${tabsTokens.fontFamily}: var(--plasma-typo-body-m-font-family);
                ${tabsTokens.fontSize}: var(--plasma-typo-body-m-font-size);
                ${tabsTokens.fontStyle}: var(--plasma-typo-body-m-font-style);
                ${tabsTokens.fontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tabsTokens.letterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tabsTokens.lineHeight}: var(--plasma-typo-body-m-line-height);
            `,
            l: css`
                ${tabsTokens.itemBorderRadius}: 0.75rem;
                ${tabsTokens.itemWidth}: auto;
                ${tabsTokens.itemHeight}: 3.5rem;
                ${tabsTokens.itemPadding}: 0 0.875rem;
                ${tabsTokens.itemPaddingPilled}: 0 0.75rem;
                ${tabsTokens.itemMarginLeft}: 1.25rem;
                ${tabsTokens.itemContentGap}: 0.5rem;
                ${tabsTokens.itemContentPadding}: 0.125rem;

                ${tabsTokens.fontFamily}: var(--plasma-typo-body-l-font-family);
                ${tabsTokens.fontSize}: var(--plasma-typo-body-l-font-size);
                ${tabsTokens.fontStyle}: var(--plasma-typo-body-l-font-style);
                ${tabsTokens.fontWeight}: var(--plasma-typo-body-l-font-weight);
                ${tabsTokens.letterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${tabsTokens.lineHeight}: var(--plasma-typo-body-l-line-height);
            `,
        },
        disabled: {
            true: css`
                ${tabsTokens.disabledOpacity}: 0.4;
            `,
        },
    },
};
