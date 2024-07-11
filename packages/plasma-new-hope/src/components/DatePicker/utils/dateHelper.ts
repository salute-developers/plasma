import { customDayjs } from '../../../utils/datejs';

export const formatInputValue = (value?: Date | string, format?: string) => {
    if (!value) {
        return '';
    }

    if (format && customDayjs(value, format, true).isValid()) {
        return customDayjs(value, format).format(format);
    }

    if (format && String(value).length >= 10 && String(new Date(value)) !== 'Invalid Date') {
        return customDayjs(value).format(format);
    }

    return String(value);
};

export const formatCalendarValue = (value?: Date | string, format?: string) => {
    if (!value) {
        return undefined;
    }

    if (format && customDayjs(value, format, true).isValid()) {
        return customDayjs(value, format, true).toDate();
    }

    if (String(new Date(value)) !== 'Invalid Date') {
        return customDayjs(value).toDate();
    }

    return undefined;
};

export const getDateFromFormat = (value: Date | string, format?: string) => {
    if (format && customDayjs(value, format, true).isValid()) {
        return { value: customDayjs(value, format, true).toDate(), isError: false, isSuccess: true };
    }

    if (!format && String(new Date(value)) !== 'Invalid Date') {
        return { value: customDayjs(value).toDate(), isError: false, isSuccess: true };
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

    if (!format || !delimiter) {
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
