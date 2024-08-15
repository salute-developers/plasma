import { css, dropdownTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 's',
    },
    variations: {
        size: {
            s: css`
                ${dropdownTokens.padding}: 0.125rem;
                ${dropdownTokens.width}: 12.5rem;
                ${dropdownTokens.borderRadius}: 0.625rem;

                ${dropdownTokens.itemPaddingTop}: 0.6875rem;
                ${dropdownTokens.itemPaddingRight}: 0.75rem;
                ${dropdownTokens.itemPaddingBottom}: 0.6875rem;
                ${dropdownTokens.itemPaddingLeft}: 0.75rem;
                ${dropdownTokens.itemBorderRadius}: 0.5rem;
                ${dropdownTokens.itemPaddingTopTight}: 0.4375rem;
                ${dropdownTokens.itemPaddingBottomTight}: 0.4375rem;

                ${dropdownTokens.itemFontFamily}: var(--plasma-typo-body-s-font-family);
                ${dropdownTokens.itemFontSize}: var(--plasma-typo-body-s-font-size);
                ${dropdownTokens.itemFontStyle}: var(--plasma-typo-body-s-font-style);
                ${dropdownTokens.itemFontWeightBold}: var(--plasma-typo-body-s-font-weight);
                ${dropdownTokens.itemFontLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${dropdownTokens.itemFontLineHeight}: var(--plasma-typo-body-s-line-height);
            `,
        },
        view: {
            default: css`
                ${dropdownTokens.disabledOpacity}: 0.4;
                ${dropdownTokens.focusColor}: var(--surface-accent);
                ${dropdownTokens.background}: var(--surface-solid-card-brightness);
                ${dropdownTokens.boxShadow}: 0px 4px 14px -4px rgba(8, 8, 8, 0.08), 0px 1px 4px -1px rgba(0, 0, 0, 0.04);
                ${dropdownTokens.disclosureIconColor}: var(--text-secondary);
                ${dropdownTokens.itemBackground}: var(--surface-clear);
                ${dropdownTokens.itemBackgroundHover}: var(--surface-transparent-secondary);
                ${dropdownTokens.itemColor}: var(--text-primary);
            `,
        },
    },
};
