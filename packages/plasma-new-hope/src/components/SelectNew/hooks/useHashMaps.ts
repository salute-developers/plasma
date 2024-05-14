import { useMemo } from 'react';

import { SelectNewProps } from '../SelectNew.types';
import { SelectItemOption } from '../ui/SelectItem/SelectItem.type';

export type PathMapType = Map<string | number, number>;
export type FocusedToValueMapType = Map<string, SelectItemOption>;

// Данный хук рекурсивно проходится по дереву items и создает 2 мапы: мапу путей и мапу фокусов.
// Нужно для получения всей информации об item, зная только путь до него.

export const useHashMaps = (items: SelectNewProps['items']) => {
    return useMemo(() => {
        const pathMap: PathMapType = new Map();
        const focusedToValueMap: FocusedToValueMapType = new Map();

        pathMap.set('root', items.length);

        const rec = (items: SelectNewProps['items'], prevIndex = '') => {
            items.forEach((item: SelectItemOption, index: number) => {
                const { value, items: innerItems } = item;

                const currIndex = `${prevIndex}/${index}`.replace(/^(\/)/, '');
                focusedToValueMap.set(currIndex, item);

                if (innerItems) {
                    pathMap.set(value, innerItems.length);
                    rec(innerItems, currIndex);
                }
            });
        };
        rec(items);

        return [pathMap, focusedToValueMap] as [PathMapType, FocusedToValueMapType];
    }, [items]);
};
