import { css, listTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${listTokens.listItemColor}: var(--text-primary);
                ${listTokens.listItemColorHover}: var(--text-primary);
                ${listTokens.listItemBackground}: transparent;
                ${listTokens.listItemBackgroundHover}: var(--surface-transparent-secondary);
                ${listTokens.listItemBorderColor}: transparent;
                ${listTokens.listItemBorderColorHover}: transparent;
                ${listTokens.listDisabledOpacity}: 0.4;
            `,
        },
        size: {
            m: css`
                ${listTokens.listItemPaddingTop}: 0.75rem;
                ${listTokens.listItemPaddingLeft}: 0.875rem;
                ${listTokens.listItemPaddingRight}: 0.875rem;
                ${listTokens.listItemPaddingBottom}: 0.75rem;
                ${listTokens.listItemBorderRadius}: 0.75rem;
                ${listTokens.listItemBorderWidth}: 0rem;
                ${listTokens.listItemGap}: 0.5rem;
                ${listTokens.listItemTightDifference}: 0.25rem;

                ${listTokens.listItemFontFamily}: var(--plasma-typo-body-m-font-family);
                ${listTokens.listItemFontSize}: var(--plasma-typo-body-m-font-size);
                ${listTokens.listItemFontStyle}: var(--plasma-typo-body-m-font-style);
                ${listTokens.listItemFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${listTokens.listItemLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${listTokens.listItemLineHeight}: var(--plasma-typo-body-m-line-height);
            `,
        },
        disabled: {
            true: css``,
        },
    },
};
