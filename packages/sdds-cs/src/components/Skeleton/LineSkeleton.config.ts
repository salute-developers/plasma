import {
    bodyL,
    bodyM,
    bodyS,
    bodyXS,
    bodyXXS,
    dsplL,
    dsplM,
    dsplS,
    h1,
    h2,
    h3,
    h4,
    h5,
    textL,
    textM,
    textS,
    textXS,
} from '@salutejs/sdds-themes/tokens/sdds_cs';
import { css, skeletonTokens } from '@salutejs/plasma-new-hope/emotion';

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
                ${skeletonTokens.lineHeight}: ${bodyL.lineHeight};
                ${skeletonTokens.visibleLineHeight}: ${bodyL.fontSize};
            `,
            bodyM: css`
                ${skeletonTokens.lineHeight}: ${bodyM.lineHeight};
                ${skeletonTokens.visibleLineHeight}: ${bodyM.fontSize};
            `,
            bodyS: css`
                ${skeletonTokens.lineHeight}: ${bodyS.lineHeight};
                ${skeletonTokens.visibleLineHeight}: ${bodyS.fontSize};
            `,
            bodyXS: css`
                ${skeletonTokens.lineHeight}: ${bodyXS.lineHeight};
                ${skeletonTokens.visibleLineHeight}: ${bodyXS.fontSize};
            `,
            bodyXXS: css`
                ${skeletonTokens.lineHeight}: ${bodyXXS.lineHeight};
                ${skeletonTokens.visibleLineHeight}: ${bodyXXS.fontSize};
            `,
            dsplL: css`
                ${skeletonTokens.lineHeight}: ${dsplL.lineHeight};
                ${skeletonTokens.visibleLineHeight}: ${dsplL.fontSize};
            `,
            dsplM: css`
                ${skeletonTokens.lineHeight}: ${dsplM.lineHeight};
                ${skeletonTokens.visibleLineHeight}: ${dsplM.fontSize};
            `,
            dsplS: css`
                ${skeletonTokens.lineHeight}: ${dsplS.lineHeight};
                ${skeletonTokens.visibleLineHeight}: ${dsplS.fontSize};
            `,
            h1: css`
                ${skeletonTokens.lineHeight}: ${h1.lineHeight};
                ${skeletonTokens.visibleLineHeight}: ${h1.fontSize};
            `,
            h2: css`
                ${skeletonTokens.lineHeight}: ${h2.lineHeight};
                ${skeletonTokens.visibleLineHeight}: ${h2.fontSize};
            `,
            h3: css`
                ${skeletonTokens.lineHeight}: ${h3.lineHeight};
                ${skeletonTokens.visibleLineHeight}: ${h3.fontSize};
            `,
            h4: css`
                ${skeletonTokens.lineHeight}: ${h4.lineHeight};
                ${skeletonTokens.visibleLineHeight}: ${h4.fontSize};
            `,
            h5: css`
                ${skeletonTokens.lineHeight}: ${h5.lineHeight};
                ${skeletonTokens.visibleLineHeight}: ${h5.fontSize};
            `,
            textL: css`
                ${skeletonTokens.lineHeight}: ${textL.lineHeight};
                ${skeletonTokens.visibleLineHeight}: ${textL.fontSize};
            `,
            textM: css`
                ${skeletonTokens.lineHeight}: ${textM.lineHeight};
                ${skeletonTokens.visibleLineHeight}: ${textM.fontSize};
            `,
            textS: css`
                ${skeletonTokens.lineHeight}: ${textS.lineHeight};
                ${skeletonTokens.visibleLineHeight}: ${textS.fontSize};
            `,
            textXS: css`
                ${skeletonTokens.lineHeight}: ${textXS.lineHeight};
                ${skeletonTokens.visibleLineHeight}: ${textXS.fontSize};
            `,
        },
    },
};
