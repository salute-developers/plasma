import {
    textL,
    textLBold,
    textLMedium,
    textM,
    textMBold,
    textMMedium,
    textS,
    textSBold,
    textSMedium,
    textXS,
    textXSBold,
    textXSMedium,
} from '@salutejs/plasma-themes/tokens/plasma_b2c';
import { css } from '@linaria/core';

import { tokens } from '../../../../../components/Typography/tokens';

export const config = {
    defaults: {
        size: 'm',
    },
    variations: {
        size: {
            l: css`
                ${tokens.typoFontFamily}: ${textL.fontFamily};
                ${tokens.typoFontSize}: ${textL.fontSize};
                ${tokens.typoFontStyle}: ${textL.fontStyle};
                ${tokens.typoFontWeight}: ${textL.fontWeight};
                ${tokens.typoFontWeightBold}: ${textLBold.fontWeight};
                ${tokens.typoFontWeightMedium}: ${textLMedium.fontWeight};
                ${tokens.typoFontLetterSpacing}: ${textL.letterSpacing};
                ${tokens.typoFontLineHeight}: ${textL.lineHeight};
            `,
            m: css`
                ${tokens.typoFontFamily}: ${textM.fontFamily};
                ${tokens.typoFontSize}: ${textM.fontSize};
                ${tokens.typoFontStyle}: ${textM.fontStyle};
                ${tokens.typoFontWeight}: ${textM.fontWeight};
                ${tokens.typoFontWeightBold}: ${textMBold.fontWeight};
                ${tokens.typoFontWeightMedium}: ${textMMedium.fontWeight};
                ${tokens.typoFontLetterSpacing}: ${textM.letterSpacing};
                ${tokens.typoFontLineHeight}: ${textM.lineHeight};
            `,
            s: css`
                ${tokens.typoFontFamily}: ${textS.fontFamily};
                ${tokens.typoFontSize}: ${textS.fontSize};
                ${tokens.typoFontStyle}: ${textS.fontStyle};
                ${tokens.typoFontWeight}: ${textS.fontWeight};
                ${tokens.typoFontWeightBold}: ${textSBold.fontWeight};
                ${tokens.typoFontWeightMedium}: ${textSMedium.fontWeight};
                ${tokens.typoFontLetterSpacing}: ${textS.letterSpacing};
                ${tokens.typoFontLineHeight}: ${textS.lineHeight};
            `,
            xs: css`
                ${tokens.typoFontFamily}: ${textXS.fontFamily};
                ${tokens.typoFontSize}: ${textXS.fontSize};
                ${tokens.typoFontStyle}: ${textXS.fontStyle};
                ${tokens.typoFontWeight}: ${textXS.fontWeight};
                ${tokens.typoFontWeightBold}: ${textXSBold.fontWeight};
                ${tokens.typoFontWeightMedium}: ${textXSMedium.fontWeight};
                ${tokens.typoFontLetterSpacing}: ${textXS.letterSpacing};
                ${tokens.typoFontLineHeight}: ${textXS.lineHeight};
            `,
        },
    },
};
