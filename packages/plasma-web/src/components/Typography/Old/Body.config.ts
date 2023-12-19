import { css, typographyTokens } from '@salutejs/plasma-new-hope/styled-components';

export const defaults = {
    body1: {
        size: 'body1',
    },
    body2: {
        size: 'body2',
    },
    body3: {
        size: 'body3',
    },
};

export const config = {
    defaults: {
        size: 'body1',
    },
    variations: {
        size: {
            body1: css`
                ${typographyTokens.typoFontFamily}: var(--plasma-typo-body1-font-family);
                ${typographyTokens.typoFontSize}: var(--plasma-typo-body1-font-size);
                ${typographyTokens.typoFontStyle}: var(--plasma-typo-body1-font-style);
                ${typographyTokens.typoFontWeight}: var(--plasma-typo-body1-font-weight);
                ${typographyTokens.typoFontLetterSpacing}: var(--plasma-typo-body1-letter-spacing);
                ${typographyTokens.typoFontLineHeight}: var(--plasma-typo-body1-line-height);
            `,
            body2: css`
                ${typographyTokens.typoFontFamily}: var(--plasma-typo-body2-font-family);
                ${typographyTokens.typoFontSize}: var(--plasma-typo-body2-font-size);
                ${typographyTokens.typoFontStyle}: var(--plasma-typo-body2-font-style);
                ${typographyTokens.typoFontWeight}: var(--plasma-typo-body2-font-weight);
                ${typographyTokens.typoFontLetterSpacing}: var(--plasma-typo-body2-letter-spacing);
                ${typographyTokens.typoFontLineHeight}: var(--plasma-typo-body2-line-height);
            `,
            body3: css`
                ${typographyTokens.typoFontFamily}: var(--plasma-typo-body3-font-family);
                ${typographyTokens.typoFontSize}: var(--plasma-typo-body3-font-size);
                ${typographyTokens.typoFontStyle}: var(--plasma-typo-body3-font-style);
                ${typographyTokens.typoFontWeight}: var(--plasma-typo-body3-font-weight);
                ${typographyTokens.typoFontLetterSpacing}: var(--plasma-typo-body3-letter-spacing);
                ${typographyTokens.typoFontLineHeight}: var(--plasma-typo-body3-line-height);
            `,
        },
    },
};
