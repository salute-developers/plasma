import { css, dropdownTokens } from '@salutejs/plasma-new-hope/styled-components';

const dropdownSizeCommon = `
    ${dropdownTokens.width}: 12.5rem;
    ${dropdownTokens.height}: auto;
    ${dropdownTokens.borderRadius}: 0.5rem;
    ${dropdownTokens.paddingTop}: 0.125rem;
    ${dropdownTokens.paddingRight}: 0.0625rem;
    ${dropdownTokens.paddingBottom}: 0.125rem;
    ${dropdownTokens.paddingLeft}: 0.125rem;
`;

const dropdownItemSizeCommon = `
    ${dropdownTokens.itemWidth}: auto;
    ${dropdownTokens.itemHeight}: auto;
    ${dropdownTokens.itemMarginTop}: 0;
    ${dropdownTokens.itemMarginRight}: 0;
    ${dropdownTokens.itemMarginBottom}: 0;
    ${dropdownTokens.itemMarginLeft}: 0;
`;

export const config = {
    defaults: {
        view: 'primary',
        size: 'm',
    },
    variations: {
        size: {
            xs: css`
                ${dropdownSizeCommon};

                ${dropdownItemSizeCommon};
                ${dropdownTokens.itemPaddingTop}: 0.5625rem;
                ${dropdownTokens.itemPaddingRight}: 0.5rem;
                ${dropdownTokens.itemPaddingBottom}: 0.5625rem;
                ${dropdownTokens.itemPaddingLeft}: 0.5rem;
                ${dropdownTokens.itemBorderRadius}: 0.375rem;

                ${dropdownTokens.itemFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${dropdownTokens.itemFontSize}: var(--plasma-typo-body-xs-font-size);
                ${dropdownTokens.itemFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${dropdownTokens.itemFontWeightBold}: var(--plasma-typo-body-xs-font-weight);
                ${dropdownTokens.itemFontLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${dropdownTokens.itemFontLineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
            s: css`
                ${dropdownSizeCommon};

                ${dropdownItemSizeCommon};
                ${dropdownTokens.itemPaddingTop}: 0.6875rem;
                ${dropdownTokens.itemPaddingRight}: 0.75rem;
                ${dropdownTokens.itemPaddingBottom}: 0.6875rem;
                ${dropdownTokens.itemPaddingLeft}: 0.75rem;
                ${dropdownTokens.itemBorderRadius}: 0.5rem;

                ${dropdownTokens.itemFontFamily}: var(--plasma-typo-body-s-font-family);
                ${dropdownTokens.itemFontSize}: var(--plasma-typo-body-s-font-size);
                ${dropdownTokens.itemFontStyle}: var(--plasma-typo-body-s-font-style);
                ${dropdownTokens.itemFontWeightBold}: var(--plasma-typo-body-s-font-weight);
                ${dropdownTokens.itemFontLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${dropdownTokens.itemFontLineHeight}: var(--plasma-typo-body-s-line-height);
            `,
            m: css`
                ${dropdownSizeCommon};

                ${dropdownItemSizeCommon};
                ${dropdownTokens.itemPaddingTop}: 0.875rem;
                ${dropdownTokens.itemPaddingRight}: 0.875rem;
                ${dropdownTokens.itemPaddingBottom}: 0.875rem;
                ${dropdownTokens.itemPaddingLeft}: 0.875rem;
                ${dropdownTokens.itemBorderRadius}: 0.625rem;

                ${dropdownTokens.itemFontFamily}: var(--plasma-typo-body-m-font-family);
                ${dropdownTokens.itemFontSize}: var(--plasma-typo-body-m-font-size);
                ${dropdownTokens.itemFontStyle}: var(--plasma-typo-body-m-font-style);
                ${dropdownTokens.itemFontWeightBold}: var(--plasma-typo-body-m-font-weight);
                ${dropdownTokens.itemFontLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${dropdownTokens.itemFontLineHeight}: var(--plasma-typo-body-m-line-height);
            `,
            l: css`
                ${dropdownSizeCommon};

                ${dropdownItemSizeCommon};
                ${dropdownTokens.itemPaddingTop}: 1.0625rem;
                ${dropdownTokens.itemPaddingRight}: 1rem;
                ${dropdownTokens.itemPaddingBottom}: 1.0625rem;
                ${dropdownTokens.itemPaddingLeft}: 1rem;
                ${dropdownTokens.itemBorderRadius}: 0.75rem;

                ${dropdownTokens.itemFontFamily}: var(--plasma-typo-body-l-font-family);
                ${dropdownTokens.itemFontSize}: var(--plasma-typo-body-l-font-size);
                ${dropdownTokens.itemFontStyle}: var(--plasma-typo-body-l-font-style);
                ${dropdownTokens.itemFontWeightBold}: var(--plasma-typo-body-l-font-weight);
                ${dropdownTokens.itemFontLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${dropdownTokens.itemFontLineHeight}: var(--plasma-typo-body-l-line-height);
            `,
        },
        view: {
            primary: css`
                ${dropdownTokens.disabledOpacity}: 0.4;
                ${dropdownTokens.background}: var(--surface-solid-card);
                ${dropdownTokens.boxShadow}: var(--shadow-down-soft-s);

                ${dropdownTokens.itemBackground}: var(--plasma-colors-transparent);
                ${dropdownTokens.itemBackgroundHover}: var(--surface-transparent-secondary);
                ${dropdownTokens.itemBackgroundSelected}: inherit;
                ${dropdownTokens.itemColorSelected}: inherit;
                ${dropdownTokens.itemBackgroundSelectedHover}: inherit;
                ${dropdownTokens.itemColorSelectedHover}: inherit;
                ${dropdownTokens.itemColor}: var(--text-primary);
            `,
        },
    },
};
