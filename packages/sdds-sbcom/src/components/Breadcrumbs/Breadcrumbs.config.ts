import { css, breadcrumbsTokens } from '@salutejs/plasma-new-hope/styled-components';
import { bodyL, bodyM, bodyS, surfaceAccent, textPrimary } from '@salutejs-ds/sdds_sbcom/theme/tokens';

/*
 * NOTE: Mixed DS tokens + raw vars. Prefer @salutejs-ds/sdds_sbcom/theme/tokens where possible.
 * Missing tokens in @salutejs/sdds-themes/tokens: bodyXs, plasmaTypoBodyLBoldWeight, plasmaTypoBodyMBoldWeight
 * plasmaTypoBodySBoldWeight, plasmaTypoBodyXsBoldWeight
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
                ${breadcrumbsTokens.breadcrumbsFocusOutlineColor}: ${surfaceAccent};
            `,
        },
        size: {
            l: css`
                ${breadcrumbsTokens.breadcrumbsGap}: 0.5rem;

                ${breadcrumbsTokens.breadcrumbsFontFamily}: ${bodyL.fontFamily};
                ${breadcrumbsTokens.breadcrumbsFontSize}: ${bodyL.fontSize};
                ${breadcrumbsTokens.breadcrumbsFontStyle}: ${bodyL.fontStyle};
                ${breadcrumbsTokens.breadcrumbsFontWeight}: var(--plasma-typo-body-l-bold-weight);
                ${breadcrumbsTokens.breadcrumbsLetterSpacing}: ${bodyL.letterSpacing};
                ${breadcrumbsTokens.breadcrumbsLineHeight}: ${bodyL.lineHeight};
            `,
            m: css`
                ${breadcrumbsTokens.breadcrumbsGap}: 0.375rem;

                ${breadcrumbsTokens.breadcrumbsFontFamily}: ${bodyM.fontFamily};
                ${breadcrumbsTokens.breadcrumbsFontSize}: ${bodyM.fontSize};
                ${breadcrumbsTokens.breadcrumbsFontStyle}: ${bodyM.fontStyle};
                ${breadcrumbsTokens.breadcrumbsFontWeight}: var(--plasma-typo-body-m-bold-weight);
                ${breadcrumbsTokens.breadcrumbsLetterSpacing}: ${bodyM.letterSpacing};
                ${breadcrumbsTokens.breadcrumbsLineHeight}: ${bodyM.lineHeight};
            `,
            s: css`
                ${breadcrumbsTokens.breadcrumbsGap}: 0.25rem;

                ${breadcrumbsTokens.breadcrumbsFontFamily}: ${bodyS.fontFamily};
                ${breadcrumbsTokens.breadcrumbsFontSize}: ${bodyS.fontSize};
                ${breadcrumbsTokens.breadcrumbsFontStyle}: ${bodyS.fontStyle};
                ${breadcrumbsTokens.breadcrumbsFontWeight}: var(--plasma-typo-body-s-bold-weight);
                ${breadcrumbsTokens.breadcrumbsLetterSpacing}: ${bodyS.letterSpacing};
                ${breadcrumbsTokens.breadcrumbsLineHeight}: ${bodyS.lineHeight};
            `,
            xs: css`
                ${breadcrumbsTokens.breadcrumbsGap}: 0rem;

                ${breadcrumbsTokens.breadcrumbsFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${breadcrumbsTokens.breadcrumbsFontSize}: var(--plasma-typo-body-xs-font-size);
                ${breadcrumbsTokens.breadcrumbsFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${breadcrumbsTokens.breadcrumbsFontWeight}: var(--plasma-typo-body-xs-bold-weight);
                ${breadcrumbsTokens.breadcrumbsLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${breadcrumbsTokens.breadcrumbsLineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
        },
    },
};
