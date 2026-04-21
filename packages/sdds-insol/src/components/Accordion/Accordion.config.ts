import {
    bodyL,
    bodyM,
    bodyS,
    bodyXS,
    h2,
    h3,
    h4,
    h5,
    h6,
    shadowDownSoftS,
    surfaceAccent,
    surfaceClear,
    surfaceSolidTertiary,
    surfaceTransparentCard,
    textAccent,
    textPrimary,
} from '@salutejs/sdds-themes/tokens/sdds_insol';
import { css, accordionTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${accordionTokens.accordionWidth}: 20rem;
                ${accordionTokens.accordionItemPadding}: var(${accordionTokens.accordionItemPaddingVertical}) var(${accordionTokens.accordionItemPaddingHorizontal});
                ${accordionTokens.accordionItemBackground}: ${surfaceTransparentCard};
                ${accordionTokens.accordionItemShadow}: ${shadowDownSoftS};
                ${accordionTokens.accordionItemTitleColor}: ${textPrimary};
                ${accordionTokens.accordionItemOpenedTitleColor}: ${textAccent};
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
                ${accordionTokens.accordionItemOpenedTitleColor}: ${textAccent};
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
                ${accordionTokens.accordionItemBodyPaddingBottom}: 1.125rem;
                ${accordionTokens.accordionItemGap}: 0.25rem;
                ${accordionTokens.accordionItemBorderRadius}: 0.875rem;
                ${accordionTokens.accordionGap}: 1rem;

                ${accordionTokens.accordionItemTitleFontFamily}: ${bodyL.fontFamily};
                ${accordionTokens.accordionItemTitleFontSize}: ${bodyL.fontSize};
                ${accordionTokens.accordionItemTitleFontStyle}: ${bodyL.fontStyle};
                ${accordionTokens.accordionItemTitleFontWeight}: ${bodyL.fontWeight};
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
                ${accordionTokens.accordionItemPaddingHorizontal}: 1rem;
                ${accordionTokens.accordionItemBodyPaddingBottom}: 1rem;

                ${accordionTokens.accordionItemGap}: 0.25rem;
                ${accordionTokens.accordionItemBorderRadius}: 0.75rem;
                ${accordionTokens.accordionGap}: 0.875rem;

                ${accordionTokens.accordionItemTitleFontFamily}: ${bodyM.fontFamily};
                ${accordionTokens.accordionItemTitleFontSize}: ${bodyM.fontSize};
                ${accordionTokens.accordionItemTitleFontStyle}: ${bodyM.fontStyle};
                ${accordionTokens.accordionItemTitleFontWeight}: ${bodyM.fontWeight};
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
                ${accordionTokens.accordionItemBodyPaddingBottom}: 0.75rem;

                ${accordionTokens.accordionItemGap}: 0.25rem;
                ${accordionTokens.accordionItemBorderRadius}: 0.625rem;
                ${accordionTokens.accordionGap}: 0.75rem;

                ${accordionTokens.accordionItemTitleFontFamily}: ${bodyS.fontFamily};
                ${accordionTokens.accordionItemTitleFontSize}: ${bodyS.fontSize};
                ${accordionTokens.accordionItemTitleFontStyle}: ${bodyS.fontStyle};
                ${accordionTokens.accordionItemTitleFontWeight}: ${bodyS.fontWeight};
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
                ${accordionTokens.accordionItemPaddingVertical}: 0.563rem;
                ${accordionTokens.accordionItemPaddingHorizontal}: 0.625rem;
                ${accordionTokens.accordionItemBodyPaddingBottom}: 0.625rem;

                ${accordionTokens.accordionItemGap}: 0.25rem;
                ${accordionTokens.accordionItemBorderRadius}: 0.5rem;
                ${accordionTokens.accordionGap}: 0.75rem;

                ${accordionTokens.accordionItemTitleFontFamily}: ${bodyXS.fontFamily};
                ${accordionTokens.accordionItemTitleFontSize}: ${bodyXS.fontSize};
                ${accordionTokens.accordionItemTitleFontStyle}: ${bodyXS.fontStyle};
                ${accordionTokens.accordionItemTitleFontWeight}: ${bodyXS.fontWeight};
                ${accordionTokens.accordionItemTitleLetterSpacing}: ${bodyXS.letterSpacing};
                ${accordionTokens.accordionItemTitleLineHeight}: ${bodyXS.lineHeight};

                ${accordionTokens.accordionItemTextFontFamily}: ${bodyXS.fontFamily};
                ${accordionTokens.accordionItemTextFontSize}: ${bodyXS.fontSize};
                ${accordionTokens.accordionItemTextFontStyle}: ${bodyXS.fontStyle};
                ${accordionTokens.accordionItemTextFontWeight}: ${bodyXS.fontWeight};
                ${accordionTokens.accordionItemTextLetterSpacing}: ${bodyXS.letterSpacing};
                ${accordionTokens.accordionItemTextLineHeight}: ${bodyXS.lineHeight};
            `,
            h2: css`
                ${accordionTokens.accordionItemPaddingVertical}: 1.625rem;
                ${accordionTokens.accordionItemPaddingHorizontal}: 1.75rem;
                ${accordionTokens.accordionItemBodyPaddingBottom}: 1.625rem;
                ${accordionTokens.accordionItemGap}: 0.25rem;
                ${accordionTokens.accordionItemIconSize}: 1.5rem;
                ${accordionTokens.accordionItemBorderRadius}: 1.25rem;
                ${accordionTokens.accordionGap}: 1.5rem;

                ${accordionTokens.accordionItemTitleFontFamily}: ${h2.fontFamily};
                ${accordionTokens.accordionItemTitleFontSize}: ${h2.fontSize};
                ${accordionTokens.accordionItemTitleFontStyle}: ${h2.fontStyle};
                ${accordionTokens.accordionItemTitleFontWeight}: ${h2.fontWeight};
                ${accordionTokens.accordionItemTitleLetterSpacing}: ${h2.letterSpacing};
                ${accordionTokens.accordionItemTitleLineHeight}: ${h2.lineHeight};

                ${accordionTokens.accordionItemTextFontFamily}: ${bodyL.fontFamily};
                ${accordionTokens.accordionItemTextFontSize}: ${bodyL.fontSize};
                ${accordionTokens.accordionItemTextFontStyle}: ${bodyL.fontStyle};
                ${accordionTokens.accordionItemTextFontWeight}: ${bodyL.fontWeight};
                ${accordionTokens.accordionItemTextLetterSpacing}: ${bodyL.letterSpacing};
                ${accordionTokens.accordionItemTextLineHeight}: ${bodyL.lineHeight};
            `,
            h3: css`
                ${accordionTokens.accordionItemPaddingVertical}: 1.5rem;
                ${accordionTokens.accordionItemPaddingHorizontal}: 1.625rem;
                ${accordionTokens.accordionItemBodyPaddingBottom}: 1.5rem;
                ${accordionTokens.accordionItemGap}: 0.25rem;
                ${accordionTokens.accordionItemIconSize}: 1.5rem;
                ${accordionTokens.accordionItemBorderRadius}: 1.125rem;
                ${accordionTokens.accordionGap}: 1.5rem;

                ${accordionTokens.accordionItemTitleFontFamily}: ${h3.fontFamily};
                ${accordionTokens.accordionItemTitleFontSize}: ${h3.fontSize};
                ${accordionTokens.accordionItemTitleFontStyle}: ${h3.fontStyle};
                ${accordionTokens.accordionItemTitleFontWeight}: ${h3.fontWeight};
                ${accordionTokens.accordionItemTitleLetterSpacing}: ${h3.letterSpacing};
                ${accordionTokens.accordionItemTitleLineHeight}: ${h3.lineHeight};

                ${accordionTokens.accordionItemTextFontFamily}: ${bodyL.fontFamily};
                ${accordionTokens.accordionItemTextFontSize}: ${bodyL.fontSize};
                ${accordionTokens.accordionItemTextFontStyle}: ${bodyL.fontStyle};
                ${accordionTokens.accordionItemTextFontWeight}: ${bodyL.fontWeight};
                ${accordionTokens.accordionItemTextLetterSpacing}: ${bodyL.letterSpacing};
                ${accordionTokens.accordionItemTextLineHeight}: ${bodyL.lineHeight};
            `,
            h4: css`
                ${accordionTokens.accordionItemPaddingVertical}: 1.438rem;
                ${accordionTokens.accordionItemPaddingHorizontal}: 1.5rem;
                ${accordionTokens.accordionItemBodyPaddingBottom}: 1.5rem;
                ${accordionTokens.accordionItemGap}: 0.25rem;
                ${accordionTokens.accordionItemBorderRadius}: 1rem;
                ${accordionTokens.accordionGap}: 1.5rem;

                ${accordionTokens.accordionItemTitleFontFamily}: ${h4.fontFamily};
                ${accordionTokens.accordionItemTitleFontSize}: ${h4.fontSize};
                ${accordionTokens.accordionItemTitleFontStyle}: ${h4.fontStyle};
                ${accordionTokens.accordionItemTitleFontWeight}: ${h4.fontWeight};
                ${accordionTokens.accordionItemTitleLetterSpacing}: ${h4.letterSpacing};
                ${accordionTokens.accordionItemTitleLineHeight}: ${h4.lineHeight};

                ${accordionTokens.accordionItemTextFontFamily}: ${bodyL.fontFamily};
                ${accordionTokens.accordionItemTextFontSize}: ${bodyL.fontSize};
                ${accordionTokens.accordionItemTextFontStyle}: ${bodyL.fontStyle};
                ${accordionTokens.accordionItemTextFontWeight}: ${bodyL.fontWeight};
                ${accordionTokens.accordionItemTextLetterSpacing}: ${bodyL.letterSpacing};
                ${accordionTokens.accordionItemTextLineHeight}: ${bodyL.lineHeight};
            `,
            h5: css`
                ${accordionTokens.accordionItemPaddingVertical}: 1.25rem;
                ${accordionTokens.accordionItemPaddingHorizontal}: 1.375rem;
                ${accordionTokens.accordionItemBodyPaddingBottom}: 1.375rem;
                ${accordionTokens.accordionItemGap}: 0.25rem;
                ${accordionTokens.accordionItemBorderRadius}: 0.875rem;
                ${accordionTokens.accordionGap}: 1.25rem;

                ${accordionTokens.accordionItemTitleFontFamily}: ${h5.fontFamily};
                ${accordionTokens.accordionItemTitleFontSize}: ${h5.fontSize};
                ${accordionTokens.accordionItemTitleFontStyle}: ${h5.fontStyle};
                ${accordionTokens.accordionItemTitleFontWeight}: ${h5.fontWeight};
                ${accordionTokens.accordionItemTitleLetterSpacing}: ${h5.letterSpacing};
                ${accordionTokens.accordionItemTitleLineHeight}: ${h5.lineHeight};

                ${accordionTokens.accordionItemTextFontFamily}: ${bodyM.fontFamily};
                ${accordionTokens.accordionItemTextFontSize}: ${bodyM.fontSize};
                ${accordionTokens.accordionItemTextFontStyle}: ${bodyM.fontStyle};
                ${accordionTokens.accordionItemTextFontWeight}: ${bodyM.fontWeight};
                ${accordionTokens.accordionItemTextLetterSpacing}: ${bodyM.letterSpacing};
                ${accordionTokens.accordionItemTextLineHeight}: ${bodyM.lineHeight};
            `,
            h6: css`
                ${accordionTokens.accordionItemPaddingVertical}: 1.25rem;
                ${accordionTokens.accordionItemPaddingHorizontal}: 1.375rem;
                ${accordionTokens.accordionItemBodyPaddingBottom}: 1.375rem;
                ${accordionTokens.accordionItemGap}: 0.25rem;
                ${accordionTokens.accordionItemBorderRadius}: 0.875rem;
                ${accordionTokens.accordionGap}: 1.25rem;

                ${accordionTokens.accordionItemTitleFontFamily}: ${h6.fontFamily};
                ${accordionTokens.accordionItemTitleFontSize}: ${h6.fontSize};
                ${accordionTokens.accordionItemTitleFontStyle}: ${h6.fontStyle};
                ${accordionTokens.accordionItemTitleFontWeight}: ${h6.fontWeight};
                ${accordionTokens.accordionItemTitleLetterSpacing}: ${h6.letterSpacing};
                ${accordionTokens.accordionItemTitleLineHeight}: ${h6.lineHeight};

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
