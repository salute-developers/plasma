import { customDayjs } from '../../../utils/datejs';
import { ValidateDateArgs } from '../DatePickerBase.types';

export type Langs = 'ru' | 'en';

type FormatInputValueArgs = {
    value?: Date | string;
    format?: string;
    lang?: Langs;
    hasMonthFullName?: boolean;
    isValidMonth?: boolean;
    isLengthEqual?: boolean;
};

export const formatInputValue = ({
    value,
    format,
    lang,
    hasMonthFullName,
    isValidMonth,
    isLengthEqual,
}: FormatInputValueArgs) => {
    if (!value || !lang) {
        return '';
    }

    if (hasMonthFullName && (!isValidMonth || !isLengthEqual)) {
        return String(value);
    }

    if (format && customDayjs(value, format, true).isValid()) {
        return customDayjs(value, format).locale(lang).format(format);
    }

    if (format && String(value).length >= 10 && String(new Date(value)) !== 'Invalid Date') {
        return customDayjs(value).locale(lang).format(format);
    }

    return String(value);
};

export const formatCalendarValue = (value?: Date | string, format?: string, lang?: Langs) => {
    if (!value || !lang) {
        return undefined;
    }

    if (format && customDayjs(value, format, true).isValid()) {
        return customDayjs(value, format, true).locale(lang).toDate();
    }

    if (String(new Date(value)) !== 'Invalid Date') {
        return customDayjs(value).locale(lang).toDate();
    }

    return undefined;
};

export const getDateFromFormat = (value: Date | string, format?: string, lang?: Langs) => {
    if (format && customDayjs(value, format, true).isValid() && lang) {
        return { value: customDayjs(value, format, true).locale(lang).toDate(), isError: false, isSuccess: true };
    }

    if (!format && String(new Date(value)) !== 'Invalid Date' && lang) {
        return { value: customDayjs(value).locale(lang).toDate(), isError: false, isSuccess: true };
    }

    return { value, isError: true, isSuccess: false };
};

export const getDateFormatDelimiter = (format?: string) => {
    if (!format) {
        return '';
    }

    const delimiter = format.match(/[^a-zA-Z0-9]/)?.[0];

    return delimiter ?? '';
};

export const getMaskedDateOnInput = (value?: string, format?: string, delimiter?: string, prevValue?: string) => {
    if (!value) {
        return '';
    }

    if (!format || !delimiter || /M{3,4}/g.test(format)) {
        return value;
    }

    if (value.length >= format.length) {
        return value.slice(0, format.length);
    }

    if (prevValue && value.length < prevValue.length && prevValue?.[value.length] === delimiter) {
        return value.slice(0, -1);
    }

    if (format?.[value.length] === delimiter) {
        return value + delimiter;
    }

    return value;
};

export const validateDateWithFullMonth = ({ currentValue, format, lang }: ValidateDateArgs) => {
    /**
     * NOTE: если в формате даты есть месяц в полном названии или сокращенном,
     * нужно дополнительно проводить валидацию на полноту введенной даты.
     * Иначе dayjs циклически будет пытаться отформатировать некорректную дату.
     */
    const hasMonthFullName = /M{3,4}/g.test(format);

    if (!hasMonthFullName) {
        return {
            hasMonthFullName,
            isValidMonth: false,
            isLengthEqual: false,
        };
    }

    customDayjs.locale(lang);

    const firstIndexOfMonth = format.indexOf('M');
    const lastIndexOfMonth = currentValue.indexOf(getDateFormatDelimiter(format), firstIndexOfMonth);

    const fullMonthName = !lastIndexOfMonth
        ? currentValue.slice(firstIndexOfMonth)
        : currentValue.slice(firstIndexOfMonth, lastIndexOfMonth);

    const monthFormatting = format.replace(/[^M]/g, '');

    const isValidMonth = customDayjs(`01 ${fullMonthName} 1970`, `DD ${monthFormatting} YYYY`, true).isValid();
    const isLengthEqual = format.length - monthFormatting.length === currentValue.length - fullMonthName.length;

    return {
        hasMonthFullName,
        isValidMonth,
        isLengthEqual,
    };
};
