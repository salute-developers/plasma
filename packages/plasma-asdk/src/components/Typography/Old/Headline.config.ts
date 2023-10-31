import { css, typographyTokens } from '@salutejs/plasma-new-hope/styled-components';

export const defaults = {
    headline1: {
        size: 'headline1',
    },
    headline2: {
        size: 'headline2',
    },
    headline3: {
        size: 'headline3',
    },
    headline4: {
        size: 'headline4',
    },
    headline5: {
        size: 'headline4',
    },
};

export const config = {
    defaults: {
        size: 'headline1',
    },
    variations: {
        size: {
            headline1: css`
                ${typographyTokens.typoFontFamily}: var(--plasma-typo-headline1-font-family);
                ${typographyTokens.typoFontSize}: var(--plasma-typo-headline1-font-size);
                ${typographyTokens.typoFontStyle}: var(--plasma-typo-headline1-font-style);
                ${typographyTokens.typoFontWeight}: var(--plasma-typo-headline1-font-weight);
                ${typographyTokens.typoFontLetterSpacing}: var(--plasma-typo-headline1-letter-spacing);
                ${typographyTokens.typoFontLineHeight}: var(--plasma-typo-headline1-line-height);
            `,
            headline2: css`
                ${typographyTokens.typoFontFamily}: var(--plasma-typo-headline2-font-family);
                ${typographyTokens.typoFontSize}: var(--plasma-typo-headline2-font-size);
                ${typographyTokens.typoFontStyle}: var(--plasma-typo-headline2-font-style);
                ${typographyTokens.typoFontWeight}: var(--plasma-typo-headline2-font-weight);
                ${typographyTokens.typoFontLetterSpacing}: var(--plasma-typo-headline2-letter-spacing);
                ${typographyTokens.typoFontLineHeight}: var(--plasma-typo-headline2-line-height);
            `,
            headline3: css`
                ${typographyTokens.typoFontFamily}: var(--plasma-typo-headline3-font-family);
                ${typographyTokens.typoFontSize}: var(--plasma-typo-headline3-font-size);
                ${typographyTokens.typoFontStyle}: var(--plasma-typo-headline3-font-style);
                ${typographyTokens.typoFontWeight}: var(--plasma-typo-headline3-font-weight);
                ${typographyTokens.typoFontLetterSpacing}: var(--plasma-typo-headline3-letter-spacing);
                ${typographyTokens.typoFontLineHeight}: var(--plasma-typo-headline3-line-height);
            `,
            headline4: css`
                ${typographyTokens.typoFontFamily}: var(--plasma-typo-headline4-font-family);
                ${typographyTokens.typoFontSize}: var(--plasma-typo-headline4-font-size);
                ${typographyTokens.typoFontStyle}: var(--plasma-typo-headline4-font-style);
                ${typographyTokens.typoFontWeight}: var(--plasma-typo-headline4-font-weight);
                ${typographyTokens.typoFontLetterSpacing}: var(--plasma-typo-headline4-letter-spacing);
                ${typographyTokens.typoFontLineHeight}: var(--plasma-typo-headline4-line-height);
            `,
            headline5: css`
                ${typographyTokens.typoFontFamily}: var(--plasma-typo-headline5-font-family);
                ${typographyTokens.typoFontSize}: var(--plasma-typo-headline5-font-size);
                ${typographyTokens.typoFontStyle}: var(--plasma-typo-headline5-font-style);
                ${typographyTokens.typoFontWeight}: var(--plasma-typo-headline5-font-weight);
                ${typographyTokens.typoFontLetterSpacing}: var(--plasma-typo-headline5-letter-spacing);
                ${typographyTokens.typoFontLineHeight}: var(--plasma-typo-headline5-line-height);
            `,
        },
    },
};
