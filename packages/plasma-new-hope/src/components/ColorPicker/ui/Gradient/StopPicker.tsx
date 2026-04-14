import React from 'react';

import { usePicker } from '../../ColorPicker.context';
import { Group } from '../../ColorPicker.styles';
import { tokens } from '../../ColorPicker.tokens';
import { formatInputValues } from '../../lib/formatters';
import { InputWrapper } from '../Inputs/Inputs.styled';

interface StopPickerProps {
    slot?: (props: { onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; value: number }) => React.ReactElement;
}

export const StopPicker = ({ slot }: StopPickerProps) => {
    const { currentLeft, currentColor, handleGradient, pickerIdSuffix } = usePicker();

    const handleMove = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleGradient(currentColor, formatInputValues(parseInt(e.target.value, 10), 0, 100));
    };

    if (slot) {
        return slot({
            onChange: handleMove,
            value: currentLeft,
        });
    }

    return (
        <Group pos="relative" id={`plasma-color-picker-stop-input-wrapper${pickerIdSuffix}`}>
            <InputWrapper style={{ width: 80 }}>
                <Group align="center" gap={4}>
                    <span
                        style={{ position: 'absolute', left: 8, fontSize: 12, color: `var(${tokens.activeTabColor})` }}
                    >
                        Stop
                    </span>
                    <input
                        style={{
                            textAlign: 'left',
                            paddingLeft: 44,
                        }}
                        value={currentLeft}
                        id={`plasma-color-picker-stop-input${pickerIdSuffix}`}
                        onChange={handleMove}
                        aria-label="Gradient stop position"
                    />
                </Group>
            </InputWrapper>
        </Group>
    );
};
