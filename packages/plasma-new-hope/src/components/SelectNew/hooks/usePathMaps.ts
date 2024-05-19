import { useMemo } from 'react';

import { updateDescendants, updateSingleAncestors, updateAncestors } from '../utils';
import { isEmpty } from '../../../utils';
import { SelectNewProps } from '../SelectNew.types';
import { ItemOptionTransformed } from '../elements/Inner/elements/Item/Item.types';

export type PathMapType = Map<string | number, number>;
export type FocusedToValueMapType = Map<string, ItemOptionTransformed>;

// Рекурсивно проходим по дереву items и создаем 3 мапы: мапу открытых путей, мапу фокусов и мапу выбранных элементов.
export const usePathMaps = (items: any, value: string | Array<string>, multiselect: boolean) => {
    return useMemo(() => {
        const pathMap: PathMapType = new Map();
        const focusedToValueMap: FocusedToValueMapType = new Map();
        const checkedMap: any = new Map();
        const valueToItemMap: any = new Map();

        pathMap.set('root', items.length);

        const rec = (items: SelectNewProps['items'], prevIndex = '') => {
            items.forEach((item: ItemOptionTransformed, index: number) => {
                const { value, items: innerItems } = item;

                const currIndex = `${prevIndex}/${index}`.replace(/^(\/)/, '');
                focusedToValueMap.set(currIndex, item);

                checkedMap.set(value, false);

                if (isEmpty(innerItems)) {
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
                    checkedMap.set(val, true);
                    updateDescendants(valueToItemMap.get(val), checkedMap, true);
                    updateAncestors(valueToItemMap.get(val), checkedMap);
                });
            } else {
                checkedMap.set(value, 'done');
                updateSingleAncestors(valueToItemMap.get(value), checkedMap, 'dot');
            }
        }

        return [pathMap, focusedToValueMap, checkedMap, valueToItemMap] as [
            PathMapType,
            FocusedToValueMapType,
            any,
            any,
        ];
    }, [items]);
};
