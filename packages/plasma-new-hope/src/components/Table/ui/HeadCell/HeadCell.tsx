import { flexRender } from '@tanstack/react-table';
import React, { useState, useEffect } from 'react';

import { Th, StyledCheckbox } from '../../Table.styles';
import {
    // IconArrowsMoveVertical,
    // IconDisclosureDownCentered,
    // IconDisclosureUpCentered,
    IconFilterFunnel,
} from '../../../_Icon';

import { ControlButtons, StyledPopover, ThWrapper, FilterWrapper } from './HeadCell.styles';

// function Filter({ column }: { column: any }) {
//     const columnFilterValue = column.getFilterValue();
//
//     return (
//         <input
//             type="text"
//             value={(columnFilterValue ?? '') as string}
//             onChange={(value) => column.setFilterValue(value.target.value)}
//         />
//     );
// }

const getIconSize = (size?: string) => {
    return size === 's' ? 'xs' : 's';
};

export const HeadCell: React.FC<any> = ({
    header,
    size,
    variant,
    filtered,
    setInnerFiltered,
    outerFiltered,
    onChange,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [localFiltered, setLocalFiltered] = useState(filtered[header.id] || []);

    const { filters, onFilter } = header.column.columnDef.meta;

    const handleFilterClick = (value) => {
        if (localFiltered.some((k) => k === value)) {
            setLocalFiltered(localFiltered.filter((e) => e !== value));
        } else {
            setLocalFiltered([...localFiltered, value]);
        }
    };

    const handleFilterSubmit = () => {
        if (onChange) {
            onChange({
                ...filtered,
                [header.id]: localFiltered,
            });
        }

        setInnerFiltered({
            ...filtered,
            [header.id]: localFiltered,
        });

        setIsOpen(false);
    };

    useEffect(() => {
        if (outerFiltered) {
            setLocalFiltered(outerFiltered[header.id] || []);
        }
    }, [outerFiltered]);

    return (
        <Th key={header.id} colSpan={header.colSpan} style={{ width: header.getSize() }} variant={variant}>
            {header.isPlaceholder ? null : (
                <>
                    <ThWrapper>
                        {flexRender(header.column.columnDef.header, header.getContext())}

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
                                            {filters?.map((filter) => {
                                                return (
                                                    <div
                                                        style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                                                    >
                                                        <StyledCheckbox
                                                            onClick={() => handleFilterClick(filter.value)}
                                                            checked={localFiltered.some((val) => filter.value === val)}
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

                            {/* <span */}
                            {/*     style={{ lineHeight: 0, cursor: 'pointer' }} */}
                            {/*     onClick={header.column.getToggleSortingHandler()} */}
                            {/* > */}
                            {/*     {{ */}
                            {/*         asc: <IconDisclosureUpCentered size={getIconSize(size)} />, */}
                            {/*         desc: <IconDisclosureDownCentered size={getIconSize(size)} />, */}
                            {/*     }[header.column.getIsSorted() as string] ?? */}
                            {/*         (header.column.getCanSort() ? ( */}
                            {/*             <IconArrowsMoveVertical size={getIconSize(size)} /> */}
                            {/*         ) : null)} */}
                            {/* </span> */}

                            {/* {header.column.getCanFilter() ? ( */}
                            {/*     <div> */}
                            {/*         <Filter column={header.column} /> */}
                            {/*     </div> */}
                            {/* ) : null} */}
                        </ControlButtons>
                    </ThWrapper>
                </>
            )}
        </Th>
    );
};
