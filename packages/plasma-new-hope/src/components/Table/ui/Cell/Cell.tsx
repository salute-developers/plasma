import React from 'react';
import { flexRender, Cell as CellType } from '@tanstack/react-table';

import { Resizer } from '../../Table.styles';
import { SELECT_COLUMN_ID } from '../../Table';
import { TableProps, TableRowData } from '../../Table.types';

import { Td } from './Cell.styles';

export type CellProps = {
    cell: CellType<TableRowData, unknown>;
    variant: TableProps['variant'];
};

export const Cell: React.FC<CellProps> = ({ cell, variant }) => {
    const renderCell = cell.column.columnDef.meta?.renderCell;

    return (
        <Td key={cell.id} variant={variant} selectionCell={cell.column.id === SELECT_COLUMN_ID}>
            {renderCell
                ? renderCell(cell.getValue(), cell.row.original, cell.row.index)
                : flexRender(cell.column.columnDef.cell, cell.getContext())}

            {cell.column.getIsResizing() && <Resizer isResizing />}
        </Td>
    );
};
