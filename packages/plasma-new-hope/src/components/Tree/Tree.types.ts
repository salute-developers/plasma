import type { Key, ReactNode, CSSProperties } from 'react';

export type TreeItem = {
    key: Key;
    title?: ReactNode | ((data: TreeItem) => React.ReactNode);
    // checkable?: boolean;
    selectable?: boolean;
    className?: string;
    style?: CSSProperties;
    disabled?: boolean;
    // disableCheckbox?: boolean;
};

export type TreeProps = {
    items: TreeItem[];
    checkable?: boolean;
    checkStrictly?: boolean;
    className?: string;
    disabled?: boolean;
    defaultCheckedKeys?: Key[];
    defaultExpandedKeys?: Key[];
    defaultSelectedKeys?: Key[];
    defaultExpandAll?: boolean;
    onSelect?: Key[];
    onCheck?: Key[];
    onExpand?: Key[];
    expandedKeys?: Key[];
    checkedKeys?: Key[];
    selectedKeys?: Key[];
    inverted?: boolean;
    virtual?: boolean;
    height?: number;

    size?: string;
    view?: string;
};
