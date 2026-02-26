import { css, skeletonTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        size: 'bodyM',
        view: 'default',
    },
    variations: {
        view: {
            default: css`
                ${skeletonTokens.gradientColor}: var(--plasma-colors-skeleton-gradient, linear-gradient(270.00deg, rgba(35, 41, 45, 0.06),rgba(35, 41, 45, 0.05) 10%,rgba(35, 41, 45, 0.04) 20%,rgba(35, 41, 45, 0.03) 25%,rgba(35, 41, 45, 0.02) 30%,rgba(35, 41, 45, 0.01) 40%,rgba(35, 41, 45, 0) 50%,rgba(35, 41, 45, 0.01) 60%,rgba(35, 41, 45, 0.02) 70%,rgba(35, 41, 45, 0.03) 75%,rgba(35, 41, 45, 0.04) 80%,rgba(35, 41, 45, 0.05) 90%,rgba(35, 41, 45, 0.06) 100%));
                ${skeletonTokens.fadeInColor}: var(--surface-transparent-secondary);
                ${skeletonTokens.fadeOutColor}: var(--surface-transparent-tertiary);
            `,
            lighter: css`
                ${skeletonTokens.gradientColor}: var(--plasma-colors-skeleton-gradient-lighter, linear-gradient(90.00deg, rgba(35, 41, 45, 0.24),rgba(8, 8, 8, 0.22) 5%,rgba(35, 41, 45, 0.21) 10%,rgba(35, 41, 45, 0.19) 16.527%,rgba(35, 41, 45, 0.18) 20%,rgba(35, 41, 45, 0.16) 25%,rgba(35, 41, 45, 0.14) 30%,rgba(35, 41, 45, 0.13) 35%,rgba(35, 41, 45, 0.11) 40%,rgba(35, 41, 45, 0.1) 45%,rgba(35, 41, 45, 0.08) 50%,rgba(35, 41, 45, 0.1) 55%,rgba(35, 41, 45, 0.11) 60%,rgba(35, 41, 45, 0.13) 65%,rgba(35, 41, 45, 0.14) 70%,rgba(35, 41, 45, 0.16) 75%,rgba(35, 41, 45, 0.18) 80%,rgba(35, 41, 45, 0.19) 85%,rgba(35, 41, 45, 0.21) 90%,rgba(35, 41, 45, 0.22) 95%,rgba(35, 41, 45, 0.24) 100%));
                ${skeletonTokens.fadeInColor}: var(--surface-transparent-secondary);
                ${skeletonTokens.fadeOutColor}: var(--surface-transparent-tertiary);
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
