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
    surfaceClear,
    surfaceSolidCard,
    surfaceSolidTertiary,
    textPrimary,
} from '@salutejs/sdds-themes/tokens/sdds_scan';
import { css, accordionTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
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
                ${accordionTokens.accordionItemIconColor}: ${textPrimary};
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
                ${accordionTokens.accordionItemIconColor}: ${textPrimary};
                ${accordionTokens.accordionItemFocus}: ${surfaceAccent};
                ${accordionTokens.accordionItemBorderRadius}: 0rem !important;
                ${accordionTokens.accordionBackground}: ${surfaceClear};
                ${accordionTokens.accordionItemBorderBottom}: 0.063rem solid ${surfaceSolidTertiary};
                ${accordionTokens.accordionItemPaddingHorizontalLeft}: 0;
            `,
        },
        size: {
            l: css`
                ${accordionTokens.accordionItemPaddingVertical}: 1.0625rem;
                ${accordionTokens.accordionItemPaddingHorizontal}: 1.25rem;
                ${accordionTokens.accordionItemGap}: 0.25rem;
                ${accordionTokens.accordionItemBorderRadius}: 0.875rem;

                ${accordionTokens.accordionItemTitleFontFamily}: ${bodyL.fontFamily};
                ${accordionTokens.accordionItemTitleFontSize}: ${bodyL.fontSize};
                ${accordionTokens.accordionItemTitleFontStyle}: ${bodyL.fontStyle};
                ${accordionTokens.accordionItemTitleFontWeight}: ${bodyLBold.fontWeight};
                ${accordionTokens.accordionItemTitleLetterSpacing}: ${bodyL.letterSpacing};
                ${accordionTokens.accordionItemTitleLineHeight}: ${bodyL.lineHeight};

                ${accordionTokens.accordionItemTextFontFamily}: ${bodyL.fontFamily};
                ${accordionTokens.accordionItemTextFontSize}: ${bodyL.fontSize};
                ${accordionTokens.accordionItemTextFontStyle}: ${bodyL.fontStyle};
                ${accordionTokens.accordionItemTextFontWeight}: ${bodyL.fontWeight};
                ${accordionTokens.accordionItemTextLetterSpacing}: ${bodyL.letterSpacing};
                ${accordionTokens.accordionItemTextLineHeight}: ${bodyL.lineHeight};
            `,
            m: css`
                ${accordionTokens.accordionItemPaddingVertical}: 0.875rem;
                ${accordionTokens.accordionItemPaddingHorizontal}: 1.125rem;

                ${accordionTokens.accordionItemGap}: 0.375rem;
                ${accordionTokens.accordionItemBorderRadius}: 0.75rem;

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
            s: css`
                ${accordionTokens.accordionItemPaddingVertical}: 0.6875rem;
                ${accordionTokens.accordionItemPaddingHorizontal}: 0.875rem;

                ${accordionTokens.accordionItemGap}: 0.375rem;
                ${accordionTokens.accordionItemBorderRadius}: 0.625rem;

                ${accordionTokens.accordionItemTitleFontFamily}: ${bodyS.fontFamily};
                ${accordionTokens.accordionItemTitleFontSize}: ${bodyS.fontSize};
                ${accordionTokens.accordionItemTitleFontStyle}: ${bodyS.fontStyle};
                ${accordionTokens.accordionItemTitleFontWeight}: ${bodySBold.fontWeight};
                ${accordionTokens.accordionItemTitleLetterSpacing}: ${bodyS.letterSpacing};
                ${accordionTokens.accordionItemTitleLineHeight}: ${bodyS.lineHeight};

                ${accordionTokens.accordionItemTextFontFamily}: ${bodyS.fontFamily};
                ${accordionTokens.accordionItemTextFontSize}: ${bodyS.fontSize};
                ${accordionTokens.accordionItemTextFontStyle}: ${bodyS.fontStyle};
                ${accordionTokens.accordionItemTextFontWeight}: ${bodyS.fontWeight};
                ${accordionTokens.accordionItemTextLetterSpacing}: ${bodyS.letterSpacing};
                ${accordionTokens.accordionItemTextLineHeight}: ${bodyS.lineHeight};
            `,
            xs: css`
                ${accordionTokens.accordionItemPaddingVertical}: 0.5rem;
                ${accordionTokens.accordionItemPaddingHorizontal}: 0.75rem;

                ${accordionTokens.accordionItemGap}: 0.25rem;
                ${accordionTokens.accordionItemBorderRadius}: 0.5rem;

                ${accordionTokens.accordionItemTitleFontFamily}: ${bodyXS.fontFamily};
                ${accordionTokens.accordionItemTitleFontSize}: ${bodyXS.fontSize};
                ${accordionTokens.accordionItemTitleFontStyle}: ${bodyXS.fontStyle};
                ${accordionTokens.accordionItemTitleFontWeight}: ${bodyXSBold.fontWeight};
                ${accordionTokens.accordionItemTitleLetterSpacing}: ${bodyXS.letterSpacing};
                ${accordionTokens.accordionItemTitleLineHeight}: ${bodyXS.lineHeight};

                ${accordionTokens.accordionItemTextFontFamily}: ${bodyXS.fontFamily};
                ${accordionTokens.accordionItemTextFontSize}: ${bodyXS.fontSize};
                ${accordionTokens.accordionItemTextFontStyle}: ${bodyXS.fontStyle};
                ${accordionTokens.accordionItemTextFontWeight}: ${bodyXS.fontWeight};
                ${accordionTokens.accordionItemTextLetterSpacing}: ${bodyXS.letterSpacing};
                ${accordionTokens.accordionItemTextLineHeight}: ${bodyXS.lineHeight};
            `,
        },
    },
};
