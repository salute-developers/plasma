import { css, typographyTokens } from '@salutejs/plasma-new-hope/styled-components';
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
} from '@salutejs/plasma-themes/tokens/plasma_giga';

export const configL = {
    defaults: {
        size: 'l',
    },
    variations: {
        size: {
            l: css`
                ${typographyTokens.typoFontFamily}: ${bodyL.fontFamily};
                ${typographyTokens.typoFontSize}: ${bodyL.fontSize};
                ${typographyTokens.typoFontStyle}: ${bodyL.fontStyle};
                ${typographyTokens.typoFontWeight}: ${bodyL.fontWeight};
                ${typographyTokens.typoFontWeightBold}: ${bodyLBold.fontWeight};
                ${typographyTokens.typoFontWeightMedium}: ${bodyLMedium.fontWeight};
                ${typographyTokens.typoFontLetterSpacing}: ${bodyL.letterSpacing};
                ${typographyTokens.typoFontLineHeight}: ${bodyL.lineHeight};
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
                ${typographyTokens.typoFontFamily}: ${bodyM.fontFamily};
                ${typographyTokens.typoFontSize}: ${bodyM.fontSize};
                ${typographyTokens.typoFontStyle}: ${bodyM.fontStyle};
                ${typographyTokens.typoFontWeight}: ${bodyM.fontWeight};
                ${typographyTokens.typoFontWeightBold}: ${bodyMBold.fontWeight};
                ${typographyTokens.typoFontWeightMedium}: ${bodyMMedium.fontWeight};
                ${typographyTokens.typoFontLetterSpacing}: ${bodyM.letterSpacing};
                ${typographyTokens.typoFontLineHeight}: ${bodyM.lineHeight};
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
                ${typographyTokens.typoFontFamily}: ${bodyS.fontFamily};
                ${typographyTokens.typoFontSize}: ${bodyS.fontSize};
                ${typographyTokens.typoFontStyle}: ${bodyS.fontStyle};
                ${typographyTokens.typoFontWeight}: ${bodyS.fontWeight};
                ${typographyTokens.typoFontWeightBold}: ${bodySBold.fontWeight};
                ${typographyTokens.typoFontWeightMedium}: ${bodySMedium.fontWeight};
                ${typographyTokens.typoFontLetterSpacing}: ${bodyS.letterSpacing};
                ${typographyTokens.typoFontLineHeight}: ${bodyS.lineHeight};
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
                ${typographyTokens.typoFontFamily}: ${bodyXS.fontFamily};
                ${typographyTokens.typoFontSize}: ${bodyXS.fontSize};
                ${typographyTokens.typoFontStyle}: ${bodyXS.fontStyle};
                ${typographyTokens.typoFontWeight}: ${bodyXS.fontWeight};
                ${typographyTokens.typoFontWeightBold}: ${bodyXSBold.fontWeight};
                ${typographyTokens.typoFontWeightMedium}: ${bodyXSMedium.fontWeight};
                ${typographyTokens.typoFontLetterSpacing}: ${bodyXS.letterSpacing};
                ${typographyTokens.typoFontLineHeight}: ${bodyXS.lineHeight};
            `,
        },
    },
};

export const configXXS = {
    defaults: {
        size: 'xxs',
    },
    variations: {
        size: {
            xxs: css`
                ${typographyTokens.typoFontFamily}: ${bodyXXS.fontFamily};
                ${typographyTokens.typoFontSize}: ${bodyXXS.fontSize};
                ${typographyTokens.typoFontStyle}: ${bodyXXS.fontStyle};
                ${typographyTokens.typoFontWeight}: ${bodyXXS.fontWeight};
                ${typographyTokens.typoFontWeightBold}: ${bodyXXSBold.fontWeight};
                ${typographyTokens.typoFontWeightMedium}: ${bodyXXSMedium.fontWeight};
                ${typographyTokens.typoFontLetterSpacing}: ${bodyXXS.letterSpacing};
                ${typographyTokens.typoFontLineHeight}: ${bodyXXS.lineHeight};
            `,
        },
    },
};
