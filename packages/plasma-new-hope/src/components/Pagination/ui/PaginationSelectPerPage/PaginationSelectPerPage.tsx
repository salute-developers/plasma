import React, { useState } from 'react';

import { defaultValues } from '../../utils';
import { classes } from '../../Pagination.tokens';

import type { PaginationSelectPerPageProps } from './PaginationSelectPerPage.types';
import { SelectPerPageRoot, SelectPerPageTypography, SelectPerPageSelect } from './PaginationSelectPerPage.styles';

export const PaginationSelectPerPage: React.FC<PaginationSelectPerPageProps> = ({
    value = defaultValues.perPage,
    valuesList = defaultValues.perPageList,
    textPerPage = defaultValues.textPerPage,
    onChangeValue,
    ...rest
}) => {
    const [selectedValue, setSelectedValue] = useState(value);

    const handleSelectChange = (newValue?: string) => {
        if (newValue) {
            setSelectedValue(Number(newValue));
            onChangeValue?.(Number(newValue));
        }
    };

    const transformedList = valuesList.map((num) => ({ label: num.toString(), value: num.toString() }));

    return (
        <SelectPerPageRoot {...rest}>
            <SelectPerPageTypography>{textPerPage}</SelectPerPageTypography>

            <div>
                <SelectPerPageSelect
                    className={classes.selectWrapper}
                    items={transformedList}
                    value={selectedValue.toString()}
                    onChange={handleSelectChange}
                    target="button"
                />
            </div>
        </SelectPerPageRoot>
    );
};
