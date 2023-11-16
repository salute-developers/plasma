import { css } from '@linaria/core';

import { tokens } from '../../../../components/Typography/tokens';

export const config = {
    defaults: {
        size: 'h2',
    },
    variations: {
        size: {
            h1: css`
                ${tokens.typoFontFamily}: var(--plasma-typo-h1-font-family);
                ${tokens.typoFontSize}: var(--plasma-typo-h1-font-size);
                ${tokens.typoFontStyle}: var(--plasma-typo-h1-font-style);
                ${tokens.typoFontWeight}: var(--plasma-typo-h1-font-weight);
                ${tokens.typoFontWeightBold}: var(--plasma-typo-h1-bold-font-weight);
                ${tokens.typoFontLetterSpacing}: var(--plasma-typo-h1-letter-spacing);
                ${tokens.typoFontLineHeight}: var(--plasma-typo-h1-line-height);
            `,
            h2: css`
                ${tokens.typoFontFamily}: var(--plasma-typo-h2-font-family);
                ${tokens.typoFontSize}: var(--plasma-typo-h2-font-size);
                ${tokens.typoFontStyle}: var(--plasma-typo-h2-font-style);
                ${tokens.typoFontWeight}: var(--plasma-typo-h2-font-weight);
                ${tokens.typoFontWeightBold}: var(--plasma-typo-h2-bold-font-weight);
                ${tokens.typoFontLetterSpacing}: var(--plasma-typo-h2-letter-spacing);
                ${tokens.typoFontLineHeight}: var(--plasma-typo-h2-line-height);
            `,
            h3: css`
                ${tokens.typoFontFamily}: var(--plasma-typo-h3-font-family);
                ${tokens.typoFontSize}: var(--plasma-typo-h3-font-size);
                ${tokens.typoFontStyle}: var(--plasma-typo-h3-font-style);
                ${tokens.typoFontWeight}: var(--plasma-typo-h3-font-weight);
                ${tokens.typoFontWeightBold}: var(--plasma-typo-h3-bold-font-weight);
                ${tokens.typoFontLetterSpacing}: var(--plasma-typo-h3-letter-spacing);
                ${tokens.typoFontLineHeight}: var(--plasma-typo-h3-line-height);
            `,
            h4: css`
                ${tokens.typoFontFamily}: var(--plasma-typo-h4-font-family);
                ${tokens.typoFontSize}: var(--plasma-typo-h4-font-size);
                ${tokens.typoFontStyle}: var(--plasma-typo-h4-font-style);
                ${tokens.typoFontWeight}: var(--plasma-typo-h4-font-weight);
                ${tokens.typoFontWeightBold}: var(--plasma-typo-h4-bold-font-weight);
                ${tokens.typoFontLetterSpacing}: var(--plasma-typo-h4-letter-spacing);
                ${tokens.typoFontLineHeight}: var(--plasma-typo-h4-line-height);
            `,
            h5: css`
                ${tokens.typoFontFamily}: var(--plasma-typo-h5-font-family);
                ${tokens.typoFontSize}: var(--plasma-typo-h5-font-size);
                ${tokens.typoFontStyle}: var(--plasma-typo-h5-font-style);
                ${tokens.typoFontWeight}: var(--plasma-typo-h5-font-weight);
                ${tokens.typoFontWeightBold}: var(--plasma-typo-h5-bold-font-weight);
                ${tokens.typoFontLetterSpacing}: var(--plasma-typo-h5-letter-spacing);
                ${tokens.typoFontLineHeight}: var(--plasma-typo-h5-line-height);
            `,
        },
    },
};
