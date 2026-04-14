import React, { useMemo } from 'react';

import { usePicker } from '../../ColorPicker.context';
import { Group } from '../../ColorPicker.styles';

import { InputsWrapper } from './Inputs.styled';
import { HexInput } from './HexInput';
import { HSLInputs } from './HSLInput';
import { RGBInputs } from './RGBInput';
import { CMYKInputs } from './CMYKInput';
import { Input } from './Input';
import { HSBInputs } from './HSVInput';

const getInputComponent = (inputType: string) => {
    switch (inputType) {
        case 'cmyk':
            return <CMYKInputs />;
        case 'rgb':
            return <RGBInputs />;
        case 'hsl':
            return <HSLInputs />;
        case 'hsb':
            return <HSBInputs />;
        case 'hex':
            return <HexInput />;
        default:
            return null;
    }
};

export const Inputs = () => {
    const { hc, inputType, hideOpacity, handleChange, pickerIdSuffix } = usePicker();

    const inputComponent = useMemo(() => getInputComponent(inputType), [inputType]);

    return (
        <Group gap={4} align="center">
            <InputsWrapper id={`plasma-color-picker-inputs-wrap${pickerIdSuffix}`}>{inputComponent}</InputsWrapper>
            {!hideOpacity ? (
                <Input
                    style={{
                        maxWidth: 56,
                    }}
                    label="A"
                    value={Math.round(hc.a * 100)}
                    onChange={(v) => handleChange(`rgba(${hc.r}, ${hc.g}, ${hc.b}, ${+v / 100})`)}
                />
            ) : null}
        </Group>
    );
};
