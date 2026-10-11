import React from 'react';
import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react-vite';
import { action } from 'storybook/actions';

import { WithTheme } from '../../_helpers';

import { Checkbox } from './Checkbox';

const onChange = action('onChange');
const onFocus = action('onFocus');
const onBlur = action('onBlur');

const meta: Meta<typeof Checkbox> = {
    title: 'Data Entry/Checkbox',
    decorators: [WithTheme],
    component: Checkbox,
    argTypes: {
        view: {
            options: ['accent', 'negative'],
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
        indeterminate: {
            control: {
                type: 'boolean',
            },
        },
    },
    args: {
        view: 'accent',
        size: 'm',
        disabled: false,
        focused: true,
        appearance: 'default',
        indeterminate: false,
    },
};

export default meta;

type CheckboxProps = ComponentProps<typeof Checkbox>;

const StoryDefault = (props: CheckboxProps) => {
    return (
        <>
            <Checkbox {...props} />
            <Checkbox name="item.name" value="item.value" label="Label" description="Description" {...props} />
        </>
    );
};

export const Default: StoryObj<CheckboxProps> = {
    render: (args) => <StoryDefault {...args} />,
};

const StoryLong = (props: CheckboxProps) => {
    const { width, ...otherProps } = props;
    return (
        <div style={{ width }}>
            <Checkbox {...otherProps} />
        </div>
    );
};

export const LongText: StoryObj<CheckboxProps> = {
    args: {
        name: 'item.name',
        value: 'item.value',
        label:
            'Label looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooonger',
        description:
            'Description looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooonger',
        singleLine: true,
        width: '300px',
    },
    render: (args) => <StoryLong {...args} />,
};

const StoryLive = (props: CheckboxProps) => {
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
        <>
            {items.map((item) => (
                <Checkbox
                    {...props}
                    {...getState(values, item.value)}
                    style={{ marginLeft: item.parent ? 36 : 0 }}
                    key={item.value}
                    name={item.name}
                    value={item.value}
                    label={item.label}
                    disabled={item.disabled || props.disabled}
                    description={item.description}
                    onChange={(event) => {
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
                />
            ))}
        </>
    );
};

export const Live: StoryObj<CheckboxProps> = {
    render: (args) => <StoryLive {...args} />,
};
