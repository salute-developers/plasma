import {
    bodyL,
    bodyLBold,
    bodyM,
    bodyMBold,
    bodyS,
    bodySBold,
    bodyXS,
    bodyXSBold,
    surfaceAccent,
    textPrimary,
    textSecondary,
    textSecondaryActive,
    textSecondaryHover,
    textTertiary,
} from '@salutejs/plasma-themes/tokens/plasma_homeds';
import { css, tabsTokens } from '@salutejs/plasma-new-hope/styled-components';

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

                ${tabsTokens.outlineFocusColor}: ${surfaceAccent};

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

                ${tabsTokens.fontFamily}: ${bodyXS.fontFamily};
                ${tabsTokens.fontSize}: ${bodyXS.fontSize};
                ${tabsTokens.fontStyle}: ${bodyXS.fontStyle};
                ${tabsTokens.fontWeight}: ${bodyXSBold.fontWeight};
                ${tabsTokens.letterSpacing}: ${bodyXS.letterSpacing};
                ${tabsTokens.lineHeight}: ${bodyXS.lineHeight};

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

                ${tabsTokens.fontFamily}: ${bodyM.fontFamily};
                ${tabsTokens.fontSize}: ${bodyM.fontSize};
                ${tabsTokens.fontStyle}: ${bodyM.fontStyle};
                ${tabsTokens.fontWeight}: ${bodyMBold.fontWeight};
                ${tabsTokens.letterSpacing}: ${bodyM.letterSpacing};
                ${tabsTokens.lineHeight}: ${bodyM.lineHeight};

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
