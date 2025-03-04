import { css } from '@linaria/core';

import { tokens } from '../../../../../components/Typography/tokens';

export const config = {
    defaults: {
        size: 'display1',
    },
    variations: {
        size: {
            display1: css`
                ${tokens.typoFontFamily}: var(--plasma-typo-display1-font-family);
                ${tokens.typoFontSize}: var(--plasma-typo-display1-font-size);
                ${tokens.typoFontStyle}: var(--plasma-typo-display1-font-style);
                ${tokens.typoFontWeight}: var(--plasma-typo-display1-font-weight);
                ${tokens.typoFontLetterSpacing}: var(--plasma-typo-display1-letter-spacing);
                ${tokens.typoFontLineHeight}: var(--plasma-typo-display1-line-height);
            `,
            display2: css`
                ${tokens.typoFontFamily}: var(--plasma-typo-display2-font-family);
                ${tokens.typoFontSize}: var(--plasma-typo-display2-font-size);
                ${tokens.typoFontStyle}: var(--plasma-typo-display2-font-style);
                ${tokens.typoFontWeight}: var(--plasma-typo-display2-font-weight);
                ${tokens.typoFontLetterSpacing}: var(--plasma-typo-display2-letter-spacing);
                ${tokens.typoFontLineHeight}: var(--plasma-typo-display2-line-height);
            `,
            display3: css`
                ${tokens.typoFontFamily}: var(--plasma-typo-display3-font-family);
                ${tokens.typoFontSize}: var(--plasma-typo-display3-font-size);
                ${tokens.typoFontStyle}: var(--plasma-typo-display3-font-style);
                ${tokens.typoFontWeight}: var(--plasma-typo-display3-font-weight);
                ${tokens.typoFontLetterSpacing}: var(--plasma-typo-display3-letter-spacing);
                ${tokens.typoFontLineHeight}: var(--plasma-typo-display3-line-height);
            `,
        },
    },
};
