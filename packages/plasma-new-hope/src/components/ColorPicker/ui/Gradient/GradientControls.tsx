import React from 'react';

import { usePicker } from '../../ColorPicker.context';

import { GradientRoot } from './Gradient.styled';
import { GradientType } from './GradientType';
import { StopPicker } from './StopPicker';
import { DeleteBtn } from './RemoveGradientStop';
import { DegreePicker } from './DegreePicker';

interface GradientControlsProps {
    hideGradientType?: boolean;
    hideGradientAngle?: boolean;
    hideGradientStop?: boolean;
    degreePickerSlot?: (props: {
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
        value: number;
    }) => React.ReactElement;
    stopPickerSlot?: (props: {
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
        value: number;
    }) => React.ReactElement;
    removeGradientStopSlot?: (props: { onRemove: () => void }) => React.ReactElement;
}

export const GradientControls = ({
    degreePickerSlot,
    stopPickerSlot,
    removeGradientStopSlot,
    hideGradientType,
    hideGradientAngle,
    hideGradientStop,
}: GradientControlsProps) => {
    const { gradientType, pickerIdSuffix } = usePicker();

    return (
        <GradientRoot id={`plasma-color-picker-gradient-controls-wrap${pickerIdSuffix}`}>
            {!hideGradientType ? <GradientType /> : null}

            {!hideGradientAngle && gradientType === 'linear-gradient' ? <DegreePicker slot={degreePickerSlot} /> : null}

            {!hideGradientStop ? <StopPicker slot={stopPickerSlot} /> : null}
            <DeleteBtn slot={removeGradientStopSlot} />
        </GradientRoot>
    );
};
