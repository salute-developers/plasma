import { css, typographyTokens } from '@salutejs/plasma-new-hope/styled-components';

export const configS = {
    defaults: {
        size: 's',
    },
    variations: {
        size: {
            s: css`
                ${typographyTokens.typoFontFamily}: var(--plasma-typo-dspl-s-font-family);
                ${typographyTokens.typoFontSize}: var(--plasma-typo-dspl-s-font-size);
                ${typographyTokens.typoFontStyle}: var(--plasma-typo-dspl-s-font-style);
                ${typographyTokens.typoFontWeight}: var(--plasma-typo-dspl-s-font-weight);
                ${typographyTokens.typoFontWeightBold}: var(--plasma-typo-dspl-s-bold-font-weight);
                ${typographyTokens.typoFontWeightMedium}: var(--plasma-typo-dspl-s-medium-font-weight);
                ${typographyTokens.typoFontLetterSpacing}: var(--plasma-typo-dspl-s-letter-spacing);
                ${typographyTokens.typoFontLineHeight}: var(--plasma-typo-dspl-s-line-height);
            `,
            's-extra-bold': css`
                ${typographyTokens.typoFontFamily}: var(--plasma-typo-dspl-s-font-family);
                ${typographyTokens.typoFontSize}: var(--plasma-typo-dspl-s-font-size);
                ${typographyTokens.typoFontStyle}: var(--plasma-typo-dspl-s-font-style);
                ${typographyTokens.typoFontWeight}: var(--plasma-typo-dspl-s-font-weight);
                ${typographyTokens.typoFontWeightBold}: 700;
                ${typographyTokens.typoFontLetterSpacing}: var(--plasma-typo-dspl-s-letter-spacing);
                ${typographyTokens.typoFontLineHeight}: var(--plasma-typo-dspl-s-line-height);
            `,
        },
    },
};
