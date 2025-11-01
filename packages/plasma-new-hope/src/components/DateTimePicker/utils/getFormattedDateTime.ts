import type { DateType } from 'src/components/Calendar/Calendar.types';
import { Langs, needFullMonth } from 'src/components/DatePicker/utils/dateHelper';

import { getOriginalDateTime } from './getOriginalDateTime';
import { normalizeDateTime } from './normalizeDateTime';

type GetFormattedDateTimeArgs = {
    value: string | DateType;
    lang?: Langs;
    format?: string;
    dateFormat?: string;
    timeFormat?: string;
    includeEdgeDates?: boolean;
    min?: Date;
    max?: Date;
};

export const getFormattedDateTime = ({
    value,
    lang,
    format,
    dateFormat,
    timeFormat,
    includeEdgeDates,
    min,
    max,
}: GetFormattedDateTimeArgs) => {
    const withFullMonth = needFullMonth(format || '');

    const { formattedDate, isoDate, originalDate, timeValue, dateValue } = getOriginalDateTime({
        value,
        lang,
        fullFormat: format,
        dateFormat,
        timeFormat,
        needFullMonth: withFullMonth,
    });

    if (!originalDate) {
        const innerValue = format && (needFullMonth(format) ? formattedDate : formattedDate.slice(0, format.length));

        const result = {
            formattedDate: innerValue || '',
            isoDate,
            originalDate,
            timeValue,
            dateValue,
        };

        if (dateValue && !timeValue) {
            const { normalizedDate, formattedNormalizedDate } = normalizeDateTime({
                originalDate: dateValue,
                lang,
                format: dateFormat,
                includeEdgeDates,
                min,
                max,
            });

            const parsedNormalizedDate = formattedNormalizedDate + innerValue?.slice(formattedNormalizedDate.length);

            return {
                ...result,
                formattedDate: parsedNormalizedDate,
                dateValue: normalizedDate,
            };
        }

        return result;
    }

    const { normalizedDate, formattedNormalizedDate } = normalizeDateTime({
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
        timeValue: normalizedDate,
        dateValue: normalizedDate,
    };
};
