import React, { useState } from 'react';
import { action } from 'storybook/actions';

const onChange = action('onChange');
const onDecrement = action('onDecrement');
const onIncrement = action('onIncrement');

export const createDefaultStory = (NumberInput: any) => (args: any) => {
    const [value, setValue] = useState<number | string | undefined>(5);

    const handleChange = (_: any, newValue: number | string | undefined) => {
        setValue(newValue);
        onChange(newValue);
    };

    return (
        <NumberInput
            {...args}
            value={value}
            onChange={handleChange}
            onDecrement={onDecrement}
            onIncrement={onIncrement}
        />
    );
};

export const createDisplayWithoutValueStory = (NumberInput: any) => (args: any) => {
    const [value, setValue] = useState<number | string | undefined>(undefined);

    const handleChange = (_: any, newValue: number | string | undefined) => {
        setValue(newValue);
        onChange(newValue);
    };

    return (
        <NumberInput
            {...args}
            value={value}
            onChange={handleChange}
            onDecrement={onDecrement}
            onIncrement={onIncrement}
        />
    );
};
