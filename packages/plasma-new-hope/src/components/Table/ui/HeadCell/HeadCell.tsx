import { flexRender } from '@tanstack/react-table';
import React from 'react';

import { Th, Resizer } from '../../Table.styles';
import { IconSwapVert, IconArrowDown, IconArrowUp } from '../../../_Icon';
import { SELECT_COLUMN_ID } from '../../Table';

import { ControlButtons, ThWrapper } from './HeadCell.styles';
import { Filter } from './ui/Filter/Filter';

export const getIconSize = (size?: string) => {
    return size === 's' ? 'xs' : 's';
};

export const HeadCell: React.FC<any> = ({ header, size, borderVariant, outerFiltered, tableContainerRef }) => {
    const { filters } = header?.column?.columnDef?.meta || {};

    return (
        <Th
            key={header.id}
            colSpan={header.colSpan}
            borderVariant={borderVariant}
            selectionCell={header.column.id === SELECT_COLUMN_ID}
            style={header.column.id !== SELECT_COLUMN_ID ? { width: header.getSize() } : undefined}
        >
            {header.isPlaceholder ? null : (
                <>
                    <ThWrapper>
                        {flexRender(header.column.columnDef.header, header.getContext())}

                        {header.column.id !== SELECT_COLUMN_ID && (
                            <ControlButtons>
                                {filters && (
                                    <Filter
                                        header={header}
                                        size={size}
                                        outerFiltered={outerFiltered}
                                        tableContainerRef={tableContainerRef}
                                    />
                                )}

                                {header.column.getCanSort() && (
                                    <span
                                        style={{
                                            lineHeight: 0,
                                            cursor: 'pointer',
                                            userSelect: 'none',
                                        }}
                                        onClick={header.column.getToggleSortingHandler()}
                                    >
                                        {{
                                            asc: <IconArrowUp size={getIconSize(size)} />,
                                            desc: <IconArrowDown size={getIconSize(size)} />,
                                        }[header.column.getIsSorted() as string] ?? (
                                            <IconSwapVert size={getIconSize(size)} />
                                        )}
                                    </span>
                                )}
                            </ControlButtons>
                        )}
                    </ThWrapper>
                </>
            )}
            {header.column.getCanResize() && (
                <Resizer
                    onMouseDown={header.getResizeHandler()}
                    onTouchStart={header.getResizeHandler()}
                    isResizing={header.column.getIsResizing()}
                />
            )}
        </Th>
    );
};
