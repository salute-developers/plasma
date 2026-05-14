import type { ItemOption, ItemOptionTransformed } from '../Select.types';

// Проходимся по массиву items и добавляем в каждый item ключ parent, который ссылается на item родителя.
// Дает возможность прохода к корневому элементу (снизу вверх).
// На выходе получаем глубокую копию исходного массива items.
export const initialItemsTransform = (
    items: Array<ItemOption>,
    parent?: ItemOptionTransformed,
): Array<ItemOptionTransformed> => {
    if (!items || items.length === 0) {
        return [];
    }

    return [...items].map((item) => {
        const itemCopy: ItemOptionTransformed = {
            ...item,
            parent,
        };

        if (itemCopy.items) {
            itemCopy.items = initialItemsTransform(itemCopy.items, itemCopy);
        }

        return itemCopy;
    });
};
