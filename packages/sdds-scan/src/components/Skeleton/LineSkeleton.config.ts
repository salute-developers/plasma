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
    h6,
    surfaceSkeletonDeepGradient,
    surfaceSkeletonGradient,
    surfaceTransparentSecondary,
    surfaceTransparentTertiary,
    textL,
    textM,
    textS,
    textXS,
} from '@salutejs/sdds-themes/tokens/sdds_scan';
import { css, skeletonTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        size: 'bodyM',
        view: 'default',
    },
    variations: {
        view: {
            default: css`
                ${skeletonTokens.gradientColor}: ${surfaceSkeletonGradient};
                ${skeletonTokens.fadeInColor}: ${surfaceTransparentSecondary};
                ${skeletonTokens.fadeOutColor}: ${surfaceTransparentTertiary};
            `,
            lighter: css`
                ${skeletonTokens.gradientColor}: ${surfaceSkeletonDeepGradient};
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
            h6: css`
                ${skeletonTokens.lineHeight}: ${h6.lineHeight};
                ${skeletonTokens.visibleLineHeight}: ${h6.fontSize};
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
