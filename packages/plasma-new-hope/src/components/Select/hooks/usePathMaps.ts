import { isEmpty } from 'src/utils';

import { MergedSelectProps } from '../Select.types';
import { MergedDropdownNodeTransformed } from '../ui/Inner/ui/Item/Item.types';

export type PathMapType = Map<string | number, number>;
export type FocusedToValueMapType = Map<string, MergedDropdownNodeTransformed>;
export type ValueToCheckedMapType = Map<
    MergedDropdownNodeTransformed['value'],
    boolean | 'done' | 'dot' | 'indeterminate'
>;
export type ValueToItemMapType = Map<MergedDropdownNodeTransformed['value'], MergedDropdownNodeTransformed>;
export type ValueToPathMapType = Map<string, string[]>;

// Рекурсивно проходим по дереву items и создаем мапы для быстрой работы с деревом.
export const usePathMaps = (items: MergedSelectProps['items']) => {
    const pathMap: PathMapType = new Map();
    const focusedToValueMap: FocusedToValueMapType = new Map();
    const valueToCheckedMap: ValueToCheckedMapType = new Map();
    const valueToItemMap: ValueToItemMapType = new Map();
    const valueToPathMap: ValueToPathMapType = new Map();

    pathMap.set('root', items?.length || 0);

    const rec = (items: MergedSelectProps['items'], prevIndex = '', path: string[] = []) => {
        items?.forEach((item: MergedDropdownNodeTransformed, index: number) => {
            const { value, items: innerItems } = item;

            const currIndex = `${prevIndex}/${index}`.replace(/^(\/)/, '');
            focusedToValueMap.set(currIndex, item);

            valueToCheckedMap.set(value, false);
            valueToPathMap.set(value.toString(), [...path, value.toString()]);

            if (isEmpty(innerItems) || !innerItems) {
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
