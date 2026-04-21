import { css, listTokens } from '@salutejs/plasma-new-hope/styled-components';
import { bodyL, bodyS, surfaceTransparentSecondary, textPrimary } from '@salutejs-ds/sdds_sbcom/theme/tokens';

/*
 * NOTE: Mixed DS tokens + raw vars. Prefer @salutejs-ds/sdds_sbcom/theme/tokens where possible.
 * Missing tokens in @salutejs/sdds-themes/tokens: bodyM, bodyXs, surfaceAccent
 */
export const config = {
    defaults: {
        view: 'default',
        size: 's',
    },
    variations: {
        view: {
            default: css`
                ${listTokens.listItemColor}: ${textPrimary};
                ${listTokens.listItemColorHover}: ${textPrimary};
                ${listTokens.listItemBackground}: transparent;
                ${listTokens.listItemBackgroundHover}: ${surfaceTransparentSecondary};
                ${listTokens.listItemBorderColor}: transparent;
                ${listTokens.listItemBorderColorHover}: transparent;
                /* NOTE: no token surfaceAccent in @salutejs/sdds-themes/tokens */
                ${listTokens.listItemFocusColor}: var(--surface-accent);
                ${listTokens.listDisabledOpacity}: 0.4;
            `,
        },
        size: {
            xs: css`
                ${listTokens.listItemPaddingTop}: 0.5rem;
                ${listTokens.listItemPaddingLeft}: 0.5rem;
                ${listTokens.listItemPaddingRight}: 0.5rem;
                ${listTokens.listItemPaddingBottom}: 0.5rem;
                ${listTokens.listItemBorderRadius}: 0.5rem;
                ${listTokens.listItemBorderWidth}: 0rem;
                ${listTokens.listItemGap}: 0.375rem;
                ${listTokens.listItemTightDifference}: 0.25rem;

                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${listTokens.listItemFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${listTokens.listItemFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${listTokens.listItemFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${listTokens.listItemFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${listTokens.listItemLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${listTokens.listItemLineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
            s: css`
                ${listTokens.listItemPaddingTop}: 0.689rem;
                ${listTokens.listItemPaddingLeft}: 0.75rem;
                ${listTokens.listItemPaddingRight}: 0.75rem;
                ${listTokens.listItemPaddingBottom}: 0.689rem;
                ${listTokens.listItemBorderRadius}: 0.625rem;
                ${listTokens.listItemBorderWidth}: 0rem;
                ${listTokens.listItemGap}: 0.375rem;
                ${listTokens.listItemTightDifference}: 0.25rem;

                ${listTokens.listItemFontFamily}: ${bodyS.fontFamily};
                ${listTokens.listItemFontSize}: ${bodyS.fontSize};
                ${listTokens.listItemFontStyle}: ${bodyS.fontStyle};
                ${listTokens.listItemFontWeight}: ${bodyS.fontWeight};
                ${listTokens.listItemLetterSpacing}: ${bodyS.letterSpacing};
                ${listTokens.listItemLineHeight}: ${bodyS.lineHeight};
            `,
            m: css`
                ${listTokens.listItemPaddingTop}: 0.75rem;
                ${listTokens.listItemPaddingLeft}: 0.875rem;
                ${listTokens.listItemPaddingRight}: 0.875rem;
                ${listTokens.listItemPaddingBottom}: 0.75rem;
                ${listTokens.listItemBorderRadius}: 0.75rem;
                ${listTokens.listItemBorderWidth}: 0rem;
                ${listTokens.listItemGap}: 0.5rem;
                ${listTokens.listItemTightDifference}: 0.25rem;

                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${listTokens.listItemFontFamily}: var(--plasma-typo-body-m-font-family);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${listTokens.listItemFontSize}: var(--plasma-typo-body-m-font-size);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${listTokens.listItemFontStyle}: var(--plasma-typo-body-m-font-style);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${listTokens.listItemFontWeight}: var(--plasma-typo-body-m-font-weight);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${listTokens.listItemLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${listTokens.listItemLineHeight}: var(--plasma-typo-body-m-line-height);
            `,
            l: css`
                ${listTokens.listItemPaddingTop}: 1rem;
                ${listTokens.listItemPaddingLeft}: 1rem;
                ${listTokens.listItemPaddingRight}: 1rem;
                ${listTokens.listItemPaddingBottom}: 1rem;
                ${listTokens.listItemBorderRadius}: 0.875rem;
                ${listTokens.listItemBorderWidth}: 0rem;
                ${listTokens.listItemGap}: 0.5rem;
                ${listTokens.listItemTightDifference}: 0.25rem;

                ${listTokens.listItemFontFamily}: ${bodyL.fontFamily};
                ${listTokens.listItemFontSize}: ${bodyL.fontSize};
                ${listTokens.listItemFontStyle}: ${bodyL.fontStyle};
                ${listTokens.listItemFontWeight}: ${bodyL.fontWeight};
                ${listTokens.listItemLetterSpacing}: ${bodyL.letterSpacing};
                ${listTokens.listItemLineHeight}: ${bodyL.lineHeight};
            `,
            xl: css`
                ${listTokens.listItemPaddingTop}: 1.3125rem;
                ${listTokens.listItemPaddingLeft}: 1.125rem;
                ${listTokens.listItemPaddingRight}: 1.125rem;
                ${listTokens.listItemPaddingBottom}: 1.3125rem;
                ${listTokens.listItemBorderRadius}: 1rem;
                ${listTokens.listItemBorderWidth}: 0rem;
                ${listTokens.listItemGap}: 0.5rem;
                ${listTokens.listItemTightDifference}: 0.25rem;

                ${listTokens.listItemFontFamily}: ${bodyL.fontFamily};
                ${listTokens.listItemFontSize}: ${bodyL.fontSize};
                ${listTokens.listItemFontStyle}: ${bodyL.fontStyle};
                ${listTokens.listItemFontWeight}: ${bodyL.fontWeight};
                ${listTokens.listItemLetterSpacing}: ${bodyL.letterSpacing};
                ${listTokens.listItemLineHeight}: ${bodyL.lineHeight};
            `,
        },
        disabled: {
            true: css``,
        },
    },
};
