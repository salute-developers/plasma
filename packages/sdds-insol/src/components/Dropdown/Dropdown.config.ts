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

                ${tokens.itemFontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.itemFontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.itemFontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.itemFontWeightBold}: var(--plasma-typo-body-m-font-weight);
                ${tokens.itemFontLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.itemFontLineHeight}: var(--plasma-typo-body-m-line-height);
                ${tokens.itemDisclosureIconSize}: 1.5rem;

                ${tokens.cellPadding}: 0rem;
                ${tokens.cellPaddingLeftContent}: 0rem;
                ${tokens.cellPaddingContent}: 0rem;
                ${tokens.cellPaddingRightContent}: 0rem;
                ${tokens.cellTextboxGap}: 0.125rem;
                ${tokens.cellGap}: 0.625rem;
                ${tokens.cellTitleFontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.cellTitleFontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.cellTitleFontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.cellTitleFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tokens.cellTitleLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.cellTitleLineHeight}: var(--plasma-typo-body-m-line-height);
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

                ${tokens.itemFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.itemFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.itemFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.itemFontWeightBold}: var(--plasma-typo-body-s-font-weight);
                ${tokens.itemFontLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.itemFontLineHeight}: var(--plasma-typo-body-s-line-height);
                ${tokens.itemDisclosureIconSize}: 1.5rem;

                ${tokens.cellPadding}: 0rem;
                ${tokens.cellPaddingLeftContent}: 0rem;
                ${tokens.cellPaddingContent}: 0rem;
                ${tokens.cellPaddingRightContent}: 0rem;
                ${tokens.cellTextboxGap}: 0.125rem;
                ${tokens.cellGap}: 0.625rem;
                ${tokens.cellTitleFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.cellTitleFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.cellTitleFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.cellTitleFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.cellTitleLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.cellTitleLineHeight}: var(--plasma-typo-body-s-line-height);
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

                ${tokens.itemFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.itemFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.itemFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.itemFontWeightBold}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.itemFontLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.itemFontLineHeight}: var(--plasma-typo-body-xs-line-height);
                ${tokens.itemDisclosureIconSize}: 1.25rem;

                ${tokens.cellPadding}: 0rem;
                ${tokens.cellPaddingLeftContent}: 0rem;
                ${tokens.cellPaddingContent}: 0rem;
                ${tokens.cellPaddingRightContent}: 0rem;
                ${tokens.cellTextboxGap}: 0.125rem;
                ${tokens.cellGap}: 0.625rem;
                ${tokens.cellTitleFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.cellTitleFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.cellTitleFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.cellTitleFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.cellTitleLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.cellTitleLineHeight}: var(--plasma-typo-body-xs-line-height);
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

                ${tokens.itemFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.itemFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.itemFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.itemFontWeightBold}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.itemFontLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.itemFontLineHeight}: var(--plasma-typo-body-xs-line-height);
                ${tokens.itemDisclosureIconSize}: 1rem;

                ${tokens.cellPadding}: 0rem;
                ${tokens.cellPaddingLeftContent}: 0rem;
                ${tokens.cellPaddingContent}: 0rem;
                ${tokens.cellPaddingRightContent}: 0rem;
                ${tokens.cellTextboxGap}: 0.125rem;
                ${tokens.cellGap}: 0.5rem;
                ${tokens.cellTitleFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.cellTitleFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.cellTitleFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.cellTitleFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.cellTitleLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.cellTitleLineHeight}: var(--plasma-typo-body-xs-line-height);
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

                ${tokens.itemFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.itemFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.itemFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.itemFontWeightBold}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.itemFontLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.itemFontLineHeight}: var(--plasma-typo-body-xs-line-height);
                ${tokens.itemDisclosureIconSize}: 1rem;

                ${tokens.cellPadding}: 0rem;
                ${tokens.cellPaddingLeftContent}: 0rem;
                ${tokens.cellPaddingContent}: 0rem;
                ${tokens.cellPaddingRightContent}: 0rem;
                ${tokens.cellTextboxGap}: 0.125rem;
                ${tokens.cellGap}: 0.375rem;
                ${tokens.cellTitleFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.cellTitleFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.cellTitleFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.cellTitleFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.cellTitleLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.cellTitleLineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
        },
        view: {
            default: css`
                ${tokens.itemBackgroundHover}: var(--surface-transparent-secondary);
                ${tokens.dividerColor}: var(--surface-transparent-tertiary);
            `,
        },
    },
};
