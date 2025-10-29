// Blazing-fast хелпер для глубокого копирования объектов.
// Ссылки на функции (React-компоненты) сохраняются.
export const deepCopy = <T>(obj: T): T => {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    if (Array.isArray(obj)) {
        return (obj.map((item) => deepCopy(item)) as unknown) as T;
    }

    if (
        (obj as any).$$typeof === Symbol.for('react.element') ||
        (obj as any).$$typeof === Symbol.for('react.fragment') ||
        typeof (obj as any)?.$$typeof === 'symbol'
    ) {
        return obj;
    }

    return Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, deepCopy(value)])) as T;
};
