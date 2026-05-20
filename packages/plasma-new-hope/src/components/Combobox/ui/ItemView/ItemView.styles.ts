import styled from 'styled-components';
import { applyEllipsis } from 'src/mixins';
import { component, mergeConfig } from 'src/engines';
import { checkboxConfig, checkboxTokens } from 'src/components/Checkbox';
import { indicatorConfig, indicatorTokens } from 'src/components/Indicator';
import { cellConfig, cellTokens } from 'src/components/Cell';
import { IconDone } from 'src/components/_Icon';

import type { ComboboxProps } from '../../Combobox.types';
import { classes, tokens, constants } from '../../Combobox.tokens';

const mergedCheckboxConfig = mergeConfig(checkboxConfig);
const Checkbox = component(mergedCheckboxConfig);

const mergedCellConfig = mergeConfig(cellConfig);
const Cell = component(mergedCellConfig);

const mergedIndicatorConfig = mergeConfig(indicatorConfig);
const Indicator = component(mergedIndicatorConfig);

// TODO: #1548
export const StyledCell = styled(Cell)`
    ${cellTokens.cellTitleColor}: var(${constants.cellTitleColor});
    ${cellTokens.cellBackgroundColor}: var(${constants.cellBackgroundColor});
    ${cellTokens.cellPadding}: var(${tokens.cellPadding});
    ${cellTokens.cellPaddingLeftContent}: var(${tokens.cellPaddingLeftContent});
    ${cellTokens.cellPaddingContent}: var(${tokens.cellPaddingContent});
    ${cellTokens.cellPaddingRightContent}: var(${tokens.cellPaddingRightContent});
    ${cellTokens.cellTextboxGap}: var(${tokens.cellTextboxGap});
    ${cellTokens.cellGap}: var(${tokens.cellGap});
    ${cellTokens.cellTitleFontFamily}: var(${tokens.cellTitleFontFamily});
    ${cellTokens.cellTitleFontSize}: var(${tokens.cellTitleFontSize});
    ${cellTokens.cellTitleFontStyle}: var(${tokens.cellTitleFontStyle});
    ${cellTokens.cellTitleFontWeight}: var(${tokens.cellTitleFontWeight});
    ${cellTokens.cellTitleLetterSpacing}: var(${tokens.cellTitleLetterSpacing});
    ${cellTokens.cellTitleLineHeight}: var(${tokens.cellTitleLineHeight});

    flex: 1;
    min-width: 0;

    & * {
        min-width: 0;
    }

    &.${classes.singleLineMode} .cell-textbox-title {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        min-width: 0;
    }
`;

export const StyledCheckbox = styled(Checkbox)`
    ${checkboxTokens.triggerSize}: var(${tokens.checkboxTriggerSize});
    ${checkboxTokens.triggerBorderRadius}: var(${tokens.checkboxTriggerBorderRadius});
    ${checkboxTokens.fillColor}: var(${tokens.checkboxFillColor});
    ${checkboxTokens.iconColor}: var(${tokens.checkboxIconColor});
    ${checkboxTokens.triggerBorderColor}: var(${tokens.checkboxTriggerBorderColor});
    ${checkboxTokens.triggerBorderCheckedColor}: var(${tokens.checkboxTriggerBorderCheckedColor});
    ${checkboxTokens.triggerBorderWidth}: var(${tokens.checkboxTriggerBorderWidth});
`;

export const StyledIndicator = styled(Indicator)`
    ${indicatorTokens.size}: var(${tokens.indicatorSize});
    ${indicatorTokens.color}: var(${tokens.itemIconColor});
`;

// TODO: Удалить после поддержки JS переменных в конфиге компонент
export const sizeMap: Record<string, string> = {
    xs: '1rem',
    s: '1.5rem',
};

export const StyledIconDone = styled(IconDone)`
    width: ${({ size = 'xs' }) => `var(${tokens.disclosureIconSize}, ${sizeMap[size]})`};
    height: ${({ size = 'xs' }) => `var(${tokens.disclosureIconSize}, ${sizeMap[size]})`};
`;

export const IconWrapper = styled.div<{ variant: ComboboxProps['variant']; withMargin?: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: none;
    width: ${({ variant }) => `var(${variant === 'tight' ? tokens.itemIconSizeTight : tokens.itemIconSize})`};
    height: ${({ variant }) => `var(${variant === 'tight' ? tokens.itemIconSizeTight : tokens.itemIconSize})`};
    margin: ${({ withMargin }) => (withMargin ? `var(${tokens.itemIconMargin})` : '0')};
    line-height: 0;
    color: var(${tokens.itemIconColor});
`;

export const StyledText = styled.div`
    ${applyEllipsis()};
    flex: 1;
`;

export const StyledCheckboxWrapper = styled.span``;
