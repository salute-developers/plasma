import type { MergedDropdownNodeTransformed } from '../ui/Inner/ui/Item/Item.types';
import type { ValueToCheckedMapType } from '../hooks/usePathMaps';

export const updateSingleAncestors = (
    node: MergedDropdownNodeTransformed,
    checkedMap: ValueToCheckedMapType,
    type: boolean | 'done' | 'dot' | 'indeterminate',
) => {
    if (!node.parent) {
        return;
    }

    const { parent } = node;

    checkedMap.set(parent.value, type);

    updateSingleAncestors(parent, checkedMap, type);
};
