import { isEmpty } from 'src/utils';

import type { SelectValue } from '../Select.types';
import type { ValueToCheckedMapType, ValueToItemMapType } from '../hooks';

import { updateDescendants, updateSingleAncestors, updateAncestors } from '.';

// Пересчитывает мапу checked-состояний согласно value с обновлением родителей и потомков.
export const syncCheckedState = (
    value: SelectValue,
    valueToCheckedMap: ValueToCheckedMapType,
    valueToItemMap: ValueToItemMapType,
) => {
    const checked = new Map(valueToCheckedMap);

    checked.forEach((_, key) => {
        checked.set(key, false);
    });

    if (Array.isArray(value)) {
        value.forEach((currentValue) => {
            const currentItem = valueToItemMap.get(currentValue);

            if (!currentItem) {
                return;
            }

            checked.set(currentValue, true);
            updateDescendants(currentItem, checked, true);
            updateAncestors(currentItem, checked);
        });

        return checked;
    }

    const currentItem = valueToItemMap.get(value);

    if (!isEmpty(value) && currentItem) {
        checked.set(value, 'done');
        updateSingleAncestors(currentItem, checked, 'dot');
    }

    return checked;
};
