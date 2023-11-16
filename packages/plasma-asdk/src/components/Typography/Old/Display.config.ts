import { css, typographyTokens } from '@salutejs/plasma-new-hope/styled-components';

export const defaults = {
    display1: {
        size: 'display1',
    },
    display2: {
        size: 'display2',
    },
    display3: {
        size: 'display3',
    },
};

export const config = {
    defaults: {
        size: 'display1',
    },
    variations: {
        size: {
            display1: css`
                ${typographyTokens.typoFontFamily}: var(--plasma-typo-display1-font-family);
                ${typographyTokens.typoFontSize}: var(--plasma-typo-display1-font-size);
                ${typographyTokens.typoFontStyle}: var(--plasma-typo-display1-font-style);
                ${typographyTokens.typoFontWeight}: var(--plasma-typo-display1-font-weight);
                ${typographyTokens.typoFontLetterSpacing}: var(--plasma-typo-display1-letter-spacing);
                ${typographyTokens.typoFontLineHeight}: var(--plasma-typo-display1-line-height);
            `,
            display2: css`
                ${typographyTokens.typoFontFamily}: var(--plasma-typo-display2-font-family);
                ${typographyTokens.typoFontSize}: var(--plasma-typo-display2-font-size);
                ${typographyTokens.typoFontStyle}: var(--plasma-typo-display2-font-style);
                ${typographyTokens.typoFontWeight}: var(--plasma-typo-display2-font-weight);
                ${typographyTokens.typoFontLetterSpacing}: var(--plasma-typo-display2-letter-spacing);
                ${typographyTokens.typoFontLineHeight}: var(--plasma-typo-display2-line-height);
            `,
            display3: css`
                ${typographyTokens.typoFontFamily}: var(--plasma-typo-display3-font-family);
                ${typographyTokens.typoFontSize}: var(--plasma-typo-display3-font-size);
                ${typographyTokens.typoFontStyle}: var(--plasma-typo-display3-font-style);
                ${typographyTokens.typoFontWeight}: var(--plasma-typo-display3-font-weight);
                ${typographyTokens.typoFontLetterSpacing}: var(--plasma-typo-display3-letter-spacing);
                ${typographyTokens.typoFontLineHeight}: var(--plasma-typo-display3-line-height);
            `,
        },
    },
};
