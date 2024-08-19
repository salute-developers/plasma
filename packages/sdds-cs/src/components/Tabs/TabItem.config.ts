import { css, tabsTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'secondary',
        size: 'l',
    },
    variations: {
        view: {
            clear: css`
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

                ${tabsTokens.itemSelectedDividerHeight}: 0rem;
                ${tabsTokens.itemSelectedDividerColor}: var(--text-primary);
                ${tabsTokens.itemSelectedDividerColorHover}: var(--text-primary);

                ${tabsTokens.additionalContentColor}: var(--text-tertiary);
                ${tabsTokens.additionalContentHoverColor}: var(--text-secondary);
                ${tabsTokens.additionalContentSelectedColor}: var(--text-secondary);
                ${tabsTokens.additionalContentSelectedHoverColor}: var(--text-secondary);
            `,
            secondary: css`
                ${tabsTokens.itemColor}: var(--text-primary);
                ${tabsTokens.itemBackgroundColor}: transparent;
                ${tabsTokens.itemColorHover}: var(--text-secondary-hover);
                ${tabsTokens.itemColorActive}: var(--text-secondary-active);
                ${tabsTokens.itemBackgroundColorHover}: transparent;
                ${tabsTokens.itemSelectedColor}: var(--text-primary);
                ${tabsTokens.itemSelectedBackgroundColor}: var(--surface-transparent-card);
                ${tabsTokens.itemSelectedColorHover}: var(--text-primary);
                ${tabsTokens.itemSelectedBackgroundColorHover}: var(--surface-transparent-card);
                ${tabsTokens.itemBackgroundTransition}: background-color 0.3s ease-in-out;

                ${tabsTokens.itemMarginLeftFilled}: 0.125rem;

                ${tabsTokens.outlineFocusColor}: var(--surface-accent);

                ${tabsTokens.itemSelectedDividerHeight}: 0rem;
                ${tabsTokens.itemSelectedDividerColor}: var(--text-primary);
                ${tabsTokens.itemSelectedDividerColorHover}: var(--text-primary);

                ${tabsTokens.additionalContentColor}: var(--text-secondary);
                ${tabsTokens.additionalContentHoverColor}: var(--text-secondary);
                ${tabsTokens.additionalContentSelectedColor}: var(--text-secondary);
                ${tabsTokens.additionalContentSelectedHoverColor}: var(--text-secondary);
            `,
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
            default: css`
                ${tabsTokens.itemColor}: var(--text-primary);
                ${tabsTokens.itemBackgroundColor}: transparent;
                ${tabsTokens.itemColorHover}: var(--text-secondary-hover);
                ${tabsTokens.itemColorActive}: var(--text-secondary-active);
                ${tabsTokens.itemBackgroundColorHover}: transparent;
                ${tabsTokens.itemSelectedColor}: var(--inverse-text-primary);
                ${tabsTokens.itemSelectedBackgroundColor}: var(--surface-solid-default);
                ${tabsTokens.itemSelectedColorHover}: var(--inverse-text-primary);
                ${tabsTokens.itemSelectedBackgroundColorHover}: var(--surface-solid-default);
                ${tabsTokens.itemBackgroundTransition}: background-color 0.3s ease-in-out;

                ${tabsTokens.itemMarginLeftFilled}: 0.125rem;

                ${tabsTokens.outlineFocusColor}: var(--surface-accent);

                ${tabsTokens.itemSelectedDividerHeight}: 0rem;
                ${tabsTokens.itemSelectedDividerColor}: var(--text-primary);
                ${tabsTokens.itemSelectedDividerColorHover}: var(--text-primary);

                ${tabsTokens.additionalContentColor}: var(--text-secondary);
                ${tabsTokens.additionalContentHoverColor}: var(--text-secondary);
                ${tabsTokens.additionalContentSelectedColor}: var(--on-dark-text-secondary);
                ${tabsTokens.additionalContentSelectedHoverColor}: var(--on-dark-text-secondary);
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

                ${tabsTokens.fontFamily}: var(--plasma-typo-body-s-font-family);
                ${tabsTokens.fontSize}: var(--plasma-typo-body-s-font-size);
                ${tabsTokens.fontStyle}: var(--plasma-typo-body-s-font-style);
                ${tabsTokens.fontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tabsTokens.letterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tabsTokens.lineHeight}: var(--plasma-typo-body-s-line-height);
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
    },
};
