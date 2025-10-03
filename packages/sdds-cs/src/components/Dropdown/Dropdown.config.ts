import { css, dropdownTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 's',
    },
    variations: {
        size: {
            s: css`
                ${tokens.padding}: 0rem;
                ${tokens.width}: 12.5rem;
                ${tokens.borderRadius}: 0.625rem;
                ${tokens.borderWidth}: 0.125rem;

                ${tokens.itemHeight}: 1.5rem;
                ${tokens.itemMargin}: 0rem;
                ${tokens.itemPadding}: 0.5rem 0.75rem;
                ${tokens.itemPaddingTight}: 0.25rem 0.75rem;

                ${tokens.itemBorderRadius}: 0.5rem;

                ${tokens.dividerMarginTop}: 0.375rem;
                ${tokens.dividerMarginRight}: 0.75rem;
                ${tokens.dividerMarginBottom}: 0.375rem;
                ${tokens.dividerMarginLeft}: 0.75rem;
                ${tokens.dividerMarginTopTight}: 0.25rem;
                ${tokens.dividerMarginBottomTight}: 0.25rem;

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
                ${tokens.dividerColor}: var(--surface-transparent-tertiary);
                ${tokens.disabledOpacity}: 0.4;
                ${tokens.borderColor}: var(--outline-solid-primary);
                ${tokens.focusColor}: var(--surface-accent);
                ${tokens.background}: var(--surface-solid-card-brightness);
                ${tokens.boxShadow}: 0px 4px 14px -4px rgba(8, 8, 8, 0.08), 0px 1px 4px -1px rgba(0, 0, 0, 0.04);
                ${tokens.itemBackground}: var(--surface-clear);
                ${tokens.itemBackgroundHover}: var(--surface-transparent-accent);
                ${tokens.itemColor}: var(--text-primary);
                ${tokens.dividerColor}: var(--surface-solid-primary);
                ${tokens.disclosureIconColor}: var(--text-accent);
            `,
        },
    },
};
