import { styled } from '@linaria/react';

import { InputWrapper } from '../../../TextField/TextField.styles';
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
    box-shadow: var(${tokens.doubleBoxShadow});
`;

// NOTE: переопределение токенов TextField
export const StyledInput = styled(TextField)`
    flex: 1;

    ${textFieldTokens.color}: var(${tokens.textFieldColor});
    ${textFieldTokens.backgroundColor}: var(${tokens.textFieldBackgroundColor});
    ${textFieldTokens.backgroundColorHover}: var(${tokens.textFieldBackgroundColorHover});
    ${textFieldTokens.backgroundColorFocus}: var(${tokens.textFieldBackgroundColorFocus});
    ${textFieldTokens.borderWidth}: var(${tokens.textFieldBorderWidth});
    ${textFieldTokens.borderColor}: var(${tokens.textFieldBorderColor});
    ${textFieldTokens.borderColorHover}: var(${tokens.textFieldBorderColorHover});
    ${textFieldTokens.borderColorFocus}: var(${tokens.textFieldBorderColorFocus});
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

    &&.${classes.textFieldHovered} {
        ${InputWrapper} {
            background: var(${tokens.textFieldBackgroundColorHover});
            box-shadow: inset 0 0 0 var(${tokens.textFieldBorderWidth}) var(${tokens.textFieldBorderColorHover}),
                inset 0 0 0 0 transparent;
        }
    }

    &&.${classes.textFieldFocused} {
        ${InputWrapper} {
            background: var(${tokens.textFieldBackgroundColorFocus});
            box-shadow: inset 0 0 0 var(${tokens.textFieldBorderWidth}) var(${tokens.textFieldBorderColorFocus}),
                inset 0 0 0 0 transparent;
        }
    }

    &.${classes.firstTextField}{
        margin-right: var(${tokens.textFieldWebMarginRight}, 0);

        ${InputWrapper} {
            clip-path: var(${tokens.textFieldWebClipPath});
        }

        &&.${classes.textFieldHovered},
        &&.${classes.textFieldFocused} {
            ${InputWrapper} {
                clip-path: inset(0 0 0 0);
            }

            & + .${classes.secondTextField}:not(.${classes.textFieldFocused}) ${InputWrapper} {
                clip-path: var(${tokens.textFieldWebReversedClipPath});
            }
        }

        & > ${InputWrapper} {
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
        }
    }

    &.${classes.secondTextField} > ${InputWrapper} {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
`;

export const DoubleWrapper = styled.div`
    opacity: var(${tokens.disabledOpacity});
`;

export const SliderWrapper = styled.div``;
