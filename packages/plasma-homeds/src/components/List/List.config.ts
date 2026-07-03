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
                ${listTokens.listItemBackground}: var(--surface-transparent-primary);
                ${listTokens.listItemBackgroundHover}: var(--surface-transparent-secondary);
                ${listTokens.listItemBorderColor}: transparent;
                ${listTokens.listItemBorderColorHover}: transparent;
                ${listTokens.listItemFocusColor}: var(--surface-accent);
                ${listTokens.listBackground}: var(--surface-transparent-primary);
                ${listTokens.listItemDividerColor}: var(--surface-transparent-primary);
                ${listTokens.listDisabledOpacity}: 0.4;
            `,
        },
        size: {
            s: css`
                ${listTokens.listGap}: 0.5rem;
                ${listTokens.listBorderRadius}: 1.75rem;
                ${listTokens.listPadding}: 0.5rem 1rem 0.5rem 1rem;

                ${listTokens.listItemPaddingTop}: 0.625rem;
                ${listTokens.listItemPaddingLeft}: 1rem;
                ${listTokens.listItemPaddingRight}: 0.875rem;
                ${listTokens.listItemPaddingBottom}: 0.625rem;
                ${listTokens.listItemContentPadding}: 0.3125rem 0rem;
                ${listTokens.listItemBorderRadius}: 1.25rem;
                ${listTokens.listItemBorderWidth}: 0rem;
                ${listTokens.listItemGap}: 0.75rem;
                ${listTokens.listItemTightDifference}: 0.25rem;

                ${listTokens.listItemDividerHeight}: 0.0625rem;

                ${listTokens.listItemFontFamily}: var(--plasma-typo-body-s-font-family);
                ${listTokens.listItemFontSize}: var(--plasma-typo-body-s-font-size);
                ${listTokens.listItemFontStyle}: var(--plasma-typo-body-s-font-style);
                ${listTokens.listItemFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${listTokens.listItemLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${listTokens.listItemLineHeight}: var(--plasma-typo-body-s-line-height);
            `,
            m: css`
                ${listTokens.listGap}: 0.5rem;
                ${listTokens.listBorderRadius}: 1.75rem;
                ${listTokens.listPadding}: 0.5rem 1rem 0.5rem 1rem;

                ${listTokens.listItemPaddingTop}: 0.5625rem;
                ${listTokens.listItemPaddingLeft}: 1rem;
                ${listTokens.listItemPaddingRight}: 0.875rem;
                ${listTokens.listItemPaddingBottom}: 0.5625rem;
                ${listTokens.listItemContentPadding}: 0.3125rem 0rem;
                ${listTokens.listItemBorderRadius}: 1.25rem;
                ${listTokens.listItemBorderWidth}: 0rem;
                ${listTokens.listItemGap}: 0.75rem;
                ${listTokens.listItemTightDifference}: 0.25rem;

                ${listTokens.listItemDividerHeight}: 0.0625rem;

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
