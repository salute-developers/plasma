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
} from '@salutejs-ds/sdds_sbcom/theme/tokens';

/*
 * NOTE: Mixed DS tokens + raw vars. Prefer @salutejs-ds/sdds_sbcom/theme/tokens where possible.
 * Missing tokens in @salutejs/sdds-themes/tokens: bodyXs, bodyXsBold, bodyXsMedium, bodyXxs, bodyXxsBold
 * bodyXxsMedium
 */
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
                ${typographyTokens.typoFontWeightMedium}: ${bodyLMedium.fontWeight};
                ${typographyTokens.typoFontWeightBold}: ${bodyLBold.fontWeight};
                ${typographyTokens.typoFontWeightExtraBold}: 700;
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
                ${typographyTokens.typoFontWeightMedium}: ${bodyMMedium.fontWeight};
                ${typographyTokens.typoFontWeightBold}: ${bodyMBold.fontWeight};
                ${typographyTokens.typoFontWeightExtraBold}: 700;
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
                ${typographyTokens.typoFontWeightMedium}: ${bodySMedium.fontWeight};
                ${typographyTokens.typoFontWeightBold}: ${bodySBold.fontWeight};
                ${typographyTokens.typoFontWeightExtraBold}: 700;
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
                ${typographyTokens.typoFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${typographyTokens.typoFontSize}: var(--plasma-typo-body-xs-font-size);
                ${typographyTokens.typoFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${typographyTokens.typoFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${typographyTokens.typoFontWeightBold}: var(--plasma-typo-body-xs-bold-font-weight);
                ${typographyTokens.typoFontWeightMedium}: var(--plasma-typo-body-xs-medium-font-weight);
                ${typographyTokens.typoFontWeightExtraBold}: 700;
                ${typographyTokens.typoFontLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${typographyTokens.typoFontLineHeight}: var(--plasma-typo-body-xs-line-height);
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
                ${typographyTokens.typoFontFamily}: var(--plasma-typo-body-xxs-font-family);
                ${typographyTokens.typoFontSize}: var(--plasma-typo-body-xxs-font-size);
                ${typographyTokens.typoFontStyle}: var(--plasma-typo-body-xxs-font-style);
                ${typographyTokens.typoFontWeight}: var(--plasma-typo-body-xxs-font-weight);
                ${typographyTokens.typoFontWeightBold}: var(--plasma-typo-body-xxs-bold-font-weight);
                ${typographyTokens.typoFontWeightMedium}: var(--plasma-typo-body-xxs-medium-font-weight);
                ${typographyTokens.typoFontWeightExtraBold}: 700;
                ${typographyTokens.typoFontLetterSpacing}: var(--plasma-typo-body-xxs-letter-spacing);
                ${typographyTokens.typoFontLineHeight}: var(--plasma-typo-body-xxs-line-height);
            `,
        },
    },
};
