import { to12Hour, to24Hour } from '../../TimePickerGrid/utils';
import type { Meridiem } from '../../TimePickerGrid/utils';

export interface TimeValues {
    hh: number | null;
    mm: number | null;
    ss: number | null;
}

export interface NormalizedSegment {
    text: string;
    value: number | null;
    carryover: string;
}

export const delimiter = ':';

export const range = (number: number, padLength = 2): string[] => {
    return Array.from({ length: number }, (_, i) => i.toString().padStart(padLength, '0'));
};

export const normalizeTimeSegment = (type: 'HH' | 'mm' | 'ss', input: string): NormalizedSegment => {
    const max = type === 'HH' ? 23 : 59;
    const digits = input.replace(/\D/g, '');

    const num = parseInt(digits, 10);

    if (!digits) {
        return { text: '', value: null, carryover: '' };
    }

    if (Math.floor(max / 10) < num && digits.length === 1) {
        return {
            text: num.toString().padStart(2, '0'),
            value: num,
            carryover: '',
        };
    }

    if (num <= max && digits.length === 1) {
        return {
            text: digits,
            value: num,
            carryover: '',
        };
    }

    if (digits.length === 1) {
        return {
            text: max.toString().padStart(2, '0'),
            value: max,
            carryover: '',
        };
    }

    if (Number.isNaN(num)) {
        return { text: '', value: null, carryover: '' };
    }

    if (num <= max) {
        return {
            text: digits.padStart(2, '0'),
            value: num,
            carryover: '',
        };
    }

    const firstDigit = parseInt(digits[0], 10);
    const secondDigit = parseInt(digits[1], 10);

    if (firstDigit <= max) {
        return {
            text: firstDigit.toString().padStart(2, '0'),
            value: firstDigit,
            carryover: secondDigit.toString(),
        };
    }

    return {
        text: max.toString().padStart(2, '0'),
        value: max,
        carryover: digits.slice(1),
    };
};

const parseTimeSegments = (
    input: string,
    format: 'HH:mm' | 'HH:mm:ss',
    normalizeHours: (segment: string) => NormalizedSegment = (segment) => normalizeTimeSegment('HH', segment),
): { values: TimeValues; segments: string[]; text: string } => {
    const digits = input.replace(/\D/g, '');
    const tokens = format.split(delimiter) as ('HH' | 'mm' | 'ss')[];

    const values: TimeValues = { hh: null, mm: null, ss: null };
    const segments: string[] = [];
    let digitIndex = 0;

    tokens.forEach((token) => {
        const segmentDigits = digits.slice(digitIndex, digitIndex + 2);
        digitIndex += segmentDigits.length;

        const { text, value } =
            token === 'HH' ? normalizeHours(segmentDigits) : normalizeTimeSegment(token, segmentDigits);

        values[token.toLowerCase() as keyof TimeValues] = value;
        segments.push(text);
    });

    return { values, segments, text: segments.filter(Boolean).join(delimiter) };
};

/**
 * Не даёт курсору уехать за пределы отрисованного времени.
 * `renderedLength` — длина всего текста поля, `timeLength` — только его временной части.
 */
const getCursorPosition = (
    cursorPosition: number,
    inputLength: number,
    renderedLength: number,
    timeLength: number,
): number => {
    if (inputLength > renderedLength) {
        return Math.min(cursorPosition, timeLength);
    }

    return timeLength - 2 <= cursorPosition ? timeLength : cursorPosition;
};

export const processTimeInput = (
    input: string,
    format: 'HH:mm' | 'HH:mm:ss',
    cursorPosition: number | null,
): { innerString: string; values: TimeValues; newCursorPosition: number | null } => {
    const { values, text } = parseTimeSegments(input, format);

    return {
        innerString: text,
        values,
        newCursorPosition: getCursorPosition(cursorPosition ?? 0, input.length, text.length, text.length),
    };
};

const meridiemSeparator = ' ';

/**
 * AM/PM текущего значения. Пустое значение считаем как AM.
 */
export const getMeridiemFromTimeString = (timeString: string): Meridiem => {
    const hours = parseInt(timeString.split(delimiter)[0], 10);

    return Number.isNaN(hours) ? 'AM' : to12Hour(hours).meridiem;
};

/**
 * Текст поля из 24-часового значения: "13:30" → "01:30 PM".
 */
export const formatTo12Hour = (timeString: string): string => {
    if (!timeString) {
        return '';
    }

    const [hoursSegment, ...restSegments] = timeString.split(delimiter);
    const hours24 = parseInt(hoursSegment, 10);

    if (Number.isNaN(hours24)) {
        return timeString;
    }

    const { hour12, meridiem } = to12Hour(hours24);
    const rest = restSegments.length ? `${delimiter}${restSegments.join(delimiter)}` : '';

    return `${hour12.toString().padStart(2, '0')}${rest}${meridiemSeparator}${meridiem}`;
};

/**
 * Заполнены ли все сегменты формата: "01:30" при 'HH:mm' — да, "01:3" — нет.
 */
export const isTimeComplete = (timeString: string, format: 'HH:mm' | 'HH:mm:ss'): boolean => {
    const segments = timeString.split(delimiter);

    return segments.length === format.split(delimiter).length && segments.every((segment) => segment.length === 2);
};

/**
 * Нормализация часа в 12-часовом формате: 0–11.
 */
export const normalize12HourSegment = (input: string): NormalizedSegment => {
    const digits = input.replace(/\D/g, '');
    const num = parseInt(digits, 10);

    if (!digits || Number.isNaN(num)) {
        return { text: '', value: null, carryover: '' };
    }

    if (digits.length === 1) {
        if (num <= 1) {
            return { text: digits, value: num, carryover: '' };
        }

        return { text: num.toString().padStart(2, '0'), value: num, carryover: '' };
    }

    const clamped = Math.min(num, 11);

    return { text: clamped.toString().padStart(2, '0'), value: clamped, carryover: '' };
};

type MeridiemEdit = { type: 'typed'; meridiem: Meridiem } | { type: 'removed' } | null;

/**
 * Разбирает, что пользователь сделал с AM/PM: набрал, стёр показанный суффикс или не трогал.
 */
export const getMeridiemEdit = (input: string, currentMeridiem: Meridiem, isMeridiemSet: boolean): MeridiemEdit => {
    const letters = input.replace(/[^a-z]/gi, '');

    if (isMeridiemSet && letters !== currentMeridiem && currentMeridiem.startsWith(letters)) {
        return { type: 'removed' };
    }

    const [marker] = letters.replace(currentMeridiem, '').match(/[ap]/i) || [];

    if (!marker) {
        return null;
    }

    return { type: 'typed', meridiem: marker.toLowerCase() === 'p' ? 'PM' : 'AM' };
};

/**
 * Разбор ввода в 12-часовом формате.
 */
export const processTimeInput12 = (
    input: string,
    format: 'HH:mm' | 'HH:mm:ss',
    cursorPosition: number | null,
    currentMeridiem: Meridiem,
    isMeridiemSet: boolean,
): {
    innerString: string;
    displayString: string;
    values: TimeValues;
    isMeridiemSet: boolean;
    newCursorPosition: number | null;
} => {
    const edit = getMeridiemEdit(input, currentMeridiem, isMeridiemSet);
    const typedMeridiem = edit?.type === 'typed' ? edit.meridiem : null;
    const nextIsMeridiemSet = edit === null ? isMeridiemSet : edit.type === 'typed';

    /**
     * Стирание суффикса не меняет значение
     */
    const meridiem = typedMeridiem || currentMeridiem;

    const { values, segments, text } = parseTimeSegments(input, format, normalize12HourSegment);

    /**
     * Значение наружу всегда в 24-часовом формате
     */
    const innerSegments = [...segments];

    if (values.hh !== null) {
        values.hh = to24Hour(values.hh, meridiem);
        innerSegments[0] = values.hh.toString().padStart(2, '0');
    }

    const showMeridiem = Boolean(text) && nextIsMeridiemSet;
    const displayString = showMeridiem ? `${text}${meridiemSeparator}${meridiem}` : text;

    return {
        innerString: innerSegments.filter(Boolean).join(delimiter),
        displayString,
        values,
        isMeridiemSet: showMeridiem,
        /**
         * Набранный AM/PM оставляет курсор в конце, за суффиксом
         */
        newCursorPosition: typedMeridiem
            ? displayString.length
            : getCursorPosition(cursorPosition ?? 0, input.length, displayString.length, text.length),
    };
};
