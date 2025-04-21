const formattedConfigDefault = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
};

export const getFormattedDate = ({
    date,
    config = formattedConfigDefault,
    locale = 'ru-RU',
}: {
    date: string;
    config?: any;
    locale?: string;
}) => {
    if (!date) {
        return null;
    }

    const formatted = new Date(date).toLocaleDateString(locale, config);

    return formatted.replace('г.', '');
};
