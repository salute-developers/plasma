import { css } from 'styled-components';

import { segmentTokens } from '../../../components/Segment';

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
                ${segmentTokens.itemSelectedColor}: var(--text-primary-hover);
                ${segmentTokens.itemSelectedBackgroundColor}: transparent;
                ${segmentTokens.itemSelectedColorHover}: var(--text-primary);
                ${segmentTokens.itemSelectedBackgroundColorHover}: transparent;

                ${segmentTokens.outlineFocusColor}: var(--text-accent);
            `,
            secondary: css`
                ${segmentTokens.itemColor}: var(--text-primary);
                ${segmentTokens.itemBackgroundColor}: transparent;
                ${segmentTokens.itemColorHover}: var(--text-primary-hover);
                ${segmentTokens.itemBackgroundColorHover}: transparent;
                ${segmentTokens.itemSelectedColor}: var(--text-primary);
                ${segmentTokens.itemSelectedBackgroundColor}: var(--surface-transparent-card);
                ${segmentTokens.itemSelectedColorHover}: var(--text-primary-hover);
                ${segmentTokens.itemSelectedBackgroundColorHover}: var(--surface-transparent-card);

                ${segmentTokens.outlineFocusColor}: var(--text-accent);
            `,
            default: css`
                ${segmentTokens.itemColor}: var(--text-primary);
                ${segmentTokens.itemBackgroundColor}: transparent;
                ${segmentTokens.itemColorHover}: var(--text-primary-hover);
                ${segmentTokens.itemBackgroundColorHover}: transparent;
                ${segmentTokens.itemSelectedColor}: var(--inverse-text-primary);
                ${segmentTokens.itemSelectedBackgroundColor}: var(--surface-solid-default);
                ${segmentTokens.itemSelectedColorHover}: var(--inverse-text-primary-hover);
                ${segmentTokens.itemSelectedBackgroundColorHover}: var(--surface-solid-default);

                ${segmentTokens.outlineFocusColor}: var(--text-accent);
            `,
            accent: css`
                ${segmentTokens.itemColor}: var(--text-primary);
                ${segmentTokens.itemBackgroundColor}: transparent;
                ${segmentTokens.itemColorHover}: var(--text-primary-hover);
                ${segmentTokens.itemBackgroundColorHover}: transparent;
                ${segmentTokens.itemSelectedColor}: var(--on-dark-text-primary);
                ${segmentTokens.itemSelectedBackgroundColor}: var(--surface-accent);
                ${segmentTokens.itemSelectedColorHover}: var(--on-dark-text-primary-hover);
                ${segmentTokens.itemSelectedBackgroundColorHover}: var(--surface-accent);

                ${segmentTokens.groupFilledBackgroundColor}: var(--text-accent);
            `,
        },
        size: {
            xs: css`
                ${segmentTokens.itemBorderRadius}: 0.5rem;
                ${segmentTokens.itemWidth}: auto;
                ${segmentTokens.itemHeight}: 2rem;
                ${segmentTokens.itemPadding}: 0.5rem;
                ${segmentTokens.itemPilledPadding}: 0.5rem;
                ${segmentTokens.iconItemContentPadding}: 0.0625rem 0.125rem;
                ${segmentTokens.itemMarginLeft}: 0;
            `,
            s: css`
                ${segmentTokens.itemBorderRadius}: 0.625rem;
                ${segmentTokens.itemWidth}: auto;
                ${segmentTokens.itemHeight}: 2.5rem;
                ${segmentTokens.itemPadding}: 0.5rem;
                ${segmentTokens.itemPilledPadding}: 0.5rem;
                ${segmentTokens.iconItemContentPadding}: 0.1875rem 0.125rem;
                ${segmentTokens.itemMarginLeft}: 0rem;
            `,
            m: css`
                ${segmentTokens.itemBorderRadius}: 0.75rem;
                ${segmentTokens.itemWidth}: auto;
                ${segmentTokens.itemHeight}: 3rem;
                ${segmentTokens.itemPadding}: 0.75rem;
                ${segmentTokens.itemPilledPadding}: 0.75rem;
                ${segmentTokens.iconItemContentPadding}: 0.125rem;
                ${segmentTokens.itemMarginLeft}: 0rem;
            `,
            l: css`
                ${segmentTokens.itemBorderRadius}: 0.875rem;
                ${segmentTokens.itemWidth}: auto;
                ${segmentTokens.itemHeight}: 3.5rem;
                ${segmentTokens.itemPadding}: 1rem;
                ${segmentTokens.itemPilledPadding}: 1rem;
                ${segmentTokens.iconItemContentPadding}: 0.0625rem 0.125rem;
                ${segmentTokens.itemMarginLeft}: 0;
            `,
            xl: css`
                ${segmentTokens.itemBorderRadius}: 1rem;
                ${segmentTokens.itemWidth}: auto;
                ${segmentTokens.itemHeight}: 4rem;
                ${segmentTokens.itemPadding}: 1.25rem;
                ${segmentTokens.itemPilledPadding}: 1.25rem;
                ${segmentTokens.iconItemContentPadding}: 0.0625rem 0.125rem;
                ${segmentTokens.itemMarginLeft}: 0;
            `,
        },
        disabled: {
            true: css`
                ${segmentTokens.disabledOpacity}: 0.4;
            `,
        },
        pilled: {
            true: css`
                // NOTE: change on token when added
                ${segmentTokens.itemPilledBorderRadius}: 1000px;
            `,
        },
    },
};
