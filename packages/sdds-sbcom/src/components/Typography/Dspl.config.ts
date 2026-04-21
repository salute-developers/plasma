import { css, typographyTokens } from '@salutejs/plasma-new-hope/styled-components';
import { dsplS, dsplSBold, dsplSMedium } from '@salutejs-ds/sdds_sbcom/theme/tokens';

/*
 * NOTE: Mixed DS tokens + raw vars. Prefer @salutejs-ds/sdds_sbcom/theme/tokens where possible.
 * Missing tokens in @salutejs/sdds-themes/tokens: dsplL, dsplLBold, dsplLMedium, dsplM, dsplMBold, dsplMMedium
 */
export const configL = {
    defaults: {
        size: 'l',
    },
    variations: {
        size: {
            l: css`
                /* NOTE: no token dsplL in @salutejs/sdds-themes/tokens */
                ${typographyTokens.typoFontFamily}: var(--plasma-typo-dspl-l-font-family);
                /* NOTE: no token dsplL in @salutejs/sdds-themes/tokens */
                ${typographyTokens.typoFontSize}: var(--plasma-typo-dspl-l-font-size);
                /* NOTE: no token dsplL in @salutejs/sdds-themes/tokens */
                ${typographyTokens.typoFontStyle}: var(--plasma-typo-dspl-l-font-style);
                /* NOTE: no token dsplL in @salutejs/sdds-themes/tokens */
                ${typographyTokens.typoFontWeight}: var(--plasma-typo-dspl-l-font-weight);
                /* NOTE: no token dsplLBold in @salutejs/sdds-themes/tokens */
                ${typographyTokens.typoFontWeightBold}: var(--plasma-typo-dspl-l-bold-font-weight);
                /* NOTE: no token dsplLMedium in @salutejs/sdds-themes/tokens */
                ${typographyTokens.typoFontWeightMedium}: var(--plasma-typo-dspl-l-medium-font-weight);
                /* NOTE: no token dsplL in @salutejs/sdds-themes/tokens */
                ${typographyTokens.typoFontLetterSpacing}: var(--plasma-typo-dspl-l-letter-spacing);
                /* NOTE: no token dsplL in @salutejs/sdds-themes/tokens */
                ${typographyTokens.typoFontLineHeight}: var(--plasma-typo-dspl-l-line-height);
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
                /* NOTE: no token dsplM in @salutejs/sdds-themes/tokens */
                ${typographyTokens.typoFontFamily}: var(--plasma-typo-dspl-m-font-family);
                /* NOTE: no token dsplM in @salutejs/sdds-themes/tokens */
                ${typographyTokens.typoFontSize}: var(--plasma-typo-dspl-m-font-size);
                /* NOTE: no token dsplM in @salutejs/sdds-themes/tokens */
                ${typographyTokens.typoFontStyle}: var(--plasma-typo-dspl-m-font-style);
                /* NOTE: no token dsplM in @salutejs/sdds-themes/tokens */
                ${typographyTokens.typoFontWeight}: var(--plasma-typo-dspl-m-font-weight);
                /* NOTE: no token dsplMBold in @salutejs/sdds-themes/tokens */
                ${typographyTokens.typoFontWeightBold}: var(--plasma-typo-dspl-m-bold-font-weight);
                /* NOTE: no token dsplMMedium in @salutejs/sdds-themes/tokens */
                ${typographyTokens.typoFontWeightMedium}: var(--plasma-typo-dspl-m-medium-font-weight);
                /* NOTE: no token dsplM in @salutejs/sdds-themes/tokens */
                ${typographyTokens.typoFontLetterSpacing}: var(--plasma-typo-dspl-m-letter-spacing);
                /* NOTE: no token dsplM in @salutejs/sdds-themes/tokens */
                ${typographyTokens.typoFontLineHeight}: var(--plasma-typo-dspl-m-line-height);
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
