import React from 'react';
import type { HTMLAttributes, TdHTMLAttributes } from 'react';
import { flexRender, Cell as CellType } from '@tanstack/react-table';

import { Resizer } from '../../Table.styles';
import { SELECT_COLUMN_ID } from '../../utils';
import { TableProps, TableRowData } from '../../Table.types';

import { Td } from './Cell.styles';

type Props = {
    cell: CellType<TableRowData, unknown>;
    selected: boolean;
    borderVariant: TableProps['borderVariant'];
    view: TableProps['view'];
    additionalProps: HTMLAttributes<any> & TdHTMLAttributes<any>;
};

export const Cell: React.FC<Props> = ({ cell, borderVariant, selected, view, additionalProps }) => {
    const renderCell = cell.column.columnDef.meta?.renderCell;

    return (
        <Td
            key={cell.id}
            borderVariant={borderVariant}
            selectionCell={cell.column.id === SELECT_COLUMN_ID}
            selected={selected}
            view={view}
            {...additionalProps}
        >
            {renderCell
                ? renderCell(cell.getValue(), cell.row.original, cell.row.index)
                : flexRender(cell.column.columnDef.cell, cell.getContext())}

            {cell.column.getIsResizing() && <Resizer isResizing />}
        </Td>
    );
};
