import React from 'react';
import { flexRender } from '@tanstack/react-table';

import { Resizer } from '../../Table.styles';
import { SELECT_COLUMN_ID } from '../../Table';

import { Td } from './Cell.styles';

export const Cell: React.FC<any> = ({ cell, variant }) => {
    return (
        <Td key={cell.id} variant={variant} selectionCell={cell.column.id === SELECT_COLUMN_ID}>
            {flexRender(cell.column.columnDef.cell, cell.getContext())}

            {cell.column.getIsResizing() && <Resizer isResizing />}
        </Td>
    );
};
