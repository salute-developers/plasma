import { styled } from '@linaria/react';
import { addFocus, applyEllipsis } from 'src/mixins';
import { component, mergeConfig } from 'src/engines';
import type { SelectProps } from 'src/components/Select';

import { classes, tokens, constants } from '../../../../Select.tokens';
import { checkboxConfig, checkboxTokens } from '../../../../../Checkbox';
import { cellConfig, cellTokens } from '../../../../../Cell';
import { indicatorConfig, indicatorTokens } from '../../../../../Indicator';
import { IconDisclosureRightCentered, IconDone } from '../../../../../_Icon';

const mergedCheckboxConfig = mergeConfig(checkboxConfig);
const Checkbox = component(mergedCheckboxConfig);

const mergedCellConfig = mergeConfig(cellConfig);
const Cell = component(mergedCellConfig);

const mergedIndicatorConfig = mergeConfig(indicatorConfig);
const Indicator = component(mergedIndicatorConfig);

export const StyledWrapper = styled.div<{ disabled?: boolean }>`
    ${cellTokens.cellTitleColor}: ${({ disabled }) =>
    disabled ? `var(${tokens.itemDisabledColor})` : `var(${constants.cellTitleColor})`};
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
    width: 100%;

    // TODO: #1548
    & div.cell-content, & div.cell-textbox {
        flex: 1;
    }
    & div.cell-textbox-title {
        position: relative;
    }
    & div.cell-textbox-title:before {
        content: '&nbsp;';
        visibility: hidden;
    }
    & div.cell-textbox-title span {
        position: absolute;
        left: 0;
        right: 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;

export const StyledCell = styled(Cell)``;

export const StyledCheckbox = styled(Checkbox)`
    ${checkboxTokens.triggerSize}: var(${tokens.checkboxTriggerSize});
    ${checkboxTokens.triggerBorderRadius}: var(${tokens.checkboxTriggerBorderRadius});
    ${checkboxTokens.fillColor}: var(${tokens.checkboxFillColor});
    ${checkboxTokens.iconColor}: var(${tokens.checkboxIconColor});
    ${checkboxTokens.triggerBorderWidth}: var(${tokens.checkboxTriggerBorderWidth});
    ${checkboxTokens.triggerBorderColor}: var(${tokens.checkboxTriggerBorderColor});
    ${checkboxTokens.triggerBorderCheckedColor}: var(${tokens.checkboxTriggerBorderCheckedColor});
`;

export const StyledIndicator = styled(Indicator)`
    ${indicatorTokens.size}: var(${tokens.indicatorSize});
    ${indicatorTokens.color}: var(${tokens.checkboxFillColor});
`;

// TODO: Удалить после поддержки JS переменных в конфиге компонент
export const sizeMap: Record<string, string> = {
    xs: '1rem',
    s: '1.5rem',
};

export const StyledArrow = styled(IconDisclosureRightCentered)`
    width: ${({ size = 'xs' }) => `var(${tokens.disclosureIconSize}, ${sizeMap[size]})`};
    height: ${({ size = 'xs' }) => `var(${tokens.disclosureIconSize}, ${sizeMap[size]})`};
`;

export const StyledIconDone = styled(IconDone)`
    width: ${({ size = 'xs' }) => `var(${tokens.disclosureIconSize}, ${sizeMap[size]})`};
    height: ${({ size = 'xs' }) => `var(${tokens.disclosureIconSize}, ${sizeMap[size]})`};
`;

export const DisclosureIconWrapper = styled.div`
    margin: var(${tokens.disclosureIconMargin});
    line-height: 0;
    color: var(${tokens.disclosureIconColor});

    &:hover {
        color: var(${tokens.disclosureIconColorHover});
    }
`;

export const IconWrapper = styled.div<{ variant: SelectProps['variant'] }>`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: none;
    width: ${({ variant }) => `var(${variant === 'tight' ? tokens.itemIconSizeTight : tokens.itemIconSize})`};
    height: ${({ variant }) => `var(${variant === 'tight' ? tokens.itemIconSizeTight : tokens.itemIconSize})`};
    margin: var(${tokens.itemIconMargin});
    line-height: 0;
    color: var(${tokens.checkboxFillColor});
`;

export const StyledText = styled.div<{ color?: string }>`
    ${applyEllipsis()};
    flex: 1;
`;

export const Wrapper = styled.li<{ variant: SelectProps['variant'] }>`
    display: flex;
    align-items: center;
    min-height: var(${tokens.itemHeight});
    margin: 0;
    box-sizing: content-box;
    padding: ${({ variant }) => `var(${variant === 'tight' ? tokens.itemPaddingTight : tokens.itemPadding})`};
    font-family: var(${tokens.fontFamily});
    font-size: var(${tokens.fontSize});
    font-style: var(${tokens.fontStyle});
    font-weight: var(${tokens.fontWeight});
    letter-spacing: var(${tokens.fontLetterSpacing});
    line-height: var(${tokens.fontLineHeight});
    background-color: var(${constants.itemBackground});
    color: var(--text-primary);
    border-radius: calc(var(${tokens.borderRadius}) - 0.125rem - var(${tokens.dropdownBorderWidth}, 0rem));
    user-select: none;
    background-clip: padding-box;

    &:hover:not(.${classes.dropdownItemIsDisabled}) {
        cursor: pointer;
        background-color: var(${tokens.itemBackgroundHover});
    }

    &.${classes.dropdownItemIsActive} {
        background-color: var(${tokens.itemBackgroundHover});
    }

    &.${classes.dropdownItemIsDisabled} {
        opacity: var(${tokens.itemDisabledOpacity});
        color: var(${tokens.itemDisabledColor});
        cursor: not-allowed;
    }

    :focus {
        outline: none;
    }

    ${addFocus({
        outlineSize: '0',
        outlineOffset: '0',
        outlineColor: `var(${constants.focusColor})`,
        outlineRadius: `calc(var(${tokens.borderRadius}) - 0.125rem - var(${tokens.dropdownBorderWidth}, 0rem))`,
        hasTransition: false,
        customFocusRules: `
            &.${classes.dropdownItemIsFocused}:before {
                outline: none;
                box-shadow: inset 0 0 0 0.0625rem var(${constants.focusColor});
            }
        `,
    })};
`;

export const StyledCheckboxWrapper = styled.span``;
