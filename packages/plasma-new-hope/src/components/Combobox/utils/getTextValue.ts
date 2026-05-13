import { ComboboxProps } from '../Combobox.types';
import { ValueToItemMapType } from '../hooks/getPathMaps';

// Type Guard для multiple.
// @ts-ignore
function isMultiple(multiple: ComboboxProps['multiple'], value: ComboboxProps['value']): value is string[] {
    return Boolean(multiple);
}

// Хелпер для генерации начального состояния поля ввода.
export const getTextValue: (
    multiple: ComboboxProps['multiple'],
    value: ComboboxProps['value'],
    valueToItemMap: ValueToItemMapType,
    renderValue: ComboboxProps['renderValue'],
) => string = (multiple, value, valueToItemMap, renderValue) => {
    if (isMultiple(multiple, value) || !value) {
        return '';
    }

    return renderValue?.({ value, label: '' }) || valueToItemMap.get(value)?.label || value.toString();
};
