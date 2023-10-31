import { css } from '@linaria/core';

import { tokens } from '../../../../../components/Typography/tokens';

export const config = {
    defaults: {
        size: 'button1',
    },
    variations: {
        size: {
            button1: css`
                ${tokens.typoFontFamily}: var(--plasma-typo-button1-font-family);
                ${tokens.typoFontSize}: var(--plasma-typo-button1-font-size);
                ${tokens.typoFontStyle}: var(--plasma-typo-button1-font-style);
                ${tokens.typoFontWeight}: var(--plasma-typo-button1-font-weight);
                ${tokens.typoFontLetterSpacing}: var(--plasma-typo-button1-letter-spacing);
                ${tokens.typoFontLineHeight}: var(--plasma-typo-button1-line-height);
            `,
            button2: css`
                ${tokens.typoFontFamily}: var(--plasma-typo-button2-font-family);
                ${tokens.typoFontSize}: var(--plasma-typo-button2-font-size);
                ${tokens.typoFontStyle}: var(--plasma-typo-button2-font-style);
                ${tokens.typoFontWeight}: var(--plasma-typo-button2-font-weight);
                ${tokens.typoFontLetterSpacing}: var(--plasma-typo-button2-letter-spacing);
                ${tokens.typoFontLineHeight}: var(--plasma-typo-button2-line-height);
            `,
        },
    },
};
