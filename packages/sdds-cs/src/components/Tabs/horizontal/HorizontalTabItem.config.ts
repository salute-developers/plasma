import { css, tabsTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'secondary',
        size: 's',
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
                ${tabsTokens.itemSelectedDividerColor}: var(--surface-solid-default);
                ${tabsTokens.itemSelectedDividerColorHover}: var(--surface-solid-default-hover);

                ${tabsTokens.itemCursor}: default;
                ${tabsTokens.itemCursorOverNotSelected}: pointer;
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
                ${tabsTokens.itemSelectedBackgroundColor}: var(--surface-transparent-card);
                ${tabsTokens.itemSelectedColorHover}: var(--text-primary);
                ${tabsTokens.itemSelectedValueColorHover}: var(--text-secondary);
                ${tabsTokens.itemSelectedBackgroundColorHover}: var(--surface-transparent-card);
                ${tabsTokens.itemBackgroundTransition}: background-color 0.3s ease-in-out;

                ${tabsTokens.itemMarginLeftFilled}: 0.125rem;

                ${tabsTokens.outlineFocusColor}: var(--surface-accent);

                ${tabsTokens.itemSelectedDividerHeight}: 0rem;
                ${tabsTokens.itemSelectedDividerColor}: var(--surface-solid-default);
                ${tabsTokens.itemSelectedDividerColorHover}: var(--surface-solid-default-hover);

                ${tabsTokens.itemCursor}: default;
                ${tabsTokens.itemCursorOverNotSelected}: pointer;
            `,
            divider: css`
                ${tabsTokens.itemColor}: var(--text-accent);
                ${tabsTokens.itemValueColor}: var(--text-secondary);
                ${tabsTokens.itemBackgroundColor}: transparent;
                ${tabsTokens.itemColorHover}: #1A9E32;
                ${tabsTokens.itemValueColorHover}: var(--text-secondary);
                ${tabsTokens.itemColorActive}: var(--text-accent-active);
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
                ${tabsTokens.itemSelectedDividerColor}: var(--surface-solid-default);
                ${tabsTokens.itemSelectedDividerColorHover}: var(--surface-solid-default-hover);

                ${tabsTokens.itemCursor}: default;
                ${tabsTokens.itemCursorOverNotSelected}: pointer;
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
                ${tabsTokens.itemSelectedValueColor}: var(--on-dark-text-secondary);
                ${tabsTokens.itemSelectedBackgroundColor}: var(--surface-solid-default);
                ${tabsTokens.itemSelectedColorHover}: var(--inverse-text-primary);
                ${tabsTokens.itemSelectedValueColorHover}: var(--on-dark-text-secondary);
                ${tabsTokens.itemSelectedBackgroundColorHover}: var(--surface-solid-default);
                ${tabsTokens.itemBackgroundTransition}: background-color 0.3s ease-in-out;

                ${tabsTokens.itemMarginLeftFilled}: 0.125rem;

                ${tabsTokens.outlineFocusColor}: var(--surface-accent);

                ${tabsTokens.itemSelectedDividerHeight}: 0rem;
                ${tabsTokens.itemSelectedDividerColor}: var(--surface-solid-default);
                ${tabsTokens.itemSelectedDividerColorHover}: var(--surface-solid-default-hover);

                ${tabsTokens.itemCursor}: default;
                ${tabsTokens.itemCursorOverNotSelected}: pointer;
            `,
        },
        size: {
            s: css`
                ${tabsTokens.itemBorderRadius}: 0.5rem;
                ${tabsTokens.itemWidth}: auto;
                ${tabsTokens.itemHeight}: 2.5rem;
                ${tabsTokens.itemPadding}: 0 0.625rem;
                ${tabsTokens.itemPaddingPilled}: 0 0.5rem;
                ${tabsTokens.itemMarginLeft}: 1.75rem;
                ${tabsTokens.itemContentGap}: 0.25rem;
                ${tabsTokens.itemContentPadding}: 0.125rem;

                ${tabsTokens.fontFamily}: var(--plasma-typo-body-m-bold-font-family);
                ${tabsTokens.fontSize}: var(--plasma-typo-body-m-bold-font-size);
                ${tabsTokens.fontStyle}: var(--plasma-typo-body-m-bold-font-style);
                ${tabsTokens.fontWeight}: var(--plasma-typo-body-m-bold-font-weight);
                ${tabsTokens.letterSpacing}: var(--plasma-typo-body-m-bold-letter-spacing);
                ${tabsTokens.lineHeight}: var(--plasma-typo-body-m-bold-line-height);

                ${tabsTokens.valueFontFamily}: var(--plasma-typo-body-m-font-family);
                ${tabsTokens.valueFontSize}: var(--plasma-typo-body-m-font-size);
                ${tabsTokens.valueFontStyle}: var(--plasma-typo-body-m-font-style);
                ${tabsTokens.valueFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tabsTokens.valueLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tabsTokens.valueLineHeight}: var(--plasma-typo-body-m-line-height);
            `,
        },
        disabled: {
            true: css`
                ${tabsTokens.itemColor}: var(--text-secondary);
                ${tabsTokens.itemValueColor}: var(--text-secondary);
                ${tabsTokens.itemColorHover}: var(--text-secondary);
                ${tabsTokens.itemValueColorHover}: var(--text-secondary);
                ${tabsTokens.itemColorActive}: var(--text-secondary);
                ${tabsTokens.itemValueColorActive}: var(--text-secondary);
                ${tabsTokens.itemSelectedColor}: var(--text-secondary);
                ${tabsTokens.itemSelectedDividerColor}: none;
                ${tabsTokens.itemSelectedDividerColorHover}: none;
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
