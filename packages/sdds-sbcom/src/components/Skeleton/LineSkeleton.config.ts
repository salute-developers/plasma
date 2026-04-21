import { css, skeletonTokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    /*
     * NOTE: Mixed DS tokens + raw vars. Prefer @salutejs-ds/sdds_sbcom/theme/tokens where possible.
     * Missing tokens in @salutejs/sdds-themes/tokens: bodyM, bodyXs, bodyXxs, dsplL, dsplM, h1, h2, h4, h5, h6, textL
     * textM, textS, textXs
     */
    bodyL,
    bodyS,
    dsplS,
    h3,
    surfaceSkeletonDeepGradient,
    surfaceSkeletonGradient,
    surfaceTransparentSecondary,
    surfaceTransparentTertiary,
} from '@salutejs-ds/sdds_sbcom/theme/tokens';

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
                ${skeletonTokens.gradientColor}: var(--plasma-colors-skeleton-gradient-lighter, ${surfaceSkeletonDeepGradient});
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
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${skeletonTokens.lineHeight}: var(--plasma-typo-body-m-line-height);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${skeletonTokens.visibleLineHeight}: var(--plasma-typo-body-m-font-size);
            `,
            bodyS: css`
                ${skeletonTokens.lineHeight}: ${bodyS.lineHeight};
                ${skeletonTokens.visibleLineHeight}: ${bodyS.fontSize};
            `,
            bodyXS: css`
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${skeletonTokens.lineHeight}: var(--plasma-typo-body-xs-line-height);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${skeletonTokens.visibleLineHeight}: var(--plasma-typo-body-xs-font-size);
            `,
            bodyXXS: css`
                /* NOTE: no token bodyXxs in @salutejs/sdds-themes/tokens */
                ${skeletonTokens.lineHeight}: var(--plasma-typo-body-xxs-line-height);
                /* NOTE: no token bodyXxs in @salutejs/sdds-themes/tokens */
                ${skeletonTokens.visibleLineHeight}: var(--plasma-typo-body-xxs-font-size);
            `,
            dsplL: css`
                /* NOTE: no token dsplL in @salutejs/sdds-themes/tokens */
                ${skeletonTokens.lineHeight}: var(--plasma-typo-dspl-l-line-height);
                /* NOTE: no token dsplL in @salutejs/sdds-themes/tokens */
                ${skeletonTokens.visibleLineHeight}: var(--plasma-typo-dspl-l-font-size);
            `,
            dsplM: css`
                /* NOTE: no token dsplM in @salutejs/sdds-themes/tokens */
                ${skeletonTokens.lineHeight}: var(--plasma-typo-dspl-m-line-height);
                /* NOTE: no token dsplM in @salutejs/sdds-themes/tokens */
                ${skeletonTokens.visibleLineHeight}: var(--plasma-typo-dspl-m-font-size);
            `,
            dsplS: css`
                ${skeletonTokens.lineHeight}: ${dsplS.lineHeight};
                ${skeletonTokens.visibleLineHeight}: ${dsplS.fontSize};
            `,
            h1: css`
                /* NOTE: no token h1 in @salutejs/sdds-themes/tokens */
                ${skeletonTokens.lineHeight}: var(--plasma-typo-h1-line-height);
                /* NOTE: no token h1 in @salutejs/sdds-themes/tokens */
                ${skeletonTokens.visibleLineHeight}: var(--plasma-typo-h1-font-size);
            `,
            h2: css`
                /* NOTE: no token h2 in @salutejs/sdds-themes/tokens */
                ${skeletonTokens.lineHeight}: var(--plasma-typo-h2-line-height);
                /* NOTE: no token h2 in @salutejs/sdds-themes/tokens */
                ${skeletonTokens.visibleLineHeight}: var(--plasma-typo-h2-font-size);
            `,
            h3: css`
                ${skeletonTokens.lineHeight}: ${h3.lineHeight};
                ${skeletonTokens.visibleLineHeight}: ${h3.fontSize};
            `,
            h4: css`
                /* NOTE: no token h4 in @salutejs/sdds-themes/tokens */
                ${skeletonTokens.lineHeight}: var(--plasma-typo-h4-line-height);
                /* NOTE: no token h4 in @salutejs/sdds-themes/tokens */
                ${skeletonTokens.visibleLineHeight}: var(--plasma-typo-h4-font-size);
            `,
            h5: css`
                /* NOTE: no token h5 in @salutejs/sdds-themes/tokens */
                ${skeletonTokens.lineHeight}: var(--plasma-typo-h5-line-height);
                /* NOTE: no token h5 in @salutejs/sdds-themes/tokens */
                ${skeletonTokens.visibleLineHeight}: var(--plasma-typo-h5-font-size);
            `,
            h6: css`
                /* NOTE: no token h6 in @salutejs/sdds-themes/tokens */
                ${skeletonTokens.lineHeight}: var(--plasma-typo-h6-line-height);
                /* NOTE: no token h6 in @salutejs/sdds-themes/tokens */
                ${skeletonTokens.visibleLineHeight}: var(--plasma-typo-h6-font-size);
            `,
            textL: css`
                /* NOTE: no token textL in @salutejs/sdds-themes/tokens */
                ${skeletonTokens.lineHeight}: var(--plasma-typo-text-l-line-height);
                /* NOTE: no token textL in @salutejs/sdds-themes/tokens */
                ${skeletonTokens.visibleLineHeight}: var(--plasma-typo-text-l-font-size);
            `,
            textM: css`
                /* NOTE: no token textM in @salutejs/sdds-themes/tokens */
                ${skeletonTokens.lineHeight}: var(--plasma-typo-text-m-line-height);
                /* NOTE: no token textM in @salutejs/sdds-themes/tokens */
                ${skeletonTokens.visibleLineHeight}: var(--plasma-typo-text-m-font-size);
            `,
            textS: css`
                /* NOTE: no token textS in @salutejs/sdds-themes/tokens */
                ${skeletonTokens.lineHeight}: var(--plasma-typo-text-s-line-height);
                /* NOTE: no token textS in @salutejs/sdds-themes/tokens */
                ${skeletonTokens.visibleLineHeight}: var(--plasma-typo-text-s-font-size);
            `,
            textXS: css`
                /* NOTE: no token textXs in @salutejs/sdds-themes/tokens */
                ${skeletonTokens.lineHeight}: var(--plasma-typo-text-xs-line-height);
                /* NOTE: no token textXs in @salutejs/sdds-themes/tokens */
                ${skeletonTokens.visibleLineHeight}: var(--plasma-typo-text-xs-font-size);
            `,
        },
    },
};
