import { css, typographyTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        size: 'm',
    },
    variations: {
        size: {
            m: css`
                ${typographyTokens.typoFontFamily}: var(--plasma-typo-underline-font-family);
                ${typographyTokens.typoFontSize}: var(--plasma-typo-underline-font-size);
                ${typographyTokens.typoFontStyle}: var(--plasma-typo-underline-font-style);
                ${typographyTokens.typoFontWeight}: var(--plasma-typo-underline-font-weight);
                ${typographyTokens.typoFontLetterSpacing}: var(--plasma-typo-underline-letter-spacing);
                ${typographyTokens.typoFontLineHeight}: var(--plasma-typo-underline-line-height);
            `,
        },
    },
};
