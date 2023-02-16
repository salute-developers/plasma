import React, { PropsWithChildren, useCallback, useRef, MouseEventHandler } from 'react';
import styled, { css } from 'styled-components';
import { DraggableData } from 'react-draggable';

import { useIsomorphicLayoutEffect } from '../../hooks';

import { SliderBaseProps, SliderSettings } from './types';

interface SliderProps extends SliderBaseProps {
    railFillWidth: number;
    railFillXPosition?: number;
    setStepSize(stepSize: number): void;
    onChange?(value: number, data: DraggableData): void;
}

const Slider = styled.div<{ disabled?: boolean; $settings: SliderSettings }>`
    position: relative;
    height: 1.625rem;
    user-select: none;

    ${({ $settings: { indent = 0.75, backgroundColor, fillColor } }) => css`
        --indent: ${indent}rem;
        --background-color: ${backgroundColor};
        --fill-color: ${fillColor};
    `}

    ${({ disabled }) =>
        disabled &&
        css`
            opacity: 0.4;
        `}
`;

const RailWrap = styled.div`
    height: 100%;
`;

const Rail = styled.div`
    position: relative;
    top: 50%;

    margin-left: var(--indent);
    margin-right: var(--indent);

    height: 0.25rem;

    border-radius: 0.125rem;
    background-color: var(--background-color);

    overflow: hidden;
    transform: translateY(-50%);
`;

const Fill = styled.div`
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
    background-color: var(--fill-color);
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
    settings = {},
}) => {
    const { indent = 0.75, fontSizeMultiplier = 16 } = settings;

    const ref = useRef<HTMLDivElement | null>(null);
    const gap = indent * fontSizeMultiplier * 2;

    const onHandleChange: MouseEventHandler<HTMLDivElement> = useCallback(
        (e) => {
            if (!onChange || disabled) {
                return;
            }

            const { x, width } = e.currentTarget.getBoundingClientRect();

            const lastX = e.clientX - x;

            const position = min + (lastX / (width - gap)) * (max - min);
            const result = Math.max(min, Math.min(max, position));

            onChange(result, { lastX } as DraggableData);
        },
        [onChange, disabled, min, gap, max],
    );

    useIsomorphicLayoutEffect(() => {
        const resizeHandler = () => {
            if (ref.current) {
                const railSize = ref.current.offsetWidth - gap;
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
        <Slider disabled={disabled} ref={ref} $settings={settings}>
            <RailWrap aria-hidden="true" onMouseDown={onHandleChange}>
                <Rail>
                    <Fill style={fillStyle} />
                </Rail>
            </RailWrap>

            {children}
        </Slider>
    );
};
