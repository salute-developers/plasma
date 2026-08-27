import { css, listTokens } from '@salutejs/plasma-new-hope/styled-components';
import { bodyM, bodyS, surfaceAccent, textPrimary } from '@salutejs/plasma-themes/tokens/plasma_homeds';

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
                ${listTokens.listItemBackgroundHover}: transparent;
                ${listTokens.listItemBorderColor}: transparent;
                ${listTokens.listItemBorderColorHover}: transparent;
                ${listTokens.listItemFocusColor}: ${surfaceAccent};
                ${listTokens.listBackground}: transparent;
                ${listTokens.listItemDividerColor}: transparent;
            `,
        },
        size: {
            s: css`
                ${listTokens.listGap}: 0.75rem;
                ${listTokens.listBorderRadius}: 1.75rem;
                ${listTokens.listPadding}: 0.5rem 1rem 0.5rem 1rem;

                ${listTokens.listItemPaddingTop}: 0rem;
                ${listTokens.listItemPaddingLeft}: 0rem;
                ${listTokens.listItemPaddingRight}: 0rem;
                ${listTokens.listItemPaddingBottom}: 0rem;
                ${listTokens.listItemContentPadding}: 0rem;
                ${listTokens.listItemBorderRadius}: 0rem;
                ${listTokens.listItemBorderWidth}: 0rem;
                ${listTokens.listItemGap}: 0.5rem;
                ${listTokens.listItemTightDifference}: 0rem;

                ${listTokens.listItemDividerHeight}: 0rem;

                ${listTokens.listItemFontFamily}: ${bodyS.fontFamily};
                ${listTokens.listItemFontSize}: ${bodyS.fontSize};
                ${listTokens.listItemFontStyle}: ${bodyS.fontStyle};
                ${listTokens.listItemFontWeight}: ${bodyS.fontWeight};
                ${listTokens.listItemLetterSpacing}: ${bodyS.letterSpacing};
                ${listTokens.listItemLineHeight}: ${bodyS.lineHeight};
            `,
            m: css`
                ${listTokens.listGap}: 0.75rem;
                ${listTokens.listBorderRadius}: 1.75rem;
                ${listTokens.listPadding}: 0.5rem 1rem 0.5rem 1rem;

                ${listTokens.listItemPaddingTop}: 0rem;
                ${listTokens.listItemPaddingLeft}: 0rem;
                ${listTokens.listItemPaddingRight}: 0rem;
                ${listTokens.listItemPaddingBottom}: 0rem;
                ${listTokens.listItemContentPadding}: 0rem;
                ${listTokens.listItemBorderRadius}: 0rem;
                ${listTokens.listItemBorderWidth}: 0rem;
                ${listTokens.listItemGap}: 0.5rem;
                ${listTokens.listItemTightDifference}: 0rem;

                ${listTokens.listItemDividerHeight}: 0rem;

                ${listTokens.listItemFontFamily}: ${bodyM.fontFamily};
                ${listTokens.listItemFontSize}: ${bodyM.fontSize};
                ${listTokens.listItemFontStyle}: ${bodyM.fontStyle};
                ${listTokens.listItemFontWeight}: ${bodyM.fontWeight};
                ${listTokens.listItemLetterSpacing}: ${bodyM.letterSpacing};
                ${listTokens.listItemLineHeight}: ${bodyM.lineHeight};
            `,
        },
        disabled: {
            true: css`
                ${listTokens.listDisabledOpacity}: 0.4;
            `,
        },
    },
};
