import styled, { css } from 'styled-components';

import { textFieldTokens } from '../TextField';
import { Input } from '../TextField/TextField.styles';

import { StyledInput } from './ui/Input/Input.styles';
import { classes, tokens } from './TextFieldSlider.tokens';

export const ScaleTicksWrapper = styled.div`
    position: relative;
    overflow: visible;
    height: var(${tokens.scaleValueLineHeight});
    margin-top: calc(var(${tokens.scaleWrapperOffset}) + var(${tokens.scaleWrapperPaddingTop}));
    margin-left: calc(var(${tokens.sliderContainerOffset}) + var(${tokens.sliderThumbSize}) / 2);
    margin-right: calc(var(${tokens.sliderContainerOffset}) + var(${tokens.sliderThumbSize}) / 2);
`;

export const ScaleTick = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    width: 0;
    overflow: visible;
    cursor: pointer;
`;

export const ScaleTickDot = styled.span<{ filled?: boolean }>`
    position: absolute;
    left: 0;
    top: calc(
        -1 * (var(${tokens.scaleWrapperOffset}) + var(${tokens.scaleWrapperPaddingTop})) - var(
                ${tokens.sliderTrackHeight}
            ) / 2 - var(${tokens.scaleTickSize}) / 2
    );
    transform: translateX(-50%);
    display: block;
    width: var(${tokens.scaleTickSize});
    height: var(${tokens.scaleTickSize});
    border-radius: 50%;
    background-color: ${({ filled }) =>
        filled ? `var(${tokens.scaleTickDotFilledColor})` : `var(${tokens.scaleTickDotColor})`};
`;

export const ScaleTickLabel = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    transform: translateX(-50%);
    white-space: nowrap;
    color: var(${tokens.scaleValueColor});
    font-family: var(${tokens.scaleValueFontFamily});
    font-size: var(${tokens.scaleValueFontSize});
    font-style: var(${tokens.scaleValueFontStyle});
    font-weight: var(${tokens.scaleValueFontWeight});
    letter-spacing: var(${tokens.scaleValueLetterSpacing});
    line-height: var(${tokens.scaleValueLineHeight});
`;

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
