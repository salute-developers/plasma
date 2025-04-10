import React, { useState } from 'react';
import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { RadioGroup } from '../../../../components/Radiobox';
import { WithTheme } from '../../../_helpers';
import { Link } from '../Link/Link';

import { Radiobox } from './Radiobox';

const onChange = action('onChange');
const onFocus = action('onFocus');
const onBlur = action('onBlur');

const meta: Meta<typeof Radiobox> = {
    title: 'web/Data Entry/Radiobox',
    decorators: [WithTheme],
    component: Radiobox,
    argTypes: {
        view: {
            options: ['accent'],
            control: {
                type: 'radio',
            },
        },
        size: {
            options: ['l', 'm', 's'],
            control: {
                type: 'radio',
            },
        },
        appearance: {
            options: ['default', 'outline'],
            control: {
                type: 'radio',
            },
        },
    },
    args: {
        view: 'accent',
        size: 'm',
        disabled: false,
        focused: true,
        appearance: 'default',
    },
};

export default meta;

type RadioboxProps = ComponentProps<typeof Radiobox>;

const langName = 'language';

const items = [
    {
        langName,
        value: 'c',
        label: 'C',
        disabled: false,
        description: (
            <div>
                A general-purpose, procedural computer programming <Link href="/#">language</Link>{' '}
            </div>
        ),
    },
    { langName, value: 'cpp', label: 'C++', disabled: false },
    { langName, value: 'assembly', label: 'Assembly', disabled: false },
    { langName, value: 'elixir', label: 'Elixir', disabled: true },
];

const StoryDefault = ({ label, description, name, ...props }: RadioboxProps) => {
    const value = 0;
    const [checked, setChecked] = useState(true);

    return (
        <Radiobox
            name={name}
            value={value}
            singleLine
            label={label}
            description={description}
            checked={checked}
            onChange={(event) => {
                event.persist();

                setChecked(event.target.checked);
                onChange(event);
            }}
            onFocus={onFocus}
            onBlur={onBlur}
            {...props}
        />
    );
};

export const Default: StoryObj<RadioboxProps> = {
    args: {
        label: 'Это label',
        description: 'Это описание',
        name: 'default',
    },
    render: (args) => <StoryDefault {...args} />,
};

export const LongText: StoryObj<RadioboxProps> = {
    args: {
        label: 'Ооооооооооооооооооооочень длинный label',
        description: 'Ооооооооооооооооооооочень длинный description',
        name: 'long',
    },
    render: (args) => <StoryDefault {...args} />,
};

const StoryRadioGroup = ({ appearance, ...props }) => {
    const [value, setValue] = useState('c');

    return (
        <RadioGroup aria-labelledby="radiogroup-title-id">
            <div id="radiogroup-title-id" style={{ margin: '1rem 0', fontWeight: '600' }}>
                Выберите язык программирования для изучения.
            </div>
            {items.map((item) => (
                <Radiobox
                    key={item.value}
                    name={item.langName}
                    value={item.value}
                    label={item.label}
                    disabled={item.disabled}
                    checked={value[item.value]}
                    description={item.description}
                    appearance={appearance}
                    onChange={(event) => {
                        setValue(item.value);
                        onChange(event);
                    }}
                    onFocus={onFocus}
                    onBlur={onBlur}
                />
            ))}
        </RadioGroup>
    );
};

export const ExampleRadioGroup: StoryObj<RadioboxProps> = {
    args: {
        appearance: 'default',
    },
    render: (args) => <StoryRadioGroup {...args} />,
};
