import { useMemo } from 'react';
import { isEmpty } from 'src/utils';

import type { ItemOptionTransformed, SelectCheckedState } from '../Select.types';

export type PathMapType = Map<string, number>;
export type FocusedToValueMapType = Map<string, ItemOptionTransformed>;
export type ValueToCheckedMapType = Map<ItemOptionTransformed['value'], SelectCheckedState>;
export type ValueToItemMapType = Map<ItemOptionTransformed['value'], ItemOptionTransformed>;
export type ValueToPathMapType = Map<string, string[]>;

const createPathMaps = (items: ItemOptionTransformed[] = []) => {
    const pathMap: PathMapType = new Map();
    const focusedToValueMap: FocusedToValueMapType = new Map();
    const valueToCheckedMap: ValueToCheckedMapType = new Map();
    const valueToItemMap: ValueToItemMapType = new Map();
    const valueToPathMap: ValueToPathMapType = new Map();

    pathMap.set('root', items.length);

    const rec = (itemsToMap: ItemOptionTransformed[], prevIndex = '', path: string[] = []) => {
        itemsToMap.forEach((item, index) => {
            const { value, items: innerItems } = item;

            const currIndex = `${prevIndex}/${index}`.replace(/^(\/)/, '');
            focusedToValueMap.set(currIndex, item);

            valueToCheckedMap.set(value, false);
            valueToPathMap.set(value.toString(), [...path, value.toString()]);

            if (!innerItems || isEmpty(innerItems)) {
                valueToItemMap.set(value, item);
            } else {
                pathMap.set(value, innerItems.length);
                rec(innerItems, currIndex, [...path, value.toString()]);
            }
        });
    };
    rec(items);

    return [pathMap, focusedToValueMap, valueToCheckedMap, valueToItemMap, valueToPathMap] as [
        PathMapType,
        FocusedToValueMapType,
        ValueToCheckedMapType,
        ValueToItemMapType,
        ValueToPathMapType,
    ];
};

// Рекурсивно проходим по дереву items и создаем мапы для быстрой работы с деревом.
export const usePathMaps = (items: ItemOptionTransformed[] = []) => {
    return useMemo(() => createPathMaps(items), [items]);
};
