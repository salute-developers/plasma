import React, { ComponentProps, useState } from 'react';
import { composeStories } from '@storybook/react';

import { Combobox } from './component.export';
import * as stories from './Combobox.test-stories';

type ComboboxProps = ComponentProps<typeof Combobox>;

type RenderItemForTestProps = {
    renderItem: ComboboxProps['renderItem'];
};

type RenderValueForTestProps = {
    renderValue: ComboboxProps['renderValue'];
};

export const { Controlled } = composeStories(stories);

export const items = [
    {
        value: 'north_america',
        label: 'Северная Америка',
        className: 'test-classname',
        'data-name': 'test-data-name',
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

export const itemsWithDisabled = [
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
];

export const RenderItemForTest = (props: RenderItemForTestProps) => {
    const renderItems = [
        { value: 'item1', label: 'Ivan' },
        { value: 'item2', label: 'Alexey' },
    ];

    return (
        <Combobox
            id="combobox"
            items={renderItems}
            label="Label"
            placeholder="Placeholder"
            renderItem={(item) => props?.renderItem?.(item)}
        />
    );
};

export const RenderValueForTest = (props: RenderValueForTestProps) => {
    return (
        <>
            <div id="combobox1">
                <Combobox
                    renderValue={props?.renderValue}
                    id="single"
                    items={items}
                    label="Single"
                    placeholder="Placeholder"
                />
            </div>

            <br />

            <div id="combobox2">
                <Combobox
                    renderValue={props?.renderValue}
                    id="multiple"
                    multiple
                    items={items}
                    label="Multiple"
                    placeholder="Placeholder"
                    closeAfterSelect
                />
            </div>
        </>
    );
};

export const ComboboxGroup = (props: any) => {
    const [singleValue, setSingleValue] = useState('paris');
    const [valueMultiple, setValueMultiple] = useState<Array<string>>(['london', 'madrid']);

    return (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 2fr', gap: '30px' }}>
            <Combobox
                view="default"
                items={items}
                label="Label"
                placeholder="Placeholder"
                helperText="Helper text"
                {...props}
            />

            <Combobox
                view="default"
                multiple
                items={items}
                label="Label"
                placeholder="Placeholder"
                helperText="Helper text"
                {...props}
            />

            <Combobox
                view="default"
                items={items}
                value={singleValue}
                onChange={setSingleValue}
                label="Label"
                placeholder="Placeholder"
                helperText="Helper text"
                {...props}
            />

            <Combobox
                view="default"
                multiple
                items={items}
                value={valueMultiple}
                onChange={setValueMultiple}
                label="Label"
                placeholder="Placeholder"
                helperText="Helper text"
                {...props}
            />

            <Combobox
                view="positive"
                items={items}
                label="Label"
                placeholder="Placeholder"
                helperText="Helper text"
                {...props}
            />

            <Combobox
                view="positive"
                multiple
                items={items}
                label="Label"
                placeholder="Placeholder"
                helperText="Helper text"
                {...props}
            />

            <Combobox
                view="positive"
                items={items}
                value={singleValue}
                onChange={setSingleValue}
                label="Label"
                placeholder="Placeholder"
                helperText="Helper text"
                {...props}
            />

            <Combobox
                view="positive"
                multiple
                items={items}
                value={valueMultiple}
                onChange={setValueMultiple}
                label="Label"
                placeholder="Placeholder"
                helperText="Helper text"
                {...props}
            />

            <Combobox
                view="warning"
                items={items}
                label="Label"
                placeholder="Placeholder"
                helperText="Helper text"
                {...props}
            />

            <Combobox
                view="warning"
                multiple
                items={items}
                label="Label"
                placeholder="Placeholder"
                helperText="Helper text"
                {...props}
            />

            <Combobox
                view="warning"
                items={items}
                value={singleValue}
                onChange={setSingleValue}
                label="Label"
                placeholder="Placeholder"
                helperText="Helper text"
                {...props}
            />

            <Combobox
                view="warning"
                multiple
                items={items}
                value={valueMultiple}
                onChange={setValueMultiple}
                label="Label"
                placeholder="Placeholder"
                helperText="Helper text"
                {...props}
            />

            <Combobox
                view="negative"
                items={items}
                label="Label"
                placeholder="Placeholder"
                helperText="Helper text"
                {...props}
            />

            <Combobox
                view="negative"
                multiple
                items={items}
                label="Label"
                placeholder="Placeholder"
                helperText="Helper text"
                {...props}
            />

            <Combobox
                view="negative"
                items={items}
                value={singleValue}
                onChange={setSingleValue}
                label="Label"
                placeholder="Placeholder"
                helperText="Helper text"
                {...props}
            />

            <Combobox
                view="negative"
                multiple
                items={items}
                value={valueMultiple}
                onChange={setValueMultiple}
                label="Label"
                placeholder="Placeholder"
                helperText="Helper text"
                {...props}
            />

            <Combobox
                labelPlacement="inner"
                view="default"
                items={items}
                label="Label"
                placeholder="Placeholder"
                helperText="Helper text"
                {...props}
            />

            <Combobox
                labelPlacement="inner"
                view="default"
                multiple
                items={items}
                label="Label"
                placeholder="Placeholder"
                helperText="Helper text"
                {...props}
            />

            <Combobox
                labelPlacement="inner"
                view="default"
                items={items}
                value={singleValue}
                onChange={setSingleValue}
                label="Label"
                placeholder="Placeholder"
                helperText="Helper text"
                {...props}
            />

            <Combobox
                labelPlacement="inner"
                view="default"
                multiple
                items={items}
                value={valueMultiple}
                onChange={setValueMultiple}
                label="Label"
                placeholder="Placeholder"
                helperText="Helper text"
                {...props}
            />

            <Combobox
                labelPlacement="inner"
                view="positive"
                items={items}
                label="Label"
                placeholder="Placeholder"
                helperText="Helper text"
                {...props}
            />

            <Combobox
                labelPlacement="inner"
                view="positive"
                multiple
                items={items}
                label="Label"
                placeholder="Placeholder"
                helperText="Helper text"
                {...props}
            />

            <Combobox
                labelPlacement="inner"
                view="positive"
                items={items}
                value={singleValue}
                onChange={setSingleValue}
                label="Label"
                placeholder="Placeholder"
                helperText="Helper text"
                {...props}
            />

            <Combobox
                labelPlacement="inner"
                view="positive"
                multiple
                items={items}
                value={valueMultiple}
                onChange={setValueMultiple}
                label="Label"
                placeholder="Placeholder"
                helperText="Helper text"
                {...props}
            />

            <Combobox
                labelPlacement="inner"
                view="warning"
                items={items}
                label="Label"
                placeholder="Placeholder"
                helperText="Helper text"
                {...props}
            />

            <Combobox
                labelPlacement="inner"
                view="warning"
                multiple
                items={items}
                label="Label"
                placeholder="Placeholder"
                helperText="Helper text"
                {...props}
            />

            <Combobox
                labelPlacement="inner"
                view="warning"
                items={items}
                value={singleValue}
                onChange={setSingleValue}
                label="Label"
                placeholder="Placeholder"
                helperText="Helper text"
                {...props}
            />

            <Combobox
                labelPlacement="inner"
                view="warning"
                multiple
                items={items}
                value={valueMultiple}
                onChange={setValueMultiple}
                label="Label"
                placeholder="Placeholder"
                helperText="Helper text"
                {...props}
            />

            <Combobox
                labelPlacement="inner"
                view="negative"
                items={items}
                label="Label"
                placeholder="Placeholder"
                helperText="Helper text"
                {...props}
            />

            <Combobox
                labelPlacement="inner"
                view="negative"
                multiple
                items={items}
                label="Label"
                placeholder="Placeholder"
                helperText="Helper text"
                {...props}
            />

            <Combobox
                labelPlacement="inner"
                view="negative"
                items={items}
                value={singleValue}
                onChange={setSingleValue}
                label="Label"
                placeholder="Placeholder"
                helperText="Helper text"
                {...props}
            />

            <Combobox
                labelPlacement="inner"
                view="negative"
                multiple
                items={items}
                value={valueMultiple}
                onChange={setValueMultiple}
                label="Label"
                placeholder="Placeholder"
                helperText="Helper text"
                {...props}
            />
        </div>
    );
};
