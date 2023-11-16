import { css } from '@linaria/core';

import { tokens } from '../../../../../components/Typography/tokens';

export const config = {
    defaults: {
        size: 'paragraph1',
    },
    variations: {
        size: {
            paragraph1: css`
                ${tokens.typoFontFamily}: var(--plasma-typo-paragraph1-font-family);
                ${tokens.typoFontSize}: var(--plasma-typo-paragraph1-font-size);
                ${tokens.typoFontStyle}: var(--plasma-typo-paragraph1-font-style);
                ${tokens.typoFontWeight}: var(--plasma-typo-paragraph1-font-weight);
                ${tokens.typoFontLetterSpacing}: var(--plasma-typo-paragraph1-letter-spacing);
                ${tokens.typoFontLineHeight}: var(--plasma-typo-paragraph1-line-height);
            `,
            paragraph2: css`
                ${tokens.typoFontFamily}: var(--plasma-typo-paragraph2-font-family);
                ${tokens.typoFontSize}: var(--plasma-typo-paragraph2-font-size);
                ${tokens.typoFontStyle}: var(--plasma-typo-paragraph2-font-style);
                ${tokens.typoFontWeight}: var(--plasma-typo-paragraph2-font-weight);
                ${tokens.typoFontLetterSpacing}: var(--plasma-typo-paragraph2-letter-spacing);
                ${tokens.typoFontLineHeight}: var(--plasma-typo-paragraph2-line-height);
            `,
        },
    },
};
