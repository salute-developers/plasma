import { needFullMonth } from './dateHelper';
import type { Langs } from './dateHelper';
import { getOriginalDates } from './getOriginalDates';
import { normalizeDates } from './normalizeDates';

type GetFormattedDatesArgs = {
    value: Date | string | null;
    delimiter: string;
    lang?: Langs;
    format?: string;
    includeEdgeDates?: boolean;
    min?: Date;
    max?: Date;
};

export const getFormattedDates = ({ value, lang, format, includeEdgeDates, min, max }: GetFormattedDatesArgs) => {
    const { formattedDate, isoDate, originalDate } = getOriginalDates(value, lang, format);

    if (!originalDate) {
        const innerValue = format && (needFullMonth(format) ? formattedDate : formattedDate.slice(0, format.length));

        return {
            formattedDate: innerValue || '',
            isoDate,
            originalDate,
        };
    }

    const { normalizedDate, formattedNormalizedDate } = normalizeDates({
        originalDate,
        lang,
        format,
        includeEdgeDates,
        min,
        max,
    });

    return {
        formattedDate: formattedNormalizedDate,
        isoDate: normalizedDate.toISOString(),
        originalDate: normalizedDate,
    };
};
