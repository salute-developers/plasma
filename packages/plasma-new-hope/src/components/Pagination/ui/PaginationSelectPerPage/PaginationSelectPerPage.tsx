import React, { useCallback, useState } from 'react';

import { IconDone } from '../../../../components/_Icon';
import { SelectPrimitiveValue } from '../../../Select';

import type { PaginationSelectPerPageProps } from './PaginationSelectPerPage.types';
import {
    PaginationSelectPerPageRoot,
    PaginationSelectPerPageTypography,
    PaginationSelectPerPageSelect,
    PaginationSelectPerPageSelectItem,
} from './PaginationSelectPerPage.styles';

export const PaginationSelectPerPage: React.FC<PaginationSelectPerPageProps> = ({
    value = 20,
    valuesList = [20, 50, 100, 200],
    onChangeValue,
    ...rest
}) => {
    const [selectedValue, setSelectedValue] = useState(value);

    const handleSelectChange = useCallback(
        (newValue: SelectPrimitiveValue | undefined) => {
            setSelectedValue(Number(newValue));
            onChangeValue && onChangeValue(Number(newValue));
        },
        [onChangeValue, setSelectedValue],
    );

    return (
        <PaginationSelectPerPageRoot {...rest}>
            <PaginationSelectPerPageTypography>Show</PaginationSelectPerPageTypography>
            <PaginationSelectPerPageSelect
                value={selectedValue}
                onChangeValue={(event: SelectPrimitiveValue | undefined) => handleSelectChange(event)}
            >
                {valuesList?.map((item) => (
                    <PaginationSelectPerPageSelectItem
                        contentLeft={item === selectedValue ? <IconDone size="xs" /> : undefined}
                        key={item}
                        value={item}
                        text={String(item)}
                    />
                ))}
            </PaginationSelectPerPageSelect>
        </PaginationSelectPerPageRoot>
    );
};
