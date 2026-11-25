import React, { useState } from 'react';
import { Link } from '@salutejs/plasma-b2c';
import { component, radioboxConfig, mergeConfig, RadioGroup } from '@salutejs/plasma-new-hope/styled-components';

const Radiobox = component(mergeConfig(radioboxConfig as any, {}));

const RadioboxDefault = {
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

        return <Radiobox value={value} checked={checked} onChange={onChecked} focused {...args} />;
    },
};

const RadioboxLive = {
    name: 'Live',
    args: [
        {
            name: 'singleLine',
            value: false,
        },
    ],
    // tsconfig плагина (noUnusedParameters): аргументы story не используются, имя с `_`.
    render: function Story(_args: any) {
        const [value, setValue] = useState('c');

        const langName = 'language';

        const items: Record<string, any>[] = [
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

        const onChange = (value: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
            event.persist();

            setValue(value);
        };

        return (
            <RadioGroup aria-labelledby="radiogroup-title-id">
                <div
                    id="radiogroup-title-id"
                    style={{ margin: '1rem 0', fontWeight: 600, color: 'var(--text-primary)' }}
                >
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
                        onChange={onChange(item.value)}
                    />
                ))}
            </RadioGroup>
        );
    },
};

export const RadioboxStories = [RadioboxDefault, RadioboxLive];
