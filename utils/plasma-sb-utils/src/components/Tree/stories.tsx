import React, { useState } from 'react';
import { IconTrash, IconLock, IconFileTextOutline } from '@salutejs/plasma-icons';

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

export const createDefaultComponent = (Tree: any) => {
    return (args: any) => {
        return <Tree {...args} items={getTreeData(args)} />;
    };
};

export const createDraggableComponent = (Tree: any) => {
    return (args: any) => {
        const [items, setItems] = useState(getTreeData(args));

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

                loop(data, dropKey, (_, index, arr) => {
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
};

interface DataNode {
    title: string;
    key: string;
    isLeaf?: boolean;
    children?: DataNode[];
}

const initTreeData: any[] = [
    { title: 'Открыть для загрузки', key: '0' },
    { title: 'Конечный элемент', key: '1', isLeaf: true },
];

const updateTreeData = (list: DataNode[], key: React.Key, children: DataNode[]): DataNode[] =>
    list.map((node) => {
        if (node.key === key) {
            return {
                ...node,
                children,
            };
        }

        if (node.children) {
            return {
                ...node,
                children: updateTreeData(node.children, key, children),
            };
        }

        return node;
    });

export const createAsyncComponent = (Tree: any) => {
    return (args: any) => {
        const [treeData, setTreeData] = React.useState(initTreeData);

        const onLoadData = ({ key, children }: any) =>
            new Promise<void>((resolve) => {
                if (children) {
                    resolve();
                    return;
                }

                setTimeout(() => {
                    setTreeData((origin) =>
                        updateTreeData(origin, key, [{ title: 'Загруженный элемент', key: `${key}-0` }]),
                    );

                    resolve();
                }, 2000);
            });

        return <Tree {...args} loadData={onLoadData} items={treeData} />;
    };
};
