import React, { forwardRef, useState, useEffect, useMemo, useRef } from 'react';
import {
    Row,
    flexRender,
    getCoreRowModel,
    useReactTable,
    ColumnDef,
    getSortedRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
} from '@tanstack/react-table';
import { useVirtualizer } from '@tanstack/react-virtual';

import { RootProps } from '../../engines';

import { HeadCell } from './ui';
import { TableProps } from './Table.types';
import { base, Table, Tr, Th, Td, Thead, StyledCheckbox } from './Table.styles';

export const tableRoot = (Root: RootProps<HTMLDivElement, any>) =>
    forwardRef<HTMLDivElement, TableProps>(
        (
            {
                data,
                onChange,
                columns,
                pagination,
                virtual,
                listHeight,
                sticky,
                editable,
                size,
                variant,
                rowSelection,
                filtered: outerFiltered,
            },
            ref,
        ) => {
            const [internalSelectedRowKeys, setInternalSelectedRowKeys] = useState<React.Key[]>([]);
            const [innerFiltered, setInnerFiltered] = useState<Record<string, string[]>>({});

            const filtered = outerFiltered || innerFiltered;

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
                            label,
                            filters,
                            enableSorting = false,
                            enableColumnFilter = false,
                            enableResizing = false,
                        }) => {
                            return {
                                accessorKey: id,
                                cell: ({ getValue, row: { index }, column: { id }, table }) => {
                                    if (editable) {
                                        // console.log('column cell', info);
                                        // info.getValue()
                                        const initialValue = getValue();
                                        // We need to keep and update the state of the cell normally
                                        // eslint-disable-next-line react-hooks/rules-of-hooks
                                        const [value, setValue] = useState(initialValue);

                                        // When the input is blurred, we'll call our table meta's updateData function
                                        const onBlur = () => {
                                            table.options.meta?.updateData(index, id, value);
                                        };

                                        // If the initialValue is changed external, sync it up with our state
                                        // eslint-disable-next-line react-hooks/rules-of-hooks
                                        useEffect(() => {
                                            setValue(initialValue);
                                        }, [initialValue]);

                                        return (
                                            <input
                                                value={value as string}
                                                onChange={(e) => setValue(e.target.value)}
                                                onBlur={onBlur}
                                            />
                                        );
                                    }
                                    return getValue();
                                },
                                enableSorting,
                                enableColumnFilter,
                                enableResizing,
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
                getFilteredRowModel: getFilteredRowModel(),
                getPaginationRowModel: pagination ? getPaginationRowModel() : undefined,
                columnResizeMode: 'onChange',
                columnResizeDirection: 'ltr',
                meta: {
                    updateData: (rowIndex, columnId, value) => {
                        // Skip page index reset until after next rerender
                        // skipAutoResetPageIndex();
                        onChange((old) =>
                            old.map((row, index) => {
                                if (index === rowIndex) {
                                    return {
                                        ...old[rowIndex]!,
                                        [columnId]: value,
                                    };
                                }
                                return row;
                            }),
                        );
                    },
                },
            });

            // Important: Keep the row virtualizer in the lowest component possible to avoid unnecessary re-renders.
            const rowVirtualizer = useVirtualizer<HTMLDivElement, HTMLTableRowElement>({
                enabled: virtual,
                count: table.getRowModel().rows.length,
                estimateSize: () => 33, // estimate row height for accurate scrollbar dragging
                getScrollElement: () => tableContainerRef.current,
                // measure dynamic row height, except in firefox because it measures table border height incorrectly
                measureElement:
                    typeof window !== 'undefined' && navigator.userAgent.indexOf('Firefox') === -1
                        ? (element) => element?.getBoundingClientRect().height
                        : undefined,
                overscan: 5,
            });

            return (
                <Root
                    className="p-2"
                    ref={tableContainerRef}
                    style={
                        virtual
                            ? {
                                  width: 'auto',
                                  overflow: 'auto', // our scrollable table container
                                  position: 'relative', // needed for sticky header
                                  height: listHeight, // should be a fixed height
                              }
                            : undefined
                    }
                    data={data}
                    columns={columns}
                    size={size}
                >
                    <Table
                        {...{
                            style: {
                                display: virtual ? 'grid' : 'table',
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
                                        return (
                                            <HeadCell
                                                header={header}
                                                size={size}
                                                variant={variant}
                                                filtered={filtered}
                                                setInnerFiltered={setInnerFiltered}
                                                outerFiltered={outerFiltered}
                                                onChange={onChange}
                                            />
                                        );
                                    })}
                                </Tr>
                            ))}
                        </Thead>

                        <tbody
                            style={
                                virtual
                                    ? {
                                          display: 'grid',
                                          height: `${rowVirtualizer.getTotalSize()}px`, // tells scrollbar how big the table is
                                          position: 'relative', // needed for absolute positioning of rows
                                      }
                                    : undefined
                            }
                        >
                            {virtual
                                ? rowVirtualizer.getVirtualItems().map((virtualRow) => {
                                      const row = table.getRowModel().rows[virtualRow.index] as Row<any>;
                                      return (
                                          <Tr
                                              data-index={virtualRow.index} // needed for dynamic row height measurement
                                              ref={(node) => rowVirtualizer.measureElement(node)} // measure dynamic row height
                                              key={row.id}
                                              style={{
                                                  display: 'flex',
                                                  position: 'absolute',
                                                  transform: `translateY(${virtualRow.start}px)`, // this should always be a `style` as it changes on scroll
                                                  width: '100%',
                                              }}
                                              variant={variant}
                                          >
                                              <Td variant={variant} selectionCell>
                                                  <StyledCheckbox checked />
                                              </Td>
                                              {row.getVisibleCells().map((cell) => {
                                                  return (
                                                      <Td
                                                          key={cell.id}
                                                          style={{
                                                              display: 'flex',
                                                              width: cell.column.getSize(),
                                                          }}
                                                          variant={variant}
                                                      >
                                                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                                      </Td>
                                                  );
                                              })}
                                          </Tr>
                                      );
                                  })
                                : table.getRowModel().rows.map((row) => (
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
                                              <Td key={cell.id} variant={variant}>
                                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                            </Td>
                                          ))}
                                    </Tr>
                                  ))}
                        </tbody>
                    </Table>

                    {pagination && (
                        <>
                            <div className="flex items-center gap-2">
                                <button
                                    className="border rounded p-1"
                                    onClick={() => table.firstPage()}
                                    disabled={!table.getCanPreviousPage()}
                                >
                                    {'<<'}
                                </button>
                                <button
                                    className="border rounded p-1"
                                    onClick={() => table.previousPage()}
                                    disabled={!table.getCanPreviousPage()}
                                >
                                    {'<'}
                                </button>
                                <button
                                    className="border rounded p-1"
                                    onClick={() => table.nextPage()}
                                    disabled={!table.getCanNextPage()}
                                >
                                    {'>'}
                                </button>
                                <button
                                    className="border rounded p-1"
                                    onClick={() => table.lastPage()}
                                    disabled={!table.getCanNextPage()}
                                >
                                    {'>>'}
                                </button>
                                <span className="flex items-center gap-1">
                                    <div>Page</div>
                                    <strong>
                                        {table.getState().pagination.pageIndex + 1} of{' '}
                                        {table.getPageCount().toLocaleString()}
                                    </strong>
                                </span>
                                <span className="flex items-center gap-1">
                                    | Go to page:
                                    <input
                                        type="number"
                                        min="1"
                                        max={table.getPageCount()}
                                        defaultValue={table.getState().pagination.pageIndex + 1}
                                        onChange={(e) => {
                                            const page = e.target.value ? Number(e.target.value) - 1 : 0;
                                            table.setPageIndex(page);
                                        }}
                                        className="border p-1 rounded w-16"
                                    />
                                </span>
                                <select
                                    value={table.getState().pagination.pageSize}
                                    onChange={(e) => {
                                        table.setPageSize(Number(e.target.value));
                                    }}
                                >
                                    {[10, 20, 30, 40, 50].map((pageSize) => (
                                        <option key={pageSize} value={pageSize}>
                                            Show {pageSize}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                Showing {table.getRowModel().rows.length.toLocaleString()} of{' '}
                                {table.getRowCount().toLocaleString()} Rows
                            </div>
                            <pre>{JSON.stringify(table.getState().pagination, null, 2)}</pre>
                        </>
                    )}
                </Root>
            );
        },
    );

export const tableConfig = {
    name: 'Select',
    tag: 'div',
    layout: tableRoot,
    base,
    variations: {},
    defaults: {
        size: 'm',
    },
};
