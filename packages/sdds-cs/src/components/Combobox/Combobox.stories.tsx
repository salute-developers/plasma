import React, { useState } from 'react';
import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { disableProps, InSpacingDecorator } from '@salutejs/plasma-sb-utils';
import { IconDone } from '@salutejs/plasma-icons';

import { Combobox } from './Combobox';

type StorySelectProps = ComponentProps<typeof Combobox> & {
    enableContentLeft?: boolean;
};

const view = ['default', 'negative'];
const chip = ['default', 'secondary', 'accent'];
const variant = ['normal', 'tight'];

const meta: Meta<StorySelectProps> = {
    title: 'Data Entry/Combobox',
    decorators: [InSpacingDecorator],
    component: Combobox,
    argTypes: {
        view: {
            options: view,
            control: {
                type: 'select',
            },
        },
        chipView: {
            options: chip,
            control: {
                type: 'select',
            },
        },
        variant: {
            options: variant,
            control: {
                type: 'select',
            },
        },
        listWidth: {
            control: {
                type: 'text',
            },
        },
        listOverflow: {
            control: {
                type: 'text',
            },
        },
        listHeight: {
            control: {
                type: 'text',
            },
        },
        disabled: {
            control: { type: 'boolean' },
            if: { arg: 'alwaysOpened', truthy: false },
        },
        readOnly: {
            control: { type: 'boolean' },
            if: { arg: 'alwaysOpened', truthy: false },
        },
        targetAmount: {
            control: { type: 'number' },
            if: { arg: 'isTargetAmount', truthy: true },
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
        hasRequiredIndicator: {
            control: {
                type: 'boolean',
            },
            if: {
                arg: 'required',
                truthy: true,
            },
        },
        optional: {
            control: {
                type: 'boolean',
            },
            if: { arg: 'required', truthy: false },
        },
        emptyStateDescription: {
            control: { type: 'text' },
        },
        ...disableProps([
            'hintText',
            'hintTrigger',
            'hintView',
            'hintSize',
            'hintTargetIcon',
            'hintTargetPlacement',
            'hintPlacement',
            'hintHasArrow',
            'hintOffset',
            'hintWidth',
            'hintContentLeft',
        ]),
    },
    args: {
        label: 'Label',
        placeholder: 'Placeholder',
        helperText: 'Helper text',
        view: 'default',
        chipView: 'default',
        enableContentLeft: false,
        isTargetAmount: false,
        targetAmount: undefined,
        variant: 'normal',
        alwaysOpened: false,
        disabled: false,
        readOnly: false,
        optional: false,
        required: false,
        requiredPlacement: 'right',
        hasRequiredIndicator: true,
        emptyStateDescription: '',
    },
    parameters: {
        controls: {
            include: [
                'size',
                'view',
                'chipView',
                'enableContentLeft',
                'label',
                'labelPlacement',
                'placeholder',
                'helperText',
                'isTargetAmount',
                'targetAmount',
                'closeAfterSelect',
                'alwaysOpened',
                'variant',
                'disabled',
                'readOnly',
                'listWidth',
                'listOverflow',
                'listHeight',
                'labelPlacement',
                'optional',
                'required',
                'requiredPlacement',
                'hasRequiredIndicator',
                'emptyStateDescription',
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
        <div style={{ width: '400px' }}>
            <Combobox
                {...args}
                items={items}
                value={value}
                onChange={setValue}
                contentLeft={args.enableContentLeft ? <IconDone size="s" /> : undefined}
            />
        </div>
    );
};

export const Single: StoryObj<StorySelectProps> = {
    render: (args) => <SingleStory {...args} />,
    parameters: {
        controls: {
            exclude: ['isTargetAmount'],
        },
    },
};

const MultipleStory = (args: StorySelectProps) => {
    const [value, setValue] = useState([]);

    return (
        <div style={{ width: '400px' }}>
            <Combobox
                {...args}
                multiple
                items={items}
                value={value}
                onChange={setValue}
                contentLeft={args.enableContentLeft ? <IconDone size="s" /> : undefined}
            />
        </div>
    );
};

export const Multiple: StoryObj<StorySelectProps> = {
    render: (args) => <MultipleStory {...args} />,
};
