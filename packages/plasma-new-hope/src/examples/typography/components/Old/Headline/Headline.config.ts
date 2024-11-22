import { css } from '@linaria/core';

import { tokens } from '../../../../../components/Typography/tokens';

export const config = {
    defaults: {
        size: 'headline1',
    },
    variations: {
        size: {
            headline1: css`
                ${tokens.typoFontFamily}: var(--plasma-typo-headline1-font-family);
                ${tokens.typoFontSize}: var(--plasma-typo-headline1-font-size);
                ${tokens.typoFontStyle}: var(--plasma-typo-headline1-font-style);
                ${tokens.typoFontWeight}: var(--plasma-typo-headline1-font-weight);
                ${tokens.typoFontLetterSpacing}: var(--plasma-typo-headline1-letter-spacing);
                ${tokens.typoFontLineHeight}: var(--plasma-typo-headline1-line-height);
            `,
            headline2: css`
                ${tokens.typoFontFamily}: var(--plasma-typo-headline2-font-family);
                ${tokens.typoFontSize}: var(--plasma-typo-headline2-font-size);
                ${tokens.typoFontStyle}: var(--plasma-typo-headline2-font-style);
                ${tokens.typoFontWeight}: var(--plasma-typo-headline2-font-weight);
                ${tokens.typoFontLetterSpacing}: var(--plasma-typo-headline2-letter-spacing);
                ${tokens.typoFontLineHeight}: var(--plasma-typo-headline2-line-height);
            `,
            headline3: css`
                ${tokens.typoFontFamily}: var(--plasma-typo-headline3-font-family);
                ${tokens.typoFontSize}: var(--plasma-typo-headline3-font-size);
                ${tokens.typoFontStyle}: var(--plasma-typo-headline3-font-style);
                ${tokens.typoFontWeight}: var(--plasma-typo-headline3-font-weight);
                ${tokens.typoFontLetterSpacing}: var(--plasma-typo-headline3-letter-spacing);
                ${tokens.typoFontLineHeight}: var(--plasma-typo-headline3-line-height);
            `,
            headline4: css`
                ${tokens.typoFontFamily}: var(--plasma-typo-headline4-font-family);
                ${tokens.typoFontSize}: var(--plasma-typo-headline4-font-size);
                ${tokens.typoFontStyle}: var(--plasma-typo-headline4-font-style);
                ${tokens.typoFontWeight}: var(--plasma-typo-headline4-font-weight);
                ${tokens.typoFontLetterSpacing}: var(--plasma-typo-headline4-letter-spacing);
                ${tokens.typoFontLineHeight}: var(--plasma-typo-headline4-line-height);
            `,
        },
    },
};
