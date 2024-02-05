import { css } from '@linaria/core';

import { tokens } from '../../Combobox.tokens';
import { dropdownTokens } from '../../../Dropdown';

// NOTE: Необходимое переопределение токенов из компонента DropdownItem т.к. используются его части
export const mappingOverride = css`
    ${dropdownTokens.headerBackground}: var(${tokens.headerBackground});
    ${dropdownTokens.headerWidth}: var(${tokens.headerWidth});
    ${dropdownTokens.headerHeight}: var(${tokens.headerHeight});
    ${dropdownTokens.headerPaddingTop}: var(${tokens.headerPaddingTop});
    ${dropdownTokens.headerPaddingRight}: var(${tokens.headerPaddingRight});
    ${dropdownTokens.headerPaddingBottom}: var(${tokens.headerPaddingBottom});
    ${dropdownTokens.headerPaddingLeft}: var(${tokens.headerPaddingLeft});
    ${dropdownTokens.headerMarginTop}: var(${tokens.headerMarginTop});
    ${dropdownTokens.headerMarginRight}: var(${tokens.headerMarginRight});
    ${dropdownTokens.headerMarginBottom}: var(${tokens.headerMarginBottom});
    ${dropdownTokens.headerMarginLeft}: var(${tokens.headerMarginLeft});
    ${dropdownTokens.headerFontFamily}: var(${tokens.headerFontFamily});
    ${dropdownTokens.headerFontSize}: var(${tokens.headerFontSize});
    ${dropdownTokens.headerFontStyle}: var(${tokens.headerFontStyle});
    ${dropdownTokens.headerFontWeightBold}: var(${tokens.headerFontWeightBold});
    ${dropdownTokens.headerFontLetterSpacing}: var(${tokens.headerFontLetterSpacing});
    ${dropdownTokens.headerFontLineHeight}: var(${tokens.headerFontLineHeight});
`;

export const base = mappingOverride;
