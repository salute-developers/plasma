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
} from '@salutejs/sdds-themes/tokens/sdds_platform_ai';
import { css, typographyTokens } from '@salutejs/plasma-new-hope/styled-components';

export const configL = {
    defaults: {
        size: 'l',
    },
    variations: {
        size: {
            l: css`
                ${typographyTokens.typoFontFamily}: ${dsplL.fontFamily};
                ${typographyTokens.typoFontSize}: ${dsplL.fontSize};
                ${typographyTokens.typoFontStyle}: ${dsplL.fontStyle};
                ${typographyTokens.typoFontWeight}: ${dsplL.fontWeight};
                ${typographyTokens.typoFontWeightBold}: ${dsplLBold.fontWeight};
                ${typographyTokens.typoFontWeightMedium}: ${dsplLMedium.fontWeight};
                ${typographyTokens.typoFontLetterSpacing}: ${dsplL.letterSpacing};
                ${typographyTokens.typoFontLineHeight}: ${dsplL.lineHeight};
            `,
        },
    },
};

export const configM = {
    defaults: {
        size: 'm',
    },
    variations: {
        size: {
            m: css`
                ${typographyTokens.typoFontFamily}: ${dsplM.fontFamily};
                ${typographyTokens.typoFontSize}: ${dsplM.fontSize};
                ${typographyTokens.typoFontStyle}: ${dsplM.fontStyle};
                ${typographyTokens.typoFontWeight}: ${dsplM.fontWeight};
                ${typographyTokens.typoFontWeightBold}: ${dsplMBold.fontWeight};
                ${typographyTokens.typoFontWeightMedium}: ${dsplMMedium.fontWeight};
                ${typographyTokens.typoFontLetterSpacing}: ${dsplM.letterSpacing};
                ${typographyTokens.typoFontLineHeight}: ${dsplM.lineHeight};
            `,
        },
    },
};

export const configS = {
    defaults: {
        size: 's',
    },
    variations: {
        size: {
            s: css`
                ${typographyTokens.typoFontFamily}: ${dsplS.fontFamily};
                ${typographyTokens.typoFontSize}: ${dsplS.fontSize};
                ${typographyTokens.typoFontStyle}: ${dsplS.fontStyle};
                ${typographyTokens.typoFontWeight}: ${dsplS.fontWeight};
                ${typographyTokens.typoFontWeightBold}: ${dsplSBold.fontWeight};
                ${typographyTokens.typoFontWeightMedium}: ${dsplSMedium.fontWeight};
                ${typographyTokens.typoFontLetterSpacing}: ${dsplS.letterSpacing};
                ${typographyTokens.typoFontLineHeight}: ${dsplS.lineHeight};
            `,
        },
    },
};
