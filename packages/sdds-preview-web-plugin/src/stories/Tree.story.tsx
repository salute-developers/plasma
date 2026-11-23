import { IconFileTextOutline, IconLock, IconTrash } from '@salutejs/plasma-icons';
import { component, mergeConfig, treeConfig } from '@salutejs/plasma-new-hope/styled-components';
import { useState } from 'react';
import type { Key } from 'react';

const Tree = component(mergeConfig(treeConfig as any, {}));

const toItems = (values: string[]) => values.map((value) => ({ value, label: value }));

const treeArgs = [
    {
        name: 'checkable',
        value: false,
    },
    {
        name: 'multiple',
        value: false,
    },
    {
        name: 'arrowPlacement',
        value: 'left',
        items: toItems(['left', 'right']),
    },
    {
        name: 'defaultExpandAll',
        value: true,
    },
    {
        name: 'fullWidthItemSelection',
        value: false,
    },
    {
        name: 'singleLine',
        value: true,
    },
    {
        // 0 — без ограничения высоты (`height: undefined` в sdds-serv)
        name: 'height',
        value: 0,
    },
    {
        name: 'hasIcon',
        value: true,
    },
    {
        name: 'mode',
        value: 'default',
        items: toItems(['default', 'radio']),
    },
    {
        name: 'variant',
        value: 'normal',
        items: toItems(['normal', 'tight']),
    },
];

/** Пропсы дерева из аргументов story: `height` 0 — без ограничения высоты. */
const toTreeProps = ({ height, ...rest }: any) => ({
    ...rest,
    height: Number(height) > 0 ? Number(height) : undefined,
});

const getTreeData = (size: string): any[] => {
    const iconSize = size === 'xs' ? 'xs' : 's';

    return [
        {
            title: 'Основной каталог',
            key: '0-0',
            contentRight: <IconTrash size={iconSize} color="var(--text-secondary)" />,
            children: [
                {
                    title: 'Документы',
                    key: '0-0-0',
                    children: [
                        {
                            title: 'Отчёты',
                            key: '0-0-0-0',
                            contentRight: <IconLock size={iconSize} color="var(--text-secondary)" />,
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
                                    icon: <IconFileTextOutline size={iconSize} color="inherit" />,
                                },
                                {
                                    title: 'Проект Бета',
                                    key: '0-0-0-1-1',
                                    icon: <IconFileTextOutline size={iconSize} color="inherit" />,
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
                                    icon: <IconFileTextOutline size={iconSize} color="inherit" />,
                                },
                                {
                                    title: 'Категория Дельта',
                                    key: '0-0-0-2-1',
                                    icon: <IconFileTextOutline size={iconSize} color="inherit" />,
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
};

const TreeDefault = {
    name: 'Default',
    args: treeArgs,
    render: function Story(args: any) {
        const [selectedKeys, setSelectedKeys] = useState<Key[]>([]);
        const [checkedKeys, setCheckedKeys] = useState<Key[]>([]);
        const props = toTreeProps(args);

        return (
            <div style={{ width: '100%' }}>
                <Tree
                    // `defaultExpandAll` действует только при монтировании
                    key={String(props.defaultExpandAll)}
                    {...props}
                    items={getTreeData(props.size)}
                    selectedKeys={selectedKeys}
                    onTreeSelect={(keys: Key[]) => setSelectedKeys(keys)}
                    checkedKeys={checkedKeys}
                    onTreeCheck={(keys: Key[]) => setCheckedKeys(keys)}
                />
            </div>
        );
    },
};

type Loop = (data: any[], key: Key, callback: (item: any, index: number, arr: any[]) => void) => void;

const loop: Loop = (data, key, callback) => {
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

const TreeDragAndDrop = {
    name: 'DragAndDrop',
    args: treeArgs,
    render: function Story(args: any) {
        const props = toTreeProps(args);
        const [items, setItems] = useState(() => getTreeData(props.size));

        const onDrop = (info: any) => {
            const dropKey = info.node.key;
            const dragKey = info.dragNode.key;
            const dropPos = info.node.pos.split('-');
            const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1]);
            const data = [...items];

            // Ищем draggable-элемент
            let dragObj: any;
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
                let ar: any[] = [];
                let i = 0;

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

        const allowDrop = (info: any) => !info.dropNode.disabled;

        return (
            <div style={{ width: '100%' }}>
                <Tree
                    key={String(props.defaultExpandAll)}
                    {...props}
                    items={items}
                    draggable
                    onDrop={onDrop}
                    allowDrop={allowDrop}
                />
            </div>
        );
    },
};

interface DataNode {
    title: string;
    key: string;
    isLeaf?: boolean;
    children?: DataNode[];
}

const initTreeData: DataNode[] = [
    { title: 'Открыть для загрузки', key: '0' },
    { title: 'Конечный элемент', key: '1', isLeaf: true },
];

const updateTreeData = (list: DataNode[], key: Key, children: DataNode[]): DataNode[] =>
    list.map((node) => {
        if (node.key === key) {
            return { ...node, children };
        }

        if (node.children) {
            return { ...node, children: updateTreeData(node.children, key, children) };
        }

        return node;
    });

const TreeAsyncLoading = {
    name: 'AsyncLoading',
    args: treeArgs,
    render: function Story(args: any) {
        const [treeData, setTreeData] = useState(initTreeData);
        const props = toTreeProps(args);

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

        return (
            <div style={{ width: '100%' }}>
                <Tree {...props} loadData={onLoadData} items={treeData} />
            </div>
        );
    },
};

export const TreeStories = [TreeDefault, TreeDragAndDrop, TreeAsyncLoading];
