import { styled } from '@linaria/react';

import { component, mergeConfig } from '../../../../../../engines';
import { selectConfig, selectTokens } from '../../../../../Select';
import { indicatorConfig, indicatorTokens } from '../../../../../Indicator';
import { tableTokens as tokens } from '../../../../Table.tokens';
import { StyledCheckbox as Checkbox, StyledDivider as Divider } from '../../../../Table.styles';

const SelectBase = component(selectConfig);
export const Select = styled(SelectBase)`
    ${selectTokens.padding}: var(${tokens.selectPadding});
    ${selectTokens.borderRadius}: var(${tokens.selectBorderRadius});
    ${selectTokens.itemHeight}: var(${tokens.selectItemHeight});
    ${selectTokens.itemPadding}: var(${tokens.selectItemPadding});
    ${selectTokens.itemBorderRadius}: var(${tokens.selectItemBorderRadius});
    ${selectTokens.itemIconMargin}: var(${tokens.selectItemIconMargin});
    ${selectTokens.itemIconSize}: var(${tokens.selectItemIconSize});
    ${selectTokens.cellPadding}: var(${tokens.selectCellPadding});
    ${selectTokens.cellTitleFontFamily}: var(${tokens.selectCellTitleFontFamily});
    ${selectTokens.cellTitleFontSize}: var(${tokens.selectCellTitleFontSize});
    ${selectTokens.cellTitleFontStyle}: var(${tokens.selectCellTitleFontStyle});
    ${selectTokens.cellTitleFontWeight}: var(${tokens.selectCellTitleFontWeight});
    ${selectTokens.cellTitleLetterSpacing}: var(${tokens.selectCellTitleLetterSpacing});
    ${selectTokens.cellTitleLineHeight}: var(${tokens.selectCellTitleLineHeight});
    ${selectTokens.checkboxTriggerSize}: var(${tokens.selectCheckboxTriggerSize});
    ${selectTokens.checkboxTriggerBorderRadius}: var(${tokens.selectCheckboxTriggerBorderRadius});
    ${selectTokens.checkboxFillColor}: var(--text-accent);
    ${selectTokens.checkboxIconColor}: var(--on-dark-text-primary);
    ${selectTokens.checkboxTriggerBorderColor}: var(--text-secondary);
`;

const mergedIndicatorConfig = mergeConfig(indicatorConfig);
const Indicator = component(mergedIndicatorConfig);

export const IconFilterWrapper = styled.div`
    position: relative;
    line-height: 0;
    cursor: pointer;
`;

export const StyledIndicator = styled(Indicator)`
    position: absolute;
    top: 2%;
    right: 3%;
    ${indicatorTokens.size}: 0.375rem;
    ${indicatorTokens.color}: var(--surface-accent);
`;

export const StyledCheckbox = styled(Checkbox)`
    padding: var(${tokens.filterCheckboxPadding});
`;

export const StyledDivider = styled(Divider)`
    margin: var(${tokens.filterDividerMargin});
`;

export const ControlPanel = styled.div`
    display: flex;
    justify-content: space-between;
    padding: var(${tokens.selectControlPanelPadding});
    gap: var(${tokens.selectControlPanelGap});
    user-select: none;
`;
