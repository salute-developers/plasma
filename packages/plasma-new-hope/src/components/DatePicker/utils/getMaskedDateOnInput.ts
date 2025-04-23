import { needFullMonth } from './dateHelper';

export const getMaskedDateOnInput = (value?: string, format?: string, delimiter?: string, prevValue?: string) => {
    if (!value) {
        return '';
    }

    if (!format || !delimiter || needFullMonth(format)) {
        return value;
    }

    const dateRegExp = new RegExp(`[^0-9${delimiter}]`, 'g');
    const formattedValue = value.replace(dateRegExp, '');

    if (formattedValue.length >= format.length) {
        return formattedValue.slice(0, format.length);
    }

    if (prevValue && formattedValue.length < prevValue.length && prevValue?.[formattedValue.length] === delimiter) {
        return formattedValue.slice(0, -1);
    }

    if (format?.[formattedValue.length] === delimiter) {
        return formattedValue + delimiter;
    }

    return formattedValue;
};
