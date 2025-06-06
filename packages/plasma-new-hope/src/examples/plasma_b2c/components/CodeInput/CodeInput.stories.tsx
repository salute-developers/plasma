import React, { ComponentProps, useState } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { getConfigVariations } from '@salutejs/plasma-sb-utils';

import { WithTheme } from '../../../_helpers';

import { CodeInput } from './CodeInput';
import { config } from './CodeInput.config';

const onChange = action('onChange');
const onFullCodeEnter = action('onFullCodeEnter');

const { views, sizes } = getConfigVariations(config);
const codeLengths = [4, 5, 6];
const captionAlignVariants = ['left', 'center'];
const itemErrorBehaviorVariants = ['remove-symbol', 'keep', 'forbid-enter'];
const codeErrorBehaviorVariants = ['remove-code', 'keep'];

const meta: Meta<typeof CodeInput> = {
    title: 'b2c/Data Entry/CodeInput',
    component: CodeInput,
    decorators: [WithTheme],
    argTypes: {
        view: {
            options: views,
            control: {
                type: 'select',
            },
        },
        size: {
            options: sizes,
            control: {
                type: 'inline-radio',
            },
        },
        captionAlign: {
            options: captionAlignVariants,
            control: {
                type: 'inline-radio',
            },
        },
        codeLength: {
            options: codeLengths,
            control: {
                type: 'inline-radio',
            },
        },
        itemErrorBehavior: {
            options: itemErrorBehaviorVariants,
            control: {
                type: 'inline-radio',
            },
        },
        codeErrorBehavior: {
            options: codeErrorBehaviorVariants,
            control: {
                type: 'inline-radio',
            },
        },
    },
    parameters: {
        controls: {
            exclude: ['view'],
        },
    },
};

export default meta;

type StoryPropsDefault = ComponentProps<typeof CodeInput>;

const StoryDefault = (args: StoryPropsDefault) => {
    const [value, setValue] = useState('');

    const handleChange = (newValue: string) => {
        setValue(newValue);
        onChange(newValue);
    };

    return <CodeInput {...args} value={value} onChange={handleChange} onFullCodeEnter={onFullCodeEnter} />;
};

export const Default: StoryObj<StoryPropsDefault> = {
    args: {
        view: 'default',
        size: 'm',
        codeLength: 6,
        caption: 'Caption',
        captionAlign: 'center',
        width: '',
        isError: false,
        itemErrorBehavior: 'remove-symbol',
        codeErrorBehavior: 'remove-code',
        autoFocus: true,
        disabled: false,
        hidden: false,
    },
    render: StoryDefault,
};
