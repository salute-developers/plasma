import { css, typographyTokens } from '@salutejs/plasma-new-hope/styled-components';

export const configButton1 = {
    defaults: {
        size: 'button1',
    },
    variations: {
        size: {
            button1: css`
                ${typographyTokens.typoFontFamily}: var(--plasma-typo-button1-font-family);
                ${typographyTokens.typoFontSize}: var(--plasma-typo-button1-font-size);
                ${typographyTokens.typoFontStyle}: var(--plasma-typo-button1-font-style);
                ${typographyTokens.typoFontWeight}: var(--plasma-typo-button1-font-weight);
                ${typographyTokens.typoFontLetterSpacing}: var(--plasma-typo-button1-letter-spacing);
                ${typographyTokens.typoFontLineHeight}: var(--plasma-typo-button1-line-height);
            `,
        },
    },
};

export const configButton2 = {
    defaults: {
        size: 'button2',
    },
    variations: {
        size: {
            button2: css`
                ${typographyTokens.typoFontFamily}: var(--plasma-typo-button2-font-family);
                ${typographyTokens.typoFontSize}: var(--plasma-typo-button2-font-size);
                ${typographyTokens.typoFontStyle}: var(--plasma-typo-button2-font-style);
                ${typographyTokens.typoFontWeight}: var(--plasma-typo-button2-font-weight);
                ${typographyTokens.typoFontLetterSpacing}: var(--plasma-typo-button2-letter-spacing);
                ${typographyTokens.typoFontLineHeight}: var(--plasma-typo-button2-line-height);
            `,
        },
    },
};
