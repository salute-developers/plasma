import { css, skeletonTokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    bodyL,
    bodyM,
    bodyS,
    dsplS,
    h1,
    h2,
    h3,
    h4,
    surfaceSkeletonGradient,
    surfaceTransparentSecondary,
    surfaceTransparentTertiary,
} from '@salutejs-ds/sdds_sbcom/theme/tokens';

/*
 * NOTE: Mixed DS tokens + raw vars. Prefer @salutejs-ds/sdds_sbcom/theme/tokens where possible.
 * Missing tokens in @salutejs/sdds-themes/tokens: bodyXs, bodyXxs, dsplL, dsplM, h5, h6, surfaceSkeletonDeepGradient
 * textL, textM, textS, textXs
 */
export const config = {
    defaults: {
        size: 'bodyM',
        view: 'default',
    },
    variations: {
        view: {
            default: css`
                ${skeletonTokens.gradientColor}: var(--plasma-colors-skeleton-gradient, ${surfaceSkeletonGradient});
                ${skeletonTokens.fadeInColor}: ${surfaceTransparentSecondary};
                ${skeletonTokens.fadeOutColor}: ${surfaceTransparentTertiary};
            `,
            lighter: css`
                ${skeletonTokens.gradientColor}: var(--plasma-colors-skeleton-gradient-lighter, var(--surface-skeleton-deep-gradient));
                ${skeletonTokens.fadeInColor}: ${surfaceTransparentSecondary};
                ${skeletonTokens.fadeOutColor}: ${surfaceTransparentTertiary};
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
                ${skeletonTokens.lineHeight}: var(--plasma-typo-h5-line-height);
                ${skeletonTokens.visibleLineHeight}: var(--plasma-typo-h5-font-size);
            `,
            h6: css`
                ${skeletonTokens.lineHeight}: var(--plasma-typo-h6-line-height);
                ${skeletonTokens.visibleLineHeight}: var(--plasma-typo-h6-font-size);
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
