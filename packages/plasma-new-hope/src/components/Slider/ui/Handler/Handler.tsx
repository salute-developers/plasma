import React, { useRef, forwardRef, KeyboardEvent } from 'react';
import Draggable, { DraggableEventHandler } from 'react-draggable';
import type { DraggableData } from 'react-draggable';

import { getSliderThumbValue, getOffsets } from '../../utils';
import { Thumb } from '../Thumb/Thumb';

import type { HandlerProps } from './Handler.types';
import { HandlerStyled, StyledValue } from './Handler.styles';

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

export const Handler = forwardRef<HTMLDivElement, HandlerProps>(
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
            value,
            ...rest
        },
        ref,
    ) => {
        const lastOnChangeValue = useRef<number>();

        const [offsetLeft, offsetRight] = getOffsets(ref, side);

        const [leftValueBound, rightValueBound] = bounds;
        const leftPositionBound = leftValueBound ? (leftValueBound - min) * stepSize : null;
        const rightPositionBound = rightValueBound ? (rightValueBound - min) * stepSize : null;

        const position = typeof xPosition === 'number' ? { x: xPosition, y: 0 } : undefined;
        const tabIndex = disabled ? -1 : 0;

        const computedBounds = {
            left: (leftPositionBound ?? 0) - (offsetLeft ? stepSize : 0),
            right: (rightPositionBound ?? stepSize * (max - min)) - (offsetRight ? stepSize : 0),
        };

        console.log(computedBounds);

        const showCurrentValueCondition =
            showCurrentValue &&
            ((xPosition >= startOffset && xPosition <= max * stepSize - endOffset) || (xPosition === 0 && value !== 0));

        const onDrag: DraggableEventHandler = (_, data) => {
            const newValue = getSliderThumbValue(data.x, stepSize, min, max);
            if (lastOnChangeValue.current !== newValue) {
                onChange?.(newValue, data);
                lastOnChangeValue.current = newValue;
            }
        };

        const onStop: DraggableEventHandler = (_, data) => {
            const newValue = getSliderThumbValue(data.x, stepSize, min, max);
            onChangeCommitted && onChangeCommitted(newValue, data);
        };

        const onKeyPress = (event: KeyboardEvent<HTMLDivElement>) => {
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
        };

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
                <HandlerStyled ref={ref} style={{ zIndex }} onKeyDown={onKeyPress}>
                    <Thumb tabIndex={tabIndex} min={min} max={max} value={value} disabled={disabled} {...rest} />
                    {showCurrentValueCondition && <StyledValue>{value}</StyledValue>}
                </HandlerStyled>
            </Draggable>
        );
    },
);
