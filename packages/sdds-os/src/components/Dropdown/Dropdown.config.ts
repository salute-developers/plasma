import { css, dropdownTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        size: {
            l: css`
                ${tokens.padding}: 0.125rem;
                ${tokens.width}: 17.5rem;
                ${tokens.borderRadius}: 0.875rem;

                ${tokens.itemHeight}: 1.5rem;
                ${tokens.itemPadding}: 1rem 1.125rem;
                ${tokens.itemPaddingTight}: 0.75rem 1.125rem;
                ${tokens.itemBorderRadius}: 0.75rem;

                ${tokens.dividerMarginTop}: 0.5rem;
                ${tokens.dividerMarginRight}: 1.125rem;
                ${tokens.dividerMarginBottom}: 0.5rem;
                ${tokens.dividerMarginLeft}: 1.125rem;
                ${tokens.dividerMarginTopTight}: 0.375rem;
                ${tokens.dividerMarginBottomTight}: 0.375rem;

                ${tokens.itemFontFamily}: var(--plasma-typo-body-l-font-family);
                ${tokens.itemFontSize}: var(--plasma-typo-body-l-font-size);
                ${tokens.itemFontStyle}: var(--plasma-typo-body-l-font-style);
                ${tokens.itemFontWeightBold}: var(--plasma-typo-body-l-font-weight);
                ${tokens.itemFontLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${tokens.itemFontLineHeight}: var(--plasma-typo-body-l-line-height);

                ${tokens.cellPadding}: 0rem;
                ${tokens.cellPaddingLeftContent}: 0rem;
                ${tokens.cellPaddingContent}: 0rem;
                ${tokens.cellPaddingRightContent}: 0rem;
                ${tokens.cellTextboxGap}: 0.125rem;
                ${tokens.cellGap}: 0.375rem;
                ${tokens.cellTitleFontFamily}: var(--plasma-typo-body-l-font-family);
                ${tokens.cellTitleFontSize}: var(--plasma-typo-body-l-font-size);
                ${tokens.cellTitleFontStyle}: var(--plasma-typo-body-l-font-style);
                ${tokens.cellTitleFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${tokens.cellTitleLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${tokens.cellTitleLineHeight}: var(--plasma-typo-body-l-line-height);
            `,
            m: css`
                ${tokens.padding}: 0.125rem;
                ${tokens.width}: 15rem;
                ${tokens.borderRadius}: 0.75rem;

                ${tokens.itemHeight}: 1.5rem;
                ${tokens.itemPadding}: 0.75rem 0.875rem;
                ${tokens.itemPaddingTight}: 0.5rem 0.875rem;
                ${tokens.itemBorderRadius}: 0.625rem;

                ${tokens.dividerMarginTop}: 0.375rem;
                ${tokens.dividerMarginRight}: 0.875rem;
                ${tokens.dividerMarginBottom}: 0.375rem;
                ${tokens.dividerMarginLeft}: 0.875rem;
                ${tokens.dividerMarginTopTight}: 0.375rem;
                ${tokens.dividerMarginBottomTight}: 0.375rem;

                ${tokens.itemFontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.itemFontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.itemFontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.itemFontWeightBold}: var(--plasma-typo-body-m-font-weight);
                ${tokens.itemFontLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.itemFontLineHeight}: var(--plasma-typo-body-m-line-height);

                ${tokens.cellPadding}: 0rem;
                ${tokens.cellPaddingLeftContent}: 0rem;
                ${tokens.cellPaddingContent}: 0rem;
                ${tokens.cellPaddingRightContent}: 0rem;
                ${tokens.cellTextboxGap}: 0.125rem;
                ${tokens.cellGap}: 0.375rem;
                ${tokens.cellTitleFontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.cellTitleFontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.cellTitleFontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.cellTitleFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tokens.cellTitleLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.cellTitleLineHeight}: var(--plasma-typo-body-m-line-height);
            `,
            s: css`
                ${tokens.padding}: 0.125rem;
                ${tokens.width}: 12.5rem;
                ${tokens.borderRadius}: 0.625rem;

                ${tokens.itemHeight}: 1.5rem;
                ${tokens.itemPadding}: 0.5rem 0.75rem;
                ${tokens.itemPaddingTight}: 0.25rem 0.75rem;
                ${tokens.itemBorderRadius}: 0.5rem;

                ${tokens.dividerMarginTop}: 0.375rem;
                ${tokens.dividerMarginRight}: 0.75rem;
                ${tokens.dividerMarginBottom}: 0.375rem;
                ${tokens.dividerMarginLeft}: 0.75rem;
                ${tokens.dividerMarginTopTight}: 0.25rem;
                ${tokens.dividerMarginBottomTight}: 0.25rem;

                ${tokens.itemFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.itemFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.itemFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.itemFontWeightBold}: var(--plasma-typo-body-s-font-weight);
                ${tokens.itemFontLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.itemFontLineHeight}: var(--plasma-typo-body-s-line-height);

                ${tokens.cellPadding}: 0rem;
                ${tokens.cellPaddingLeftContent}: 0rem;
                ${tokens.cellPaddingContent}: 0rem;
                ${tokens.cellPaddingRightContent}: 0rem;
                ${tokens.cellTextboxGap}: 0.125rem;
                ${tokens.cellGap}: 0.375rem;
                ${tokens.cellTitleFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.cellTitleFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.cellTitleFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.cellTitleFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.cellTitleLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.cellTitleLineHeight}: var(--plasma-typo-body-s-line-height);
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
