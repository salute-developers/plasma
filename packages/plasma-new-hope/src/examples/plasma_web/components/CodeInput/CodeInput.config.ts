import { css } from '@linaria/core';

import { codeInputTokens as tokens, getCodeInputView } from '../../../../components/CodeInput';

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

                ${getCodeInputView(
                    {
                        [tokens.smallMMinWidth]: 0,
                        [tokens.mediumSMinWidth]: '35rem',
                        [tokens.mediumMMinWidth]: '49.125rem',
                        [tokens.largeSMinWidth]: '60rem',
                        [tokens.largeMMinWidth]: '75rem',
                    },
                    'default',
                )};
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

                ${tokens.largeSFontSize}: 8rem;
                ${tokens.largeSLineHeight}: 8rem;

                ${tokens.largeMFontSize}: 8rem;
                ${tokens.largeMLineHeight}: 8rem;

                ${tokens.mediumSFontSize}: 7rem;
                ${tokens.mediumSLineHeight}: 7rem;

                ${tokens.mediumMFontSize}: 7rem;
                ${tokens.mediumMLineHeight}: 7rem;

                ${tokens.smallMFontSize}: 5.5rem;
                ${tokens.smallMLineHeight}: 5.75rem;

                ${tokens.captionFontFamily}: var(--plasma-typo-h3-font-family);
                ${tokens.captionFontSize}: var(--plasma-typo-h3-font-size);
                ${tokens.captionFontStyle}: var(--plasma-typo-h3-font-style);
                ${tokens.captionFontWeight}: var(--plasma-typo-h3-font-weight);
                ${tokens.captionLetterSpacing}: var(--plasma-typo-h3-letter-spacing);
                ${tokens.captionLineHeight}: var(--plasma-typo-h3-line-height);

                ${tokens.largeMCodeItemWidth}: 5rem;
                ${tokens.largeMCodeItemHeight}: 8rem;

                ${tokens.largeSCodeItemWidth}: 5rem;
                ${tokens.largeSCodeItemHeight}: 8rem;

                ${tokens.mediumMCodeItemWidth}: 4.5rem;
                ${tokens.mediumMCodeItemHeight}: 7rem;

                ${tokens.mediumSCodeItemWidth}: 4.5rem;
                ${tokens.mediumSCodeItemHeight}: 7rem;

                ${tokens.smallMCodeItemWidth}: 3.5rem;
                ${tokens.smallMCodeItemHeight}: 5.75rem;

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

                ${tokens.largeMFontSize}: 5.5rem;
                ${tokens.largeMLineHeight}: 5.75rem;

                ${tokens.largeSFontSize}: 5.5rem;
                ${tokens.largeSLineHeight}: 5.75rem;

                ${tokens.mediumSFontSize}: 4.5rem;
                ${tokens.mediumSLineHeight}: 4.75rem;

                ${tokens.mediumMFontSize}: 4.5rem;
                ${tokens.mediumMLineHeight}: 4.75rem;

                ${tokens.smallMFontSize}: 3.5rem;
                ${tokens.smallMLineHeight}: 3.75rem;

                ${tokens.captionFontFamily}: var(--plasma-typo-h4-font-family);
                ${tokens.captionFontSize}: var(--plasma-typo-h4-font-size);
                ${tokens.captionFontStyle}: var(--plasma-typo-h4-font-style);
                ${tokens.captionFontWeight}: var(--plasma-typo-h4-font-weight);
                ${tokens.captionLetterSpacing}: var(--plasma-typo-h4-letter-spacing);
                ${tokens.captionLineHeight}: var(--plasma-typo-h4-line-height);

                ${tokens.largeMCodeItemWidth}: 3.5rem;
                ${tokens.largeMCodeItemHeight}: 5.75rem;

                ${tokens.largeSCodeItemWidth}: 3.5rem;
                ${tokens.largeSCodeItemHeight}: 5.75rem;

                ${tokens.mediumMCodeItemWidth}: 3rem;
                ${tokens.mediumMCodeItemHeight}: 4.75rem;

                ${tokens.mediumSCodeItemWidth}: 3rem;
                ${tokens.mediumSCodeItemHeight}: 4.75rem;

                ${tokens.smallMCodeItemWidth}: 2.25rem;
                ${tokens.smallMCodeItemHeight}: 3.75rem;

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

                ${tokens.largeMFontSize}: 4rem;
                ${tokens.largeMLineHeight}: 4.25rem;

                ${tokens.largeSFontSize}: 4rem;
                ${tokens.largeSLineHeight}: 4.25rem;

                ${tokens.mediumMFontSize}: 3rem;
                ${tokens.mediumMLineHeight}: 3.25rem;

                ${tokens.mediumSFontSize}: 3rem;
                ${tokens.mediumSLineHeight}: 3.25rem;

                ${tokens.smallMFontSize}: 2.5rem;
                ${tokens.smallMLineHeight}: 2.75rem;

                ${tokens.captionFontFamily}: var(--plasma-typo-h5-font-family);
                ${tokens.captionFontSize}: var(--plasma-typo-h5-font-size);
                ${tokens.captionFontStyle}: var(--plasma-typo-h5-font-style);
                ${tokens.captionFontWeight}: var(--plasma-typo-h5-font-weight);
                ${tokens.captionLetterSpacing}: var(--plasma-typo-h5-letter-spacing);
                ${tokens.captionLineHeight}: var(--plasma-typo-h5-line-height);

                ${tokens.largeMCodeItemWidth}: 2.5rem;
                ${tokens.largeMCodeItemHeight}: 4.25rem;

                ${tokens.largeSCodeItemWidth}: 2.5rem;
                ${tokens.largeSCodeItemHeight}: 4.25rem;

                ${tokens.mediumMCodeItemWidth}: 2rem;
                ${tokens.mediumMCodeItemHeight}: 3.25rem;

                ${tokens.mediumSCodeItemWidth}: 2rem;
                ${tokens.mediumSCodeItemHeight}: 3.25rem;

                ${tokens.smallMCodeItemWidth}: 1.625rem;
                ${tokens.smallMCodeItemHeight}: 2.75rem;

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
