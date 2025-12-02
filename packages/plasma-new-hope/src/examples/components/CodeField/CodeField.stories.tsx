import React, { ComponentProps, useState } from 'react';
import type { StoryObj, Meta } from '@storybook/react-vite';
import { action } from 'storybook/actions';
import { getConfigVariations } from '@salutejs/plasma-sb-utils';

import { WithTheme } from '../../_helpers';

import { CodeField } from './CodeField';
import { config } from './CodeField.config';

const onChange = action('onChange');
const onFullCodeEnter = action('onFullCodeEnter');

const { views, sizes } = getConfigVariations(config);
const codeLengths = [4, 5, 6];
const shapes = ['default', 'segmented'];
const captionAlignVariants = ['left', 'center'];
const itemErrorBehaviorVariants = ['remove-symbol', 'keep', 'forbid-enter'];
const codeErrorBehaviorVariants = ['remove-code', 'keep'];

const meta: Meta<typeof CodeField> = {
    title: 'Data Entry/CodeField',
    component: CodeField,
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
        shape: {
            options: shapes,
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

type StoryPropsDefault = ComponentProps<typeof CodeField>;

const StoryDefault = (args: StoryPropsDefault) => {
    const [value, setValue] = useState('12');

    const handleChange = (newValue: string) => {
        setValue(newValue);
        onChange(newValue);
    };

    return <CodeField {...args} onFullCodeEnter={onFullCodeEnter} />;
};

export const Default: StoryObj<StoryPropsDefault> = {
    args: {
        view: 'default',
        size: 'm',
        shape: 'default',
        codeLength: 6,
        caption: 'Caption',
        captionAlign: 'center',
        width: '',
        isError: false,
        itemErrorBehavior: 'remove-symbol',
        codeErrorBehavior: 'keep',
        autoFocus: true,
        disabled: false,
    },
    render: StoryDefault,
};
