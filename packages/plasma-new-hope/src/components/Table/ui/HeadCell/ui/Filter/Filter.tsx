import React, { useEffect, useState } from 'react';

import { IconFilterFunnel } from '../../../../../_Icon';
import { getIconSize } from '../../HeadCell';
import { ButtonAccent, ButtonClear } from '../../../../Table.styles';

import {
    FilterWrapper,
    IconFilterWrapper,
    StyledIndicator,
    StyledPopover,
    FilterList,
    StyledCheckbox,
    StyledDivider,
    ButtonWrapper,
} from './Filter.styles';

export const Filter: React.FC<any> = ({ header, size }) => {
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

    const handleFilterSubmit = () => {
        header.column.setFilterValue(localFiltered);

        setIsOpen(false);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        if (!isOpen) {
            setLocalFiltered(header.column.getFilterValue() || []);
        }
    }, [isOpen]);

    return (
        <StyledPopover
            opened={isOpen}
            onToggle={(is) => setIsOpen(is)}
            placement="bottom"
            target={
                <IconFilterWrapper>
                    <IconFilterFunnel size={getIconSize(size)} />

                    {filtered.length ? <StyledIndicator size="s" view="accent" /> : undefined}
                </IconFilterWrapper>
            }
            closeOnOverlayClick
        >
            <FilterWrapper>
                <FilterList>
                    {filters?.map((filter: any) => (
                        <StyledCheckbox
                            key={filter.value}
                            onClick={() => handleFilterClick(filter.value)}
                            checked={localFiltered.some((val: any) => filter.value === val)}
                            label={filter.label}
                        />
                    ))}
                </FilterList>

                <StyledDivider orientation="horizontal" length="100%" />

                <ButtonWrapper>
                    <ButtonClear onClick={handleClose}>Закрыть</ButtonClear>
                    <ButtonAccent onClick={handleFilterSubmit}>Применить</ButtonAccent>
                </ButtonWrapper>
            </FilterWrapper>
        </StyledPopover>
    );
};
