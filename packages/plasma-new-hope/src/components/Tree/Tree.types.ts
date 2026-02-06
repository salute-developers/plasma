import type { Key, ReactNode, CSSProperties, HTMLAttributes } from 'react';

export type NodeDragEventParams = {
    event: React.DragEvent<HTMLDivElement>;
    node: EventDataNode;
};

interface AllowDropOptions {
    dragNode: TreeItem;
    dropNode: TreeItem;
    dropPosition: -1 | 0 | 1;
}

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

interface LoadInfo {
    event: 'load';
    node: EventDataNode;
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
    /**
     * Определяет, является ли элемент конечным узлом дерева.
     * Полезно для асинхронной подгрузки элементов.
     */
    isLeaf?: boolean;
};

export interface TreeProps
    extends Omit<
        HTMLAttributes<HTMLElement>,
        'onDragStart' | 'onDragEnter' | 'onDragOver' | 'onDragLeave' | 'onDragEnd' | 'onDrop'
    > {
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
     * Callback для кастомной настройки title.
     */
    renderTitle?: (item: TreeItem) => ReactNode;
    /**
     * Заголовок элемента в одну строку или с переносом строк.
     * @default true
     */
    singleLine?: boolean;
    /**
     * Режим работы взаимодействия с элементами.
     * - default: элемент можно выбрать и можно отменить его выбор.
     * - radio: если элемент выбран, то отменить его выбор нельзя. Только для single-режима.
     * @default default
     */
    mode?: 'default' | 'radio';
    /**
     * Включение режима Drag'n'Drop для элементов и групп в дереве;
     * @default false
     */
    draggable?: boolean;
    /**
     * Нативный обработчик onDragStart.
     */
    onDragStart?: (info: NodeDragEventParams) => void;
    /**
     * Нативный обработчик onDragEnter.
     */
    onDragEnter?: (
        info: NodeDragEventParams & {
            expandedKeys: Key[];
        },
    ) => void;
    /**
     * Нативный обработчик onDragOver.
     */
    onDragOver?: (info: NodeDragEventParams) => void;
    /**
     * Нативный обработчик onDragLeave.
     */
    onDragLeave?: (info: NodeDragEventParams) => void;
    /**
     * Нативный обработчик onDragEnd.
     */
    onDragEnd?: (info: NodeDragEventParams) => void;
    /**
     * Нативный обработчик onDrop.
     */
    onDrop?: (
        info: NodeDragEventParams & {
            dragNode: EventDataNode;
            dragNodesKeys: Key[];
            dropPosition: number;
            dropToGap: boolean;
        },
    ) => void;
    /**
     * Разрешать ли сброс draggable-элемента на текущем target-элементе.
     */
    allowDrop?: (options: AllowDropOptions) => boolean;
    /**
     * Функция для асинхронной подгрузки данных.
     */
    loadData?: (treeNode: EventDataNode) => Promise<any>;
    /**
     * Функция обратного вызова, вызываемая при загрузке элемента дерева.
     */
    onLoadData?: (loadedKeys: Key[], info: LoadInfo) => void;

    /**
     * Размер дерева.
     */
    size?: string;
    /**
     * Вид дерева.
     */
    view?: string;
    /**
     * Вариант: обычный или сжатый
     * @default normal
     */
    variant?: 'normal' | 'tight';
}
