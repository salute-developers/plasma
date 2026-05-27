import type { ItemOption } from '../Dropdown.types';

export const getVisibleItems = (items: ItemOption[]): ItemOption[] =>
    items.reduce<ItemOption[]>((acc, item) => {
        if (item.hidden) {
            return acc;
        }

        if (!item.items) {
            acc.push(item);

            return acc;
        }

        const visibleInnerItems = getVisibleItems(item.items);

        acc.push({
            ...item,
            items: visibleInnerItems.length ? visibleInnerItems : undefined,
        });

        return acc;
    }, []);
