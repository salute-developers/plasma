import { css, tabsTokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    /*
     * NOTE: Mixed DS tokens + raw vars. Prefer @salutejs-ds/sdds_sbcom/theme/tokens where possible.
     * Missing tokens in @salutejs/sdds-themes/tokens: bodyM, bodyMBold, bodyXs, bodyXsBold, surfaceAccent
     */
    bodyL,
    bodyLBold,
    bodyS,
    bodySBold,
    textPrimary,
    textSecondary,
    textSecondaryActive,
    textSecondaryHover,
    textTertiary,
} from '@salutejs-ds/sdds_sbcom/theme/tokens';

export const config = {
    defaults: {
        view: 'divider',
        size: 'l',
    },
    variations: {
        view: {
            divider: css`
                ${tabsTokens.itemColor}: ${textSecondary};
                ${tabsTokens.itemValueColor}: ${textTertiary};
                ${tabsTokens.itemBackgroundColor}: transparent;
                ${tabsTokens.itemColorHover}: ${textSecondaryHover};
                ${tabsTokens.itemValueColorHover}: ${textSecondary};
                ${tabsTokens.itemColorActive}: ${textSecondaryActive};
                ${tabsTokens.itemValueColorActive}: ${textSecondary};
                ${tabsTokens.itemBackgroundColorHover}: transparent;
                ${tabsTokens.itemSelectedColor}: ${textPrimary};
                ${tabsTokens.itemSelectedValueColor}: ${textSecondary};
                ${tabsTokens.itemSelectedBackgroundColor}: transparent;
                ${tabsTokens.itemSelectedColorHover}: ${textPrimary};
                ${tabsTokens.itemSelectedValueColorHover}: ${textSecondary};
                ${tabsTokens.itemSelectedBackgroundColorHover}: transparent;
                ${tabsTokens.itemBackgroundTransition}: background-color 0.3s ease-in-out;

                ${tabsTokens.itemPaddingClear}: 0;
                ${tabsTokens.itemContentPaddingClear}: 0;

                /* NOTE: no token surfaceAccent in @salutejs/sdds-themes/tokens */
                ${tabsTokens.outlineFocusColor}: var(--surface-accent);

                ${tabsTokens.itemSelectedDividerWidth}: 0.125rem;
                ${tabsTokens.itemSelectedDividerHeight}: 0.125rem;
                ${tabsTokens.itemSelectedDividerColor}: ${textPrimary};
                ${tabsTokens.itemSelectedDividerColorHover}: ${textPrimary};

                ${tabsTokens.itemCursor}: pointer;
            `,
        },
        size: {
            xs: css`
                ${tabsTokens.itemBorderRadius}: 0.375rem;
                ${tabsTokens.itemWidth}: auto;
                ${tabsTokens.itemHeight}: 2rem;
                ${tabsTokens.itemPadding}: 0 0.5rem;
                ${tabsTokens.itemPaddingPilled}: 0 0.375rem;
                ${tabsTokens.itemPaddingOrientationVertical}: 0.5rem 0.625rem;
                ${tabsTokens.itemMarginLeft}: 0.625rem;
                ${tabsTokens.itemContentGap}: 0.25rem;
                ${tabsTokens.itemContentPadding}: 0.125rem;

                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tabsTokens.fontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tabsTokens.fontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tabsTokens.fontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXsBold in @salutejs/sdds-themes/tokens */
                ${tabsTokens.fontWeight}: var(--plasma-typo-body-xs-bold-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tabsTokens.letterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tabsTokens.lineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tabsTokens.actionContentMarginLeft}: 0;
            `,
            s: css`
                ${tabsTokens.itemBorderRadius}: 0.5rem;
                ${tabsTokens.itemWidth}: auto;
                ${tabsTokens.itemHeight}: 2.5rem;
                ${tabsTokens.itemPadding}: 0 0.625rem;
                ${tabsTokens.itemPaddingPilled}: 0 0.5rem;
                ${tabsTokens.itemPaddingOrientationVertical}: 0.5rem 1rem;
                ${tabsTokens.itemMarginLeft}: 0.75rem;
                ${tabsTokens.itemContentGap}: 0.25rem;
                ${tabsTokens.itemContentPadding}: 0.125rem;

                ${tabsTokens.fontFamily}: ${bodyS.fontFamily};
                ${tabsTokens.fontSize}: ${bodyS.fontSize};
                ${tabsTokens.fontStyle}: ${bodyS.fontStyle};
                ${tabsTokens.fontWeight}: ${bodySBold.fontWeight};
                ${tabsTokens.letterSpacing}: ${bodyS.letterSpacing};
                ${tabsTokens.lineHeight}: ${bodyS.lineHeight};

                ${tabsTokens.actionContentMarginLeft}: 0.25rem;
            `,
            m: css`
                ${tabsTokens.itemBorderRadius}: 0.625rem;
                ${tabsTokens.itemWidth}: auto;
                ${tabsTokens.itemHeight}: 3rem;
                ${tabsTokens.itemPadding}: 0 0.625rem;
                ${tabsTokens.itemPaddingPilled}: 0 0.5rem;
                ${tabsTokens.itemPaddingOrientationVertical}: 0.75rem 1.25rem;
                ${tabsTokens.itemMarginLeft}: 1.125rem;
                ${tabsTokens.itemContentGap}: 0.375rem;
                ${tabsTokens.itemContentPadding}: 0.125rem;

                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${tabsTokens.fontFamily}: var(--plasma-typo-body-m-font-family);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${tabsTokens.fontSize}: var(--plasma-typo-body-m-font-size);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${tabsTokens.fontStyle}: var(--plasma-typo-body-m-font-style);
                /* NOTE: no token bodyMBold in @salutejs/sdds-themes/tokens */
                ${tabsTokens.fontWeight}: var(--plasma-typo-body-m-bold-font-weight);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${tabsTokens.letterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${tabsTokens.lineHeight}: var(--plasma-typo-body-m-line-height);

                ${tabsTokens.actionContentMarginLeft}: 0.125rem;
            `,
            l: css`
                ${tabsTokens.itemBorderRadius}: 0.75rem;
                ${tabsTokens.itemWidth}: auto;
                ${tabsTokens.itemHeight}: 3.5rem;
                ${tabsTokens.itemPadding}: 0 0.875rem;
                ${tabsTokens.itemPaddingPilled}: 0 0.75rem;
                ${tabsTokens.itemPaddingOrientationVertical}: 1rem 1.5rem;
                ${tabsTokens.itemMarginLeft}: 1.25rem;
                ${tabsTokens.itemContentGap}: 0.5rem;
                ${tabsTokens.itemContentPadding}: 0.125rem;

                ${tabsTokens.fontFamily}: ${bodyL.fontFamily};
                ${tabsTokens.fontSize}: ${bodyL.fontSize};
                ${tabsTokens.fontStyle}: ${bodyL.fontStyle};
                ${tabsTokens.fontWeight}: ${bodyLBold.fontWeight};
                ${tabsTokens.letterSpacing}: ${bodyL.letterSpacing};
                ${tabsTokens.lineHeight}: ${bodyL.lineHeight};

                ${tabsTokens.actionContentMarginLeft}: 0.125rem;
            `,
        },
        disabled: {
            true: css`
                ${tabsTokens.disabledOpacity}: 0.4;
            `,
        },
        truncate: {
            true: css``,
        },
    },
};
