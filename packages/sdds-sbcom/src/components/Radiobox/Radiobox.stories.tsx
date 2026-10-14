import React from 'react';
import type { StoryObj, Meta } from '@storybook/react-vite';
import { action } from 'storybook/actions';
import { disableProps, InSpacingDecorator, getConfigVariations } from '@salutejs/plasma-sb-utils';

import { config } from './Radiobox.config';

import { Radiobox, RadioboxProps } from '.';

const onChange = action('onChange');
const onFocus = action('onFocus');
const onBlur = action('onBlur');

const { sizes } = getConfigVariations(config);
const views = ['accent'];

const meta: Meta<RadioboxProps> = {
    title: 'Data Entry/⚠️ Radiobox',
    component: Radiobox,
    decorators: [InSpacingDecorator],
    argTypes: {
        size: {
            options: sizes,
            control: {
                type: 'inline-radio',
            },
        },
        view: {
            options: views,
            control: {
                type: 'inline-radio',
            },
        },
        ...disableProps(['view']),
    },
};

export default meta;

type Story = StoryObj<RadioboxProps>;

const StoryDefault = ({ name, label, description, disabled, singleLine, size, view }: RadioboxProps) => {
    const value = 0;
    const [checked, setChecked] = React.useState(true);

    return (
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
    );
};

export const Default: Story = {
    args: {
        name: 'Radiobox',
        label: 'Label',
        description: 'Description',
        disabled: false,
        singleLine: false,
        size: 'm',
        view: 'accent',
    },
    render: (args) => <StoryDefault {...args} />,
};
