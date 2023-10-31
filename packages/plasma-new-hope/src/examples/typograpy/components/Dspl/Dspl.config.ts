import { css } from '@linaria/core';

import { tokens } from '../../../../components/Typography/tokens';

export const config = {
    defaults: {
        size: 'm',
    },
    variations: {
        size: {
            l: css`
                ${tokens.typoFontFamily}: var(--plasma-typo-dspl-l-font-family);
                ${tokens.typoFontSize}: var(--plasma-typo-dspl-l-font-size);
                ${tokens.typoFontStyle}: var(--plasma-typo-dspl-l-font-style);
                ${tokens.typoFontWeight}: var(--plasma-typo-dspl-l-font-weight);
                ${tokens.typoFontWeightBold}: var(--plasma-typo-dspl-l-bold-font-weight);
                ${tokens.typoFontLetterSpacing}: var(--plasma-typo-dspl-l-letter-spacing);
                ${tokens.typoFontLineHeight}: var(--plasma-typo-dspl-l-line-height);
            `,
            m: css`
                ${tokens.typoFontFamily}: var(--plasma-typo-dspl-m-font-family);
                ${tokens.typoFontSize}: var(--plasma-typo-dspl-m-font-size);
                ${tokens.typoFontStyle}: var(--plasma-typo-dspl-m-font-style);
                ${tokens.typoFontWeight}: var(--plasma-typo-dspl-m-font-weight);
                ${tokens.typoFontWeightBold}: var(--plasma-typo-dspl-m-bold-font-weight);
                ${tokens.typoFontLetterSpacing}: var(--plasma-typo-dspl-m-letter-spacing);
                ${tokens.typoFontLineHeight}: var(--plasma-typo-dspl-m-line-height);
            `,
            s: css`
                ${tokens.typoFontFamily}: var(--plasma-typo-dspl-s-font-family);
                ${tokens.typoFontSize}: var(--plasma-typo-dspl-s-font-size);
                ${tokens.typoFontStyle}: var(--plasma-typo-dspl-s-font-style);
                ${tokens.typoFontWeight}: var(--plasma-typo-dspl-s-font-weight);
                ${tokens.typoFontWeightBold}: var(--plasma-typo-dspl-s-bold-font-weight);
                ${tokens.typoFontLetterSpacing}: var(--plasma-typo-dspl-s-letter-spacing);
                ${tokens.typoFontLineHeight}: var(--plasma-typo-dspl-s-line-height);
            `,
        },
    },
};
