import { css } from '@linaria/core';

import { tokens } from '../../../../../components/Typography/tokens';

export const config = {
    defaults: {
        size: 'body1',
    },
    variations: {
        size: {
            body1: css`
                ${tokens.typoFontFamily}: var(--plasma-typo-body1-font-family);
                ${tokens.typoFontSize}: var(--plasma-typo-body1-font-size);
                ${tokens.typoFontStyle}: var(--plasma-typo-body1-font-style);
                ${tokens.typoFontWeight}: var(--plasma-typo-body1-font-weight);
                ${tokens.typoFontLetterSpacing}: var(--plasma-typo-body1-letter-spacing);
                ${tokens.typoFontLineHeight}: var(--plasma-typo-body1-line-height);
            `,
            body2: css`
                ${tokens.typoFontFamily}: var(--plasma-typo-body2-font-family);
                ${tokens.typoFontSize}: var(--plasma-typo-body2-font-size);
                ${tokens.typoFontStyle}: var(--plasma-typo-body2-font-style);
                ${tokens.typoFontWeight}: var(--plasma-typo-body2-font-weight);
                ${tokens.typoFontLetterSpacing}: var(--plasma-typo-body2-letter-spacing);
                ${tokens.typoFontLineHeight}: var(--plasma-typo-body2-line-height);
            `,
            body3: css`
                ${tokens.typoFontFamily}: var(--plasma-typo-body3-font-family);
                ${tokens.typoFontSize}: var(--plasma-typo-body3-font-size);
                ${tokens.typoFontStyle}: var(--plasma-typo-body3-font-style);
                ${tokens.typoFontWeight}: var(--plasma-typo-body3-font-weight);
                ${tokens.typoFontLetterSpacing}: var(--plasma-typo-body3-letter-spacing);
                ${tokens.typoFontLineHeight}: var(--plasma-typo-body3-line-height);
            `,
        },
    },
};
