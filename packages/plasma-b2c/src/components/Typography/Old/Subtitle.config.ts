import { css, typographyTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        size: 'm',
    },
    variations: {
        size: {
            m: css`
                ${typographyTokens.typoFontFamily}: var(--plasma-typo-subtitle-font-family, 'SB Sans Text',sans-serif));
                ${typographyTokens.typoFontSize}: var(--plasma-typo-subtitle-font-size, 1.25rem);
                ${typographyTokens.typoFontStyle}: var(--plasma-typo-subtitle-font-style, normal);
                ${typographyTokens.typoFontWeight}: var(--plasma-typo-subtitle-font-weight, 400);
                ${typographyTokens.typoFontLetterSpacing}: var(--plasma-typo-subtitle-letter-spacing, -0.0190em);
                ${typographyTokens.typoFontLineHeight}: var(--plasma-typo-subtitle-line-height, 1.5rem);
            `,
        },
    },
};
