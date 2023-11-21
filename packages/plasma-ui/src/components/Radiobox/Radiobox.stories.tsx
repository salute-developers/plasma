import React, { useState } from 'react';
import type { FC } from 'react';
import type { StoryObj, Meta } from '@storybook/react';

import { SSRProvider } from '../SSRProvider';
import { actionWithPersistedEvent, InSpacingDecorator } from '../../helpers';

import { Radiobox } from '.';
import type { RadioboxProps } from '.';

const onChange = actionWithPersistedEvent('onChange');
const onFocus = actionWithPersistedEvent('onFocus');
const onBlur = actionWithPersistedEvent('onBlur');

const meta: Meta<RadioboxProps> = {
    title: 'Controls/Radiobox',
    component: Radiobox,
    decorators: [
        InSpacingDecorator,
        (Story: FC) => (
            <SSRProvider>
                <Story />
            </SSRProvider>
        ),
    ],
};

export default meta;

const items = [
    {
        id: 'radio-1-1',
        name: 'radio-1',
        value: 1,
        label: 'Radiobox with a very very very very very long label',
        disabled: false,
    },
    {
        id: 'radio-1-2',
        name: 'radio-1',
        value: 2,
        label: 'Radiobox with a very very very very very long label 2',
        disabled: false,
        singleLine: true,
    },
    { id: 'radio-2-1', name: 'radio-2', value: 3, label: 'Radiobox 3', disabled: true },
    { id: 'radio-2-2', name: 'radio-2', value: 4, label: 'Radiobox 4', disabled: true, checked: true },
];

const StoryDefault = () => {
    const [value, setValue] = useState(2);

    return (
        <div style={{ overflow: 'hidden', width: 150 }}>
            <Radiobox
                checked
                disabled
                label="Radiobox with a very very very very very long label"
                description="Radiobox description with a very very very very very long text"
                singleLine
            />
            <Radiobox disabled label="Radiobox 2" description="Radiobox 2 description" />
        </div>
    );
};

export const Default: StoryObj = {
    render: () => <StoryDefault />,
};

const StorySqueeze = () => {
    const [value, setValue] = useState(1);

    return (
        <div
            style={{
                resize: 'horizontal',
                overflow: 'hidden',
                border: '3px solid',
                display: 'inline-block',
                width: '600px',
            }}
        >
            {items.map((item) => (
                <Radiobox
                    key={item.value}
                    name="radiobox"
                    value={item.value}
                    label={item.label}
                    disabled={item.disabled}
                    checked={item.value === value}
                    singleLine={item.singleLine}
                    description={`Description of ${item.label}`}
                    onChange={(event) => {
                        setValue(item.value);
                        onChange(event);
                    }}
                    onFocus={onFocus}
                    onBlur={onBlur}
                />
            ))}
        </div>
    );
};

export const Squeeze: StoryObj = {
    render: (args) => <StorySqueeze {...args} />,
};
