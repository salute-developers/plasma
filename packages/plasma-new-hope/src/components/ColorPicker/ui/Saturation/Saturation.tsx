import React, { useRef, useState, useEffect } from 'react';
import tinycolor from 'tinycolor2';
import { computePickerPosition, computeSquareXY } from 'src/components/ColorPicker/lib/utils';

import { usePicker } from '../../ColorPicker.context';
import { usePaintSaturation } from '../../hooks/usePaintSaturation';
import { ColorPickerHandleStyled } from '../ColorPickerHandle/ColorPickerHandle.styled';

import { SaturationCanvasWrapper, SaturationRoot } from './Saturation.styled';

export const Saturation = () => {
    const { hc, config, squareWidth, squareHeight, handleChange, pickerIdSuffix } = usePicker();

    const { crossSize } = config;
    const canvas = useRef<HTMLCanvasElement>(null);
    const [dragging, setDragging] = useState(false);
    const [x, y] = computeSquareXY(hc.s, hc.v * 100, squareWidth, squareHeight, crossSize);
    const [dragPos, setDragPos] = useState({ x, y });

    usePaintSaturation(canvas, hc.h, squareWidth, squareHeight);

    useEffect(() => {
        if (!dragging) {
            setDragPos({ x: hc.v === 0 ? dragPos.x : x, y });
        }
    }, [x, y, dragging, hc.v]);

    useEffect(() => {
        const handleUp = () => setDragging(false);
        window.addEventListener('mouseup', handleUp);
        return () => window.removeEventListener('mouseup', handleUp);
    }, []);

    const handleColor = (e: React.MouseEvent) => {
        const [px, py] = computePickerPosition(e.nativeEvent, crossSize);
        if (px === undefined || py === undefined) return;

        const x1 = Math.min(px + crossSize / 2, squareWidth - 1);
        const y1 = Math.min(py + crossSize / 2, squareHeight - 1);
        const newS = (x1 / squareWidth) * 100;
        const newV = 100 - (y1 / squareHeight) * 100;

        setDragPos({ x: newV === 0 ? dragPos.x : px, y: py });

        const updated = tinycolor(`hsva(${hc.h}, ${newS}%, ${newV}%, ${hc.a})`);
        handleChange(updated.toRgbString());
    };

    const handleMove = (e: React.MouseEvent) => {
        if (dragging) handleColor(e);
    };

    const handleClick = (e: React.MouseEvent) => {
        if (!dragging) handleColor(e);
    };

    const handleCanvasDown = (e: React.MouseEvent | React.TouchEvent) => {
        setDragging(true);
        handleColor(e as React.MouseEvent);
    };

    return (
        <SaturationRoot id={`plasma-color-picker-square-wrapper${pickerIdSuffix}`}>
            <div
                onMouseUp={() => setDragging(false)}
                onTouchEnd={() => setDragging(false)}
                onMouseDown={handleCanvasDown}
                onTouchStart={handleCanvasDown}
                onMouseMove={handleMove}
                id={`plasma-color-picker-square${pickerIdSuffix}`}
                style={{ position: 'relative', cursor: 'crosshair' }}
            >
                <ColorPickerHandleStyled
                    style={{
                        transform: `translate(${dragPos.x}px, ${dragPos.y}px)`,
                        cursor: 'crosshair',
                        ...(dragging ? { transition: 'none' } : {}),
                    }}
                    onMouseDown={() => setDragging(true)}
                    role="slider"
                    tabIndex={0}
                    aria-label="Color saturation and brightness"
                    aria-valuenow={Math.round(hc.s * 100)}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuetext={`Saturation: ${Math.round(hc.s * 100)}%, Brightness: ${Math.round(hc.v * 100)}%`}
                    id={`plasma-color-picker-square-handle${pickerIdSuffix}`}
                />
                <SaturationCanvasWrapper
                    $height={squareHeight}
                    role="presentation"
                    onClick={handleClick}
                    id={`plasma-color-picker-square-canvas-wrapper${pickerIdSuffix}`}
                >
                    <canvas
                        ref={canvas}
                        width={`${squareWidth}px`}
                        height={`${squareHeight}px`}
                        id={`plasma-color-picker-square-canvas${pickerIdSuffix}`}
                    />
                </SaturationCanvasWrapper>
            </div>
        </SaturationRoot>
    );
};
