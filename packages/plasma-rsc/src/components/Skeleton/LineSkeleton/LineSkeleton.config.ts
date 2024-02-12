import { css } from '@linaria/core';

export const skeletonTokens = {
    lineHeight: '--plasma-skeleton-line-height',
    visibleLineHeight: '--plasma-skeleton-visible-line-height',
};

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
