import { ItemOptionTransformed } from '../ui/Inner/ui/Item/Item.types';

// Проходимся по массиву items и добавляем в каждый item ключ parent, который ссылается на item родителя.
// Дает возможность прохода к корневому элементу (снизу вверх).
export const initialItemsTransform = (
    items: Array<ItemOptionTransformed>,
    parent?: ItemOptionTransformed,
): Array<ItemOptionTransformed> => {
    items.forEach((item) => {
        item.parent = parent;

        if (item.items) {
            item.items = initialItemsTransform(item.items, item);
        }
    });

    return items;
};
