import type { MergedDropdownNodeTransformed } from '../ui/Inner/ui/Item/Item.types';
import type { ValueToCheckedMapType } from '../hooks/usePathMaps';

export const updateDescendants = (
    node: MergedDropdownNodeTransformed,
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
