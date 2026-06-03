import { useMemo } from 'react';
import { isEmpty } from 'src/utils';

import { ItemOptionTransformed } from '../Combobox.types';

export type PathMapType = Map<string, number>;
export type FocusedToValueMapType = Map<string, ItemOptionTransformed>;
export type CheckedType = boolean | 'done' | 'dot' | 'indeterminate';
export type ValueToCheckedMapType = Map<ItemOptionTransformed['value'], CheckedType>;
export type ValueToItemMapType = Map<ItemOptionTransformed['value'], ItemOptionTransformed>;
export type ValueToPathMapType = Map<string, string[]>;

const createNavigationMaps = (items: ItemOptionTransformed[] = []) => {
    const pathMap: PathMapType = new Map();
    const focusedToValueMap: FocusedToValueMapType = new Map();
    const valueToPathMap: ValueToPathMapType = new Map();

    pathMap.set('root', items?.length || 0);

    const rec = (itemsToMap: ItemOptionTransformed[], prevIndex = '', path: string[] = []) => {
        itemsToMap?.forEach((item: ItemOptionTransformed, index: number) => {
            const { value, items: innerItems } = item;

            const currIndex = `${prevIndex}/${index}`.replace(/^(\/)/, '');
            focusedToValueMap.set(currIndex, item);

            valueToPathMap.set(value.toString(), [...path, value.toString()]);

            if (innerItems && !isEmpty(innerItems)) {
                pathMap.set(value, innerItems.length);
                rec(innerItems, currIndex, [...path, value.toString()]);
            }
        });
    };
    rec(items);

    return [pathMap, focusedToValueMap, valueToPathMap] as [PathMapType, FocusedToValueMapType, ValueToPathMapType];
};

const createSelectionMaps = (items: ItemOptionTransformed[] = []) => {
    const valueToCheckedMap: ValueToCheckedMapType = new Map();
    const valueToItemMap: ValueToItemMapType = new Map();
    const valueToPathMap: ValueToPathMapType = new Map();

    const rec = (itemsToMap: ItemOptionTransformed[], path: string[] = []) => {
        itemsToMap?.forEach((item: ItemOptionTransformed) => {
            const { value, items: innerItems } = item;

            valueToCheckedMap.set(value, false);
            valueToPathMap.set(value.toString(), [...path, value.toString()]);

            if (!innerItems || isEmpty(innerItems)) {
                valueToItemMap.set(value, item);
            } else {
                rec(innerItems, [...path, value.toString()]);
            }
        });
    };
    rec(items);

    return [valueToCheckedMap, valueToItemMap, valueToPathMap] as [
        ValueToCheckedMapType,
        ValueToItemMapType,
        ValueToPathMapType,
    ];
};

// Создает структуры для навигации по текущему видимому дереву.
export const useNavigationMaps = (items: ItemOptionTransformed[] = []) => {
    return useMemo(() => createNavigationMaps(items), [items]);
};

// Создает структуры для синхронизации выбранных значений по полному дереву.
export const useSelectionMaps = (items: ItemOptionTransformed[] = []) => {
    return useMemo(() => createSelectionMaps(items), [items]);
};
