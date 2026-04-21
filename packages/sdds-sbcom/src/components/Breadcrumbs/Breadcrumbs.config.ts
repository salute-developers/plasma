import { css, breadcrumbsTokens } from '@salutejs/plasma-new-hope/styled-components';
import { bodyL, bodyS, textPrimary } from '@salutejs-ds/sdds_sbcom/theme/tokens';

/*
 * NOTE: Mixed DS tokens + raw vars. Prefer @salutejs-ds/sdds_sbcom/theme/tokens where possible.
 * Missing tokens in @salutejs/sdds-themes/tokens: bodyLBold, bodyM, bodyMBold, bodySBold, bodyXs, bodyXsBold
 * surfaceAccent
 */
export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${breadcrumbsTokens.breadcrumbsColor}: ${textPrimary};
                ${breadcrumbsTokens.breadcrumbsColorText}: ${textPrimary};
                ${breadcrumbsTokens.breadcrumbsColorSeparator}: ${textPrimary};
                ${breadcrumbsTokens.breadcrumbsOpacity}: 0.4;
                /* NOTE: no token surfaceAccent in @salutejs/sdds-themes/tokens */
                ${breadcrumbsTokens.breadcrumbsFocusOutlineColor}: var(--surface-accent);
            `,
        },
        size: {
            l: css`
                ${breadcrumbsTokens.breadcrumbsGap}: 0.5rem;

                ${breadcrumbsTokens.breadcrumbsFontFamily}: ${bodyL.fontFamily};
                ${breadcrumbsTokens.breadcrumbsFontSize}: ${bodyL.fontSize};
                ${breadcrumbsTokens.breadcrumbsFontStyle}: ${bodyL.fontStyle};
                /* NOTE: no token bodyLBold in @salutejs/sdds-themes/tokens */
                ${breadcrumbsTokens.breadcrumbsFontWeight}: var(--plasma-typo-body-l-bold-font-weight);
                ${breadcrumbsTokens.breadcrumbsLetterSpacing}: ${bodyL.letterSpacing};
                ${breadcrumbsTokens.breadcrumbsLineHeight}: ${bodyL.lineHeight};
            `,
            m: css`
                ${breadcrumbsTokens.breadcrumbsGap}: 0.375rem;

                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${breadcrumbsTokens.breadcrumbsFontFamily}: var(--plasma-typo-body-m-font-family);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${breadcrumbsTokens.breadcrumbsFontSize}: var(--plasma-typo-body-m-font-size);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${breadcrumbsTokens.breadcrumbsFontStyle}: var(--plasma-typo-body-m-font-style);
                /* NOTE: no token bodyMBold in @salutejs/sdds-themes/tokens */
                ${breadcrumbsTokens.breadcrumbsFontWeight}: var(--plasma-typo-body-m-bold-font-weight);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${breadcrumbsTokens.breadcrumbsLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${breadcrumbsTokens.breadcrumbsLineHeight}: var(--plasma-typo-body-m-line-height);
            `,
            s: css`
                ${breadcrumbsTokens.breadcrumbsGap}: 0.25rem;

                ${breadcrumbsTokens.breadcrumbsFontFamily}: ${bodyS.fontFamily};
                ${breadcrumbsTokens.breadcrumbsFontSize}: ${bodyS.fontSize};
                ${breadcrumbsTokens.breadcrumbsFontStyle}: ${bodyS.fontStyle};
                /* NOTE: no token bodySBold in @salutejs/sdds-themes/tokens */
                ${breadcrumbsTokens.breadcrumbsFontWeight}: var(--plasma-typo-body-s-bold-font-weight);
                ${breadcrumbsTokens.breadcrumbsLetterSpacing}: ${bodyS.letterSpacing};
                ${breadcrumbsTokens.breadcrumbsLineHeight}: ${bodyS.lineHeight};
            `,
            xs: css`
                ${breadcrumbsTokens.breadcrumbsGap}: 0rem;

                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${breadcrumbsTokens.breadcrumbsFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${breadcrumbsTokens.breadcrumbsFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${breadcrumbsTokens.breadcrumbsFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXsBold in @salutejs/sdds-themes/tokens */
                ${breadcrumbsTokens.breadcrumbsFontWeight}: var(--plasma-typo-body-xs-bold-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${breadcrumbsTokens.breadcrumbsLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${breadcrumbsTokens.breadcrumbsLineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
        },
    },
};
