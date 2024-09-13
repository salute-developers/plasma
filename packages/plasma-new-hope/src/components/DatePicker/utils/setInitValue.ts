export const setInitValue = (e: Event): string => {
    const item = e.target as HTMLInputElement;
    const defaultValue = String(item.getAttribute('defaultValue'));

    return defaultValue;
};
