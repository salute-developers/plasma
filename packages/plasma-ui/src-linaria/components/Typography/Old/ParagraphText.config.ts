import { css, typographyTokens } from '@salutejs/plasma-new-hope/styled-components';

export const configParagraphText1 = {
    defaults: {
        size: 'paragraphText1',
    },
    variations: {
        size: {
            paragraphText1: css`
                ${typographyTokens.typoFontFamily}: var(--plasma-typo-paragraph1-font-family);
                ${typographyTokens.typoFontSize}: var(--plasma-typo-paragraph1-font-size);
                ${typographyTokens.typoFontStyle}: var(--plasma-typo-paragraph1-font-style);
                ${typographyTokens.typoFontWeight}: var(--plasma-typo-paragraph1-font-weight);
                ${typographyTokens.typoFontLetterSpacing}: var(--plasma-typo-paragraph1-letter-spacing);
                ${typographyTokens.typoFontLineHeight}: var(--plasma-typo-paragraph1-line-height);
            `,
        },
    },
};

export const configParagraphText2 = {
    defaults: {
        size: 'paragraphText2',
    },
    variations: {
        size: {
            paragraphText2: css`
                ${typographyTokens.typoFontFamily}: var(--plasma-typo-paragraph2-font-family);
                ${typographyTokens.typoFontSize}: var(--plasma-typo-paragraph2-font-size);
                ${typographyTokens.typoFontStyle}: var(--plasma-typo-paragraph2-font-style);
                ${typographyTokens.typoFontWeight}: var(--plasma-typo-paragraph2-font-weight);
                ${typographyTokens.typoFontLetterSpacing}: var(--plasma-typo-paragraph2-letter-spacing);
                ${typographyTokens.typoFontLineHeight}: var(--plasma-typo-paragraph2-line-height);
            `,
        },
    },
};
