import type { HTMLAttributes, CSSProperties } from 'react';

type RowSelection = {
    selectedRowKeys?: Record<string, any>[];
    onChange?: (e: any) => void;
};

type Column = {
    id: string;
    label: string;
    enableSorting: boolean;
    enableColumnFilter: boolean;

    filters: { value: string; label: string }[];
    onFilter: () => any;
};

export interface TableProps extends HTMLAttributes<HTMLDivElement> {
    data: any[];
    setData: (e: any) => void;
    columns: Column[];
    pagination?: boolean;
    virtual?: boolean;
    listHeight?: CSSProperties['height'];
    sticky?: boolean;
    editable?: boolean;

    size?: string;
    variant?: 'no-border' | 'border-rows' | 'border-header' | 'border-all' | 'border-all-bg';
    rowSelection?: RowSelection;
    filtered?: Record<string, string[]>;
}
