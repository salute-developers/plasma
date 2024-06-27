import { isEmpty } from '../../../utils';
import { SelectProps } from '../Select.types';
import { ItemOptionTransformed } from '../ui/Inner/ui/Item/Item.types';

export type PathMapType = Map<string | number, number>;
export type FocusedToValueMapType = Map<string, ItemOptionTransformed>;
export type ValueToCheckedMapType = Map<ItemOptionTransformed['value'], boolean | 'done' | 'dot' | 'indeterminate'>;
export type ValueToItemMapType = Map<ItemOptionTransformed['value'], ItemOptionTransformed>;

// Рекурсивно проходим по дереву items и создаем 4 мапы: открытых путей, фокусов, выбранных элементов и айтемов.
export const usePathMaps = (items: SelectProps['items']) => {
    const pathMap: PathMapType = new Map();
    const focusedToValueMap: FocusedToValueMapType = new Map();
    const valueToCheckedMap: ValueToCheckedMapType = new Map();
    const valueToItemMap: ValueToItemMapType = new Map();

    pathMap.set('root', items.length);

    const rec = (items: SelectProps['items'], prevIndex = '') => {
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

    return [pathMap, focusedToValueMap, valueToCheckedMap, valueToItemMap] as [
        PathMapType,
        FocusedToValueMapType,
        ValueToCheckedMapType,
        ValueToItemMapType,
    ];
};
