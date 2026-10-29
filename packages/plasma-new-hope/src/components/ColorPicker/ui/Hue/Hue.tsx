import React, { useRef, useState, useEffect } from 'react';
import tinycolor from 'tinycolor2';

import { getHandleValue } from '../../lib/utils';
import { usePicker } from '../../ColorPicker.context';
import { usePaintHue } from '../../hooks/usePaintHue';
import { HANDLE_SIZE, TRACK_OFFSET, HUE_MULTIPLIER, HUE_DEGREES } from '../../lib/constants';

import { StyledPicker, StyledRoot } from './Hue.styled';

export const Hue = () => {
    const barRef = useRef<HTMLCanvasElement>(null);
    const { config, handleChange, squareWidth, hc, setHc, pickerIdSuffix } = usePicker();
    const TRACK_WIDTH = squareWidth - TRACK_OFFSET;
    const { barSize } = config;

    const [dragging, setDragging] = useState(false);

    usePaintHue(barRef, TRACK_WIDTH);

    useEffect(() => {
        const handleUp = () => setDragging(false);
        window.addEventListener('mouseup', handleUp);
        return () => window.removeEventListener('mouseup', handleUp);
    }, []);

    const handleHue = (e: React.MouseEvent) => {
        const newHue = Math.min(getHandleValue(e.nativeEvent, barSize) * HUE_MULTIPLIER, HUE_DEGREES);
        const { r, g, b } = tinycolor({ h: newHue, s: hc.s, v: hc.v }).toRgb();
        handleChange(`rgba(${r}, ${g}, ${b}, ${hc.a})`);
        setHc({ ...hc, h: newHue });
    };

    const handleMove = (e: React.MouseEvent) => {
        if (dragging) handleHue(e);
    };

    const handleClick = (e: React.MouseEvent) => {
        if (!dragging) handleHue(e);
    };

    const handleLeft = (hc.h / HUE_DEGREES) * (TRACK_WIDTH - HANDLE_SIZE);

    return (
        <StyledRoot onMouseMove={handleMove} id={`plasma-color-picker-hue-wrap${pickerIdSuffix}`}>
            <StyledPicker
                tabIndex={0}
                role="slider"
                aria-label="Hue"
                aria-valuenow={Math.round(hc.h)}
                aria-valuemin={0}
                aria-valuemax={360}
                style={{
                    left: handleLeft > 0 ? handleLeft - 2 : 0,
                }}
                onMouseDown={() => setDragging(true)}
                id={`plasma-color-picker-hue-handle${pickerIdSuffix}`}
            />
            <canvas
                ref={barRef}
                height="14px"
                width={`${TRACK_WIDTH}px`}
                onClick={handleClick}
                id={`plasma-color-picker-hue-bar${pickerIdSuffix}`}
                style={{
                    borderRadius: 8,
                    position: 'relative',
                    border: '1px solid #E0E0E0',
                }}
            />
        </StyledRoot>
    );
};
