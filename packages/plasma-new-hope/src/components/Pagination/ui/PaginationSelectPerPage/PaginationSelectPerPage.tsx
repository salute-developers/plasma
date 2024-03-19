import React, { useState } from 'react';

import { IconDone } from '../../../../components/_Icon';
import { SelectPrimitiveValue } from '../../../Select';
import { defaultValues } from '../../utils';
import { classes } from '../../Pagination.tokens';

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
    textPerPage = defaultValues.textPerPage,
    onChangeValue,
    ...rest
}) => {
    const [selectedValue, setSelectedValue] = useState(value);

    const handleSelectChange = (newValue: SelectPrimitiveValue | undefined) => {
        setSelectedValue(Number(newValue));
        onChangeValue?.(Number(newValue));
    };

    return (
        <SelectPerPageRoot {...rest}>
            <SelectPerPageTypography>{textPerPage}</SelectPerPageTypography>
            <SelectPerPageSelect
                className={classes.selectWrapper}
                value={selectedValue}
                onChangeValue={handleSelectChange}
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
