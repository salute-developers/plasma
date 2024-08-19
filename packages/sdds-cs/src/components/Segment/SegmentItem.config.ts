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
                ${segmentTokens.itemColorHover}: var(--text-primary);
                ${segmentTokens.itemBackgroundColorHover}: transparent;
                ${segmentTokens.itemSelectedColor}: var(--text-primary);
                ${segmentTokens.itemSelectedBackgroundColor}: transparent;
                ${segmentTokens.itemSelectedColorHover}: var(--text-primary);
                ${segmentTokens.itemSelectedBackgroundColorHover}: transparent;

                ${segmentTokens.outlineFocusColor}: var(--surface-accent);
            `,
            default: css`
                ${segmentTokens.itemColor}: var(--text-primary);
                ${segmentTokens.itemBackgroundColor}: transparent;
                ${segmentTokens.itemColorHover}: var(--text-primary);
                ${segmentTokens.itemBackgroundColorHover}: transparent;
                ${segmentTokens.itemSelectedColor}: var(--inverse-text-primary);
                ${segmentTokens.itemSelectedBackgroundColor}: var(--text-primary);
                ${segmentTokens.itemSelectedColorHover}: var(--inverse-text-primary);
                ${segmentTokens.itemSelectedBackgroundColorHover}: var(--text-primary);

                ${segmentTokens.outlineFocusColor}: var(--surface-accent);
            `,
            secondary: css`
                ${segmentTokens.itemColor}: var(--text-primary);
                ${segmentTokens.itemBackgroundColor}: transparent;
                ${segmentTokens.itemColorHover}: var(--text-primary);
                ${segmentTokens.itemBackgroundColorHover}: transparent;
                ${segmentTokens.itemSelectedColor}: var(--text-primary);
                ${segmentTokens.itemSelectedBackgroundColor}: var(--surface-transparent-card);
                ${segmentTokens.itemSelectedColorHover}: var(--text-primary);
                ${segmentTokens.itemSelectedBackgroundColorHover}: var(--surface-transparent-card);

                ${segmentTokens.outlineFocusColor}: var(--surface-accent);
            `,
        },
        size: {
            s: css`
                ${segmentTokens.itemBorderRadius}: 0.5rem;
                ${segmentTokens.itemWidth}: auto;
                ${segmentTokens.itemHeight}: 2.5rem;
                ${segmentTokens.itemPadding}: 0 0.75rem;
                ${segmentTokens.itemMarginLeft}: 0.125rem;

                ${segmentTokens.fontFamily}: var(--plasma-typo-body-s-font-family);
                ${segmentTokens.fontSize}: var(--plasma-typo-body-s-font-size);
                ${segmentTokens.fontStyle}: var(--plasma-typo-body-s-font-style);
                ${segmentTokens.fontWeight}: var(--plasma-typo-body-s-font-weight);
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
                ${segmentTokens.itemPilledBorderRadius}: 1.5rem;
            `,
        },
    },
};
