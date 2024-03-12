import { styled } from '@linaria/react';

import { selectConfig, selectTokens, selectItemConfig } from '../../../Select';
import { component, mergeConfig } from '../../../../engines';
import { tokens } from '../../Pagination.tokens';

const mergedSelectConfig = mergeConfig(selectConfig);
const Select = component(mergedSelectConfig);

const mergedItemConfig = mergeConfig(selectItemConfig);
export const SelectItem = component(mergedItemConfig);

export const PaginationSelectPerPageRoot = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

export const PaginationSelectPerPageSelect = styled(Select)`
    ${selectTokens.targetColor}: var(${tokens.paginationButtonColor});
    ${selectTokens.targetLabelColor}: var(${tokens.paginationButtonColor});
    ${selectTokens.targetArrowColor}: var(${tokens.paginationButtonColor});
    ${selectTokens.targetBackgroundColor}: var(${tokens.paginationButtonBackgroundColor});
    ${selectTokens.targetBackgroundColorHover}: var(${tokens.paginationButtonHoverBackgroundColor});
    ${selectTokens.targetBackgroundColorActive}: var(${tokens.paginationButtonActiveBackgroundColor});
    ${selectTokens.targetBackgroundColorOpen}: var(${tokens.paginationButtonHoverBackgroundColor});
    ${selectTokens.targetFontWeight}: var(${tokens.paginationFontWeight}) !important; /* TODO: Переделать когда появится возможность пересечения свойств */

    ${selectTokens.targetArrowRight}: var(${tokens.paginationSelectTargetArrowRight});
    ${selectTokens.targetHeight}: var(${tokens.paginationButtonHeight});
    ${selectTokens.targetWidth}: var(${tokens.paginationSelectTargetWidth});
    ${selectTokens.targetRadius}: var(${tokens.paginationButtonRadius});
    ${selectTokens.targetPadding}: var(${tokens.paginationSelectTargetPadding});
    ${selectTokens.targetPaddingHasChips}: var(${tokens.paginationSelectTargetPaddingHasChips});
    ${selectTokens.targetPaddingWithInput}: var(${tokens.paginationSelectTargetPaddingWithInput});
    ${selectTokens.targetInnerTop}: var(${tokens.paginationSelectTargetInnerTop});
    ${selectTokens.targetLabelInnerTop}: var(${tokens.paginationSelectTargetLabelInnerTop});
    ${selectTokens.targetFontFamily}: var(${tokens.paginationFontFamily});
    ${selectTokens.targetFontSize}: var(${tokens.paginationFontSize});
    ${selectTokens.targetFontStyle}: var(${tokens.paginationFontStyle});
    ${selectTokens.targetFontWeight}: var(${tokens.paginationFontWeight});
    ${selectTokens.targetLabelInnerFontFamily}: var(${tokens.paginationFontFamily});
    ${selectTokens.targetLabelInnerFontSize}: var(${tokens.paginationFontSize});
    ${selectTokens.targetLabelInnerFontStyle}: var(${tokens.paginationFontStyle});
    ${selectTokens.targetLabelInnerFontWeight}: var(${tokens.paginationFontWeight});

    ${selectTokens.width}: var(${tokens.paginationSelectWidth});
    ${selectTokens.height}: var(${tokens.paginationSelectHeight});
    ${selectTokens.borderRadius}: var(${tokens.paginationButtonRadius});
    ${selectTokens.paddingTop}: var(${tokens.paginationSelectPaddingTop});
    ${selectTokens.paddingRight}: var(${tokens.paginationSelectPaddingRight});
    ${selectTokens.paddingBottom}: var(${tokens.paginationSelectPaddingBottom});
    ${selectTokens.paddingLeft}: var(${tokens.paginationSelectPaddingLeft});

    ${selectTokens.background}: var(--surface-solid-card);
    ${selectTokens.boxShadow}: var(--shadow-down-soft-s);
`;

export const PaginationSelectPerPageSelectItem = styled(SelectItem)`
    ${selectTokens.itemWidth}: var(${tokens.paginationSelectItemWidth});
    ${selectTokens.itemHeight}: var(${tokens.paginationSelectItemHeight});
    ${selectTokens.itemPaddingTop}: var(${tokens.paginationSelectItemPaddingTop});
    ${selectTokens.itemPaddingRight}: var(${tokens.paginationSelectItemPaddingRight});
    ${selectTokens.itemPaddingBottom}: var(${tokens.paginationSelectItemPaddingBottom});
    ${selectTokens.itemPaddingLeft}: var(${tokens.paginationSelectItemPaddingLeft});
    ${selectTokens.itemBorderRadius}: var(${tokens.paginationButtonRadius});
    ${selectTokens.itemContentLeftWidth}: var(${tokens.paginationSelectItemContentLeftWidth});
    ${selectTokens.itemFontFamily}: var(${tokens.paginationFontFamily});
    ${selectTokens.itemFontSize}: var(${tokens.paginationFontSize});
    ${selectTokens.itemFontStyle}: var(${tokens.paginationFontStyle});
    ${selectTokens.itemFontWeightBold}: var(${tokens.paginationFontWeight});

    ${selectTokens.itemBackground}: var(${tokens.paginationSelectItemBackground});
    ${selectTokens.itemBackgroundHover}: var(${tokens.paginationButtonHoverBackgroundColor});
    ${selectTokens.itemBackgroundSelectedHover}: var(${tokens.paginationButtonActiveBackgroundColor});
    ${selectTokens.itemColor}: var(${tokens.paginationButtonColor});
    ${selectTokens.itemContentLeftColor}: var(${tokens.paginationButtonColor});
`;

export const PaginationSelectPerPageTypography = styled.div`
    font-family: var(${tokens.paginationFontFamily});
    font-size: var(${tokens.paginationFontSize});
    font-style: var(${tokens.paginationFontStyle});
    font-weight: var(${tokens.paginationFontWeight});
`;
