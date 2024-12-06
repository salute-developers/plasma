import React, { PropsWithChildren, useRef, MouseEventHandler, useEffect } from 'react';
import { DraggableData } from 'react-draggable';

import { useIsomorphicLayoutEffect } from '../../../../hooks';
import { classes } from '../../Slider.tokens';
import { cx } from '../../../../utils';

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
    orientation,
    reversed,
    size,
    sliderAlign,
}) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const isVertical = orientation === 'vertical';

    useEffect(() => {
        const resizeHandler = () => {
            if (ref.current) {
                const railSize = isVertical ? ref.current.offsetHeight : ref.current.offsetWidth;
                const totalSteps = max - min;

                setStepSize(railSize / totalSteps);
            }
        };

        resizeHandler();
    }, [
        labelPlacement,
        rangeValuesPlacement,
        isVertical,
        // для перерасчета размеров
        size,
        sliderAlign,
    ]);

    const onHandleChange: MouseEventHandler<HTMLDivElement> = (e) => {
        if (!onChange || disabled) {
            return;
        }

        const { x, width, y, height } = e.currentTarget.getBoundingClientRect();

        const lastPos = isVertical ? e.clientY - y : e.clientX - x;
        const sliderWidth = isVertical ? height : width;

        const position = min + (lastPos / sliderWidth) * (max - min);
        const result = Math.max(min, Math.min(max, position));

        const data = isVertical ? { lastY: lastPos } : { lastX: lastPos };
        onChange(result, (data as unknown) as DraggableData);
    };

    useIsomorphicLayoutEffect(() => {
        const resizeHandler = () => {
            if (ref.current) {
                const railSize = isVertical ? ref.current.offsetHeight : ref.current.offsetWidth;
                const totalSteps = max - min;

                setStepSize(railSize / totalSteps);
            }
        };

        resizeHandler();
        window.addEventListener('resize', resizeHandler);

        return () => window.removeEventListener('resize', resizeHandler);
    }, [min, max, setStepSize, labelPlacement, rangeValuesPlacement, isVertical]);

    const fillStyle = (() => {
        if (isVertical && reversed) {
            return { bottom: 0, height: `calc(100% - ${railFillWidth}px)`, top: 'auto', width: '100%' };
        }

        if (isVertical) {
            return { bottom: `${railFillXPosition}px`, height: `${railFillWidth}px`, width: '100%' };
        }

        return { left: `${railFillXPosition}px`, width: `${railFillWidth}px` };
    })();

    return (
        <Slider ref={ref} className={cx(orientation === 'vertical' && classes.verticalOrientation)}>
            <RailWrap aria-hidden="true" onMouseDown={onHandleChange}>
                <Rail>
                    <Fill style={fillStyle} />
                </Rail>
            </RailWrap>

            {children}
        </Slider>
    );
};
