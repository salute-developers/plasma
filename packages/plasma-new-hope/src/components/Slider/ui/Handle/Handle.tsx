import React, { useState, useRef, useCallback, forwardRef, KeyboardEvent } from 'react';
import Draggable, { DraggableEventHandler } from 'react-draggable';
import type { DraggableData } from 'react-draggable';

import { getSliderThumbValue, getOffsets } from '../../utils';
import { Thumb } from '../Thumb/Thumb';

import type { HandleProps } from './Handle.types';
import { HandleStyled, StyledValue } from './Handle.styles';

// TODO: PLASMA-1707
declare module 'react-draggable' {
    export interface DraggableProps {
        children: React.ReactNode;
    }
}

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

export const Handle = forwardRef<HTMLDivElement, HandleProps>(
    (
        {
            stepSize,
            onChangeCommitted,
            onChange,
            xPosition = 0,
            min,
            max,
            bounds = [],
            zIndex,
            disabled,
            side,
            showCurrentValue = false,
            startOffset = 0,
            endOffset = 0,
            ...rest
        },
        ref,
    ) => {
        const lastOnChangeValue = useRef<number>();
        const currentSliderValue = lastOnChangeValue?.current ?? rest.value;

        const [offsetLeft, offsetRight] = getOffsets(ref, side);

        const [leftValueBound, rightValueBound] = bounds;
        const leftPositionBound = leftValueBound ? (leftValueBound - min) * stepSize : null;
        const rightPositionBound = rightValueBound ? (rightValueBound - min) * stepSize : null;

        const position = typeof xPosition === 'number' ? { x: xPosition, y: 0 } : undefined;
        const tabIndex = disabled ? -1 : 0;

        const [positionX, setPositionX] = useState(position?.x ?? 0);

        const computedBounds = {
            left: (leftPositionBound ?? 0) + offsetLeft,
            right: (rightPositionBound ?? stepSize * (max - min)) - offsetRight,
        };

        const showCurrentValueCondition =
            showCurrentValue && positionX >= startOffset && positionX <= max * stepSize - endOffset;

        const onDrag = useCallback<DraggableEventHandler>(
            (_, data) => {
                const newValue = getSliderThumbValue(data.x, stepSize, min, max);
                if (lastOnChangeValue.current !== newValue) {
                    onChange?.(newValue, data);
                    setPositionX(data.x);
                    lastOnChangeValue.current = newValue;
                }
            },
            [onChange, setPositionX, stepSize, min, max],
        );

        const onStop = useCallback<DraggableEventHandler>(
            (_, data) => {
                const newValue = getSliderThumbValue(data.x, stepSize, min, max);
                setPositionX(data.x);
                onChangeCommitted && onChangeCommitted(newValue, data);
            },
            [onChangeCommitted, setPositionX, stepSize, min, max],
        );

        const onKeyPress = useCallback(
            (event: KeyboardEvent<HTMLDivElement>) => {
                event.persist();

                const { keyCode, target } = event;

                if (!Object.values(KeyboardSupport).includes(keyCode)) {
                    return;
                }

                const { ArrowUp, ArrowRight, ArrowDown, ArrowLeft, Home, End, PageDown, PageUp } = KeyboardSupport;

                const computedMultipleSteps = stepSize * ((rest.multipleStepSize / 100) * max);

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

                const { left, right } = computedBounds;

                /*
                 * INFO: Находим значение в диапазоне между указанными левой и правой границами.
                 * Необходимо для правильного расчета положения SliderThumb.
                 * см. функция clamp
                 */
                const boundedValue = Math.max(Math.min(right, data.x), left);

                const computedValue = getSliderThumbValue(boundedValue, stepSize, min, max);
                lastOnChangeValue.current = computedValue;

                onChangeCommitted && onChangeCommitted(computedValue, data);
            },
            [onChangeCommitted, bounds, stepSize, rest.multipleStepSize, min, max, xPosition],
        );

        return (
            <Draggable
                axis="x"
                bounds={computedBounds}
                grid={[stepSize, 1]}
                onStop={onStop}
                onDrag={onDrag}
                position={position}
                disabled={disabled}
            >
                <HandleStyled ref={ref} style={{ zIndex }} onKeyDown={onKeyPress}>
                    <Thumb
                        tabIndex={tabIndex}
                        min={min}
                        max={max}
                        value={currentSliderValue}
                        disabled={disabled}
                        {...rest}
                    />
                    {showCurrentValueCondition && <StyledValue>{currentSliderValue}</StyledValue>}
                </HandleStyled>
            </Draggable>
        );
    },
);
