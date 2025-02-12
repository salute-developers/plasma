import { css, segmentTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'clear',
        size: 'xs',
    },
    variations: {
        view: {
            clear: css`
                ${segmentTokens.itemColor}: var(--text-secondary);
                ${segmentTokens.itemBackgroundColor}: transparent;
                ${segmentTokens.itemColorHover}: var(--text-primary-hover);
                ${segmentTokens.itemBackgroundColorHover}: transparent;
                ${segmentTokens.itemAdditionalColor}: var(--text-tertiary);
                ${segmentTokens.itemAdditionalColorHover}: var(--text-secondary);
                ${segmentTokens.itemSelectedColor}: var(--text-primary-hover);
                ${segmentTokens.itemSelectedBackgroundColor}: transparent;
                ${segmentTokens.itemSelectedColorHover}: var(--text-primary);
                ${segmentTokens.itemSelectedBackgroundColorHover}: transparent;
                ${segmentTokens.itemSelectedAdditionalColor}: var(--text-secondary);
                ${segmentTokens.itemSelectedAdditionalColorHover}: var(--text-secondary);

                ${segmentTokens.groupFilledBackgroundColor}: var(--text-accent);
            `,
            secondary: css`
                ${segmentTokens.itemColor}: var(--text-primary);
                ${segmentTokens.itemBackgroundColor}: transparent;
                ${segmentTokens.itemColorHover}: var(--text-primary-hover);
                ${segmentTokens.itemBackgroundColorHover}: transparent;
                ${segmentTokens.itemAdditionalColor}: var(--text-secondary);
                ${segmentTokens.itemAdditionalColorHover}: var(--text-secondary);
                ${segmentTokens.itemSelectedColor}: var(--text-accent);
                ${segmentTokens.itemSelectedBackgroundColor}: var(--surface-solid-card);
                ${segmentTokens.itemSelectedColorHover}: var(--text-accent-hover);
                ${segmentTokens.itemSelectedBackgroundColorHover}: var(--surface-solid-card);
                ${segmentTokens.itemSelectedAdditionalColor}: var(--text-secondary);
                ${segmentTokens.itemSelectedAdditionalColorHover}: var(--text-secondary);

                ${segmentTokens.groupFilledBackgroundColor}: var(--text-accent);
            `,
            default: css`
                ${segmentTokens.itemColor}: var(--text-primary);
                ${segmentTokens.itemBackgroundColor}: transparent;
                ${segmentTokens.itemColorHover}: var(--text-primary-hover);
                ${segmentTokens.itemBackgroundColorHover}: transparent;
                ${segmentTokens.itemAdditionalColor}: var(--text-secondary);
                ${segmentTokens.itemAdditionalColorHover}: var(--text-secondary);
                ${segmentTokens.itemSelectedColor}: var(--inverse-text-primary);
                ${segmentTokens.itemSelectedBackgroundColor}: var(--surface-solid-default);
                ${segmentTokens.itemSelectedColorHover}: var(--inverse-text-primary-hover);
                ${segmentTokens.itemSelectedBackgroundColorHover}: var(--surface-solid-default);
                ${segmentTokens.itemSelectedAdditionalColor}: var(--inverse-text-secondary);
                ${segmentTokens.itemSelectedAdditionalColorHover}: var(--inverse-text-secondary);

                ${segmentTokens.groupFilledBackgroundColor}: var(--text-accent);
            `,
            accent: css`
                ${segmentTokens.itemColor}: var(--text-primary);
                ${segmentTokens.itemBackgroundColor}: transparent;
                ${segmentTokens.itemColorHover}: var(--text-primary-hover);
                ${segmentTokens.itemBackgroundColorHover}: transparent;
                ${segmentTokens.itemAdditionalColor}: var(--text-secondary);
                ${segmentTokens.itemAdditionalColorHover}: var(--text-secondary);
                ${segmentTokens.itemSelectedColor}: var(--inverse-text-primary);
                ${segmentTokens.itemSelectedBackgroundColor}: var(--surface-accent);
                ${segmentTokens.itemSelectedColorHover}: var(--inverse-text-primary-hover);
                ${segmentTokens.itemSelectedBackgroundColorHover}: var(--surface-accent);
                ${segmentTokens.itemSelectedAdditionalColor}: var(--inverse-text-secondary);
                ${segmentTokens.itemSelectedAdditionalColorHover}: var(--inverse-text-secondary);

                ${segmentTokens.groupFilledBackgroundColor}: var(--text-accent);
            `,
        },
        size: {
            xs: css`
                ${segmentTokens.itemBorderRadius}: 0.5rem;
                ${segmentTokens.itemWidth}: auto;
                ${segmentTokens.itemHeight}: 2rem;
                ${segmentTokens.itemPadding}: 0.5rem 0.75rem;
                ${segmentTokens.itemPilledPadding}: 0.5rem 0.5rem;
                ${segmentTokens.itemContentPadding}: 0.0625rem 0.125rem;
                ${segmentTokens.itemIconMargin}: 0.125rem;
                ${segmentTokens.itemMarginLeft}: 0;

                ${segmentTokens.fontFamily}: var(--plasma-typo-body-xs-font-family);
                ${segmentTokens.fontSize}: var(--plasma-typo-body-xs-font-size);
                ${segmentTokens.fontStyle}: var(--plasma-typo-body-xs-font-style);
                ${segmentTokens.fontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${segmentTokens.fontWeightSelectedItem}: var(--plasma-typo-body-xs-bold-font-weight);
                ${segmentTokens.letterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${segmentTokens.lineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
            s: css`
                ${segmentTokens.itemBorderRadius}: 0.625rem;
                ${segmentTokens.itemWidth}: auto;
                ${segmentTokens.itemHeight}: 2.5rem;
                ${segmentTokens.itemPadding}: 0.5rem 1rem;
                ${segmentTokens.itemPilledPadding}: 0.5rem 0.5rem;
                ${segmentTokens.itemContentPadding}: 0.1875rem 0.125rem;
                ${segmentTokens.itemIconMargin}: 0.125rem;
                ${segmentTokens.itemMarginLeft}: 0rem;

                ${segmentTokens.fontFamily}: var(--plasma-typo-body-xs-font-family);
                ${segmentTokens.fontSize}: var(--plasma-typo-body-xs-font-size);
                ${segmentTokens.fontStyle}: var(--plasma-typo-body-xs-font-style);
                ${segmentTokens.fontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${segmentTokens.fontWeightSelectedItem}: var(--plasma-typo-body-xs-bold-font-weight);
                ${segmentTokens.letterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${segmentTokens.lineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
            m: css`
                ${segmentTokens.itemBorderRadius}: 0.75rem;
                ${segmentTokens.itemWidth}: auto;
                ${segmentTokens.itemHeight}: 3rem;
                ${segmentTokens.itemPadding}: 0.75rem 1.25rem;
                ${segmentTokens.itemPilledPadding}: 0.75rem 0.75rem;
                ${segmentTokens.itemContentPadding}: 0.125rem;
                ${segmentTokens.itemIconMargin}: 0.25rem;
                ${segmentTokens.itemMarginLeft}: 0rem;

                ${segmentTokens.fontFamily}: var(--plasma-typo-body-xs-font-family);
                ${segmentTokens.fontSize}: var(--plasma-typo-body-xs-font-size);
                ${segmentTokens.fontStyle}: var(--plasma-typo-body-xs-font-style);
                ${segmentTokens.fontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${segmentTokens.fontWeightSelectedItem}: var(--plasma-typo-body-xs-bold-font-weight);
                ${segmentTokens.letterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${segmentTokens.lineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
            l: css`
                ${segmentTokens.itemBorderRadius}: 0.875rem;
                ${segmentTokens.itemWidth}: auto;
                ${segmentTokens.itemHeight}: 3.5rem;
                ${segmentTokens.itemPadding}: 1rem 1.5rem; /* 1.625 */
                ${segmentTokens.itemPilledPadding}: 1rem 1rem;
                ${segmentTokens.itemContentPadding}: 0.0625rem 0.125rem;
                ${segmentTokens.itemIconMargin}: 0.375rem;
                ${segmentTokens.itemMarginLeft}: 0;

                ${segmentTokens.fontFamily}: var(--plasma-typo-body-s-font-family);
                ${segmentTokens.fontSize}: var(--plasma-typo-body-s-font-size);
                ${segmentTokens.fontStyle}: var(--plasma-typo-body-s-font-style);
                ${segmentTokens.fontWeight}: var(--plasma-typo-body-s-font-weight);
                ${segmentTokens.fontWeightSelectedItem}: var(--plasma-typo-body-s-bold-font-weight);
                ${segmentTokens.letterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${segmentTokens.lineHeight}: var(--plasma-typo-body-s-line-height);
            `,
        },
        disabled: {
            true: css`
                ${segmentTokens.disabledOpacity}: 0.4;
            `,
        },
        pilled: {
            true: css`
                ${segmentTokens.itemPilledBorderRadius}: 1.75rem;
            `,
        },
    },
};
