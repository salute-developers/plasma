import React from 'react';

import { ColorPickerHandleStyled } from '../ColorPickerHandle';
import { usePicker } from '../../ColorPicker.context';
import { high, low } from '../../lib/colorStopFormatters';
import { GRADIENT_HANDLE_OFFSET } from '../../lib/constants';

import { GradientHandleRoot } from './Gradient.styled';

interface GradientHandleProps {
    i: number;
    setDragging: (value: boolean) => void;
    left?: number;
}

export const GradientHandle = ({ left, i, setDragging }: GradientHandleProps) => {
    const { colors, squareWidth, selectedColor, pickerIdSuffix, createGradientStr, selectColor } = usePicker();

    const isSelected = selectedColor === i;
    const leftMultiplier = (squareWidth - GRADIENT_HANDLE_OFFSET) / 100;

    const setSelectedColor = (index: number) => {
        const newGradStr = colors.map((cc, idx) => ({
            ...cc,
            value: idx === index ? high(cc) : low(cc),
        }));
        createGradientStr(newGradStr);
    };

    const handleDown = (e: React.MouseEvent) => {
        e.stopPropagation();
        selectColor?.(i);
        setDragging(true);
    };
    return (
        <GradientHandleRoot
            type="button"
            onMouseDown={handleDown}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') setSelectedColor(i);
            }}
            aria-label={`Gradient stop ${i + 1}`}
            id={`plasma-color-picker-gradient-handle-${i}${pickerIdSuffix}`}
            style={{
                left: (left ?? 0) * leftMultiplier + 2,
            }}
        >
            <ColorPickerHandleStyled
                style={{
                    ...(isSelected && {
                        outline: '2px solid var(--text-accent)',
                    }),
                }}
                id={`plasma-color-picker-gradient-handle-${i}-dot${pickerIdSuffix}`}
            />
        </GradientHandleRoot>
    );
};
