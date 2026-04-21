import {
    bodyM,
    bodyS,
    bodyXS,
    surfaceTransparentSecondary,
    surfaceTransparentTertiary,
} from '@salutejs/sdds-themes/tokens/sdds_insol';
import { css, dropdownTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        size: {
            xl: css`
                ${tokens.padding}: 0.125rem;
                ${tokens.width}: 17.5rem;
                ${tokens.borderRadius}: 1rem;

                ${tokens.itemHeight}: 1.5rem;
                ${tokens.itemPadding}: 1.25rem 1.125rem;
                ${tokens.itemPaddingTight}: 1rem 1.125rem;
                ${tokens.itemGap}: 0.625rem;
                ${tokens.itemGapTight}: 0.625rem;

                ${tokens.dividerMarginTop}: 0.5rem;
                ${tokens.dividerMarginRight}: 1.125rem;
                ${tokens.dividerMarginBottom}: 0.5rem;
                ${tokens.dividerMarginLeft}: 1.125rem;
                ${tokens.dividerMarginTopTight}: 0.375rem;
                ${tokens.dividerMarginBottomTight}: 0.375rem;

                ${tokens.itemFontFamily}: ${bodyM.fontFamily};
                ${tokens.itemFontSize}: ${bodyM.fontSize};
                ${tokens.itemFontStyle}: ${bodyM.fontStyle};
                ${tokens.itemFontWeightBold}: ${bodyM.fontWeight};
                ${tokens.itemFontLetterSpacing}: ${bodyM.letterSpacing};
                ${tokens.itemFontLineHeight}: ${bodyM.lineHeight};
                ${tokens.itemDisclosureIconSize}: 1.5rem;

                ${tokens.cellPadding}: 0rem;
                ${tokens.cellPaddingLeftContent}: 0rem;
                ${tokens.cellPaddingContent}: 0rem;
                ${tokens.cellPaddingRightContent}: 0rem;
                ${tokens.cellTextboxGap}: 0.125rem;
                ${tokens.cellGap}: 0.625rem;
                ${tokens.cellTitleFontFamily}: ${bodyM.fontFamily};
                ${tokens.cellTitleFontSize}: ${bodyM.fontSize};
                ${tokens.cellTitleFontStyle}: ${bodyM.fontStyle};
                ${tokens.cellTitleFontWeight}: ${bodyM.fontWeight};
                ${tokens.cellTitleLetterSpacing}: ${bodyM.letterSpacing};
                ${tokens.cellTitleLineHeight}: ${bodyM.lineHeight};
            `,
            l: css`
                ${tokens.padding}: 0.125rem;
                ${tokens.width}: 17.5rem;
                ${tokens.borderRadius}: 0.875rem;

                ${tokens.itemHeight}: 1.5rem;
                ${tokens.itemPadding}: 1rem;
                ${tokens.itemPaddingTight}: 0.75rem 1rem;
                ${tokens.itemGap}: 0.625rem;
                ${tokens.itemGapTight}: 0.625rem;

                ${tokens.dividerMarginTop}: 0.5rem;
                ${tokens.dividerMarginRight}: 1.125rem;
                ${tokens.dividerMarginBottom}: 0.5rem;
                ${tokens.dividerMarginLeft}: 1.125rem;
                ${tokens.dividerMarginTopTight}: 0.375rem;
                ${tokens.dividerMarginBottomTight}: 0.375rem;

                ${tokens.itemFontFamily}: ${bodyS.fontFamily};
                ${tokens.itemFontSize}: ${bodyS.fontSize};
                ${tokens.itemFontStyle}: ${bodyS.fontStyle};
                ${tokens.itemFontWeightBold}: ${bodyS.fontWeight};
                ${tokens.itemFontLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.itemFontLineHeight}: ${bodyS.lineHeight};
                ${tokens.itemDisclosureIconSize}: 1.5rem;

                ${tokens.cellPadding}: 0rem;
                ${tokens.cellPaddingLeftContent}: 0rem;
                ${tokens.cellPaddingContent}: 0rem;
                ${tokens.cellPaddingRightContent}: 0rem;
                ${tokens.cellTextboxGap}: 0.125rem;
                ${tokens.cellGap}: 0.625rem;
                ${tokens.cellTitleFontFamily}: ${bodyS.fontFamily};
                ${tokens.cellTitleFontSize}: ${bodyS.fontSize};
                ${tokens.cellTitleFontStyle}: ${bodyS.fontStyle};
                ${tokens.cellTitleFontWeight}: ${bodyS.fontWeight};
                ${tokens.cellTitleLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.cellTitleLineHeight}: ${bodyS.lineHeight};
            `,
            m: css`
                ${tokens.padding}: 0.125rem;
                ${tokens.width}: 15rem;
                ${tokens.borderRadius}: 0.75rem;

                ${tokens.itemHeight}: 1.25rem;
                ${tokens.itemPadding}: 0.875rem;
                ${tokens.itemPaddingTight}: 0.625rem 0.875rem;
                ${tokens.itemGap}: 0.625rem;
                ${tokens.itemGapTight}: 0.625rem;

                ${tokens.dividerMarginTop}: 0.375rem;
                ${tokens.dividerMarginRight}: 0.875rem;
                ${tokens.dividerMarginBottom}: 0.375rem;
                ${tokens.dividerMarginLeft}: 0.875rem;
                ${tokens.dividerMarginTopTight}: 0.375rem;
                ${tokens.dividerMarginBottomTight}: 0.375rem;

                ${tokens.itemFontFamily}: ${bodyXS.fontFamily};
                ${tokens.itemFontSize}: ${bodyXS.fontSize};
                ${tokens.itemFontStyle}: ${bodyXS.fontStyle};
                ${tokens.itemFontWeightBold}: ${bodyXS.fontWeight};
                ${tokens.itemFontLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.itemFontLineHeight}: ${bodyXS.lineHeight};
                ${tokens.itemDisclosureIconSize}: 1.25rem;

                ${tokens.cellPadding}: 0rem;
                ${tokens.cellPaddingLeftContent}: 0rem;
                ${tokens.cellPaddingContent}: 0rem;
                ${tokens.cellPaddingRightContent}: 0rem;
                ${tokens.cellTextboxGap}: 0.125rem;
                ${tokens.cellGap}: 0.625rem;
                ${tokens.cellTitleFontFamily}: ${bodyXS.fontFamily};
                ${tokens.cellTitleFontSize}: ${bodyXS.fontSize};
                ${tokens.cellTitleFontStyle}: ${bodyXS.fontStyle};
                ${tokens.cellTitleFontWeight}: ${bodyXS.fontWeight};
                ${tokens.cellTitleLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.cellTitleLineHeight}: ${bodyXS.lineHeight};
            `,
            s: css`
                ${tokens.padding}: 0.125rem;
                ${tokens.width}: 12.5rem;
                ${tokens.borderRadius}: 0.625rem;

                ${tokens.itemHeight}: 1rem;
                ${tokens.itemPadding}: 0.75rem 0.625rem;
                ${tokens.itemPaddingTight}: 0.5rem 0.625rem;
                ${tokens.itemGap}: 0.5rem;
                ${tokens.itemGapTight}: 0.25rem;

                ${tokens.dividerMarginTop}: 0.375rem;
                ${tokens.dividerMarginRight}: 0.75rem;
                ${tokens.dividerMarginBottom}: 0.375rem;
                ${tokens.dividerMarginLeft}: 0.75rem;
                ${tokens.dividerMarginTopTight}: 0.25rem;
                ${tokens.dividerMarginBottomTight}: 0.25rem;

                ${tokens.itemFontFamily}: ${bodyXS.fontFamily};
                ${tokens.itemFontSize}: ${bodyXS.fontSize};
                ${tokens.itemFontStyle}: ${bodyXS.fontStyle};
                ${tokens.itemFontWeightBold}: ${bodyXS.fontWeight};
                ${tokens.itemFontLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.itemFontLineHeight}: ${bodyXS.lineHeight};
                ${tokens.itemDisclosureIconSize}: 1rem;

                ${tokens.cellPadding}: 0rem;
                ${tokens.cellPaddingLeftContent}: 0rem;
                ${tokens.cellPaddingContent}: 0rem;
                ${tokens.cellPaddingRightContent}: 0rem;
                ${tokens.cellTextboxGap}: 0.125rem;
                ${tokens.cellGap}: 0.5rem;
                ${tokens.cellTitleFontFamily}: ${bodyXS.fontFamily};
                ${tokens.cellTitleFontSize}: ${bodyXS.fontSize};
                ${tokens.cellTitleFontStyle}: ${bodyXS.fontStyle};
                ${tokens.cellTitleFontWeight}: ${bodyXS.fontWeight};
                ${tokens.cellTitleLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.cellTitleLineHeight}: ${bodyXS.lineHeight};
            `,
            xs: css`
                ${tokens.padding}: 0.125rem;
                ${tokens.width}: 10rem;
                ${tokens.borderRadius}: 0.5rem;

                ${tokens.itemHeight}: 1rem;
                ${tokens.itemPadding}: 0.5rem;
                ${tokens.itemPaddingTight}: 0.25rem 0.5rem;
                ${tokens.itemGap}: 0.375rem;
                ${tokens.itemGapTight}: 0.375rem;

                ${tokens.dividerMarginTop}: 0.25rem;
                ${tokens.dividerMarginRight}: 0.5rem;
                ${tokens.dividerMarginBottom}: 0.25rem;
                ${tokens.dividerMarginLeft}: 0.5rem;
                ${tokens.dividerMarginTopTight}: 0.125rem;
                ${tokens.dividerMarginBottomTight}: 0.125rem;

                ${tokens.itemFontFamily}: ${bodyXS.fontFamily};
                ${tokens.itemFontSize}: ${bodyXS.fontSize};
                ${tokens.itemFontStyle}: ${bodyXS.fontStyle};
                ${tokens.itemFontWeightBold}: ${bodyXS.fontWeight};
                ${tokens.itemFontLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.itemFontLineHeight}: ${bodyXS.lineHeight};
                ${tokens.itemDisclosureIconSize}: 1rem;

                ${tokens.cellPadding}: 0rem;
                ${tokens.cellPaddingLeftContent}: 0rem;
                ${tokens.cellPaddingContent}: 0rem;
                ${tokens.cellPaddingRightContent}: 0rem;
                ${tokens.cellTextboxGap}: 0.125rem;
                ${tokens.cellGap}: 0.375rem;
                ${tokens.cellTitleFontFamily}: ${bodyXS.fontFamily};
                ${tokens.cellTitleFontSize}: ${bodyXS.fontSize};
                ${tokens.cellTitleFontStyle}: ${bodyXS.fontStyle};
                ${tokens.cellTitleFontWeight}: ${bodyXS.fontWeight};
                ${tokens.cellTitleLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.cellTitleLineHeight}: ${bodyXS.lineHeight};
            `,
        },
        view: {
            default: css`
                ${tokens.itemBackgroundHover}: ${surfaceTransparentSecondary};
                ${tokens.dividerColor}: ${surfaceTransparentTertiary};
            `,
        },
    },
};
