import { css, listTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 's',
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
                ${listTokens.listItemFocusColor}: var(--surface-accent);
                ${listTokens.listDisabledOpacity}: 0.4;
            `,
        },
        size: {
            xs: css`
                ${listTokens.listItemPaddingTop}: 0.5rem;
                ${listTokens.listItemPaddingLeft}: 0.5rem;
                ${listTokens.listItemPaddingRight}: 0.5rem;
                ${listTokens.listItemPaddingBottom}: 0.5rem;
                ${listTokens.listItemBorderRadius}: 0.5rem;
                ${listTokens.listItemBorderWidth}: 0rem;
                ${listTokens.listItemGap}: 0.375rem;
                ${listTokens.listItemTightDifference}: 0.25rem;

                ${listTokens.listItemFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${listTokens.listItemFontSize}: var(--plasma-typo-body-xs-font-size);
                ${listTokens.listItemFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${listTokens.listItemFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${listTokens.listItemLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${listTokens.listItemLineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
            s: css`
                ${listTokens.listItemPaddingTop}: 0.689rem;
                ${listTokens.listItemPaddingLeft}: 0.75rem;
                ${listTokens.listItemPaddingRight}: 0.75rem;
                ${listTokens.listItemPaddingBottom}: 0.689rem;
                ${listTokens.listItemBorderRadius}: 0.625rem;
                ${listTokens.listItemBorderWidth}: 0rem;
                ${listTokens.listItemGap}: 0.375rem;
                ${listTokens.listItemTightDifference}: 0.25rem;

                ${listTokens.listItemFontFamily}: var(--plasma-typo-body-s-font-family);
                ${listTokens.listItemFontSize}: var(--plasma-typo-body-s-font-size);
                ${listTokens.listItemFontStyle}: var(--plasma-typo-body-s-font-style);
                ${listTokens.listItemFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${listTokens.listItemLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${listTokens.listItemLineHeight}: var(--plasma-typo-body-s-line-height);
            `,
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
            l: css`
                ${listTokens.listItemPaddingTop}: 1rem;
                ${listTokens.listItemPaddingLeft}: 1rem;
                ${listTokens.listItemPaddingRight}: 1rem;
                ${listTokens.listItemPaddingBottom}: 1rem;
                ${listTokens.listItemBorderRadius}: 0.875rem;
                ${listTokens.listItemBorderWidth}: 0rem;
                ${listTokens.listItemGap}: 0.5rem;
                ${listTokens.listItemTightDifference}: 0.25rem;

                ${listTokens.listItemFontFamily}: var(--plasma-typo-body-l-font-family);
                ${listTokens.listItemFontSize}: var(--plasma-typo-body-l-font-size);
                ${listTokens.listItemFontStyle}: var(--plasma-typo-body-l-font-style);
                ${listTokens.listItemFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${listTokens.listItemLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${listTokens.listItemLineHeight}: var(--plasma-typo-body-l-line-height);
            `,
            xl: css`
                ${listTokens.listItemPaddingTop}: 1.3125rem;
                ${listTokens.listItemPaddingLeft}: 1.125rem;
                ${listTokens.listItemPaddingRight}: 1.125rem;
                ${listTokens.listItemPaddingBottom}: 1.3125rem;
                ${listTokens.listItemBorderRadius}: 1rem;
                ${listTokens.listItemBorderWidth}: 0rem;
                ${listTokens.listItemGap}: 0.5rem;
                ${listTokens.listItemTightDifference}: 0.25rem;

                ${listTokens.listItemFontFamily}: var(--plasma-typo-body-l-font-family);
                ${listTokens.listItemFontSize}: var(--plasma-typo-body-l-font-size);
                ${listTokens.listItemFontStyle}: var(--plasma-typo-body-l-font-style);
                ${listTokens.listItemFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${listTokens.listItemLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${listTokens.listItemLineHeight}: var(--plasma-typo-body-l-line-height);
            `,
        },
        disabled: {
            true: css``,
        },
    },
};
