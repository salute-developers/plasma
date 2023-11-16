import { css, typographyTokens } from '@salutejs/plasma-new-hope/styled-components';

export const defaults = {
    button1: {
        size: 'button1',
    },
    button2: {
        size: 'button2',
    },
};

export const config = {
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
