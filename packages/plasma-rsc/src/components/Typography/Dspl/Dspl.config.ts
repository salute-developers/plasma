import { css } from '@linaria/core';

import { tokens as typographyTokens } from '../tokens';

export const configL = {
    defaults: {
        size: 'l',
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
                ${typographyTokens.typoFontFamily}: var(--plasma-typo-dspl-m-font-family);
                ${typographyTokens.typoFontSize}: var(--plasma-typo-dspl-m-font-size);
                ${typographyTokens.typoFontStyle}: var(--plasma-typo-dspl-m-font-style);
                ${typographyTokens.typoFontWeight}: var(--plasma-typo-dspl-m-font-weight);
                ${typographyTokens.typoFontWeightBold}: var(--plasma-typo-dspl-m-bold-font-weight);
                ${typographyTokens.typoFontLetterSpacing}: var(--plasma-typo-dspl-m-letter-spacing);
                ${typographyTokens.typoFontLineHeight}: var(--plasma-typo-dspl-m-line-height);
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
