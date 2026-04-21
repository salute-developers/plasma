import { css, typographyTokens } from '@salutejs/plasma-new-hope/styled-components';
import { h3, h3Bold, h3Medium } from '@salutejs-ds/sdds_sbcom/theme/tokens';

/*
 * NOTE: Mixed DS tokens + raw vars. Prefer @salutejs-ds/sdds_sbcom/theme/tokens where possible.
 * Missing tokens in @salutejs/sdds-themes/tokens: h1, h1Bold, h1Medium, h2, h2Bold, h2Medium, h4, h4Bold, h4Medium
 * h5, h5Bold, h5Medium, h6, h6Bold, h6Medium
 */
export const configH1 = {
    defaults: {
        size: 'h1',
    },
    variations: {
        size: {
            h1: css`
                /* NOTE: no token h1 in @salutejs/sdds-themes/tokens */
                ${typographyTokens.typoFontFamily}: var(--plasma-typo-h1-font-family);
                /* NOTE: no token h1 in @salutejs/sdds-themes/tokens */
                ${typographyTokens.typoFontSize}: var(--plasma-typo-h1-font-size);
                /* NOTE: no token h1 in @salutejs/sdds-themes/tokens */
                ${typographyTokens.typoFontStyle}: var(--plasma-typo-h1-font-style);
                /* NOTE: no token h1 in @salutejs/sdds-themes/tokens */
                ${typographyTokens.typoFontWeight}: var(--plasma-typo-h1-font-weight);
                /* NOTE: no token h1Bold in @salutejs/sdds-themes/tokens */
                ${typographyTokens.typoFontWeightBold}: var(--plasma-typo-h1-bold-font-weight);
                /* NOTE: no token h1Medium in @salutejs/sdds-themes/tokens */
                ${typographyTokens.typoFontWeightMedium}: var(--plasma-typo-h1-medium-font-weight);
                /* NOTE: no token h1 in @salutejs/sdds-themes/tokens */
                ${typographyTokens.typoFontLetterSpacing}: var(--plasma-typo-h1-letter-spacing);
                /* NOTE: no token h1 in @salutejs/sdds-themes/tokens */
                ${typographyTokens.typoFontLineHeight}: var(--plasma-typo-h1-line-height);
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
                /* NOTE: no token h2 in @salutejs/sdds-themes/tokens */
                ${typographyTokens.typoFontFamily}: var(--plasma-typo-h2-font-family);
                /* NOTE: no token h2 in @salutejs/sdds-themes/tokens */
                ${typographyTokens.typoFontSize}: var(--plasma-typo-h2-font-size);
                /* NOTE: no token h2 in @salutejs/sdds-themes/tokens */
                ${typographyTokens.typoFontStyle}: var(--plasma-typo-h2-font-style);
                /* NOTE: no token h2 in @salutejs/sdds-themes/tokens */
                ${typographyTokens.typoFontWeight}: var(--plasma-typo-h2-font-weight);
                /* NOTE: no token h2Bold in @salutejs/sdds-themes/tokens */
                ${typographyTokens.typoFontWeightBold}: var(--plasma-typo-h2-bold-font-weight);
                /* NOTE: no token h2Medium in @salutejs/sdds-themes/tokens */
                ${typographyTokens.typoFontWeightMedium}: var(--plasma-typo-h2-medium-font-weight);
                /* NOTE: no token h2 in @salutejs/sdds-themes/tokens */
                ${typographyTokens.typoFontLetterSpacing}: var(--plasma-typo-h2-letter-spacing);
                /* NOTE: no token h2 in @salutejs/sdds-themes/tokens */
                ${typographyTokens.typoFontLineHeight}: var(--plasma-typo-h2-line-height);
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
                /* NOTE: no token h4 in @salutejs/sdds-themes/tokens */
                ${typographyTokens.typoFontFamily}: var(--plasma-typo-h4-font-family);
                /* NOTE: no token h4 in @salutejs/sdds-themes/tokens */
                ${typographyTokens.typoFontSize}: var(--plasma-typo-h4-font-size);
                /* NOTE: no token h4 in @salutejs/sdds-themes/tokens */
                ${typographyTokens.typoFontStyle}: var(--plasma-typo-h4-font-style);
                /* NOTE: no token h4 in @salutejs/sdds-themes/tokens */
                ${typographyTokens.typoFontWeight}: var(--plasma-typo-h4-font-weight);
                /* NOTE: no token h4Bold in @salutejs/sdds-themes/tokens */
                ${typographyTokens.typoFontWeightBold}: var(--plasma-typo-h4-bold-font-weight);
                /* NOTE: no token h4Medium in @salutejs/sdds-themes/tokens */
                ${typographyTokens.typoFontWeightMedium}: var(--plasma-typo-h4-medium-font-weight);
                /* NOTE: no token h4 in @salutejs/sdds-themes/tokens */
                ${typographyTokens.typoFontLetterSpacing}: var(--plasma-typo-h4-letter-spacing);
                /* NOTE: no token h4 in @salutejs/sdds-themes/tokens */
                ${typographyTokens.typoFontLineHeight}: var(--plasma-typo-h4-line-height);
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
                /* NOTE: no token h5 in @salutejs/sdds-themes/tokens */
                ${typographyTokens.typoFontFamily}: var(--plasma-typo-h5-font-family);
                /* NOTE: no token h5 in @salutejs/sdds-themes/tokens */
                ${typographyTokens.typoFontSize}: var(--plasma-typo-h5-font-size);
                /* NOTE: no token h5 in @salutejs/sdds-themes/tokens */
                ${typographyTokens.typoFontStyle}: var(--plasma-typo-h5-font-style);
                /* NOTE: no token h5 in @salutejs/sdds-themes/tokens */
                ${typographyTokens.typoFontWeight}: var(--plasma-typo-h5-font-weight);
                /* NOTE: no token h5Bold in @salutejs/sdds-themes/tokens */
                ${typographyTokens.typoFontWeightBold}: var(--plasma-typo-h5-bold-font-weight);
                /* NOTE: no token h5Medium in @salutejs/sdds-themes/tokens */
                ${typographyTokens.typoFontWeightMedium}: var(--plasma-typo-h5-medium-font-weight);
                /* NOTE: no token h5 in @salutejs/sdds-themes/tokens */
                ${typographyTokens.typoFontLetterSpacing}: var(--plasma-typo-h5-letter-spacing);
                /* NOTE: no token h5 in @salutejs/sdds-themes/tokens */
                ${typographyTokens.typoFontLineHeight}: var(--plasma-typo-h5-line-height);
            `,
        },
    },
};
export const configH6 = {
    defaults: {
        size: 'h6',
    },
    variations: {
        size: {
            h6: css`
                /* NOTE: no token h6 in @salutejs/sdds-themes/tokens */
                ${typographyTokens.typoFontFamily}: var(--plasma-typo-h6-font-family);
                /* NOTE: no token h6 in @salutejs/sdds-themes/tokens */
                ${typographyTokens.typoFontSize}: var(--plasma-typo-h6-font-size);
                /* NOTE: no token h6 in @salutejs/sdds-themes/tokens */
                ${typographyTokens.typoFontStyle}: var(--plasma-typo-h6-font-style);
                /* NOTE: no token h6 in @salutejs/sdds-themes/tokens */
                ${typographyTokens.typoFontWeight}: var(--plasma-typo-h6-font-weight);
                /* NOTE: no token h6Bold in @salutejs/sdds-themes/tokens */
                ${typographyTokens.typoFontWeightBold}: var(--plasma-typo-h6-bold-font-weight);
                /* NOTE: no token h6Medium in @salutejs/sdds-themes/tokens */
                ${typographyTokens.typoFontWeightMedium}: var(--plasma-typo-h6-medium-font-weight);
                /* NOTE: no token h6 in @salutejs/sdds-themes/tokens */
                ${typographyTokens.typoFontLetterSpacing}: var(--plasma-typo-h6-letter-spacing);
                /* NOTE: no token h6 in @salutejs/sdds-themes/tokens */
                ${typographyTokens.typoFontLineHeight}: var(--plasma-typo-h6-line-height);
            `,
        },
    },
};
