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
    Table as TableType,
    Row,
} from '@tanstack/react-table';
import { useForkRef } from '@salutejs/plasma-core';
import { RootProps } from 'src/engines';

import { SELECT_COLUMN_ID } from './utils';
import { HeadCell, Cell, EditableCell } from './ui';
import { TableProps, TableRowData } from './Table.types';
import { base, Table, Tr, Thead, StyledCheckbox, Tbody } from './Table.styles';

type ColumnSort = {
    id: string;
    desc: boolean;
};
type SortingState = ColumnSort[];

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
                enableSelection = false,
                selected: outerSelected,
                filtered: outerFiltered,
                sorted: outerSorted,
                maxHeight,
                stickyHeader = false,
                onCellUpdate,
                setRowProps,
                ...props
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
                                          // eslint-disable-next-line no-underscore-dangle
                                          appearance={(props as any)._checkboxAppearance ?? 'default'}
                                      />
                                  ),
                                  cell: ({ row }: { row: Row<typeof data[number]> }) => (
                                      <StyledCheckbox
                                          checked={row.getIsSelected()}
                                          indeterminate={row.getIsSomeSelected()}
                                          onChange={row.getToggleSelectedHandler()}
                                          // eslint-disable-next-line no-underscore-dangle
                                          appearance={(props as any)._checkboxAppearance ?? 'default'}
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
                            setCellProps,
                        }) => ({
                            header: label,
                            accessorKey: id,
                            size: columnSize,
                            enableSorting,
                            enableResizing,
                            filterFn: (row: Row<TableRowData>, columnId: string, filterArr: string[]) => {
                                if (filterArr?.length !== 0 && outerFilterFn && filterArr && Array.isArray(filterArr)) {
                                    return filterArr.some((filterValue) =>
                                        outerFilterFn(filterValue, row.getValue(columnId)),
                                    );
                                }

                                return true;
                            },
                            meta: {
                                filters,
                                enableEditing,
                                renderCell,
                                setCellProps,
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
                    {...props}
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

                        <Tbody>
                            {table.getRowModel().rows.map((row) => (
                                <Tr key={row.id} selected={row.getIsSelected()} {...setRowProps?.(row.original)}>
                                    {row.getVisibleCells().map((cell) => {
                                        const additionalProps =
                                            cell?.column?.columnDef?.meta?.setCellProps?.(cell.row.original, cell.id) ||
                                            {};

                                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                        // @ts-ignore
                                        return cell?.column?.columnDef?.meta?.enableEditing ? (
                                            <EditableCell
                                                key={cell.id}
                                                size={size}
                                                cell={cell}
                                                borderVariant={borderVariant}
                                                table={table}
                                                selected={row.getIsSelected()}
                                                view={view}
                                                additionalProps={additionalProps}
                                            />
                                        ) : (
                                            <Cell
                                                key={cell.id}
                                                cell={cell}
                                                borderVariant={borderVariant}
                                                selected={row.getIsSelected()}
                                                view={view}
                                                additionalProps={additionalProps}
                                            />
                                        );
                                    })}
                                </Tr>
                            ))}
                        </Tbody>
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
