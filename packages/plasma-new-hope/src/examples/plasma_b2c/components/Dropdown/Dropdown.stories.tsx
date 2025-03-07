import * as React from 'react';
import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { WithTheme } from '../../../_helpers';
import { Button } from '../Button/Button';
import type { DropdownPlacement, DropdownTrigger } from '../../../../components/Dropdown/Dropdown.types';

import { Dropdown } from './Dropdown';

type StoryDropdownProps = ComponentProps<typeof Dropdown>;

const placements: Array<DropdownPlacement> = ['auto', 'top', 'right', 'bottom', 'left'];
const triggers: Array<DropdownTrigger> = ['click', 'hover'];
const size = ['xs', 's', 'm', 'l', 'xl'];
const variant = ['normal', 'tight'];

const meta: Meta<StoryDropdownProps> = {
    title: 'b2c/Data Entry/Dropdown',
    decorators: [WithTheme],
    component: Dropdown,
    argTypes: {
        placement: {
            options: placements,
            control: {
                type: 'select',
            },
        },
        trigger: {
            options: triggers,
            control: {
                type: 'select',
            },
        },
        openByRightClick: {
            control: {
                type: 'boolean',
            },
        },
        size: {
            options: size,
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
        closeOnOverlayClick: {
            control: { type: 'boolean' },
            if: { arg: 'alwaysOpened', truthy: false },
        },
        closeOnSelect: {
            control: { type: 'boolean' },
            if: { arg: 'alwaysOpened', truthy: false },
        },
        listWidth: {
            control: { type: 'text' },
        },
    },
    args: {
        size: 'm',
        variant: 'normal',
        placement: 'bottom-start',
        trigger: 'click',
        openByRightClick: false,
        offset: [0, 0],
        listWidth: '300px',
        alwaysOpened: false,
        closeOnOverlayClick: true,
        closeOnSelect: true,
    },
    parameters: {
        controls: {
            exclude: ['hasArrow'],
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
        dividerBefore: true,
        dividerAfter: true,
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

const StoryNormal = (args: StoryDropdownProps) => {
    return (
        <Dropdown
            {...args}
            items={items}
            onToggle={action('onToggle')}
            onHover={action('onHover')}
            onItemSelect={action('onItemSelect')}
            onItemClick={action('onItemClick')}
        >
            <Button text="Список стран" size={args.size} />
        </Dropdown>
    );
};

export const Default: StoryObj<StoryDropdownProps> = {
    render: (args) => <StoryNormal {...args} />,
};
