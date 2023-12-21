import { css, segmentTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'clear',
        size: 'xs',
    },
    variations: {
        view: {
            clear: css`
                ${segmentTokens.itemColor}: var(--plasma-colors-secondary);
                ${segmentTokens.itemBackgroundColor}: transparent;
                ${segmentTokens.itemColorHover}: var(--plasma-colors-primary);
                ${segmentTokens.itemBackgroundColorHover}: transparent;
                ${segmentTokens.itemSelectedColor}: var(--plasma-colors-primary);
                ${segmentTokens.itemSelectedBackgroundColor}: transparent;
                ${segmentTokens.itemSelectedColorHover}: var(--plasma-colors-primary);
                ${segmentTokens.itemSelectedBackgroundColorHover}: transparent;

                ${segmentTokens.outlineFocusColor}: var(--plasma-colors-button-focused);
            `,
            filled: css`
                ${segmentTokens.itemColor}: var(--plasma-colors-primary);
                ${segmentTokens.itemBackgroundColor}: transparent;
                ${segmentTokens.itemColorHover}: var(--plasma-colors-primary);
                ${segmentTokens.itemBackgroundColorHover}: transparent;
                ${segmentTokens.itemSelectedColor}: var(--plasma-colors-primary);
                ${segmentTokens.itemSelectedBackgroundColor}: var(--plasma-colors-background);
                ${segmentTokens.itemSelectedColorHover}: var(--plasma-colors-primary);
                ${segmentTokens.itemSelectedBackgroundColorHover}: var(--plasma-colors-background);

                ${segmentTokens.outlineFocusColor}: var(--plasma-colors-button-focused);
            `,
            default: css`
                ${segmentTokens.itemColor}: var(--plasma-colors-primary);
                ${segmentTokens.itemBackgroundColor}: transparent;
                ${segmentTokens.itemColorHover}: var(--plasma-colors-primary);
                ${segmentTokens.itemBackgroundColorHover}: transparent;
                ${segmentTokens.itemSelectedColor}: var(--plasma-colors-primary);
                ${segmentTokens.itemSelectedBackgroundColor}: var(--plasma-colors-surface-card);
                ${segmentTokens.itemSelectedColorHover}: var(--plasma-colors-primary);
                ${segmentTokens.itemSelectedBackgroundColorHover}: var(--plasma-colors-surface-card);

                ${segmentTokens.outlineFocusColor}: var(--plasma-colors-button-focused);
            `,
            card: css`
                ${segmentTokens.itemColor}: var(--plasma-colors-primary);
                ${segmentTokens.itemBackgroundColor}: transparent;
                ${segmentTokens.itemColorHover}: var(--plasma-colors-primary);
                ${segmentTokens.itemBackgroundColorHover}: transparent;
                ${segmentTokens.itemSelectedColor}: var(--plasma-colors-primary);
                ${segmentTokens.itemSelectedBackgroundColor}: var(--plasma-colors-surface-solid01);
                ${segmentTokens.itemSelectedColorHover}: var(--plasma-colors-primary);
                ${segmentTokens.itemSelectedBackgroundColorHover}: var(--plasma-colors-surface-solid01);

                ${segmentTokens.outlineFocusColor}: var(--plasma-colors-button-focused);
            `,
            inverse: css`
                ${segmentTokens.itemColor}: var(--plasma-colors-primary);
                ${segmentTokens.itemBackgroundColor}: transparent;
                ${segmentTokens.itemColorHover}: var(--plasma-colors-primary);
                ${segmentTokens.itemBackgroundColorHover}: transparent;
                ${segmentTokens.itemSelectedColor}: var(--plasma-colors-inverse);
                ${segmentTokens.itemSelectedBackgroundColor}: var(--plasma-colors-text);
                ${segmentTokens.itemSelectedColorHover}: var(--plasma-colors-inverse);
                ${segmentTokens.itemSelectedBackgroundColorHover}: var(--plasma-colors-text);

                ${segmentTokens.outlineFocusColor}: var(--plasma-colors-button-focused);
            `,
        },
        size: {
            xs: css`
                ${segmentTokens.itemBorderRadius}: 0.375rem;
                ${segmentTokens.itemWidth}: auto;
                ${segmentTokens.itemHeight}: 1.5rem;
                ${segmentTokens.itemPadding}: 0 0.625rem;
                ${segmentTokens.itemMarginLeft}: 0.125rem;

                ${segmentTokens.fontFamily}: var(--plasma-typo-body-xs-font-family);
                ${segmentTokens.fontSize}: var(--plasma-typo-body-xs-font-size);
                ${segmentTokens.fontStyle}: var(--plasma-typo-body-xs-font-style);
                ${segmentTokens.fontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${segmentTokens.letterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${segmentTokens.lineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
            s: css`
                ${segmentTokens.itemBorderRadius}: 0.5rem;
                ${segmentTokens.itemWidth}: auto;
                ${segmentTokens.itemHeight}: 2rem;
                ${segmentTokens.itemPadding}: 0 0.75rem;
                ${segmentTokens.itemMarginLeft}: 0.125rem;

                ${segmentTokens.fontFamily}: var(--plasma-typo-body-s-font-family);
                ${segmentTokens.fontSize}: var(--plasma-typo-body-s-font-size);
                ${segmentTokens.fontStyle}: var(--plasma-typo-body-s-font-style);
                ${segmentTokens.fontWeight}: var(--plasma-typo-body-s-font-weight);
                ${segmentTokens.letterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${segmentTokens.lineHeight}: var(--plasma-typo-body-s-line-height);
            `,
            m: css`
                ${segmentTokens.itemBorderRadius}: 0.625rem;
                ${segmentTokens.itemWidth}: auto;
                ${segmentTokens.itemHeight}: 2.5rem;
                ${segmentTokens.itemPadding}: 0 0.875rem;
                ${segmentTokens.itemMarginLeft}: 0.125rem;

                ${segmentTokens.fontFamily}: var(--plasma-typo-body-m-font-family);
                ${segmentTokens.fontSize}: var(--plasma-typo-body-m-font-size);
                ${segmentTokens.fontStyle}: var(--plasma-typo-body-m-font-style);
                ${segmentTokens.fontWeight}: var(--plasma-typo-body-m-font-weight);
                ${segmentTokens.letterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${segmentTokens.lineHeight}: var(--plasma-typo-body-m-line-height);
            `,
            l: css`
                ${segmentTokens.itemBorderRadius}: 0.75rem;
                ${segmentTokens.itemWidth}: auto;
                ${segmentTokens.itemHeight}: 3rem;
                ${segmentTokens.itemPadding}: 0 1rem;
                ${segmentTokens.itemMarginLeft}: 0.125rem;

                ${segmentTokens.fontFamily}: var(--plasma-typo-body-l-font-family);
                ${segmentTokens.fontSize}: var(--plasma-typo-body-l-font-size);
                ${segmentTokens.fontStyle}: var(--plasma-typo-body-l-font-style);
                ${segmentTokens.fontWeight}: var(--plasma-typo-body-l-font-weight);
                ${segmentTokens.letterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${segmentTokens.lineHeight}: var(--plasma-typo-body-l-line-height);
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
