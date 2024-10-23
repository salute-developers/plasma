import { MergedDropdownNodeTransformed } from '../ui/Inner/ui/Item/Item.types';

// Проходимся по массиву items и добавляем в каждый item ключ parent, который ссылается на item родителя.
// Дает возможность прохода к корневому элементу (снизу вверх).
// На выходе получаем глубокую копию исходного массива items.
export const initialItemsTransform = (
    items: Array<MergedDropdownNodeTransformed>,
    parent?: MergedDropdownNodeTransformed,
): Array<MergedDropdownNodeTransformed> => {
    const newItems = [...items];

    newItems.forEach((item) => {
        const newItem = { ...item };

        newItem.parent = parent;

        if (item.items) {
            item.items = initialItemsTransform(item.items, item);
        }
    });

    return newItems;
};
