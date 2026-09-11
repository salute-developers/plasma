import { formatHours12, isHours24Only, to12Hour, to24Hour } from '../../TimePickerGrid/utils';
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
    meridiem?: Meridiem;
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
): { values: TimeValues; segments: string[]; text: string; meridiem?: Meridiem } => {
    const digits = input.replace(/\D/g, '');
    const tokens = format.split(delimiter) as ('HH' | 'mm' | 'ss')[];

    const values: TimeValues = { hh: null, mm: null, ss: null };
    const segments: string[] = [];
    let digitIndex = 0;
    let meridiem: Meridiem | undefined;

    tokens.forEach((token) => {
        const segmentDigits = digits.slice(digitIndex, digitIndex + 2);
        digitIndex += segmentDigits.length;

        const normalized = token === 'HH' ? normalizeHours(segmentDigits) : normalizeTimeSegment(token, segmentDigits);

        if (token === 'HH') {
            meridiem = normalized.meridiem;
        }

        values[token.toLowerCase() as keyof TimeValues] = normalized.value;
        segments.push(normalized.text);
    });

    return { values, segments, text: segments.filter(Boolean).join(delimiter), meridiem };
};

/**
 * Не даёт курсору уехать за пределы отрисованного времени.
 */
const getCursorPosition = (cursorPosition: number, inputLength: number, timeLength: number): number => {
    if (inputLength > timeLength) {
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
        newCursorPosition: getCursorPosition(cursorPosition ?? 0, input.length, text.length),
    };
};

/**
 * AM/PM текущего значения. Пустое значение считаем как AM.
 */
export const getMeridiemFromTimeString = (timeString: string): Meridiem => {
    const hours = parseInt(timeString.split(delimiter)[0], 10);

    return Number.isNaN(hours) ? 'AM' : to12Hour(hours).meridiem;
};

/**
 * Текст поля из 24-часового значения: "13:30" → "01:30".
 * AM/PM в поле не текст, а `textAfter`, поэтому в строку не попадает.
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

    const rest = restSegments.length ? `${delimiter}${restSegments.join(delimiter)}` : '';

    return `${formatHours12(hours24).text}${rest}`;
};

/**
 * Нормализация часа в 12-часовом формате: 1–12.
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

    if (isHours24Only(num)) {
        const { text, meridiem } = formatHours12(num);

        return { text, value: Number(text), carryover: '', meridiem };
    }

    const clamped = Math.min(num, 12);

    return { text: clamped.toString().padStart(2, '0'), value: clamped, carryover: '' };
};

/**
 * Разбор ввода в 12-часовом формате. AM/PM с клавиатуры не вводится — только колонкой в списке.
 */
export const processTimeInput12 = (
    input: string,
    format: 'HH:mm' | 'HH:mm:ss',
    cursorPosition: number | null,
    currentMeridiem: Meridiem,
): {
    innerString: string;
    displayString: string;
    values: TimeValues;
    newCursorPosition: number | null;
} => {
    const { values, segments, text, meridiem } = parseTimeSegments(input, format, normalize12HourSegment);

    /**
     * Значение наружу всегда в 24-часовом формате
     */
    const innerSegments = [...segments];

    if (values.hh !== null) {
        values.hh = to24Hour(values.hh, meridiem ?? currentMeridiem);
        innerSegments[0] = values.hh.toString().padStart(2, '0');
    }

    return {
        innerString: innerSegments.filter(Boolean).join(delimiter),
        displayString: text,
        values,
        newCursorPosition: getCursorPosition(cursorPosition ?? 0, input.length, text.length),
    };
};
