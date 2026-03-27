import {
    bodyM,
    bodyMBold,
    surfaceAccent,
    surfaceClear,
    surfaceSolidCard,
    surfaceSolidTertiary,
    textAccent,
    textPrimary,
} from '@salutejs/sdds-themes/tokens/sdds_cs';
import { css, accordionTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 's',
    },
    variations: {
        view: {
            default: css`
                ${accordionTokens.accordionGap}: 0.125rem;
                ${accordionTokens.accordionWidth}: 20rem;
                ${accordionTokens.accordionItemPadding}: var(${accordionTokens.accordionItemPaddingVertical}) var(${accordionTokens.accordionItemPaddingHorizontal});
                ${accordionTokens.accordionItemBackground}: ${surfaceSolidCard};
                ${accordionTokens.accordionItemTitleColor}: ${textPrimary};
                ${accordionTokens.accordionItemTextColor}: ${textPrimary};
                ${accordionTokens.accordionItemIconColor}: ${textAccent};
                ${accordionTokens.accordionItemFocus}: ${surfaceAccent};
                ${accordionTokens.accordionBackground}: ${surfaceClear};
                ${accordionTokens.accordionItemBorderBottom}: 0;
                ${accordionTokens.accordionItemPaddingHorizontalLeft}: var(${accordionTokens.accordionItemPaddingHorizontal});
            `,
            clear: css`
                ${accordionTokens.accordionGap}: 0;
                ${accordionTokens.accordionWidth}: 20rem;
                ${accordionTokens.accordionItemPadding}: var(${accordionTokens.accordionItemPaddingVertical}) 0rem;
                ${accordionTokens.accordionItemBackground}: ${surfaceClear};
                ${accordionTokens.accordionItemTitleColor}: ${textPrimary};
                ${accordionTokens.accordionItemTextColor}: ${textPrimary};
                ${accordionTokens.accordionItemIconColor}: ${textAccent};
                ${accordionTokens.accordionItemFocus}: ${surfaceAccent};
                ${accordionTokens.accordionItemBorderRadius}: 0rem !important;
                ${accordionTokens.accordionBackground}: ${surfaceClear};
                ${accordionTokens.accordionItemBorderBottom}: 0.125rem solid ${surfaceSolidTertiary};
                ${accordionTokens.accordionItemPaddingHorizontalLeft}: 0;
            `,
        },
        size: {
            s: css`
                ${accordionTokens.accordionItemPaddingVertical}: 0.5rem;
                ${accordionTokens.accordionItemPaddingHorizontal}: 0.75rem;

                ${accordionTokens.accordionItemGap}: 0.375rem;
                ${accordionTokens.accordionItemBorderRadius}: 0.625rem;

                ${accordionTokens.accordionItemTitleFontFamily}: ${bodyM.fontFamily};
                ${accordionTokens.accordionItemTitleFontSize}: ${bodyM.fontSize};
                ${accordionTokens.accordionItemTitleFontStyle}: ${bodyM.fontStyle};
                ${accordionTokens.accordionItemTitleFontWeight}: ${bodyMBold.fontWeight};
                ${accordionTokens.accordionItemTitleLetterSpacing}: ${bodyM.letterSpacing};
                ${accordionTokens.accordionItemTitleLineHeight}: ${bodyM.lineHeight};

                ${accordionTokens.accordionItemTextFontFamily}: ${bodyM.fontFamily};
                ${accordionTokens.accordionItemTextFontSize}: ${bodyM.fontSize};
                ${accordionTokens.accordionItemTextFontStyle}: ${bodyM.fontStyle};
                ${accordionTokens.accordionItemTextFontWeight}: ${bodyM.fontWeight};
                ${accordionTokens.accordionItemTextLetterSpacing}: ${bodyM.letterSpacing};
                ${accordionTokens.accordionItemTextLineHeight}: ${bodyM.lineHeight};
            `,
        },
    },
};
