import {
    bodyM,
    surfaceAccent,
    surfaceTransparentSecondary,
    textPrimary,
} from '@salutejs/sdds-themes/tokens/sdds_platform_ai';
import { css, listTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
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
        },
        disabled: {
            true: css``,
        },
    },
};
