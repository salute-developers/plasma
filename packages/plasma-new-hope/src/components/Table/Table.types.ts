import type { HTMLAttributes } from 'react';

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
    filterFn: any;
};

export interface TableProps extends HTMLAttributes<HTMLDivElement> {
    data: any[];
    columns: Column[];
    onChange?: (e: any) => void;
    pagination?: boolean;
    sticky?: boolean;
    editable?: boolean;

    size?: string;
    variant?: 'no-border' | 'border-rows' | 'border-header' | 'border-all' | 'border-all-bg';
    rowSelection?: RowSelection;
    filtered?: {
        id: string;
        value: unknown;
    }[];
    sorted?: {
        id: string;
        desc: boolean;
    }[];
}
