import React, { useState } from 'react';
import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { IconPlaceholder } from '@salutejs/plasma-sb-utils';

import { WithTheme } from '../../../_helpers';

import { SelectNew, SelectNotFoundContent } from './SelectNew';

type StorySelectNewProps = ComponentProps<typeof SelectNew>;

const view = ['default', 'accent', 'secondary', 'clear', 'positive', 'warning', 'negative', 'dark', 'black', 'white'];
const size = ['xs', 's', 'm', 'l'];
const labelPlacement = ['inner', 'outer'];
const chip = ['default', 'secondary', 'accent'];

const meta: Meta<StorySelectNewProps> = {
    title: 'plasma_b2c/SelectNew',
    decorators: [WithTheme],
    component: SelectNew,
    argTypes: {
        target: {
            options: ['button', 'textfield'],
            control: {
                type: 'select',
            },
        },
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
        chipView: {
            options: chip,
            control: {
                type: 'select',
            },
        },
    },
    args: {
        target: 'button',
        label: 'Label',
        labelPlacement: 'outer',
        placeholder: 'Placeholder',
        helperText: 'Helper text',
        size: 'm',
        view: 'default',
        chipView: 'default',
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
        disabled: true,
    },
];
const loadingItems = [
    { value: '1', label: 'Item 1' },
    { value: '2', label: 'Item 2' },
    { value: '3', label: 'Item 3' },
    { value: '4', label: 'Item 4' },
    { value: '5', label: 'Item 5' },
    { value: '6', label: 'Item 6' },
    { value: '7', label: 'Item 7' },
    { value: '8', label: 'Item 8' },
    { value: '9', label: 'Item 9' },
    { value: '10', label: 'Item 10' },
];

const SingleStory = (args: StorySelectNewProps) => {
    const [value, setValue] = useState('');

    const iconSize = args.size === 'xs' ? 'xs' : 's';

    return (
        <div style={{ width: '500px' }}>
            <SelectNew
                {...args}
                multiselect={false}
                items={items}
                value={value}
                onChange={setValue}
                contentLeft={<IconPlaceholder size={iconSize} />}
            />
        </div>
    );
};

export const Single: StoryObj<StorySelectNewProps> = {
    render: (args) => <SingleStory {...args} />,
};

const MultiselectStory = (args: StorySelectNewProps) => {
    const [value, setValue] = useState<Array<string>>([]);

    const iconSize = args.size === 'xs' ? 'xs' : 's';

    return (
        <div style={{ width: '300px' }}>
            <SelectNew
                {...args}
                multiselect
                items={items}
                value={value}
                onChange={setValue}
                contentLeft={<IconPlaceholder size={iconSize} />}
            />
        </div>
    );
};

export const Multiselect: StoryObj<StorySelectNewProps> = {
    render: (args) => <MultiselectStory {...args} />,
};

const PredefinedStory = (args: StorySelectNewProps) => {
    const [valueSingle, setValueSingle] = useState('paris');
    const [valueMultiple, setValueMultiple] = useState(['paris', 'north_america']);

    return (
        <div style={{ width: '300px' }}>
            <SelectNew items={items} value={valueSingle} onChange={setValueSingle} multiselect={false} />

            <br />

            <SelectNew items={items} value={valueMultiple} onChange={setValueMultiple} multiselect separator="asd" />
        </div>
    );
};

export const Predefined: StoryObj<StorySelectNewProps> = {
    render: (args) => <PredefinedStory {...args} />,
};

const LoadingStory = (args: StorySelectNewProps) => {
    const [value, setValue] = useState('');

    return (
        <div style={{ width: '300px' }}>
            <SelectNew
                {...args}
                multiselect={false}
                items={[]}
                value={value}
                onChange={setValue}
                listHeight="300px"
                listOverflow="scroll"
            />
        </div>
    );
};

export const Loading: StoryObj<StorySelectNewProps> = {
    render: (args) => (
        <LoadingStory
            {...args}
            notFoundContent={
                <SelectNotFoundContent
                    icon={<IconPlaceholder size="m" />}
                    description="Description"
                    buttonText="click"
                />
            }
        />
    ),
};
