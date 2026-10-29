import React, { useState, useEffect } from 'react';
import { getHandleValue } from 'src/components/ColorPicker/lib/utils';

import { CheckeredStyled } from '../Checkered/Checkered.styled';
import { usePicker } from '../../ColorPicker.context';
import { ColorPickerHandleStyled } from '../ColorPickerHandle/ColorPickerHandle.styled';
import { OPACITY_TRACK_OFFSET } from '../../lib/constants';

import { OpacityWrapper, OpacityOverlay } from './Opacity.styled';

export const Opacity = () => {
    const { config, hc, squareWidth, handleChange, pickerIdSuffix } = usePicker();
    const [dragging, setDragging] = useState(false);
    const { r, g, b, a } = hc;
    const { barSize } = config;

    const maxLeft = squareWidth - OPACITY_TRACK_OFFSET;
    const bg = `linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(${r},${g},${b}, 1) 100%)`;

    useEffect(() => {
        const handleUp = () => setDragging(false);
        window.addEventListener('mouseup', handleUp);
        return () => window.removeEventListener('mouseup', handleUp);
    }, []);

    const handleOpacity = (e: React.MouseEvent) => {
        const newO = getHandleValue(e.nativeEvent, barSize) / 100;
        handleChange(`rgba(${r}, ${g}, ${b}, ${newO})`);
    };

    const handleMove = (e: React.MouseEvent) => {
        if (dragging) handleOpacity(e);
    };

    const handleClick = (e: React.MouseEvent) => {
        if (!dragging) handleOpacity(e);
    };

    return (
        <OpacityWrapper onMouseMove={handleMove} id={`plasma-color-picker-opacity-wrapper${pickerIdSuffix}`}>
            <CheckeredStyled id={`plasma-color-picker-opacity-checkered-bg${pickerIdSuffix}`} />
            <ColorPickerHandleStyled
                id={`plasma-color-picker-opacity-handle${pickerIdSuffix}`}
                style={{ left: maxLeft * a, marginLeft: 2 }}
                onMouseDown={() => setDragging(true)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') setDragging(true);
                }}
                role="slider"
                tabIndex={0}
                aria-label="Opacity"
                aria-valuenow={Math.round(a * 100)}
                aria-valuemin={0}
                aria-valuemax={100}
            />
            <OpacityOverlay
                style={{ background: bg }}
                id={`plasma-color-picker-opacity-overlay${pickerIdSuffix}`}
                onClick={handleClick}
                role="presentation"
            />
        </OpacityWrapper>
    );
};
