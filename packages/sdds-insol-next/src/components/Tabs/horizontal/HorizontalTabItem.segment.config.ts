import { css, tabsTokens } from '@salutejs/plasma-new-hope/styled-components';
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
    surfaceSolidCard,
    textAccent,
    textAccentHover,
    textPrimary,
    textPrimaryHover,
    textSecondary,
    textSecondaryActive,
} from '@salutejs/sdds-themes/tokens/sdds_insol_next';

const roundedRadius = '1000px';

export const config = {
    defaults: {
        view: 'secondary',
        size: 'l',
    },
    variations: {
        view: {
            secondary: css`
                ${tabsTokens.itemColor}: ${textPrimary};
                ${tabsTokens.itemValueColor}: ${textSecondary};
                ${tabsTokens.itemBackgroundColor}: transparent;
                ${tabsTokens.itemColorHover}: ${textPrimaryHover};
                ${tabsTokens.itemValueColorHover}: ${textSecondary};
                ${tabsTokens.itemColorActive}: ${textSecondaryActive};
                ${tabsTokens.itemValueColorActive}: ${textSecondary};
                ${tabsTokens.itemBackgroundColorHover}: transparent;
                ${tabsTokens.itemSelectedColor}: ${textAccent};
                ${tabsTokens.itemSelectedValueColor}: ${textSecondary};
                ${tabsTokens.itemSelectedBackgroundColor}: ${surfaceSolidCard};
                ${tabsTokens.itemSelectedColorHover}: ${textAccentHover};
                ${tabsTokens.itemSelectedValueColorHover}: ${textSecondary};
                ${tabsTokens.itemSelectedBackgroundColorHover}: ${surfaceSolidCard};
                ${tabsTokens.itemBackgroundTransition}: background-color 0.3s ease-in-out;

                ${tabsTokens.outlineFocusColor}: ${surfaceAccent};
                ${tabsTokens.itemOutlineRadius}: var(${tabsTokens.itemBorderRadius});

                ${tabsTokens.itemSelectedDividerHeight}: 0rem;
                ${tabsTokens.itemSelectedDividerColor}: transparent;
                ${tabsTokens.itemSelectedDividerColorHover}: transparent;

                ${tabsTokens.itemCursor}: pointer;
            `,
        },
        size: {
            xs: css`
                ${tabsTokens.itemBorderRadius}: 0.5rem;
                ${tabsTokens.itemWidth}: auto;
                ${tabsTokens.itemHeight}: 2.25rem;
                ${tabsTokens.itemPadding}: 0.5rem 0.75rem;
                ${tabsTokens.itemPaddingPilled}: 0.5rem 0.625rem;
                ${tabsTokens.itemMarginLeft}: 0;
                ${tabsTokens.itemContentGap}: 0.25rem;
                ${tabsTokens.itemContentPadding}: 0.125rem;

                ${tabsTokens.fontFamily}: ${bodyXS.fontFamily};
                ${tabsTokens.fontSize}: ${bodyXS.fontSize};
                ${tabsTokens.fontStyle}: ${bodyXS.fontStyle};
                ${tabsTokens.fontWeight}: ${bodyXS.fontWeight};
                ${tabsTokens.fontWeightSelected}: ${bodyXSBold.fontWeight};
                ${tabsTokens.letterSpacing}: ${bodyXS.letterSpacing};
                ${tabsTokens.lineHeight}: ${bodyXS.lineHeight};

                ${tabsTokens.actionContentMarginLeft}: 0;
            `,
            s: css`
                ${tabsTokens.itemBorderRadius}: 0.625rem;
                ${tabsTokens.itemWidth}: auto;
                ${tabsTokens.itemHeight}: 2.5rem;
                ${tabsTokens.itemPadding}: 0.75rem 1rem;
                ${tabsTokens.itemPaddingPilled}: 0.75rem 0.75rem;
                ${tabsTokens.itemMarginLeft}: 0;
                ${tabsTokens.itemContentGap}: 0.25rem;
                ${tabsTokens.itemContentPadding}: 0.125rem;

                ${tabsTokens.fontFamily}: ${bodyS.fontFamily};
                ${tabsTokens.fontSize}: ${bodyS.fontSize};
                ${tabsTokens.fontStyle}: ${bodyS.fontStyle};
                ${tabsTokens.fontWeight}: ${bodyS.fontWeight};
                ${tabsTokens.fontWeightSelected}: ${bodySBold.fontWeight};
                ${tabsTokens.letterSpacing}: ${bodyS.letterSpacing};
                ${tabsTokens.lineHeight}: ${bodyS.lineHeight};

                ${tabsTokens.actionContentMarginLeft}: 0.125rem;
            `,
            m: css`
                ${tabsTokens.itemBorderRadius}: 0.75rem;
                ${tabsTokens.itemWidth}: auto;
                ${tabsTokens.itemHeight}: 3rem;
                ${tabsTokens.itemPadding}: 0.875rem 1.25rem;
                ${tabsTokens.itemPaddingPilled}: 0.875rem 1rem;
                ${tabsTokens.itemMarginLeft}: 0;
                ${tabsTokens.itemContentGap}: 0.375rem;
                ${tabsTokens.itemContentPadding}: 0.125rem;

                ${tabsTokens.fontFamily}: ${bodyM.fontFamily};
                ${tabsTokens.fontSize}: ${bodyM.fontSize};
                ${tabsTokens.fontStyle}: ${bodyM.fontStyle};
                ${tabsTokens.fontWeight}: ${bodyM.fontWeight};
                ${tabsTokens.fontWeightSelected}: ${bodyMBold.fontWeight};
                ${tabsTokens.letterSpacing}: ${bodyM.letterSpacing};
                ${tabsTokens.lineHeight}: ${bodyM.lineHeight};

                ${tabsTokens.actionContentMarginLeft}: 0.25rem;
            `,
            l: css`
                ${tabsTokens.itemBorderRadius}: 0.875rem;
                ${tabsTokens.itemWidth}: auto;
                ${tabsTokens.itemHeight}: 3.5rem;
                ${tabsTokens.itemPadding}: 1rem 1.5rem;
                ${tabsTokens.itemPaddingPilled}: 1rem 1.25rem;
                ${tabsTokens.itemMarginLeft}: 0;
                ${tabsTokens.itemContentGap}: 0.5rem;
                ${tabsTokens.itemContentPadding}: 0.125rem;

                ${tabsTokens.fontFamily}: ${bodyL.fontFamily};
                ${tabsTokens.fontSize}: ${bodyL.fontSize};
                ${tabsTokens.fontStyle}: ${bodyL.fontStyle};
                ${tabsTokens.fontWeight}: ${bodyL.fontWeight};
                ${tabsTokens.fontWeightSelected}: ${bodyLBold.fontWeight};
                ${tabsTokens.letterSpacing}: ${bodyL.letterSpacing};
                ${tabsTokens.lineHeight}: ${bodyL.lineHeight};

                ${tabsTokens.actionContentMarginLeft}: 0.125rem;
            `,
            xl: css`
                ${tabsTokens.itemBorderRadius}: 1rem;
                ${tabsTokens.itemWidth}: auto;
                ${tabsTokens.itemHeight}: 4rem;
                ${tabsTokens.itemPadding}: 1.25rem 1.75rem;
                ${tabsTokens.itemPaddingPilled}: 1.25rem 1.5rem;
                ${tabsTokens.itemMarginLeft}: 0;
                ${tabsTokens.itemContentGap}: 0.5rem;
                ${tabsTokens.itemContentPadding}: 0.125rem;

                ${tabsTokens.fontFamily}: ${bodyL.fontFamily};
                ${tabsTokens.fontSize}: ${bodyL.fontSize};
                ${tabsTokens.fontStyle}: ${bodyL.fontStyle};
                ${tabsTokens.fontWeight}: ${bodyL.fontWeight};
                ${tabsTokens.fontWeightSelected}: ${bodyLBold.fontWeight};
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
        pilled: {
            true: css`
                ${tabsTokens.itemPilledBorderRadius}: ${roundedRadius};
                ${tabsTokens.itemOutlineRadius}: var(${tabsTokens.itemPilledBorderRadius});
            `,
        },
    },
};
