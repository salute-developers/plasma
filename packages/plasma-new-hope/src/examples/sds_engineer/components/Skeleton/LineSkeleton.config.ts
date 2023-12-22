import { css } from '@linaria/core';

import { skeletonTokens } from '../../../../components/Skeleton';

export const config = {
    defaults: {
        size: 'body1',
    },
    variations: {
        size: {
            body1: css`
                ${skeletonTokens.lineHeight}: var(--plasma-typo-body1-line-height);
                ${skeletonTokens.visibleLineHeight}: var(--plasma-typo-body1-font-size);
            `,
            body2: css`
                ${skeletonTokens.lineHeight}: var(--plasma-typo-body2-line-height);
                ${skeletonTokens.visibleLineHeight}: var(--plasma-typo-body2-font-size);
            `,
            body3: css`
                ${skeletonTokens.lineHeight}: var(--plasma-typo-body3-line-height);
                ${skeletonTokens.visibleLineHeight}: var(--plasma-typo-body3-font-size);
            `,
            button1: css`
                ${skeletonTokens.lineHeight}: var(--plasma-typo-button1-line-height);
                ${skeletonTokens.visibleLineHeight}: var(--plasma-typo-button1-font-size);
            `,
            button2: css`
                ${skeletonTokens.lineHeight}: var(--plasma-typo-button2-line-height);
                ${skeletonTokens.visibleLineHeight}: var(--plasma-typo-button2-font-size);
            `,
            caption: css`
                ${skeletonTokens.lineHeight}: var(--plasma-typo-caption-line-height);
                ${skeletonTokens.visibleLineHeight}: var(--plasma-typo-caption-font-size);
            `,
            display1: css`
                ${skeletonTokens.lineHeight}: var(--plasma-typo-display1-line-height);
                ${skeletonTokens.visibleLineHeight}: var(--plasma-typo-display1-font-size);
            `,
            display2: css`
                ${skeletonTokens.lineHeight}: var(--plasma-typo-display2-line-height);
                ${skeletonTokens.visibleLineHeight}: var(--plasma-typo-display2-font-size);
            `,
            display3: css`
                ${skeletonTokens.lineHeight}: var(--plasma-typo-display3-line-height);
                ${skeletonTokens.visibleLineHeight}: var(--plasma-typo-display3-font-size);
            `,
            footnote1: css`
                ${skeletonTokens.lineHeight}: var(--plasma-typo-footnote1-line-height);
                ${skeletonTokens.visibleLineHeight}: var(--plasma-typo-footnote1-font-size);
            `,
            footnote2: css`
                ${skeletonTokens.lineHeight}: var(--plasma-typo-footnote2-line-height);
                ${skeletonTokens.visibleLineHeight}: var(--plasma-typo-footnote2-font-size);
            `,
            headline1: css`
                ${skeletonTokens.lineHeight}: var(--plasma-typo-headline1-line-height);
                ${skeletonTokens.visibleLineHeight}: var(--plasma-typo-headline1-font-size);
            `,
            headline2: css`
                ${skeletonTokens.lineHeight}: var(--plasma-typo-headline2-line-height);
                ${skeletonTokens.visibleLineHeight}: var(--plasma-typo-headline2-font-size);
            `,
            headline3: css`
                ${skeletonTokens.lineHeight}: var(--plasma-typo-headline3-line-height);
                ${skeletonTokens.visibleLineHeight}: var(--plasma-typo-headline3-font-size);
            `,
            headline4: css`
                ${skeletonTokens.lineHeight}: var(--plasma-typo-headline4-line-height);
                ${skeletonTokens.visibleLineHeight}: var(--plasma-typo-headline4-font-size);
            `,
            paragraph1: css`
                ${skeletonTokens.lineHeight}: var(--plasma-typo-paragraph1-line-height);
                ${skeletonTokens.visibleLineHeight}: var(--plasma-typo-paragraph1-font-size);
            `,
            paragraph2: css`
                ${skeletonTokens.lineHeight}: var(--plasma-typo-paragraph2-line-height);
                ${skeletonTokens.visibleLineHeight}: var(--plasma-typo-paragraph2-font-size);
            `,
            underline: css`
                ${skeletonTokens.lineHeight}: var(--plasma-typo-underline-line-height);
                ${skeletonTokens.visibleLineHeight}: var(--plasma-typo-underline-font-size);
            `,
        },
    },
};
