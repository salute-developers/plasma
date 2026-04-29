import styled from 'styled-components';

import { privateTokens, tokens } from '../../Slider.tokens';

/**
 * Подпись слайдера
 */
export const Label = styled.label`
    font-family: var(${tokens.labelFontFamily});
    font-size: var(${tokens.labelFontSize});
    font-style: var(${tokens.labelFontStyle});
    font-weight: var(${tokens.labelFontWeight});
    letter-spacing: var(${tokens.labelLetterSpacing});
    line-height: var(${tokens.labelLineHeight});
`;

/**
 * Обёртка вокруг иконки и подписи
 */
export const LabelWrapper = styled.div`
    color: var(${tokens.labelColor});
    display: flex;
    align-items: center;
    gap: var(${tokens.labelWrapperGap});
`;

/**
 * Базовый контейнер слайдера
 */
export const BaseSliderContainer = styled.div<{ pointerSize?: string }>`
    ${privateTokens.thumbSize}: ${({ pointerSize }) =>
        pointerSize === 'large' ? `var(${tokens.thumbSizeLarge})` : `var(${tokens.thumbSize})`};

    position: relative;
    display: grid;
    align-items: center;
    height: var(${tokens.size});
`;

/**
 * Рельс (неактивная часть дорожки)
 */
export const BaseStyledTrack = styled.div`
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
    height: var(${tokens.railThickness});
    border-radius: var(${tokens.railBorderRadius});
    background-color: var(${tokens.railBackgroundColor});
    pointer-events: none;
`;

/**
 * Нативный range-input
 */
export const BaseStyledRange = styled.input<{ showPointer?: boolean }>`
    appearance: none;
    outline: none;
    background: transparent;
    border: none;
    width: 100%;
    height: var(${tokens.size});
    margin: 0;
    cursor: pointer;

    &:disabled {
        cursor: not-allowed;
    }

    &::-webkit-slider-runnable-track {
        background: transparent;
    }

    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        outline: none;
        width: var(${privateTokens.thumbSize});
        height: var(${privateTokens.thumbSize});
        border-radius: 50%;
        cursor: grab;
        border: var(${tokens.thumbBorder}) transparent;
        background: linear-gradient(var(${tokens.thumbBackgroundColor}), var(${tokens.thumbBackgroundColor}))
                padding-box,
            var(${tokens.thumbBorderColor}) border-box;
        transition: background 0.1s ease-in-out;
        opacity: ${({ showPointer }) => (showPointer === false ? '0' : '1')};
    }

    &:not(:disabled)::-webkit-slider-thumb:hover,
    &:not(:disabled)::-webkit-slider-thumb:active {
        background: linear-gradient(var(${tokens.thumbBackgroundColor}), var(${tokens.thumbBackgroundColor}))
                padding-box,
            var(${tokens.thumbFocusBorderColor}) border-box;
    }

    &::-webkit-slider-thumb:active {
        cursor: grabbing;
    }

    &:focus-visible::-webkit-slider-thumb {
        background: linear-gradient(var(${tokens.thumbBackgroundColor}), var(${tokens.thumbBackgroundColor}))
                padding-box,
            var(${tokens.thumbFocusBorderColor}) border-box;
    }

    &::-moz-range-track {
        background: transparent;
        height: var(${tokens.railThickness});
    }

    &::-moz-range-progress {
        background: transparent;
    }

    &::-moz-range-thumb {
        width: var(${privateTokens.thumbSize});
        height: var(${privateTokens.thumbSize});
        border-radius: 50%;
        cursor: grab;
        border: var(${tokens.thumbBorder}) transparent;
        background: linear-gradient(var(${tokens.thumbBackgroundColor}), var(${tokens.thumbBackgroundColor}))
                padding-box,
            var(${tokens.thumbBorderColor}) border-box;
        transition: background 0.1s ease-in-out;
        opacity: ${({ showPointer }) => (showPointer === false ? '0' : '1')};
    }

    &:not(:disabled)::-moz-range-thumb:hover,
    &:not(:disabled)::-moz-range-thumb:active {
        background: linear-gradient(var(${tokens.thumbBackgroundColor}), var(${tokens.thumbBackgroundColor}))
                padding-box,
            var(${tokens.thumbFocusBorderColor}) border-box;
    }

    &::-moz-range-thumb:active {
        cursor: grabbing;
    }

    &:disabled {
        &::-webkit-slider-thumb {
            cursor: not-allowed;
        }

        &::-webkit-slider-thumb:active {
            cursor: not-allowed;
        }

        &::-moz-range-thumb {
            cursor: not-allowed;
        }

        &::-moz-range-thumb:active {
            cursor: not-allowed;
        }
    }
`;
