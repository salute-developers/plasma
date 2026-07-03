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

export const getColumnsFromFormat = (
    format: string,
    multiplicityMinutes?: number,
    multiplicitySeconds?: number,
): ColumnConfig[] => {
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
                    values: range(60, 2, multiplicityMinutes ?? 1),
                    format: 'mm',
                });
                break;
            case 'ss':
                columns.push({
                    type: 'seconds',
                    values: range(60, 2, multiplicitySeconds ?? 1),
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

export const range = (number: number, padLength = 2, step = 1): string[] => {
    if (step > number) step = number;
    return Array.from({ length: Math.ceil(number / step) }, (_, i) => (i * step).toString().padStart(padLength, '0'));
};

export const roundToMultiplicity = (value: number, step?: number): number => {
    if (!step || step <= 1) return value;
    return Math.round(value / step) * step;
};

/**
 * Разбирает границу времени (min/max) в объект TimeValues.
 * Принимает строку в формате HH:mm / HH:mm:ss или объект Date.
 */
export const parseTimeBoundary = (val: string | Date | undefined, format: string): TimeValues | null => {
    if (!val) {
        return null;
    }

    if (val instanceof Date) {
        return { hh: val.getHours(), mm: val.getMinutes(), ss: val.getSeconds() };
    }

    return parseTimeString(val, format);
};

/**
 * Переводит TimeValues в количество секунд с начала суток.
 * null-значения трактуются как 0.
 */
export const toTotalSeconds = (timeValues: TimeValues): number =>
    (timeValues.hh ?? 0) * 3600 + (timeValues.mm ?? 0) * 60 + (timeValues.ss ?? 0);

/**
 * Прижимает время к нижней границе (min) с учётом кратности.
 *
 *  1. При выборе часа корректируем минуты до ближайшей кратной ≥ min.mm.
 *     Если кратная ≥ 60 — оставляем как есть; isTimeDisabled отклонит клик.
 *  2. Если итоговое время всё ещё < min — корректируем секунды до ближайшей кратной ≥ min.ss.
 *     При переполнении секунд (clamped ≥ 60) переходим на следующую кратную минуту с ss=0.
 *     Если и nextMM ≥ 60 — isTimeDisabled отклонит клик.
 */
export const clampTimeToMin = (
    timeValues: TimeValues,
    minParsed: TimeValues,
    column: 'hours' | 'minutes',
    activeFormat: string,
    multiplicityMinutes = 1,
    multiplicitySeconds = 1,
): TimeValues => {
    const result = { ...timeValues };

    /**
     * Корректируем минуты (только при выборе часа)
     */
    if (column === 'hours' && activeFormat.includes('mm')) {
        const clamped = Math.ceil((minParsed.mm ?? 0) / multiplicityMinutes) * multiplicityMinutes;
        if (clamped < 60) {
            result.mm = clamped;
        }
    }

    /**
     * Корректируем секунды
     */
    if (!activeFormat.includes('ss') || toTotalSeconds(result) >= toTotalSeconds(minParsed)) {
        return result;
    }

    const clampedSS = Math.ceil((minParsed.ss ?? 0) / multiplicitySeconds) * multiplicitySeconds;

    if (clampedSS < 60) {
        result.ss = clampedSS;
        return result;
    }

    /**
     * Переполнение секунд: переходим на следующую кратную минуту, ss → 0
     */
    const nextMM = (result.mm ?? 0) + multiplicityMinutes;
    if (nextMM < 60) {
        result.mm = nextMM;
        result.ss = 0;
    }

    return result;
};

/**
 * Прижимает время к верхней границе (max) с учётом кратности.
 *
 *  1. При выборе часа корректируем минуты до ближайшей кратной ≤ max.mm.
 *  2. Если итоговое время всё ещё > max — корректируем секунды до ближайшей кратной ≤ max.ss.
 */
export const clampTimeToMax = (
    timeValues: TimeValues,
    maxParsed: TimeValues,
    column: 'hours' | 'minutes',
    activeFormat: string,
    multiplicityMinutes = 1,
    multiplicitySeconds = 1,
): TimeValues => {
    const result = { ...timeValues };

    /**
     * Корректируем минуты (только при выборе часа)
     */
    if (column === 'hours' && activeFormat.includes('mm')) {
        result.mm = Math.floor((maxParsed.mm ?? 0) / multiplicityMinutes) * multiplicityMinutes;
    }

    /**
     * Корректируем секунды
     */
    if (!activeFormat.includes('ss') || toTotalSeconds(result) <= toTotalSeconds(maxParsed)) {
        return result;
    }

    result.ss = Math.floor((maxParsed.ss ?? 0) / multiplicitySeconds) * multiplicitySeconds;

    return result;
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
