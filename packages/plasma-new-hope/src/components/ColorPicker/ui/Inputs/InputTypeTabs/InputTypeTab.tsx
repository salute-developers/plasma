import React from 'react';

import { usePicker } from '../../../ColorPicker.context';

import { InputTypeTabsRoot, InputTypeTabControl } from './InputTypeTabs.styled';

const INPUT_TYPES = ['hex', 'rgb', 'hsl', 'hsb'] as const;
type InputType = typeof INPUT_TYPES[number];

export const InputTypeTab = () => {
    const { inputType, setInputType, pickerIdSuffix } = usePicker();

    const handleInputType = (e: React.MouseEvent, val: InputType) => {
        e.stopPropagation();
        setInputType(val);
    };

    return (
        <InputTypeTabsRoot id={`plasma-color-picker-color-model-tabs${pickerIdSuffix}`}>
            {INPUT_TYPES.map((type) => (
                <InputTypeTabControl
                    key={type}
                    $active={inputType === type}
                    aria-pressed={inputType === type}
                    onClick={(e) => handleInputType(e, type)}
                >
                    {type.toUpperCase()}
                </InputTypeTabControl>
            ))}
        </InputTypeTabsRoot>
    );
};
