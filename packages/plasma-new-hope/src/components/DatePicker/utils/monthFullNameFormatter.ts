export type Langs = 'ru' | 'en';

type MonthFormatLenghtValue = 'short' | 'full';

const monthFormatLenghtMap: Record<number, MonthFormatLenghtValue> = {
    3: 'short',
    4: 'full',
};

type FormatFullMonthNameArgs = {
    monthName: string;
    lang: Langs;
    monthFormatLenght: number;
};

const monthNames = {
    en: {
        full: [
            'january',
            'february',
            'march',
            'april',
            'may',
            'june',
            'july',
            'august',
            'september',
            'october',
            'november',
            'december',
        ],
        short: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'],
    },
    ru: {
        full: [
            'января',
            'февраля',
            'марта',
            'апреля',
            'мая',
            'июня',
            'июля',
            'августа',
            'сентября',
            'октября',
            'ноября',
            'декабря',
        ],
        short: ['янв', 'фев', 'мар', 'апр', 'май', 'июня', 'июля', 'авг', 'сент', 'окт', 'ноя', 'дек'],
    },
};

export const formatFullMonthName = ({ monthName, lang, monthFormatLenght }: FormatFullMonthNameArgs): string => {
    const normalizedInput = monthName.toLowerCase();
    const monthForm = monthFormatLenghtMap[monthFormatLenght];
    const allowedCharacter = monthNames[lang][monthForm].some((month) => month.startsWith(normalizedInput));

    if (allowedCharacter || monthName.length === 0) {
        return monthName;
    }

    return formatFullMonthName({ monthName: monthName.slice(0, -1), lang, monthFormatLenght });
};

export const checkFullMonthEntered = ({ monthName, lang, monthFormatLenght }: FormatFullMonthNameArgs) => {
    const normalizedInput = monthName.toLowerCase();
    const monthForm = monthFormatLenghtMap[monthFormatLenght];
    return monthNames[lang][monthForm].some((month) => month === normalizedInput);
};
