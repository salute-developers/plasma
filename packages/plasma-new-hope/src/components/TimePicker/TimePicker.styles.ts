import styled, { css } from 'styled-components';
import { component, mergeConfig } from 'src/engines';

import { textFieldConfig, textFieldTokens } from '../TextField';
import { timePickerGridConfig, timePickerGridTokens } from '../TimePickerGrid';

import { classes, tokens } from './TimePicker.tokens';

const mergedTextFieldConfig = mergeConfig(textFieldConfig);
const TextField = component(mergedTextFieldConfig);

const mergedTimePickerGrid = mergeConfig(timePickerGridConfig);
const TimePickerGrid = component(mergedTimePickerGrid);

export const FloatingWrapper = styled.div`
    position: relative;
    width: 100%;
`;

export const FloatingTarget = styled.div``;

export const FloatingContent = styled.div``;

export const StyledTimePickerGrid = styled(TimePickerGrid)<{
    columns: number;
    innerWidth?: string | number;
    innerHeight?: string | number;
}>`
    ${timePickerGridTokens.disabledOpacity}: var(${tokens.disabledOpacity});

    ${timePickerGridTokens.itemHeight}: var(${tokens.itemHeight});
    ${timePickerGridTokens.itemBorderRadius}: var(${tokens.itemBorderRadius});
    ${timePickerGridTokens.itemPadding}: var(${tokens.itemPadding});
    ${timePickerGridTokens.itemBackgroundHover}: var(${tokens.itemBackgroundHover});
    ${timePickerGridTokens.itemBackgroundActive}: var(${tokens.itemBackgroundActive});
    ${timePickerGridTokens.itemFocusColor}: var(${tokens.itemFocusColor});

    ${timePickerGridTokens.itemFontFamily}: var(${tokens.itemFontFamily});
    ${timePickerGridTokens.itemFontSize}: var(${tokens.itemFontSize});
    ${timePickerGridTokens.itemFontStyle}: var(${tokens.itemFontStyle});
    ${timePickerGridTokens.itemFontWeight}: var(${tokens.itemFontWeight});
    ${timePickerGridTokens.itemLetterSpacing}: var(${tokens.itemLetterSpacing});
    ${timePickerGridTokens.itemLineHeight}: var(${tokens.itemLineHeight});

    ${timePickerGridTokens.scrollbarWidth}: var(${tokens.scrollbarWidth});
    ${timePickerGridTokens.scrollbarColor}: var(${tokens.scrollbarColor});
    ${timePickerGridTokens.scrollbarTrackColor}: var(${tokens.scrollbarTrackColor});
    ${timePickerGridTokens.scrollbarMargin}: var(${tokens.scrollbarMargin});

    background: var(${tokens.timePickerBackground});
    border-radius: var(${tokens.timePickerBorderRadius});
    padding: var(${tokens.timePickerPadding});
    box-shadow: var(${tokens.timePickerShadow});
    
    width: ${({ innerWidth }) => innerWidth || `var(${tokens.timePickerWidth})`};
    height: ${({ innerHeight }) => innerHeight || `var(${tokens.columnHeight})`};
`;

// NOTE: переопределение токенов TextField
export const StyledInput = styled(TextField)`
    width: 100%;

    ${textFieldTokens.color}: var(${tokens.textFieldColor});
    ${textFieldTokens.placeholderColor}: var(${tokens.textFieldPlaceholderColor});
    ${textFieldTokens.placeholderColorFocus}: var(${tokens.textFieldPlaceholderColorFocus});
    ${textFieldTokens.caretColor}: var(${tokens.textFieldCaretColor});
    ${textFieldTokens.focusColor}: var(${tokens.textFieldFocusColor});

    ${textFieldTokens.backgroundColor}: var(${tokens.textFieldBackgroundColor});
    ${textFieldTokens.backgroundColorHover}: var(${tokens.textFieldBackgroundColorHover});
    ${textFieldTokens.backgroundColorFocus}: var(${tokens.textFieldBackgroundColorFocus});
    
    ${textFieldTokens.borderColor}: var(${tokens.borderColor});
    ${textFieldTokens.borderColorHover}: var(${tokens.borderColorHover});
    ${textFieldTokens.borderColorFocus}: var(${tokens.borderColorFocus});
    ${textFieldTokens.boxShadow}: var(${tokens.textFieldBoxShadow});

    ${textFieldTokens.colorReadOnly}: var(${tokens.textFieldColorReadOnly});
    ${textFieldTokens.backgroundColorReadOnly}: var(${tokens.textFieldBackgroundColorReadOnly});
    ${textFieldTokens.borderColorReadOnly}: var(${tokens.textFieldBorderColorReadOnly});
    ${textFieldTokens.placeholderColorReadOnly}: var(${tokens.textFieldPlaceholderColorReadOnly});

    ${textFieldTokens.height}: var(${tokens.textFieldHeight});
    ${textFieldTokens.borderWidth}: var(${tokens.textFieldBorderWidth});
    ${textFieldTokens.borderRadius}: var(${tokens.textFieldBorderRadius});

    ${textFieldTokens.padding}: var(${tokens.textFieldPadding});
    ${textFieldTokens.labelInnerPadding}: var(${tokens.labelInnerPadding});
    ${textFieldTokens.contentLabelInnerPadding}: var(${tokens.contentLabelInnerPadding});

    ${textFieldTokens.labelOffset}: var(${tokens.labelOffset});

    ${textFieldTokens.labelColor}: var(${tokens.labelColor});
    ${textFieldTokens.labelFontFamily}: var(${tokens.labelFontFamily});
    ${textFieldTokens.labelFontStyle}: var(${tokens.labelFontStyle});
    ${textFieldTokens.labelFontSize}: var(${tokens.labelFontSize});
    ${textFieldTokens.labelFontWeight}: var(${tokens.labelFontWeight});
    ${textFieldTokens.labelLetterSpacing}: var(${tokens.labelLetterSpacing});
    ${textFieldTokens.labelLineHeight}: var(${tokens.labelLineHeight});

    ${textFieldTokens.labelInnerFontFamily}: var(${tokens.labelInnerFontFamily});
    ${textFieldTokens.labelInnerFontSize}: var(${tokens.labelInnerFontSize});
    ${textFieldTokens.labelInnerFontStyle}: var(${tokens.labelInnerFontStyle});
    ${textFieldTokens.labelInnerFontWeight}: var(${tokens.labelInnerFontWeight});
    ${textFieldTokens.labelInnerLetterSpacing}: var(${tokens.labelInnerLetterSpacing});
    ${textFieldTokens.labelInnerLineHeight}: var(${tokens.labelInnerLineHeight});
    ${textFieldTokens.labelColorReadOnly}: var(${tokens.labelColorReadOnly});

    ${textFieldTokens.indicatorColor}: var(${tokens.indicatorColor});
    ${textFieldTokens.indicatorSizeInner}: var(${tokens.indicatorSize});
    ${textFieldTokens.indicatorSizeOuter}: var(${tokens.indicatorSizeOuter});
    ${textFieldTokens.indicatorLabelPlacementInner}: var(${tokens.indicatorPlacement});
    ${textFieldTokens.indicatorLabelPlacementOuter}: var(${tokens.indicatorOuterPlacement});
    ${textFieldTokens.indicatorLabelPlacementInnerRight}: var(${tokens.indicatorPlacementRight});
    ${textFieldTokens.indicatorLabelPlacementOuterRight}: var(${tokens.indicatorOuterPlacementRight});

    ${textFieldTokens.hintMargin}: var(${tokens.hintMargin});
    ${textFieldTokens.hintTargetSize}: var(${tokens.hintTargetSize});
    ${textFieldTokens.hintCustomIconTargetSize}: var(${tokens.hintCustomIconTargetSize});
    ${textFieldTokens.hintIconColor}: var(${tokens.hintIconColor});
    ${textFieldTokens.hintInnerLabelPlacementOffset}: var(${tokens.hintInnerLabelPlacementOffset});

    ${textFieldTokens.tooltipPaddingTop}: var(${tokens.hintTooltipPaddingTop});
    ${textFieldTokens.tooltipPaddingRight}: var(${tokens.hintTooltipPaddingRight});
    ${textFieldTokens.tooltipPaddingBottom}: var(${tokens.hintTooltipPaddingBottom});
    ${textFieldTokens.tooltipPaddingLeft}: var(${tokens.hintTooltipPaddingLeft});
    ${textFieldTokens.tooltipMinHeight}: var(${tokens.hintTooltipMinHeight});
    ${textFieldTokens.tooltipBackgroundColor}: var(${tokens.hintTooltipBackgroundColor});
    ${textFieldTokens.tooltipBoxShadow}: var(${tokens.hintTooltipBoxShadow});
    ${textFieldTokens.tooltipBorderRadius}: var(${tokens.hintTooltipBorderRadius});
    ${textFieldTokens.tooltipColor}: var(${tokens.hintTooltipColor});
    ${textFieldTokens.tooltipTextFontFamily}: var(${tokens.hintTooltipTextFontFamily});
    ${textFieldTokens.tooltipTextFontSize}: var(${tokens.hintTooltipTextFontSize});
    ${textFieldTokens.tooltipTextFontStyle}: var(${tokens.hintTooltipTextFontStyle});
    ${textFieldTokens.tooltipTextFontWeight}: var(${tokens.hintTooltipTextFontWeight});
    ${textFieldTokens.tooltipTextFontLetterSpacing}: var(${tokens.hintTooltipTextFontLetterSpacing});
    ${textFieldTokens.tooltipTextFontLineHeight}: var(${tokens.hintTooltipTextFontLineHeight});
    ${textFieldTokens.tooltipContentLeftMargin}: var(${tokens.hintTooltipContentLeftMargin});
    ${textFieldTokens.tooltipArrowMaskWidth}: var(${tokens.hintTooltipArrowMaskWidth});
    ${textFieldTokens.tooltipArrowMaskHeight}: var(${tokens.hintTooltipArrowMaskHeight});
    ${textFieldTokens.tooltipArrowMaskImage}: var(${tokens.hintTooltipArrowMaskImage});
    ${textFieldTokens.tooltipArrowBackground}: var(${tokens.hintTooltipArrowBackground});
    ${textFieldTokens.tooltipArrowHeight}: var(${tokens.hintTooltipArrowHeight});
    ${textFieldTokens.tooltipArrowEdgeMargin}: var(${tokens.hintTooltipArrowEdgeMargin});

    ${textFieldTokens.leftContentMargin}: var(${tokens.textFieldLeftContentMargin});
    ${textFieldTokens.rightContentMargin}: var(${tokens.textFieldRightContentMargin});
    ${textFieldTokens.rightContentWithHintMargin}: var(${tokens.textFieldRightContentWithHintMargin});
    
    ${textFieldTokens.contentRightWrapperGap}: var(${tokens.textFieldContentRightWrapperGap});
    ${textFieldTokens.contentRightWrapperMargin}: var(${tokens.textFieldContentRightWrapperMargin});

    ${textFieldTokens.fontFamily}: var(${tokens.textFieldFontFamily});
    ${textFieldTokens.fontSize}: var(${tokens.textFieldFontSize});
    ${textFieldTokens.fontStyle}: var(${tokens.textFieldFontStyle});
    ${textFieldTokens.fontWeight}: var(${tokens.textFieldFontWeight});
    ${textFieldTokens.letterSpacing}: var(${tokens.textFieldLetterSpacing});
    ${textFieldTokens.lineHeight}: var(${tokens.textFieldLineHeight});

    ${textFieldTokens.disabledOpacity}: var(${tokens.disabledOpacity});
    
    ${textFieldTokens.textBeforeColor}: var(${tokens.textFieldTextBeforeColor});
    ${textFieldTokens.textAfterColor}: var(${tokens.textFieldTextAfterColor});

    ${textFieldTokens.textBeforeMargin}: var(${tokens.textFieldTextBeforeMargin});
    ${textFieldTokens.textAfterMargin}: var(${tokens.textFieldTextAfterMargin});

    ${textFieldTokens.contentSlotColor}: var(${tokens.textFieldContentSlotColor}, var(${tokens.textFieldColor}));
    ${textFieldTokens.contentSlotColorHover}: var(${tokens.textFieldContentSlotColorHover}, var(${tokens.textFieldColor}));
    ${textFieldTokens.contentSlotColorActive}: var(${tokens.textFieldContentSlotColorActive}, var(${tokens.textFieldColor}));

    ${textFieldTokens.contentSlotRightColor}: var(${tokens.textFieldContentRightSlotColor}, var(${textFieldTokens.contentSlotColor}));
    ${textFieldTokens.contentSlotRightColorHover}: var(${tokens.textFieldContentRightSlotColorHover}, var(${textFieldTokens.contentSlotRightColor}));
    ${textFieldTokens.contentSlotRightOpacityReadOnly}: var(${tokens.textFieldContentSlotRightOpacityReadOnly}, var(${textFieldTokens.contentSlotRightColor}));

    ${textFieldTokens.leftHelperColor}: var(${tokens.leftHelperColor});
    ${textFieldTokens.leftHelperColorReadOnly}: var(${tokens.leftHelperColorReadOnly});
    ${textFieldTokens.leftHelperOffset}: var(${tokens.leftHelperOffset});

    ${textFieldTokens.leftHelperFontFamily}: var(${tokens.leftHelperFontFamily});
    ${textFieldTokens.leftHelperFontSize}: var(${tokens.leftHelperFontSize});
    ${textFieldTokens.leftHelperFontStyle}: var(${tokens.leftHelperFontStyle});
    ${textFieldTokens.leftHelperFontWeight}: var(${tokens.leftHelperFontWeight});
    ${textFieldTokens.leftHelperLetterSpacing}: var(${tokens.leftHelperLetterSpacing});
    ${textFieldTokens.leftHelperLineHeight}: var(${tokens.leftHelperLineHeight});

    &.${classes.timePickerError} {
        ${textFieldTokens.backgroundColor}: var(${tokens.textFieldBackgroundErrorColor});
        ${textFieldTokens.backgroundColorHover}: var(${tokens.textFieldBackgroundErrorColorHover});
        ${textFieldTokens.backgroundColorFocus}: var(${tokens.textFieldBackgroundErrorColorFocus});
        
        ${textFieldTokens.borderColor}: var(${tokens.textFieldBorderColorError});
        ${textFieldTokens.borderColorHover}: var(${tokens.textFieldBorderColorErrorHover});
        ${textFieldTokens.borderColorFocus}: var(${tokens.textFieldBorderColorErrorFocus});

        ${tokens.leftHelperColor}: var(${tokens.leftHelperColorError});
    }

    &.${classes.timePickerSuccess} {
        ${textFieldTokens.backgroundColor}: var(${tokens.textFieldBackgroundSuccessColor});
        ${textFieldTokens.backgroundColorHover}: var(${tokens.textFieldBackgroundSuccessColorHover});
        ${textFieldTokens.backgroundColorFocus}: var(${tokens.textFieldBackgroundSuccessColorFocus});
        
        ${textFieldTokens.borderColor}: var(${tokens.textFieldBorderColorSuccess});
        ${textFieldTokens.borderColorHover}: var(${tokens.textFieldBorderColorSuccessHover});
        ${textFieldTokens.borderColorFocus}: var(${tokens.textFieldBorderColorSuccessFocus});
        
        ${tokens.leftHelperColor}: var(${tokens.leftHelperColorSuccess});
    }
`;

export const base = css`
    display: flex;
    width: var(${tokens.width});
    margin-top: var(${tokens.dropdownMarginTop});

    &.${classes.timePickerstretched} {
        width: 100%;

        & > div {
            width: 100%;
        }
    }

    &.${classes.timePickerGridRoot} {
        width: 100%;
        height: 100%;
    }

    &.${classes.timePickerPlacementRight} {
        justify-content: flex-end;
    }
`;
