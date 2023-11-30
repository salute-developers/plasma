import { css } from '@linaria/core';

import { dropdownTokens } from '../../../../components/Dropdown';

export const config = {
    defaults: {
        view: 'primary',
        size: 'm',
    },
    variations: {
        size: {
            m: css`
                ${dropdownTokens.width}: 15rem;
                ${dropdownTokens.height}: auto;
                ${dropdownTokens.borderRadius}: 0;
                ${dropdownTokens.paddingTop}: 0.5rem;
                ${dropdownTokens.paddingRight}: 0;
                ${dropdownTokens.paddingBottom}: 0.5rem;
                ${dropdownTokens.paddingLeft}: 0;

                ${dropdownTokens.headerWidth}: auto;
                ${dropdownTokens.headerHeight}: 1.25rem;
                ${dropdownTokens.headerPaddingTop}: 0.5rem;
                ${dropdownTokens.headerPaddingRight}: 0.75rem;
                ${dropdownTokens.headerPaddingBottom}: 0.25rem;
                ${dropdownTokens.headerPaddingLeft}: 0.75rem;
                ${dropdownTokens.headerMarginTop}: 0;
                ${dropdownTokens.headerMarginRight}: 0;
                ${dropdownTokens.headerMarginBottom}: 0;
                ${dropdownTokens.headerMarginLeft}: 0;

                ${dropdownTokens.headerFontFamily}: var(--plasma-typo-body-m-font-family);
                ${dropdownTokens.headerFontSize}: var(--plasma-typo-body-m-font-size);
                ${dropdownTokens.headerFontStyle}: var(--plasma-typo-body-m-font-style);
                ${dropdownTokens.headerFontWeightBold}: var(--plasma-typo-body-m-font-weight);
                ${dropdownTokens.headerFontLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${dropdownTokens.headerFontLineHeight}: var(--plasma-typo-body-m-line-height);

                ${dropdownTokens.itemWidth}: auto;
                ${dropdownTokens.itemHeight}: auto;
                ${dropdownTokens.itemPaddingTop}: 0.3125rem;
                ${dropdownTokens.itemPaddingRight}: 0.75rem;
                ${dropdownTokens.itemPaddingBottom}: 0.4375rem;
                ${dropdownTokens.itemPaddingLeft}: 0.75rem;
                ${dropdownTokens.itemMarginTop}: 0;
                ${dropdownTokens.itemMarginRight}: 0;
                ${dropdownTokens.itemMarginBottom}: 0;
                ${dropdownTokens.itemMarginLeft}: 0;

                ${dropdownTokens.itemFontFamily}: var(--plasma-typo-body-m-font-family);
                ${dropdownTokens.itemFontSize}: var(--plasma-typo-body-m-font-size);
                ${dropdownTokens.itemFontStyle}: var(--plasma-typo-body-m-font-style);
                ${dropdownTokens.itemFontWeightBold}: var(--plasma-typo-body-m-font-weight);
                ${dropdownTokens.itemFontLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${dropdownTokens.itemFontLineHeight}: var(--plasma-typo-body-m-line-height);

                ${dropdownTokens.dividerWidth}: auto;
                ${dropdownTokens.dividerHeight}: 0.063rem;
                ${dropdownTokens.dividerMarginTop}: 0;
                ${dropdownTokens.dividerMarginRight}: 0;
                ${dropdownTokens.dividerMarginBottom}: 0;
                ${dropdownTokens.dividerMarginLeft}: 0;

                ${dropdownTokens.groupWidth}: auto;
                ${dropdownTokens.groupPaddingTop}: 0;
                ${dropdownTokens.groupPaddingRight}: 0;
                ${dropdownTokens.groupPaddingBottom}: 0;
                ${dropdownTokens.groupPaddingLeft}: 0;
                ${dropdownTokens.groupMarginTop}: 0;
                ${dropdownTokens.groupMarginRight}: 0;
                ${dropdownTokens.groupMarginBottom}: 0.25rem;
                ${dropdownTokens.groupMarginLeft}: 0;
                ${dropdownTokens.groupLabelPaddingTop}: 0.25rem;
                ${dropdownTokens.groupLabelPaddingRight}: 0.75rem;
                ${dropdownTokens.groupLabelPaddingBottom}: 0.5rem;
                ${dropdownTokens.groupLabelPaddingLeft}: 0.75rem;
                ${dropdownTokens.groupLabelMarginTop}: 0.25rem;
                ${dropdownTokens.groupLabelMarginRight}: 0;
                ${dropdownTokens.groupLabelMarginBottom}: 0;
                ${dropdownTokens.groupLabelMarginLeft}: 0;

                ${dropdownTokens.groupLabelFontFamily}: var(--plasma-typo-body-m-font-family);
                ${dropdownTokens.groupLabelFontSize}: var(--plasma-typo-body-m-font-size);
                ${dropdownTokens.groupLabelFontStyle}: var(--plasma-typo-body-m-font-style);
                ${dropdownTokens.groupLabelFontWeight}: var(--plasma-typo-body-m-bold-font-weight);
                ${dropdownTokens.groupLabelLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${dropdownTokens.groupLabelLineHeight}: var(--plasma-typo-body-m-line-height);

                ${dropdownTokens.footerWidth}: auto;
                ${dropdownTokens.footerHeight}: 1.25rem;
                ${dropdownTokens.footerPaddingTop}: 0.25rem;
                ${dropdownTokens.footerPaddingRight}: 0.75rem;
                ${dropdownTokens.footerPaddingBottom}: 0.5rem;
                ${dropdownTokens.footerPaddingLeft}: 0.75rem;
                ${dropdownTokens.footerMarginTop}: 0;
                ${dropdownTokens.footerMarginRight}: 0;
                ${dropdownTokens.footerMarginBottom}: 0;
                ${dropdownTokens.footerMarginLeft}: 0;

                ${dropdownTokens.footerFontFamily}: var(--plasma-typo-body-m-font-family);
                ${dropdownTokens.footerFontSize}: var(--plasma-typo-body-m-font-size);
                ${dropdownTokens.footerFontStyle}: var(--plasma-typo-body-m-font-style);
                ${dropdownTokens.footerFontWeightBold}: var(--plasma-typo-body-m-font-weight);
                ${dropdownTokens.footerFontLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${dropdownTokens.footerFontLineHeight}: var(--plasma-typo-body-m-line-height);
            `,
        },
        view: {
            primary: css`
                ${dropdownTokens.disabledOpacity}: 0.4;
                ${dropdownTokens.background}: var(--plasma-colors-white);
                ${dropdownTokens.boxShadow}: var(--shadow-down-soft-s);

                ${dropdownTokens.headerBackground}: var(--plasma-colors-transparent);

                ${dropdownTokens.itemBackground}: var(--plasma-colors-transparent);
                ${dropdownTokens.itemColor}: var(--on-light-text-primary);
                ${dropdownTokens.itemBackgroundHover}: rgba(12,143,230,0.12);
                ${dropdownTokens.itemBackgroundSelected}: var(--on-light-surface-transparent-secondary);
                ${dropdownTokens.itemColorSelected}: inherit;
                ${dropdownTokens.itemBackgroundSelectedHover}: var(--on-light-surface-transparent-secondary);
                ${dropdownTokens.itemColorSelectedHover}: inherit;

                ${dropdownTokens.dividerColor}: var(--plasma-colors-overlay-blur);

                ${dropdownTokens.footerBackground}: var(--plasma-colors-transparent);

                ${dropdownTokens.groupBackground}: var(--plasma-colors-transparent);
                ${dropdownTokens.groupLabelColor}: var(--on-light-text-primary);
            `,
        },
    },
};
