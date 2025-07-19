import * as React from 'react';
import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { InSpacingDecorator } from '@salutejs/plasma-sb-utils';
import { IconBlankTxtOutline, IconLock, IconTrash } from '@salutejs/plasma-icons';

import { Tree } from './Tree';

type StoryTreeProps = ComponentProps<typeof Tree>;

const size = ['xs', 's', 'm', 'l'];
const arrowPlacements = ['left', 'right'];

const meta: Meta<StoryTreeProps> = {
    title: 'Data Entry/Tree',
    decorators: [InSpacingDecorator],
    component: Tree,
    argTypes: {
        size: {
            control: 'select',
            options: size,
        },
        checkable: {
            control: 'boolean',
        },
        multiple: {
            control: 'boolean',
        },
        arrowPlacement: {
            options: arrowPlacements,
            control: {
                type: 'inline-radio',
            },
        },
        defaultExpandAll: {
            control: 'boolean',
        },
        fullWidthItemSelection: {
            control: 'boolean',
        },
        height: {
            control: 'number',
        },
        hasIcon: {
            control: 'boolean',
        },
    },
    args: {
        size: 'm',
        fullWidthItemSelection: false,
        checkable: false,
        multiple: false,
        arrowPlacement: 'left',
        defaultExpandAll: true,
        height: undefined,
        hasIcon: true,
    },
    parameters: {
        controls: {
            include: [
                'size',
                'fullWidthItemSelection',
                'checkable',
                'multiple',
                'arrowPlacement',
                'defaultExpandAll',
                'height',
                'hasIcon',
            ],
        },
    },
};

export default meta;

const StoryDefault = (args: StoryTreeProps) => {
    const treeData: any[] = [
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
                            contentRight: (
                                <IconLock size={args.size === 'xs' ? 'xs' : 's'} color="var(--text-secondary)" />
                            ),
                            disabled: true,
                        },
                        {
                            title: 'Проекты',
                            key: '0-0-0-1',
                            children: [
                                {
                                    title: 'Проект Альфа',
                                    key: '0-0-0-1-0',
                                    icon: (
                                        <IconBlankTxtOutline size={args.size === 'xs' ? 'xs' : 's'} color="inherit" />
                                    ),
                                },
                                {
                                    title: 'Проект Бета',
                                    key: '0-0-0-1-1',
                                    icon: (
                                        <IconBlankTxtOutline size={args.size === 'xs' ? 'xs' : 's'} color="inherit" />
                                    ),
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
                                    icon: (
                                        <IconBlankTxtOutline size={args.size === 'xs' ? 'xs' : 's'} color="inherit" />
                                    ),
                                },
                                {
                                    title: 'Категория Дельта',
                                    key: '0-0-0-2-1',
                                    icon: (
                                        <IconBlankTxtOutline size={args.size === 'xs' ? 'xs' : 's'} color="inherit" />
                                    ),
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

    return <Tree {...args} items={treeData} />;
};

export const Default: StoryObj<StoryTreeProps> = {
    render: (args) => <StoryDefault {...args} />,
};
