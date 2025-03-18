import React, { useState } from 'react';

import { useDidMountEffect } from '../../../../../../hooks';
import { IconFilterFunnel } from '../../../../../_Icon';
import { getIconSize } from '../../HeadCell';
import { ButtonAccent, LinkButton } from '../../../../Table.styles';

import { IconFilterWrapper, StyledIndicator, Select, StyledDivider, ControlPanel } from './Filter.styles';

const getSelectWidth = (size: string) => {
    switch (size) {
        case 'l': {
            return '18.75rem';
        }
        case 'm': {
            return '16rem';
        }
        case 's': {
            return '14rem';
        }
        default: {
            return '14rem';
        }
    }
};

const isFilterChanged = (outerFiltered: string[], localFiltered: string[]) => {
    return (
        outerFiltered.length !== localFiltered.length ||
        new Set([...outerFiltered, ...localFiltered]).size !== outerFiltered.length
    );
};

export const Filter: React.FC<any> = ({ header, size, outerFiltered, tableContainerRef }) => {
    const filtered = header.column.getFilterValue() || [];

    const [localFiltered, setLocalFiltered] = useState(filtered || []);

    const { filters } = header?.column?.columnDef?.meta || {};

    const isDisabled = !isFilterChanged(filtered, localFiltered);

    const handleFilterSubmit = () => {
        header.column.setFilterValue(localFiltered);
    };

    const handleReset = () => {
        setLocalFiltered([]);
    };

    const handleToggle = (opened: boolean) => {
        if (!opened) {
            setLocalFiltered(header.column.getFilterValue() || []);
        }
    };

    useDidMountEffect(() => {
        setLocalFiltered(filtered);
    }, [outerFiltered]);

    return (
        <Select
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            placement="bottom-end"
            multiselect
            value={localFiltered}
            onChange={setLocalFiltered}
            renderTarget={() => (
                <IconFilterWrapper>
                    <IconFilterFunnel size={getIconSize(size)} />

                    {filtered.length ? <StyledIndicator size="s" view="accent" /> : undefined}
                </IconFilterWrapper>
            )}
            items={filters}
            portal={tableContainerRef}
            listWidth={getSelectWidth(size)}
            onToggle={handleToggle}
            afterList={
                <>
                    <StyledDivider orientation="horizontal" length="auto" />

                    <ControlPanel>
                        <LinkButton onClick={handleReset}>Сбросить фильтр</LinkButton>
                        <ButtonAccent disabled={isDisabled} onClick={handleFilterSubmit}>
                            Применить
                        </ButtonAccent>
                    </ControlPanel>
                </>
            }
        />
    );
};
