import React from 'react';
import { IconFileTextOutline, IconLock, IconTrash } from '@salutejs/plasma-icons';

export const arrowPlacements = ['left', 'right'];
export const mode = ['default', 'radio'];
export const variant = ['normal', 'tight'];

export const getTreeData = (args: any): any[] => [
    {
        title: 'Основной каталог',
        key: '0-0',
        contentRight: <IconTrash size={args.size === 'xs' ? 'xs' : 's'} color="var(--text-secondary)" />,
        children: [
            {
                title: 'Документы',
                key: '0-0-0',
                children: [
                    {
                        title: 'Отчёты',
                        key: '0-0-0-0',
                        contentRight: <IconLock size={args.size === 'xs' ? 'xs' : 's'} color="var(--text-secondary)" />,
                        disabled: true,
                    },
                    {
                        title: 'Проекты',
                        key: '0-0-0-1',
                        children: [
                            {
                                title:
                                    'Проект альфа с длинным названием альфа с длинным названием альфа с длинным названием альфа с длинным названием альфа с длинным названием',
                                key: '0-0-0-1-0',
                                icon: <IconFileTextOutline size={args.size === 'xs' ? 'xs' : 's'} color="inherit" />,
                            },
                            {
                                title: 'Проект Бета',
                                key: '0-0-0-1-1',
                                icon: <IconFileTextOutline size={args.size === 'xs' ? 'xs' : 's'} color="inherit" />,
                            },
                        ],
                    },
                    {
                        title: 'Категории',
                        key: '0-0-0-2',
                        children: [
                            {
                                title: 'Категория Гамма',
                                key: '0-0-0-2-0',
                                icon: <IconFileTextOutline size={args.size === 'xs' ? 'xs' : 's'} color="inherit" />,
                            },
                            {
                                title: 'Категория Дельта',
                                key: '0-0-0-2-1',
                                icon: <IconFileTextOutline size={args.size === 'xs' ? 'xs' : 's'} color="inherit" />,
                            },
                        ],
                    },
                ],
            },
            {
                title: 'Медиа',
                key: '0-0-1',
                children: [
                    {
                        title: 'Фотографии',
                        key: '0-0-1-0',
                    },
                ],
            },
        ],
    },
    {
        title: 'Корзина',
        key: '0-1',
        children: [
            {
                title: 'Удалённые файлы',
                key: '0-1-0',
            },
        ],
    },
];
