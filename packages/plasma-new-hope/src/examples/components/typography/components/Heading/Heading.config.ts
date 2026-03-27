import {
    h1,
    h1Bold,
    h1Medium,
    h2,
    h2Bold,
    h2Medium,
    h3,
    h3Bold,
    h3Medium,
    h4,
    h4Bold,
    h4Medium,
    h5,
    h5Bold,
    h5Medium,
    h6,
    h6Bold,
    h6Medium,
} from '@salutejs/plasma-themes/tokens/plasma_b2c';
import { css } from '@linaria/core';

import { tokens } from '../../../../../components/Typography/tokens';

export const config = {
    defaults: {
        size: 'h2',
    },
    variations: {
        size: {
            h1: css`
                ${tokens.typoFontFamily}: ${h1.fontFamily};
                ${tokens.typoFontSize}: ${h1.fontSize};
                ${tokens.typoFontStyle}: ${h1.fontStyle};
                ${tokens.typoFontWeight}: ${h1.fontWeight};
                ${tokens.typoFontWeightBold}: ${h1Bold.fontWeight};
                ${tokens.typoFontWeightMedium}: ${h1Medium.fontWeight};
                ${tokens.typoFontLetterSpacing}: ${h1.letterSpacing};
                ${tokens.typoFontLineHeight}: ${h1.lineHeight};
            `,
            h2: css`
                ${tokens.typoFontFamily}: ${h2.fontFamily};
                ${tokens.typoFontSize}: ${h2.fontSize};
                ${tokens.typoFontStyle}: ${h2.fontStyle};
                ${tokens.typoFontWeight}: ${h2.fontWeight};
                ${tokens.typoFontWeightBold}: ${h2Bold.fontWeight};
                ${tokens.typoFontWeightMedium}: ${h2Medium.fontWeight};
                ${tokens.typoFontLetterSpacing}: ${h2.letterSpacing};
                ${tokens.typoFontLineHeight}: ${h2.lineHeight};
            `,
            h3: css`
                ${tokens.typoFontFamily}: ${h3.fontFamily};
                ${tokens.typoFontSize}: ${h3.fontSize};
                ${tokens.typoFontStyle}: ${h3.fontStyle};
                ${tokens.typoFontWeight}: ${h3.fontWeight};
                ${tokens.typoFontWeightBold}: ${h3Bold.fontWeight};
                ${tokens.typoFontWeightMedium}: ${h3Medium.fontWeight};
                ${tokens.typoFontLetterSpacing}: ${h3.letterSpacing};
                ${tokens.typoFontLineHeight}: ${h3.lineHeight};
            `,
            h4: css`
                ${tokens.typoFontFamily}: ${h4.fontFamily};
                ${tokens.typoFontSize}: ${h4.fontSize};
                ${tokens.typoFontStyle}: ${h4.fontStyle};
                ${tokens.typoFontWeight}: ${h4.fontWeight};
                ${tokens.typoFontWeightBold}: ${h4Bold.fontWeight};
                ${tokens.typoFontWeightMedium}: ${h4Medium.fontWeight};
                ${tokens.typoFontLetterSpacing}: ${h4.letterSpacing};
                ${tokens.typoFontLineHeight}: ${h4.lineHeight};
            `,
            h5: css`
                ${tokens.typoFontFamily}: ${h5.fontFamily};
                ${tokens.typoFontSize}: ${h5.fontSize};
                ${tokens.typoFontStyle}: ${h5.fontStyle};
                ${tokens.typoFontWeight}: ${h5.fontWeight};
                ${tokens.typoFontWeightBold}: ${h5Bold.fontWeight};
                ${tokens.typoFontWeightMedium}: ${h5Medium.fontWeight};
                ${tokens.typoFontLetterSpacing}: ${h5.letterSpacing};
                ${tokens.typoFontLineHeight}: ${h5.lineHeight};
            `,
            h6: css`
                ${tokens.typoFontFamily}: ${h6.fontFamily};
                ${tokens.typoFontSize}: ${h6.fontSize};
                ${tokens.typoFontStyle}: ${h6.fontStyle};
                ${tokens.typoFontWeight}: ${h6.fontWeight};
                ${tokens.typoFontWeightBold}: ${h6Bold.fontWeight};
                ${tokens.typoFontWeightMedium}: ${h6Medium.fontWeight};
                ${tokens.typoFontLetterSpacing}: ${h6.letterSpacing};
                ${tokens.typoFontLineHeight}: ${h6.lineHeight};
            `,
        },
    },
};
