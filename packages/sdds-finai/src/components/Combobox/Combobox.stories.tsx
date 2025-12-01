import React, { useState } from 'react';
import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { InSpacingDecorator } from '@salutejs/plasma-sb-utils';
import { IconDone } from '@salutejs/plasma-icons';
import type { PopoverPlacement } from '@salutejs/plasma-new-hope';

import { Combobox } from './Combobox';

type StorySelectProps = ComponentProps<typeof Combobox> & {
    enableContentLeft?: boolean;
    hasHint?: boolean;
    selectAllLabel?: string;
    selectAllSticky?: boolean;
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
const mode = ['default', 'radio'];
const chipClickArea = ['full', 'close-icon'];
const arrowPlacement = ['left', 'right'];

const includeParams = [
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
    'listMaxHeight',
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
    'mode',
    'treeView',
    'arrowPlacement',
];

const meta: Meta<StorySelectProps> = {
    title: 'Data Entry/Combobox',
    decorators: [InSpacingDecorator],
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
            control: 'text',
        },
        listMaxHeight: {
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
        emptyStateDescription: {
            control: { type: 'text' },
        },
        mode: {
            options: mode,
            control: {
                type: 'select',
            },
        },
        treeView: {
            control: {
                type: 'boolean',
            },
        },
        arrowPlacement: {
            options: arrowPlacement,
            control: {
                type: 'select',
            },
            if: { arg: 'treeView', truthy: true },
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
        emptyStateDescription: '',
        mode: 'default',
        treeView: false,
        arrowPlacement: 'left',
    },
    parameters: {
        controls: {
            include: includeParams,
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
    argTypes: {
        chipClickArea: {
            options: chipClickArea,
            control: {
                type: 'select',
            },
        },
    },
    args: {
        chipClickArea: 'close-icon',
    },
    parameters: {
        controls: {
            include: [...includeParams, 'chipClickArea'],
            exclude: ['mode'],
        },
    },
};

const flatItems = [
    {
        value: 'north_america',
        label: 'Северная Америка',
    },
    {
        value: 'rio_de_janeiro',
        label: 'Рио-де-Жанейро',
    },
    {
        value: 'sao_paulo',
        label: 'Сан-Паулу',
    },
    {
        value: 'buenos_aires',
        label: 'Буэнос-Айрес',
    },
    {
        value: 'cordoba',
        label: 'Кордова',
    },
    {
        value: 'bogota',
        label: 'Богота',
    },
    {
        value: 'medellin',
        label: 'Медельин',
    },
    {
        value: 'paris',
        label: 'Париж',
    },
    {
        value: 'lyon',
        label: 'Лион',
    },
    {
        value: 'berlin',
        label: 'Берлин',
    },
    {
        value: 'munich',
        label: 'Мюнхен',
    },
    {
        value: 'rome',
        label: 'Рим',
    },
    {
        value: 'milan',
        label: 'Милан',
    },
    {
        value: 'madrid',
        label: 'Мадрид',
    },
    {
        value: 'barcelona',
        label: 'Барселона',
    },
    {
        value: 'london',
        label: 'Лондон',
    },
    {
        value: 'manchester',
        label: 'Манчестер',
    },
    {
        value: 'beijing',
        label: 'Пекин',
    },
    {
        value: 'shanghai',
        label: 'Шанхай',
    },
    {
        value: 'tokyo',
        label: 'Токио',
    },
    {
        value: 'osaka',
        label: 'Осака',
    },
    {
        value: 'delhi',
        label: 'Дели',
    },
    {
        value: 'mumbai',
        label: 'Мумбаи',
    },
    {
        value: 'seoul',
        label: 'Сеул',
    },
    {
        value: 'busan',
        label: 'Пусан',
    },
    {
        value: 'bangkok',
        label: 'Бангкок',
    },
    {
        value: 'phuket',
        label: 'Пхукет',
    },
    {
        value: 'africa',
        label: 'Африка',
    },
];

const SelectAllStory = (args: StorySelectProps) => {
    const [value, setValue] = useState([]);
    const [checked, setChecked] = useState(false);
    const [indeterminate, setIndeterminate] = useState(false);

    const handleClick = () => {
        if (checked && !indeterminate) {
            setValue([]);
        } else {
            setValue(flatItems.map((item) => item.value));
        }
    };

    React.useEffect(() => {
        if (value.length === 0) {
            setChecked(false);
            setIndeterminate(false);
        } else if (value.length === flatItems.length) {
            setChecked(true);
            setIndeterminate(false);
        } else {
            setChecked(true);
            setIndeterminate(true);
        }
    }, [value]);

    return (
        <div style={{ width: '400px' }}>
            <Combobox
                placeholder="Placeholder"
                multiple
                items={flatItems}
                value={value}
                onChange={setValue}
                listOverflow="auto"
                listMaxHeight="300px"
                selectAllOptions={{
                    sticky: args?.selectAllSticky || false,
                    label: args?.selectAllLabel,
                    checked,
                    indeterminate,
                    onClick: handleClick,
                }}
            />
        </div>
    );
};

export const SelectAll: StoryObj<StorySelectProps> = {
    render: (args) => <SelectAllStory {...args} />,
    argTypes: {
        selectAllSticky: {
            control: 'boolean',
        },
        selectAllLabel: {
            control: 'text',
        },
    },
    args: {
        selectAllSticky: false,
        selectAllLabel: 'Выбрать все',
    },
    parameters: {
        controls: {
            include: ['selectAllSticky', 'selectAllLabel'],
        },
    },
};

const shortListItems = [
    {
        value: 'north_america',
        label: 'Северная Америка',
    },
    {
        value: 'rio_de_janeiro',
        label: 'Рио-де-Жанейро',
    },
    {
        value: 'sao_paulo',
        label: 'Сан-Паулу',
    },
];

const AddItemStory = (args: StorySelectProps) => {
    const [items, setItems] = useState(shortListItems);
    const [value, setValue] = useState([]);
    const [textValue, setTextValue] = useState('');

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            setItems([...items, { value: textValue, label: textValue }]);
            setValue([...value, textValue]);
            setTextValue('');
        }
    };

    return (
        <div style={{ width: '400px' }}>
            <Combobox
                multiple
                label="Label"
                placeholder="Placeholder"
                items={items}
                value={value}
                onChange={setValue}
                onChangeValue={setTextValue}
                onKeyDown={handleKeyDown}
                helperText={args.helperText}
                emptyStateDescription={args.emptyStateDescription}
            />
        </div>
    );
};

export const AddItem: StoryObj<StorySelectProps> = {
    render: (args) => <AddItemStory {...args} />,
    args: {
        emptyStateDescription: 'Нажмите Enter, чтобы добавить значение в список.',
        helperText: 'Введите новое слово',
    },
    parameters: {
        controls: {
            include: ['helperText', 'emptyStateDescription'],
        },
    },
};
