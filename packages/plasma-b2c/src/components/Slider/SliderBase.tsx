import React, { PropsWithChildren, useCallback } from 'react';
import styled, { css } from 'styled-components';
import { surfaceLiquid03, buttonAccent } from '@salutejs/plasma-core';
import { DraggableData } from 'react-draggable';

export const handleDiameter = 1.25;
export const handleBorderWidth = 0.125; // 0.0625;
export const railHeight = 0.25;
export const railBorderRadius = railHeight / 2;
export const indentation = handleDiameter / 2 + handleBorderWidth;

interface SliderProps {
    min: number;
    max: number;
    railFillWidth: number;
    railFillXPosition?: number;
    disabled?: boolean;
    setStepSize(stepSize: number): void;
    onChange?(value: number, data: DraggableData): void;
}

const Slider = styled.div<{ disabled?: boolean }>`
    position: relative;
    height: 1.625rem;
    user-select: none;
    ${({ disabled }) =>
        disabled &&
        css`
            opacity: 0.4;
        `}
`;

const RailWrap = styled.div`
    height: 100%;
    margin-left: ${indentation}rem;
    margin-right: ${indentation}rem;
`;

const Rail = styled.div`
    position: relative;
    height: ${railHeight}rem;
    border-radius: ${railBorderRadius}rem;
    background-color: ${surfaceLiquid03};
    overflow: hidden;
    top: 50%;
    transform: translateY(-50%);
`;

const Fill = styled.div`
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
    background-color: ${buttonAccent};
    width: 0;
`;

export const SliderBase: React.FC<PropsWithChildren<SliderProps>> = ({
    max,
    min,
    setStepSize,
    railFillWidth,
    children,
    railFillXPosition = 0,
    disabled,
    onChange,
}) => {
    const ref = React.useRef<HTMLDivElement | null>(null);

    const onHandleChange: React.MouseEventHandler<HTMLDivElement> = useCallback(
        (e) => {
            if (!onChange) return;
            const { x, width } = e.currentTarget.getBoundingClientRect();
            const lastX = e.clientX - x;
            const position = min + (lastX / width) * (max - min);
            const result = Math.max(min, Math.min(max, position));

            onChange(result, { lastX } as DraggableData);
        },
        [onChange, min, max],
    );

    React.useLayoutEffect(() => {
        const resizeHandler = () => {
            if (ref.current) {
                const railSize = ref.current.offsetWidth;
                const totalSteps = max - min;
                setStepSize(railSize / totalSteps);
            }
        };
        resizeHandler();
        window.addEventListener('resize', resizeHandler);
        return () => window.removeEventListener('resize', resizeHandler);
    }, [min, max, setStepSize, ref.current]);

    const fillStyle = { left: `${railFillXPosition}px`, width: `${railFillWidth}px` };

    return (
        <Slider disabled={disabled}>
            <RailWrap aria-hidden="true" ref={ref} onMouseDown={onHandleChange}>
                <Rail>
                    <Fill style={fillStyle} />
                </Rail>
            </RailWrap>
            {children}
        </Slider>
    );
};
