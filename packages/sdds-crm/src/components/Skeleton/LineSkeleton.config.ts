import { css, skeletonTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        size: 'bodyM',
    },
    variations: {
        size: {
            bodyL: css`
                ${skeletonTokens.lineHeight}: var(--plasma-typo-body-l-line-height);
                ${skeletonTokens.visibleLineHeight}: var(--plasma-typo-body-l-font-size);
            `,
            bodyM: css`
                ${skeletonTokens.lineHeight}: var(--plasma-typo-body-m-line-height);
                ${skeletonTokens.visibleLineHeight}: var(--plasma-typo-body-m-font-size);
            `,
            bodyS: css`
                ${skeletonTokens.lineHeight}: var(--plasma-typo-body-s-line-height);
                ${skeletonTokens.visibleLineHeight}: var(--plasma-typo-body-s-font-size);
            `,
            bodyXS: css`
                ${skeletonTokens.lineHeight}: var(--plasma-typo-body-xs-line-height);
                ${skeletonTokens.visibleLineHeight}: var(--plasma-typo-body-xs-font-size);
            `,
            bodyXXS: css`
                ${skeletonTokens.lineHeight}: var(--plasma-typo-body-xxs-line-height);
                ${skeletonTokens.visibleLineHeight}: var(--plasma-typo-body-xxs-font-size);
            `,
            dsplL: css`
                ${skeletonTokens.lineHeight}: var(--plasma-typo-dspl-l-line-height);
                ${skeletonTokens.visibleLineHeight}: var(--plasma-typo-dspl-l-font-size);
            `,
            dsplM: css`
                ${skeletonTokens.lineHeight}: var(--plasma-typo-dspl-m-line-height);
                ${skeletonTokens.visibleLineHeight}: var(--plasma-typo-dspl-m-font-size);
            `,
            dsplS: css`
                ${skeletonTokens.lineHeight}: var(--plasma-typo-dspl-s-line-height);
                ${skeletonTokens.visibleLineHeight}: var(--plasma-typo-dspl-s-font-size);
            `,
            h1: css`
                ${skeletonTokens.lineHeight}: var(--plasma-typo-h1-line-height);
                ${skeletonTokens.visibleLineHeight}: var(--plasma-typo-h1-font-size);
            `,
            h2: css`
                ${skeletonTokens.lineHeight}: var(--plasma-typo-h2-line-height);
                ${skeletonTokens.visibleLineHeight}: var(--plasma-typo-h2-font-size);
            `,
            h3: css`
                ${skeletonTokens.lineHeight}: var(--plasma-typo-h3-line-height);
                ${skeletonTokens.visibleLineHeight}: var(--plasma-typo-h3-font-size);
            `,
            h4: css`
                ${skeletonTokens.lineHeight}: var(--plasma-typo-h4-line-height);
                ${skeletonTokens.visibleLineHeight}: var(--plasma-typo-h4-font-size);
            `,
            h5: css`
                ${skeletonTokens.lineHeight}: var(--plasma-typo-h5-line-height);
                ${skeletonTokens.visibleLineHeight}: var(--plasma-typo-h5-font-size);
            `,
            textL: css`
                ${skeletonTokens.lineHeight}: var(--plasma-typo-text-l-line-height);
                ${skeletonTokens.visibleLineHeight}: var(--plasma-typo-text-l-font-size);
            `,
            textM: css`
                ${skeletonTokens.lineHeight}: var(--plasma-typo-text-m-line-height);
                ${skeletonTokens.visibleLineHeight}: var(--plasma-typo-text-m-font-size);
            `,
            textS: css`
                ${skeletonTokens.lineHeight}: var(--plasma-typo-text-s-line-height);
                ${skeletonTokens.visibleLineHeight}: var(--plasma-typo-text-s-font-size);
            `,
            textXS: css`
                ${skeletonTokens.lineHeight}: var(--plasma-typo-text-xs-line-height);
                ${skeletonTokens.visibleLineHeight}: var(--plasma-typo-text-xs-font-size);
            `,
        },
    },
};
