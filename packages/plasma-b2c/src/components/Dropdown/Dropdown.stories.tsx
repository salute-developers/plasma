import React, { useState, ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { InSpacingDecorator } from '@salutejs/plasma-sb-utils';
import { IconLocation } from '@salutejs/plasma-icons';
import { action } from 'storybook/actions';

import { Button } from '../Button';

import { Dropdown, DropdownList, DropdownItem, DropdownPopup } from '.';

type DropdownProps = ComponentProps<typeof Dropdown>;

const placements: DropdownProps['placement'][] = ['auto', 'top', 'right', 'bottom', 'left'];
const triggers: DropdownProps['trigger'][] = ['click', 'hover'];
const size = ['xs', 's', 'm', 'l', 'xl'];
const variant = ['normal', 'tight'];

const meta: Meta<DropdownProps> = {
    title: 'Data Entry/Dropdown',
    component: Dropdown,
    decorators: [InSpacingDecorator],
    argTypes: {
        placement: {
            options: placements,
            control: {
                type: 'select',
            },
            mapping: placements,
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
        offset: [0, 8],
        listWidth: '300px',
        alwaysOpened: false,
        closeOnOverlayClick: true,
        closeOnSelect: true,
    },
    parameters: {
        controls: {
            include: [
                'size',
                'variant',
                'placement',
                'trigger',
                'offset',
                'listWidth',
                'closeOnOverlayClick',
                'closeOnSelect',
            ],
        },
    },
};

export default meta;

const items = (dropdownSize: DropdownProps['size']) => [
    {
        value: 'north_america',
        label: 'Северная Америка',
        contentLeft: <IconLocation size={dropdownSize !== 'xs' ? 's' : 'xs'} color="inherit" />,
        contentRight: <IconLocation size={dropdownSize !== 'xs' ? 's' : 'xs'} color="inherit" />,
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

const StoryNormal = (args: DropdownProps) => {
    return (
        <>
            <Dropdown
                {...args}
                items={items(args.size)}
                onToggle={action('onToggle')}
                onHover={action('onHover')}
                onItemSelect={action('onItemSelect')}
                onItemClick={action('onItemClick')}
            >
                <Button text="Список стран" size={args.size} />
            </Dropdown>
        </>
    );
};

export const Default: StoryObj<DropdownProps> = {
    render: (args) => <StoryNormal {...args} />,
};

const CompositionDeprecatedStory = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            style={{
                height: '350px',
                display: 'block',
            }}
        >
            <DropdownPopup
                opened={isOpen}
                trigger="click"
                placement="bottom"
                onToggle={(is) => setIsOpen(is)}
                disclosure={<Button text="Меню" />}
            >
                <DropdownList>
                    <DropdownItem
                        index={5}
                        value={100001}
                        label="Новости"
                        onHover={(index) => console.log(index)}
                        isActive
                    />
                    <DropdownItem index={0} value={100002} label="Каталог" color="var(--text-accent)" />
                    <DropdownItem index={1} value={100003} label="О нас" color="var(--text-negative)" />
                    <DropdownItem index={2} value={100004} label="Недоступно" isDisabled />
                </DropdownList>
            </DropdownPopup>
        </div>
    );
};

export const CompositionDeprecated: StoryObj<DropdownProps> = {
    render: (args) => <CompositionDeprecatedStory {...args} />,
    parameters: {
        controls: {
            include: [],
        },
    },
};
