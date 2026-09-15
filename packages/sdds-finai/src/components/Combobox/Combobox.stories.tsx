import React, { useState } from 'react';
import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { getComboboxStories } from '@salutejs/plasma-sb-utils';
import { IconLockOutline } from '@salutejs/plasma-icons';

import { Combobox } from './Combobox';
import { config } from './Combobox.config';

type ComboboxProps = ComponentProps<typeof Combobox>;

const { meta: META, Single, Multiple, SelectAll, AddItem } = getComboboxStories({
    component: Combobox,
    componentConfig: config,
    defaultArgs: {
        ...config.defaults,
        appearance: 'default',
    },
    additionalArgTypes: {
        appearance: {
            options: ['default', 'viewMode'],
            control: { type: 'select' },
        },
    },
    getContentRight: (size: string, disabled?: boolean) => {
        if (disabled) {
            return <IconLockOutline size={size === 'xs' ? 'xs' : 's'} color="inherit" />;
        }

        return undefined;
    },
});

const meta: Meta<ComboboxProps> = {
    ...META,
    title: 'Data Entry/Combobox',
};

export default meta;

export { Single, Multiple, SelectAll, AddItem };

const sortItemsExample = [
    { value: 'paris', label: 'Париж' },
    { value: 'berlin', label: 'Берлин' },
    { value: 'rome', label: 'Рим' },
    { value: 'madrid', label: 'Мадрид' },
    { value: 'lisbon', label: 'Лиссабон' },
    { value: 'vienna', label: 'Вена' },
    { value: 'prague', label: 'Прага' },
    { value: 'amsterdam', label: 'Амстердам' },
];

type SortItem = {
    value: string;
    label: string;
    items?: SortItem[];
};

const sortNestedItemsExample: SortItem[] = [
    {
        value: 'europe',
        label: 'Европа',
        items: [
            {
                value: 'france',
                label: 'Франция',
                items: [
                    { value: 'paris', label: 'Париж' },
                    { value: 'lyon', label: 'Лион' },
                ],
            },
            {
                value: 'germany',
                label: 'Германия',
                items: [
                    { value: 'berlin', label: 'Берлин' },
                    { value: 'munich', label: 'Мюнхен' },
                ],
            },
            {
                value: 'italy',
                label: 'Италия',
                items: [
                    { value: 'rome', label: 'Рим' },
                    { value: 'milan', label: 'Милан' },
                ],
            },
        ],
    },
    {
        value: 'south_america',
        label: 'Южная Америка',
        items: [
            {
                value: 'brazil',
                label: 'Бразилия',
                items: [
                    { value: 'rio_de_janeiro', label: 'Рио-де-Жанейро' },
                    { value: 'sao_paulo', label: 'Сан-Паулу' },
                ],
            },
            {
                value: 'argentina',
                label: 'Аргентина',
                items: [
                    { value: 'buenos_aires', label: 'Буэнос-Айрес' },
                    { value: 'cordoba', label: 'Кордова' },
                ],
            },
        ],
    },
    {
        value: 'asia',
        label: 'Азия',
        items: [
            {
                value: 'japan',
                label: 'Япония',
                items: [
                    { value: 'tokyo', label: 'Токио' },
                    { value: 'osaka', label: 'Осака' },
                ],
            },
            {
                value: 'china',
                label: 'Китай',
                items: [
                    { value: 'beijing', label: 'Пекин' },
                    { value: 'shanghai', label: 'Шанхай' },
                ],
            },
        ],
    },
];

const hasSelectedInTree = (item: SortItem, selected: string[]): boolean => {
    if (selected.includes(item.value)) {
        return true;
    }

    return Boolean(item.items?.some((child) => hasSelectedInTree(child, selected)));
};

const sortSelectedFirst = <T extends SortItem>(items: T[], selected: string[]): T[] =>
    [...items]
        .map((item) =>
            item.items
                ? {
                      ...item,
                      items: sortSelectedFirst(item.items, selected),
                  }
                : item,
        )
        .sort((a, b) => {
            const aSelected = hasSelectedInTree(a, selected) ? 0 : 1;
            const bSelected = hasSelectedInTree(b, selected) ? 0 : 1;

            return aSelected - bSelected || a.label.localeCompare(b.label, 'ru');
        });

/**
 * Multiple + chips: выбранные элементы поднимаются вверх списка через `sortItems`.
 */
const CustomSortExample = (args: ComboboxProps) => {
    const [value, setValue] = useState<string[]>(['berlin', 'vienna']);

    return (
        <div style={{ width: '400px' }}>
            <Combobox
                {...args}
                multiple
                items={sortItemsExample}
                value={value}
                onChange={setValue}
                sortItems={(list) => sortSelectedFirst(list, value)}
            />
        </div>
    );
};

export const CustomSort: StoryObj<ComboboxProps> = {
    render: (args) => <CustomSortExample {...args} />,
    args: {
        label: 'Label',
        placeholder: 'Placeholder',
        helperText: 'Сортировка при открытии списка: выбранные элементы сверху',
        listMaxHeight: '300px',
        chipView: 'default',
    },
};

/**
 * Multiple + chips + nested items: ветки с выбранными элементами поднимаются вверх на каждом уровне.
 * Порядок фиксируется при открытии списка и не меняется, пока дропдаун открыт.
 */
const CustomSortNestedExample = (args: ComboboxProps) => {
    const [value, setValue] = useState<string[]>(['berlin', 'rio_de_janeiro']);

    return (
        <div style={{ width: '400px' }}>
            <Combobox
                {...args}
                multiple
                items={sortNestedItemsExample}
                value={value}
                onChange={setValue}
                sortItems={(list) => sortSelectedFirst(list, value)}
            />
        </div>
    );
};

export const CustomSortNested: StoryObj<ComboboxProps> = {
    render: (args) => <CustomSortNestedExample {...args} />,
    args: {
        label: 'Label',
        placeholder: 'Placeholder',
        helperText: 'Сортировка при открытии: ветки с выбранными элементами сверху',
        listMaxHeight: '300px',
        chipView: 'default',
    },
};
