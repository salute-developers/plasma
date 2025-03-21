import type { HTMLAttributes, CSSProperties } from 'react';
import { RowSelectionState } from '@tanstack/react-table';

type Column = {
    id: string;
    label: string;
    enableSorting?: boolean;
    enableResizing?: boolean;
    filters?: { value: string; label: string }[];
    filterFn?: (filteredValue: string, cellValue: any) => boolean;
    size?: number;
};

export interface TableProps extends HTMLAttributes<HTMLDivElement> {
    data: any[];
    columns: Column[];
    onChange?: (e: any) => void;
    pagination?: boolean;
    editable?: boolean;
    size?: string;
    variant?: 'no-border' | 'border-rows' | 'border-header' | 'border-all' | 'border-all-bg';
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
}
