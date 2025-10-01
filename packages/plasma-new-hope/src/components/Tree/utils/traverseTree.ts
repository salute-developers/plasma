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

    if (
        (obj as any).$$typeof === Symbol.for('react.element') ||
        (obj as any).$$typeof === Symbol.for('react.fragment') ||
        typeof (obj as any)?.$$typeof === 'symbol'
    ) {
        return obj;
    }

    return Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, deepCopy(value)])) as T;
};

// Поиск в глубину для обхода узлов дерева.
const dfs = (node: TreeItem, selectedKeys: Set<Key>, rootParentsSelected: Set<Key>, parents: TreeItem[]): void => {
    if (selectedKeys.has(node.key)) {
        parents.forEach((parent) => {
            parent.className = cls(parent.className, classes.treeItemHasSelectedChildren);
        });
    }

    node.children?.forEach((childNode) => dfs(childNode, selectedKeys, rootParentsSelected, [...parents, node]));

    if (rootParentsSelected.has(parents.filter((parent) => parent.key !== 'root')[0]?.key)) {
        node.className = cls(node.className, classes.treeItemPrimaryBackground);
    }

    if (!node.children) {
        node.className = cls(node.className, classes.treeLeafNode);
    }
};

const getRootParentsSelectedChildren = (node: TreeItem, selectedKeysSet: Set<Key>) => {
    const rootParentsSelected = new Set<Key>();

    const dfs = (node: TreeItem, currentRootParentKey: Key) => {
        if (rootParentsSelected.has(currentRootParentKey)) {
            return;
        }

        if (selectedKeysSet.has(node.key)) {
            rootParentsSelected.add(currentRootParentKey);
        }

        if (node.children) {
            node.children.forEach((childNode) => {
                dfs(childNode, currentRootParentKey);
            });
        }
    };

    if (node.children) {
        node.children.forEach((rootNode) => {
            dfs(rootNode, rootNode.key);
        });
    }

    return rootParentsSelected;
};

// Перебираем и клонируем элементы в дереве, а также добавляем к ним класснеймы.
export const traverseTree = (items: TreeItem[], selectedKeys?: Key[]): TreeItem[] => {
    const selectedKeysSet = new Set(selectedKeys);

    const copyItems = deepCopy(items);

    const rootParentsSelected = getRootParentsSelectedChildren({ key: 'root', children: copyItems }, selectedKeysSet);

    copyItems.forEach((item) => {
        dfs(item, selectedKeysSet, rootParentsSelected, [item]);
    });

    return copyItems;
};
