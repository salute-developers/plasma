import { css } from '@linaria/core';

import { tokens as typographyTokens } from '../tokens';

export const configL = {
    defaults: {
        size: 'l',
    },
    variations: {
        size: {
            l: css`
                ${typographyTokens.typoFontFamily}: var(--plasma-typo-body-l-font-family);
                ${typographyTokens.typoFontSize}: var(--plasma-typo-body-l-font-size);
                ${typographyTokens.typoFontStyle}: var(--plasma-typo-body-l-font-style);
                ${typographyTokens.typoFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${typographyTokens.typoFontWeightBold}: var(--plasma-typo-body-l-bold-font-weight);
                ${typographyTokens.typoFontLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${typographyTokens.typoFontLineHeight}: var(--plasma-typo-body-l-line-height);
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
                ${typographyTokens.typoFontFamily}: var(--plasma-typo-body-m-font-family);
                ${typographyTokens.typoFontSize}: var(--plasma-typo-body-m-font-size);
                ${typographyTokens.typoFontStyle}: var(--plasma-typo-body-m-font-style);
                ${typographyTokens.typoFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${typographyTokens.typoFontWeightBold}: var(--plasma-typo-body-m-bold-font-weight);
                ${typographyTokens.typoFontLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${typographyTokens.typoFontLineHeight}: var(--plasma-typo-body-m-line-height);
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
                ${typographyTokens.typoFontFamily}: var(--plasma-typo-body-s-font-family);
                ${typographyTokens.typoFontSize}: var(--plasma-typo-body-s-font-size);
                ${typographyTokens.typoFontStyle}: var(--plasma-typo-body-s-font-style);
                ${typographyTokens.typoFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${typographyTokens.typoFontWeightBold}: var(--plasma-typo-body-s-bold-font-weight);
                ${typographyTokens.typoFontLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${typographyTokens.typoFontLineHeight}: var(--plasma-typo-body-s-line-height);
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
                ${typographyTokens.typoFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${typographyTokens.typoFontSize}: var(--plasma-typo-body-xs-font-size);
                ${typographyTokens.typoFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${typographyTokens.typoFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${typographyTokens.typoFontWeightBold}: var(--plasma-typo-body-xs-bold-font-weight);
                ${typographyTokens.typoFontLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${typographyTokens.typoFontLineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
        },
    },
};

export const configXXS = {
    defaults: {
        size: 'xxs',
    },
    variations: {
        size: {
            xxs: css`
                ${typographyTokens.typoFontFamily}: var(--plasma-typo-body-xxs-font-family);
                ${typographyTokens.typoFontSize}: var(--plasma-typo-body-xxs-font-size);
                ${typographyTokens.typoFontStyle}: var(--plasma-typo-body-xxs-font-style);
                ${typographyTokens.typoFontWeight}: var(--plasma-typo-body-xxs-font-weight);
                ${typographyTokens.typoFontWeightBold}: var(--plasma-typo-body-xxs-bold-font-weight);
                ${typographyTokens.typoFontLetterSpacing}: var(--plasma-typo-body-xxs-letter-spacing);
                ${typographyTokens.typoFontLineHeight}: var(--plasma-typo-body-xxs-line-height);
            `,
        },
    },
};
