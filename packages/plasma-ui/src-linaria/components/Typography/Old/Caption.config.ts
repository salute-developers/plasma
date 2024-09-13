import { css, typographyTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        size: 'm',
    },
    variations: {
        size: {
            m: css`
                ${typographyTokens.typoFontFamily}: var(--plasma-typo-caption-font-family);
                ${typographyTokens.typoFontSize}: var(--plasma-typo-caption-font-size);
                ${typographyTokens.typoFontStyle}: var(--plasma-typo-caption-font-style);
                ${typographyTokens.typoFontWeight}: var(--plasma-typo-caption-font-weight);
                ${typographyTokens.typoFontLetterSpacing}: var(--plasma-typo-caption-letter-spacing);
                ${typographyTokens.typoFontLineHeight}: var(--plasma-typo-caption-line-height);
            `,
        },
    },
};
