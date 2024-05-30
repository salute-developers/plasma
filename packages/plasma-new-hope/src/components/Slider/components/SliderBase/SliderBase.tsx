import React, { PropsWithChildren, useRef, MouseEventHandler, useEffect } from 'react';
import { DraggableData } from 'react-draggable';

import { useIsomorphicLayoutEffect } from '../../../../hooks';

import type { SliderViewProps } from './SliderBase.types';
import { Fill, Rail, RailWrap, Slider } from './SliderBase.styles';

export const SliderBase: React.FC<PropsWithChildren<SliderViewProps>> = ({
    max,
    min,
    setStepSize,
    railFillWidth,
    children,
    railFillXPosition = 0,
    disabled,
    labelPlacement,
    rangeValuesPlacement,
    onChange,
    settings = {},
}) => {
    const { indent = 0.75, fontSizeMultiplier = 16 } = settings;

    const ref = useRef<HTMLDivElement | null>(null);
    const gap = indent * fontSizeMultiplier * 2;

    useEffect(() => {
        const resizeHandler = () => {
            if (ref.current) {
                const railSize = ref.current.offsetWidth - gap;
                const totalSteps = max - min;

                setStepSize(railSize / totalSteps);
            }
        };

        resizeHandler();
    }, [labelPlacement, rangeValuesPlacement, ref.current]);

    const onHandleChange: MouseEventHandler<HTMLDivElement> = (e) => {
        if (!onChange || disabled) {
            return;
        }

        const { x, width } = e.currentTarget.getBoundingClientRect();

        const lastX = e.clientX - x;

        const position = min + (lastX / (width - gap)) * (max - min);
        const result = Math.max(min, Math.min(max, position));

        onChange(result, { lastX } as DraggableData);
    };

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
    }, [min, max, setStepSize, ref.current, gap, labelPlacement, rangeValuesPlacement]);

    const fillStyle = { left: `${railFillXPosition}px`, width: `${railFillWidth}px` };

    return (
        <Slider ref={ref}>
            <RailWrap aria-hidden="true" onMouseDown={onHandleChange}>
                <Rail>
                    <Fill style={fillStyle} />
                </Rail>
            </RailWrap>

            {children}
        </Slider>
    );
};
