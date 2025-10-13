import React, { useRef, useState, forwardRef, KeyboardEvent } from 'react';
import Draggable, { DraggableEventHandler } from 'react-draggable';
import { useForkRef } from '@salutejs/plasma-core';
import { cx } from 'src/utils';

import { getSliderThumbValue, getOffsets } from '../../utils';
import { Thumb } from '../Thumb/Thumb';
import { classes } from '../../Slider.tokens';

import type { HandlerProps } from './Handler.types';
import { HandlerStyled, StyledValue } from './Handler.styles';
import { computeKeyPressData } from './computeKeyPressData';

// TODO: PLASMA-1707
declare module 'react-draggable' {
    export interface DraggableProps {
        children: React.ReactNode;
    }
}

export const Handler = forwardRef<HTMLDivElement, HandlerProps>(
    (
        {
            size,
            visibility,
            isHovered,
            orientation,
            stepSize,
            onChangeCommitted,
            onChange,
            position = 0,
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
            valuePlacement,
            ...rest
        },
        ref,
    ) => {
        const nodeRef = useRef<HTMLDivElement>(null);
        const combinedRef = useForkRef(nodeRef, ref);

        const isVertical = orientation === 'vertical';
        const [isDrag, setIsDrag] = useState(false);

        const lastOnChangeValue = useRef<number>();
        const [startClientOffset, endClientOffset] = getOffsets(nodeRef, side, isVertical);

        const [startValueBound, endValueBound] = bounds;
        const startPositionBound = startValueBound ? (startValueBound - min) * stepSize : null;
        const endPositionBound = endValueBound ? (endValueBound - min) * stepSize : null;

        const dragPosition =
            typeof position === 'number' ? { x: isVertical ? 0 : position, y: isVertical ? position : 0 } : undefined;
        const tabIndex = disabled ? -1 : 0;

        const computedBounds = {
            [isVertical ? 'top' : 'left']: (startPositionBound ?? 0) - (startClientOffset ? stepSize : 0),
            [isVertical ? 'bottom' : 'right']:
                (endPositionBound ?? stepSize * (max - min)) - (endClientOffset ? stepSize : 0),
        };

        const showCurrentValueCondition =
            showCurrentValue &&
            ((position >= startOffset && position <= max * stepSize - endOffset) || (position === 0 && value !== 0));

        const onDrag: DraggableEventHandler = (_, data) => {
            const newValue = getSliderThumbValue(isVertical ? data.y : data.x, stepSize, min, max);

            if (lastOnChangeValue.current !== newValue) {
                onChange?.(newValue, data);
                lastOnChangeValue.current = newValue;
            }
        };

        const onStart: DraggableEventHandler = () => {
            setIsDrag(true);
        };

        const onStop: DraggableEventHandler = (_, data) => {
            setIsDrag(false);

            const newValue = getSliderThumbValue(isVertical ? data.y : data.x, stepSize, min, max);
            onChangeCommitted && onChangeCommitted(newValue, data);
        };

        const onKeyPress = (event: KeyboardEvent<HTMLDivElement>) => {
            event.persist();

            const computedMultipleSteps = stepSize * ((rest.multipleStepSize / 100) * max);

            const data = computeKeyPressData(event, {
                isVertical,
                stepSize,
                position,
                max,
                computedMultipleSteps,
            });

            if (!data) {
                return;
            }

            const { left, right, top, bottom } = computedBounds;

            /*
             * INFO: Находим значение в диапазоне между указанными левой и правой границами.
             * Или между верхней и нижней
             * Необходимо для правильного расчета положения SliderThumb.
             * см. функция clamp
             */
            const boundedValue = isVertical
                ? Math.max(Math.min(bottom, data.y), top)
                : Math.max(Math.min(right, data.x), left);

            const computedValue = getSliderThumbValue(boundedValue, stepSize, min, max);
            lastOnChangeValue.current = computedValue;

            onChangeCommitted && onChangeCommitted(computedValue, data);
        };

        let isPointerHidden = (visibility === 'hover' && !isHovered) || size === 'none';

        if (isDrag) {
            isPointerHidden = false;
        }

        return (
            <Draggable
                nodeRef={nodeRef}
                axis={isVertical ? 'y' : 'x'}
                bounds={computedBounds}
                grid={isVertical ? [1, stepSize] : [stepSize, 1]}
                onStart={onStart}
                onStop={onStop}
                onDrag={onDrag}
                position={dragPosition}
                disabled={disabled}
            >
                <HandlerStyled
                    ref={combinedRef}
                    style={{ zIndex }}
                    className={cx(
                        isVertical && classes.verticalOrientation,
                        valuePlacement === 'left' && classes.valuePlacementLeft,
                    )}
                    isLarge={size === 'large'}
                    isPointerHidden={isPointerHidden}
                    onKeyDown={onKeyPress}
                >
                    {!isPointerHidden && (
                        <Thumb
                            tabIndex={tabIndex}
                            min={min}
                            max={max}
                            value={value}
                            disabled={disabled}
                            orientation={orientation}
                            {...rest}
                        />
                    )}
                    {showCurrentValueCondition && <StyledValue isPointerHidden={isPointerHidden}>{value}</StyledValue>}
                </HandlerStyled>
            </Draggable>
        );
    },
);
