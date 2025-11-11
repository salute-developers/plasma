import { styled } from '@linaria/react';
import { css } from '@linaria/core';

import { component, mergeConfig } from '../../engines';
import { textFieldConfig, textFieldTokens } from '../TextField';

import { classes, tokens } from './Range.tokens';

const mergedConfig = mergeConfig(textFieldConfig);
const TextField = component(mergedConfig);

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

    ${textFieldTokens.borderColor}: var(${tokens.textFieldBorderColor});
    ${textFieldTokens.borderColorHover}: var(${tokens.textFieldBorderColorHover});
    ${textFieldTokens.borderColorFocus}: var(${tokens.textFieldBorderColorFocus});

    ${textFieldTokens.colorReadOnly}: var(${tokens.textFieldColorReadOnly});
    ${textFieldTokens.backgroundColorReadOnly}: var(${tokens.textFieldBackgroundColorReadOnly});
    ${textFieldTokens.borderColorReadOnly}: var(${tokens.textFieldBorderColorReadOnly});
    ${textFieldTokens.placeholderColorReadOnly}: var(${tokens.textFieldPlaceholderColorReadOnly});

    ${textFieldTokens.height}: var(${tokens.textFieldHeight});
    ${textFieldTokens.borderWidth}: var(${tokens.textFieldBorderWidth});
    ${textFieldTokens.borderRadius}: var(${tokens.textFieldBorderRadius});

    ${textFieldTokens.padding}: var(${tokens.textFieldPadding});

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

    &.${classes.rangeValueError} {
        ${textFieldTokens.color}: var(${tokens.textFieldColorError}, var(${tokens.textFieldColor}));
        ${textFieldTokens.backgroundColor}: var(${tokens.textFieldBackgroundErrorColor});
        ${textFieldTokens.backgroundColorHover}: var(${tokens.textFieldBackgroundErrorColorHover});
        ${textFieldTokens.backgroundColorFocus}: var(${tokens.textFieldBackgroundErrorColorFocus});

        ${textFieldTokens.borderColor}: var(${tokens.textFieldBorderColorError});
        ${textFieldTokens.borderColorHover}: var(${tokens.textFieldBorderColorErrorHover});
        ${textFieldTokens.borderColorFocus}: var(${tokens.textFieldBorderColorErrorFocus});
    }

    &.${classes.rangeValueSuccess} {
        ${textFieldTokens.color}: var(${tokens.textFieldColorSuccess}, var(${tokens.textFieldColor}));
        ${textFieldTokens.backgroundColor}: var(${tokens.textFieldBackgroundSuccessColor});
        ${textFieldTokens.backgroundColorHover}: var(${tokens.textFieldBackgroundSuccessColorHover});
        ${textFieldTokens.backgroundColorFocus}: var(${tokens.textFieldBackgroundSuccessColorFocus});

        ${textFieldTokens.borderColor}: var(${tokens.textFieldBorderColorSuccess});
        ${textFieldTokens.borderColorHover}: var(${tokens.textFieldBorderColorSuccessHover});
        ${textFieldTokens.borderColorFocus}: var(${tokens.textFieldBorderColorSuccessFocus});
    }
`;

export const base = css`
    width: fit-content;
`;

export const StyledLabel = styled.label``;

export const StyledIndicatorWrapper = styled.div`
    position: relative;
    display: inline-flex;
    align-items: center;
`;

export const StyledIndicator = styled.div`
    position: absolute;
    border-radius: 50%;
`;

export const LeftHelper = styled.div``;

export const ContentWrapper = styled.div`
    display: flex;
    align-items: center;
    position: relative;

    &:before {
        content: '';
        position: absolute;
        inset: 0;
        z-index: -1;
    }
`;

export const StyledDivider = styled.div``;

export const StyledContentLeft = styled.div`
    line-height: 0;

    color: var(${tokens.contentSlotColor});

    &:hover {
        color: var(${tokens.contentSlotColorHover});
    }

    &:active {
        color: var(${tokens.contentSlotColorActive});
    }
`;

export const StyledContentRight = styled.div`
    color: var(${tokens.contentSlotRightColor}, var(${tokens.contentSlotColor}));

    &:hover {
        color: var(${tokens.contentSlotRightColorHover}, var(${tokens.contentSlotColorHover}));
        cursor: pointer;
    }

    &:active {
        color: var(${tokens.contentSlotRightColorActive}, var(${tokens.contentSlotColorActive}));
    }
`;
