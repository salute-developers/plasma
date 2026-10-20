export const getPositiveInteger = (value: number, fallback: number) =>
    Number.isFinite(value) && value >= 1 ? Math.floor(value) : fallback;

export const getRatingValue = (value: number | null | undefined, count: number, fractions: number): number | null => {
    if (value === null || value === undefined || !Number.isFinite(value)) {
        return null;
    }

    return Math.round(Math.max(0, Math.min(count, value)) * fractions) / fractions;
};
