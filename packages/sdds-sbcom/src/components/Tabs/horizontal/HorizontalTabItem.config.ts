import { css, tabsTokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    /*
     * NOTE: Mixed DS tokens + raw vars. Prefer @salutejs-ds/sdds_sbcom/theme/tokens where possible.
     * Missing tokens in @salutejs/sdds-themes/tokens: bodyM, bodyMBold, bodyXs, bodyXsBold, h1, h2, h4, h5, h6
     * surfaceAccent
     */
    bodyL,
    bodyLBold,
    bodyS,
    bodySBold,
    h3,
    inverseTextPrimary,
    inverseTextSecondary,
    surfaceSolidCard,
    surfaceSolidDefault,
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
            clear: css`
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

                /* NOTE: no token surfaceAccent in @salutejs/sdds-themes/tokens */
                ${tabsTokens.outlineFocusColor}: var(--surface-accent);

                ${tabsTokens.itemSelectedDividerHeight}: 0rem;
                ${tabsTokens.itemSelectedDividerColor}: ${textPrimary};
                ${tabsTokens.itemSelectedDividerColorHover}: ${textPrimary};

                ${tabsTokens.itemCursor}: pointer;
            `,
            secondary: css`
                ${tabsTokens.itemColor}: ${textPrimary};
                ${tabsTokens.itemValueColor}: ${textSecondary};
                ${tabsTokens.itemBackgroundColor}: transparent;
                ${tabsTokens.itemColorHover}: ${textSecondaryHover};
                ${tabsTokens.itemValueColorHover}: ${textSecondary};
                ${tabsTokens.itemColorActive}: ${textSecondaryActive};
                ${tabsTokens.itemValueColorActive}: ${textSecondary};
                ${tabsTokens.itemBackgroundColorHover}: transparent;
                ${tabsTokens.itemSelectedColor}: ${textPrimary};
                ${tabsTokens.itemSelectedValueColor}: ${textSecondary};
                ${tabsTokens.itemSelectedBackgroundColor}: ${surfaceSolidCard};
                ${tabsTokens.itemSelectedColorHover}: ${textPrimary};
                ${tabsTokens.itemSelectedValueColorHover}: ${textSecondary};
                ${tabsTokens.itemSelectedBackgroundColorHover}: ${surfaceSolidCard};
                ${tabsTokens.itemBackgroundTransition}: background-color 0.3s ease-in-out;

                ${tabsTokens.itemMarginLeftFilled}: 0.125rem;

                /* NOTE: no token surfaceAccent in @salutejs/sdds-themes/tokens */
                ${tabsTokens.outlineFocusColor}: var(--surface-accent);

                ${tabsTokens.itemSelectedDividerHeight}: 0rem;
                ${tabsTokens.itemSelectedDividerColor}: ${textPrimary};
                ${tabsTokens.itemSelectedDividerColorHover}: ${textPrimary};

                ${tabsTokens.itemCursor}: pointer;
            `,
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

                /* NOTE: no token surfaceAccent in @salutejs/sdds-themes/tokens */
                ${tabsTokens.outlineFocusColor}: var(--surface-accent);

                ${tabsTokens.itemSelectedDividerHeight}: 0.125rem;
                ${tabsTokens.itemSelectedDividerColor}: ${textPrimary};
                ${tabsTokens.itemSelectedDividerColorHover}: ${textPrimary};

                ${tabsTokens.itemCursor}: pointer;
            `,
            default: css`
                ${tabsTokens.itemColor}: ${textPrimary};
                ${tabsTokens.itemValueColor}: ${textSecondary};
                ${tabsTokens.itemBackgroundColor}: transparent;
                ${tabsTokens.itemColorHover}: ${textSecondaryHover};
                ${tabsTokens.itemValueColorHover}: ${textSecondary};
                ${tabsTokens.itemColorActive}: ${textSecondaryActive};
                ${tabsTokens.itemValueColorActive}: ${textSecondary};
                ${tabsTokens.itemBackgroundColorHover}: transparent;
                ${tabsTokens.itemSelectedColor}: ${inverseTextPrimary};
                ${tabsTokens.itemSelectedValueColor}: ${inverseTextSecondary};
                ${tabsTokens.itemSelectedBackgroundColor}: ${surfaceSolidDefault};
                ${tabsTokens.itemSelectedColorHover}: ${inverseTextPrimary};
                ${tabsTokens.itemSelectedValueColorHover}: ${inverseTextSecondary};
                ${tabsTokens.itemSelectedBackgroundColorHover}: ${surfaceSolidDefault};
                ${tabsTokens.itemBackgroundTransition}: background-color 0.3s ease-in-out;

                ${tabsTokens.itemMarginLeftFilled}: 0.125rem;

                /* NOTE: no token surfaceAccent in @salutejs/sdds-themes/tokens */
                ${tabsTokens.outlineFocusColor}: var(--surface-accent);

                ${tabsTokens.itemSelectedDividerHeight}: 0rem;
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
                ${tabsTokens.itemPadding}: 0 0.125rem;
                ${tabsTokens.itemPaddingPilled}: 0 0.375rem;
                ${tabsTokens.itemMarginLeft}: 1.5rem;
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
                ${tabsTokens.itemPadding}: 0 0.125rem;
                ${tabsTokens.itemPaddingPilled}: 0 0.5rem;
                ${tabsTokens.itemMarginLeft}: 1.5rem;
                ${tabsTokens.itemContentGap}: 0.25rem;
                ${tabsTokens.itemContentPadding}: 0.125rem;

                ${tabsTokens.fontFamily}: ${bodyS.fontFamily};
                ${tabsTokens.fontSize}: ${bodyS.fontSize};
                ${tabsTokens.fontStyle}: ${bodyS.fontStyle};
                ${tabsTokens.fontWeight}: ${bodySBold.fontWeight};
                ${tabsTokens.letterSpacing}: ${bodyS.letterSpacing};
                ${tabsTokens.lineHeight}: ${bodyS.lineHeight};

                ${tabsTokens.actionContentMarginLeft}: 0.125rem;
            `,
            m: css`
                ${tabsTokens.itemBorderRadius}: 0.625rem;
                ${tabsTokens.itemWidth}: auto;
                ${tabsTokens.itemHeight}: 3rem;
                ${tabsTokens.itemPadding}: 0 0.125rem;
                ${tabsTokens.itemPaddingPilled}: 0 0.5rem;
                ${tabsTokens.itemMarginLeft}: 1.5rem;
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

                ${tabsTokens.actionContentMarginLeft}: 0.25rem;
            `,
            l: css`
                ${tabsTokens.itemBorderRadius}: 0.75rem;
                ${tabsTokens.itemWidth}: auto;
                ${tabsTokens.itemHeight}: 3.5rem;
                ${tabsTokens.itemPadding}: 0 0.125rem;
                ${tabsTokens.itemPaddingPilled}: 0 0.75rem;
                ${tabsTokens.itemMarginLeft}: 1.5rem;
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
            h6: css`
                ${tabsTokens.itemBorderRadius}: 0.375rem;
                ${tabsTokens.itemWidth}: auto;
                ${tabsTokens.itemHeight}: 3rem;
                ${tabsTokens.itemPadding}: 0 0.125rem;
                ${tabsTokens.itemMarginLeft}: 1.5rem;
                ${tabsTokens.itemContentGap}: 0.625rem;

                /* NOTE: no token h6 in @salutejs/sdds-themes/tokens */
                ${tabsTokens.fontFamily}: var(--plasma-typo-h6-font-family);
                /* NOTE: no token h6 in @salutejs/sdds-themes/tokens */
                ${tabsTokens.fontSize}: var(--plasma-typo-h6-font-size);
                /* NOTE: no token h6 in @salutejs/sdds-themes/tokens */
                ${tabsTokens.fontStyle}: var(--plasma-typo-h6-font-style);
                /* NOTE: no token h6 in @salutejs/sdds-themes/tokens */
                ${tabsTokens.fontWeight}: var(--plasma-typo-h6-font-weight);
                /* NOTE: no token h6 in @salutejs/sdds-themes/tokens */
                ${tabsTokens.letterSpacing}: var(--plasma-typo-h6-letter-spacing);
                /* NOTE: no token h6 in @salutejs/sdds-themes/tokens */
                ${tabsTokens.lineHeight}: var(--plasma-typo-h6-line-height);

                ${tabsTokens.actionContentMarginLeft}: -0.125rem;
            `,
            h5: css`
                ${tabsTokens.itemBorderRadius}: 0.375rem;
                ${tabsTokens.itemWidth}: auto;
                ${tabsTokens.itemHeight}: 3rem;
                ${tabsTokens.itemPadding}: 0 0.125rem;
                ${tabsTokens.itemMarginLeft}: 1.5rem;
                ${tabsTokens.itemContentGap}: 0.625rem;

                /* NOTE: no token h5 in @salutejs/sdds-themes/tokens */
                ${tabsTokens.fontFamily}: var(--plasma-typo-h5-font-family);
                /* NOTE: no token h5 in @salutejs/sdds-themes/tokens */
                ${tabsTokens.fontSize}: var(--plasma-typo-h5-font-size);
                /* NOTE: no token h5 in @salutejs/sdds-themes/tokens */
                ${tabsTokens.fontStyle}: var(--plasma-typo-h5-font-style);
                /* NOTE: no token h5 in @salutejs/sdds-themes/tokens */
                ${tabsTokens.fontWeight}: var(--plasma-typo-h5-font-weight);
                /* NOTE: no token h5 in @salutejs/sdds-themes/tokens */
                ${tabsTokens.letterSpacing}: var(--plasma-typo-h5-letter-spacing);
                /* NOTE: no token h5 in @salutejs/sdds-themes/tokens */
                ${tabsTokens.lineHeight}: var(--plasma-typo-h5-line-height);

                ${tabsTokens.actionContentMarginLeft}: -0.125rem;
            `,
            h4: css`
                ${tabsTokens.itemBorderRadius}: 0.375rem;
                ${tabsTokens.itemWidth}: auto;
                ${tabsTokens.itemHeight}: 3.25rem;
                ${tabsTokens.itemPadding}: 0 0.125rem;
                ${tabsTokens.itemMarginLeft}: 1.75rem;
                ${tabsTokens.itemContentGap}: 0.625rem;

                /* NOTE: no token h4 in @salutejs/sdds-themes/tokens */
                ${tabsTokens.fontFamily}: var(--plasma-typo-h4-font-family);
                /* NOTE: no token h4 in @salutejs/sdds-themes/tokens */
                ${tabsTokens.fontSize}: var(--plasma-typo-h4-font-size);
                /* NOTE: no token h4 in @salutejs/sdds-themes/tokens */
                ${tabsTokens.fontStyle}: var(--plasma-typo-h4-font-style);
                /* NOTE: no token h4 in @salutejs/sdds-themes/tokens */
                ${tabsTokens.fontWeight}: var(--plasma-typo-h4-font-weight);
                /* NOTE: no token h4 in @salutejs/sdds-themes/tokens */
                ${tabsTokens.letterSpacing}: var(--plasma-typo-h4-letter-spacing);
                /* NOTE: no token h4 in @salutejs/sdds-themes/tokens */
                ${tabsTokens.lineHeight}: var(--plasma-typo-h4-line-height);

                ${tabsTokens.actionContentMarginLeft}: -0.125rem;
            `,
            h3: css`
                ${tabsTokens.itemBorderRadius}: 0.5rem;
                ${tabsTokens.itemWidth}: auto;
                ${tabsTokens.itemHeight}: 3.875rem;
                ${tabsTokens.itemPadding}: 0 0.125rem;
                ${tabsTokens.itemMarginLeft}: 2rem;
                ${tabsTokens.itemContentGap}: 0.75rem;

                ${tabsTokens.fontFamily}: ${h3.fontFamily};
                ${tabsTokens.fontSize}: ${h3.fontSize};
                ${tabsTokens.fontStyle}: ${h3.fontStyle};
                ${tabsTokens.fontWeight}: ${h3.fontWeight};
                ${tabsTokens.letterSpacing}: ${h3.letterSpacing};
                ${tabsTokens.lineHeight}: ${h3.lineHeight};

                ${tabsTokens.actionContentMarginLeft}: -0.125rem;
            `,
            h2: css`
                ${tabsTokens.itemBorderRadius}: 0.625rem;
                ${tabsTokens.itemWidth}: auto;
                ${tabsTokens.itemHeight}: 4.5rem;
                ${tabsTokens.itemPadding}: 0 0.125rem;
                ${tabsTokens.itemMarginLeft}: 2.25rem;
                ${tabsTokens.itemContentGap}: 0.875rem;

                /* NOTE: no token h2 in @salutejs/sdds-themes/tokens */
                ${tabsTokens.fontFamily}: var(--plasma-typo-h2-font-family);
                /* NOTE: no token h2 in @salutejs/sdds-themes/tokens */
                ${tabsTokens.fontSize}: var(--plasma-typo-h2-font-size);
                /* NOTE: no token h2 in @salutejs/sdds-themes/tokens */
                ${tabsTokens.fontStyle}: var(--plasma-typo-h2-font-style);
                /* NOTE: no token h2 in @salutejs/sdds-themes/tokens */
                ${tabsTokens.fontWeight}: var(--plasma-typo-h2-font-weight);
                /* NOTE: no token h2 in @salutejs/sdds-themes/tokens */
                ${tabsTokens.letterSpacing}: var(--plasma-typo-h2-letter-spacing);
                /* NOTE: no token h2 in @salutejs/sdds-themes/tokens */
                ${tabsTokens.lineHeight}: var(--plasma-typo-h2-line-height);

                ${tabsTokens.actionContentMarginLeft}: -0.125rem;
            `,
            h1: css`
                ${tabsTokens.itemBorderRadius}: 0.75rem;
                ${tabsTokens.itemWidth}: auto;
                ${tabsTokens.itemHeight}: 5.75rem;
                ${tabsTokens.itemPadding}: 0 0.125rem;
                ${tabsTokens.itemMarginLeft}: 3.25rem;
                ${tabsTokens.itemContentGap}: 1rem;

                /* NOTE: no token h1 in @salutejs/sdds-themes/tokens */
                ${tabsTokens.fontFamily}: var(--plasma-typo-h1-font-family);
                /* NOTE: no token h1 in @salutejs/sdds-themes/tokens */
                ${tabsTokens.fontSize}: var(--plasma-typo-h1-font-size);
                /* NOTE: no token h1 in @salutejs/sdds-themes/tokens */
                ${tabsTokens.fontStyle}: var(--plasma-typo-h1-font-style);
                /* NOTE: no token h1 in @salutejs/sdds-themes/tokens */
                ${tabsTokens.fontWeight}: var(--plasma-typo-h1-font-weight);
                /* NOTE: no token h1 in @salutejs/sdds-themes/tokens */
                ${tabsTokens.letterSpacing}: var(--plasma-typo-h1-letter-spacing);
                /* NOTE: no token h1 in @salutejs/sdds-themes/tokens */
                ${tabsTokens.lineHeight}: var(--plasma-typo-h1-line-height);

                ${tabsTokens.actionContentMarginLeft}: 0;
            `,
        },
        disabled: {
            true: css`
                ${tabsTokens.disabledOpacity}: 0.4;
            `,
        },
        pilled: {
            true: css`
                ${tabsTokens.itemPilledBorderRadius}: 1.5rem;
            `,
        },
        truncate: {
            true: css``,
        },
    },
};
