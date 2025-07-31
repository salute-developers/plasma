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

export interface SelectInfo {
    event: 'select';
    selected: boolean;
    node: EventDataNode;
    selectedNodes: TreeItem[];
    nativeEvent: MouseEvent;
}

interface ExpandInfo {
    node: EventDataNode;
    expanded: boolean;
    nativeEvent: MouseEvent;
}

export type TreeItem = {
    /**
     * Уникальный идентификатор элемента.
     */
    key: Key;
    /**
     * Заголовок элемента.
     */
    title?: ReactNode | ((data: TreeItem) => ReactNode);
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
    icon?: ReactNode;
    /**
     * Дочерние items.
     */
    children?: TreeItem[];
    /**
     * Контент справа.
     */
    contentRight?: ReactNode;
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
     * Выделенные элементы в controlled-варианте.
     */
    checkedKeys?: Key[];
    /**
     * Выделенные элементы по умолчанию.
     * Работает только при uncontrolled-варианте.
     */
    defaultCheckedKeys?: Key[];
    /**
     * Раскрытые элементы в controlled-варианте.
     */
    expandedKeys?: Key[];
    /**
     * Раскрытые элементы по умолчанию.
     */
    defaultExpandedKeys?: Key[];
    /**
     * Выбранные элементы в controlled-варианте.
     */
    selectedKeys?: Key[];
    /**
     * Выбранные элементы по умолчанию.
     * Работает только при uncontrolled-варианте.
     */
    defaultSelectedKeys?: Key[];
    /**
     * Флаг раскрытия всех элементов по умолчанию.
     * Работает только при uncontrolled-варианте.
     * @default false
     */
    defaultExpandAll?: boolean;
    /**
     * Открывать ли автоматически вышестоящие уровни определенного элемента.
     * Если есть необходимость открывать нужный уровень без проброса всей иерархии.
     * @default false
     */
    autoExpandParent?: boolean;
    /**
     * Callback при выборе элемента.
     */
    onTreeSelect?: (selectedKeys: Key[], info: SelectInfo) => void;
    /**
     * Callback при выделении элемента.
     */
    onTreeCheck?: (checked: Key[], info: CheckInfo) => void;
    /**
     * Callback при раскрытии элемента.
     */
    onTreeExpand?: (expandedKeys: Key[], info: ExpandInfo) => void;
    /**
     * Сторона иконки раскрытия элемента.
     * @default left
     */
    arrowPlacement?: 'left' | 'right';
    /**
     * Флаг включения виртуализации в дерево со скроллом.
     * @default true
     */
    virtual?: boolean;
    /**
     * Высота дерева.
     */
    height?: number;
    /**
     * Высота item. Обязательное поле для включения виртуализации.
     */
    itemHeight?: number;
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
    icon?: ReactNode;
    /**
     * Размер дерева.
     */
    size?: string;
    /**
     * Вид дерева.
     */
    view?: string;
    /**
     * Callback для кастомной настройки title.
     */
    renderTitle?: (item: TreeItem) => ReactNode;
}
