import { customDayjs } from 'src/utils/datejs';

import type { Langs } from './dateHelper';

type NormalizeDatesArgs = {
    originalDate: Date;
    lang?: Langs;
    includeEdgeDates?: boolean;
    format?: string;
    min?: Date;
    max?: Date;
};

export const normalizeDates = ({ originalDate, lang, format, includeEdgeDates, min, max }: NormalizeDatesArgs) => {
    let dateCandidate = originalDate;

    customDayjs.locale(lang);

    if (min && includeEdgeDates && min > originalDate) {
        dateCandidate = min;
    }

    if (min && !includeEdgeDates && min >= originalDate) {
        dateCandidate = customDayjs(min).add(1, 'd').toDate();
    }

    if (max && includeEdgeDates && max < originalDate) {
        dateCandidate = max;
    }

    if (max && !includeEdgeDates && max <= originalDate) {
        dateCandidate = customDayjs(max).subtract(1, 'd').toDate();
    }

    const formattedDateCandidate = format ? customDayjs(dateCandidate).format(format) : dateCandidate.toString();

    return {
        normalizedDate: dateCandidate,
        formattedNormalizedDate: formattedDateCandidate,
    };
};
