import { css, codeInputTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 'l',
    },
    variations: {
        view: {
            default: css`
                ${tokens.captionColor}: var(--text-secondary);
                ${tokens.captionColorError}: var(--text-negative);

                ${tokens.codeColor}: var(--text-primary);
                ${tokens.codeColorError}: var(--text-negative);
            `,
        },
        size: {
            l: css`
                ${tokens.captionGap}: 2.5rem;
                ${tokens.codeItemsGap}: 0.75rem;

                ${tokens.separatorWidth}: 1rem;

                ${tokens.fontFamily}: var(--plasma-typo-dspl-l-font-family);
                ${tokens.fontStyle}: var(--plasma-typo-dspl-l-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-dspl-l-bold-font-weight);
                ${tokens.letterSpacing}: var(--plasma-typo-dspl-l-letter-spacing);

                ${tokens.largeScreenFontSize}: 8rem;
                ${tokens.largeScreenLineHeight}: 8rem;

                ${tokens.mediumScreenFontSize}: 7rem;
                ${tokens.mediumScreenLineHeight}: 7rem;

                ${tokens.smallScreenFontSize}: 5.5rem;
                ${tokens.smallScreenLineHeight}: 5.75rem;

                ${tokens.captionFontFamily}: var(--plasma-typo-h3-font-family);
                ${tokens.captionFontSize}: var(--plasma-typo-h3-font-size);
                ${tokens.captionFontStyle}: var(--plasma-typo-h3-font-style);
                ${tokens.captionFontWeight}: var(--plasma-typo-h3-font-weight);
                ${tokens.captionLetterSpacing}: var(--plasma-typo-h3-letter-spacing);
                ${tokens.captionLineHeight}: var(--plasma-typo-h3-line-height);

                ${tokens.codeItemLargeWidth}: 5rem;
                ${tokens.codeItemLargeHeight}: 8rem;

                ${tokens.codeItemMediumWidth}: 4.5rem;
                ${tokens.codeItemMediumHeight}: 7rem;

                ${tokens.codeItemSmallWidth}: 3.5rem;
                ${tokens.codeItemSmallHeight}: 5.75rem;

                ${tokens.codeItemCircleBorderWidth}: 0.125rem;
                ${tokens.codeItemCircleSize}: 1.5rem;
            `,
            m: css`
                ${tokens.captionGap}: 1.75rem;
                ${tokens.codeItemsGap}: 0.5rem;

                ${tokens.separatorWidth}: 1rem;

                ${tokens.fontFamily}: var(--plasma-typo-dspl-m-font-family);
                ${tokens.fontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-body-m-bold-font-weight);
                ${tokens.letterSpacing}: var(--plasma-typo-body-m-letter-spacing);

                ${tokens.largeScreenFontSize}: 5.5rem;
                ${tokens.largeScreenLineHeight}: 5.75rem;

                ${tokens.mediumScreenFontSize}: 4.5rem;
                ${tokens.mediumScreenLineHeight}: 4.75rem;

                ${tokens.smallScreenFontSize}: 3.5rem;
                ${tokens.smallScreenLineHeight}: 3.75rem;

                ${tokens.captionFontFamily}: var(--plasma-typo-h4-font-family);
                ${tokens.captionFontSize}: var(--plasma-typo-h4-font-size);
                ${tokens.captionFontStyle}: var(--plasma-typo-h4-font-style);
                ${tokens.captionFontWeight}: var(--plasma-typo-h4-font-weight);
                ${tokens.captionLetterSpacing}: var(--plasma-typo-h4-letter-spacing);
                ${tokens.captionLineHeight}: var(--plasma-typo-h4-line-height);

                ${tokens.codeItemLargeWidth}: 3.5rem;
                ${tokens.codeItemLargeHeight}: 5.75rem;

                ${tokens.codeItemMediumWidth}: 3rem;
                ${tokens.codeItemMediumHeight}: 4.75rem;

                ${tokens.codeItemSmallWidth}: 2.25rem;
                ${tokens.codeItemSmallHeight}: 3.75rem;

                ${tokens.codeItemCircleBorderWidth}: 0.094rem;
                ${tokens.codeItemCircleSize}: 1rem;
            `,
            s: css`
                ${tokens.captionGap}: 1.5rem;
                ${tokens.codeItemsGap}: 0.25rem;

                ${tokens.separatorWidth}: 0.5rem;

                ${tokens.fontFamily}: var(--plasma-typo-dspl-s-font-family);
                ${tokens.fontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-body-s-bold-font-weight);
                ${tokens.letterSpacing}: var(--plasma-typo-body-s-letter-spacing);

                ${tokens.largeScreenFontSize}: 4rem;
                ${tokens.largeScreenLineHeight}: 4.25rem;

                ${tokens.mediumScreenFontSize}: 3rem;
                ${tokens.mediumScreenLineHeight}: 3.25rem;

                ${tokens.smallScreenFontSize}: 2.5rem;
                ${tokens.smallScreenLineHeight}: 2.75rem;

                ${tokens.captionFontFamily}: var(--plasma-typo-h5-font-family);
                ${tokens.captionFontSize}: var(--plasma-typo-h5-font-size);
                ${tokens.captionFontStyle}: var(--plasma-typo-h5-font-style);
                ${tokens.captionFontWeight}: var(--plasma-typo-h5-font-weight);
                ${tokens.captionLetterSpacing}: var(--plasma-typo-h5-letter-spacing);
                ${tokens.captionLineHeight}: var(--plasma-typo-h5-line-height);

                ${tokens.codeItemLargeWidth}: 2.5rem;
                ${tokens.codeItemLargeHeight}: 4.25rem;

                ${tokens.codeItemMediumWidth}: 2rem;
                ${tokens.codeItemMediumHeight}: 3.25rem;

                ${tokens.codeItemSmallWidth}: 1.625rem;
                ${tokens.codeItemSmallHeight}: 2.75rem;

                ${tokens.codeItemCircleBorderWidth}: 0.063rem;
                ${tokens.codeItemCircleSize}: 0.75rem;
            `,
        },
        disabled: {
            true: css`
                ${tokens.disabledOpacity}: 0.4;
            `,
        },
    },
};
