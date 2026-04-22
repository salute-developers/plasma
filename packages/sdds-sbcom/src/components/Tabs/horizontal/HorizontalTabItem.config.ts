import { css, tabsTokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    bodyL,
    bodyLBold,
    bodyM,
    bodyMBold,
    bodyS,
    bodySBold,
    h1,
    h2,
    h3,
    h4,
    inverseTextPrimary,
    inverseTextSecondary,
    surfaceAccent,
    surfaceSolidCard,
    surfaceSolidDefault,
    textPrimary,
    textSecondary,
    textSecondaryActive,
    textSecondaryHover,
    textTertiary,
} from '@salutejs-ds/sdds_sbcom/theme/tokens';

/*
 * NOTE: Mixed DS tokens + raw vars. Prefer @salutejs-ds/sdds_sbcom/theme/tokens where possible.
 * Missing tokens in @salutejs/sdds-themes/tokens: bodyXs, bodyXsBold, h5, h6
 */
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

                ${tabsTokens.outlineFocusColor}: ${surfaceAccent};

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

                ${tabsTokens.outlineFocusColor}: ${surfaceAccent};

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

                ${tabsTokens.outlineFocusColor}: ${surfaceAccent};

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

                ${tabsTokens.outlineFocusColor}: ${surfaceAccent};

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

                ${tabsTokens.fontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tabsTokens.fontSize}: var(--plasma-typo-body-xs-font-size);
                ${tabsTokens.fontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tabsTokens.fontWeight}: var(--plasma-typo-body-xs-bold-font-weight);
                ${tabsTokens.letterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
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

                ${tabsTokens.fontFamily}: ${bodyM.fontFamily};
                ${tabsTokens.fontSize}: ${bodyM.fontSize};
                ${tabsTokens.fontStyle}: ${bodyM.fontStyle};
                ${tabsTokens.fontWeight}: ${bodyMBold.fontWeight};
                ${tabsTokens.letterSpacing}: ${bodyM.letterSpacing};
                ${tabsTokens.lineHeight}: ${bodyM.lineHeight};

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

                ${tabsTokens.fontFamily}: ${h4.fontFamily};
                ${tabsTokens.fontSize}: ${h4.fontSize};
                ${tabsTokens.fontStyle}: ${h4.fontStyle};
                ${tabsTokens.fontWeight}: ${h4.fontWeight};
                ${tabsTokens.letterSpacing}: ${h4.letterSpacing};
                ${tabsTokens.lineHeight}: ${h4.lineHeight};

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

                ${tabsTokens.fontFamily}: ${h2.fontFamily};
                ${tabsTokens.fontSize}: ${h2.fontSize};
                ${tabsTokens.fontStyle}: ${h2.fontStyle};
                ${tabsTokens.fontWeight}: ${h2.fontWeight};
                ${tabsTokens.letterSpacing}: ${h2.letterSpacing};
                ${tabsTokens.lineHeight}: ${h2.lineHeight};

                ${tabsTokens.actionContentMarginLeft}: -0.125rem;
            `,
            h1: css`
                ${tabsTokens.itemBorderRadius}: 0.75rem;
                ${tabsTokens.itemWidth}: auto;
                ${tabsTokens.itemHeight}: 5.75rem;
                ${tabsTokens.itemPadding}: 0 0.125rem;
                ${tabsTokens.itemMarginLeft}: 3.25rem;
                ${tabsTokens.itemContentGap}: 1rem;

                ${tabsTokens.fontFamily}: ${h1.fontFamily};
                ${tabsTokens.fontSize}: ${h1.fontSize};
                ${tabsTokens.fontStyle}: ${h1.fontStyle};
                ${tabsTokens.fontWeight}: ${h1.fontWeight};
                ${tabsTokens.letterSpacing}: ${h1.letterSpacing};
                ${tabsTokens.lineHeight}: ${h1.lineHeight};

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
