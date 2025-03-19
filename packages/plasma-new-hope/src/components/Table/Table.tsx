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
} from '@tanstack/react-table';

import { RootProps } from '../../engines';

import { HeadCell } from './ui';
import { TableProps } from './Table.types';
import { base, Table, Tr, Th, Td, Thead, StyledCheckbox } from './Table.styles';

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
            sticky,
            // editable,
            size,
            variant,
            rowSelection,
            filtered: outerFiltered,
            sorted: outerSorted,
        }) => {
            const [internalSelectedRowKeys, setInternalSelectedRowKeys] = useState<React.Key[]>([]);

            const [innerFiltered, setInnerFiltered] = useState<ColumnFiltersState>([]);
            const [innerSorted, setInnerSorted] = useState<SortingState>([]);

            const filtered = outerFiltered || innerFiltered;
            const sorted: SortingState = outerSorted || innerSorted;

            const handleSorting: OnChangeFn<SortingState> = (updaterOrValue) => {
                if (!outerSorted) {
                    setInnerSorted(typeof updaterOrValue === 'function' ? updaterOrValue(innerSorted) : updaterOrValue);
                }

                if (onChange) {
                    onChange({
                        filtered,
                        sorted: typeof updaterOrValue === 'function' ? updaterOrValue(sorted) : updaterOrValue,
                    });
                }
            };

            const handleFiltering: OnChangeFn<ColumnFiltersState> = (updaterOrValue) => {
                if (!outerFiltered) {
                    setInnerFiltered(
                        typeof updaterOrValue === 'function' ? updaterOrValue(innerFiltered) : updaterOrValue,
                    );
                }

                if (onChange) {
                    onChange({
                        filtered: typeof updaterOrValue === 'function' ? updaterOrValue(filtered) : updaterOrValue,
                        sorted,
                    });
                }
            };

            const selectedRowKeys = rowSelection?.selectedRowKeys || internalSelectedRowKeys;

            const handleSelectedChange = (rowKey: React.Key) => {
                if (selectedRowKeys.some((key) => key === rowKey)) {
                    setInternalSelectedRowKeys(internalSelectedRowKeys.filter((key) => key !== rowKey));
                } else {
                    setInternalSelectedRowKeys([...internalSelectedRowKeys, rowKey]);
                }
            };

            const handleAllSelectedChange = () => {
                if (
                    selectedRowKeys.length === 0 ||
                    (selectedRowKeys.length > 0 && selectedRowKeys.length !== data.length)
                ) {
                    setInternalSelectedRowKeys(data.map(({ key }) => key));
                } else if (selectedRowKeys.length === data.length) {
                    setInternalSelectedRowKeys([]);
                }
            };

            const tableContainerRef = useRef<HTMLTableSectionElement>(null);

            const columnsData = useMemo<ColumnDef<any>[]>(
                () =>
                    columns.map(
                        ({
                            id,
                            // label,
                            filters,
                            enableSorting = false,
                            // enableResizing = false,
                            filterFn: outerFilterFn,
                        }) => {
                            return {
                                accessorKey: id,
                                // cell: ({ getValue, row: { index }, column: { id }, table }) => {
                                //     if (editable) {
                                //         // console.log('column cell', info);
                                //         // info.getValue()
                                //         const initialValue = getValue();
                                //         // We need to keep and update the state of the cell normally
                                //         // eslint-disable-next-line react-hooks/rules-of-hooks
                                //         const [value, setValue] = useState(initialValue);
                                //
                                //         // When the input is blurred, we'll call our table meta's updateData function
                                //         const onBlur = () => {
                                //             table.options.meta?.updateData(index, id, value);
                                //         };
                                //
                                //         // If the initialValue is changed external, sync it up with our state
                                //         // eslint-disable-next-line react-hooks/rules-of-hooks
                                //         useEffect(() => {
                                //             setValue(initialValue);
                                //         }, [initialValue]);
                                //
                                //         return (
                                //             <input
                                //                 value={value as string}
                                //                 onChange={(e) => setValue(e.target.value)}
                                //                 onBlur={onBlur}
                                //             />
                                //         );
                                //     }
                                //     return getValue();
                                // },
                                enableSorting,
                                filterFn: (row, columnId, filterArr) => {
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
                                // enableResizing,
                                meta: {
                                    filters,
                                },
                            };
                        },
                    ),
                [columns],
            );

            const table = useReactTable({
                data,
                columns: columnsData,
                getCoreRowModel: getCoreRowModel(),
                getSortedRowModel: getSortedRowModel(),
                manualSorting: Boolean(outerSorted),
                manualFiltering: Boolean(outerFiltered),
                state: {
                    columnFilters: filtered,
                    sorting: sorted,
                },
                onSortingChange: handleSorting,
                getFilteredRowModel: getFilteredRowModel(),
                onColumnFiltersChange: handleFiltering,
                // getPaginationRowModel: pagination ? getPaginationRowModel() : undefined,
                // columnResizeMode: 'onChange',
                // columnResizeDirection: 'ltr',
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
                <Root className="p-2" ref={tableContainerRef} data={data} columns={columns} size={size}>
                    <Table
                        {...{
                            style: {
                                display: 'table',
                                width: table.getCenterTotalSize(),
                            },
                        }}
                        variant={variant}
                    >
                        <Thead
                            style={
                                sticky
                                    ? {
                                          display: 'grid',
                                          position: 'sticky',
                                          top: 0,
                                          zIndex: 1,
                                      }
                                    : undefined
                            }
                        >
                            {table.getHeaderGroups().map((headerGroup) => (
                                <Tr key={headerGroup.id} variant={variant}>
                                    <Th variant={variant} selectionCell>
                                        <StyledCheckbox
                                            checked={selectedRowKeys.length === data.length}
                                            indeterminate={
                                                selectedRowKeys.length > 0 && selectedRowKeys.length !== data.length
                                            }
                                            onClick={handleAllSelectedChange}
                                        />
                                    </Th>

                                    {headerGroup.headers.map((header) => {
                                        return <HeadCell header={header} size={size} variant={variant} />;
                                    })}
                                </Tr>
                            ))}
                        </Thead>

                        <tbody>
                            {table.getRowModel().rows.map((row) => (
                                <Tr
                                    key={row.id}
                                    variant={variant}
                                    selected={selectedRowKeys.some((key) => key === row.original.key)}
                                >
                                    <Td variant={variant} selectionCell>
                                        <StyledCheckbox
                                            // Дооптимизировать через Set
                                            checked={selectedRowKeys.some((key) => key === row.original.key)}
                                            onClick={() => handleSelectedChange(row.original.key)}
                                        />
                                    </Td>

                                    {row.getVisibleCells().map((cell) => (
                                        <Td key={cell.id} variant={variant} selectionCell={false}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
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
