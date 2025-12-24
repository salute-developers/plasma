import { flexRender, Header } from '@tanstack/react-table';
import React from 'react';

import { Th, Resizer } from '../../Table.styles';
import { IconSwapVert, IconArrowDown, IconArrowUp } from '../../../_Icon';
import { SELECT_COLUMN_ID } from '../../utils';
import { TableProps, TableRowData } from '../../Table.types';
import { classes } from '../../Table.tokens';

import { ControlButtons, ThWrapper, IconWrapper } from './HeadCell.styles';
import { Filter } from './ui/Filter/Filter';

export const getIconSize = (size?: string) => {
    return size === 's' ? 'xs' : 's';
};

type Props = {
    borderVariant: TableProps['borderVariant'];
    size: TableProps['size'];
    header: Header<TableRowData, unknown>;
    outerFiltered: TableProps['filtered'];
    tableContainerRef: React.RefObject<HTMLDivElement>;
};

export const HeadCell: React.FC<Props> = ({ header, size, borderVariant, outerFiltered, tableContainerRef }) => {
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
                                    <IconWrapper onClick={header.column.getToggleSortingHandler()}>
                                        {{
                                            asc: (
                                                <IconArrowUp
                                                    size={getIconSize(size)}
                                                    className={classes.sortingAscIcon}
                                                />
                                            ),
                                            desc: (
                                                <IconArrowDown
                                                    size={getIconSize(size)}
                                                    className={classes.sortingDescIcon}
                                                />
                                            ),
                                        }[header.column.getIsSorted() as string] ?? (
                                            <IconSwapVert
                                                size={getIconSize(size)}
                                                className={classes.sortingDefaultIcon}
                                            />
                                        )}
                                    </IconWrapper>
                                )}
                            </ControlButtons>
                        )}
                    </ThWrapper>
                </>
            )}
            {header.column.getCanResize() && (
                <Resizer
                    className={classes.resizeDivider}
                    onMouseDown={header.getResizeHandler()}
                    onTouchStart={header.getResizeHandler()}
                    isResizing={header.column.getIsResizing()}
                />
            )}
        </Th>
    );
};
