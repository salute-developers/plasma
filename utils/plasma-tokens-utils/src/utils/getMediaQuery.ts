export const getMediaQuery = (from?: number, to?: number) => {
    if (from && !to) {
        return `@media (max-width: ${from}px)`;
    }

    if (from && to) {
        return `@media (min-width: ${from}px) and (max-width: ${to}px)`;
    }

    if (!from && to) {
        return `@media (min-width: ${to}px)`;
    }

    return '';
};
