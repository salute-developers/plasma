import { css } from '@linaria/core';

import { tokens } from '../../Select.tokens';
import { dropdownTokens } from '../../../Dropdown';

// NOTE: Необходимое переопределение токенов из компонента DropdownItem т.к. используются его части
export const mappingOverride = css`
    ${dropdownTokens.footerBackground}: var(${tokens.footerBackground});
    ${dropdownTokens.footerWidth}: var(${tokens.footerWidth});
    ${dropdownTokens.footerHeight}: var(${tokens.footerHeight});
    ${dropdownTokens.footerPaddingTop}: var(${tokens.footerPaddingTop});
    ${dropdownTokens.footerPaddingRight}: var(${tokens.footerPaddingRight});
    ${dropdownTokens.footerPaddingBottom}: var(${tokens.footerPaddingBottom});
    ${dropdownTokens.footerPaddingLeft}: var(${tokens.footerPaddingLeft});
    ${dropdownTokens.footerMarginTop}: var(${tokens.footerMarginTop});
    ${dropdownTokens.footerMarginRight}: var(${tokens.footerMarginRight});
    ${dropdownTokens.footerMarginBottom}: var(${tokens.footerMarginBottom});
    ${dropdownTokens.footerMarginLeft}: var(${tokens.footerMarginLeft});
    ${dropdownTokens.footerFontFamily}: var(${tokens.footerFontFamily});
    ${dropdownTokens.footerFontSize}: var(${tokens.footerFontSize});
    ${dropdownTokens.footerFontStyle}: var(${tokens.footerFontStyle});
    ${dropdownTokens.footerFontWeightBold}: var(${tokens.footerFontWeightBold});
    ${dropdownTokens.footerFontLetterSpacing}: var(${tokens.footerFontLetterSpacing});
    ${dropdownTokens.footerFontLineHeight}: var(${tokens.footerFontLineHeight});
`;

export const base = mappingOverride;
