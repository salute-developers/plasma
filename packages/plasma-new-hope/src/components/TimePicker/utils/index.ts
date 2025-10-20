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

export const processTimeInput = (
    input: string,
    format: 'HH:mm' | 'HH:mm:ss',
    cursorPosition: number | null,
): { innerString: string; values: TimeValues; newCursorPosition: number | null } => {
    const digits = input.replace(/\D/g, '');
    const tokens = format.split(delimiter) as ('HH' | 'mm' | 'ss')[];

    const values: TimeValues = { hh: null, mm: null, ss: null };
    const segments: string[] = [];
    let digitIndex = 0;
    let newCursorPosition = cursorPosition ?? 0;

    tokens.forEach((token) => {
        const segmentDigits = digits.slice(digitIndex, digitIndex + 2);
        digitIndex += segmentDigits.length;

        const { text, value } = normalizeTimeSegment(token, segmentDigits);

        values[token.toLowerCase() as keyof TimeValues] = value;
        segments.push(text);
    });

    let innerString = segments[0];

    if (segments.length > 1 && segments[1]) {
        innerString += `:${segments[1]}`;
    }

    if (format === 'HH:mm:ss' && segments.length > 2 && segments[2]) {
        innerString += `:${segments[2]}`;
    }

    if (innerString.length - 2 <= newCursorPosition) {
        newCursorPosition += innerString.length - newCursorPosition;
    }

    return { innerString, values, newCursorPosition };
};
