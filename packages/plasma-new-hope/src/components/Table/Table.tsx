import React, { forwardRef, useState, useMemo, useRef } from 'react';
import {
    getCoreRowModel,
    useReactTable,
    ColumnDef,
    getSortedRowModel,
    getFilteredRowModel,
    OnChangeFn,
    ColumnFiltersState,
    RowSelectionState,
    RowData,
    Table as TableType,
    Row,
} from '@tanstack/react-table';
import { useForkRef } from '@salutejs/plasma-core';

import { RootProps } from '../../engines';

import { HeadCell, Cell, EditableCell } from './ui';
import { TableProps, TableColumnData } from './Table.types';
import { base, Table, Tr, Thead, StyledCheckbox } from './Table.styles';

export const SELECT_COLUMN_ID = 'select#65768756432';

type ColumnSort = {
    id: string;
    desc: boolean;
};
type SortingState = ColumnSort[];

declare module '@tanstack/react-table' {
    interface ColumnMeta<TData extends RowData, TValue> {
        filters?: TableColumnData['filters'];
        enableEditing?: boolean;
        renderCell?: TableColumnData['renderCell'];
    }
}
declare module '@tanstack/react-table' {
    interface TableMeta<TData extends RowData> {
        updateData: (rowId: string, columnId: string, value: unknown) => void;
    }
}

export const tableRoot = (Root: RootProps<HTMLDivElement, TableProps>) =>
    forwardRef<HTMLDivElement, TableProps>(
        (
            {
                data,
                onChange,
                columns,
                view,
                size,
                borderVariant = 'all',
                enableSelection,
                selected: outerSelected,
                filtered: outerFiltered,
                sorted: outerSorted,
                maxHeight,
                stickyHeader,
                onCellUpdate,
            },
            ref,
        ) => {
            const [innerSelected, innerSetSelected] = useState<RowSelectionState>(outerSelected || {});
            const [innerFiltered, setInnerFiltered] = useState<ColumnFiltersState>(outerFiltered || []);
            const [innerSorted, setInnerSorted] = useState<SortingState>(outerSorted || []);

            const selected = outerSelected || innerSelected;
            const filtered = outerFiltered || innerFiltered;
            const sorted: SortingState = outerSorted || innerSorted;

            const handleRowSelection: OnChangeFn<RowSelectionState> = (updaterOrValue) => {
                if (!outerSelected) {
                    innerSetSelected(updaterOrValue);
                }

                if (onChange) {
                    onChange({
                        selected: typeof updaterOrValue === 'function' ? updaterOrValue(selected) : updaterOrValue,
                        filtered,
                        sorted,
                    });
                }
            };

            const handleSorting: OnChangeFn<SortingState> = (updaterOrValue) => {
                if (!outerSorted) {
                    setInnerSorted(updaterOrValue);
                }

                if (onChange) {
                    onChange({
                        selected,
                        filtered,
                        sorted: typeof updaterOrValue === 'function' ? updaterOrValue(sorted) : updaterOrValue,
                    });
                }
            };

            const handleFiltering: OnChangeFn<ColumnFiltersState> = (updaterOrValue) => {
                if (!outerFiltered) {
                    setInnerFiltered(updaterOrValue);
                }

                if (onChange) {
                    onChange({
                        selected,
                        filtered: typeof updaterOrValue === 'function' ? updaterOrValue(filtered) : updaterOrValue,
                        sorted,
                    });
                }
            };

            const tableContainerRef = useRef<HTMLDivElement>(null);

            const rootRef = useForkRef(tableContainerRef, ref);

            const columnsData = useMemo<ColumnDef<typeof data[number]>[]>(
                () => [
                    ...(enableSelection
                        ? [
                              {
                                  id: SELECT_COLUMN_ID,
                                  header: ({ table }: { table: TableType<typeof data[number]> }) => (
                                      <StyledCheckbox
                                          checked={table.getIsSomeRowsSelected() || table.getIsAllRowsSelected()}
                                          indeterminate={table.getIsSomeRowsSelected()}
                                          onChange={table.getToggleAllRowsSelectedHandler()}
                                      />
                                  ),
                                  cell: ({ row }: { row: Row<typeof data[number]> }) => (
                                      <StyledCheckbox
                                          checked={row.getIsSelected()}
                                          indeterminate={row.getIsSomeSelected()}
                                          onChange={row.getToggleSelectedHandler()}
                                      />
                                  ),
                                  enableResizing: false,
                              },
                          ]
                        : []),
                    ...columns.map(
                        ({
                            id,
                            label,
                            filters,
                            enableSorting = false,
                            enableResizing = false,
                            filterFn: outerFilterFn,
                            width: columnSize,
                            enableEditing = false,
                            renderCell,
                        }) => ({
                            header: label,
                            accessorKey: id,
                            size: columnSize,
                            enableSorting,
                            enableResizing,
                            filterFn: (row: Row<typeof data[number]>, columnId: string, filterArr: any) => {
                                if (outerFilterFn && filterArr && Array.isArray(filterArr)) {
                                    if (filterArr.length === 0) {
                                        return true;
                                    }

                                    for (let i = 0; i < filterArr.length; i++) {
                                        const filterValue = filterArr[i];

                                        if (outerFilterFn(filterValue, row.getValue(columnId))) {
                                            return true;
                                        }
                                    }

                                    return false;
                                }

                                return true;
                            },
                            meta: {
                                filters,
                                enableEditing,
                                renderCell,
                            },
                        }),
                    ),
                ],
                [enableSelection, columns],
            );

            const table = useReactTable({
                data,
                columns: columnsData,
                getRowId: (row) => row.id,
                getCoreRowModel: getCoreRowModel(),
                getSortedRowModel: getSortedRowModel(),
                manualSorting: Boolean(outerSorted),
                manualFiltering: Boolean(outerFiltered),
                state: {
                    rowSelection: selected,
                    columnFilters: filtered,
                    sorting: sorted,
                },
                onSortingChange: handleSorting,
                getFilteredRowModel: getFilteredRowModel(),
                onColumnFiltersChange: handleFiltering,
                onRowSelectionChange: handleRowSelection,
                columnResizeMode: 'onChange',
                columnResizeDirection: 'ltr',
                meta: {
                    updateData: (rowId, columnId, value) => {
                        if (onCellUpdate) {
                            onCellUpdate(rowId, columnId, value);
                        }
                    },
                },
            });

            return (
                <Root
                    ref={rootRef}
                    data={data}
                    columns={columns}
                    view={view}
                    size={size}
                    style={{ maxHeight: maxHeight || 'none' }}
                >
                    <Table borderVariant={borderVariant} stickyHeader={stickyHeader}>
                        <Thead view={view} borderVariant={borderVariant} stickyHeader={stickyHeader}>
                            {table.getHeaderGroups().map((headerGroup) => (
                                <Tr key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => (
                                        <HeadCell
                                            key={header.index}
                                            header={header}
                                            size={size}
                                            borderVariant={borderVariant}
                                            outerFiltered={outerFiltered}
                                            tableContainerRef={tableContainerRef}
                                        />
                                    ))}
                                </Tr>
                            ))}
                        </Thead>

                        <tbody>
                            {table.getRowModel().rows.map((row) => (
                                <Tr key={row.id} selected={row.getIsSelected()}>
                                    {row.getVisibleCells().map((cell) =>
                                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                        // @ts-ignore
                                        cell?.column?.columnDef?.meta?.enableEditing ? (
                                            <EditableCell
                                                key={cell.id}
                                                size={size}
                                                cell={cell}
                                                borderVariant={borderVariant}
                                                table={table}
                                                selected={row.getIsSelected()}
                                                view={view}
                                            />
                                        ) : (
                                            <Cell
                                                key={cell.id}
                                                cell={cell}
                                                borderVariant={borderVariant}
                                                selected={row.getIsSelected()}
                                                view={view}
                                            />
                                        ),
                                    )}
                                </Tr>
                            ))}
                        </tbody>
                    </Table>
                </Root>
            );
        },
    );

export const tableConfig = {
    name: 'Table',
    tag: 'div',
    layout: tableRoot,
    base,
    variations: {},
    defaults: {
        view: 'default',
        size: 'm',
    },
};
