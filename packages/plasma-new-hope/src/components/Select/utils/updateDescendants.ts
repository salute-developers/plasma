import type { MergedDropdownNodeTransformed } from '../ui/Inner/ui/Item/Item.types';
import type { ValueToCheckedMapType, ValueToItemMapType } from '../hooks/usePathMaps';

export const updateDescendants = (
    node: MergedDropdownNodeTransformed,
    checkedMap: ValueToCheckedMapType,
    isChecked: boolean,
    valueToItemMap?: ValueToItemMapType,
) => {
    if (!node?.items) {
        return;
    }

    node.items.forEach((item) => {
        if (!valueToItemMap?.get(item.value)?.disabled) {
            checkedMap.set(item.value, isChecked);
        }

        if (item.items) {
            updateDescendants(item, checkedMap, isChecked, valueToItemMap);
        }
    });
};
