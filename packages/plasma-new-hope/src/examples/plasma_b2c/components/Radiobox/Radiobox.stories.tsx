import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { RadioGroup, radioboxConfig } from '../../../../components/Radiobox';
import { mergeConfig } from '../../../../engines';
import { WithTheme, argTypesFromConfig } from '../../../_helpers';
import { Link } from '../Link/Link';

import { config } from './Radiobox.config';
import { Radiobox } from './Radiobox';

export default {
    title: 'plasma_b2c/Radiobox',
    decorators: [WithTheme],
    component: Radiobox,
    argTypes: argTypesFromConfig(mergeConfig(radioboxConfig, config)),
} as ComponentMeta<typeof Radiobox>;

const onChange = action('onChange');
const onFocus = action('onFocus');
const onBlur = action('onBlur');

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

export const Default: ComponentStory<typeof Radiobox> = (props) => {
    const value = 0;
    const [checked, setChecked] = React.useState(true);

    return (
        <>
            <Radiobox
                name="item.name"
                value={value}
                singleLine
                label="Label"
                description="Description"
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
            <Radiobox
                name="item.name"
                value={value}
                singleLine
                label="Label looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooonger"
                description="Description looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooonger"
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
        </>
    );
};

export const Complex = (props) => {
    const [value, setValue] = React.useState('c');

    return (
        <RadioGroup>
            <div id="radiogroup-title-id" style={{ margin: '1rem 0', fontWeight: '600' }}>
                Radiogroup Title
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
                    onChange={(event) => {
                        setValue(item.value);
                        onChange(event);
                    }}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    {...props}
                />
            ))}
        </RadioGroup>
    );
};
