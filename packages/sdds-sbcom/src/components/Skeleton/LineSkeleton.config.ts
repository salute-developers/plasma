import {
    bodyL as typoBodyL,
    bodyM as typoBodyM,
    bodyM as typoH6Skeleton,
    bodyS as typoBodyS,
    bodyXS as typoBodyXS,
    bodyXXS as typoBodyXXS,
    dsplS as typoDsplS,
    h1 as typoH1,
    h2 as typoDsplL,
    h2 as typoH2,
    h3 as typoDsplM,
    h3 as typoH3,
    h4 as typoH4,
    h4Medium as typoH5,
    surfaceSkeletonDeepGradient,
    surfaceSkeletonGradient,
    surfaceTransparentSecondary,
    surfaceTransparentTertiary,
} from '@salutejs/sdds-themes/tokens/sdds_sbcom';
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
                ${skeletonTokens.lineHeight}: ${typoBodyL.lineHeight};
                ${skeletonTokens.visibleLineHeight}: ${typoBodyL.fontSize};
            `,
            bodyM: css`
                ${skeletonTokens.lineHeight}: ${typoBodyM.lineHeight};
                ${skeletonTokens.visibleLineHeight}: ${typoBodyM.fontSize};
            `,
            bodyS: css`
                ${skeletonTokens.lineHeight}: ${typoBodyS.lineHeight};
                ${skeletonTokens.visibleLineHeight}: ${typoBodyS.fontSize};
            `,
            bodyXS: css`
                ${skeletonTokens.lineHeight}: ${typoBodyXS.lineHeight};
                ${skeletonTokens.visibleLineHeight}: ${typoBodyXS.fontSize};
            `,
            bodyXXS: css`
                ${skeletonTokens.lineHeight}: ${typoBodyXXS.lineHeight};
                ${skeletonTokens.visibleLineHeight}: ${typoBodyXXS.fontSize};
            `,
            dsplL: css`
                ${skeletonTokens.lineHeight}: ${typoDsplL.lineHeight};
                ${skeletonTokens.visibleLineHeight}: ${typoDsplL.fontSize};
            `,
            dsplM: css`
                ${skeletonTokens.lineHeight}: ${typoDsplM.lineHeight};
                ${skeletonTokens.visibleLineHeight}: ${typoDsplM.fontSize};
            `,
            dsplS: css`
                ${skeletonTokens.lineHeight}: ${typoDsplS.lineHeight};
                ${skeletonTokens.visibleLineHeight}: ${typoDsplS.fontSize};
            `,
            h1: css`
                ${skeletonTokens.lineHeight}: ${typoH1.lineHeight};
                ${skeletonTokens.visibleLineHeight}: ${typoH1.fontSize};
            `,
            h2: css`
                ${skeletonTokens.lineHeight}: ${typoH2.lineHeight};
                ${skeletonTokens.visibleLineHeight}: ${typoH2.fontSize};
            `,
            h3: css`
                ${skeletonTokens.lineHeight}: ${typoH3.lineHeight};
                ${skeletonTokens.visibleLineHeight}: ${typoH3.fontSize};
            `,
            h4: css`
                ${skeletonTokens.lineHeight}: ${typoH4.lineHeight};
                ${skeletonTokens.visibleLineHeight}: ${typoH4.fontSize};
            `,
            h5: css`
                ${skeletonTokens.lineHeight}: ${typoH5.lineHeight};
                ${skeletonTokens.visibleLineHeight}: ${typoH5.fontSize};
            `,
            h6: css`
                ${skeletonTokens.lineHeight}: ${typoH6Skeleton.lineHeight};
                ${skeletonTokens.visibleLineHeight}: ${typoH6Skeleton.fontSize};
            `,
            textL: css`
                ${skeletonTokens.lineHeight}: ${typoBodyL.lineHeight};
                ${skeletonTokens.visibleLineHeight}: ${typoBodyL.fontSize};
            `,
            textM: css`
                ${skeletonTokens.lineHeight}: ${typoBodyM.lineHeight};
                ${skeletonTokens.visibleLineHeight}: ${typoBodyM.fontSize};
            `,
            textS: css`
                ${skeletonTokens.lineHeight}: ${typoBodyS.lineHeight};
                ${skeletonTokens.visibleLineHeight}: ${typoBodyS.fontSize};
            `,
            textXS: css`
                ${skeletonTokens.lineHeight}: ${typoBodyXS.lineHeight};
                ${skeletonTokens.visibleLineHeight}: ${typoBodyXS.fontSize};
            `,
        },
    },
};
