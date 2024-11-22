import { css } from '@linaria/core';

import { tokens } from '../../../../../components/Typography/tokens';

export const config = {
    defaults: {
        size: 'm',
    },
    variations: {
        size: {
            m: css`
                ${tokens.typoFontFamily}: var(--plasma-typo-subtitle-font-family);
                ${tokens.typoFontSize}: var(--plasma-typo-subtitle-font-size);
                ${tokens.typoFontStyle}: var(--plasma-typo-subtitle-font-style);
                ${tokens.typoFontWeight}: var(--plasma-typo-subtitle-font-weight);
                ${tokens.typoFontLetterSpacing}: var(--plasma-typo-subtitle-letter-spacing);
                ${tokens.typoFontLineHeight}: var(--plasma-typo-subtitle-line-height);
            `,
        },
    },
};
