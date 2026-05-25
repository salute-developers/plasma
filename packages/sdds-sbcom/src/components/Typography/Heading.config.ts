import { css, typographyTokens } from '@salutejs/plasma-new-hope/styled-components';
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
    hXlMedium,
    hXxlMedium,
} from '@salutejs-ds/sdds_sbcom/theme/tokens';

export const configH1 = {
    defaults: {
        size: 'h1',
    },
    variations: {
        size: {
            h1: css`
                ${typographyTokens.typoFontFamily}: ${h1.fontFamily};
                ${typographyTokens.typoFontSize}: ${h1.fontSize};
                ${typographyTokens.typoFontStyle}: ${h1.fontStyle};
                ${typographyTokens.typoFontWeight}: ${h1.fontWeight};
                ${typographyTokens.typoFontWeightMedium}: ${h1Medium.fontWeight};
                ${typographyTokens.typoFontWeightBold}: ${h1Bold.fontWeight};
                ${typographyTokens.typoFontWeightExtraBold}: 700;
                ${typographyTokens.typoFontLetterSpacing}: ${h1.letterSpacing};
                ${typographyTokens.typoFontLineHeight}: ${h1.lineHeight};
            `,
        },
    },
};
export const configH2 = {
    defaults: {
        size: 'h2',
    },
    variations: {
        size: {
            h2: css`
                ${typographyTokens.typoFontFamily}: ${h2.fontFamily};
                ${typographyTokens.typoFontSize}: ${h2.fontSize};
                ${typographyTokens.typoFontStyle}: ${h2.fontStyle};
                ${typographyTokens.typoFontWeight}: ${h2.fontWeight};
                ${typographyTokens.typoFontWeightMedium}: ${h2Medium.fontWeight};
                ${typographyTokens.typoFontWeightBold}: ${h2Bold.fontWeight};
                ${typographyTokens.typoFontWeightExtraBold}: 700;
                ${typographyTokens.typoFontLetterSpacing}: ${h2.letterSpacing};
                ${typographyTokens.typoFontLineHeight}: ${h2.lineHeight};
            `,
        },
    },
};
export const configH3 = {
    defaults: {
        size: 'h3',
    },
    variations: {
        size: {
            h3: css`
                ${typographyTokens.typoFontFamily}: ${h3.fontFamily};
                ${typographyTokens.typoFontSize}: ${h3.fontSize};
                ${typographyTokens.typoFontStyle}: ${h3.fontStyle};
                ${typographyTokens.typoFontWeight}: ${h3.fontWeight};
                ${typographyTokens.typoFontWeightMedium}: ${h3Medium.fontWeight};
                ${typographyTokens.typoFontWeightBold}: ${h3Bold.fontWeight};
                ${typographyTokens.typoFontWeightExtraBold}: 700;
                ${typographyTokens.typoFontLetterSpacing}: ${h3.letterSpacing};
                ${typographyTokens.typoFontLineHeight}: ${h3.lineHeight};
            `,
        },
    },
};
export const configH4 = {
    defaults: {
        size: 'h4',
    },
    variations: {
        size: {
            h4: css`
                ${typographyTokens.typoFontFamily}: ${h4.fontFamily};
                ${typographyTokens.typoFontSize}: ${h4.fontSize};
                ${typographyTokens.typoFontStyle}: ${h4.fontStyle};
                ${typographyTokens.typoFontWeight}: ${h4.fontWeight};
                ${typographyTokens.typoFontWeightMedium}: ${h4Medium.fontWeight};
                ${typographyTokens.typoFontWeightBold}: ${h4Bold.fontWeight};
                ${typographyTokens.typoFontWeightExtraBold}: 700;
                ${typographyTokens.typoFontLetterSpacing}: ${h4.letterSpacing};
                ${typographyTokens.typoFontLineHeight}: ${h4.lineHeight};
            `,
        },
    },
};
export const configHXlMedium = {
    defaults: {
        size: 'hXlMedium',
    },
    variations: {
        size: {
            hXlMedium: css`
                ${typographyTokens.typoFontFamily}: ${hXlMedium.fontFamily};
                ${typographyTokens.typoFontSize}: ${hXlMedium.fontSize};
                ${typographyTokens.typoFontStyle}: ${hXlMedium.fontStyle};
                ${typographyTokens.typoFontWeight}: ${hXlMedium.fontWeight};
                ${typographyTokens.typoFontWeightMedium}: ${hXlMedium.fontWeight};
                ${typographyTokens.typoFontWeightBold}: ${hXlMedium.fontWeight};
                ${typographyTokens.typoFontWeightExtraBold}: 700;
                ${typographyTokens.typoFontLetterSpacing}: ${hXlMedium.letterSpacing};
                ${typographyTokens.typoFontLineHeight}: ${hXlMedium.lineHeight};
            `,
        },
    },
};
export const configHXxlMedium = {
    defaults: {
        size: 'hXxlMedium',
    },
    variations: {
        size: {
            hXxlMedium: css`
                ${typographyTokens.typoFontFamily}: ${hXxlMedium.fontFamily};
                ${typographyTokens.typoFontSize}: ${hXxlMedium.fontSize};
                ${typographyTokens.typoFontStyle}: ${hXxlMedium.fontStyle};
                ${typographyTokens.typoFontWeight}: ${hXxlMedium.fontWeight};
                ${typographyTokens.typoFontWeightMedium}: ${hXxlMedium.fontWeight};
                ${typographyTokens.typoFontWeightBold}: ${hXxlMedium.fontWeight};
                ${typographyTokens.typoFontWeightExtraBold}: 700;
                ${typographyTokens.typoFontLetterSpacing}: ${hXxlMedium.letterSpacing};
                ${typographyTokens.typoFontLineHeight}: ${hXxlMedium.lineHeight};
            `,
        },
    },
};
