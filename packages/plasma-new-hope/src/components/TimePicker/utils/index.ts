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

export const range = (number: number, padLength = 2): string[] => {
    return Array.from({ length: number }, (_, i) => i.toString().padStart(padLength, '0'));
};

export const normalizeTimeSegment = (type: 'HH' | 'mm' | 'ss', input: string): NormalizedSegment => {
    const max = type === 'HH' ? 23 : 59;
    const digits = input.replace(/\D/g, '');

    if (!digits) return { text: '', value: null, carryover: '' };

    if (digits.length === 1) {
        const num = parseInt(digits, 10);

        if (Math.floor(max / 10) < num) {
            return {
                text: num.toString().padStart(2, '0'),
                value: num,
                carryover: '',
            };
        }
        if (num <= max) {
            return {
                text: digits,
                value: num,
                carryover: '',
            };
        }

        return {
            text: max.toString().padStart(2, '0'),
            value: max,
            carryover: '',
        };
    }

    const number = parseInt(digits, 10);
    if (Number.isNaN(number)) return { text: '', value: null, carryover: '' };

    if (number <= max) {
        return {
            text: digits.padStart(2, '0'),
            value: number,
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
    format: 'HH:mm' | 'HH:mm:ss' = 'HH:mm:ss',
    cursorPosition: number | null,
): { innerString: string; values: TimeValues; newCursorPosition: number | null } => {
    const digits = input.replace(/\D/g, '');
    const tokens = format.split(':') as ('HH' | 'mm' | 'ss')[];

    const values: TimeValues = { hh: null, mm: null, ss: null };
    const segments: string[] = [];
    let digitIndex = 0;
    let carryover = '';
    let newCursorPosition = cursorPosition ?? 0;

    tokens.forEach((token, index) => {
        let segmentDigits = digits.slice(digitIndex, digitIndex + 2);
        digitIndex += segmentDigits.length;

        if (carryover) {
            segmentDigits = carryover + segmentDigits;
            carryover = '';
        }

        const normalized = normalizeTimeSegment(token, segmentDigits);
        carryover = normalized.carryover;

        values[token.toLowerCase() as keyof TimeValues] = normalized.value;
        segments.push(normalized.text);

        if (carryover && index === tokens.length - 1) {
            carryover = '';
        }
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

export const animateScrollTo = (element: HTMLDivElement, targetScrollTop: number, duration = 300) => {
    const startScrollTop = element.scrollTop;
    const distance = targetScrollTop - startScrollTop;
    let startTime: number | null = null;

    const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);

        const easeOut = (t: number) => 1 - (1 - t) ** 3;
        const scrollPosition = startScrollTop + distance * easeOut(progress);

        element.scrollTop = scrollPosition;

        if (timeElapsed < duration) {
            requestAnimationFrame(animate);
        }
    };

    requestAnimationFrame(animate);
};
