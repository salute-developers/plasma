import React, { useState } from 'react';
import type { StoryObj, Meta } from '@storybook/react-vite';
import { action } from 'storybook/actions';
import { disableProps, InSpacingDecorator, getConfigVariations } from '@salutejs/plasma-sb-utils';

import { SSRProvider } from '../SSRProvider';

import { config } from './Radiobox.config';

import { Radiobox } from '.';
import type { RadioboxProps } from '.';

const onChange = action('onChange');
const onFocus = action('onFocus');
const onBlur = action('onBlur');

const { sizes } = getConfigVariations(config);
const views = ['accent'];

const meta: Meta<RadioboxProps> = {
    title: 'Data Entry/Radiobox',
    decorators: [InSpacingDecorator],
    component: Radiobox,
    argTypes: {
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
        ...disableProps(['view']),
    },
};

export default meta;

const StoryDefault = ({ name, label, description, disabled, singleLine, size, view }: RadioboxProps) => {
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
                view={view}
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
    args: {
        view: 'accent',
        size: 'm',
        name: 'Radiobox',
        label: 'Label',
        description: 'Description',
        disabled: false,
        singleLine: false,
    },
    render: (args) => <StoryDefault {...args} />,
};
