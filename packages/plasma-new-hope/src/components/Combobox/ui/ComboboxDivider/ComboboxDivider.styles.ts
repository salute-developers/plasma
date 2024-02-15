import { css } from '@linaria/core';

import { tokens } from '../../Combobox.tokens';
import { dropdownTokens } from '../../../Dropdown';

// NOTE: Необходимое переопределение токенов из компонента DropdownItem т.к. используются его части
export const mappingOverride = css`
    ${dropdownTokens.dividerColor}: var(${tokens.dividerColor});
    ${dropdownTokens.dividerWidth}: var(${tokens.dividerWidth});
    ${dropdownTokens.dividerHeight}: var(${tokens.dividerHeight});
    ${dropdownTokens.dividerMarginTop}: var(${tokens.dividerMarginTop});
    ${dropdownTokens.dividerMarginRight}: var(${tokens.dividerMarginRight});
    ${dropdownTokens.dividerMarginBottom}: var(${tokens.dividerMarginBottom});
    ${dropdownTokens.dividerMarginLeft}: var(${tokens.dividerMarginLeft});
`;

export const base = mappingOverride;
