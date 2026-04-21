import { css, typographyTokens } from '@salutejs/plasma-new-hope/styled-components';
import { bodyL, bodyLBold, bodyLMedium, bodyS, bodySBold, bodySMedium } from '@salutejs-ds/sdds_sbcom/theme/tokens';

/*
 * NOTE: Mixed DS tokens + raw vars. Prefer @salutejs-ds/sdds_sbcom/theme/tokens where possible.
 * Missing tokens in @salutejs/sdds-themes/tokens: bodyM, bodyMBold, bodyMMedium, bodyXs, bodyXsBold, bodyXsMedium
 * bodyXxs, bodyXxsBold, bodyXxsMedium
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
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${typographyTokens.typoFontFamily}: var(--plasma-typo-body-m-font-family);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${typographyTokens.typoFontSize}: var(--plasma-typo-body-m-font-size);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${typographyTokens.typoFontStyle}: var(--plasma-typo-body-m-font-style);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${typographyTokens.typoFontWeight}: var(--plasma-typo-body-m-font-weight);
                /* NOTE: no token bodyMBold in @salutejs/sdds-themes/tokens */
                ${typographyTokens.typoFontWeightBold}: var(--plasma-typo-body-m-bold-font-weight);
                /* NOTE: no token bodyMMedium in @salutejs/sdds-themes/tokens */
                ${typographyTokens.typoFontWeightMedium}: var(--plasma-typo-body-m-medium-font-weight);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${typographyTokens.typoFontLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${typographyTokens.typoFontLineHeight}: var(--plasma-typo-body-m-line-height);
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
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${typographyTokens.typoFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${typographyTokens.typoFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${typographyTokens.typoFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${typographyTokens.typoFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXsBold in @salutejs/sdds-themes/tokens */
                ${typographyTokens.typoFontWeightBold}: var(--plasma-typo-body-xs-bold-font-weight);
                /* NOTE: no token bodyXsMedium in @salutejs/sdds-themes/tokens */
                ${typographyTokens.typoFontWeightMedium}: var(--plasma-typo-body-xs-medium-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${typographyTokens.typoFontLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
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
                /* NOTE: no token bodyXxs in @salutejs/sdds-themes/tokens */
                ${typographyTokens.typoFontFamily}: var(--plasma-typo-body-xxs-font-family);
                /* NOTE: no token bodyXxs in @salutejs/sdds-themes/tokens */
                ${typographyTokens.typoFontSize}: var(--plasma-typo-body-xxs-font-size);
                /* NOTE: no token bodyXxs in @salutejs/sdds-themes/tokens */
                ${typographyTokens.typoFontStyle}: var(--plasma-typo-body-xxs-font-style);
                /* NOTE: no token bodyXxs in @salutejs/sdds-themes/tokens */
                ${typographyTokens.typoFontWeight}: var(--plasma-typo-body-xxs-font-weight);
                /* NOTE: no token bodyXxsBold in @salutejs/sdds-themes/tokens */
                ${typographyTokens.typoFontWeightBold}: var(--plasma-typo-body-xxs-bold-font-weight);
                /* NOTE: no token bodyXxsMedium in @salutejs/sdds-themes/tokens */
                ${typographyTokens.typoFontWeightMedium}: var(--plasma-typo-body-xxs-medium-font-weight);
                /* NOTE: no token bodyXxs in @salutejs/sdds-themes/tokens */
                ${typographyTokens.typoFontLetterSpacing}: var(--plasma-typo-body-xxs-letter-spacing);
                /* NOTE: no token bodyXxs in @salutejs/sdds-themes/tokens */
                ${typographyTokens.typoFontLineHeight}: var(--plasma-typo-body-xxs-line-height);
            `,
        },
    },
};
