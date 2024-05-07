import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { InSpacingDecorator } from '@salutejs/plasma-sb-utils';
import type { DropdownPlacement, DropdownTrigger } from '@salutejs/plasma-new-hope';
import { IconLocation } from '@salutejs/plasma-icons';

import { Button } from '../Button';

import type { DropdownProps } from '.';
import { Dropdown, DropdownList, DropdownItem, DropdownPopup } from '.';

const placements: Array<DropdownPlacement> = ['top', 'bottom', 'right', 'left', 'auto'];
const triggers: Array<DropdownTrigger> = ['click', 'hover'];
const size = ['xs', 's', 'm', 'l'];
const variant = ['normal', 'tight'];

const meta: Meta<DropdownProps> = {
    title: 'Controls/Dropdown',
    component: Dropdown,
    decorators: [InSpacingDecorator],
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
    },
    args: {
        trigger: 'click',
        offset: [0, 0],
        listWidth: 'auto',
        hasArrow: true,
        closeOnOverlayClick: true,
        closeOnSelect: true,
        size: 'm',
        variant: 'normal',
    },
};

export default meta;

const items = [
    {
        value: 'north_america',
        label: 'Северная Америка',
        contentLeft: <IconLocation color="inherit" />,
        contentRight: <IconLocation color="inherit" />,
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

const StoryNormal = (args: DropdownProps) => {
    return (
        <>
            <Dropdown items={items} {...args}>
                <Button text="Список стран" />
            </Dropdown>
        </>
    );
};

export const Default: StoryObj<DropdownProps> = {
    render: (args) => <StoryNormal {...args} />,
};

export const CompositionDeprecated = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            style={{
                height: '350px',
                display: 'block',
            }}
        >
            <DropdownPopup
                isOpen={isOpen}
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
                    <DropdownItem index={0} value={100002} label="Каталог" color="var(--plasma-colors-accent)" />
                    <DropdownItem index={1} value={100003} label="О нас" color="var(--plasma-colors-critical)" />
                    <DropdownItem index={2} value={100004} label="Недоступно" isDisabled />
                </DropdownList>
            </DropdownPopup>
        </div>
    );
};
