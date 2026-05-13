import type { ItemOptionTransformed } from '../ui/Inner/ui/Item/Item.types';
import type { ValueToCheckedMapType } from '../hooks/getPathMaps';

export const updateAncestors = (node: ItemOptionTransformed, checkedMap: ValueToCheckedMapType) => {
    if (!node?.parent) {
        return;
    }

    const { parent } = node;
    const siblings = parent.items!;
    const siblingsLength = siblings.length;
    let checkedFromAllSiblings = 0;
    let isParentIndeterminate = false;

    siblings.forEach((sib) => {
        if (checkedMap.get(sib.value) === 'indeterminate') {
            isParentIndeterminate = true;
            return;
        }

        if (checkedMap.get(sib.value)) {
            checkedFromAllSiblings += 1;
        }
    });

    if (isParentIndeterminate || (checkedFromAllSiblings > 0 && checkedFromAllSiblings < siblingsLength)) {
        checkedMap.set(parent.value, 'indeterminate');
    } else if (checkedFromAllSiblings === 0) {
        checkedMap.set(parent.value, false);
    } else {
        checkedMap.set(parent.value, true);
    }

    updateAncestors(parent, checkedMap);
};
