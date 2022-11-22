export function isNonNullableValue<T>(value: T, deep = false): value is NonNullable<T> {
    if (!deep) {
        return value != null;
    }

    return Object.values(value as Record<string, unknown>).every((v) => v != null);
}
