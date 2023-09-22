import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { checkboxConfig } from '../../../../components/Checkbox';
import { mergeConfig } from '../../../../engines';
import { WithTheme, argTypesFromConfig } from '../../../_helpers';
import { Link } from '../Link/Link';

import { config } from './Checkbox.config';
import { Checkbox } from './Checkbox';

export default {
    title: 'plasma_web/Checkbox',
    decorators: [WithTheme],
    component: Checkbox,
    argTypes: argTypesFromConfig(mergeConfig(checkboxConfig, config)),
} as ComponentMeta<typeof Checkbox>;

const onChange = action('onChange');
const onFocus = action('onFocus');
const onBlur = action('onBlur');

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

export const Default: ComponentStory<typeof Checkbox> = (props) => {
    return (
        <>
            <Checkbox name="item.name" value="item.value" label="Label" description="Description" {...props} />
            <Checkbox
                name="item.name"
                value="item.value"
                singleLine
                label="Label looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooonger"
                description="Description looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooonger"
                {...props}
            />
        </>
    );
};

export const Complex: ComponentStory<typeof Checkbox> = (props) => {
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
                    style={{ marginLeft: item.parent ? 36 : 0 }}
                    key={item.value}
                    name={item.name}
                    value={item.value}
                    label={item.label}
                    disabled={item.disabled}
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
                    {...props}
                />
            ))}
        </>
    );
};
