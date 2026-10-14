import React, { useState } from 'react';
import type { StoryObj, Meta } from '@storybook/react-vite';
import { action } from 'storybook/actions';
import { getConfigVariations } from '@salutejs/plasma-sb-utils';

import { SSRProvider } from '../SSRProvider';
import { InSpacingDecorator } from '../../helpers';

import { config } from './Radiobox.config';

import { Radiobox } from '.';
import type { RadioboxProps as Base } from '.';

const onChange = action('onChange');
const onFocus = action('onFocus');
const onBlur = action('onBlur');

type RadioboxProps = Base;

const meta: Meta<RadioboxProps> = {
    title: 'Data Entry/Radiobox',
    component: Radiobox,
    decorators: [InSpacingDecorator],
};

export default meta;

const { sizes } = getConfigVariations(config);

const StoryDefault = ({ name, label, description, disabled, singleLine, size }: RadioboxProps) => {
    const value = 0;
    const [checked, setChecked] = useState(true);

    return (
        <SSRProvider>
            <Radiobox
                name={name}
                value={value}
                label={label}
                description={description}
                disabled={disabled}
                checked={checked}
                singleLine={singleLine}
                size={size}
                onChange={(event) => {
                    event.persist();

                    setChecked(event.target.checked);
                    onChange(event);
                }}
                onFocus={onFocus}
                onBlur={onBlur}
            />
        </SSRProvider>
    );
};

export const Default: StoryObj<RadioboxProps> = {
    argTypes: {
        size: {
            options: sizes,
            control: {
                type: 'inline-radio',
            },
        },
    },
    args: {
        name: 'Radiobox',
        label: 'Label',
        description: 'Description',
        disabled: false,
        singleLine: false,
        size: 'm',
    },
    render: (args) => <StoryDefault {...args} />,
};
