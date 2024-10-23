import { MergedDropdownNodeTransformed } from '../ui/Inner/ui/Item/Item.types';

// Проходимся по массиву items и добавляем в каждый item ключ parent, который ссылается на item родителя.
// Дает возможность прохода к корневому элементу (снизу вверх).
// На выходе получаем глубокую копию исходного массива items.
export const initialItemsTransform = (
    items: Array<MergedDropdownNodeTransformed>,
    parent?: MergedDropdownNodeTransformed,
): Array<MergedDropdownNodeTransformed> => {
    return [...items].map((item) => {
        const itemCopy = { ...item };

        itemCopy.parent = parent;

        if (itemCopy.items) {
            itemCopy.items = initialItemsTransform(itemCopy.items, itemCopy);
        }

        return itemCopy;
    });
};
