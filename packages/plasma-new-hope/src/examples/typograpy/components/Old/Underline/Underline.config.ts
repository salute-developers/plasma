import { css } from '@linaria/core';

import { tokens } from '../../../../../components/Typography/tokens';

export const config = {
    defaults: {
        size: 'm',
    },
    variations: {
        size: {
            m: css`
                ${tokens.typoFontFamily}: var(--plasma-typo-underline-font-family);
                ${tokens.typoFontSize}: var(--plasma-typo-underline-font-size);
                ${tokens.typoFontStyle}: var(--plasma-typo-underline-font-style);
                ${tokens.typoFontWeight}: var(--plasma-typo-underline-font-weight);
                ${tokens.typoFontLetterSpacing}: var(--plasma-typo-underline-letter-spacing);
                ${tokens.typoFontLineHeight}: var(--plasma-typo-underline-line-height);
            `,
        },
    },
};
