import { css } from '@linaria/core';

import { accordionTokens } from '../../../../components/Accordion';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${accordionTokens.accordionGap}: 0.125rem;
                ${accordionTokens.accordionWidth}: 20rem;
                ${accordionTokens.accordionItemPadding}: var(${accordionTokens.accordionItemPaddingVertical}) var(${accordionTokens.accordionItemPaddingHorizontal});
                ${accordionTokens.accordionItemBackground}: var(--surface-solid-card);
                ${accordionTokens.accordionItemTitleColor}: var(--text-primary);
                ${accordionTokens.accordionItemTextColor}: var(--text-primary);
                ${accordionTokens.accordionItemIconColor}: var(--text-primary);
                ${accordionTokens.accordionItemFocus}: var(--surface-accent);
                ${accordionTokens.accordionBackground}: var(--surface-clear);
                ${accordionTokens.accordionItemBorder}: none;
                ${accordionTokens.accordionItemBorderBottom}: 0;
                ${accordionTokens.accordionItemPaddingHorizontalLeft}: var(${accordionTokens.accordionItemPaddingHorizontal});
            `,
            clear: css`
                ${accordionTokens.accordionGap}: 0.125rem;
                ${accordionTokens.accordionWidth}: 20rem;
                ${accordionTokens.accordionItemPadding}: var(${accordionTokens.accordionItemPaddingVertical}) 0rem;
                ${accordionTokens.accordionItemBackground}: var(--surface-clear);
                ${accordionTokens.accordionItemTitleColor}: var(--text-primary);
                ${accordionTokens.accordionItemTextColor}: var(--text-primary);
                ${accordionTokens.accordionItemIconColor}: var(--text-primary);
                ${accordionTokens.accordionItemFocus}: var(--surface-accent);
                ${accordionTokens.accordionItemBorderRadius}: 0rem !important;
                ${accordionTokens.accordionBackground}: var(--surface-clear);
                ${accordionTokens.accordionItemBorder}: none;
                ${accordionTokens.accordionItemBorderBottom}: 0.125rem solid var(--surface-solid-tertiary);
                ${accordionTokens.accordionItemPaddingHorizontalLeft}: 0;
            `,
        },
        size: {
            l: css`
                ${accordionTokens.accordionItemPaddingVertical}: 1.0625rem;
                ${accordionTokens.accordionItemPaddingHorizontal}: 1.25rem;
                ${accordionTokens.accordionItemGap}: 0.5rem;
                ${accordionTokens.accordionItemBorderRadius}: 0.875rem;

                ${accordionTokens.accordionItemTitleFontFamily}: var(--plasma-typo-body-l-font-family);
                ${accordionTokens.accordionItemTitleFontSize}: var(--plasma-typo-body-l-font-size);
                ${accordionTokens.accordionItemTitleFontStyle}: var(--plasma-typo-body-l-font-style);
                ${accordionTokens.accordionItemTitleFontWeight}: var(--plasma-typo-body-l-bold-font-weight);
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
                ${accordionTokens.accordionItemPaddingHorizontal}: 1.125rem;
                ${accordionTokens.accordionItemGap}: 0.375rem;
                ${accordionTokens.accordionItemBorderRadius}: 0.75rem;

                ${accordionTokens.accordionItemTitleFontFamily}: var(--plasma-typo-body-m-font-family);
                ${accordionTokens.accordionItemTitleFontSize}: var(--plasma-typo-body-m-font-size);
                ${accordionTokens.accordionItemTitleFontStyle}: var(--plasma-typo-body-m-font-style);
                ${accordionTokens.accordionItemTitleFontWeight}: var(--plasma-typo-body-m-bold-font-weight);
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
                ${accordionTokens.accordionItemGap}: 0.375rem;
                ${accordionTokens.accordionItemBorderRadius}: 0.625rem;

                ${accordionTokens.accordionItemTitleFontFamily}: var(--plasma-typo-body-s-font-family);
                ${accordionTokens.accordionItemTitleFontSize}: var(--plasma-typo-body-s-font-size);
                ${accordionTokens.accordionItemTitleFontStyle}: var(--plasma-typo-body-s-font-style);
                ${accordionTokens.accordionItemTitleFontWeight}: var(--plasma-typo-body-s-bold-font-weight);
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
                ${accordionTokens.accordionItemPaddingVertical}: 0.5rem;
                ${accordionTokens.accordionItemPaddingHorizontal}: 0.75rem;
                ${accordionTokens.accordionItemGap}: 0.25rem;
                ${accordionTokens.accordionItemBorderRadius}: 0.5rem;

                ${accordionTokens.accordionItemTitleFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${accordionTokens.accordionItemTitleFontSize}: var(--plasma-typo-body-xs-font-size);
                ${accordionTokens.accordionItemTitleFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${accordionTokens.accordionItemTitleFontWeight}: var(--plasma-typo-body-xs-bold-font-weight);
                ${accordionTokens.accordionItemTitleLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${accordionTokens.accordionItemTitleLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${accordionTokens.accordionItemTextFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${accordionTokens.accordionItemTextFontSize}: var(--plasma-typo-body-xs-font-size);
                ${accordionTokens.accordionItemTextFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${accordionTokens.accordionItemTextFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${accordionTokens.accordionItemTextLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${accordionTokens.accordionItemTextLineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
        },
        stretching: {
            filled: css``,
            fixed: css``,
        },
    },
};
