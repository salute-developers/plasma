import type { ItemOptionTransformed } from '../ui/Inner/ui/Item/Item.types';
import type { ValueToCheckedMapType } from '../hooks/getPathMaps';

export const updateDescendants = (
    node: ItemOptionTransformed,
    checkedMap: ValueToCheckedMapType,
    isChecked: boolean,
) => {
    if (!node?.items) {
        return;
    }

    node.items.forEach((item) => {
        checkedMap.set(item.value, isChecked);

        if (item.items) {
            updateDescendants(item, checkedMap, isChecked);
        }
    });
};
