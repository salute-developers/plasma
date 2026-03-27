import {
    bodyL,
    bodyM,
    bodyS,
    bodyXS,
    surfaceAccent,
    surfaceTransparentSecondary,
    textPrimary,
} from '@salutejs/plasma-themes/tokens/plasma_homeds';
import { css, listTokens } from '@salutejs/plasma-new-hope/styled-components';

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
                ${listTokens.listItemFocusColor}: ${surfaceAccent};
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

                ${listTokens.listItemFontFamily}: ${bodyXS.fontFamily};
                ${listTokens.listItemFontSize}: ${bodyXS.fontSize};
                ${listTokens.listItemFontStyle}: ${bodyXS.fontStyle};
                ${listTokens.listItemFontWeight}: ${bodyXS.fontWeight};
                ${listTokens.listItemLetterSpacing}: ${bodyXS.letterSpacing};
                ${listTokens.listItemLineHeight}: ${bodyXS.lineHeight};
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

                ${listTokens.listItemFontFamily}: ${bodyM.fontFamily};
                ${listTokens.listItemFontSize}: ${bodyM.fontSize};
                ${listTokens.listItemFontStyle}: ${bodyM.fontStyle};
                ${listTokens.listItemFontWeight}: ${bodyM.fontWeight};
                ${listTokens.listItemLetterSpacing}: ${bodyM.letterSpacing};
                ${listTokens.listItemLineHeight}: ${bodyM.lineHeight};
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
