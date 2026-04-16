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
                ${tokens.borderColorFocus}: var(--outline-accent);
            `,
        },
        size: {
            l: css`
                ${tokens.captionGap}: 2.5rem;
                ${tokens.codeItemsGap}: 0.75rem;

                ${tokens.separatorWidth}: 0.75rem;

                ${tokens.fontFamily}: var(--plasma-typo-dspl-l-font-family);
                ${tokens.fontStyle}: var(--plasma-typo-dspl-l-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-dspl-l-bold-font-weight);
                ${tokens.letterSpacing}: var(--plasma-typo-dspl-l-letter-spacing);

                ${tokens.largeFontSize}: 8rem;
                ${tokens.largeLineHeight}: 8rem;

                ${tokens.mediumFontSize}: 7rem;
                ${tokens.mediumLineHeight}: 7rem;

                ${tokens.smallFontSize}: 5.5rem;
                ${tokens.smallLineHeight}: 5.75rem;

                ${tokens.captionFontFamily}: var(--plasma-typo-h3-font-family);
                ${tokens.captionFontSize}: var(--plasma-typo-h3-font-size);
                ${tokens.captionFontStyle}: var(--plasma-typo-h3-font-style);
                ${tokens.captionFontWeight}: var(--plasma-typo-h3-font-weight);
                ${tokens.captionLetterSpacing}: var(--plasma-typo-h3-letter-spacing);
                ${tokens.captionLineHeight}: var(--plasma-typo-h3-line-height);

                ${tokens.largeCodeItemWidth}: 5rem;
                ${tokens.largeCodeItemHeight}: 8rem;

                ${tokens.mediumCodeItemWidth}: 4.5rem;
                ${tokens.mediumCodeItemHeight}: 7rem;

                ${tokens.smallCodeItemWidth}: 3.5rem;
                ${tokens.smallCodeItemHeight}: 5.75rem;

                ${tokens.codeItemCircleBorderWidth}: 0.125rem;
                ${tokens.codeItemCircleSize}: 1.5rem;
            `,
            m: css`
                ${tokens.captionGap}: 1.75rem;
                ${tokens.codeItemsGap}: 0.5rem;

                ${tokens.separatorWidth}: 0.75rem;

                ${tokens.fontFamily}: var(--plasma-typo-dspl-m-font-family);
                ${tokens.fontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-body-m-bold-font-weight);
                ${tokens.letterSpacing}: var(--plasma-typo-body-m-letter-spacing);

                ${tokens.largeFontSize}: 5.5rem;
                ${tokens.largeLineHeight}: 5.75rem;

                ${tokens.mediumFontSize}: 4.5rem;
                ${tokens.mediumLineHeight}: 4.75rem;

                ${tokens.smallFontSize}: 3.5rem;
                ${tokens.smallLineHeight}: 3.75rem;

                ${tokens.captionFontFamily}: var(--plasma-typo-h4-font-family);
                ${tokens.captionFontSize}: var(--plasma-typo-h4-font-size);
                ${tokens.captionFontStyle}: var(--plasma-typo-h4-font-style);
                ${tokens.captionFontWeight}: var(--plasma-typo-h4-font-weight);
                ${tokens.captionLetterSpacing}: var(--plasma-typo-h4-letter-spacing);
                ${tokens.captionLineHeight}: var(--plasma-typo-h4-line-height);

                ${tokens.largeCodeItemWidth}: 3.5rem;
                ${tokens.largeCodeItemHeight}: 5.75rem;

                ${tokens.mediumCodeItemWidth}: 3rem;
                ${tokens.mediumCodeItemHeight}: 4.75rem;

                ${tokens.smallCodeItemWidth}: 2.25rem;
                ${tokens.smallCodeItemHeight}: 3.75rem;

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

                ${tokens.largeFontSize}: 4rem;
                ${tokens.largeLineHeight}: 4.25rem;

                ${tokens.mediumFontSize}: 3rem;
                ${tokens.mediumLineHeight}: 3.25rem;

                ${tokens.smallFontSize}: 2.5rem;
                ${tokens.smallLineHeight}: 2.75rem;

                ${tokens.captionFontFamily}: var(--plasma-typo-h5-font-family);
                ${tokens.captionFontSize}: var(--plasma-typo-h5-font-size);
                ${tokens.captionFontStyle}: var(--plasma-typo-h5-font-style);
                ${tokens.captionFontWeight}: var(--plasma-typo-h5-font-weight);
                ${tokens.captionLetterSpacing}: var(--plasma-typo-h5-letter-spacing);
                ${tokens.captionLineHeight}: var(--plasma-typo-h5-line-height);

                ${tokens.largeCodeItemWidth}: 2.5rem;
                ${tokens.largeCodeItemHeight}: 4.25rem;

                ${tokens.mediumCodeItemWidth}: 2rem;
                ${tokens.mediumCodeItemHeight}: 3.25rem;

                ${tokens.smallCodeItemWidth}: 1.625rem;
                ${tokens.smallCodeItemHeight}: 2.75rem;

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
