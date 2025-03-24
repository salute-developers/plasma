import { flexRender } from '@tanstack/react-table';
import React, { useState, useEffect } from 'react';

import { Th, StyledCheckbox, Resizer } from '../../Table.styles';
import { IconFilterFunnel, IconSwapVert, IconArrowDown, IconArrowUp } from '../../../_Icon';
import { SELECT_COLUMN_ID } from '../../Table';

import { ControlButtons, StyledPopover, ThWrapper, FilterWrapper } from './HeadCell.styles';

const getIconSize = (size?: string) => {
    return size === 's' ? 'xs' : 's';
};

export const HeadCell: React.FC<any> = ({ header, size, variant }) => {
    const filtered = header.column.getFilterValue() || [];

    const [isOpen, setIsOpen] = useState(false);
    const [localFiltered, setLocalFiltered] = useState(filtered || []);

    const { filters } = header?.column?.columnDef?.meta || {};

    const handleFilterClick = (value: any) => {
        if (localFiltered.some((k: any) => k === value)) {
            setLocalFiltered(localFiltered.filter((e: any) => e !== value));
        } else {
            setLocalFiltered([...localFiltered, value]);
        }
    };

    // console.log('header', header.column);

    const handleFilterSubmit = () => {
        header.column.setFilterValue(localFiltered);

        setIsOpen(false);
    };

    useEffect(() => {
        if (!isOpen) {
            setLocalFiltered(header.column.getFilterValue() || []);
        }
    }, [isOpen]);

    return (
        <Th
            key={header.id}
            colSpan={header.colSpan}
            variant={variant}
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
                                    <span
                                        style={{
                                            lineHeight: 0,
                                            cursor: 'pointer',
                                        }}
                                    >
                                        <StyledPopover
                                            opened={isOpen}
                                            onToggle={(is) => setIsOpen(is)}
                                            placement="bottom"
                                            target={<IconFilterFunnel size={getIconSize(size)} />}
                                            closeOnOverlayClick
                                        >
                                            <FilterWrapper>
                                                {filters?.map((filter: any) => {
                                                    return (
                                                        <div
                                                            style={{
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                gap: '0.5rem',
                                                            }}
                                                        >
                                                            <StyledCheckbox
                                                                onClick={() => handleFilterClick(filter.value)}
                                                                checked={localFiltered.some(
                                                                    (val: any) => filter.value === val,
                                                                )}
                                                                label={filter.label}
                                                            />
                                                        </div>
                                                    );
                                                })}

                                                <button type="button" onClick={handleFilterSubmit}>
                                                    OK
                                                </button>
                                            </FilterWrapper>
                                        </StyledPopover>
                                    </span>
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
