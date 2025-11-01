import type { Langs } from 'src/components/DatePicker/utils/dateHelper';
import { customDayjs } from 'src/utils/datejs';

type NormalizeDatesArgs = {
    originalDate: Date;
    lang?: Langs;
    includeEdgeDates?: boolean;
    format?: string;
    min?: Date;
    max?: Date;
};

export const normalizeDateTime = ({ originalDate, lang, format, includeEdgeDates, min, max }: NormalizeDatesArgs) => {
    let dateCandidate = originalDate;

    customDayjs.locale(lang);

    if (min && includeEdgeDates && min > originalDate) {
        dateCandidate = min;
    } else if (min && !includeEdgeDates && min >= originalDate) {
        dateCandidate = customDayjs(min).add(1, 's').toDate();
    } else if (max && includeEdgeDates && max < originalDate) {
        dateCandidate = max;
    } else if (max && !includeEdgeDates && max <= originalDate) {
        dateCandidate = customDayjs(max).subtract(1, 's').toDate();
    }

    const formattedDateCandidate = format ? customDayjs(dateCandidate).format(format) : dateCandidate.toString();

    return {
        normalizedDate: dateCandidate,
        formattedNormalizedDate: formattedDateCandidate,
    };
};
