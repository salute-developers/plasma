import React, { useState } from 'react';
import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import './style.css';

import { WithTheme } from '../../../_helpers';
import { IconDone } from '../../../../components/_Icon';

import { Select } from './Select';

type StorySelectProps = ComponentProps<typeof Select> & {
    enableContentLeft?: boolean;
};

const view = ['default', 'accent', 'secondary', 'clear', 'positive', 'warning', 'negative', 'dark', 'black', 'white'];
const size = ['xs', 's', 'm', 'l'];
const labelPlacement = ['inner', 'outer'];
const chip = ['default', 'secondary', 'accent'];
const variant = ['normal', 'tight'];

const meta: Meta<StorySelectProps> = {
    title: 'plasma_b2c/Select',
    decorators: [WithTheme],
    component: Select,
    argTypes: {
        target: {
            options: ['button-like', 'textfield-like'],
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
    },
    args: {
        target: 'textfield-like',
        label: 'Label',
        labelPlacement: 'outer',
        placeholder: 'Placeholder',
        helperText: 'Helper text',
        size: 'm',
        view: 'default',
        chipView: 'default',
        enableContentLeft: false,
        isTargetAmount: false,
        variant: 'normal',
        disabled: false,
    },
    parameters: {
        controls: {
            include: [
                'target',
                'size',
                'view',
                'chipView',
                'enableContentLeft',
                'label',
                'labelPlacement',
                'placeholder',
                'helperText',
                'isTargetAmount',
                'closeAfterSelect',
                'variant',
                'disabled',
                'listWidth',
                'listOverflow',
                'listHeight',
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
                contentLeft={args.enableContentLeft ? <IconDone size="s" /> : undefined}
            />
        </div>
    );
};

export const Single: StoryObj<StorySelectProps> = {
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
                contentLeft={args.enableContentLeft ? <IconDone size="s" /> : undefined}
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
                contentLeft={args.enableContentLeft ? <IconDone size="s" /> : undefined}
            />

            <br />

            <Select
                {...args}
                items={items}
                multiselect
                value={valueMultiple}
                onChange={setValueMultiple}
                contentLeft={args.enableContentLeft ? <IconDone size="s" /> : undefined}
            />
        </div>
    );
};

export const Predefined: StoryObj<StorySelectProps> = {
    render: (args) => <PredefinedStory {...args} />,
};

const CommonStory = (args: StorySelectProps) => {
    const [value, setValue] = useState('');
    const [valueMultiple, setValueMultiple] = useState<Array<string>>([]);

    const { enableContentLeft } = args;

    return (
        <div className="container">
            <table>
                <thead>
                    <tr>
                        <th>View &#8595;</th>
                        <th>Single Button</th>
                        <th>Multiple Button</th>
                        <th>Single Textfield</th>
                        <th>Multiple Textfield</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Default</td>
                        <td>
                            <div style={{ width: '200px' }}>
                                <Select
                                    {...args}
                                    items={items}
                                    value={value}
                                    onChange={setValue}
                                    view="default"
                                    target="button-like"
                                />
                            </div>
                        </td>
                        <td>
                            <div style={{ width: '200px' }}>
                                <Select
                                    {...args}
                                    multiselect
                                    items={items}
                                    value={valueMultiple}
                                    onChange={setValueMultiple}
                                    view="default"
                                    target="button-like"
                                />
                            </div>
                        </td>
                        <td>
                            <div style={{ width: '200px' }}>
                                <Select
                                    {...args}
                                    items={items}
                                    value={value}
                                    onChange={setValue}
                                    view="default"
                                    contentLeft={enableContentLeft ? <IconDone size="s" /> : undefined}
                                />
                            </div>
                        </td>
                        <td>
                            <div style={{ width: '200px' }}>
                                <Select
                                    {...args}
                                    multiselect
                                    items={items}
                                    value={valueMultiple}
                                    onChange={setValueMultiple}
                                    view="default"
                                    contentLeft={enableContentLeft ? <IconDone size="s" /> : undefined}
                                />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Accent</td>
                        <td>
                            <div style={{ width: '200px' }}>
                                <Select
                                    {...args}
                                    items={items}
                                    value={value}
                                    onChange={setValue}
                                    view="accent"
                                    target="button-like"
                                />
                            </div>
                        </td>
                        <td>
                            <div style={{ width: '200px' }}>
                                <Select
                                    {...args}
                                    multiselect
                                    items={items}
                                    value={valueMultiple}
                                    onChange={setValueMultiple}
                                    view="accent"
                                    target="button-like"
                                />
                            </div>
                        </td>
                        <td />
                        <td />
                    </tr>
                    <tr>
                        <td>Secondary</td>
                        <td>
                            <div style={{ width: '200px' }}>
                                <Select
                                    {...args}
                                    items={items}
                                    value={value}
                                    onChange={setValue}
                                    view="secondary"
                                    target="button-like"
                                />
                            </div>
                        </td>
                        <td>
                            <div style={{ width: '200px' }}>
                                <Select
                                    {...args}
                                    multiselect
                                    items={items}
                                    value={valueMultiple}
                                    onChange={setValueMultiple}
                                    view="secondary"
                                    target="button-like"
                                />
                            </div>
                        </td>
                        <td />
                        <td />
                    </tr>
                    <tr>
                        <td>Clear</td>

                        <td>
                            <div style={{ width: '200px' }}>
                                <Select
                                    {...args}
                                    items={items}
                                    value={value}
                                    onChange={setValue}
                                    view="clear"
                                    target="button-like"
                                />
                            </div>
                        </td>
                        <td>
                            <div style={{ width: '200px' }}>
                                <Select
                                    {...args}
                                    multiselect
                                    items={items}
                                    value={valueMultiple}
                                    onChange={setValueMultiple}
                                    view="clear"
                                    target="button-like"
                                />
                            </div>
                        </td>
                        <td />
                        <td />
                    </tr>
                    <tr>
                        <td>Positive</td>
                        <td>
                            <div style={{ width: '200px' }}>
                                <Select
                                    {...args}
                                    items={items}
                                    value={value}
                                    onChange={setValue}
                                    view="positive"
                                    target="button-like"
                                />
                            </div>
                        </td>
                        <td>
                            <div style={{ width: '200px' }}>
                                <Select
                                    {...args}
                                    multiselect
                                    items={items}
                                    value={valueMultiple}
                                    onChange={setValueMultiple}
                                    view="positive"
                                    target="button-like"
                                />
                            </div>
                        </td>
                        <td>
                            <div style={{ width: '200px' }}>
                                <Select
                                    {...args}
                                    items={items}
                                    value={value}
                                    onChange={setValue}
                                    view="positive"
                                    contentLeft={enableContentLeft ? <IconDone size="s" /> : undefined}
                                />
                            </div>
                        </td>
                        <td>
                            <div style={{ width: '200px' }}>
                                <Select
                                    {...args}
                                    multiselect
                                    items={items}
                                    value={valueMultiple}
                                    onChange={setValueMultiple}
                                    view="positive"
                                    contentLeft={enableContentLeft ? <IconDone size="s" /> : undefined}
                                />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Warning</td>
                        <td>
                            <div style={{ width: '200px' }}>
                                <Select
                                    {...args}
                                    items={items}
                                    value={value}
                                    onChange={setValue}
                                    view="warning"
                                    target="button-like"
                                />
                            </div>
                        </td>
                        <td>
                            <div style={{ width: '200px' }}>
                                <Select
                                    {...args}
                                    multiselect
                                    items={items}
                                    value={valueMultiple}
                                    onChange={setValueMultiple}
                                    view="warning"
                                    target="button-like"
                                />
                            </div>
                        </td>
                        <td>
                            <div style={{ width: '200px' }}>
                                <Select
                                    {...args}
                                    items={items}
                                    value={value}
                                    onChange={setValue}
                                    view="warning"
                                    contentLeft={enableContentLeft ? <IconDone size="s" /> : undefined}
                                />
                            </div>
                        </td>
                        <td>
                            <div style={{ width: '200px' }}>
                                <Select
                                    {...args}
                                    multiselect
                                    items={items}
                                    value={valueMultiple}
                                    onChange={setValueMultiple}
                                    view="warning"
                                    contentLeft={enableContentLeft ? <IconDone size="s" /> : undefined}
                                />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Negative</td>
                        <td>
                            <div style={{ width: '200px' }}>
                                <Select
                                    {...args}
                                    items={items}
                                    value={value}
                                    onChange={setValue}
                                    view="negative"
                                    target="button-like"
                                />
                            </div>
                        </td>
                        <td>
                            <div style={{ width: '200px' }}>
                                <Select
                                    {...args}
                                    multiselect
                                    items={items}
                                    value={valueMultiple}
                                    onChange={setValueMultiple}
                                    view="negative"
                                    target="button-like"
                                />
                            </div>
                        </td>
                        <td>
                            <div style={{ width: '200px' }}>
                                <Select
                                    {...args}
                                    items={items}
                                    value={value}
                                    onChange={setValue}
                                    view="negative"
                                    contentLeft={enableContentLeft ? <IconDone size="s" /> : undefined}
                                />
                            </div>
                        </td>
                        <td>
                            <div style={{ width: '200px' }}>
                                <Select
                                    {...args}
                                    multiselect
                                    items={items}
                                    value={valueMultiple}
                                    onChange={setValueMultiple}
                                    view="negative"
                                    contentLeft={enableContentLeft ? <IconDone size="s" /> : undefined}
                                />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Dark</td>
                        <td>
                            <div style={{ width: '200px' }}>
                                <Select
                                    {...args}
                                    items={items}
                                    value={value}
                                    onChange={setValue}
                                    view="dark"
                                    target="button-like"
                                />
                            </div>
                        </td>
                        <td>
                            <div style={{ width: '200px' }}>
                                <Select
                                    {...args}
                                    multiselect
                                    items={items}
                                    value={valueMultiple}
                                    onChange={setValueMultiple}
                                    view="dark"
                                    target="button-like"
                                />
                            </div>
                        </td>
                        <td />
                        <td />
                    </tr>
                    <tr>
                        <td>Black</td>
                        <td>
                            <div style={{ width: '200px' }}>
                                <Select
                                    {...args}
                                    items={items}
                                    value={value}
                                    onChange={setValue}
                                    view="black"
                                    target="button-like"
                                />
                            </div>
                        </td>
                        <td>
                            <div style={{ width: '200px' }}>
                                <Select
                                    {...args}
                                    multiselect
                                    items={items}
                                    value={valueMultiple}
                                    onChange={setValueMultiple}
                                    view="black"
                                    target="button-like"
                                />
                            </div>
                        </td>
                        <td />
                        <td />
                    </tr>
                    <tr>
                        <td>White</td>
                        <td>
                            <div style={{ width: '200px' }}>
                                <Select
                                    {...args}
                                    items={items}
                                    value={value}
                                    onChange={setValue}
                                    view="white"
                                    target="button-like"
                                />
                            </div>
                        </td>
                        <td>
                            <div style={{ width: '200px' }}>
                                <Select
                                    {...args}
                                    multiselect
                                    items={items}
                                    value={valueMultiple}
                                    onChange={setValueMultiple}
                                    view="white"
                                    target="button-like"
                                />
                            </div>
                        </td>
                        <td />
                        <td />
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export const Common: StoryObj<StorySelectProps> = {
    parameters: {
        controls: {
            exclude: ['target', 'view'],
        },
    },
    argTypes: {
        size: {
            options: size,
            control: {
                type: 'select',
            },
        },
    },
    args: {
        size: 'm',
    },
    render: (args) => <CommonStory {...args} />,
};
