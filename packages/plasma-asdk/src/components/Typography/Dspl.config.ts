import { css, typographyTokens } from '@salutejs/plasma-new-hope/styled-components';

export const defaults = {
    m: {
        size: 'm',
    },
    l: {
        size: 'l',
    },
    s: {
        size: 's',
    },
};

export const config = {
    defaults: {
        size: 'm',
    },
    variations: {
        size: {
            l: css`
                ${typographyTokens.typoFontFamily}: var(--plasma-typo-dspl-l-font-family);
                ${typographyTokens.typoFontSize}: var(--plasma-typo-dspl-l-font-size);
                ${typographyTokens.typoFontStyle}: var(--plasma-typo-dspl-l-font-style);
                ${typographyTokens.typoFontWeight}: var(--plasma-typo-dspl-l-font-weight);
                ${typographyTokens.typoFontWeightBold}: var(--plasma-typo-dspl-l-bold-font-weight);
                ${typographyTokens.typoFontLetterSpacing}: var(--plasma-typo-dspl-l-letter-spacing);
                ${typographyTokens.typoFontLineHeight}: var(--plasma-typo-dspl-l-line-height);
            `,
            m: css`
                ${typographyTokens.typoFontFamily}: var(--plasma-typo-dspl-m-font-family);
                ${typographyTokens.typoFontSize}: var(--plasma-typo-dspl-m-font-size);
                ${typographyTokens.typoFontStyle}: var(--plasma-typo-dspl-m-font-style);
                ${typographyTokens.typoFontWeight}: var(--plasma-typo-dspl-m-font-weight);
                ${typographyTokens.typoFontWeightBold}: var(--plasma-typo-dspl-m-bold-font-weight);
                ${typographyTokens.typoFontLetterSpacing}: var(--plasma-typo-dspl-m-letter-spacing);
                ${typographyTokens.typoFontLineHeight}: var(--plasma-typo-dspl-m-line-height);
            `,
            s: css`
                ${typographyTokens.typoFontFamily}: var(--plasma-typo-dspl-s-font-family);
                ${typographyTokens.typoFontSize}: var(--plasma-typo-dspl-s-font-size);
                ${typographyTokens.typoFontStyle}: var(--plasma-typo-dspl-s-font-style);
                ${typographyTokens.typoFontWeight}: var(--plasma-typo-dspl-s-font-weight);
                ${typographyTokens.typoFontWeightBold}: var(--plasma-typo-dspl-s-bold-font-weight);
                ${typographyTokens.typoFontLetterSpacing}: var(--plasma-typo-dspl-s-letter-spacing);
                ${typographyTokens.typoFontLineHeight}: var(--plasma-typo-dspl-s-line-height);
            `,
        },
    },
};
