import {
    bodyL,
    bodyLBold,
    bodyLMedium,
    bodyM,
    bodyMBold,
    bodyMMedium,
    bodyS,
    bodySBold,
    bodySMedium,
    bodyXS,
    bodyXSBold,
    bodyXSMedium,
    bodyXXS,
    bodyXXSBold,
    bodyXXSMedium,
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
                ${tokens.typoFontFamily}: ${bodyL.fontFamily};
                ${tokens.typoFontSize}: ${bodyL.fontSize};
                ${tokens.typoFontStyle}: ${bodyL.fontStyle};
                ${tokens.typoFontWeight}: ${bodyL.fontWeight};
                ${tokens.typoFontWeightBold}: ${bodyLBold.fontWeight};
                ${tokens.typoFontWeightMedium}: ${bodyLMedium.fontWeight};
                ${tokens.typoFontLetterSpacing}: ${bodyL.letterSpacing};
                ${tokens.typoFontLineHeight}: ${bodyL.lineHeight};
            `,
            m: css`
                ${tokens.typoFontFamily}: ${bodyM.fontFamily};
                ${tokens.typoFontSize}: ${bodyM.fontSize};
                ${tokens.typoFontStyle}: ${bodyM.fontStyle};
                ${tokens.typoFontWeight}: ${bodyM.fontWeight};
                ${tokens.typoFontWeightBold}: ${bodyMBold.fontWeight};
                ${tokens.typoFontWeightMedium}: ${bodyMMedium.fontWeight};
                ${tokens.typoFontLetterSpacing}: ${bodyM.letterSpacing};
                ${tokens.typoFontLineHeight}: ${bodyM.lineHeight};
            `,
            s: css`
                ${tokens.typoFontFamily}: ${bodyS.fontFamily};
                ${tokens.typoFontSize}: ${bodyS.fontSize};
                ${tokens.typoFontStyle}: ${bodyS.fontStyle};
                ${tokens.typoFontWeight}: ${bodyS.fontWeight};
                ${tokens.typoFontWeightBold}: ${bodySBold.fontWeight};
                ${tokens.typoFontWeightMedium}: ${bodySMedium.fontWeight};
                ${tokens.typoFontLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.typoFontLineHeight}: ${bodyS.lineHeight};
            `,
            xs: css`
                ${tokens.typoFontFamily}: ${bodyXS.fontFamily};
                ${tokens.typoFontSize}: ${bodyXS.fontSize};
                ${tokens.typoFontStyle}: ${bodyXS.fontStyle};
                ${tokens.typoFontWeight}: ${bodyXS.fontWeight};
                ${tokens.typoFontWeightBold}: ${bodyXSBold.fontWeight};
                ${tokens.typoFontWeightMedium}: ${bodyXSMedium.fontWeight};
                ${tokens.typoFontLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.typoFontLineHeight}: ${bodyXS.lineHeight};
            `,
            xxs: css`
                ${tokens.typoFontFamily}: ${bodyXXS.fontFamily};
                ${tokens.typoFontSize}: ${bodyXXS.fontSize};
                ${tokens.typoFontStyle}: ${bodyXXS.fontStyle};
                ${tokens.typoFontWeight}: ${bodyXXS.fontWeight};
                ${tokens.typoFontWeightBold}: ${bodyXXSBold.fontWeight};
                ${tokens.typoFontWeightMedium}: ${bodyXXSMedium.fontWeight};
                ${tokens.typoFontLetterSpacing}: ${bodyXXS.letterSpacing};
                ${tokens.typoFontLineHeight}: ${bodyXXS.lineHeight};
            `,
        },
    },
};
