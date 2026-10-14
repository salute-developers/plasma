import React from 'react';
import type { StoryObj, Meta } from '@storybook/react-vite';
import { action } from 'storybook/actions';
import { InSpacingDecorator, disableProps, getConfigVariations } from '@salutejs/plasma-sb-utils';

import { SSRProvider } from '../SSRProvider';

import { config } from './Checkbox.config';

import { Checkbox } from '.';
import type { CheckboxProps } from '.';

const propsToDisable = [
    'name',
    'indeterminate',
    'id',
    'focused',
    'type',
    'value',
    'checked',
    'readOnly',
    'placeholder',
    'required',
    'minLength',
    'maxLength',
    'onChange',
    'onFocus',
    'onBlur',
    'appearance',
];

const onChange = action('onChange');
const onFocus = action('onFocus');
const onBlur = action('onBlur');

const { sizes } = getConfigVariations(config);
const views = ['accent', 'negative'];

const meta: Meta<CheckboxProps> = {
    title: 'Data Entry/Checkbox',
    component: Checkbox,
    decorators: [InSpacingDecorator],
    argTypes: {
        label: {
            control: {
                type: 'text',
            },
        },
        description: {
            control: {
                type: 'text',
            },
        },
        view: {
            options: views,
            control: {
                type: 'inline-radio',
            },
        },
        size: {
            options: sizes,
            control: {
                type: 'inline-radio',
            },
        },
        ...disableProps(propsToDisable),
    },
};

export default meta;

const StoryDefault = (args: CheckboxProps) => {
    const value = 0;
    const [checked, setChecked] = React.useState(true);

    return (
        <SSRProvider>
            <Checkbox
                value={value}
                checked={checked}
                onChange={(event) => {
                    event.persist();

                    setChecked(event.target.checked);
                    onChange(event);
                }}
                onFocus={onFocus}
                onBlur={onBlur}
                {...args}
            />
        </SSRProvider>
    );
};

export const Default: StoryObj<CheckboxProps> = {
    args: {
        view: 'accent',
        size: 'm',
        name: 'checkbox',
        label: 'Label',
        description: 'Description',
        disabled: false,
        singleLine: false,
        focused: true,
    },
    render: (args) => <StoryDefault {...args} />,
};
