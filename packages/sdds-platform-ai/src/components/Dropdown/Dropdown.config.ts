import { css, dropdownTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        size: {
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
        },
        view: {
            default: css`
                ${tokens.itemBackgroundHover}: var(--surface-transparent-secondary);
                ${tokens.dividerColor}: var(--surface-transparent-tertiary);
            `,
        },
    },
};
