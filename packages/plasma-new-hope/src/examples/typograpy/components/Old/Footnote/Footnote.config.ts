import { css } from '@linaria/core';

import { tokens } from '../../../../../components/Typography/tokens';

export const config = {
    defaults: {
        size: 'footnote1',
    },
    variations: {
        size: {
            footnote1: css`
                ${tokens.typoFontFamily}: var(--plasma-typo-footnote1-font-family);
                ${tokens.typoFontSize}: var(--plasma-typo-footnote1-font-size);
                ${tokens.typoFontStyle}: var(--plasma-typo-footnote1-font-style);
                ${tokens.typoFontWeight}: var(--plasma-typo-footnote1-font-weight);
                ${tokens.typoFontLetterSpacing}: var(--plasma-typo-footnote1-letter-spacing);
                ${tokens.typoFontLineHeight}: var(--plasma-typo-footnote1-line-height);
            `,
            footnote2: css`
                ${tokens.typoFontFamily}: var(--plasma-typo-footnote2-font-family);
                ${tokens.typoFontSize}: var(--plasma-typo-footnote2-font-size);
                ${tokens.typoFontStyle}: var(--plasma-typo-footnote2-font-style);
                ${tokens.typoFontWeight}: var(--plasma-typo-footnote2-font-weight);
                ${tokens.typoFontLetterSpacing}: var(--plasma-typo-footnote2-letter-spacing);
                ${tokens.typoFontLineHeight}: var(--plasma-typo-footnote2-line-height);
            `,
        },
    },
};
