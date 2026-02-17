import { css } from '@linaria/core';
import { styled } from '@linaria/react';

import { textFieldTokens } from '../TextField';
import { Input } from '../TextField/TextField.styles';

import { StyledInput } from './ui/Input/Input.styles';
import { classes, tokens } from './TextFieldSlider.tokens';

export const SliderContainer = styled.div`
    position: absolute;
    bottom: 0;
    left: var(${tokens.sliderContainerOffset}, 0);
    right: var(${tokens.sliderContainerOffset}, 0);
`;

export const SliderWithHelpersWrapper = styled.div`
    position: relative;
`;

export const ScaleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: var(${tokens.scaleWrapperOffset});
    padding-top: var(${tokens.scaleWrapperPaddingTop});
`;

export const ScaleValue = styled.span`
    color: var(${tokens.scaleValueColor});

    font-size: var(${tokens.scaleValueFontSize});
    line-height: var(${tokens.scaleValueLineHeight});
    font-weight: var(${tokens.scaleValueFontWeight});
    font-family: var(${tokens.scaleValueFontFamily});
    letter-spacing: var(${tokens.scaleValueLetterSpacing});
`;

export const base = css`
    box-sizing: border-box;
    display: inline-block;

    && ${StyledInput}.${classes.errorAnimation} {
            ${textFieldTokens.backgroundColor}: var(${tokens.textFieldBackgroundErrorColor});
            ${textFieldTokens.backgroundColorHover}: var(${tokens.textFieldBackgroundErrorColor});
            ${textFieldTokens.backgroundColorFocus}: var(${tokens.textFieldBackgroundErrorColor});

            ${textFieldTokens.borderColor}: var(${tokens.textFieldBorderErrorColor});
            ${textFieldTokens.borderColorHover}: var(${tokens.textFieldBorderErrorColor});
            ${textFieldTokens.borderColorFocus}: var(${tokens.textFieldBorderErrorColor});

            ${textFieldTokens.color}: var(${tokens.textFieldBorderErrorColor});
            
            animation: shakingError 0.3s forwards;

            ${Input} {
                animation: fadeError 0.3s forwards;
            }
        }
    }

    @keyframes shakingError {
        14% {
            transform: translateX(-0.125rem);
        }
        28% {
            transform: translateX(0.125rem);
        }
        42% {
            transform: translateX(-0.125rem);
        }
        57% {
            transform: translateX(0.125rem);
        }
        71% {
            transform: translateX(-0.125rem);
        }
        85% {
            transform: translateX(0.125rem);
        }
        100% {
            transform: translateX(-0.125rem);
        }
    }

    @keyframes fadeError {
        50% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
`;
