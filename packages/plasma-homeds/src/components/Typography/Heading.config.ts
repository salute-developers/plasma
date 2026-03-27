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
} from '@salutejs/plasma-themes/tokens/plasma_homeds';
import { css, typographyTokens } from '@salutejs/plasma-new-hope/styled-components';

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
                ${typographyTokens.typoFontWeightBold}: ${h1Bold.fontWeight};
                ${typographyTokens.typoFontWeightMedium}: ${h1Medium.fontWeight};
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
                ${typographyTokens.typoFontWeightBold}: ${h2Bold.fontWeight};
                ${typographyTokens.typoFontWeightMedium}: ${h2Medium.fontWeight};
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
                ${typographyTokens.typoFontWeightBold}: ${h3Bold.fontWeight};
                ${typographyTokens.typoFontWeightMedium}: ${h3Medium.fontWeight};
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
                ${typographyTokens.typoFontWeightBold}: ${h4Bold.fontWeight};
                ${typographyTokens.typoFontWeightMedium}: ${h4Medium.fontWeight};
                ${typographyTokens.typoFontLetterSpacing}: ${h4.letterSpacing};
                ${typographyTokens.typoFontLineHeight}: ${h4.lineHeight};
            `,
        },
    },
};
export const configH5 = {
    defaults: {
        size: 'h5',
    },
    variations: {
        size: {
            h5: css`
                ${typographyTokens.typoFontFamily}: ${h5.fontFamily};
                ${typographyTokens.typoFontSize}: ${h5.fontSize};
                ${typographyTokens.typoFontStyle}: ${h5.fontStyle};
                ${typographyTokens.typoFontWeight}: ${h5.fontWeight};
                ${typographyTokens.typoFontWeightBold}: ${h5Bold.fontWeight};
                ${typographyTokens.typoFontWeightMedium}: ${h5Medium.fontWeight};
                ${typographyTokens.typoFontLetterSpacing}: ${h5.letterSpacing};
                ${typographyTokens.typoFontLineHeight}: ${h5.lineHeight};
            `,
        },
    },
};
