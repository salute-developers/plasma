/**
 * Функция глубокого копирования дерева элементов.
 * Копируются лишь объекты из массива children.
 */
export const deepCopy = <T>(obj: T): T => {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    if (Array.isArray(obj)) {
        return (obj.map((item) => deepCopy(item)) as unknown) as T;
    }

    return Object.fromEntries(
        Object.entries(obj).map(([key, value]) => (key === 'children' ? [key, deepCopy(value)] : [key, value])),
    ) as T;
};
