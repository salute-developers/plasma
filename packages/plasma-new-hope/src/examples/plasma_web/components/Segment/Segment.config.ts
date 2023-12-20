import { css } from '@linaria/core';

import { segmentTokens } from '../../../../components/Segment';

export const config = {
    defaults: {
        view: 'clear',
        size: 'xs',
    },
    variations: {
        view: {
            clear: css`
                ${segmentTokens.arrowColor}: var(--text-secondary);
                ${segmentTokens.groupBackgroundColor}: tranparent;

                ${segmentTokens.itemColor}: var(--text-secondary);
                ${segmentTokens.itemBackgroundColor}: transparent;
                ${segmentTokens.itemColorHover}: var(--text-primary);
                ${segmentTokens.itemBackgroundColorHover}: transparent;
                ${segmentTokens.itemSelectedColor}: var(--text-primary);
                ${segmentTokens.itemSelectedBackgroundColor}: transparent;
                ${segmentTokens.itemSelectedColorHover}: var(--text-primary);
                ${segmentTokens.itemSelectedBackgroundColorHover}: transparent;

                ${segmentTokens.outlineFocusColor}: var(--plasma-colors-button-focused);
            `,
            filled: css`
                ${segmentTokens.arrowColor}: var(--text-secondary);
                ${segmentTokens.groupBackgroundColor}: transparent;

                ${segmentTokens.itemColor}: var(--text-primary);
                ${segmentTokens.itemBackgroundColor}: transparent;
                ${segmentTokens.itemColorHover}: var(--text-primary);
                ${segmentTokens.itemBackgroundColorHover}: transparent;
                ${segmentTokens.itemSelectedColor}: var(--text-primary);
                ${segmentTokens.itemSelectedBackgroundColor}: var(--surface-transparent-card);
                ${segmentTokens.itemSelectedColorHover}: var(--text-primary);
                ${segmentTokens.itemSelectedBackgroundColorHover}: var(--surface-transparent-card);

                ${segmentTokens.outlineFocusColor}: var(--plasma-colors-button-focused);
            `,
        },
        size: {
            xs: css`
                ${segmentTokens.groupBorderRadius}: 0.5rem;
                ${segmentTokens.groupWidth}: auto;
                ${segmentTokens.groupHeight}: auto;

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
                ${segmentTokens.groupBorderRadius}: 0.625rem;
                ${segmentTokens.groupWidth}: auto;
                ${segmentTokens.groupHeight}: auto;

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
                ${segmentTokens.groupBorderRadius}: 0.75rem;
                ${segmentTokens.groupWidth}: auto;
                ${segmentTokens.groupHeight}: auto;

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
                ${segmentTokens.groupBorderRadius}: 0.75rem;
                ${segmentTokens.groupWidth}: auto;
                ${segmentTokens.groupHeight}: auto;

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
                ${segmentTokens.groupPilledBorderRadius}: 1.75rem;
            `,
        },
        filledBackground: {
            true: css`
                ${segmentTokens.groupFilledBackgroundColor}: var(--plasma-colors-surface-liquid02);
            `,
        },
        selectedView: {
            default: css`
                ${segmentTokens.itemSelectedViewColor}: var(--text-primary);
                ${segmentTokens.itemSelectedViewBackgroundColor}: var(--surface-transparent-card);
                ${segmentTokens.itemSelectedViewColorHover}: var(--text-primary);
                ${segmentTokens.itemSelectedViewBackgroundColorHover}: var(--surface-transparent-card);
            `,
            card: css`
                ${segmentTokens.itemSelectedViewColor}: var(--text-primary);
                ${segmentTokens.itemSelectedViewBackgroundColor}: var(--surface-solid-card);
                ${segmentTokens.itemSelectedViewColorHover}: var(--text-primary);
                ${segmentTokens.itemSelectedViewBackgroundColorHover}: var(--surface-solid-card);
            `,
            inverse: css`
                ${segmentTokens.itemSelectedViewColor}: var(--inverse-text-primary);
                ${segmentTokens.itemSelectedViewBackgroundColor}: var(--surface-solid-default);
                ${segmentTokens.itemSelectedViewColorHover}: var(--inverse-text-primary);
                ${segmentTokens.itemSelectedViewBackgroundColorHover}: var(--surface-solid-default);
            `,
        },
    },
};
