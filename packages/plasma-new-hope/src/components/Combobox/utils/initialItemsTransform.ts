import { ItemOptionTransformed } from '../ui/Inner/ui/Item/Item.types';

// Проходимся по массиву items и добавляем в каждый item ключ parent, который ссылается на item родителя.
// Дает возможность прохода к корневому элементу (снизу вверх).
// На выходе получаем глубокую копию исходного массива items.
export const initialItemsTransform = (
    items: Array<ItemOptionTransformed>,
    parent?: ItemOptionTransformed,
): Array<ItemOptionTransformed> => {
    return [...items].map((item) => {
        const itemCopy = { ...item };

        itemCopy.parent = parent;

        if (itemCopy.items) {
            itemCopy.items = initialItemsTransform(itemCopy.items, itemCopy);
        }

        return itemCopy;
    });
};
