import React, { useEffect, useState } from 'react';
import { action } from 'storybook/actions';

const onChange = action('onChange');
const onDecrement = action('onDecrement');
const onIncrement = action('onIncrement');

export const createDefaultStory = (NumberInput: any) => (args: any) => {
    const [value, setValue] = useState<number | string | undefined>(args.value);

    useEffect(() => {
        setValue(args.value);
    }, [args.value]);

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
