import React from 'react';
import styled from 'styled-components';
import Draggable, { DraggableData } from 'react-draggable';
import { surfaceLiquid03, white } from '@salutejs/plasma-core';
import { accent } from '@salutejs/plasma-tokens-b2c';

import { handleDiameter, handleBorderWidth } from './SliderBase';

interface HandleProps {
    stepSize: number;
    min: number;
    max: number;
    side?: 'left' | 'right';
    bounds?: number[];
    xPosition?: number;
    zIndex?: number;
    disabled?: boolean;
    onChangeCommitted(value: number, data: DraggableData): void;
    onChange?(value: number, data: DraggableData): void;
}

const HandleStyled = styled.div`
    cursor: pointer;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
`;

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

function getValue(handleCenterXRelative: number, stepSize: number, min: number, max: number) {
    const newValue = Math.round(handleCenterXRelative / stepSize) + min;

    return Math.min(Math.max(newValue, min), max);
}

function getOffsets(
    ref: ((instance: HTMLDivElement | null) => void) | React.MutableRefObject<HTMLDivElement | null> | null,
    side?: 'left' | 'right',
) {
    if (!ref || !('current' in ref) || !ref.current || !side) {
        return [0, 0];
    }

    const size = ref.current.clientWidth;

    if (side === 'left') {
        return [0, size];
    }

    if (side === 'right') {
        return [size, 0];
    }

    return [0, 0];
}

export const Handle = React.forwardRef<HTMLDivElement, HandleProps>(
    ({ stepSize, onChangeCommitted, onChange, xPosition, min, max, bounds = [], zIndex, disabled, side }, ref) => {
        const lastOnChangeValue = React.useRef<number | null>(null);

        const onDrag = React.useCallback(
            (_, data) => {
                if (onChange) {
                    const newValue = getValue(data.x, stepSize, min, max);
                    if (lastOnChangeValue.current !== newValue) {
                        onChange(newValue, data);
                        lastOnChangeValue.current = newValue;
                    }
                }
            },
            [onChange, stepSize, min, max],
        );

        const onStop = React.useCallback(
            (_, data) => {
                const newValue = getValue(data.x, stepSize, min, max);
                onChangeCommitted(newValue, data);
            },
            [onChangeCommitted, stepSize, min, max],
        );

        const [offsetLeft, offsetRight] = getOffsets(ref, side);

        const [leftValueBound, rightValueBound] = bounds;
        const leftPositionBound = leftValueBound ? (leftValueBound - min) * stepSize : null;
        const rightPositionBound = rightValueBound ? (rightValueBound - min) * stepSize : null;
        const tabIndex = disabled ? -1 : 0;

        return (
            <Draggable
                axis="x"
                bounds={{
                    left: (leftPositionBound ?? 0) + offsetLeft,
                    right: (rightPositionBound ?? stepSize * (max - min)) - offsetRight,
                }}
                grid={[stepSize, 1]}
                onStop={onStop}
                onDrag={onDrag}
                position={typeof xPosition === 'number' ? { x: xPosition, y: 0 } : undefined}
                disabled={disabled}
            >
                <HandleStyled ref={ref} style={{ zIndex }}>
                    <SliderThumb disabled={disabled} tabIndex={tabIndex} />
                </HandleStyled>
            </Draggable>
        );
    },
);
