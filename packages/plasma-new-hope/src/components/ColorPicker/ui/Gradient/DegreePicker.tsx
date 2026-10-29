import React from 'react';

import { usePicker } from '../../ColorPicker.context';
import { formatInputValues } from '../../lib/formatters';
import { Group } from '../../ColorPicker.styles';
import { InputWrapper } from '../Inputs/Inputs.styled';
import { DegreesIcon } from '../icons';

interface DegreePickerProps {
    slot?: (props: { onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; value: number }) => React.ReactElement;
}

export const DegreePicker = ({ slot }: DegreePickerProps) => {
    const { degrees, onChange, value, pickerIdSuffix } = usePicker();

    const handleDegrees = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = formatInputValues(parseInt(e.target.value, 10), 0, 360);
        const remaining = value.split(/,(.+)/)[1];
        onChange?.(`linear-gradient(${newValue}deg, ${remaining}`);
    };

    if (slot) {
        return slot({
            onChange: handleDegrees,
            value: degrees,
        });
    }

    return (
        <Group pos="relative" id={`plasma-color-picker-degree-input-wrapper${pickerIdSuffix}`}>
            <InputWrapper style={{ maxWidth: 60 }}>
                <DegreesIcon />
                <input
                    value={degrees}
                    onChange={handleDegrees}
                    id={`plasma-color-picker-degree-input${pickerIdSuffix}`}
                    aria-label="Gradient angle in degrees"
                />
                <span
                    style={{
                        position: 'absolute',
                        right: 4,
                        top: 4,
                        fontSize: 14,
                    }}
                >
                    °
                </span>
            </InputWrapper>
        </Group>
    );
};
