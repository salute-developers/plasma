import React, { useState } from 'react';

import { getTreeData } from './fixtures';

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
