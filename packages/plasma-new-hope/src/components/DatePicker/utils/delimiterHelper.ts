export const getDateFormatDelimiter = (format?: string) => {
    if (!format) {
        return '';
    }

    const delimiter = format.match(/[^a-zA-Z0-9]/)?.[0];

    return delimiter ?? '';
};
