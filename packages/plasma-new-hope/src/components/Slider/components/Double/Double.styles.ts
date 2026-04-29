import styled from 'styled-components';
import { InputWrapper } from 'src/components/TextField/TextField.styles';
import { component, mergeConfig } from 'src/engines';

import { classes, tokens } from '../../Slider.tokens';
import { textFieldConfig, textFieldTokens } from '../../../TextField';
import {
    Label,
    LabelWrapper as BaseLabelWrapper,
    BaseSliderContainer,
    BaseStyledTrack,
    BaseStyledRange,
} from '../SliderBase/SliderBase.styles';

const mergedConfig = mergeConfig(textFieldConfig);
const TextField = component(mergedConfig);

export { Label };

export const LabelWrapper = styled(BaseLabelWrapper)`
    margin-bottom: var(${tokens.labelWrapperMarginBottom});
`;

export const LabelContentLeft = styled.div``;

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

export const SliderContainer = BaseSliderContainer;

export const StyledTrack = BaseStyledTrack;

export const StyledDoubleProgress = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    height: var(${tokens.railThickness});
    border-radius: var(${tokens.railBorderRadius});
    background: var(${tokens.fillColor});
    pointer-events: none;
`;

export const StyledRange = styled(BaseStyledRange)`
    grid-area: 1 / 1;
    pointer-events: none;

    &::-webkit-slider-thumb {
        pointer-events: all;
    }

    &::-moz-range-thumb {
        pointer-events: all;
    }
`;

export const SliderWrapper = styled.div``;
