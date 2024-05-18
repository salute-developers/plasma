import { useMemo } from 'react';

import { isEmpty } from '../../../utils';
import { SelectNewProps } from '../SelectNew.types';
import { ItemOptionTransformed } from '../elements/Inner/elements/Item/Item.types';

export type PathMapType = Map<string | number, number>;
export type FocusedToValueMapType = Map<string, ItemOptionTransformed>;

// Рекурсивно проходим по дереву items и создаем 3 мапы: мапу открытых путей, мапу фокусов и мапу выбранных элементов.
export const usePathMaps = (items: any, value: string | Array<string>, multiselect: boolean) => {
    return useMemo(() => {
        const pathMap: PathMapType = new Map();
        const focusedToValueMap: FocusedToValueMapType = new Map();
        const checkedMap: any = new Map();
        const valueToItemMap: any = new Map();

        pathMap.set('root', items.length);

        const rec = (items: SelectNewProps['items'], prevIndex = '') => {
            items.forEach((item: ItemOptionTransformed, index: number) => {
                const { value, items: innerItems } = item;

                const currIndex = `${prevIndex}/${index}`.replace(/^(\/)/, '');
                focusedToValueMap.set(currIndex, item);

                checkedMap.set(value, false);

                if (isEmpty(innerItems)) {
                    valueToItemMap.set(value, item);
                } else {
                    pathMap.set(value, innerItems.length);
                    rec(innerItems, currIndex);
                }
            });
        };
        rec(items);

        if (!isEmpty(value)) {
            // Сюда заходим, если пользователь передал value изначально. Надо определить какие из items будут выделены.

            if (multiselect && Array.isArray(value)) {
                // Проставляем чекбоксы в режиме мультиселекта

                const updateAncestors = (node: any) => {
                    if (!node?.parent) return;

                    const { parent } = node;
                    const siblings = parent.items;
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

                    if (
                        isParentIndeterminate ||
                        (checkedFromAllSiblings > 0 && checkedFromAllSiblings < siblingsLength)
                    ) {
                        checkedMap.set(parent.value, 'indeterminate');
                    } else if (checkedFromAllSiblings === 0) {
                        checkedMap.set(parent.value, false);
                    } else {
                        checkedMap.set(parent.value, true);
                    }

                    updateAncestors(parent);
                };

                const updateDescendants = (node: any, isChecked: boolean) => {
                    if (!node?.items) return;

                    node.items.forEach((item) => {
                        checkedMap.set(item.value, isChecked);

                        if (item.items) {
                            updateDescendants(item, isChecked);
                        }
                    });
                };

                value.forEach((val) => {
                    checkedMap.set(val, true);
                    updateDescendants(valueToItemMap.get(val), true);
                });
            } else {
                // Проставляем галочки в режиме single

                const updateSingleAncestors = (node: any, type) => {
                    if (!node.parent) return;

                    const { parent } = node;

                    checkedMap.set(parent.value, type);

                    updateSingleAncestors(parent, type);
                };

                checkedMap.set(value, 'done');
                updateSingleAncestors(valueToItemMap.get(value), 'dot');
            }
        }

        return [pathMap, focusedToValueMap, checkedMap, valueToItemMap] as [
            PathMapType,
            FocusedToValueMapType,
            any,
            any,
        ];
    }, [items]);
};
