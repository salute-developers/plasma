import {
    bodyL,
    bodyM,
    bodyS,
    bodyXS,
    surfaceSolidCardBrightness,
    surfaceTransparentSecondary,
    textPrimary,
} from '@salutejs/plasma-themes/tokens/plasma_b2c';
import { css, dropdownOldTokens as dropdownTokens } from '@salutejs/plasma-new-hope/styled-components';

const dropdownSizeCommon = `
    ${dropdownTokens.width}: 100%;
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
        view: 'default',
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

                ${dropdownTokens.itemFontFamily}: ${bodyXS.fontFamily};
                ${dropdownTokens.itemFontSize}: ${bodyXS.fontSize};
                ${dropdownTokens.itemFontStyle}: ${bodyXS.fontStyle};
                ${dropdownTokens.itemFontWeightBold}: ${bodyXS.fontWeight};
                ${dropdownTokens.itemFontLetterSpacing}: ${bodyXS.letterSpacing};
                ${dropdownTokens.itemFontLineHeight}: ${bodyXS.lineHeight};
            `,
            s: css`
                ${dropdownSizeCommon};

                ${dropdownItemSizeCommon};
                ${dropdownTokens.itemPaddingTop}: 0.6875rem;
                ${dropdownTokens.itemPaddingRight}: 0.75rem;
                ${dropdownTokens.itemPaddingBottom}: 0.6875rem;
                ${dropdownTokens.itemPaddingLeft}: 0.75rem;
                ${dropdownTokens.itemBorderRadius}: 0.5rem;

                ${dropdownTokens.itemFontFamily}: ${bodyS.fontFamily};
                ${dropdownTokens.itemFontSize}: ${bodyS.fontSize};
                ${dropdownTokens.itemFontStyle}: ${bodyS.fontStyle};
                ${dropdownTokens.itemFontWeightBold}: ${bodyS.fontWeight};
                ${dropdownTokens.itemFontLetterSpacing}: ${bodyS.letterSpacing};
                ${dropdownTokens.itemFontLineHeight}: ${bodyS.lineHeight};
            `,
            m: css`
                ${dropdownSizeCommon};

                ${dropdownItemSizeCommon};
                ${dropdownTokens.itemPaddingTop}: 0.875rem;
                ${dropdownTokens.itemPaddingRight}: 0.875rem;
                ${dropdownTokens.itemPaddingBottom}: 0.875rem;
                ${dropdownTokens.itemPaddingLeft}: 0.875rem;
                ${dropdownTokens.itemBorderRadius}: 0.625rem;

                ${dropdownTokens.itemFontFamily}: ${bodyM.fontFamily};
                ${dropdownTokens.itemFontSize}: ${bodyM.fontSize};
                ${dropdownTokens.itemFontStyle}: ${bodyM.fontStyle};
                ${dropdownTokens.itemFontWeightBold}: ${bodyM.fontWeight};
                ${dropdownTokens.itemFontLetterSpacing}: ${bodyM.letterSpacing};
                ${dropdownTokens.itemFontLineHeight}: ${bodyM.lineHeight};
            `,
            l: css`
                ${dropdownSizeCommon};

                ${dropdownItemSizeCommon};
                ${dropdownTokens.itemPaddingTop}: 1.0625rem;
                ${dropdownTokens.itemPaddingRight}: 1rem;
                ${dropdownTokens.itemPaddingBottom}: 1.0625rem;
                ${dropdownTokens.itemPaddingLeft}: 1rem;
                ${dropdownTokens.itemBorderRadius}: 0.75rem;

                ${dropdownTokens.itemFontFamily}: ${bodyL.fontFamily};
                ${dropdownTokens.itemFontSize}: ${bodyL.fontSize};
                ${dropdownTokens.itemFontStyle}: ${bodyL.fontStyle};
                ${dropdownTokens.itemFontWeightBold}: ${bodyL.fontWeight};
                ${dropdownTokens.itemFontLetterSpacing}: ${bodyL.letterSpacing};
                ${dropdownTokens.itemFontLineHeight}: ${bodyL.lineHeight};
            `,
        },
        view: {
            default: css`
                ${dropdownTokens.disabledOpacity}: 0.4;
                ${dropdownTokens.background}: ${surfaceSolidCardBrightness};
                // TODO: #1131 Вернуть токен --shadow-down-soft-s
                ${dropdownTokens.boxShadow}: 0px 4px 14px -4px rgba(8, 8, 8, 0.08), 0px 1px 4px -1px rgba(0, 0, 0, 0.04);

                ${dropdownTokens.itemBackground}: transparent;
                ${dropdownTokens.itemBackgroundHover}: ${surfaceTransparentSecondary};
                ${dropdownTokens.itemBackgroundSelected}: inherit;
                ${dropdownTokens.itemColorSelected}: inherit;
                ${dropdownTokens.itemBackgroundSelectedHover}: inherit;
                ${dropdownTokens.itemColorSelectedHover}: inherit;
                ${dropdownTokens.itemColor}: ${textPrimary};
            `,
        },
    },
};
