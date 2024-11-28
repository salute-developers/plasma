import { css } from '@linaria/core';

import { tokens } from '../../../../components/Typography/tokens';

export const config = {
    defaults: {
        size: 'm',
    },
    variations: {
        size: {
            l: css`
                ${tokens.typoFontFamily}: var(--plasma-typo-body-l-font-family);
                ${tokens.typoFontSize}: var(--plasma-typo-body-l-font-size);
                ${tokens.typoFontStyle}: var(--plasma-typo-body-l-font-style);
                ${tokens.typoFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${tokens.typoFontWeightBold}: var(--plasma-typo-body-l-bold-font-weight);
                ${tokens.typoFontLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${tokens.typoFontLineHeight}: var(--plasma-typo-body-l-line-height);
            `,
            m: css`
                ${tokens.typoFontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.typoFontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.typoFontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.typoFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tokens.typoFontWeightBold}: var(--plasma-typo-body-m-bold-font-weight);
                ${tokens.typoFontLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.typoFontLineHeight}: var(--plasma-typo-body-m-line-height);
            `,
            s: css`
                ${tokens.typoFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.typoFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.typoFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.typoFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.typoFontWeightBold}: var(--plasma-typo-body-s-bold-font-weight);
                ${tokens.typoFontLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.typoFontLineHeight}: var(--plasma-typo-body-s-line-height);
            `,
            xs: css`
                ${tokens.typoFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.typoFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.typoFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.typoFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.typoFontWeightBold}: var(--plasma-typo-body-xs-bold-font-weight);
                ${tokens.typoFontLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.typoFontLineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
            xxs: css`
                ${tokens.typoFontFamily}: var(--plasma-typo-body-xxs-font-family);
                ${tokens.typoFontSize}: var(--plasma-typo-body-xxs-font-size);
                ${tokens.typoFontStyle}: var(--plasma-typo-body-xxs-font-style);
                ${tokens.typoFontWeight}: var(--plasma-typo-body-xxs-font-weight);
                ${tokens.typoFontWeightBold}: var(--plasma-typo-body-xxs-bold-font-weight);
                ${tokens.typoFontLetterSpacing}: var(--plasma-typo-body-xxs-letter-spacing);
                ${tokens.typoFontLineHeight}: var(--plasma-typo-body-xxs-line-height);
            `,
        },
    },
};
