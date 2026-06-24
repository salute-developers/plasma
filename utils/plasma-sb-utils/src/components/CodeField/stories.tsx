import React, { useState } from 'react';
import { action } from 'storybook/actions';

const onChange = action('onChange');
const onFullCodeEnter = action('onFullCodeEnter');

export const createDefaultStory = (CodeField: any) => {
    return ({ ...rest }: any) => {
        const [value, setValue] = useState('');

        const handleChange = (newValue: string) => {
            setValue(newValue);
            onChange(newValue);
        };

        return <CodeField {...rest} value={value} onChange={handleChange} onFullCodeEnter={onFullCodeEnter} />;
    };
};
