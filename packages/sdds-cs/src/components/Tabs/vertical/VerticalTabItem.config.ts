import {
    bodyM,
    bodyMBold,
    surfaceAccent,
    surfaceSolidDefault,
    textAccent,
    textAccentActive,
    textAccentMinor,
    textPrimary,
    textSecondary,
} from '@salutejs/sdds-themes/tokens/sdds_cs';
import { css, tabsTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'divider',
        size: 's',
    },
    variations: {
        view: {
            divider: css`
                ${tabsTokens.itemColor}: ${textAccent};
                ${tabsTokens.itemValueColor}: ${textSecondary};
                ${tabsTokens.itemBackgroundColor}: transparent;
                ${tabsTokens.itemColorHover}: ${textAccentMinor};
                ${tabsTokens.itemValueColorHover}: ${textSecondary};
                ${tabsTokens.itemColorActive}: ${textAccentActive};
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
                ${tabsTokens.itemSelectedDividerColor}: ${surfaceSolidDefault};
                ${tabsTokens.itemSelectedDividerColorHover}: ${textPrimary};

                ${tabsTokens.itemCursor}: default;
                ${tabsTokens.itemCursorOverNotSelected}: pointer;
            `,
        },
        size: {
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

                ${tabsTokens.fontFamily}: ${bodyMBold.fontFamily};
                ${tabsTokens.fontSize}: ${bodyMBold.fontSize};
                ${tabsTokens.fontStyle}: ${bodyMBold.fontStyle};
                ${tabsTokens.fontWeight}: ${bodyMBold.fontWeight};
                ${tabsTokens.letterSpacing}: ${bodyMBold.letterSpacing};
                ${tabsTokens.lineHeight}: ${bodyMBold.lineHeight};

                ${tabsTokens.valueFontFamily}: ${bodyM.fontFamily};
                ${tabsTokens.valueFontSize}: ${bodyM.fontSize};
                ${tabsTokens.valueFontStyle}: ${bodyM.fontStyle};
                ${tabsTokens.valueFontWeight}: ${bodyM.fontWeight};
                ${tabsTokens.valueLetterSpacing}: ${bodyM.letterSpacing};
                ${tabsTokens.valueLineHeight}: ${bodyM.lineHeight};

                ${tabsTokens.actionContentMarginLeft}: 0.25rem;
            `,
        },
        disabled: {
            true: css`
                ${tabsTokens.itemColor}: ${textSecondary};
                ${tabsTokens.itemValueColor}: ${textSecondary};
                ${tabsTokens.itemColorHover}: ${textSecondary};
                ${tabsTokens.itemValueColorHover}: ${textSecondary};
                ${tabsTokens.itemColorActive}: ${textSecondary};
                ${tabsTokens.itemValueColorActive}: ${textSecondary};
                ${tabsTokens.itemSelectedColor}: ${textSecondary};
                ${tabsTokens.itemSelectedDividerColor}: none;
                ${tabsTokens.itemSelectedDividerColorHover}: none;
            `,
        },
        truncate: {
            true: css``,
        },
    },
};
