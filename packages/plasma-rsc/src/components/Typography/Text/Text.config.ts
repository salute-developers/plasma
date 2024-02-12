import { css } from '@linaria/core';

import { tokens as typographyTokens } from '../tokens';

export const configL = {
    defaults: {
        size: 'l',
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
        },
    },
};

export const configM = {
    defaults: {
        size: 'm',
    },
    variations: {
        size: {
            m: css`
                ${typographyTokens.typoFontFamily}: var(--plasma-typo-text-m-font-family);
                ${typographyTokens.typoFontSize}: var(--plasma-typo-text-m-font-size);
                ${typographyTokens.typoFontStyle}: var(--plasma-typo-text-m-font-style);
                ${typographyTokens.typoFontWeight}: var(--plasma-typo-text-m-font-weight);
                ${typographyTokens.typoFontWeightBold}: var(--plasma-typo-text-m-bold-font-weight);
                ${typographyTokens.typoFontLetterSpacing}: var(--plasma-typo-text-m-letter-spacing);
                ${typographyTokens.typoFontLineHeight}: var(--plasma-typo-text-m-line-height);
            `,
        },
    },
};

export const configS = {
    defaults: {
        size: 's',
    },
    variations: {
        size: {
            s: css`
                ${typographyTokens.typoFontFamily}: var(--plasma-typo-text-s-font-family);
                ${typographyTokens.typoFontSize}: var(--plasma-typo-text-s-font-size);
                ${typographyTokens.typoFontStyle}: var(--plasma-typo-text-s-font-style);
                ${typographyTokens.typoFontWeight}: var(--plasma-typo-text-s-font-weight);
                ${typographyTokens.typoFontWeightBold}: var(--plasma-typo-text-s-bold-font-weight);
                ${typographyTokens.typoFontLetterSpacing}: var(--plasma-typo-text-s-letter-spacing);
                ${typographyTokens.typoFontLineHeight}: var(--plasma-typo-text-s-line-height);
            `,
        },
    },
};

export const configXS = {
    defaults: {
        size: 'xs',
    },
    variations: {
        size: {
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
