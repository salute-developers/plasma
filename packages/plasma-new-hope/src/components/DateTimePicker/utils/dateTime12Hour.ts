import { needFullMonth } from 'src/components/DatePicker/utils/dateHelper';
import { formatHours12, isHours24Only, to24Hour } from 'src/components/TimePickerGrid/utils';
import type { Meridiem } from 'src/components/TimePickerGrid/utils';

type DateTimeFormats = {
    dateFormat: string;
    timeFormat: string;
    dateTimeSeparator: string;
};

const hoursToken = 'HH';

const isTimeLike = (text: string, timeFormat: string) =>
    text.length === timeFormat.length &&
    [...timeFormat].every((char, index) => (/[a-z]/i.test(char) ? /\d/.test(text[index]) : char === text[index]));

const getHoursIndex = (text: string, { dateFormat, timeFormat, dateTimeSeparator }: DateTimeFormats) => {
    const hoursOffset = timeFormat.indexOf(hoursToken);

    if (hoursOffset === -1) {
        return -1;
    }

    if (needFullMonth(dateFormat)) {
        const timeStart = text.length - timeFormat.length;
        const hasTime =
            text.slice(timeStart - dateTimeSeparator.length, timeStart) === dateTimeSeparator &&
            isTimeLike(text.slice(timeStart), timeFormat);

        return hasTime ? timeStart + hoursOffset : -1;
    }

    const index = dateFormat.length + dateTimeSeparator.length + hoursOffset;

    return /^\d{2}$/.test(text.slice(index, index + hoursToken.length)) ? index : -1;
};

const replaceHours = (text: string, index: number, hours: string) =>
    text.slice(0, index) + hours + text.slice(index + hoursToken.length);

/**
 * Текст поля в 12-часовом формате
 */
export const toDisplayDateTime = (
    value: string,
    formats: DateTimeFormats,
): { text: string; meridiem: Meridiem | null } => {
    const index = getHoursIndex(value, formats);
    const hours = index === -1 ? NaN : Number(value.slice(index, index + hoursToken.length));

    if (Number.isNaN(hours) || hours > 23) {
        return { text: value, meridiem: null };
    }

    const { text, meridiem } = formatHours12(hours);

    return { text: replaceHours(value, index, text), meridiem };
};

/**
 * Текст поля обратно в 24-часовой формат
 */
export const toValueDateTime = (text: string, meridiem: Meridiem, formats: DateTimeFormats): string => {
    const index = getHoursIndex(text, formats);
    const hours = index === -1 ? NaN : Number(text.slice(index, index + hoursToken.length));

    if (Number.isNaN(hours) || isHours24Only(hours) || hours > 23) {
        return text;
    }

    return replaceHours(text, index, to24Hour(hours, meridiem).toString().padStart(2, '0'));
};
