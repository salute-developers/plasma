import { useState } from 'react';

import { hasOuterValue } from '../utils';
import type { ItemOption, SelectProps, SelectValue } from '../Select.types';

const getInitialValue = ({
    defaultValue,
    multiselect,
}: {
    defaultValue: SelectProps['defaultValue'];
    multiselect: SelectProps['multiselect'];
}): SelectValue => {
    if (multiselect) {
        return defaultValue || [];
    }

    return defaultValue || '';
};

type Props = {
    outerValue: SelectProps['value'];
    outerOnChange: SelectProps['onChange'];
    defaultValue: SelectProps['defaultValue'];
    multiselect: SelectProps['multiselect'];
    nativeMode: boolean;
};

export const useValue = ({ outerValue, outerOnChange, defaultValue, multiselect, nativeMode }: Props) => {
    // Внутреннее состояние для корректной работы в uncontrolled-режиме.
    const [internalValue, setInternalValue] = useState<SelectValue>(getInitialValue({ defaultValue, multiselect }));

    // Актуальное состояние компонента.
    const value = hasOuterValue(outerValue) ? outerValue : internalValue;

    const handleChange = (newValue: SelectValue, item: ItemOption | null) => {
        setInternalValue(newValue);

        if (outerOnChange && !nativeMode) {
            outerOnChange(newValue as any, item);
        }
    };

    return {
        value,
        handleChange,
    };
};
