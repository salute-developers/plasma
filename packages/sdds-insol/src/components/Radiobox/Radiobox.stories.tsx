import React, { useState } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { disableProps, InSpacingDecorator, getConfigVariations } from '@salutejs/plasma-sb-utils';

import { config } from './Radiobox.config';

import { Radiobox, RadioboxProps } from '.';

const onChange = action('onChange');
const onFocus = action('onFocus');
const onBlur = action('onBlur');

const { sizes } = getConfigVariations(config);
const views = ['accent'];

const meta: Meta<RadioboxProps> = {
    title: 'Data Entry/Radiobox',
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
        ...disableProps(['view', 'appearance']),
    },
};

export default meta;

type Story = StoryObj<RadioboxProps>;

const cDescription = (
    <div>
        A general-purpose, procedural computer programming{' '}
        <a href="https://en.wikipedia.org/wiki/C_(programming_language)">language</a>{' '}
    </div>
);

const langName = 'language';

const items = [
    {
        langName,
        value: 'c',
        label: 'C',
        disabled: false,
        description: cDescription,
    },
    { langName, value: 'cpp', label: 'C++', disabled: false },
    { langName, value: 'assembly', label: 'Assembly', disabled: false },
    { langName, value: 'elixir', label: 'Elixir', disabled: true },
];

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

const StoryLive = (props: RadioboxProps) => {
    const [value, setValue] = useState('c');

    return (
        <>
            {items.map((item) => (
                <Radiobox
                    key={item.value}
                    name={item.langName}
                    value={item.value}
                    label={item.label}
                    disabled={item.disabled}
                    checked={value[item.value]}
                    description={item.description}
                    onChange={(event) => {
                        event.persist();

                        setValue(item.value);
                        onChange(event);
                    }}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    {...props}
                />
            ))}
        </>
    );
};

export const Live: Story = {
    args: {
        size: 'm',
        view: 'accent',
        singleLine: false,
        focused: true,
    },
    render: (args) => <StoryLive {...args} />,
};
