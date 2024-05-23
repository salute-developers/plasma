import { useMemo } from 'react';

import { updateDescendants, updateSingleAncestors, updateAncestors } from '../utils';
import { isEmpty } from '../../../utils';
import { SelectNewProps } from '../SelectNew.types';
import { ItemOptionTransformed } from '../elements/Inner/elements/Item/Item.types';

export type PathMapType = Map<string | number, number>;
export type FocusedToValueMapType = Map<string, ItemOptionTransformed>;
export type ValueToCheckedMapType = Map<ItemOptionTransformed['value'], boolean | 'done' | 'dot' | 'indeterminate'>;
export type ValueToItemMapType = Map<ItemOptionTransformed['value'], ItemOptionTransformed>;

// Рекурсивно проходим по дереву items и создаем 3 мапы: мапу открытых путей, мапу фокусов и мапу выбранных элементов.
export const usePathMaps = (items: any, value: string | Array<string>, multiselect: boolean) => {
    return useMemo(() => {
        const pathMap: PathMapType = new Map();
        const focusedToValueMap: FocusedToValueMapType = new Map();
        const valueToCheckedMap: ValueToCheckedMapType = new Map();
        const valueToItemMap: ValueToItemMapType = new Map();

        pathMap.set('root', items.length);

        const rec = (items: SelectNewProps['items'], prevIndex = '') => {
            items.forEach((item: ItemOptionTransformed, index: number) => {
                const { value, items: innerItems } = item;

                const currIndex = `${prevIndex}/${index}`.replace(/^(\/)/, '');
                focusedToValueMap.set(currIndex, item);

                valueToCheckedMap.set(value, false);

                if (isEmpty(innerItems) || !innerItems) {
                    valueToItemMap.set(value, item);
                } else {
                    pathMap.set(value, innerItems.length);
                    rec(innerItems, currIndex);
                }
            });
        };
        rec(items);

        // Сюда заходим, если пользователь передал value изначально. Надо определить какие из items будут выделены.
        if (!isEmpty(value)) {
            if (multiselect && Array.isArray(value)) {
                value.forEach((val) => {
                    valueToCheckedMap.set(val, true);
                    updateDescendants(valueToItemMap.get(val), valueToCheckedMap, true);
                    updateAncestors(valueToItemMap.get(val), valueToCheckedMap);
                });
            } else {
                valueToCheckedMap.set(value as string, 'done');
                updateSingleAncestors(valueToItemMap.get(value as string), valueToCheckedMap, 'dot');
            }
        }

        return [pathMap, focusedToValueMap, valueToCheckedMap, valueToItemMap] as [
            PathMapType,
            FocusedToValueMapType,
            ValueToCheckedMapType,
            ValueToItemMapType,
        ];
    }, [items]);
};
