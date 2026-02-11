import { css, skeletonTokens } from '@salutejs/plasma-new-hope/styled-components';

// INFO: у нас нет централизованного, через theme, способа задавать токен для skeleton gradient
// INFO: поэтому сейчас константа. Changelog от 12.12.2025
export const config = {
    defaults: {
        size: 'bodyM',
        view: 'default',
    },
    variations: {
        view: {
            default: css`
                ${skeletonTokens.gradientColor}: var(--plasma-colors-skeleton-gradient, linear-gradient(270.00deg, rgb(232, 238, 242) 0.538%,rgb(255, 255, 255) 51.426%,rgb(232, 238, 242) 100%));
            `,
            lighter: css`
                ${skeletonTokens.gradientColor}: var(--plasma-colors-skeleton-gradient-lighter, linear-gradient(90.00deg, rgb(192, 203, 211) 1.601%,rgba(247, 249, 251, 0.5) 51.511%,rgb(192, 203, 211) 99.846%));
            `,
        },
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
