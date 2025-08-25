import { ComboboxProps } from '../Combobox.types';
import { ValueToItemMapType } from '../hooks/getPathMaps';

// Type Guard для multiple.
// @ts-ignore
function isMultiple(multiple: ComboboxProps['multiple'], outerValue: ComboboxProps['value']): outerValue is string[] {
    return Boolean(multiple);
}

// Хелпер для генерации начального состояния поля ввода.
export const getTextValue: (
    multiple: ComboboxProps['multiple'],
    outerValue: ComboboxProps['value'],
    valueToItemMap: ValueToItemMapType,
    renderValue: ComboboxProps['renderValue'],
) => string = (multiple, outerValue, valueToItemMap, renderValue) => {
    if (!outerValue || isMultiple(multiple, outerValue)) {
        return '';
    }

    return (
        valueToItemMap.get(outerValue)?.label ||
        renderValue?.({ value: outerValue, label: '' }) ||
        outerValue.toString()
    );
};
