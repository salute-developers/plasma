import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { InSpacingDecorator, disableProps } from '@salutejs/plasma-sb-utils';

import { Link } from '../Link';

import { Checkbox } from '.';
import type { CheckboxProps } from '.';

const onChange = action('onChange');
const onFocus = action('onFocus');
const onBlur = action('onBlur');

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
    'view',
    'size',
    'appearance',
];

const views = ['accent'];

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
                type: 'select',
            },
        },
        ...disableProps(propsToDisable),
    },
};

export default meta;

type Story = StoryObj<CheckboxProps>;

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

const StoryDefault = (args: CheckboxProps) => {
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

export const Default: Story = {
    args: {
        name: 'checkbox',
        label: 'Label',
        description: 'Description',
        disabled: false,
        singleLine: false,
        size: 's',
        view: 'accent',
        focused: true,
    },
    render: (args) => <StoryDefault {...args} />,
};

const StoryLive = (args) => {
    const [values, setValues] = React.useState({
        russian: true,
        english: true,
        french: true,
        klingon: false,
        elvish: true,
        dothraki: false,
        chinese: true,
    });

    return (
        <>
            {items.map((item) => (
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
            ))}
        </>
    );
};

export const Live: Story = {
    args: {
        size: 's',
        view: 'accent',
        singleLine: false,
        focused: true,
        disabled: false,
    },
    argTypes: {
        ...disableProps(['label', 'description', 'size']),
    },
    render: (args) => <StoryLive {...args} />,
};
