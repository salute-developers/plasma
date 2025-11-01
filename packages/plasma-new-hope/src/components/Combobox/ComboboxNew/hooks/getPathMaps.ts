import { isEmpty } from 'src/utils';

import { ComboboxProps } from '../Combobox.types';
import { ItemOptionTransformed } from '../ui/Inner/ui/Item/Item.types';

export type PathMapType = Map<string, number>;
export type FocusedToValueMapType = Map<string, ItemOptionTransformed>;
export type ValueToCheckedMapType = Map<ItemOptionTransformed['value'], boolean | 'done' | 'dot' | 'indeterminate'>;
export type ValueToItemMapType = Map<ItemOptionTransformed['value'], ItemOptionTransformed>;
export type ValueToPathMapType = Map<string, string[]>;

export const getPathMap = (items: ComboboxProps['items']) => {
    const pathMap: PathMapType = new Map();
    const focusedToValueMap: FocusedToValueMapType = new Map();

    pathMap.set('root', items?.length || 0);

    const rec = (items: ComboboxProps['items'], prevIndex = '') => {
        items?.forEach((item: ItemOptionTransformed, index: number) => {
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
};

export const getTreeMaps = (items: ComboboxProps['items']) => {
    const valueToCheckedMap: ValueToCheckedMapType = new Map();
    const valueToItemMap: ValueToItemMapType = new Map();
    const valueToPathMap: ValueToPathMapType = new Map();

    const rec = (items: ComboboxProps['items'], prevIndex = '', path: string[] = []) => {
        items?.forEach((item: ItemOptionTransformed, index: number) => {
            const { value, items: innerItems } = item;

            const currIndex = `${prevIndex}/${index}`.replace(/^(\/)/, '');

            valueToCheckedMap.set(value, false);
            valueToPathMap.set(value.toString(), [...path, value.toString()]);

            if (isEmpty(innerItems) || !innerItems) {
                valueToItemMap.set(value, item);
            } else {
                rec(innerItems, currIndex, [...path, value.toString()]);
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
