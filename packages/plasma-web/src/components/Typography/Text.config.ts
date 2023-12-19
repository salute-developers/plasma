import { css, typographyTokens } from '@salutejs/plasma-new-hope/styled-components';

export const defaults = {
    l: {
        size: 'l',
    },
    m: {
        size: 'm',
    },
    s: {
        size: 's',
    },
    xs: {
        size: 'xs',
    },
};

export const config = {
    defaults: {
        size: 'm',
    },
    variations: {
        size: {
            l: css`
                ${typographyTokens.typoFontFamily}: var(--plasma-typo-text-l-font-family);
                ${typographyTokens.typoFontSize}: var(--plasma-typo-text-l-font-size);
                ${typographyTokens.typoFontStyle}: var(--plasma-typo-text-l-font-style);
                ${typographyTokens.typoFontWeight}: var(--plasma-typo-text-l-font-weight);
                ${typographyTokens.typoFontWeightBold}: var(--plasma-typo-text-l-bold-font-weight);
                ${typographyTokens.typoFontLetterSpacing}: var(--plasma-typo-text-l-letter-spacing);
                ${typographyTokens.typoFontLineHeight}: var(--plasma-typo-text-l-line-height);
            `,
            m: css`
                ${typographyTokens.typoFontFamily}: var(--plasma-typo-text-m-font-family);
                ${typographyTokens.typoFontSize}: var(--plasma-typo-text-m-font-size);
                ${typographyTokens.typoFontStyle}: var(--plasma-typo-text-m-font-style);
                ${typographyTokens.typoFontWeight}: var(--plasma-typo-text-m-font-weight);
                ${typographyTokens.typoFontWeightBold}: var(--plasma-typo-text-m-bold-font-weight);
                ${typographyTokens.typoFontLetterSpacing}: var(--plasma-typo-text-m-letter-spacing);
                ${typographyTokens.typoFontLineHeight}: var(--plasma-typo-text-m-line-height);
            `,
            s: css`
                ${typographyTokens.typoFontFamily}: var(--plasma-typo-text-s-font-family);
                ${typographyTokens.typoFontSize}: var(--plasma-typo-text-s-font-size);
                ${typographyTokens.typoFontStyle}: var(--plasma-typo-text-s-font-style);
                ${typographyTokens.typoFontWeight}: var(--plasma-typo-text-s-font-weight);
                ${typographyTokens.typoFontWeightBold}: var(--plasma-typo-text-s-bold-font-weight);
                ${typographyTokens.typoFontLetterSpacing}: var(--plasma-typo-text-s-letter-spacing);
                ${typographyTokens.typoFontLineHeight}: var(--plasma-typo-text-s-line-height);
            `,
            xs: css`
                ${typographyTokens.typoFontFamily}: var(--plasma-typo-text-xs-font-family);
                ${typographyTokens.typoFontSize}: var(--plasma-typo-text-xs-font-size);
                ${typographyTokens.typoFontStyle}: var(--plasma-typo-text-xs-font-style);
                ${typographyTokens.typoFontWeight}: var(--plasma-typo-text-xs-font-weight);
                ${typographyTokens.typoFontWeightBold}: var(--plasma-typo-text-xs-bold-font-weight);
                ${typographyTokens.typoFontLetterSpacing}: var(--plasma-typo-text-xs-letter-spacing);
                ${typographyTokens.typoFontLineHeight}: var(--plasma-typo-text-xs-line-height);
            `,
        },
    },
};
