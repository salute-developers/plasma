import React, { useState } from 'react';
import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { InSpacingDecorator } from '@salutejs/plasma-sb-utils';
import { IconPlasma } from '@salutejs/plasma-icons';

import './style.css';

import { Select } from './Select';

type StorySelectProps = ComponentProps<typeof Select> & {
    enableContentLeft?: boolean;
};

const view = ['default', 'negative'];
const variant = ['normal', 'tight'];

const meta: Meta<StorySelectProps> = {
    title: 'Controls/Select',
    decorators: [InSpacingDecorator],
    component: Select,
    argTypes: {
        target: {
            control: 'select',
            options: ['button-like', 'textfield-like'],
        },
        view: {
            control: 'select',
            options: view,
        },
        variant: {
            control: 'select',
            options: variant,
        },
        listWidth: {
            control: 'text',
        },
        listOverflow: {
            control: 'text',
        },
        listHeight: {
            control: 'text',
        },
        helperText: {
            control: 'text',
            if: {
                arg: 'target',
                eq: 'textfield-like',
            },
        },
        placeholder: {
            if: {
                arg: 'target',
                eq: 'textfield-like',
            },
        },
        enableContentLeft: {
            control: 'boolean',
            if: {
                arg: 'target',
                eq: 'textfield-like',
            },
        },
        requiredPlacement: {
            options: ['left', 'right'],
            control: {
                type: 'select',
            },
        },
        required: {
            control: {
                type: 'boolean',
            },
            if: { arg: 'optional', truthy: false },
        },
        optional: {
            control: {
                type: 'boolean',
            },
            if: { arg: 'required', truthy: false },
        },
        chipType: {
            control: 'select',
            options: ['default', 'text'],
            if: { arg: 'target', eq: 'textfield-like' },
        },
    },
    args: {
        target: 'textfield-like',
        label: 'Label',
        labelPlacement: 'outer',
        placeholder: 'Placeholder',
        helperText: 'Helper text',
        view: 'default',
        enableContentLeft: false,
        isTargetAmount: false,
        variant: 'normal',
        disabled: false,
        optional: false,
        required: false,
        requiredPlacement: 'right',
        chipType: 'default',
    },
    parameters: {
        controls: {
            include: [
                'target',
                'view',
                'enableContentLeft',
                'label',
                'placeholder',
                'helperText',
                'isTargetAmount',
                'closeAfterSelect',
                'variant',
                'disabled',
                'listWidth',
                'listOverflow',
                'listHeight',
                'optional',
                'required',
                'requiredPlacement',
                'chipType',
            ],
        },
    },
};

export default meta;

const items = [
    {
        value: 'north_america',
        label: 'Северная Америка',
    },
    {
        value: 'south_america',
        label: 'Южная Америка',
        items: [
            {
                value: 'brazil',
                label: 'Бразилия',
                items: [
                    {
                        value: 'rio_de_janeiro',
                        label: 'Рио-де-Жанейро',
                    },
                    {
                        value: 'sao_paulo',
                        label: 'Сан-Паулу',
                    },
                ],
            },
            {
                value: 'argentina',
                label: 'Аргентина',
                items: [
                    {
                        value: 'buenos_aires',
                        label: 'Буэнос-Айрес',
                    },
                    {
                        value: 'cordoba',
                        label: 'Кордова',
                    },
                ],
            },
            {
                value: 'colombia',
                label: 'Колумбия',
                items: [
                    {
                        value: 'bogota',
                        label: 'Богота',
                    },
                    {
                        value: 'medellin',
                        label: 'Медельин',
                    },
                ],
            },
        ],
    },
    {
        value: 'europe',
        label: 'Европа',
        items: [
            {
                value: 'france',
                label: 'Франция',
                items: [
                    {
                        value: 'paris',
                        label: 'Париж',
                    },
                    {
                        value: 'lyon',
                        label: 'Лион',
                    },
                ],
            },
            {
                value: 'germany',
                label: 'Германия',
                items: [
                    {
                        value: 'berlin',
                        label: 'Берлин',
                    },
                    {
                        value: 'munich',
                        label: 'Мюнхен',
                    },
                ],
            },
            {
                value: 'italy',
                label: 'Италия',
                items: [
                    {
                        value: 'rome',
                        label: 'Рим',
                    },
                    {
                        value: 'milan',
                        label: 'Милан',
                    },
                ],
            },
            {
                value: 'spain',
                label: 'Испания',
                items: [
                    {
                        value: 'madrid',
                        label: 'Мадрид',
                    },
                    {
                        value: 'barcelona',
                        label: 'Барселона',
                    },
                ],
            },
            {
                value: 'united_kingdom',
                label: 'Великобритания',
                items: [
                    {
                        value: 'london',
                        label: 'Лондон',
                    },
                    {
                        value: 'manchester',
                        label: 'Манчестер',
                    },
                ],
            },
        ],
    },
    {
        value: 'asia',
        label: 'Азия',
        items: [
            {
                value: 'china',
                label: 'Китай',
                items: [
                    {
                        value: 'beijing',
                        label: 'Пекин',
                    },
                    {
                        value: 'shanghai',
                        label: 'Шанхай',
                    },
                ],
            },
            {
                value: 'japan',
                label: 'Япония',
                items: [
                    {
                        value: 'tokyo',
                        label: 'Токио',
                    },
                    {
                        value: 'osaka',
                        label: 'Осака',
                    },
                ],
            },
            {
                value: 'india',
                label: 'Индия',
                items: [
                    {
                        value: 'delhi',
                        label: 'Дели',
                    },
                    {
                        value: 'mumbai',
                        label: 'Мумбаи',
                    },
                ],
            },
            {
                value: 'south_korea',
                label: 'Южная Корея',
                items: [
                    {
                        value: 'seoul',
                        label: 'Сеул',
                    },
                    {
                        value: 'busan',
                        label: 'Пусан',
                    },
                ],
            },
            {
                value: 'thailand',
                label: 'Таиланд',
                items: [
                    {
                        value: 'bangkok',
                        label: 'Бангкок',
                    },
                    {
                        value: 'phuket',
                        label: 'Пхукет',
                    },
                ],
            },
        ],
    },
    {
        value: 'africa',
        label: 'Африка',
        isDisabled: true,
    },
];

const SingleStory = (args: StorySelectProps) => {
    const [value, setValue] = useState('');

    return (
        <div style={{ width: '300px' }}>
            <Select
                {...args}
                items={items}
                value={value}
                onChange={setValue}
                contentLeft={args.enableContentLeft ? <IconPlasma size="s" color="inherit" /> : undefined}
            />
        </div>
    );
};

export const Single: StoryObj<StorySelectProps> = {
    parameters: {
        controls: {
            exclude: ['isTargetAmount', 'chipType'],
        },
    },
    render: (args) => <SingleStory {...args} />,
    args: {
        closeAfterSelect: true,
    },
};

const MultiselectStory = (args: StorySelectProps) => {
    const [value, setValue] = useState<Array<string>>([]);

    return (
        <div style={{ width: '300px' }}>
            <Select
                {...args}
                items={items}
                value={value}
                onChange={setValue}
                contentLeft={args.enableContentLeft ? <IconPlasma size="s" color="inherit" /> : undefined}
            />
        </div>
    );
};

export const Multiselect: StoryObj<StorySelectProps> = {
    args: {
        multiselect: true,
        closeAfterSelect: false,
    },
    render: (args) => <MultiselectStory {...args} />,
};

const PredefinedStory = (args: StorySelectProps) => {
    const [valueSingle, setValueSingle] = useState('paris');
    const [valueMultiple, setValueMultiple] = useState(['paris', 'north_america']);

    return (
        <div style={{ width: '300px' }}>
            <Select
                {...args}
                items={items}
                value={valueSingle}
                onChange={setValueSingle}
                contentLeft={args.enableContentLeft ? <IconPlasma size="s" color="inherit" /> : undefined}
            />

            <br />

            <Select
                {...args}
                items={items}
                multiselect
                value={valueMultiple}
                onChange={setValueMultiple}
                contentLeft={args.enableContentLeft ? <IconPlasma size="s" color="inherit" /> : undefined}
            />
        </div>
    );
};

export const Predefined: StoryObj<StorySelectProps> = {
    render: (args) => <PredefinedStory {...args} />,
};
