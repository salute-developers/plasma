import React, { useState } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { InSpacingDecorator, disableProps, getConfigVariations } from '@salutejs/plasma-sb-utils';

import { SSRProvider } from '../SSRProvider';
import { Link } from '../Link';
import { List, ListItem } from '../List';

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

const name = 'languages';

const items = [
    {
        name,
        value: 'natural',
        label: 'Естественные языки',
        disabled: false,
        description: 'Языки, на которых говорят люди. Они не были созданы искуственно и развивались естественно.',
    },
    { name, value: 'russian', label: 'Русский', disabled: false, parent: 'natural' },
    {
        name,
        value: 'english',
        label: 'Английский',
        disabled: false,
        description: (
            <>
                Самый распространенный язык в <Link href="/#">мире</Link>
            </>
        ),
        parent: 'natural',
    },
    { name, value: 'french', label: 'Французский', disabled: false, parent: 'natural' },
    {
        name,
        value: 'chinese',
        label: (
            <>
                Китайский <Link href="/#">язык</Link>
            </>
        ),
        parent: 'natural',
    },
    {
        name,
        value: 'artificial',
        label: 'Искусственные языки',
        disabled: false,
    },
    {
        name,
        value: 'klingon',
        label: 'Клингонский',
        disabled: false,
        description: 'Язык одной из раз в сериале СтарТрек',
        parent: 'artificial',
    },
    {
        name,
        value: 'elvish',
        label: 'Эльфийский',
        disabled: true,
        description: 'Искусственный язык из вселенной Властелина колец',
        parent: 'artificial',
    },
    {
        name,
        value: 'dothraki',
        label: 'Дотракийский',
        disabled: true,
        description: 'Язык, разработанный для реплик дотракийских племен из вселенной Песнь Льда и Огня',
        parent: 'artificial',
    },
];

const getChildren = (value: string) => items.filter((item) => item.parent === value);

const getState = (values: Record<string, boolean | undefined>, value: string) => {
    const allChildren = getChildren(value);

    if (!allChildren.length) {
        return { checked: values[value], indeterminate: false };
    }

    const checkedChildren = allChildren.filter((child) => values[child.value]);

    if (checkedChildren.length === 0) {
        return { checked: false, indeterminate: false };
    }

    if (allChildren.length !== checkedChildren.length) {
        return { checked: false, indeterminate: true };
    }

    return { checked: true, indeterminate: false };
};

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

const StoryLive = (args: CheckboxProps) => {
    const [values, setValues] = useState({
        russian: true,
        english: true,
        french: true,
        klingon: false,
        elvish: true,
        dothraki: false,
        chinese: true,
    });

    return (
        <SSRProvider>
            <List>
                {items.map((item) => (
                    <ListItem key={item.value} ml={item.parent ? '16x' : undefined} mb="4x">
                        <Checkbox
                            {...getState(values, item.value)}
                            name={item.name}
                            value={item.value}
                            label={item.label}
                            disabled={item.disabled}
                            description={item.description}
                            onChange={(event) => {
                                event.persist();

                                const { checked } = event.target;

                                if (item.parent) {
                                    setValues({ ...values, [item.value]: checked });
                                } else {
                                    setValues({
                                        ...values,
                                        ...getChildren(item.value).reduce(
                                            (acc, child) => ({ ...acc, [child.value]: checked }),
                                            {},
                                        ),
                                    });
                                }

                                onChange(event);
                            }}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            {...args}
                        />
                    </ListItem>
                ))}
            </List>
        </SSRProvider>
    );
};

export const Live: StoryObj<CheckboxProps> = {
    argTypes: {
        ...disableProps(['label', 'description', 'disabled']),
    },
    args: {
        view: 'accent',
        size: 'm',
        singleLine: false,
        focused: true,
    },
    render: (args) => <StoryLive {...args} />,
};
