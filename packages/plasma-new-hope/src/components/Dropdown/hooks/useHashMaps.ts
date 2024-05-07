import { useMemo } from 'react';

import { DropdownProps } from '../Dropdown.types';
import { DropdownItemOption } from '../ui/DropdownItem/DropdownItem.type';

export type PathMapType = Map<string | number, number>;
export type FocusedToValueMapType = Map<string, DropdownItemOption>;

// Данный хук рекурсивно проходится по дереву items и создает 2 мапы: мапу путей и мапу фокусов.
// Нужно для получения всей информации об item, зная только путь до него.

export const useHashMaps = (items: DropdownProps['items']) => {
    return useMemo(() => {
        const pathMap: PathMapType = new Map();
        const focusedToValueMap: FocusedToValueMapType = new Map();

        pathMap.set('root', items.length);

        const rec = (items: DropdownProps['items'], prevIndex = '') => {
            items.forEach((item: DropdownItemOption, index: number) => {
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
