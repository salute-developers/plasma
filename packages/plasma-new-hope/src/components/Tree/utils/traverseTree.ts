import type { Key } from 'react';
import cls from 'classnames/dedupe';

import { deepCopy } from '../utils';
import { classes } from '../Tree.tokens';
import type { TreeItem } from '../Tree.types';

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
