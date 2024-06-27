import React from 'react';

import { defaultValues } from '../../utils';
import { classes } from '../../Pagination.tokens';

import type { PaginationSelectPerPageProps } from './PaginationSelectPerPage.types';
import { SelectPerPageRoot, SelectPerPageTypography, SelectPerPageSelect } from './PaginationSelectPerPage.styles';

export const PaginationSelectPerPage: React.FC<PaginationSelectPerPageProps> = ({
    perPageValue = defaultValues.perPage,
    perPageList = defaultValues.perPageList,
    textPerPage = defaultValues.textPerPage,
    onChangeValue,
    size,
    listWidth,
    ...rest
}) => {
    const handleSelectChange = (newValue?: string) => {
        if (newValue) {
            onChangeValue?.(Number(newValue));
        }
    };

    const transformedList = perPageList.map((num) => ({ label: num.toString(), value: num.toString() }));

    return (
        <SelectPerPageRoot {...rest}>
            <SelectPerPageTypography>{textPerPage}</SelectPerPageTypography>

            <SelectPerPageSelect
                className={classes.selectWrapper}
                items={transformedList}
                value={perPageValue.toString()}
                onChange={handleSelectChange}
                target="button-like"
                size={size}
                listWidth={listWidth}
            />
        </SelectPerPageRoot>
    );
};
