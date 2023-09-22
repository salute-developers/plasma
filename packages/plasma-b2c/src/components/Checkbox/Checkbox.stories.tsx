import React from 'react';
import { Meta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { InSpacingDecorator, disableProps } from '@salutejs/plasma-sb-utils';

import { Link } from '../Link';

import { Checkbox, CheckboxProps } from '.';

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

export default {
    title: 'Controls/Checkbox',
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
} as Meta;

const onChange = action('onChange');
const onFocus = action('onFocus');
const onBlur = action('onBlur');

const sizes = ['m', 's'];

const englishDescription = (
    <div>
        The most spoken language in the <Link href="/#">world</Link>
    </div>
);

const chineseLabel = (
    <div>
        Chinese is the hardest <Link href="/#">language</Link>
    </div>
);

const name = 'languages';
const items = [
    {
        name,
        value: 'natural',
        label: 'Natural languages',
        disabled: false,
        description: 'Languages that people speak. They were not designed by people and they evolved naturally.',
    },
    { name, value: 'russian', label: 'Russian', disabled: false, parent: 'natural' },
    {
        name,
        value: 'english',
        label: 'English',
        disabled: false,
        parent: 'natural',
        description: englishDescription,
    },
    { name, value: 'french', label: 'French', disabled: false, parent: 'natural' },
    { name, value: 'klingon', label: 'Klingon', disabled: false, parent: 'natural' },
    { name, value: 'elvish', label: 'Elvish', disabled: true, parent: 'natural' },
    { name, value: 'dothraki', label: 'Dothraki', disabled: true, parent: 'natural' },
    {
        name,
        value: 'chinese',
        label: chineseLabel,
        parent: 'natural',
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

export const Live = (args) => {
    const [values, setValues] = React.useState({
        russian: true,
        english: true,
        french: true,
        klingon: false,
        elvish: true,
        dothraki: false,
        chinese: true,
    });

    return items.map((item) => (
        <Checkbox
            {...getState(values, item.value)}
            style={{ marginLeft: item.parent ? 36 : null }}
            key={item.value}
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
                        ...getChildren(item.value).reduce((acc, child) => ({ ...acc, [child.value]: checked }), {}),
                    });
                }

                onChange(event);
            }}
            onFocus={onFocus}
            onBlur={onBlur}
            {...args}
        />
    ));
};

Live.argTypes = {
    ...disableProps([...propsToDisable, 'label', 'description']),
    size: {
        options: sizes,
        control: {
            type: 'inline-radio',
        },
    },
};

Live.args = {
    size: 'm',
    view: 'accent',
    singleLine: false,
    focused: true,
};

export const Default: ComponentStory<CheckboxProps> = (args) => {
    const value = 0;
    const [checked, setChecked] = React.useState(true);

    return (
        <>
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
        </>
    );
};

Default.args = {
    name: 'checkbox',
    label: 'Label',
    description: 'Description',
    disabled: false,
    singleLine: false,
    size: 'm',
    view: 'accent',
    focused: true,
};

Default.argTypes = {
    ...disableProps(propsToDisable),
    size: {
        options: sizes,
        control: {
            type: 'inline-radio',
        },
    },
};
