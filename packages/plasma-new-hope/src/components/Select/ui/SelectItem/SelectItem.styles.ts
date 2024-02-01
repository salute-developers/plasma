import { css } from '@linaria/core';

import { cx } from '../../../../utils';
import { tokens } from '../../Select.tokens';
import { dropdownTokens } from '../../../Dropdown';
import { base as dropdownItemBase } from '../../../Dropdown/ui/DropdownItem/DropdownItem.styles';

// NOTE: Необходимое переопределение токенов из компонента DropdownItem т.к. используются его части
export const mappingOverride = css`
    ${dropdownTokens.itemBackground}: var(${tokens.itemBackground});
    ${dropdownTokens.itemColor}: var(${tokens.itemColor});
    ${dropdownTokens.itemBackgroundHover}: var(${tokens.itemBackgroundHover});
    ${dropdownTokens.itemBackgroundSelected}: var(${tokens.itemBackgroundSelected});
    ${dropdownTokens.itemColorSelected}: var(${tokens.itemColorSelected});
    ${dropdownTokens.itemBackgroundSelectedHover}: var(${tokens.itemBackgroundSelectedHover});
    ${dropdownTokens.itemColorSelectedHover}: var(${tokens.itemColorSelectedHover});
    ${dropdownTokens.itemContentLeftColor}: var(${tokens.itemContentLeftColor});
    ${dropdownTokens.itemContentRightColor}: var(${tokens.itemContentRightColor});
    ${dropdownTokens.disabledOpacity}: var(${tokens.disabledOpacity});
    ${dropdownTokens.focusColor}: var(${tokens.focusColor});
    ${dropdownTokens.itemWidth}: var(${tokens.itemWidth});
    ${dropdownTokens.itemHeight}: var(${tokens.itemHeight});
    ${dropdownTokens.itemBorderRadius}: var(${tokens.itemBorderRadius});
    ${dropdownTokens.itemPaddingTop}: var(${tokens.itemPaddingTop});
    ${dropdownTokens.itemPaddingRight}: var(${tokens.itemPaddingRight});
    ${dropdownTokens.itemPaddingBottom}: var(${tokens.itemPaddingBottom});
    ${dropdownTokens.itemPaddingLeft}: var(${tokens.itemPaddingLeft});
    ${dropdownTokens.itemMarginTop}: var(${tokens.itemMarginTop});
    ${dropdownTokens.itemMarginRight}: var(${tokens.itemMarginRight});
    ${dropdownTokens.itemMarginBottom}: var(${tokens.itemMarginBottom});
    ${dropdownTokens.itemMarginLeft}: var(${tokens.itemMarginLeft});
    ${dropdownTokens.itemFontFamily}: var(${tokens.itemFontFamily});
    ${dropdownTokens.itemFontSize}: var(${tokens.itemFontSize});
    ${dropdownTokens.itemFontStyle}: var(${tokens.itemFontStyle});
    ${dropdownTokens.itemFontWeightBold}: var(${tokens.itemFontWeightBold});
    ${dropdownTokens.itemFontLetterSpacing}: var(${tokens.itemFontLetterSpacing});
    ${dropdownTokens.itemFontLineHeight}: var(${tokens.itemFontLineHeight});
    ${dropdownTokens.itemContentLeftWidth}: var(${tokens.itemContentLeftWidth});
    ${dropdownTokens.itemContentRightWidth}: var(${tokens.itemContentRightWidth});
`;

export const base = cx(mappingOverride, dropdownItemBase);
