import React, { useState } from 'react';
import { Link } from '@salutejs/plasma-b2c';
import { component, checkboxConfig, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

const Checkbox = component(mergeConfig(checkboxConfig as any, {}));

const CheckboxDefault = {
    name: 'Default',
    args: [
        {
            name: 'disabled',
            value: false,
        },
        {
            name: 'singleLine',
            value: false,
        },
        {
            name: 'label',
            value: 'Label',
        },
        {
            name: 'description',
            value: 'Description',
        },
    ],
    render: function Story(args: any) {
        const value = 0;
        const [checked, setChecked] = useState(true);

        const onChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
            event.persist();

            setChecked(event.target.checked);
        };

        return <Checkbox value={value} checked={checked} onChange={onChecked} focused {...args} />;
    },
};

const CheckboxIndeterminate = {
    name: 'Indeterminate',
    args: [
        {
            name: 'singleLine',
            value: false,
        },
    ],
    render: function Story(args: any) {
        const [values, setValues] = useState({
            russian: true,
            english: true,
            french: true,
            klingon: false,
            elvish: true,
            dothraki: false,
            chinese: true,
        });
        const name = 'languages';

        const items = [
            {
                name,
                value: 'natural',
                label: 'Natural languages',
                disabled: false,
                description:
                    'Languages that people speak. They were not designed by people and they evolved naturally.',
            },
            { name, value: 'russian', label: 'Russian', disabled: false, parent: 'natural' },
            {
                name,
                value: 'english',
                label: 'English',
                disabled: false,
                parent: 'natural',
                description: (
                    <div>
                        The most spoken language in the <Link href="/#">world</Link>
                    </div>
                ),
            },
            { name, value: 'french', label: 'French', disabled: false, parent: 'natural' },
            { name, value: 'klingon', label: 'Klingon', disabled: false, parent: 'natural' },
            { name, value: 'elvish', label: 'Elvish', disabled: true, parent: 'natural' },
            { name, value: 'dothraki', label: 'Dothraki', disabled: true, parent: 'natural' },
            {
                name,
                value: 'chinese',
                label: (
                    <div>
                        Chinese is the hardest <Link href="/#">language</Link>
                    </div>
                ),
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

        const onChange = (item: typeof items[number]) => (event: React.ChangeEvent<HTMLInputElement>) => {
            const { checked } = event.target;

            if (item.parent) {
                setValues({ ...values, [item.value]: checked });
            } else {
                setValues({
                    ...values,
                    ...getChildren(item.value).reduce((acc, child) => ({ ...acc, [child.value]: checked }), {}),
                });
            }
        };

        return (
            <div style={{ width: '25rem' }}>
                {items.map((item) => (
                    <Checkbox
                        {...getState(values, item.value)}
                        {...args}
                        focused
                        style={{ marginLeft: item.parent ? 36 : 0 }}
                        key={item.value}
                        name={item.name}
                        value={item.value}
                        label={item.label}
                        disabled={item.disabled}
                        description={item.description}
                        onChange={onChange(item)}
                    />
                ))}
            </div>
        );
    },
};

export const CheckboxStories = [CheckboxDefault, CheckboxIndeterminate];
