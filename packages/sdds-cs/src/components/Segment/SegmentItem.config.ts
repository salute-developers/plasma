import { css, segmentTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 's',
    },
    variations: {
        view: {
            default: css`
                ${segmentTokens.itemColor}: var(--text-accent);
                ${segmentTokens.itemBackgroundColor}: transparent;
                ${segmentTokens.itemColorHover}: var(--text-accent-hover);
                ${segmentTokens.itemBackgroundColorHover}: transparent;
                ${segmentTokens.itemAdditionalColor}: var(--text-accent-minor);
                ${segmentTokens.itemAdditionalColorHover}: var(--text-accent-minor);
                ${segmentTokens.itemSelectedColor}: var(--text-primary);
                ${segmentTokens.itemSelectedBackgroundColor}: var(--surface-solid-card);
                ${segmentTokens.itemSelectedColorHover}: var(--text-primary-hover);
                ${segmentTokens.itemSelectedBackgroundColorHover}: var(--surface-solid-card);
                ${segmentTokens.itemSelectedAdditionalColor}: var(--text-secondary);
                ${segmentTokens.itemSelectedAdditionalColorHover}: var(--text-secondary);

                ${segmentTokens.outlineFocusColor}: var(--surface-accent);
            `,
            secondary: css`
                ${segmentTokens.itemColor}: var(--text-accent);
                ${segmentTokens.itemBackgroundColor}: transparent;
                ${segmentTokens.itemColorHover}: var(--text-accent-hover);
                ${segmentTokens.itemBackgroundColorHover}: transparent;
                ${segmentTokens.itemAdditionalColor}: var(--text-accent-minor);
                ${segmentTokens.itemAdditionalColorHover}: var(--text-accent-minor);
                ${segmentTokens.itemSelectedColor}: var(--text-accent);
                ${segmentTokens.itemSelectedBackgroundColor}: var(--surface-solid-card);
                ${segmentTokens.itemSelectedColorHover}: var(--text-accent-hover);
                ${segmentTokens.itemSelectedBackgroundColorHover}: var(--surface-solid-card);
                ${segmentTokens.itemSelectedAdditionalColor}: var(--text-accent-minor);
                ${segmentTokens.itemSelectedAdditionalColorHover}: var(--text-accent-minor);

                ${segmentTokens.outlineFocusColor}: var(--surface-accent);
            `,
        },
        size: {
            s: css`
                ${segmentTokens.itemBorderRadius}: 0.625rem;
                ${segmentTokens.itemWidth}: auto;
                ${segmentTokens.itemHeight}: 2.5rem;
                ${segmentTokens.itemPadding}: 0.5rem 1rem;
                ${segmentTokens.itemPilledPadding}: 0.5rem 0.5rem;
                ${segmentTokens.itemContentPadding}: 0.1875rem 0.125rem;
                ${segmentTokens.itemIconMargin}: 0.125rem;
                ${segmentTokens.itemMarginLeft}: 0rem;

                ${segmentTokens.fontFamily}: var(--plasma-typo-body-m-font-family);
                ${segmentTokens.fontSize}: var(--plasma-typo-body-m-font-size);
                ${segmentTokens.fontStyle}: var(--plasma-typo-body-m-font-style);
                ${segmentTokens.fontWeight}: var(--plasma-typo-body-m-bold-font-weight);
                ${segmentTokens.letterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${segmentTokens.lineHeight}: var(--plasma-typo-body-m-line-height);
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
