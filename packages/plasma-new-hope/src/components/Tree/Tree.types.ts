import type { Key, ReactNode, CSSProperties } from 'react';

export type TreeItem = {
    key: Key;
    title?: ReactNode | ((data: TreeItem) => React.ReactNode);
    className?: string;
    style?: CSSProperties;
    disabled?: boolean;
};

export type EventDataNode<TreeDataType> = {
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
} & TreeDataType;

export type TreeProps = {
    items: TreeItem[];
    checkable?: boolean;
    multiple?: boolean;
    className?: string;
    defaultCheckedKeys?: Key[];
    defaultExpandedKeys?: Key[];
    defaultSelectedKeys?: Key[];
    defaultExpandAll?: boolean;
    onSelect?: (
        selectedKeys: Key[],
        info: {
            event: 'select';
            selected: boolean;
            node: EventDataNode<TreeItem>;
            selectedNodes: TreeItem[];
            nativeEvent: MouseEvent;
        },
    ) => void;
    onCheck?: any;
    onExpand?: any;
    arrowPlacement?: 'left' | 'right';
    virtual?: boolean;
    height?: number;
    fullWidthItemSelection?: boolean;
    size?: string;
    view?: string;
};
