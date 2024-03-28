import { styled } from '@linaria/react';

import { selectConfig, selectTokens, selectItemConfig } from '../../../Select';
import { component, mergeConfig } from '../../../../engines';
import { tokens } from '../../Pagination.tokens';

const mergedSelectConfig = mergeConfig(selectConfig);
const Select = component(mergedSelectConfig);

const mergedItemConfig = mergeConfig(selectItemConfig);
export const SelectItem = component(mergedItemConfig);

export const SelectPerPageRoot = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

export const SelectPerPageSelect = styled(Select)`
    ${selectTokens.targetColor}: var(${tokens.buttonColor});
    ${selectTokens.targetLabelColor}: var(${tokens.buttonColor});
    ${selectTokens.targetArrowColor}: var(${tokens.buttonColor});
    ${selectTokens.targetBackgroundColor}: var(${tokens.buttonBackgroundColor});
    ${selectTokens.targetBackgroundColorHover}: var(${tokens.buttonHoverBackgroundColor});
    ${selectTokens.targetBackgroundColorActive}: var(${tokens.buttonActiveBackgroundColor});
    ${selectTokens.targetBackgroundColorOpen}: var(${tokens.buttonHoverBackgroundColor});
    ${selectTokens.targetFontWeight}: var(${tokens.paginationFontWeight}) !important; /* TODO: Переделать когда появится возможность пересечения свойств */

    ${selectTokens.targetArrowRight}: var(${tokens.selectTargetArrowRight});
    ${selectTokens.targetHeight}: var(${tokens.buttonHeight});
    ${selectTokens.targetWidth}: var(${tokens.selectTargetWidth});
    ${selectTokens.targetRadius}: var(${tokens.buttonRadius});
    ${selectTokens.targetPadding}: var(${tokens.selectTargetPadding});
    ${selectTokens.targetPaddingHasChips}: var(${tokens.selectTargetPaddingHasChips});
    ${selectTokens.targetPaddingWithInput}: var(${tokens.selectTargetPaddingWithInput});
    ${selectTokens.targetInnerTop}: var(${tokens.selectTargetInnerTop});
    ${selectTokens.targetLabelInnerTop}: var(${tokens.selectTargetLabelInnerTop});
    ${selectTokens.targetFontFamily}: var(${tokens.paginationFontFamily});
    ${selectTokens.targetFontSize}: var(${tokens.paginationFontSize});
    ${selectTokens.targetFontStyle}: var(${tokens.paginationFontStyle});
    ${selectTokens.targetFontWeight}: var(${tokens.paginationFontWeight});
    ${selectTokens.targetLabelInnerFontFamily}: var(${tokens.paginationFontFamily});
    ${selectTokens.targetLabelInnerFontSize}: var(${tokens.paginationFontSize});
    ${selectTokens.targetLabelInnerFontStyle}: var(${tokens.paginationFontStyle});
    ${selectTokens.targetLabelInnerFontWeight}: var(${tokens.paginationFontWeight});

    ${selectTokens.width}: var(${tokens.selectWidth});
    ${selectTokens.height}: var(${tokens.selectHeight});
    ${selectTokens.borderRadius}: var(${tokens.buttonRadius});
    ${selectTokens.paddingTop}: var(${tokens.selectPaddingTop});
    ${selectTokens.paddingRight}: var(${tokens.selectPaddingRight});
    ${selectTokens.paddingBottom}: var(${tokens.selectPaddingBottom});
    ${selectTokens.paddingLeft}: var(${tokens.selectPaddingLeft});

    ${selectTokens.background}: var(${tokens.selectBackgroundColor});
    ${selectTokens.boxShadow}: var(--shadow-down-soft-s);
`;

export const SelectPerPageSelectItem = styled(SelectItem)`
    ${selectTokens.itemWidth}: var(${tokens.selectItemWidth});
    ${selectTokens.itemHeight}: var(${tokens.selectItemHeight});
    ${selectTokens.itemPaddingTop}: var(${tokens.selectItemPaddingTop});
    ${selectTokens.itemPaddingRight}: var(${tokens.selectItemPaddingRight});
    ${selectTokens.itemPaddingBottom}: var(${tokens.selectItemPaddingBottom});
    ${selectTokens.itemPaddingLeft}: var(${tokens.selectItemPaddingLeft});
    ${selectTokens.itemBorderRadius}: var(${tokens.buttonRadius});
    ${selectTokens.itemContentLeftWidth}: var(${tokens.selectItemContentLeftWidth});
    ${selectTokens.itemFontFamily}: var(${tokens.paginationFontFamily});
    ${selectTokens.itemFontSize}: var(${tokens.paginationFontSize});
    ${selectTokens.itemFontStyle}: var(${tokens.paginationFontStyle});
    ${selectTokens.itemFontWeightBold}: var(${tokens.paginationFontWeight});
    ${selectTokens.itemFontLetterSpacing}: var(${tokens.paginationLetterSpacing});
    ${selectTokens.itemFontLineHeight}: var(${tokens.paginationLineHeight});

    ${selectTokens.itemBackground}: var(${tokens.selectItemBackground});
    ${selectTokens.itemBackgroundHover}: var(${tokens.buttonHoverBackgroundColor});
    ${selectTokens.itemBackgroundSelectedHover}: var(${tokens.buttonActiveBackgroundColor});
    ${selectTokens.itemColor}: var(${tokens.buttonColor});
    ${selectTokens.itemContentLeftColor}: var(${tokens.buttonColor});

    ${selectTokens.itemBackgroundSelected}: var(${tokens.buttonHoverBackgroundColor});
    ${selectTokens.itemColorSelected}: var(${tokens.buttonColor});
`;

export const SelectPerPageTypography = styled.div`
    font-family: var(${tokens.paginationFontFamily});
    font-size: var(${tokens.paginationFontSize});
    font-style: var(${tokens.paginationFontStyle});
    font-weight: var(${tokens.paginationFontWeight});
    letter-spacing: var(${tokens.paginationLetterSpacing});
    line-height: var(${tokens.paginationLineHeight});
`;
