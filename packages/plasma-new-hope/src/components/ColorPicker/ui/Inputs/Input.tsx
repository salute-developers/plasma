import React, { ComponentProps, useEffect, useState } from 'react';
import { isString } from 'lodash';

import { formatInputValues } from '../../lib/formatters';
import { IconPercent } from '../../../_Icon/Icons/IconPercent';
import { usePicker } from '../../ColorPicker.context';

import { InputWrapper } from './Inputs.styled';

interface InputProps extends Omit<ComponentProps<'input'>, 'onChange' | 'slot'> {
    label: string;
    value: string | number;
    max?: number;
    onChange?: (val: string | number) => void;
    slot?: React.ReactNode;
}

export const Input = ({ label, value, onChange, max = 100, slot, ...props }: InputProps) => {
    const { pickerIdSuffix } = usePicker();
    const [temp, setTemp] = useState(value);

    useEffect(() => {
        setTemp(value);
    }, [value]);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVal = isString(value) ? e.target.value : formatInputValues(parseFloat(e.target.value), 0, max);
        setTemp(newVal);
        onChange?.(newVal);
    };

    return (
        <InputWrapper
            style={{
                ...props.style,
            }}
            $hasIcon={label === 'A'}
            id={`plasma-color-picker-${label}-input-wrapper${pickerIdSuffix}`}
        >
            {slot}
            <input
                value={temp}
                onChange={onChangeHandler}
                id={`plasma-color-picker-${label}-input${pickerIdSuffix}`}
                aria-label={label}
                {...props}
            />
            {label === 'A' && <IconPercent color="currentColor" />}
        </InputWrapper>
    );
};
