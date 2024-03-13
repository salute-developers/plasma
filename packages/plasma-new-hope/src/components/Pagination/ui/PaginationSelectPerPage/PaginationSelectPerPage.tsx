import React, { useCallback, useState } from 'react';

import { IconDone } from '../../../../components/_Icon';
import { SelectPrimitiveValue } from '../../../Select';
import { defaultValues } from '../../utils';

import type { PaginationSelectPerPageProps } from './PaginationSelectPerPage.types';
import {
    SelectPerPageRoot,
    SelectPerPageTypography,
    SelectPerPageSelect,
    SelectPerPageSelectItem,
} from './PaginationSelectPerPage.styles';

export const PaginationSelectPerPage: React.FC<PaginationSelectPerPageProps> = ({
    value = defaultValues.perPage,
    valuesList = defaultValues.perPageList,
    onChangeValue,
    ...rest
}) => {
    const [selectedValue, setSelectedValue] = useState(value);

    const handleSelectChange = useCallback(
        (newValue: SelectPrimitiveValue | undefined) => {
            setSelectedValue(Number(newValue));
            onChangeValue?.(Number(newValue));
        },
        [onChangeValue, setSelectedValue],
    );

    return (
        <SelectPerPageRoot {...rest}>
            <SelectPerPageTypography>Show</SelectPerPageTypography>
            <SelectPerPageSelect
                value={selectedValue}
                onChangeValue={(event: SelectPrimitiveValue | undefined) => handleSelectChange(event)}
            >
                {valuesList?.map((item) => (
                    <SelectPerPageSelectItem
                        contentLeft={item === selectedValue ? <IconDone size="xs" color="inherit" /> : undefined}
                        key={item}
                        value={item}
                        text={String(item)}
                    />
                ))}
            </SelectPerPageSelect>
        </SelectPerPageRoot>
    );
};
