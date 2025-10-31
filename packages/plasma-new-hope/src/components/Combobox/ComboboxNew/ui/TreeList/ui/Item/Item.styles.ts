import { styled } from '@linaria/react';
import { addFocus, applyEllipsis } from 'src/mixins';
import { component, mergeConfig } from 'src/engines';
import { CSSProperties } from 'react';
import { checkboxConfig, checkboxTokens } from 'src/components/Checkbox';
import { cellConfig, cellTokens } from 'src/components/Cell';
import { indicatorConfig, indicatorTokens } from 'src/components/Indicator';
import { IconDisclosureRightCentered, IconDone } from 'src/components/_Icon';

import type { ComboboxProps } from '../../../../Combobox.types';
import { classes, tokens, constants } from '../../../../Combobox.tokens';

export const ItemWrapper = styled.div``;

const mergedCheckboxConfig = mergeConfig(checkboxConfig);
const Checkbox = component(mergedCheckboxConfig);

const mergedCellConfig = mergeConfig(cellConfig);
const Cell = component(mergedCellConfig);

const mergedIndicatorConfig = mergeConfig(indicatorConfig);
const Indicator = component(mergedIndicatorConfig);

export const StyledWrapper = styled.div`
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
    width: 100%;
`;

export const StyledCell = styled(Cell)``;

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

export const StyledArrowLeft = styled(IconDisclosureRightCentered)`
    width: ${({ size = 'xs' }) => `var(${tokens.disclosureIconSize}, ${sizeMap[size]})`};
    height: ${({ size = 'xs' }) => `var(${tokens.disclosureIconSize}, ${sizeMap[size]})`};

    &.${classes.arrowInverse} {
        transform: rotate(90deg);
    }
`;

export const StyledArrowRight = styled(IconDisclosureRightCentered)`
    width: ${({ size = 'xs' }) => `var(${tokens.disclosureIconSize}, ${sizeMap[size]})`};
    height: ${({ size = 'xs' }) => `var(${tokens.disclosureIconSize}, ${sizeMap[size]})`};
    transform: rotate(90deg);

    &.${classes.arrowInverse} {
        transform: rotate(-90deg);
    }
`;

export const StyledIconDone = styled(IconDone)`
    width: ${({ size = 'xs' }) => `var(${tokens.disclosureIconSize}, ${sizeMap[size]})`};
    height: ${({ size = 'xs' }) => `var(${tokens.disclosureIconSize}, ${sizeMap[size]})`};
`;

export const DisclosureIconWrapper = styled.div<{ visibility: CSSProperties['visibility'] }>`
    line-height: 0;
    color: var(${tokens.disclosureIconColor});
    visibility: ${({ visibility }) => visibility || 'visible'};

    &:hover {
        color: var(${tokens.disclosureIconColorHover});
    }
`;

export const IconWrapper = styled.div<{ variant: ComboboxProps['variant'] }>`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: none;
    width: ${({ variant }) => `var(${variant === 'tight' ? tokens.itemIconSizeTight : tokens.itemIconSize})`};
    height: ${({ variant }) => `var(${variant === 'tight' ? tokens.itemIconSizeTight : tokens.itemIconSize})`};
    line-height: 0;
    color: var(${tokens.itemIconColor});
`;

export const StyledText = styled.div<{ color?: string }>`
    ${applyEllipsis()};
    flex: 1;
`;

export const Wrapper = styled.div<{ variant: ComboboxProps['variant'] }>`
    display: flex;
    align-items: center;
    gap: var(${tokens.itemGap});
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
        opacity: ${constants.opacity};
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

export const ChildItems = styled.div``;

export const Offset = styled.div<{ depth: number }>`
    width: calc(${({ depth }) => depth || 0} * var(${tokens.itemTreeOffsetWidth}));
    flex: none;
    margin-right: calc(var(${tokens.itemGap}) * -1);
`;
