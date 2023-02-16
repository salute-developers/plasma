import React, { KeyboardEvent, useCallback } from 'react';
import styled from 'styled-components';
import { DraggableData } from 'react-draggable';

import { ThumbProps } from './types';
import { getSliderThumbValue } from './utils';

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

export const ThumbBase = styled.div<{ disabled?: boolean }>`
    border-radius: 50%;

    background-clip: content-box;
    box-sizing: content-box;

    transition: transform 0.1s ease-in-out;

    &:focus {
        outline: none;
    }

    &:not([disabled]) {
        &.focus-visible,
        &[data-focus-visible-added] {
            border-color: currentColor;
        }
    }
`;

export type Thumb = typeof ThumbBase;

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
    thumb: ThumbAbstract,
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
        <ThumbAbstract
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
