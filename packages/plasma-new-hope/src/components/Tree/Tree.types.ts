import type { Key, ReactNode, CSSProperties, HTMLAttributes } from 'react';

type EventDataNode = {
    key: Key;
    expanded: boolean;
    selected: boolean;
    checked: boolean;
    loaded: boolean;
    loading: boolean;
    halfChecked: boolean;
    dragOver: boolean;
    dragOverGapTop: boolean;
    dragOverGapBottom: boolean;
    pos: string;
    active: boolean;
} & TreeItem;

interface CheckInfo {
    event: 'check';
    node: EventDataNode;
    checked: boolean;
    nativeEvent: MouseEvent;
    checkedNodes: TreeItem[];
    checkedNodesPositions?: { node: TreeItem; pos: string }[];
    halfCheckedKeys?: Key[];
}

type TreeItem = {
    /**
     * Уникальный идентификатор элемента.
     */
    key: Key;
    /**
     * Заголовок элемента.
     */
    title?: ReactNode | ((data: TreeItem) => React.ReactNode);
    /**
     * Classname для текущего элемента.
     */
    className?: string;
    /**
     * Стиль для текущего элемента.
     */
    style?: CSSProperties;
    /**
     * Флаг выключения элемента.
     * @default false
     */
    disabled?: boolean;
    /**
     * Иконка для текущего элемента.
     */
    icon?: React.ReactNode;
};

export interface TreeProps extends HTMLAttributes<HTMLElement> {
    /**
     * Список элементов.
     */
    items: TreeItem[];
    /**
     * Флаг включения чекбоксов в элементах.
     * @default false
     */
    checkable?: boolean;
    /**
     * Флаг множественного выбора.
     * @default false
     */
    multiple?: boolean;
    /**
     * Classname для дерева.
     */
    className?: string;
    /**
     * Выделенные элементы по умолчанию.
     */
    defaultCheckedKeys?: Key[];
    /**
     * Раскрытые элементы по умолчанию.
     */
    defaultExpandedKeys?: Key[];
    /**
     * Выбранные элементы по умолчанию.
     */
    defaultSelectedKeys?: Key[];
    /**
     * Флаг раскрытия всех элементов по умолчанию.
     * @default false
     */
    defaultExpandAll?: boolean;
    /**
     * Callback при выборе элемента.
     */
    onTreeSelect?: (
        selectedKeys: Key[],
        info: {
            event: 'select';
            selected: boolean;
            node: EventDataNode;
            selectedNodes: TreeItem[];
            nativeEvent: MouseEvent;
        },
    ) => void;
    /**
     * Callback при выделении элемента.
     */
    onTreeCheck?: (checked: { checked: Key[]; halfChecked: Key[] } | Key[], info: CheckInfo) => void;
    /**
     * Callback при раскрытии элемента.
     */
    onTreeExpand?: (
        expandedKeys: Key[],
        info: {
            node: EventDataNode;
            expanded: boolean;
            nativeEvent: MouseEvent;
        },
    ) => void;
    /**
     * Сторона иконки раскрытия элемента.
     * @default left
     */
    arrowPlacement?: 'left' | 'right';
    /**
     * Флаг включения виртуализации в дерево со скроллом.
     * @default false
     */
    virtual?: boolean;
    /**
     * Высота дерева.
     */
    height?: number;
    /**
     * Флаг включения стиля на всю ширину для выбранного элемента.
     * @default false
     */
    fullWidthItemSelection?: boolean;
    /**
     * Флаг включения/отключения иконки у элемента.
     * @default false
     */
    hasIcon?: boolean;
    /**
     * Общая иконка для всего дерева.
     */
    icon?: React.ReactNode;
    /**
     * Размер дерева.
     */
    size?: string;
    /**
     * Вид дерева.
     */
    view?: string;
}
