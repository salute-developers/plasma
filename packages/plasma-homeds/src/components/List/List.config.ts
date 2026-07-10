import { css, listTokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    bodyM,
    bodyS,
    surfaceAccent,
    surfaceTransparentPrimary,
    surfaceTransparentSecondary,
    textPrimary,
} from '@salutejs/plasma-themes/tokens/plasma_homeds';

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
                ${listTokens.listItemBackground}: ${surfaceTransparentPrimary};
                ${listTokens.listItemBackgroundHover}: ${surfaceTransparentSecondary};
                ${listTokens.listItemBorderColor}: transparent;
                ${listTokens.listItemBorderColorHover}: transparent;
                ${listTokens.listItemFocusColor}: ${surfaceAccent};
                ${listTokens.listBackground}: ${surfaceTransparentPrimary};
                ${listTokens.listItemDividerColor}: ${surfaceTransparentPrimary};
                ${listTokens.listDisabledOpacity}: 0.4;
            `,
        },
        size: {
            s: css`
                ${listTokens.listGap}: 0.5rem;
                ${listTokens.listBorderRadius}: 1.75rem;
                ${listTokens.listPadding}: 0.5rem 1rem 0.5rem 1rem;

                ${listTokens.listItemPaddingTop}: 0.625rem;
                ${listTokens.listItemPaddingLeft}: 1rem;
                ${listTokens.listItemPaddingRight}: 0.875rem;
                ${listTokens.listItemPaddingBottom}: 0.625rem;
                ${listTokens.listItemContentPadding}: 0.3125rem 0rem;
                ${listTokens.listItemBorderRadius}: 1.25rem;
                ${listTokens.listItemBorderWidth}: 0rem;
                ${listTokens.listItemGap}: 0.75rem;
                ${listTokens.listItemTightDifference}: 0.25rem;

                ${listTokens.listItemDividerHeight}: 0.0625rem;

                ${listTokens.listItemFontFamily}: ${bodyS.fontFamily};
                ${listTokens.listItemFontSize}: ${bodyS.fontSize};
                ${listTokens.listItemFontStyle}: ${bodyS.fontStyle};
                ${listTokens.listItemFontWeight}: ${bodyS.fontWeight};
                ${listTokens.listItemLetterSpacing}: ${bodyS.letterSpacing};
                ${listTokens.listItemLineHeight}: ${bodyS.lineHeight};
            `,
            m: css`
                ${listTokens.listGap}: 0.5rem;
                ${listTokens.listBorderRadius}: 1.75rem;
                ${listTokens.listPadding}: 0.5rem 1rem 0.5rem 1rem;

                ${listTokens.listItemPaddingTop}: 0.5625rem;
                ${listTokens.listItemPaddingLeft}: 1rem;
                ${listTokens.listItemPaddingRight}: 0.875rem;
                ${listTokens.listItemPaddingBottom}: 0.5625rem;
                ${listTokens.listItemContentPadding}: 0.3125rem 0rem;
                ${listTokens.listItemBorderRadius}: 1.25rem;
                ${listTokens.listItemBorderWidth}: 0rem;
                ${listTokens.listItemGap}: 0.75rem;
                ${listTokens.listItemTightDifference}: 0.25rem;

                ${listTokens.listItemDividerHeight}: 0.0625rem;

                ${listTokens.listItemFontFamily}: ${bodyM.fontFamily};
                ${listTokens.listItemFontSize}: ${bodyM.fontSize};
                ${listTokens.listItemFontStyle}: ${bodyM.fontStyle};
                ${listTokens.listItemFontWeight}: ${bodyM.fontWeight};
                ${listTokens.listItemLetterSpacing}: ${bodyM.letterSpacing};
                ${listTokens.listItemLineHeight}: ${bodyM.lineHeight};
            `,
        },
        disabled: {
            true: css``,
        },
    },
};
