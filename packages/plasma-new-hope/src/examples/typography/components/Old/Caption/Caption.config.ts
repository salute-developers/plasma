import { css } from '@linaria/core';

import { tokens } from '../../../../../components/Typography/tokens';

export const config = {
    defaults: {
        size: 'm',
    },
    variations: {
        size: {
            m: css`
                ${tokens.typoFontFamily}: var(--plasma-typo-caption-font-family);
                ${tokens.typoFontSize}: var(--plasma-typo-caption-font-size);
                ${tokens.typoFontStyle}: var(--plasma-typo-caption-font-style);
                ${tokens.typoFontWeight}: var(--plasma-typo-caption-font-weight);
                ${tokens.typoFontLetterSpacing}: var(--plasma-typo-caption-letter-spacing);
                ${tokens.typoFontLineHeight}: var(--plasma-typo-caption-line-height);
            `,
        },
    },
};
