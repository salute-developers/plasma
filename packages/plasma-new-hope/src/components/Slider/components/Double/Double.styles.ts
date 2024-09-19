import { styled } from '@linaria/react';

import { classes, tokens } from '../../Slider.tokens';
import { component, mergeConfig } from '../../../../engines';
import { textFieldConfig, textFieldTokens } from '../../../TextField';

const mergedConfig = mergeConfig(textFieldConfig);
const TextField = component(mergedConfig);

export const LabelWrapper = styled.div`
    color: var(${tokens.labelColor});

    display: flex;
    gap: var(${tokens.labelWrapperGap});
    margin-bottom: var(${tokens.labelWrapperMarginBottom});
`;

export const LabelContentLeft = styled.div``;

export const Label = styled.label`
    font-family: var(${tokens.labelFontFamily});
    font-size: var(${tokens.labelFontSize});
    font-style: var(${tokens.labelFontStyle});
    font-weight: var(${tokens.labelFontWeight});
    letter-spacing: var(${tokens.labelLetterSpacing});
    line-height: var(${tokens.labelLineHeight});
`;

export const InputsWrapper = styled.div`
    display: flex;
    gap: var(${tokens.textFieldWrapperGap});
    margin-top: var(${tokens.doubleWrapperGap});
`;

// NOTE: переопределение токенов TextField
export const StyledInput = styled(TextField)`
    flex: 1;
    
    ${textFieldTokens.color}: var(${tokens.textFieldColor});
    ${textFieldTokens.backgroundColor}: var(${tokens.textFieldBackgroundColor});
    ${textFieldTokens.caretColor}: var(${tokens.textFieldCaretColor});
    ${textFieldTokens.placeholderColor}: var(${tokens.textFieldPlaceholderColor});
    ${textFieldTokens.disabledOpacity}: var(${tokens.disabledOpacity});

    ${textFieldTokens.height}: var(${tokens.textFieldHeight});
    ${textFieldTokens.padding}: var(${tokens.textFieldPadding});
    ${textFieldTokens.borderRadius}: var(${tokens.textFieldBorderRadius});

    ${textFieldTokens.fontFamily}: var(${tokens.textFieldFontFamily});
    ${textFieldTokens.fontSize}: var(${tokens.textFieldFontSize});
    ${textFieldTokens.fontStyle}: var(${tokens.textFieldFontStyle});
    ${textFieldTokens.fontWeight}: var(${tokens.textFieldFontWeight});
    ${textFieldTokens.letterSpacing}: var(${tokens.textFieldLetterSpacing});
    ${textFieldTokens.lineHeight}: var(${tokens.textFieldLineHeight});

    &.${classes.firstTextField} > div {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }

    &.${classes.secondTextField} > div {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
    
    input:focus, &.${classes.textFieldActive} {
        ${textFieldTokens.color}: var(${tokens.textFiledFocusColor});
    }
`;

export const DoubleWrapper = styled.div`
    opacity: var(${tokens.disabledOpacity});
`;

export const SliderWrapper = styled.div``;
