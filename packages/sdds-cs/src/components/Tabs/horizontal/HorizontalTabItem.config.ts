import {
    bodyM,
    bodyMBold,
    inverseTextPrimary,
    onDarkTextSecondary,
    surfaceAccent,
    surfaceSolidCard,
    surfaceSolidDefault,
    surfaceSolidDefaultHover,
    textAccent,
    textAccentActive,
    textAccentMinor,
    textPrimary,
    textSecondary,
    textSecondaryActive,
    textSecondaryHover,
    textTertiary,
} from '@salutejs/sdds-themes/tokens/sdds_cs';
import { css, tabsTokens } from '@salutejs/plasma-new-hope/emotion';

export const config = {
    defaults: {
        view: 'divider',
        size: 's',
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
                ${tabsTokens.itemSelectedDividerColor}: ${surfaceSolidDefault};
                ${tabsTokens.itemSelectedDividerColorHover}: ${surfaceSolidDefaultHover};

                ${tabsTokens.itemCursor}: default;
                ${tabsTokens.itemCursorOverNotSelected}: pointer;
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
                ${tabsTokens.itemSelectedDividerColor}: ${surfaceSolidDefault};
                ${tabsTokens.itemSelectedDividerColorHover}: ${surfaceSolidDefaultHover};

                ${tabsTokens.itemCursor}: default;
                ${tabsTokens.itemCursorOverNotSelected}: pointer;
            `,
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

                ${tabsTokens.outlineFocusColor}: ${surfaceAccent};

                ${tabsTokens.itemSelectedDividerHeight}: 0.125rem;
                ${tabsTokens.itemSelectedDividerColor}: ${surfaceSolidDefault};
                ${tabsTokens.itemSelectedDividerColorHover}: ${surfaceSolidDefaultHover};

                ${tabsTokens.itemCursor}: default;
                ${tabsTokens.itemCursorOverNotSelected}: pointer;
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
                ${tabsTokens.itemSelectedValueColor}: ${onDarkTextSecondary};
                ${tabsTokens.itemSelectedBackgroundColor}: ${surfaceSolidDefault};
                ${tabsTokens.itemSelectedColorHover}: ${inverseTextPrimary};
                ${tabsTokens.itemSelectedValueColorHover}: ${onDarkTextSecondary};
                ${tabsTokens.itemSelectedBackgroundColorHover}: ${surfaceSolidDefault};
                ${tabsTokens.itemBackgroundTransition}: background-color 0.3s ease-in-out;

                ${tabsTokens.itemMarginLeftFilled}: 0.125rem;

                ${tabsTokens.outlineFocusColor}: ${surfaceAccent};

                ${tabsTokens.itemSelectedDividerHeight}: 0rem;
                ${tabsTokens.itemSelectedDividerColor}: ${surfaceSolidDefault};
                ${tabsTokens.itemSelectedDividerColorHover}: ${surfaceSolidDefaultHover};

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
                ${tabsTokens.itemPaddingPilled}: 0 0.125rem;
                ${tabsTokens.itemMarginLeft}: 1.5rem;
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

                ${tabsTokens.actionContentMarginLeft}: 0.125rem;
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
