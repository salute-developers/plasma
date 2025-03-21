import React, { forwardRef, useState, useMemo, useRef } from 'react';
import {
    flexRender,
    getCoreRowModel,
    useReactTable,
    ColumnDef,
    getSortedRowModel,
    getFilteredRowModel,
    // getPaginationRowModel,
    OnChangeFn,
    ColumnFiltersState,
    RowSelectionState,
} from '@tanstack/react-table';

import { RootProps } from '../../engines';

import { HeadCell } from './ui';
import { TableProps } from './Table.types';
import { base, Table, Tr, Td, Thead, StyledCheckbox, Resizer } from './Table.styles';

export const SELECT_COLUMN_ID = 'select#65768756432';

type ColumnSort = {
    id: string;
    desc: boolean;
};
type SortingState = ColumnSort[];

export const tableRoot = (Root: RootProps<HTMLDivElement, any>) =>
    forwardRef<HTMLDivElement, TableProps>(
        ({
            data,
            onChange,
            columns,
            // pagination,
            // editable,
            size,
            variant,
            selected: outerSelected,
            filtered: outerFiltered,
            sorted: outerSorted,
            maxHeight,
            stickyHeader,
        }) => {
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

            const tableContainerRef = useRef<HTMLTableSectionElement>(null);

            const columnsData = useMemo<ColumnDef<any>[]>(
                () => [
                    {
                        id: SELECT_COLUMN_ID,
                        header: ({ table }) => (
                            <StyledCheckbox
                                checked={table.getIsAllRowsSelected()}
                                indeterminate={table.getIsSomeRowsSelected()}
                                onClick={table.getToggleAllRowsSelectedHandler()}
                            />
                        ),
                        cell: ({ row }) => (
                            <StyledCheckbox
                                checked={row.getIsSelected()}
                                indeterminate={row.getIsSomeSelected()}
                                onClick={row.getToggleSelectedHandler()}
                            />
                        ),
                        enableResizing: false,
                    },
                    ...columns.map(
                        ({
                            id,
                            // label,
                            filters,
                            enableSorting = false,
                            enableResizing = false,
                            filterFn: outerFilterFn,
                            size: columnSize,
                        }) => {
                            return {
                                accessorKey: id,
                                size: columnSize,
                                enableSorting,
                                enableResizing,
                                filterFn: (row: any, columnId: any, filterArr: any) => {
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
                                },
                            };
                        },
                    ),
                ],
                [columns],
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
                // getPaginationRowModel: pagination ? getPaginationRowModel() : undefined,
                columnResizeMode: 'onChange',
                columnResizeDirection: 'ltr',
                // meta: {
                //     updateData: (rowIndex, columnId, value) => {
                //         // Skip page index reset until after next rerender
                //         // skipAutoResetPageIndex();
                //         onChange((old) =>
                //             old.map((row, index) => {
                //                 if (index === rowIndex) {
                //                     return {
                //                         ...old[rowIndex]!,
                //                         [columnId]: value,
                //                     };
                //                 }
                //                 return row;
                //             }),
                //         );
                //     },
                // },
            });

            return (
                <Root
                    className="p-2"
                    ref={tableContainerRef}
                    data={data}
                    columns={columns}
                    size={size}
                    style={{ maxHeight: maxHeight || 'none' }}
                >
                    <Table variant={variant} stickyHeader={stickyHeader}>
                        <Thead stickyHeader={stickyHeader}>
                            {table.getHeaderGroups().map((headerGroup) => (
                                <Tr key={headerGroup.id} variant={variant}>
                                    {headerGroup.headers.map((header) => {
                                        return <HeadCell header={header} size={size} variant={variant} />;
                                    })}
                                </Tr>
                            ))}
                        </Thead>

                        <tbody>
                            {table.getRowModel().rows.map((row) => (
                                <Tr key={row.id} variant={variant} selected={row.getIsSelected()}>
                                    {row.getVisibleCells().map((cell) => (
                                        <Td
                                            key={cell.id}
                                            variant={variant}
                                            selectionCell={cell.column.id === SELECT_COLUMN_ID}
                                        >
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}

                                            {cell.column.getIsResizing() && <Resizer isResizing />}
                                        </Td>
                                    ))}
                                </Tr>
                            ))}
                        </tbody>
                    </Table>

                    {/* {pagination && ( */}
                    {/*     <> */}
                    {/*         <div className="flex items-center gap-2"> */}
                    {/*             <button */}
                    {/*                 className="border rounded p-1" */}
                    {/*                 onClick={() => table.firstPage()} */}
                    {/*                 disabled={!table.getCanPreviousPage()} */}
                    {/*             > */}
                    {/*                 {'<<'} */}
                    {/*             </button> */}
                    {/*             <button */}
                    {/*                 className="border rounded p-1" */}
                    {/*                 onClick={() => table.previousPage()} */}
                    {/*                 disabled={!table.getCanPreviousPage()} */}
                    {/*             > */}
                    {/*                 {'<'} */}
                    {/*             </button> */}
                    {/*             <button */}
                    {/*                 className="border rounded p-1" */}
                    {/*                 onClick={() => table.nextPage()} */}
                    {/*                 disabled={!table.getCanNextPage()} */}
                    {/*             > */}
                    {/*                 {'>'} */}
                    {/*             </button> */}
                    {/*             <button */}
                    {/*                 className="border rounded p-1" */}
                    {/*                 onClick={() => table.lastPage()} */}
                    {/*                 disabled={!table.getCanNextPage()} */}
                    {/*             > */}
                    {/*                 {'>>'} */}
                    {/*             </button> */}
                    {/*             <span className="flex items-center gap-1"> */}
                    {/*                 <div>Page</div> */}
                    {/*                 <strong> */}
                    {/*                     {table.getState().pagination.pageIndex + 1} of{' '} */}
                    {/*                     {table.getPageCount().toLocaleString()} */}
                    {/*                 </strong> */}
                    {/*             </span> */}
                    {/*             <span className="flex items-center gap-1"> */}
                    {/*                 | Go to page: */}
                    {/*                 <input */}
                    {/*                     type="number" */}
                    {/*                     min="1" */}
                    {/*                     max={table.getPageCount()} */}
                    {/*                     defaultValue={table.getState().pagination.pageIndex + 1} */}
                    {/*                     onChange={(e) => { */}
                    {/*                         const page = e.target.value ? Number(e.target.value) - 1 : 0; */}
                    {/*                         table.setPageIndex(page); */}
                    {/*                     }} */}
                    {/*                     className="border p-1 rounded w-16" */}
                    {/*                 /> */}
                    {/*             </span> */}
                    {/*             <select */}
                    {/*                 value={table.getState().pagination.pageSize} */}
                    {/*                 onChange={(e) => { */}
                    {/*                     table.setPageSize(Number(e.target.value)); */}
                    {/*                 }} */}
                    {/*             > */}
                    {/*                 {[10, 20, 30, 40, 50].map((pageSize) => ( */}
                    {/*                     <option key={pageSize} value={pageSize}> */}
                    {/*                         Show {pageSize} */}
                    {/*                     </option> */}
                    {/*                 ))} */}
                    {/*             </select> */}
                    {/*         </div> */}
                    {/*         <div> */}
                    {/*             Showing {table.getRowModel().rows.length.toLocaleString()} of{' '} */}
                    {/*             {table.getRowCount().toLocaleString()} Rows */}
                    {/*         </div> */}
                    {/*         <pre>{JSON.stringify(table.getState().pagination, null, 2)}</pre> */}
                    {/*     </> */}
                    {/* )} */}
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
        size: 'm',
    },
};
