import { css, typographyTokens } from '@salutejs/plasma-new-hope/styled-components';

export const defaults = {
    footnote1: {
        size: 'footnote1',
    },
    footnote2: {
        size: 'footnote2',
    },
};

export const config = {
    defaults: {
        size: 'footnote1',
    },
    variations: {
        size: {
            footnote1: css`
                ${typographyTokens.typoFontFamily}: var(--plasma-typo-footnote1-font-family);
                ${typographyTokens.typoFontSize}: var(--plasma-typo-footnote1-font-size);
                ${typographyTokens.typoFontStyle}: var(--plasma-typo-footnote1-font-style);
                ${typographyTokens.typoFontWeight}: var(--plasma-typo-footnote1-font-weight);
                ${typographyTokens.typoFontLetterSpacing}: var(--plasma-typo-footnote1-letter-spacing);
                ${typographyTokens.typoFontLineHeight}: var(--plasma-typo-footnote1-line-height);
            `,
            footnote2: css`
                ${typographyTokens.typoFontFamily}: var(--plasma-typo-footnote2-font-family);
                ${typographyTokens.typoFontSize}: var(--plasma-typo-footnote2-font-size);
                ${typographyTokens.typoFontStyle}: var(--plasma-typo-footnote2-font-style);
                ${typographyTokens.typoFontWeight}: var(--plasma-typo-footnote2-font-weight);
                ${typographyTokens.typoFontLetterSpacing}: var(--plasma-typo-footnote2-letter-spacing);
                ${typographyTokens.typoFontLineHeight}: var(--plasma-typo-footnote2-line-height);
            `,
        },
    },
};
