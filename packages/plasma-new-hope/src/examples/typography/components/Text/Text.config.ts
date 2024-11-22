import { css } from '@linaria/core';

import { tokens } from '../../../../components/Typography/tokens';

export const config = {
    defaults: {
        size: 'm',
    },
    variations: {
        size: {
            l: css`
                ${tokens.typoFontFamily}: var(--plasma-typo-text-l-font-family);
                ${tokens.typoFontSize}: var(--plasma-typo-text-l-font-size);
                ${tokens.typoFontStyle}: var(--plasma-typo-text-l-font-style);
                ${tokens.typoFontWeight}: var(--plasma-typo-text-l-font-weight);
                ${tokens.typoFontWeightBold}: var(--plasma-typo-text-l-bold-font-weight);
                ${tokens.typoFontLetterSpacing}: var(--plasma-typo-text-l-letter-spacing);
                ${tokens.typoFontLineHeight}: var(--plasma-typo-text-l-line-height);
            `,
            m: css`
                ${tokens.typoFontFamily}: var(--plasma-typo-text-m-font-family);
                ${tokens.typoFontSize}: var(--plasma-typo-text-m-font-size);
                ${tokens.typoFontStyle}: var(--plasma-typo-text-m-font-style);
                ${tokens.typoFontWeight}: var(--plasma-typo-text-m-font-weight);
                ${tokens.typoFontWeightBold}: var(--plasma-typo-text-m-bold-font-weight);
                ${tokens.typoFontLetterSpacing}: var(--plasma-typo-text-m-letter-spacing);
                ${tokens.typoFontLineHeight}: var(--plasma-typo-text-m-line-height);
            `,
            s: css`
                ${tokens.typoFontFamily}: var(--plasma-typo-text-s-font-family);
                ${tokens.typoFontSize}: var(--plasma-typo-text-s-font-size);
                ${tokens.typoFontStyle}: var(--plasma-typo-text-s-font-style);
                ${tokens.typoFontWeight}: var(--plasma-typo-text-s-font-weight);
                ${tokens.typoFontWeightBold}: var(--plasma-typo-text-s-bold-font-weight);
                ${tokens.typoFontLetterSpacing}: var(--plasma-typo-text-s-letter-spacing);
                ${tokens.typoFontLineHeight}: var(--plasma-typo-text-s-line-height);
            `,
            xs: css`
                ${tokens.typoFontFamily}: var(--plasma-typo-text-xs-font-family);
                ${tokens.typoFontSize}: var(--plasma-typo-text-xs-font-size);
                ${tokens.typoFontStyle}: var(--plasma-typo-text-xs-font-style);
                ${tokens.typoFontWeight}: var(--plasma-typo-text-xs-font-weight);
                ${tokens.typoFontWeightBold}: var(--plasma-typo-text-xs-bold-font-weight);
                ${tokens.typoFontLetterSpacing}: var(--plasma-typo-text-xs-letter-spacing);
                ${tokens.typoFontLineHeight}: var(--plasma-typo-text-xs-line-height);
            `,
        },
    },
};
