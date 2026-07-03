import React, { useState } from 'react';
import { action } from 'storybook/actions';

const onChange = action('onChange');
const onFullCodeEnter = action('onFullCodeEnter');

export const createDefaultStory = (CodeInput: any) => {
    return ({ ...rest }: any) => {
        const [value, setValue] = useState('');

        const handleChange = (newValue: string) => {
            setValue(newValue);
            onChange(newValue);
        };

        return <CodeInput {...rest} value={value} onChange={handleChange} onFullCodeEnter={onFullCodeEnter} />;
    };
};
