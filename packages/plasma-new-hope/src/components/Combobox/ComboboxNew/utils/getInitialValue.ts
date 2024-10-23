import { ComboboxProps } from '../Combobox.types';
import { ValueToItemMapType } from '../hooks/getPathMaps';

// Утилита предназначена для фильтрации элементов в value, которые отсутствуют в items.
// Эти элементы игнорируются и не участвуют в дальнейшей работе компонента.
export const getInitialValue = (
    outerValue: NonNullable<ComboboxProps['value']>,
    valueToItemMap: ValueToItemMapType,
) => {
    if (Array.isArray(outerValue)) {
        if (outerValue.length === 0) {
            return [];
        }

        return outerValue.filter(valueToItemMap.has.bind(valueToItemMap));
    }

    if (valueToItemMap.has(outerValue)) {
        return outerValue;
    }

    return '';
};
