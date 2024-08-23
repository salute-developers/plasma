import { ItemOptionTransformed } from '../ui/Inner/ui/Item/Item.types';

// Утилита, возвращающая отфильтрованное дерево items.
// Фильтрация происходит как по названиям категорий, так и по названиям конечных элементов.
// По дефолту регистр игнорируется. Но можно прокинуть свою функцию для кастомной фильтрации.
// Фильтрация отключается в 2 случаях:
//   1) При пустом инпуте (юзер пока еще не ввел значение или уже очистил);
//   2) Если значение инпута совпадает с выбранным элементом (когда юзер выбрал айтем, но потом решил снова открыть);
// Не мутирует исходные данные.
export const filterItems = (
    items: Array<ItemOptionTransformed>,
    textValue: string,
    currentLabel: string,
    customFilter?: (label: string, value: string) => boolean,
): Array<ItemOptionTransformed> => {
    if (!textValue || textValue === currentLabel) return items;

    const defaultFilter = (label: string, value: string) => label.toLowerCase().includes(value.toLowerCase());

    const filter = customFilter || defaultFilter;

    const dfs = (items: Array<ItemOptionTransformed>) => {
        const newItems: Array<ItemOptionTransformed> = [];

        items.forEach((item) => {
            if (item.items) {
                if (filter(item.label, textValue)) {
                    newItems.push(item);
                    return;
                }

                const res = dfs(item.items);

                if (res.length > 0) {
                    newItems.push({ ...item, items: res });
                }
            } else if (filter(item.label, textValue)) {
                newItems.push(item);
            }
        });

        return newItems;
    };
    dfs(items);

    return dfs(items);
};
