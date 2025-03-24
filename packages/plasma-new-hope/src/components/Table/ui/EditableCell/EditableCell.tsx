import React, { useState } from 'react';
import { flexRender } from '@tanstack/react-table';

import { Resizer } from '../../Table.styles';
import { SELECT_COLUMN_ID } from '../../Table';
import { useOutsideClick } from '../../../../hooks';
import { IconEditOutline } from '../../../_Icon';
import { Td } from '../Cell/Cell.styles';

import { ContentWrapper } from './EditableCell.styles';

export const EditableCell: React.FC<any> = ({ cell, variant, table }) => {
    const [value, setValue] = useState<string>(cell.getValue());
    const [editingMode, setEditingMode] = useState(false);

    const { updateData } = table.options.meta;

    const ref = useOutsideClick<HTMLInputElement>(() => {
        setEditingMode(false);

        updateData(cell.row.id, cell.column.id, value);
    });

    const handleEditClick = (e: React.MouseEvent<HTMLSpanElement>) => {
        e.stopPropagation();

        setEditingMode(true);
    };

    return (
        <Td key={cell.id} variant={variant} selectionCell={cell.column.id === SELECT_COLUMN_ID}>
            {cell?.column?.columnDef?.meta?.enableEditing ? (
                <>
                    {editingMode ? (
                        // eslint-disable-next-line jsx-a11y/no-autofocus
                        <input value={value} onChange={(e) => setValue(e.target.value)} ref={ref} autoFocus />
                    ) : (
                        <ContentWrapper onClick={handleEditClick}>
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}

                            <IconEditOutline size="s" className="editIcon" />
                        </ContentWrapper>
                    )}
                </>
            ) : (
                flexRender(cell.column.columnDef.cell, cell.getContext())
            )}

            {cell.column.getIsResizing() && <Resizer isResizing />}
        </Td>
    );
};
