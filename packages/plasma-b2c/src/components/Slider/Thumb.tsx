import React, { KeyboardEvent, useCallback } from 'react';
import styled from 'styled-components';
import { surfaceLiquid03, white } from '@salutejs/plasma-core';
import { accent } from '@salutejs/plasma-tokens-b2c';
import { DraggableData } from 'react-draggable';

import { ThumbProps } from './types';
import { getSliderThumbValue } from './utils';
import { handleBorderWidth, handleDiameter } from './SliderBase';

const KeyboardSupport = {
    PageUp: 33,
    PageDown: 34,
    End: 35,
    Home: 36,
    ArrowLeft: 37,
    ArrowUp: 38,
    ArrowRight: 39,
    ArrowDown: 40,
};

const SliderThumb = styled.div<{ disabled?: boolean }>`
    width: ${handleDiameter}rem;
    height: ${handleDiameter}rem;

    border: ${handleBorderWidth}rem solid ${surfaceLiquid03};
    border-radius: 50%;

    background-clip: content-box;
    background-color: ${white};
    box-sizing: content-box;

    transition: transform 0.1s ease-in-out;

    &:hover {
        transform: scale(1.08);
    }

    &:active {
        transform: scale(0.92);
    }

    &:focus {
        outline: none;
    }

    &:not([disabled]) {
        &.focus-visible,
        &[data-focus-visible-added] {
            border-color: ${accent};
        }
    }
`;

export const Thumb = ({
    onChangeCommitted,
    stepSize,
    xPosition = 0,
    min,
    max,
    value,
    bounds,
    ariaValueMin = min,
    ariaLabel,
    multipleStepSize,
    ...rest
}: ThumbProps) => {
    const onKeyPress = useCallback(
        (event: KeyboardEvent<HTMLDivElement>) => {
            event.persist();

            const { keyCode, target } = event;

            if (!Object.values(KeyboardSupport).includes(keyCode)) {
                return;
            }

            const { ArrowUp, ArrowRight, ArrowDown, ArrowLeft, Home, End, PageDown, PageUp } = KeyboardSupport;

            const computedMultipleSteps = stepSize * ((multipleStepSize / 100) * max);

            const data: DraggableData = {
                x: 0,
                deltaX: stepSize,
                lastX: xPosition,
                y: 0,
                deltaY: 0,
                lastY: 0,
                node: target as HTMLDivElement,
            };

            switch (keyCode) {
                case ArrowUp:
                case ArrowRight:
                    data.x = xPosition + stepSize;
                    break;
                case ArrowDown:
                case ArrowLeft:
                    data.x = xPosition - stepSize;
                    data.deltaX = -stepSize;
                    break;
                case PageUp:
                    data.x = xPosition + computedMultipleSteps;
                    data.deltaX = computedMultipleSteps;
                    break;
                case PageDown:
                    data.x = xPosition - computedMultipleSteps;
                    data.deltaX = -computedMultipleSteps;
                    break;
                case End:
                    data.x = max * stepSize;
                    break;
                case Home:
                    data.x = 0;
                    break;
                default:
                    data.x = 0;
            }

            const { left, right } = bounds;

            /*
             * INFO:Находим значение в диапазоне между указанными левой и правой границами.
             * Необходимо для правильного расчета положения SliderThumb.
             * см. функция clamp
             */
            const boundedValue = Math.max(Math.min(right, data.x), left);

            const computedValue = getSliderThumbValue(boundedValue, stepSize, min, max);

            onChangeCommitted(computedValue, data);
        },
        [onChangeCommitted, bounds, stepSize, multipleStepSize, min, max, xPosition],
    );

    return (
        <SliderThumb
            role="slider"
            aria-label={ariaLabel}
            aria-valuemin={ariaValueMin}
            aria-valuemax={max}
            aria-valuenow={value}
            aria-orientation="horizontal"
            onKeyDown={onKeyPress}
            {...rest}
        />
    );
};
