import { useState } from 'react';

import { getTextValue, hasOuterValue } from '../utils';
import type { ComboboxProps, ItemOption, Value } from '../Combobox.types';

import { ValueToItemMapType } from '.';

const getInitialValue = ({
    defaultValue,
    multiple,
}: {
    defaultValue: ComboboxProps['defaultValue'];
    multiple: ComboboxProps['multiple'];
}): Value => {
    if (multiple) {
        return defaultValue || [];
    }

    return defaultValue || '';
};

type Props = {
    outerValue: ComboboxProps['value'];
    outerOnChange: ComboboxProps['onChange'];
    defaultValue: ComboboxProps['defaultValue'];
    multiple: ComboboxProps['multiple'];
    nativeMode: boolean;
    valueToItemMap: ValueToItemMapType;
    renderValue: ComboboxProps['renderValue'];
    onChangeValue: ComboboxProps['onChangeValue'];
};

export const useValue = ({
    outerValue,
    outerOnChange,
    defaultValue,
    multiple,
    nativeMode,
    valueToItemMap,
    renderValue,
    onChangeValue,
}: Props) => {
    // Внутреннее состояние для корректной работы в uncontrolled-режиме.
    const [internalValue, setInternalValue] = useState<Value>(getInitialValue({ defaultValue, multiple }));

    // Актуальное состояние компонента.
    const value = hasOuterValue(outerValue) ? outerValue : internalValue;

    // Состояние поля поиска в target
    const [textValue, setTextValueState] = useState(getTextValue(multiple, value, valueToItemMap, renderValue));

    const setTextValue = (newTextValue: string) => {
        if (newTextValue === textValue) {
            return;
        }

        setTextValueState(newTextValue);
        onChangeValue?.(newTextValue);
    };

    const handleChange = (newValue: Value, item: ItemOption | null) => {
        setInternalValue(newValue);

        if (outerOnChange && !nativeMode) {
            outerOnChange(newValue as any, item);
        }
    };

    // useLayoutEffect(() => {
    //     if (defaultValue) {
    //         setInternalValue(defaultValue);
    //     }
    // }, [defaultValue]);

    return {
        value,
        // internalValue,
        // setInternalValue,
        handleChange,
        textValue,
        setTextValue,
    };
};
