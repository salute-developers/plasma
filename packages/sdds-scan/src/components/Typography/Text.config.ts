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
} from '@salutejs/sdds-themes/tokens/sdds_scan';
import { css, typographyTokens } from '@salutejs/plasma-new-hope/styled-components';

export const configL = {
    defaults: {
        size: 'l',
    },
    variations: {
        size: {
            l: css`
                ${typographyTokens.typoFontFamily}: ${textL.fontFamily};
                ${typographyTokens.typoFontSize}: ${textL.fontSize};
                ${typographyTokens.typoFontStyle}: ${textL.fontStyle};
                ${typographyTokens.typoFontWeight}: ${textL.fontWeight};
                ${typographyTokens.typoFontWeightBold}: ${textLBold.fontWeight};
                ${typographyTokens.typoFontWeightMedium}: ${textLMedium.fontWeight};
                ${typographyTokens.typoFontLetterSpacing}: ${textL.letterSpacing};
                ${typographyTokens.typoFontLineHeight}: ${textL.lineHeight};
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
                ${typographyTokens.typoFontFamily}: ${textM.fontFamily};
                ${typographyTokens.typoFontSize}: ${textM.fontSize};
                ${typographyTokens.typoFontStyle}: ${textM.fontStyle};
                ${typographyTokens.typoFontWeight}: ${textM.fontWeight};
                ${typographyTokens.typoFontWeightBold}: ${textMBold.fontWeight};
                ${typographyTokens.typoFontWeightMedium}: ${textMMedium.fontWeight};
                ${typographyTokens.typoFontLetterSpacing}: ${textM.letterSpacing};
                ${typographyTokens.typoFontLineHeight}: ${textM.lineHeight};
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
                ${typographyTokens.typoFontFamily}: ${textS.fontFamily};
                ${typographyTokens.typoFontSize}: ${textS.fontSize};
                ${typographyTokens.typoFontStyle}: ${textS.fontStyle};
                ${typographyTokens.typoFontWeight}: ${textS.fontWeight};
                ${typographyTokens.typoFontWeightBold}: ${textSBold.fontWeight};
                ${typographyTokens.typoFontWeightMedium}: ${textSMedium.fontWeight};
                ${typographyTokens.typoFontLetterSpacing}: ${textS.letterSpacing};
                ${typographyTokens.typoFontLineHeight}: ${textS.lineHeight};
            `,
        },
    },
};

export const configXS = {
    defaults: {
        size: 'xs',
    },
    variations: {
        size: {
            xs: css`
                ${typographyTokens.typoFontFamily}: ${textXS.fontFamily};
                ${typographyTokens.typoFontSize}: ${textXS.fontSize};
                ${typographyTokens.typoFontStyle}: ${textXS.fontStyle};
                ${typographyTokens.typoFontWeight}: ${textXS.fontWeight};
                ${typographyTokens.typoFontWeightBold}: ${textXSBold.fontWeight};
                ${typographyTokens.typoFontWeightMedium}: ${textXSMedium.fontWeight};
                ${typographyTokens.typoFontLetterSpacing}: ${textXS.letterSpacing};
                ${typographyTokens.typoFontLineHeight}: ${textXS.lineHeight};
            `,
        },
    },
};
