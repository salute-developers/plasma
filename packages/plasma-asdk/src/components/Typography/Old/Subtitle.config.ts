import { css, typographyTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        size: 'm',
    },
    variations: {
        size: {
            m: css`
                ${typographyTokens.typoFontFamily}: var(--plasma-typo-subtitle-font-family);
                ${typographyTokens.typoFontSize}: var(--plasma-typo-subtitle-font-size);
                ${typographyTokens.typoFontStyle}: var(--plasma-typo-subtitle-font-style);
                ${typographyTokens.typoFontWeight}: var(--plasma-typo-subtitle-font-weight);
                ${typographyTokens.typoFontLetterSpacing}: var(--plasma-typo-subtitle-letter-spacing);
                ${typographyTokens.typoFontLineHeight}: var(--plasma-typo-subtitle-line-height);
            `,
        },
    },
};
