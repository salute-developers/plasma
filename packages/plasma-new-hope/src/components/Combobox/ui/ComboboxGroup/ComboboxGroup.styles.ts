import { css } from '@linaria/core';

import { tokens } from '../../Combobox.tokens';
import { dropdownTokens } from '../../../Dropdown';

// NOTE: Необходимое переопределение токенов из компонента DropdownItem т.к. используются его части
export const mappingOverride = css`
    ${dropdownTokens.groupBackground}: var(${tokens.groupBackground});
    ${dropdownTokens.groupWidth}: var(${tokens.groupWidth});
    ${dropdownTokens.groupHeight}: var(${tokens.groupHeight});
    ${dropdownTokens.groupPaddingTop}: var(${tokens.groupPaddingTop});
    ${dropdownTokens.groupPaddingRight}: var(${tokens.groupPaddingRight});
    ${dropdownTokens.groupPaddingBottom}: var(${tokens.groupPaddingBottom});
    ${dropdownTokens.groupPaddingLeft}: var(${tokens.groupPaddingLeft});
    ${dropdownTokens.groupMarginTop}: var(${tokens.groupMarginTop});
    ${dropdownTokens.groupMarginRight}: var(${tokens.groupMarginRight});
    ${dropdownTokens.groupMarginBottom}: var(${tokens.groupMarginBottom});
    ${dropdownTokens.groupMarginLeft}: var(${tokens.groupMarginLeft});
    ${dropdownTokens.groupLabelFontFamily}: var(${tokens.groupLabelFontFamily});
    ${dropdownTokens.groupLabelFontSize}: var(${tokens.groupLabelFontSize});
    ${dropdownTokens.groupLabelFontStyle}: var(${tokens.groupLabelFontStyle});
    ${dropdownTokens.groupLabelFontWeight}: var(${tokens.groupLabelFontWeight});
    ${dropdownTokens.groupLabelLetterSpacing}: var(${tokens.groupLabelLetterSpacing});
    ${dropdownTokens.groupLabelLineHeight}: var(${tokens.groupLabelLineHeight});
    ${dropdownTokens.groupLabelColor}: var(${tokens.groupLabelColor});
    ${dropdownTokens.groupLabelPaddingTop}: var(${tokens.groupLabelPaddingTop});
    ${dropdownTokens.groupLabelPaddingRight}: var(${tokens.groupLabelPaddingRight});
    ${dropdownTokens.groupLabelPaddingBottom}: var(${tokens.groupLabelPaddingBottom});
    ${dropdownTokens.groupLabelPaddingLeft}: var(${tokens.groupLabelPaddingLeft});
    ${dropdownTokens.groupLabelMarginTop}: var(${tokens.groupLabelMarginTop});
    ${dropdownTokens.groupLabelMarginRight}: var(${tokens.groupLabelMarginRight});
    ${dropdownTokens.groupLabelMarginBottom}: var(${tokens.groupLabelMarginBottom});
    ${dropdownTokens.groupLabelMarginLeft}: var(${tokens.groupLabelMarginLeft});
`;

export const base = mappingOverride;
