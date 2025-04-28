import { css } from '@linaria/core';

import { listTokens } from '../../../../components/List';

export const config = {
    defaults: {
        view: 'default',
        size: 's',
        variant: 'normal',
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
            `,
            onLight: css`
                ${listTokens.listItemColor}: var(--on-light-text-primary);
                ${listTokens.listItemColorHover}: var(--on-light-text-primary);
                ${listTokens.listItemBackground}: transparent;
                ${listTokens.listItemBackgroundHover}: var(--on-light-surface-transparent-secondary);
                ${listTokens.listItemBorderColor}: transparent;
                ${listTokens.listItemBorderColorHover}: transparent;
            `,
            onDark: css`
                ${listTokens.listItemColor}: var(--on-dark-text-primary);
                ${listTokens.listItemColorHover}: var(--on-dark-text-primary);
                ${listTokens.listItemBackground}: transparent;
                ${listTokens.listItemBackgroundHover}: var(--on-dark-surface-transparent-secondary);
                ${listTokens.listItemBorderColor}: transparent;
                ${listTokens.listItemBorderColorHover}: transparent;
            `,
            inverse: css`
                ${listTokens.listItemColor}: var(--inverse-text-primary);
                ${listTokens.listItemColorHover}: var(--inverse-text-primary);
                ${listTokens.listItemBackground}: transparent;
                ${listTokens.listItemBackgroundHover}: var(--inverse-surface-transparent-secondary);
                ${listTokens.listItemBorderColor}: transparent;
                ${listTokens.listItemBorderColorHover}: transparent;
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

                ${listTokens.listItemFontFamily}: var(--plasma-typo-body-l-font-family);
                ${listTokens.listItemFontSize}: var(--plasma-typo-body-l-font-size);
                ${listTokens.listItemFontStyle}: var(--plasma-typo-body-l-font-style);
                ${listTokens.listItemFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${listTokens.listItemLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${listTokens.listItemLineHeight}: var(--plasma-typo-body-l-line-height);
            `,
        },
        variant: {
            normal: css`
                ${listTokens.listDisabledOpacity}: 0.4;
                ${listTokens.listItemVariantDifference}: 0rem;
            `,
            tight: css`
                ${listTokens.listItemVariantDifference}: 0.25rem;
                ${listTokens.listDisabledOpacity}: 0.4;
            `,
        },
        disabled: {
            true: css`
                ${listTokens.listItemBackground}: red;
            `,
        },
    },
};
