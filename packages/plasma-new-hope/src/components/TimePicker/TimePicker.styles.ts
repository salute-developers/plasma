import { styled } from '@linaria/react';
import { css } from '@linaria/core';
import { component, mergeConfig } from 'src/engines';

import { textFieldConfig, textFieldTokens } from '../TextField';
import { popoverClasses, popoverConfig } from '../Popover';

import { classes, tokens } from './TimePicker.tokens';

const mergedTextFieldConfig = mergeConfig(textFieldConfig);
const TextField = component(mergedTextFieldConfig);

const mergedPopoverConfig = mergeConfig(popoverConfig);
const Popover = component(mergedPopoverConfig);

export const StyledPopover = styled(Popover)``;

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

    ${textFieldTokens.leftContentMargin}: var(${tokens.textFieldLeftContentMargin});
    ${textFieldTokens.rightContentMargin}: var(${tokens.textFieldRightContentMargin});

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
    ${textFieldTokens.contentSlotRightColor}: var(${tokens.textFieldContentRightSlotColor}, var(${textFieldTokens.contentSlotColor}));
    ${textFieldTokens.contentSlotRightColorHover}: var(${tokens.textFieldContentRightSlotColorHover}, var(${textFieldTokens.contentSlotRightColor}));

    &.${classes.timePickerError} {
        ${textFieldTokens.backgroundColor}: var(${tokens.textFieldBackgroundErrorColor});
        ${textFieldTokens.backgroundColorHover}: var(${tokens.textFieldBackgroundErrorColorHover});
        ${textFieldTokens.backgroundColorFocus}: var(${tokens.textFieldBackgroundErrorColorFocus});
        
        ${textFieldTokens.borderColor}: var(${tokens.textFieldBorderColorError});
        ${textFieldTokens.borderColorHover}: var(${tokens.textFieldBorderColorErrorHover});
        ${textFieldTokens.borderColorFocus}: var(${tokens.textFieldBorderColorErrorFocus});
    }

    &.${classes.timePickerSuccess} {
        ${textFieldTokens.backgroundColor}: var(${tokens.textFieldBackgroundSuccessColor});
        ${textFieldTokens.backgroundColorHover}: var(${tokens.textFieldBackgroundSuccessColorHover});
        ${textFieldTokens.backgroundColorFocus}: var(${tokens.textFieldBackgroundSuccessColorFocus});
        
        ${textFieldTokens.borderColor}: var(${tokens.textFieldBorderColorSuccess});
        ${textFieldTokens.borderColorHover}: var(${tokens.textFieldBorderColorSuccessHover});
        ${textFieldTokens.borderColorFocus}: var(${tokens.textFieldBorderColorSuccessFocus});
    }
`;

export const base = css`
    display: flex;
    width: var(${tokens.width});
    margin-top: var(${tokens.dropdownMarginTop});

    .${popoverClasses.wrapper}, .${popoverClasses.target} {
        width: inherit;
    }

    &.${classes.timePickerstretched} {
        width: 100%;

        .${popoverClasses.root} {
            width: 100%;
        }
    }

    &.${classes.timePickerFullWidth} {
        width: 100%;
    }

    &.${classes.timePickerPlacementRight} {
        justify-content: flex-end;
    }
`;

export const StyledTimePicker = styled.div<{ width?: string | number }>`
    background: var(${tokens.timePickerBackground});
    border-radius: var(${tokens.timePickerBorderRadius});
    width: ${({ width }) =>
        (width === 'fullWidth' ? `var(${tokens.width})` : width) || `var(${tokens.timePickerWidth})`};
    display: flex;
    padding: var(${tokens.timePickerPadding});
    flex: 1 1 1;
    gap: var(${tokens.scrollbarWidth});
    box-sizing: border-box;
    position: relative;
`;
