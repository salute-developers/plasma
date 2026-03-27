import {
    inverseTextPrimary,
    surfaceAccent,
    surfaceSolidCard,
    surfaceSolidDefault,
    textAccent,
    textPrimary,
    textSecondary,
    textSecondaryActive,
    textSecondaryHover,
} from '@salutejs/sdds-themes/tokens/sdds_insol';
import { css, tabsTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'divider',
        size: 'xs',
    },
    variations: {
        view: {
            clear: css`
                ${tabsTokens.itemColor}: ${textSecondary};
                ${tabsTokens.itemBackgroundColor}: transparent;
                ${tabsTokens.itemColorHover}: ${textSecondaryHover};
                ${tabsTokens.itemColorActive}: ${textSecondaryActive};
                ${tabsTokens.itemBackgroundColorHover}: transparent;
                ${tabsTokens.itemSelectedColor}: ${textPrimary};
                ${tabsTokens.itemSelectedBackgroundColor}: transparent;
                ${tabsTokens.itemSelectedColorHover}: ${textPrimary};
                ${tabsTokens.itemSelectedBackgroundColorHover}: transparent;
                ${tabsTokens.itemBackgroundTransition}: background-color 0.3s ease-in-out;

                ${tabsTokens.outlineFocusColor}: ${surfaceAccent};

                ${tabsTokens.itemSelectedDividerHeight}: 0;

                ${tabsTokens.itemCursor}: pointer;
            `,
            secondary: css`
                ${tabsTokens.itemColor}: ${textPrimary};
                ${tabsTokens.itemBackgroundColor}: transparent;
                ${tabsTokens.itemColorHover}: ${textSecondaryHover};
                ${tabsTokens.itemColorActive}: ${textSecondaryActive};
                ${tabsTokens.itemBackgroundColorHover}: transparent;
                ${tabsTokens.itemSelectedColor}: ${textPrimary};
                ${tabsTokens.itemSelectedBackgroundColor}: ${surfaceSolidCard};
                ${tabsTokens.itemSelectedColorHover}: ${textPrimary};
                ${tabsTokens.itemSelectedBackgroundColorHover}: ${surfaceSolidCard};
                ${tabsTokens.itemBackgroundTransition}: background-color 0.3s ease-in-out;

                ${tabsTokens.itemMarginLeftFilled}: 0.125rem;

                ${tabsTokens.outlineFocusColor}: ${surfaceAccent};

                ${tabsTokens.itemSelectedDividerHeight}: 0;

                ${tabsTokens.itemCursor}: pointer;
            `,
            divider: css`
                ${tabsTokens.itemColor}: ${textSecondary};
                ${tabsTokens.itemBackgroundColor}: transparent;
                ${tabsTokens.itemColorHover}: ${textSecondaryHover};
                ${tabsTokens.itemColorActive}: ${textSecondaryActive};
                ${tabsTokens.itemBackgroundColorHover}: transparent;
                ${tabsTokens.itemSelectedColor}: ${textPrimary};
                ${tabsTokens.itemSelectedBackgroundColor}: transparent;
                ${tabsTokens.itemSelectedColorHover}: ${textPrimary};
                ${tabsTokens.itemSelectedBackgroundColorHover}: transparent;
                ${tabsTokens.itemBackgroundTransition}: background-color 0.3s ease-in-out;

                ${tabsTokens.outlineFocusColor}: ${surfaceAccent};

                ${tabsTokens.itemSelectedDividerHeight}: 0.125rem;
                ${tabsTokens.itemSelectedDividerColor}: ${textAccent};
                ${tabsTokens.itemSelectedDividerColorHover}: ${textAccent};

                ${tabsTokens.itemCursor}: pointer;
            `,
            default: css`
                ${tabsTokens.itemColor}: ${textPrimary};
                ${tabsTokens.itemBackgroundColor}: transparent;
                ${tabsTokens.itemColorHover}: ${textSecondaryHover};
                ${tabsTokens.itemColorActive}: ${textSecondaryActive};
                ${tabsTokens.itemBackgroundColorHover}: transparent;
                ${tabsTokens.itemSelectedColor}: ${inverseTextPrimary};
                ${tabsTokens.itemSelectedBackgroundColor}: ${surfaceSolidDefault};
                ${tabsTokens.itemSelectedColorHover}: ${inverseTextPrimary};
                ${tabsTokens.itemSelectedBackgroundColorHover}: ${surfaceSolidDefault};
                ${tabsTokens.itemBackgroundTransition}: background-color 0.3s ease-in-out;

                ${tabsTokens.itemMarginLeftFilled}: 0.125rem;

                ${tabsTokens.outlineFocusColor}: ${surfaceAccent};

                ${tabsTokens.itemSelectedDividerHeight}: 0;

                ${tabsTokens.itemCursor}: pointer;
            `,
        },
        size: {
            xs: css`
                ${tabsTokens.itemBorderRadius}: 0.375rem;
                ${tabsTokens.itemPadding}: 0.5rem 0.625rem;
                ${tabsTokens.itemContentGap}: 0.25rem;

                ${tabsTokens.actionContentMarginLeft}: 0;
            `,
            s: css`
                ${tabsTokens.itemBorderRadius}: 0.5rem;
                ${tabsTokens.itemPadding}: 0.5rem 0.625rem;
                ${tabsTokens.itemContentGap}: 0.25rem;

                ${tabsTokens.actionContentMarginLeft}: 0.125rem;
            `,
            m: css`
                ${tabsTokens.itemBorderRadius}: 0.625rem;
                ${tabsTokens.itemPadding}: 0.75rem 0.875rem;
                ${tabsTokens.itemContentGap}: 0.375rem;

                ${tabsTokens.actionContentMarginLeft}: 0.25rem;
            `,
            l: css`
                ${tabsTokens.itemBorderRadius}: 0.75rem;
                ${tabsTokens.itemPadding}: 1rem 1.125rem;
                ${tabsTokens.itemContentGap}: 0.5rem;

                ${tabsTokens.actionContentMarginLeft}: 0.125rem;
            `,
            h6: css`
                ${tabsTokens.itemBorderRadius}: 0.375rem;
                ${tabsTokens.itemPadding}: 0rem;
                ${tabsTokens.itemContentGap}: 0.625rem;

                ${tabsTokens.actionContentMarginLeft}: -0.125rem;
            `,
            h5: css`
                ${tabsTokens.itemBorderRadius}: 0.375rem;
                ${tabsTokens.itemPadding}: 0rem;
                ${tabsTokens.itemContentGap}: 0.625rem;

                ${tabsTokens.actionContentMarginLeft}: -0.125rem;
            `,
            h4: css`
                ${tabsTokens.itemBorderRadius}: 0.375rem;
                ${tabsTokens.itemPadding}: 0rem;
                ${tabsTokens.itemContentGap}: 0.625rem;

                ${tabsTokens.actionContentMarginLeft}: -0.125rem;
            `,
            h3: css`
                ${tabsTokens.itemBorderRadius}: 0.5rem;
                ${tabsTokens.itemPadding}: 0rem;
                ${tabsTokens.itemContentGap}: 0.75rem;

                ${tabsTokens.actionContentMarginLeft}: -0.125rem;
            `,
            h2: css`
                ${tabsTokens.itemBorderRadius}: 0.625rem;
                ${tabsTokens.itemPadding}: 0rem;
                ${tabsTokens.itemContentGap}: 0.875rem;

                ${tabsTokens.actionContentMarginLeft}: -0.125rem;
            `,
            h1: css`
                ${tabsTokens.itemBorderRadius}: 0.75rem;
                ${tabsTokens.itemPadding}: 0rem;
                ${tabsTokens.itemContentGap}: 1rem;

                ${tabsTokens.actionContentMarginLeft}: 0;
            `,
        },
        disabled: {
            true: css`
                ${tabsTokens.disabledOpacity}: 0.4;
            `,
        },
    },
};
