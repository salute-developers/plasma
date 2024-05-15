import { useMemo } from 'react';

import { SelectNewProps } from '../SelectNew.types';
import { ItemOptionTransformed } from '../elements/Item/Item.types';

export type PathMapType = Map<string | number, number>;
export type FocusedToValueMapType = Map<string, ItemOptionTransformed>;

// Рекурсивно проходим по дереву items и создаем 3 мапы: мапу открытых путей, мапу фокусов и мапу выбранных элементов.

export const useHashMaps = (items: any) => {
    return useMemo(() => {
        const pathMap: PathMapType = new Map();
        const focusedToValueMap: FocusedToValueMapType = new Map();
        const checkedMap: any = new Map();

        pathMap.set('root', items.length);

        const rec = (items: SelectNewProps['items'], prevIndex = '') => {
            items.forEach((item: ItemOptionTransformed, index: number) => {
                const { value, items: innerItems } = item;

                const currIndex = `${prevIndex}/${index}`.replace(/^(\/)/, '');
                focusedToValueMap.set(currIndex, item);

                checkedMap.set(value, false);

                if (innerItems) {
                    pathMap.set(value, innerItems.length);
                    rec(innerItems, currIndex);
                }
            });
        };
        rec(items);

        return [pathMap, focusedToValueMap, checkedMap] as [PathMapType, FocusedToValueMapType, any];
    }, [items]);
};
