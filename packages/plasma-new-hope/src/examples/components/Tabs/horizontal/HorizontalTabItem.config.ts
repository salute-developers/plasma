import { css } from '@linaria/core';

import { tabsTokens } from '../../../../components/Tabs';

export const config = {
    defaults: {
        view: 'default',
        size: 'xs',
    },
    variations: {
        view: {
            clear: css`
                ${tabsTokens.itemColor}: var(--text-secondary);
                ${tabsTokens.itemValueColor}: var(--text-tertiary);
                ${tabsTokens.itemBackgroundColor}: transparent;
                ${tabsTokens.itemColorHover}: var(--text-secondary-hover);
                ${tabsTokens.itemValueColorHover}: var(--text-secondary);
                ${tabsTokens.itemColorActive}: var(--text-secondary-active);
                ${tabsTokens.itemValueColorActive}: var(--text-secondary);
                ${tabsTokens.itemBackgroundColorHover}: transparent;
                ${tabsTokens.itemSelectedColor}: var(--text-primary);
                ${tabsTokens.itemSelectedValueColor}: var(--text-secondary);
                ${tabsTokens.itemSelectedBackgroundColor}: transparent;
                ${tabsTokens.itemSelectedColorHover}: var(--text-primary);
                ${tabsTokens.itemSelectedValueColorHover}: var(--text-secondary);
                ${tabsTokens.itemSelectedBackgroundColorHover}: transparent;
                ${tabsTokens.itemBackgroundTransition}: background-color 0.3s ease-in-out;

                ${tabsTokens.itemPaddingClear}: 0;
                ${tabsTokens.itemContentPaddingClear}: 0;

                ${tabsTokens.outlineFocusColor}: var(--surface-accent);

                ${tabsTokens.itemSelectedDividerHeight}: 0rem;
                ${tabsTokens.itemSelectedDividerColor}: var(--text-primary);
                ${tabsTokens.itemSelectedDividerColorHover}: var(--text-primary);

                ${tabsTokens.itemCursor}: pointer;
            `,
            secondary: css`
                ${tabsTokens.itemColor}: var(--text-primary);
                ${tabsTokens.itemValueColor}: var(--text-secondary);
                ${tabsTokens.itemBackgroundColor}: transparent;
                ${tabsTokens.itemColorHover}: var(--text-secondary-hover);
                ${tabsTokens.itemValueColorHover}: var(--text-secondary);
                ${tabsTokens.itemColorActive}: var(--text-secondary-active);
                ${tabsTokens.itemValueColorActive}: var(--text-secondary);
                ${tabsTokens.itemBackgroundColorHover}: transparent;
                ${tabsTokens.itemSelectedColor}: var(--text-primary);
                ${tabsTokens.itemSelectedValueColor}: var(--text-secondary);
                ${tabsTokens.itemSelectedBackgroundColor}: var(--surface-solid-card);
                ${tabsTokens.itemSelectedColorHover}: var(--text-primary);
                ${tabsTokens.itemSelectedValueColorHover}: var(--text-secondary);
                ${tabsTokens.itemSelectedBackgroundColorHover}: var(--surface-solid-card);
                ${tabsTokens.itemBackgroundTransition}: background-color 0.3s ease-in-out;

                ${tabsTokens.itemMarginLeftFilled}: 0.125rem;

                ${tabsTokens.outlineFocusColor}: var(--surface-accent);

                ${tabsTokens.itemSelectedDividerHeight}: 0rem;
                ${tabsTokens.itemSelectedDividerColor}: var(--text-primary);
                ${tabsTokens.itemSelectedDividerColorHover}: var(--text-primary);

                ${tabsTokens.itemCursor}: pointer;
            `,
            divider: css`
                ${tabsTokens.itemColor}: var(--text-secondary);
                ${tabsTokens.itemValueColor}: var(--text-tertiary);
                ${tabsTokens.itemBackgroundColor}: transparent;
                ${tabsTokens.itemColorHover}: var(--text-secondary-hover);
                ${tabsTokens.itemValueColorHover}: var(--text-secondary);
                ${tabsTokens.itemColorActive}: var(--text-secondary-active);
                ${tabsTokens.itemValueColorActive}: var(--text-secondary);
                ${tabsTokens.itemBackgroundColorHover}: transparent;
                ${tabsTokens.itemSelectedColor}: var(--text-primary);
                ${tabsTokens.itemSelectedValueColor}: var(--text-secondary);
                ${tabsTokens.itemSelectedBackgroundColor}: transparent;
                ${tabsTokens.itemSelectedColorHover}: var(--text-primary);
                ${tabsTokens.itemSelectedValueColorHover}: var(--text-secondary);
                ${tabsTokens.itemSelectedBackgroundColorHover}: transparent;
                ${tabsTokens.itemBackgroundTransition}: background-color 0.3s ease-in-out;

                ${tabsTokens.itemPaddingClear}: 0;
                ${tabsTokens.itemContentPaddingClear}: 0;

                ${tabsTokens.outlineFocusColor}: var(--surface-accent);

                ${tabsTokens.itemSelectedDividerHeight}: 0.125rem;
                ${tabsTokens.itemSelectedDividerColor}: var(--text-primary);
                ${tabsTokens.itemSelectedDividerColorHover}: var(--text-primary);

                ${tabsTokens.itemCursor}: pointer;
            `,
            default: css`
                ${tabsTokens.itemColor}: var(--text-primary);
                ${tabsTokens.itemValueColor}: var(--text-secondary);
                ${tabsTokens.itemBackgroundColor}: transparent;
                ${tabsTokens.itemColorHover}: var(--text-secondary-hover);
                ${tabsTokens.itemValueColorHover}: var(--text-secondary);
                ${tabsTokens.itemColorActive}: var(--text-secondary-active);
                ${tabsTokens.itemValueColorActive}: var(--text-secondary);
                ${tabsTokens.itemBackgroundColorHover}: transparent;
                ${tabsTokens.itemSelectedColor}: var(--inverse-text-primary);
                ${tabsTokens.itemSelectedValueColor}: var(--inverse-text-secondary);
                ${tabsTokens.itemSelectedBackgroundColor}: var(--surface-solid-default);
                ${tabsTokens.itemSelectedColorHover}: var(--inverse-text-primary);
                ${tabsTokens.itemSelectedValueColorHover}: var(--inverse-text-secondary);
                ${tabsTokens.itemSelectedBackgroundColorHover}: var(--surface-solid-default);
                ${tabsTokens.itemBackgroundTransition}: background-color 0.3s ease-in-out;

                ${tabsTokens.itemMarginLeftFilled}: 0.125rem;

                ${tabsTokens.outlineFocusColor}: var(--surface-accent);

                ${tabsTokens.itemSelectedDividerHeight}: 0rem;
                ${tabsTokens.itemSelectedDividerColor}: var(--text-primary);
                ${tabsTokens.itemSelectedDividerColorHover}: var(--text-primary);

                ${tabsTokens.itemCursor}: pointer;
            `,
        },
        size: {
            xs: css`
                ${tabsTokens.itemBorderRadius}: 0.375rem;
                ${tabsTokens.itemWidth}: auto;
                ${tabsTokens.itemHeight}: 2rem;
                ${tabsTokens.itemPadding}: 0 0.5rem;
                ${tabsTokens.itemPaddingPilled}: 0 0.375rem;
                ${tabsTokens.itemMarginLeft}: 1.75rem;
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
                ${tabsTokens.itemMarginLeft}: 1.75rem;
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
                ${tabsTokens.itemMarginLeft}: 1.75rem;
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
                ${tabsTokens.itemMarginLeft}: 1.75rem;
                ${tabsTokens.itemContentGap}: 0.5rem;
                ${tabsTokens.itemContentPadding}: 0.125rem;

                ${tabsTokens.fontFamily}: var(--plasma-typo-body-l-font-family);
                ${tabsTokens.fontSize}: var(--plasma-typo-body-l-font-size);
                ${tabsTokens.fontStyle}: var(--plasma-typo-body-l-font-style);
                ${tabsTokens.fontWeight}: var(--plasma-typo-body-l-font-weight);
                ${tabsTokens.letterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${tabsTokens.lineHeight}: var(--plasma-typo-body-l-line-height);
            `,
            h5: css`
                ${tabsTokens.itemBorderRadius}: 0.375rem;
                ${tabsTokens.itemWidth}: auto;
                ${tabsTokens.itemHeight}: 3rem;
                ${tabsTokens.itemPadding}: 0rem;
                ${tabsTokens.itemMarginLeft}: 1.75rem;
                ${tabsTokens.itemContentGap}: 0.625rem;

                ${tabsTokens.fontFamily}: var(--plasma-typo-h5-font-family);
                ${tabsTokens.fontSize}: var(--plasma-typo-h5-font-size);
                ${tabsTokens.fontStyle}: var(--plasma-typo-h5-font-style);
                ${tabsTokens.fontWeight}: var(--plasma-typo-h5-font-weight);
                ${tabsTokens.letterSpacing}: var(--plasma-typo-h5-letter-spacing);
                ${tabsTokens.lineHeight}: var(--plasma-typo-h5-line-height);
            `,
            h4: css`
                ${tabsTokens.itemBorderRadius}: 0.375rem;
                ${tabsTokens.itemWidth}: auto;
                ${tabsTokens.itemHeight}: 3.25rem;
                ${tabsTokens.itemPadding}: 0rem;
                ${tabsTokens.itemMarginLeft}: 2rem;
                ${tabsTokens.itemContentGap}: 0.625rem;

                ${tabsTokens.fontFamily}: var(--plasma-typo-h4-font-family);
                ${tabsTokens.fontSize}: var(--plasma-typo-h4-font-size);
                ${tabsTokens.fontStyle}: var(--plasma-typo-h4-font-style);
                ${tabsTokens.fontWeight}: var(--plasma-typo-h4-font-weight);
                ${tabsTokens.letterSpacing}: var(--plasma-typo-h4-letter-spacing);
                ${tabsTokens.lineHeight}: var(--plasma-typo-h4-line-height);
            `,
            h3: css`
                ${tabsTokens.itemBorderRadius}: 0.5rem;
                ${tabsTokens.itemWidth}: auto;
                ${tabsTokens.itemHeight}: 3.875rem;
                ${tabsTokens.itemPadding}: 0rem;
                ${tabsTokens.itemMarginLeft}: 2.25rem;
                ${tabsTokens.itemContentGap}: 0.75rem;

                ${tabsTokens.fontFamily}: var(--plasma-typo-h3-font-family);
                ${tabsTokens.fontSize}: var(--plasma-typo-h3-font-size);
                ${tabsTokens.fontStyle}: var(--plasma-typo-h3-font-style);
                ${tabsTokens.fontWeight}: var(--plasma-typo-h3-font-weight);
                ${tabsTokens.letterSpacing}: var(--plasma-typo-h3-letter-spacing);
                ${tabsTokens.lineHeight}: var(--plasma-typo-h3-line-height);
            `,
            h2: css`
                ${tabsTokens.itemBorderRadius}: 0.625rem;
                ${tabsTokens.itemWidth}: auto;
                ${tabsTokens.itemHeight}: 4.5rem;
                ${tabsTokens.itemPadding}: 0rem;
                ${tabsTokens.itemMarginLeft}: 2.5rem;
                ${tabsTokens.itemContentGap}: 0.875rem;

                ${tabsTokens.fontFamily}: var(--plasma-typo-h2-font-family);
                ${tabsTokens.fontSize}: var(--plasma-typo-h2-font-size);
                ${tabsTokens.fontStyle}: var(--plasma-typo-h2-font-style);
                ${tabsTokens.fontWeight}: var(--plasma-typo-h2-font-weight);
                ${tabsTokens.letterSpacing}: var(--plasma-typo-h2-letter-spacing);
                ${tabsTokens.lineHeight}: var(--plasma-typo-h2-line-height);
            `,
            h1: css`
                ${tabsTokens.itemBorderRadius}: 0.75rem;
                ${tabsTokens.itemWidth}: auto;
                ${tabsTokens.itemHeight}: 5.75rem;
                ${tabsTokens.itemPadding}: 0rem;
                ${tabsTokens.itemMarginLeft}: 3.5rem;
                ${tabsTokens.itemContentGap}: 1rem;

                ${tabsTokens.fontFamily}: var(--plasma-typo-h1-font-family);
                ${tabsTokens.fontSize}: var(--plasma-typo-h1-font-size);
                ${tabsTokens.fontStyle}: var(--plasma-typo-h1-font-style);
                ${tabsTokens.fontWeight}: var(--plasma-typo-h1-font-weight);
                ${tabsTokens.letterSpacing}: var(--plasma-typo-h1-letter-spacing);
                ${tabsTokens.lineHeight}: var(--plasma-typo-h1-line-height);
            `,
        },
        disabled: {
            true: css`
                ${tabsTokens.disabledOpacity}: 0.4;
            `,
        },
        pilled: {
            true: css`
                ${tabsTokens.itemPilledBorderRadius}: 1.5rem;
            `,
        },
        truncate: {
            true: css``,
        },
    },
};
