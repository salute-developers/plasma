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

export interface ColumnConfig {
    type: 'hours' | 'minutes' | 'seconds';
    values: string[];
    format: string;
    disabledValues?: (number | string)[];
}

export const getColumnsFromFormat = (format: string): ColumnConfig[] => {
    const parts = format.split(':');
    const columns: ColumnConfig[] = [];

    parts.forEach((part) => {
        switch (part) {
            case 'HH':
                columns.push({
                    type: 'hours',
                    values: range(24),
                    format: 'HH',
                });
                break;
            case 'mm':
                columns.push({
                    type: 'minutes',
                    values: range(60),
                    format: 'mm',
                });
                break;
            case 'ss':
                columns.push({
                    type: 'seconds',
                    values: range(60),
                    format: 'ss',
                });
                break;
            default:
        }
    });

    return columns;
};

export const parseTimeString = (timeString: string, format: string): TimeValues => {
    const timeParts = timeString.split(':');
    const formatParts = format.split(':');
    const result: TimeValues = { hh: null, mm: null, ss: null };

    formatParts.forEach((part, index) => {
        const value = timeParts[index] ? parseInt(timeParts[index], 10) : null;
        switch (part) {
            case 'HH':
                result.hh = value;
                break;
            case 'mm':
                result.mm = value;
                break;
            case 'ss':
                result.ss = value;
                break;
            default:
        }
    });

    return result;
};

export const buildTimeString = (timeValues: TimeValues, format: string): string => {
    const formatParts = format.split(':');
    return formatParts
        .map((part) => {
            switch (part) {
                case 'HH':
                    return timeValues.hh !== null ? timeValues.hh.toString().padStart(2, '0') : '00';
                case 'mm':
                    return timeValues.mm !== null ? timeValues.mm.toString().padStart(2, '0') : '00';
                case 'ss':
                    return timeValues.ss !== null ? timeValues.ss.toString().padStart(2, '0') : '00';
                default:
                    return '00';
            }
        })
        .join(':');
};

export const isTimeDisabled = (
    timeValues: TimeValues,
    min?: string | Date,
    max?: string | Date,
    format?: string,
): boolean => {
    if (!min && !max) return false;

    if (timeValues.hh === null || timeValues.mm === null || timeValues.ss === null) {
        return false;
    }

    const totalSeconds = timeValues.hh * 3600 + timeValues.mm * 60 + timeValues.ss;

    let minSeconds = 0;
    let maxSeconds = 23 * 3600 + 59 * 60 + 59;

    if (min) {
        if (min instanceof Date) {
            minSeconds = min.getHours() * 3600 + min.getMinutes() * 60 + min.getSeconds();
        } else {
            const minTime = parseTimeString(min, format ?? 'HH:mm:ss');
            minSeconds = (minTime.hh || 0) * 3600 + (minTime.mm || 0) * 60 + (minTime.ss || 0);
        }
    }

    if (max) {
        if (max instanceof Date) {
            maxSeconds = max.getHours() * 3600 + max.getMinutes() * 60 + max.getSeconds();
        } else {
            const maxTime = parseTimeString(max, format ?? 'HH:mm:ss');
            maxSeconds = (maxTime.hh || 0) * 3600 + (maxTime.mm || 0) * 60 + (maxTime.ss || 0);
        }
    }

    return totalSeconds < minSeconds || totalSeconds > maxSeconds;
};

export const delimiter = ':';

export const range = (number: number, padLength = 2): string[] => {
    return Array.from({ length: number }, (_, i) => i.toString().padStart(padLength, '0'));
};

export const animateScrollTo = (element: HTMLDivElement, targetScrollTop: number, duration = 300): void => {
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
