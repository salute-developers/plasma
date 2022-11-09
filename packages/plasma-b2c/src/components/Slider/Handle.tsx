import React, { useRef, useCallback, forwardRef } from 'react';
import styled from 'styled-components';
import Draggable from 'react-draggable';

import { HandleProps } from './types';
import { getSliderThumbValue, getOffsets } from './utils';
import { Thumb } from './Thumb';

const HandleStyled = styled.div`
    cursor: pointer;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
`;

export const Handle = forwardRef<HTMLDivElement, HandleProps>(
    (
        { stepSize, onChangeCommitted, onChange, xPosition, min, max, bounds = [], zIndex, disabled, side, ...rest },
        ref,
    ) => {
        const lastOnChangeValue = useRef<number>();

        const currentSliderValue = lastOnChangeValue?.current || rest.value;

        const onDrag = useCallback(
            (_, data) => {
                if (onChange) {
                    const newValue = getSliderThumbValue(data.x, stepSize, min, max);
                    if (lastOnChangeValue.current !== newValue) {
                        onChange(newValue, data);
                        lastOnChangeValue.current = newValue;
                    }
                }
            },
            [onChange, stepSize, min, max],
        );

        const onStop = useCallback(
            (_, data) => {
                const newValue = getSliderThumbValue(data.x, stepSize, min, max);
                onChangeCommitted(newValue, data);
            },
            [onChangeCommitted, stepSize, min, max],
        );

        const [offsetLeft, offsetRight] = getOffsets(ref, side);

        const [leftValueBound, rightValueBound] = bounds;
        const leftPositionBound = leftValueBound ? (leftValueBound - min) * stepSize : null;
        const rightPositionBound = rightValueBound ? (rightValueBound - min) * stepSize : null;

        const position = typeof xPosition === 'number' ? { x: xPosition, y: 0 } : undefined;

        const tabIndex = disabled ? -1 : 0;

        const computedBounds = {
            left: (leftPositionBound ?? 0) + offsetLeft,
            right: (rightPositionBound ?? stepSize * (max - min)) - offsetRight,
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
                <HandleStyled ref={ref} style={{ zIndex }}>
                    <Thumb
                        tabIndex={tabIndex}
                        min={min}
                        max={max}
                        value={currentSliderValue}
                        stepSize={stepSize}
                        onChangeCommitted={onChangeCommitted}
                        xPosition={xPosition}
                        disabled={disabled}
                        bounds={computedBounds}
                        {...rest}
                    />
                </HandleStyled>
            </Draggable>
        );
    },
);
