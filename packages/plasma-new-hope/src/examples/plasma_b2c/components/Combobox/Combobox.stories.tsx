import React, { useState } from 'react';
import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { WithTheme } from '../../../_helpers';
import { IconDone } from '../../../../components/_Icon';
import type { PopoverPlacement } from '../Popover/Popover';

import { Combobox } from './Combobox';

type StorySelectProps = ComponentProps<typeof Combobox> & {
    enableContentLeft?: boolean;
    hasHint?: boolean;
};

const view = ['default', 'positive', 'warning', 'negative'];
const size = ['xs', 's', 'm', 'l'];
const labelPlacement = ['inner', 'outer'];
const variant = ['normal', 'tight'];
const hintViews = ['default'];
const hintSizes = ['m', 's'];
const hintTriggers = ['hover', 'click'];
const hintTargetPlacements = ['outer', 'inner'];
const placements: Array<PopoverPlacement> = [
    'top',
    'top-start',
    'top-end',

    'bottom',
    'bottom-start',
    'bottom-end',

    'left',
    'left-start',
    'left-end',

    'right',
    'right-start',
    'right-end',

    'auto',
];

const meta: Meta<StorySelectProps> = {
    title: 'b2c/Data Entry/Combobox',
    decorators: [WithTheme],
    component: Combobox,
    argTypes: {
        size: {
            options: size,
            control: {
                type: 'select',
            },
        },
        view: {
            options: view,
            control: {
                type: 'select',
            },
        },
        labelPlacement: {
            options: labelPlacement,
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
        hintText: {
            control: { type: 'text' },
            if: { arg: 'hasHint', truthy: true },
        },
        hintView: {
            options: hintViews,
            control: {
                type: 'select',
            },
            if: { arg: 'hasHint', truthy: true },
        },
        hintSize: {
            options: hintSizes,
            control: {
                type: 'select',
            },
            if: { arg: 'hasHint', truthy: true },
        },
        hintTargetPlacement: {
            options: hintTargetPlacements,
            control: {
                type: 'inline-radio',
            },
            if: { arg: 'hasHint', truthy: true },
        },
        hintTrigger: {
            options: hintTriggers,
            control: {
                type: 'inline-radio',
            },
            if: { arg: 'hasHint', truthy: true },
        },
        hintPlacement: {
            options: placements,
            control: {
                type: 'select',
            },
            if: { arg: 'hasHint', truthy: true },
            mappers: placements,
        },
        hintHasArrow: {
            control: { type: 'boolean' },
            if: { arg: 'hasHint', truthy: true },
        },
        hintWidth: {
            control: { type: 'text' },
            if: { arg: 'hasHint', truthy: true },
        },
    },
    args: {
        label: 'Label',
        labelPlacement: 'outer',
        placeholder: 'Placeholder',
        helperText: 'Helper text',
        size: 'm',
        view: 'default',
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
        hasHint: false,
        hintText: 'Текст подсказки',
        hintTrigger: 'hover',
        hintView: 'default',
        hintSize: 'm',
        hintTargetPlacement: 'outer',
        hintPlacement: 'auto',
        hintWidth: '10rem',
        hintHasArrow: true,
    },
    parameters: {
        controls: {
            include: [
                'size',
                'view',
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
                'optional',
                'required',
                'requiredPlacement',
                'hasRequiredIndicator',
                'hasHint',
                'hintText',
                'hintTrigger',
                'hintView',
                'hintSize',
                'hintTargetPlacement',
                'hintPlacement',
                'hintWidth',
                'hintHasArrow',
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
                        disabled: true,
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
        disabled: true,
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
                onToggle={(e) => console.log(e)}
            />
        </div>
    );
};

export const Single: StoryObj<StorySelectProps> = {
    render: (args) => <SingleStory {...args} />,
    args: {
        closeAfterSelect: true,
    },
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
    args: {
        closeAfterSelect: false,
    },
};
