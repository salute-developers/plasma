import React, { useState, useEffect } from 'react';

import { getHandleValue } from '../../lib/utils';
import { low } from '../../lib/colorStopFormatters';
import { usePicker } from '../../ColorPicker.context';
import { ColorStop } from '../../ColorPicker.types';
import { TRACK_OFFSET } from '../../lib/constants';

import { GradientHandle } from './GradientHandle';
import { GradientBarWrapper, GradientRoot } from './Gradient.styled';

const force90degLinear = (color: string): string =>
    color.replace(/(radial|linear)-gradient\([^,]+,/, 'linear-gradient(90deg,');

export const GradientBar = () => {
    const {
        value,
        colors,
        config,
        squareWidth,
        currentColor,
        handleGradient,
        pickerIdSuffix,
        createGradientStr,
    } = usePicker();

    const { barSize } = config;
    const [dragging, setDragging] = useState(false);

    useEffect(() => {
        const handleUp = () => setDragging(false);
        window.addEventListener('mouseup', handleUp);
        return () => window.removeEventListener('mouseup', handleUp);
    }, []);

    const addPoint = (e: React.MouseEvent) => {
        const left = getHandleValue(e.nativeEvent, barSize);
        const newColors: ColorStop[] = [
            ...colors.map((c) => ({ ...c, value: low(c) })),
            { value: currentColor, left },
        ].sort((a, b) => a.left - b.left);
        createGradientStr(newColors);
    };

    const handleDown = (e: React.MouseEvent) => {
        if (dragging) return;
        addPoint(e);
        setDragging(true);
    };

    const handleMove = (e: React.MouseEvent) => {
        if (dragging) handleGradient(currentColor, getHandleValue(e.nativeEvent, barSize));
    };

    return (
        <GradientRoot id={`plasma-color-picker-gradient-bar${pickerIdSuffix}`}>
            <GradientBarWrapper
                style={{
                    width: squareWidth - TRACK_OFFSET,
                    backgroundImage: force90degLinear(value),
                }}
                onMouseDown={handleDown}
                onMouseMove={handleMove}
                id={`plasma-color-picker-gradient-bar-canvas${pickerIdSuffix}`}
            />
            {colors.map((c: ColorStop, i: number) => (
                <GradientHandle i={i} left={c.left} key={`${i}-${c.left}-${c.value}`} setDragging={setDragging} />
            ))}
        </GradientRoot>
    );
};
