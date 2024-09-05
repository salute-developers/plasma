import { css } from '@linaria/core';

import { dropdownTokens } from '../../../../components/Dropdown';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        size: {
            xs: css`
                ${dropdownTokens.padding}: 0.125rem;
                ${dropdownTokens.width}: 10rem;
                ${dropdownTokens.borderRadius}: 0.5rem;

                ${dropdownTokens.itemPaddingTop}: 0.5625rem;
                ${dropdownTokens.itemPaddingRight}: 0.5rem;
                ${dropdownTokens.itemPaddingBottom}: 0.5625rem;
                ${dropdownTokens.itemPaddingLeft}: 0.5rem;
                ${dropdownTokens.itemBorderRadius}: 0.375rem;
                ${dropdownTokens.itemPaddingTopTight}: 0.3125rem;
                ${dropdownTokens.itemPaddingBottomTight}: 0.3125rem;

                ${dropdownTokens.itemFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${dropdownTokens.itemFontSize}: var(--plasma-typo-body-xs-font-size);
                ${dropdownTokens.itemFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${dropdownTokens.itemFontWeightBold}: var(--plasma-typo-body-xs-font-weight);
                ${dropdownTokens.itemFontLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${dropdownTokens.itemFontLineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
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
            m: css`
                ${dropdownTokens.padding}: 0.125rem;
                ${dropdownTokens.width}: 15rem;
                ${dropdownTokens.borderRadius}: 0.75rem;

                ${dropdownTokens.itemPaddingTop}: 0.875rem;
                ${dropdownTokens.itemPaddingRight}: 0.875rem;
                ${dropdownTokens.itemPaddingBottom}: 0.875rem;
                ${dropdownTokens.itemPaddingLeft}: 0.875rem;
                ${dropdownTokens.itemBorderRadius}: 0.625rem;
                ${dropdownTokens.itemPaddingTopTight}: 0.625rem;
                ${dropdownTokens.itemPaddingBottomTight}: 0.625rem;

                ${dropdownTokens.itemFontFamily}: var(--plasma-typo-body-m-font-family);
                ${dropdownTokens.itemFontSize}: var(--plasma-typo-body-m-font-size);
                ${dropdownTokens.itemFontStyle}: var(--plasma-typo-body-m-font-style);
                ${dropdownTokens.itemFontWeightBold}: var(--plasma-typo-body-m-font-weight);
                ${dropdownTokens.itemFontLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${dropdownTokens.itemFontLineHeight}: var(--plasma-typo-body-m-line-height);
            `,
            l: css`
                ${dropdownTokens.padding}: 0.125rem;
                ${dropdownTokens.width}: 17.5rem;
                ${dropdownTokens.borderRadius}: 0.875rem;

                ${dropdownTokens.itemPaddingTop}: 1.0625rem;
                ${dropdownTokens.itemPaddingRight}: 1rem;
                ${dropdownTokens.itemPaddingBottom}: 1.0625rem;
                ${dropdownTokens.itemPaddingLeft}: 1rem;
                ${dropdownTokens.itemBorderRadius}: 0.75rem;
                ${dropdownTokens.itemPaddingTopTight}: 0.8125rem;
                ${dropdownTokens.itemPaddingBottomTight}: 0.8125rem;

                ${dropdownTokens.itemFontFamily}: var(--plasma-typo-body-l-font-family);
                ${dropdownTokens.itemFontSize}: var(--plasma-typo-body-l-font-size);
                ${dropdownTokens.itemFontStyle}: var(--plasma-typo-body-l-font-style);
                ${dropdownTokens.itemFontWeightBold}: var(--plasma-typo-body-l-font-weight);
                ${dropdownTokens.itemFontLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${dropdownTokens.itemFontLineHeight}: var(--plasma-typo-body-l-line-height);
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
