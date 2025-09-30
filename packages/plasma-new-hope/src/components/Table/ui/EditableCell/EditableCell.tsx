import React, { useState, useRef } from 'react';
import { flexRender, Table, Cell as CellType } from '@tanstack/react-table';
import { useOutsideClick } from 'src/hooks';

import { Resizer } from '../../Table.styles';
import { SELECT_COLUMN_ID } from '../../Table';
import { IconEditOutline, IconResetOutline, IconDoneCircleOutline } from '../../../_Icon';
import { getIconSize } from '../HeadCell/HeadCell';
import { classes } from '../../Table.tokens';
import { TableProps, TableRowData } from '../../Table.types';

import {
    ContentWrapper,
    Td,
    IconDoneButton,
    Input,
    InnerWrapper,
    InputWrapper,
    EditModeWrapper,
    IconResetButton,
} from './EditableCell.styles';

const keys = {
    Enter: 'Enter',
    Tab: 'Tab',
    Escape: 'Escape',
};

type Props = {
    size: TableProps['size'];
    view: TableProps['view'];
    cell: CellType<TableRowData, unknown>;
    borderVariant: TableProps['borderVariant'];
    selected: boolean;
    table: Table<TableRowData>;
};

export const EditableCell: React.FC<Props> = ({ size, view, cell, borderVariant, table, selected }) => {
    const [value, setValue] = useState<string>(cell.getValue() as string);
    const [editingMode, setEditingMode] = useState(false);

    const updateData = table.options.meta?.updateData;

    const ref = useRef<HTMLTableCellElement>(null);

    useOutsideClick(() => {
        setEditingMode(false);
    }, [ref]);

    const handleEditClick = (e: React.MouseEvent<HTMLSpanElement>) => {
        e.stopPropagation();

        setEditingMode(true);
        setValue(cell.getValue() as string);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

    const handleReset = () => {
        setValue(cell.getValue() as string);
    };

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();

        if (updateData) {
            updateData(cell.row.id, cell.column.id, value);
        }
        setEditingMode(false);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        switch (event.code) {
            case keys.Enter: {
                if (updateData) {
                    updateData(cell.row.id, cell.column.id, value);
                }

                setEditingMode(false);

                break;
            }

            case keys.Escape:
            case keys.Tab: {
                setEditingMode(false);

                break;
            }

            default: {
                break;
            }
        }
    };

    return (
        <Td
            key={cell.id}
            borderVariant={borderVariant}
            selectionCell={cell.column.id === SELECT_COLUMN_ID}
            onClick={handleEditClick}
            editingMode={editingMode}
            selected={selected}
            view={view}
            ref={ref}
        >
            <InnerWrapper>
                {editingMode ? (
                    <EditModeWrapper>
                        <InputWrapper>
                            {/* eslint-disable-next-line jsx-a11y/no-autofocus */}
                            <Input value={value} onChange={handleChange} autoFocus onKeyDown={handleKeyDown} />

                            <IconResetButton onClick={handleReset} tabIndex={-1}>
                                <IconResetOutline size={getIconSize(size)} />
                            </IconResetButton>
                        </InputWrapper>

                        <IconDoneButton onClick={handleSubmit} tabIndex={-1}>
                            <IconDoneCircleOutline size={getIconSize(size)} />
                        </IconDoneButton>
                    </EditModeWrapper>
                ) : (
                    <ContentWrapper>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}

                        <IconEditOutline size="xs" className={classes.editIcon} color="var(--text-secondary)" />
                    </ContentWrapper>
                )}
            </InnerWrapper>

            {cell.column.getIsResizing() && <Resizer isResizing />}
        </Td>
    );
};
