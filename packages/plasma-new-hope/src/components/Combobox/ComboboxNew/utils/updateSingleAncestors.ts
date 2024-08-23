import type { ItemOptionTransformed } from '../ui/Inner/ui/Item/Item.types';
import type { ValueToCheckedMapType } from '../hooks/getPathMaps';

export const updateSingleAncestors = (
    node: ItemOptionTransformed,
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
