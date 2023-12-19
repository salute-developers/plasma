import { css, typographyTokens } from '@salutejs/plasma-new-hope/styled-components';

export const defaults = {
    h1: {
        size: 'h1',
    },
    h2: {
        size: 'h2',
    },
    h3: {
        size: 'h3',
    },
    h4: {
        size: 'h4',
    },
    h5: {
        size: 'h5',
    },
};

export const config = {
    defaults: {
        size: 'h2',
    },
    variations: {
        size: {
            h1: css`
                ${typographyTokens.typoFontFamily}: var(--plasma-typo-h1-font-family);
                ${typographyTokens.typoFontSize}: var(--plasma-typo-h1-font-size);
                ${typographyTokens.typoFontStyle}: var(--plasma-typo-h1-font-style);
                ${typographyTokens.typoFontWeight}: var(--plasma-typo-h1-font-weight);
                ${typographyTokens.typoFontWeightBold}: var(--plasma-typo-h1-bold-font-weight);
                ${typographyTokens.typoFontLetterSpacing}: var(--plasma-typo-h1-letter-spacing);
                ${typographyTokens.typoFontLineHeight}: var(--plasma-typo-h1-line-height);
            `,
            h2: css`
                ${typographyTokens.typoFontFamily}: var(--plasma-typo-h2-font-family);
                ${typographyTokens.typoFontSize}: var(--plasma-typo-h2-font-size);
                ${typographyTokens.typoFontStyle}: var(--plasma-typo-h2-font-style);
                ${typographyTokens.typoFontWeight}: var(--plasma-typo-h2-font-weight);
                ${typographyTokens.typoFontWeightBold}: var(--plasma-typo-h2-bold-font-weight);
                ${typographyTokens.typoFontLetterSpacing}: var(--plasma-typo-h2-letter-spacing);
                ${typographyTokens.typoFontLineHeight}: var(--plasma-typo-h2-line-height);
            `,
            h3: css`
                ${typographyTokens.typoFontFamily}: var(--plasma-typo-h3-font-family);
                ${typographyTokens.typoFontSize}: var(--plasma-typo-h3-font-size);
                ${typographyTokens.typoFontStyle}: var(--plasma-typo-h3-font-style);
                ${typographyTokens.typoFontWeight}: var(--plasma-typo-h3-font-weight);
                ${typographyTokens.typoFontWeightBold}: var(--plasma-typo-h3-bold-font-weight);
                ${typographyTokens.typoFontLetterSpacing}: var(--plasma-typo-h3-letter-spacing);
                ${typographyTokens.typoFontLineHeight}: var(--plasma-typo-h3-line-height);
            `,
            h4: css`
                ${typographyTokens.typoFontFamily}: var(--plasma-typo-h4-font-family);
                ${typographyTokens.typoFontSize}: var(--plasma-typo-h4-font-size);
                ${typographyTokens.typoFontStyle}: var(--plasma-typo-h4-font-style);
                ${typographyTokens.typoFontWeight}: var(--plasma-typo-h4-font-weight);
                ${typographyTokens.typoFontWeightBold}: var(--plasma-typo-h4-bold-font-weight);
                ${typographyTokens.typoFontLetterSpacing}: var(--plasma-typo-h4-letter-spacing);
                ${typographyTokens.typoFontLineHeight}: var(--plasma-typo-h4-line-height);
            `,
            h5: css`
                ${typographyTokens.typoFontFamily}: var(--plasma-typo-h5-font-family);
                ${typographyTokens.typoFontSize}: var(--plasma-typo-h5-font-size);
                ${typographyTokens.typoFontStyle}: var(--plasma-typo-h5-font-style);
                ${typographyTokens.typoFontWeight}: var(--plasma-typo-h5-font-weight);
                ${typographyTokens.typoFontWeightBold}: var(--plasma-typo-h5-bold-font-weight);
                ${typographyTokens.typoFontLetterSpacing}: var(--plasma-typo-h5-letter-spacing);
                ${typographyTokens.typoFontLineHeight}: var(--plasma-typo-h5-line-height);
            `,
        },
    },
};
