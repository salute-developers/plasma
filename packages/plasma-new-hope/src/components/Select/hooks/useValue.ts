import { useState } from 'react';

import type { ItemOption, SelectProps, SelectValue } from '../Select.types';

const getInitialValue = ({
    name,
    defaultValue,
    multiselect,
}: {
    name: SelectProps['name'];
    defaultValue: SelectProps['defaultValue'];
    multiselect: SelectProps['multiselect'];
}): SelectValue => {
    if (name !== undefined && defaultValue !== undefined) {
        return defaultValue;
    }

    return multiselect ? [] : '';
};

const hasOuterValue = <K extends ItemOption>(
    value: SelectProps<K>['value'] | null | undefined,
): value is SelectValue => {
    return value !== null && value !== undefined;
};

type Props = {
    name: SelectProps['name'];
    outerValue: SelectProps['value'];
    outerOnChange: SelectProps['onChange'];
    defaultValue: SelectProps['defaultValue'];
    multiselect: SelectProps['multiselect'];
};

export const useValue = ({ name, outerValue, outerOnChange, defaultValue, multiselect }: Props) => {
    // Внутреннее состояние для корректной работы в uncontrolled-режиме.
    const [internalValue, setInternalValue] = useState<string | string[]>(
        getInitialValue({ name, defaultValue, multiselect }),
    );

    // Актуальное состояние компонента.
    const value = hasOuterValue(outerValue) ? outerValue : internalValue;

    const handleChange = (newValue: SelectValue, item: ItemOption | null) => {
        setInternalValue(newValue);

        if (outerOnChange && !name) {
            outerOnChange(newValue as any, item);
        }
    };

    return {
        value,
        handleChange,
    };
};
