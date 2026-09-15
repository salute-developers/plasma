import styled from 'styled-components';

import { applySliderThumb, applySliderThumbFocus } from '../../../../mixins';
import type { SliderThumbTokens } from '../../../../mixins';
import { classes, tokens } from '../../Slider.tokens';

export const thumbGutter = `calc(var(${tokens.thumbWidth}, 0rem) / 2)`;

const thumbTokens: SliderThumbTokens = {
    width: tokens.thumbWidth,
    height: tokens.thumbHeight,
    borderRadius: tokens.thumbBorderRadius,
    borderWidth: tokens.thumbBorderWidth,
    borderColor: tokens.thumbBorderColor,
    focusBorderColor: tokens.thumbFocusBorderColor,
    background: tokens.thumbBackgroundColor,
    innerContent: tokens.thumbInnerContent,
};

const thumb = applySliderThumb(thumbTokens);
const thumbFocused = applySliderThumbFocus(thumbTokens);

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
export const BaseSliderContainer = styled.div`
    position: relative;
    display: grid;
    align-items: center;
    height: var(${tokens.size});
`;

/**
 * Обёртка визуальной части трека.
 *
 * Горизонтальный нативный range оставляет по краям место под половину бегунка.
 * Обёртка задаёт такую же рабочую область для рельса, прогресса и элементов,
 * привязанных к их координатам.
 */
export const BaseTrackWrapper = styled.div`
    position: absolute;
    top: 0;
    right: ${thumbGutter};
    bottom: 0;
    left: ${thumbGutter};
    pointer-events: none;

    .${classes.verticalOrientation} & {
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }
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
        ${thumb}
        opacity: ${({ showPointer }) => (showPointer === false ? '0' : '1')};
    }

    &:not(:disabled)::-webkit-slider-thumb:hover,
    &:not(:disabled)::-webkit-slider-thumb:active,
    &:focus-visible::-webkit-slider-thumb {
        ${thumbFocused}
    }

    &::-webkit-slider-thumb:active {
        cursor: grabbing;
    }

    &::-moz-range-track {
        background: transparent;
        height: var(${tokens.railThickness});
    }

    &::-moz-range-progress {
        background: transparent;
    }

    &::-moz-range-thumb {
        ${thumb}
        opacity: ${({ showPointer }) => (showPointer === false ? '0' : '1')};
    }

    &:not(:disabled)::-moz-range-thumb:hover,
    &:not(:disabled)::-moz-range-thumb:active {
        ${thumbFocused}
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
