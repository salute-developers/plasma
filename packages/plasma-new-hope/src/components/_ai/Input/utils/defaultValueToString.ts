export const defaultValueToString = (defaultValue: string | ReadonlyArray<string> | number | undefined): string => {
    if (typeof defaultValue === 'string') {
        return defaultValue;
    }

    if (typeof defaultValue === 'number') {
        return String(defaultValue);
    }

    if (Array.isArray(defaultValue)) {
        return defaultValue.join('');
    }

    return '';
};
