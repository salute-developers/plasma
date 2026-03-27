import {
    bodyM,
    bodyMBold,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    surfaceAccent,
    textPrimary,
    textSecondary,
    textSecondaryActive,
    textSecondaryHover,
    textTertiary,
} from '@salutejs/sdds-themes/tokens/sdds_platform_ai';
import { css, tabsTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'divider',
        size: 'm',
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
        },
        size: {
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
            h6: css`
                ${tabsTokens.itemBorderRadius}: 0.375rem;
                ${tabsTokens.itemWidth}: auto;
                ${tabsTokens.itemHeight}: 3rem;
                ${tabsTokens.itemPadding}: 0 0.125rem;
                ${tabsTokens.itemMarginLeft}: 1.5rem;
                ${tabsTokens.itemContentGap}: 0.625rem;

                ${tabsTokens.fontFamily}: ${h6.fontFamily};
                ${tabsTokens.fontSize}: ${h6.fontSize};
                ${tabsTokens.fontStyle}: ${h6.fontStyle};
                ${tabsTokens.fontWeight}: ${h6.fontWeight};
                ${tabsTokens.letterSpacing}: ${h6.letterSpacing};
                ${tabsTokens.lineHeight}: ${h6.lineHeight};

                ${tabsTokens.actionContentMarginLeft}: -0.125rem;
            `,
            h5: css`
                ${tabsTokens.itemBorderRadius}: 0.375rem;
                ${tabsTokens.itemWidth}: auto;
                ${tabsTokens.itemHeight}: 3rem;
                ${tabsTokens.itemPadding}: 0 0.125rem;
                ${tabsTokens.itemMarginLeft}: 1.5rem;
                ${tabsTokens.itemContentGap}: 0.625rem;

                ${tabsTokens.fontFamily}: ${h5.fontFamily};
                ${tabsTokens.fontSize}: ${h5.fontSize};
                ${tabsTokens.fontStyle}: ${h5.fontStyle};
                ${tabsTokens.fontWeight}: ${h5.fontWeight};
                ${tabsTokens.letterSpacing}: ${h5.letterSpacing};
                ${tabsTokens.lineHeight}: ${h5.lineHeight};

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
