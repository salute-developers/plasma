import React from 'react';
import { flexRender, Cell as CellType } from '@tanstack/react-table';

import { Resizer } from '../../Table.styles';
import { SELECT_COLUMN_ID } from '../../Table';
import { TableProps, TableRowData } from '../../Table.types';

import { Td } from './Cell.styles';

export type CellProps = {
    cell: CellType<TableRowData, unknown>;
    selected: boolean;
    borderVariant: TableProps['borderVariant'];
    view: TableProps['view'];
};

export const Cell: React.FC<CellProps> = ({ cell, borderVariant, selected, view }) => {
    const renderCell = cell.column.columnDef.meta?.renderCell;

    return (
        <Td
            key={cell.id}
            borderVariant={borderVariant}
            selectionCell={cell.column.id === SELECT_COLUMN_ID}
            selected={selected}
            view={view}
        >
            {renderCell
                ? renderCell(cell.getValue(), cell.row.original, cell.row.index)
                : flexRender(cell.column.columnDef.cell, cell.getContext())}

            {cell.column.getIsResizing() && <Resizer isResizing />}
        </Td>
    );
};
