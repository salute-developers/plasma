import * as React from 'react';
import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { InSpacingDecorator } from '@salutejs/plasma-sb-utils';
import { IconBlankTxtOutline, IconLock, IconTrash } from '@salutejs/plasma-icons';

import { Tree } from './Tree';

type StoryTreeProps = ComponentProps<typeof Tree>;

const size = ['xs', 's', 'm', 'l'];
const arrowPlacements = ['left', 'right'];
const mode = ['default', 'radio'];
const variant = ['normal', 'tight'];

const meta: Meta<StoryTreeProps> = {
    title: 'Data Entry/Tree',
    decorators: [InSpacingDecorator],
    component: Tree,
    argTypes: {
        size: {
            control: 'select',
            options: size,
        },
        variant: {
            control: 'select',
            options: variant,
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
        mode: {
            control: 'select',
            options: mode,
        },
    },
    args: {
        size: 'm',
        variant: 'normal',
        fullWidthItemSelection: false,
        checkable: false,
        multiple: false,
        arrowPlacement: 'left',
        defaultExpandAll: true,
        height: undefined,
        hasIcon: true,
        mode: 'default',
    },
};

export default meta;

const getTreeData = (args: any): any[] => [
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
                                title: 'Проект Альфа',
                                key: '0-0-0-1-0',
                                icon: <IconBlankTxtOutline size={args.size === 'xs' ? 'xs' : 's'} color="inherit" />,
                            },
                            {
                                title: 'Проект Бета',
                                key: '0-0-0-1-1',
                                icon: <IconBlankTxtOutline size={args.size === 'xs' ? 'xs' : 's'} color="inherit" />,
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
                                icon: <IconBlankTxtOutline size={args.size === 'xs' ? 'xs' : 's'} color="inherit" />,
                            },
                            {
                                title: 'Категория Дельта',
                                key: '0-0-0-2-1',
                                icon: <IconBlankTxtOutline size={args.size === 'xs' ? 'xs' : 's'} color="inherit" />,
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

const StoryDefault = (args: StoryTreeProps) => {
    return <Tree {...args} items={getTreeData(args)} />;
};

export const Default: StoryObj<StoryTreeProps> = {
    render: (args) => <StoryDefault {...args} />,
};

const StoryDraggable = (args: StoryTreeProps) => {
    const [items, setItems] = React.useState(getTreeData(args));

    const onDrop = (info: any) => {
        const dropKey = info.node.key;
        const dragKey = info.dragNode.key;
        const dropPos = info.node.pos.split('-');
        const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1]);

        // Функция-хелпер для прохода по дереву элементов
        const loop = (data, key, callback) => {
            data.forEach((item, index, arr) => {
                if (item.key === key) {
                    callback(item, index, arr);
                    return;
                }
                if (item.children) {
                    loop(item.children, key, callback);
                }
            });
        };
        const data = [...items];

        // Ищем draggable-элемент
        let dragObj;
        loop(data, dragKey, (item, index, arr) => {
            arr.splice(index, 1);
            dragObj = item;
        });

        if (dropPosition === 0) {
            // Вставляем элемент внутрь target-элемента
            loop(data, dropKey, (item) => {
                item.children = item.children || [];
                item.children.unshift(dragObj);
            });
        } else {
            // Вставляем элемент вначале или после target-элемента
            let ar;
            let i;

            loop(data, dropKey, (item, index, arr) => {
                ar = arr;
                i = index;
            });

            if (dropPosition === -1) {
                ar.splice(i, 0, dragObj);
            } else {
                ar.splice(i + 1, 0, dragObj);
            }
        }

        setItems(data);
    };

    const allowDrop = (info) => {
        return !info.dropNode.disabled;
    };

    return <Tree {...args} items={items} draggable onDrop={onDrop} allowDrop={allowDrop} />;
};

export const DragAndDrop: StoryObj<StoryTreeProps> = {
    render: (args) => <StoryDraggable {...args} />,
};
