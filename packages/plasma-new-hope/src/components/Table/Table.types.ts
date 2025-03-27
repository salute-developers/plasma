import type { ReactNode, HTMLAttributes, CSSProperties } from 'react';
import { RowSelectionState } from '@tanstack/react-table';

type Column = {
    id: string;
    label: string;
    enableSorting?: boolean;
    enableResizing?: boolean;
    enableEditing?: boolean;
    filters?: { value: string; label: string }[];
    filterFn?: (filteredValue: string, cellValue: any) => boolean;
    size?: number;
    renderCell?: (value: any, row: any, rowIndex: number) => ReactNode;
};

export interface TableProps extends HTMLAttributes<HTMLDivElement> {
    data: any[];
    columns: Column[];
    onChange?: (e: any) => void;
    pagination?: boolean;
    editable?: boolean;
    size?: string;
    variant?: 'no-border' | 'border-rows' | 'border-header' | 'border-all' | 'border-all-bg';
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
    onCellUpdate?: (rowId: any, columnId: any, value: any) => void;
}
