import type { Key } from 'react';
import cls from 'classnames/dedupe';

import { classes } from '../Tree.tokens';
import type { TreeItem } from '../Tree.types';

// Blazing-fast хелпер для глубокого копирования объектов.
// Ссылки на функции (React-компоненты) сохраняются.
const deepCopy = <T>(obj: T): T => {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    if (Array.isArray(obj)) {
        return (obj.map((item) => deepCopy(item)) as unknown) as T;
    }

    if ((obj as any).type && (typeof (obj as any).type === 'function' || typeof (obj as any).type === 'string')) {
        return obj;
    }

    return Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, deepCopy(value)])) as T;
};

// Поиск в глубину для обхода узлов дерева.
const dfs = (node: TreeItem, selectedKeys: Set<Key>, parents: TreeItem[], isParentSelected?: boolean): TreeItem => {
    const selected = selectedKeys.has(node.key);

    if (node.children) {
        node.children = node.children.map((childNode) =>
            dfs(childNode, selectedKeys, [...parents, node], selected || isParentSelected),
        );
    }

    if (isParentSelected) {
        node.className = cls(node.className, classes.closestParentHasSelectedChildren);
    }

    if (selected && parents.length > 0) {
        parents.forEach((parent) => {
            parent.className = cls(parent.className, classes.parentHasSelectedChildren);
        });

        parents
            .filter((parent) => parent.key !== 'root')
            .at(-1)
            ?.children?.forEach((childNode) => {
                childNode.className = cls(childNode.className, classes.closestParentHasSelectedChildren);
            });
    }

    return node;
};

// Перебираем и клонируем элементы в дереве, а также добавляем к ним класснеймы.
export const traverseTree = (items: TreeItem[], selectedKeys?: Key[]): TreeItem[] => {
    if (!selectedKeys || selectedKeys.length === 0) {
        return items;
    }

    const copyItems = deepCopy(items);

    return dfs({ key: 'root', children: copyItems }, new Set(selectedKeys), []).children!;
};
