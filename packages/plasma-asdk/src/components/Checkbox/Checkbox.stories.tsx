import React, { useState } from 'react';
import type { StoryObj, Meta } from '@storybook/react-vite';
import { action } from 'storybook/actions';
import { getConfigVariations } from '@salutejs/plasma-sb-utils';

import { SSRProvider } from '../SSRProvider';
import { InSpacingDecorator, disableProps } from '../../helpers';

import { config } from './Checkbox.config';

import { Checkbox } from '.';
import type { CheckboxProps as Base } from '.';

const propsToDisable = [
    'view',
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
];

const onChange = action('onChange');
const onFocus = action('onFocus');
const onBlur = action('onBlur');

type CheckboxProps = Base;

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
    },
};

export default meta;

const { sizes } = getConfigVariations(config);

const StoryDefault = (args: CheckboxProps) => {
    const value = 0;
    const [checked, setChecked] = useState(true);

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
    argTypes: {
        ...disableProps(propsToDisable),
        size: {
            options: sizes,
            control: {
                type: 'inline-radio',
            },
        },
    },
    args: {
        name: 'checkbox',
        label: 'Label',
        description: 'Description',
        disabled: false,
        singleLine: false,
        size: 'm',
        view: 'accent',
        focused: true,
    },
    render: (args) => <StoryDefault {...args} />,
};
