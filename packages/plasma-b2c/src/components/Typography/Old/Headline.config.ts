import { css, typographyTokens } from '@salutejs/plasma-new-hope/styled-components';

export const configHeadline1 = {
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
        },
    },
};

export const configHeadline2 = {
    defaults: {
        size: 'headline2',
    },
    variations: {
        size: {
            headline2: css`
                ${typographyTokens.typoFontFamily}: var(--plasma-typo-headline2-font-family);
                ${typographyTokens.typoFontSize}: var(--plasma-typo-headline2-font-size);
                ${typographyTokens.typoFontStyle}: var(--plasma-typo-headline2-font-style);
                ${typographyTokens.typoFontWeight}: var(--plasma-typo-headline2-font-weight);
                ${typographyTokens.typoFontLetterSpacing}: var(--plasma-typo-headline2-letter-spacing);
                ${typographyTokens.typoFontLineHeight}: var(--plasma-typo-headline2-line-height);
            `,
        },
    },
};

export const configHeadline3 = {
    defaults: {
        size: 'headline3',
    },
    variations: {
        size: {
            headline3: css`
                ${typographyTokens.typoFontFamily}: var(--plasma-typo-headline3-font-family);
                ${typographyTokens.typoFontSize}: var(--plasma-typo-headline3-font-size);
                ${typographyTokens.typoFontStyle}: var(--plasma-typo-headline3-font-style);
                ${typographyTokens.typoFontWeight}: var(--plasma-typo-headline3-font-weight);
                ${typographyTokens.typoFontLetterSpacing}: var(--plasma-typo-headline3-letter-spacing);
                ${typographyTokens.typoFontLineHeight}: var(--plasma-typo-headline3-line-height);
            `,
        },
    },
};

export const configHeadline4 = {
    defaults: {
        size: 'headline4',
    },
    variations: {
        size: {
            headline4: css`
                ${typographyTokens.typoFontFamily}: var(--plasma-typo-headline4-font-family);
                ${typographyTokens.typoFontSize}: var(--plasma-typo-headline4-font-size);
                ${typographyTokens.typoFontStyle}: var(--plasma-typo-headline4-font-style);
                ${typographyTokens.typoFontWeight}: var(--plasma-typo-headline4-font-weight);
                ${typographyTokens.typoFontLetterSpacing}: var(--plasma-typo-headline4-letter-spacing);
                ${typographyTokens.typoFontLineHeight}: var(--plasma-typo-headline4-line-height);
            `,
        },
    },
};

export const configHeadline5 = {
    defaults: {
        size: 'headline5',
    },
    variations: {
        size: {
            headline5: css`
                ${typographyTokens.typoFontFamily}: var(--plasma-typo-headline5-font-family, 'SB Sans Text',sans-serif);
                ${typographyTokens.typoFontSize}: var(--plasma-typo-headline5-font-size, 1rem);
                ${typographyTokens.typoFontStyle}: var(--plasma-typo-headline5-font-style, normal);
                ${typographyTokens.typoFontWeight}: var(--plasma-typo-headline5-font-weight, 600);
                ${typographyTokens.typoFontLetterSpacing}: var(--plasma-typo-headline5-letter-spacing, -0.0190em);
                ${typographyTokens.typoFontLineHeight}: var(--plasma-typo-headline5-line-height, 1.25rem);
            `,
        },
    },
};
