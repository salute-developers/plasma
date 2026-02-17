import { css, accordionTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${accordionTokens.accordionWidth}: 20rem;
                ${accordionTokens.accordionItemPadding}: var(${accordionTokens.accordionItemPaddingVertical}) var(${accordionTokens.accordionItemPaddingHorizontal});
                ${accordionTokens.accordionItemBackground}: var(--surface-transparent-card);
                ${accordionTokens.accordionItemShadow}: var(--shadow-down-soft-s);
                ${accordionTokens.accordionItemTitleColor}: var(--text-primary);
                ${accordionTokens.accordionItemOpenedTitleColor}: var(--text-accent);
                ${accordionTokens.accordionItemTextColor}: var(--text-primary);
                ${accordionTokens.accordionItemIconColor}: var(--text-primary);
                ${accordionTokens.accordionItemFocus}: var(--surface-accent);
                ${accordionTokens.accordionBackground}: var(--surface-clear);
                ${accordionTokens.accordionItemBorderBottom}: 0;
                ${accordionTokens.accordionItemPaddingHorizontalLeft}: var(${accordionTokens.accordionItemPaddingHorizontal});
            `,
            clear: css`
                ${accordionTokens.accordionGap}: 0;
                ${accordionTokens.accordionWidth}: 20rem;
                ${accordionTokens.accordionItemPadding}: var(${accordionTokens.accordionItemPaddingVertical}) 0rem;
                ${accordionTokens.accordionItemBackground}: var(--surface-clear);
                ${accordionTokens.accordionItemTitleColor}: var(--text-primary);
                ${accordionTokens.accordionItemOpenedTitleColor}: var(--text-accent);
                ${accordionTokens.accordionItemTextColor}: var(--text-primary);
                ${accordionTokens.accordionItemIconColor}: var(--text-primary);
                ${accordionTokens.accordionItemFocus}: var(--surface-accent);
                ${accordionTokens.accordionItemBorderRadius}: 0rem !important;
                ${accordionTokens.accordionBackground}: var(--surface-clear);
                ${accordionTokens.accordionItemBorderBottom}: 0.063rem solid var(--surface-solid-tertiary);
                ${accordionTokens.accordionItemPaddingHorizontalLeft}: 0;
            `,
        },
        size: {
            l: css`
                ${accordionTokens.accordionItemPaddingVertical}: 1.0625rem;
                ${accordionTokens.accordionItemPaddingHorizontal}: 1.25rem;
                ${accordionTokens.accordionItemBodyPaddingBottom}: 1.125rem;
                ${accordionTokens.accordionItemGap}: 0.25rem;
                ${accordionTokens.accordionItemBorderRadius}: 0.875rem;
                ${accordionTokens.accordionGap}: 1rem;

                ${accordionTokens.accordionItemTitleFontFamily}: var(--plasma-typo-body-l-font-family);
                ${accordionTokens.accordionItemTitleFontSize}: var(--plasma-typo-body-l-font-size);
                ${accordionTokens.accordionItemTitleFontStyle}: var(--plasma-typo-body-l-font-style);
                ${accordionTokens.accordionItemTitleFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${accordionTokens.accordionItemTitleLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${accordionTokens.accordionItemTitleLineHeight}: var(--plasma-typo-body-l-line-height);

                ${accordionTokens.accordionItemTextFontFamily}: var(--plasma-typo-body-l-font-family);
                ${accordionTokens.accordionItemTextFontSize}: var(--plasma-typo-body-l-font-size);
                ${accordionTokens.accordionItemTextFontStyle}: var(--plasma-typo-body-l-font-style);
                ${accordionTokens.accordionItemTextFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${accordionTokens.accordionItemTextLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${accordionTokens.accordionItemTextLineHeight}: var(--plasma-typo-body-l-line-height);
            `,
            m: css`
                ${accordionTokens.accordionItemPaddingVertical}: 0.875rem;
                ${accordionTokens.accordionItemPaddingHorizontal}: 1rem;
                ${accordionTokens.accordionItemBodyPaddingBottom}: 1rem;

                ${accordionTokens.accordionItemGap}: 0.25rem;
                ${accordionTokens.accordionItemBorderRadius}: 0.75rem;
                ${accordionTokens.accordionGap}: 0.875rem;

                ${accordionTokens.accordionItemTitleFontFamily}: var(--plasma-typo-body-m-font-family);
                ${accordionTokens.accordionItemTitleFontSize}: var(--plasma-typo-body-m-font-size);
                ${accordionTokens.accordionItemTitleFontStyle}: var(--plasma-typo-body-m-font-style);
                ${accordionTokens.accordionItemTitleFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${accordionTokens.accordionItemTitleLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${accordionTokens.accordionItemTitleLineHeight}: var(--plasma-typo-body-m-line-height);

                ${accordionTokens.accordionItemTextFontFamily}: var(--plasma-typo-body-m-font-family);
                ${accordionTokens.accordionItemTextFontSize}: var(--plasma-typo-body-m-font-size);
                ${accordionTokens.accordionItemTextFontStyle}: var(--plasma-typo-body-m-font-style);
                ${accordionTokens.accordionItemTextFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${accordionTokens.accordionItemTextLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${accordionTokens.accordionItemTextLineHeight}: var(--plasma-typo-body-m-line-height);
            `,
            s: css`
                ${accordionTokens.accordionItemPaddingVertical}: 0.6875rem;
                ${accordionTokens.accordionItemPaddingHorizontal}: 0.875rem;
                ${accordionTokens.accordionItemBodyPaddingBottom}: 0.75rem;

                ${accordionTokens.accordionItemGap}: 0.25rem;
                ${accordionTokens.accordionItemBorderRadius}: 0.625rem;
                ${accordionTokens.accordionGap}: 0.75rem;

                ${accordionTokens.accordionItemTitleFontFamily}: var(--plasma-typo-body-s-font-family);
                ${accordionTokens.accordionItemTitleFontSize}: var(--plasma-typo-body-s-font-size);
                ${accordionTokens.accordionItemTitleFontStyle}: var(--plasma-typo-body-s-font-style);
                ${accordionTokens.accordionItemTitleFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${accordionTokens.accordionItemTitleLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${accordionTokens.accordionItemTitleLineHeight}: var(--plasma-typo-body-s-line-height);

                ${accordionTokens.accordionItemTextFontFamily}: var(--plasma-typo-body-s-font-family);
                ${accordionTokens.accordionItemTextFontSize}: var(--plasma-typo-body-s-font-size);
                ${accordionTokens.accordionItemTextFontStyle}: var(--plasma-typo-body-s-font-style);
                ${accordionTokens.accordionItemTextFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${accordionTokens.accordionItemTextLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${accordionTokens.accordionItemTextLineHeight}: var(--plasma-typo-body-s-line-height);
            `,
            xs: css`
                ${accordionTokens.accordionItemPaddingVertical}: 0.563rem;
                ${accordionTokens.accordionItemPaddingHorizontal}: 0.625rem;
                ${accordionTokens.accordionItemBodyPaddingBottom}: 0.625rem;

                ${accordionTokens.accordionItemGap}: 0.25rem;
                ${accordionTokens.accordionItemBorderRadius}: 0.5rem;
                ${accordionTokens.accordionGap}: 0.75rem;

                ${accordionTokens.accordionItemTitleFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${accordionTokens.accordionItemTitleFontSize}: var(--plasma-typo-body-xs-font-size);
                ${accordionTokens.accordionItemTitleFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${accordionTokens.accordionItemTitleFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${accordionTokens.accordionItemTitleLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${accordionTokens.accordionItemTitleLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${accordionTokens.accordionItemTextFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${accordionTokens.accordionItemTextFontSize}: var(--plasma-typo-body-xs-font-size);
                ${accordionTokens.accordionItemTextFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${accordionTokens.accordionItemTextFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${accordionTokens.accordionItemTextLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${accordionTokens.accordionItemTextLineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
            h2: css`
                ${accordionTokens.accordionItemPaddingVertical}: 1.625rem;
                ${accordionTokens.accordionItemPaddingHorizontal}: 1.75rem;
                ${accordionTokens.accordionItemBodyPaddingBottom}: 1.625rem;
                ${accordionTokens.accordionItemGap}: 0.25rem;
                ${accordionTokens.accordionItemIconSize}: 1.5rem;
                ${accordionTokens.accordionItemBorderRadius}: 1.25rem;
                ${accordionTokens.accordionGap}: 1.5rem;

                ${accordionTokens.accordionItemTitleFontFamily}: var(--plasma-typo-h2-font-family);
                ${accordionTokens.accordionItemTitleFontSize}: var(--plasma-typo-h2-font-size);
                ${accordionTokens.accordionItemTitleFontStyle}: var(--plasma-typo-h2-font-style);
                ${accordionTokens.accordionItemTitleFontWeight}: var(--plasma-typo-h2-font-weight);
                ${accordionTokens.accordionItemTitleLetterSpacing}: var(--plasma-typo-h2-letter-spacing);
                ${accordionTokens.accordionItemTitleLineHeight}: var(--plasma-typo-h2-line-height);

                ${accordionTokens.accordionItemTextFontFamily}: var(--plasma-typo-body-l-font-family);
                ${accordionTokens.accordionItemTextFontSize}: var(--plasma-typo-body-l-font-size);
                ${accordionTokens.accordionItemTextFontStyle}: var(--plasma-typo-body-l-font-style);
                ${accordionTokens.accordionItemTextFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${accordionTokens.accordionItemTextLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${accordionTokens.accordionItemTextLineHeight}: var(--plasma-typo-body-l-line-height);
            `,
            h3: css`
                ${accordionTokens.accordionItemPaddingVertical}: 1.5rem;
                ${accordionTokens.accordionItemPaddingHorizontal}: 1.625rem;
                ${accordionTokens.accordionItemBodyPaddingBottom}: 1.5rem;
                ${accordionTokens.accordionItemGap}: 0.25rem;
                ${accordionTokens.accordionItemIconSize}: 1.5rem;
                ${accordionTokens.accordionItemBorderRadius}: 1.125rem;
                ${accordionTokens.accordionGap}: 1.5rem;

                ${accordionTokens.accordionItemTitleFontFamily}: var(--plasma-typo-h3-font-family);
                ${accordionTokens.accordionItemTitleFontSize}: var(--plasma-typo-h3-font-size);
                ${accordionTokens.accordionItemTitleFontStyle}: var(--plasma-typo-h3-font-style);
                ${accordionTokens.accordionItemTitleFontWeight}: var(--plasma-typo-h3-font-weight);
                ${accordionTokens.accordionItemTitleLetterSpacing}: var(--plasma-typo-h3-letter-spacing);
                ${accordionTokens.accordionItemTitleLineHeight}: var(--plasma-typo-h3-line-height);

                ${accordionTokens.accordionItemTextFontFamily}: var(--plasma-typo-body-l-font-family);
                ${accordionTokens.accordionItemTextFontSize}: var(--plasma-typo-body-l-font-size);
                ${accordionTokens.accordionItemTextFontStyle}: var(--plasma-typo-body-l-font-style);
                ${accordionTokens.accordionItemTextFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${accordionTokens.accordionItemTextLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${accordionTokens.accordionItemTextLineHeight}: var(--plasma-typo-body-l-line-height);
            `,
            h4: css`
                ${accordionTokens.accordionItemPaddingVertical}: 1.438rem;
                ${accordionTokens.accordionItemPaddingHorizontal}: 1.5rem;
                ${accordionTokens.accordionItemBodyPaddingBottom}: 1.5rem;
                ${accordionTokens.accordionItemGap}: 0.25rem;
                ${accordionTokens.accordionItemBorderRadius}: 1rem;
                ${accordionTokens.accordionGap}: 1.5rem;

                ${accordionTokens.accordionItemTitleFontFamily}: var(--plasma-typo-h4-font-family);
                ${accordionTokens.accordionItemTitleFontSize}: var(--plasma-typo-h4-font-size);
                ${accordionTokens.accordionItemTitleFontStyle}: var(--plasma-typo-h4-font-style);
                ${accordionTokens.accordionItemTitleFontWeight}: var(--plasma-typo-h4-font-weight);
                ${accordionTokens.accordionItemTitleLetterSpacing}: var(--plasma-typo-h4-letter-spacing);
                ${accordionTokens.accordionItemTitleLineHeight}: var(--plasma-typo-h4-line-height);

                ${accordionTokens.accordionItemTextFontFamily}: var(--plasma-typo-body-l-font-family);
                ${accordionTokens.accordionItemTextFontSize}: var(--plasma-typo-body-l-font-size);
                ${accordionTokens.accordionItemTextFontStyle}: var(--plasma-typo-body-l-font-style);
                ${accordionTokens.accordionItemTextFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${accordionTokens.accordionItemTextLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${accordionTokens.accordionItemTextLineHeight}: var(--plasma-typo-body-l-line-height);
            `,
            h5: css`
                ${accordionTokens.accordionItemPaddingVertical}: 1.25rem;
                ${accordionTokens.accordionItemPaddingHorizontal}: 1.375rem;
                ${accordionTokens.accordionItemBodyPaddingBottom}: 1.375rem;
                ${accordionTokens.accordionItemGap}: 0.25rem;
                ${accordionTokens.accordionItemBorderRadius}: 0.875rem;
                ${accordionTokens.accordionGap}: 1.25rem;

                ${accordionTokens.accordionItemTitleFontFamily}: var(--plasma-typo-h5-font-family);
                ${accordionTokens.accordionItemTitleFontSize}: var(--plasma-typo-h5-font-size);
                ${accordionTokens.accordionItemTitleFontStyle}: var(--plasma-typo-h5-font-style);
                ${accordionTokens.accordionItemTitleFontWeight}: var(--plasma-typo-h5-font-weight);
                ${accordionTokens.accordionItemTitleLetterSpacing}: var(--plasma-typo-h5-letter-spacing);
                ${accordionTokens.accordionItemTitleLineHeight}: var(--plasma-typo-h5-line-height);

                ${accordionTokens.accordionItemTextFontFamily}: var(--plasma-typo-body-m-font-family);
                ${accordionTokens.accordionItemTextFontSize}: var(--plasma-typo-body-m-font-size);
                ${accordionTokens.accordionItemTextFontStyle}: var(--plasma-typo-body-m-font-style);
                ${accordionTokens.accordionItemTextFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${accordionTokens.accordionItemTextLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${accordionTokens.accordionItemTextLineHeight}: var(--plasma-typo-body-m-line-height);
            `,
            h6: css`
                ${accordionTokens.accordionItemPaddingVertical}: 1.25rem;
                ${accordionTokens.accordionItemPaddingHorizontal}: 1.375rem;
                ${accordionTokens.accordionItemBodyPaddingBottom}: 1.375rem;
                ${accordionTokens.accordionItemGap}: 0.25rem;
                ${accordionTokens.accordionItemBorderRadius}: 0.875rem;
                ${accordionTokens.accordionGap}: 1.25rem;

                ${accordionTokens.accordionItemTitleFontFamily}: var(--plasma-typo-h6-font-family);
                ${accordionTokens.accordionItemTitleFontSize}: var(--plasma-typo-h6-font-size);
                ${accordionTokens.accordionItemTitleFontStyle}: var(--plasma-typo-h6-font-style);
                ${accordionTokens.accordionItemTitleFontWeight}: var(--plasma-typo-h6-font-weight);
                ${accordionTokens.accordionItemTitleLetterSpacing}: var(--plasma-typo-h6-letter-spacing);
                ${accordionTokens.accordionItemTitleLineHeight}: var(--plasma-typo-h6-line-height);

                ${accordionTokens.accordionItemTextFontFamily}: var(--plasma-typo-body-m-font-family);
                ${accordionTokens.accordionItemTextFontSize}: var(--plasma-typo-body-m-font-size);
                ${accordionTokens.accordionItemTextFontStyle}: var(--plasma-typo-body-m-font-style);
                ${accordionTokens.accordionItemTextFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${accordionTokens.accordionItemTextLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${accordionTokens.accordionItemTextLineHeight}: var(--plasma-typo-body-m-line-height);
            `,
        },
    },
};
