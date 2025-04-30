export type Langs = 'ru' | 'en';

export const needFullMonth = (format: string) => /M{3,4}/g.test(format);

export const getDateFormatDelimiter = (format?: string) => {
    if (!format) {
        return '';
    }

    const delimiter = format.match(/[^a-zA-Z0-9]/)?.[0];

    return delimiter ?? '';
};
