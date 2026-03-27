import {
    dsplL,
    dsplLBold,
    dsplLMedium,
    dsplM,
    dsplMBold,
    dsplMMedium,
    dsplS,
    dsplSBold,
    dsplSMedium,
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
                ${tokens.typoFontFamily}: ${dsplL.fontFamily};
                ${tokens.typoFontSize}: ${dsplL.fontSize};
                ${tokens.typoFontStyle}: ${dsplL.fontStyle};
                ${tokens.typoFontWeight}: ${dsplL.fontWeight};
                ${tokens.typoFontWeightBold}: ${dsplLBold.fontWeight};
                ${tokens.typoFontWeightMedium}: ${dsplLMedium.fontWeight};
                ${tokens.typoFontLetterSpacing}: ${dsplL.letterSpacing};
                ${tokens.typoFontLineHeight}: ${dsplL.lineHeight};
            `,
            m: css`
                ${tokens.typoFontFamily}: ${dsplM.fontFamily};
                ${tokens.typoFontSize}: ${dsplM.fontSize};
                ${tokens.typoFontStyle}: ${dsplM.fontStyle};
                ${tokens.typoFontWeight}: ${dsplM.fontWeight};
                ${tokens.typoFontWeightBold}: ${dsplMBold.fontWeight};
                ${tokens.typoFontWeightMedium}: ${dsplMMedium.fontWeight};
                ${tokens.typoFontLetterSpacing}: ${dsplM.letterSpacing};
                ${tokens.typoFontLineHeight}: ${dsplM.lineHeight};
            `,
            s: css`
                ${tokens.typoFontFamily}: ${dsplS.fontFamily};
                ${tokens.typoFontSize}: ${dsplS.fontSize};
                ${tokens.typoFontStyle}: ${dsplS.fontStyle};
                ${tokens.typoFontWeight}: ${dsplS.fontWeight};
                ${tokens.typoFontWeightBold}: ${dsplSBold.fontWeight};
                ${tokens.typoFontWeightMedium}: ${dsplSMedium.fontWeight};
                ${tokens.typoFontLetterSpacing}: ${dsplS.letterSpacing};
                ${tokens.typoFontLineHeight}: ${dsplS.lineHeight};
            `,
        },
    },
};
