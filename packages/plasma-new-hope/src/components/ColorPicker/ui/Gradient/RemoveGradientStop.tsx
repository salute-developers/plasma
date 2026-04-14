import React from 'react';

import { usePicker } from '../../ColorPicker.context';
import { ColorStop } from '../../ColorPicker.types';
import { high, low } from '../../lib/colorStopFormatters';
import { TrashIcon } from '../icons';

import { GradientTypeControl } from './Gradient.styled';
import { makeKeyHandler } from './utils';

interface RemoveGradientStopProps {
    slot?: (props: { onRemove: () => void }) => React.ReactElement;
}

export const DeleteBtn = ({ slot }: RemoveGradientStopProps) => {
    const { colors, selectedColor, createGradientStr, pickerIdSuffix } = usePicker();

    const deletePoint = () => {
        if (colors.length <= 2) return;

        const formatted: ColorStop[] = colors.map((fc, i) => ({
            ...fc,
            value: i === selectedColor - 1 ? high(fc) : low(fc),
        }));
        const remaining = formatted.filter((_, i) => i !== selectedColor);
        createGradientStr(remaining);
    };

    if (slot) {
        return slot({
            onRemove: deletePoint,
        });
    }

    return (
        <GradientTypeControl
            type="button"
            onClick={deletePoint}
            onKeyDown={makeKeyHandler(deletePoint)}
            id={`plasma-color-picker-point-delete-btn${pickerIdSuffix}`}
            aria-label="Delete gradient stop"
        >
            <TrashIcon />
        </GradientTypeControl>
    );
};
