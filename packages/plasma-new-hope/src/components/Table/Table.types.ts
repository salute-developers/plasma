import type { ReactNode, HTMLAttributes, CSSProperties } from 'react';
import { RowData, RowSelectionState } from '@tanstack/react-table';

declare module '@tanstack/react-table' {
    interface TableMeta<TData extends RowData> {
        updateData: (rowId: string, columnId: string, value: unknown) => void;
    }
    interface ColumnMeta<TData extends RowData, TValue> {
        filters?: TableColumnData['filters'];
        enableEditing?: boolean;
        renderCell?: TableColumnData['renderCell'];
    }
}

export type TableRowData = {
    id: string;
    [key: string]: string | number | object;
};

export type TableColumnData = {
    id: string;
    label: string;
    width?: number;
    enableSorting?: boolean;
    enableResizing?: boolean;
    enableEditing?: boolean;
    filters?: { value: string; label: string }[];
    filterFn?: (filteredValue: string, cellValue: unknown) => boolean;
    renderCell?: (value: unknown, row: TableRowData, rowIndex: number) => ReactNode;
};

export interface TableProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
    data: TableRowData[];
    columns: TableColumnData[];
    onChange?: (data: {
        selected: TableProps['selected'];
        filtered: TableProps['filtered'];
        sorted: TableProps['sorted'];
    }) => void;
    borderVariant?: 'rows' | 'header' | 'all';
    enableSelection?: boolean;
    selected?: RowSelectionState;
    filtered?: {
        id: string;
        value: unknown;
    }[];
    sorted?: {
        id: string;
        desc: boolean;
    }[];
    maxHeight?: CSSProperties['maxHeight'];
    stickyHeader?: boolean;
    onCellUpdate?: (rowIndex: string, columnId: string, value: unknown) => void;
    size?: string;
    view?: string;
}
