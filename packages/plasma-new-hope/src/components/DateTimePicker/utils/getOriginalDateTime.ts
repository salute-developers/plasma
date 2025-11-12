import { customDayjs } from 'src/utils/datejs';
import type { DateType } from 'src/components/Calendar/Calendar.types';

type GetOriginalDateTimeArgs = {
    value: string | DateType;
    lang?: string;
    fullFormat?: string;
    dateFormat?: string;
    timeFormat?: string;
    needFullMonth?: boolean;
};

type ValueStructure = {
    isoDate: string;
    formattedDate: string;
    originalDate: Date | undefined;
    dateValue: Date | undefined;
    timeValue: Date | undefined;
};

const initialValueStructure: ValueStructure = {
    isoDate: '',
    originalDate: undefined,
    dateValue: undefined,
    timeValue: undefined,
    formattedDate: '',
};

export const getOriginalDateTime = ({
    value,
    lang,
    fullFormat,
    dateFormat,
    timeFormat,
    needFullMonth,
}: GetOriginalDateTimeArgs) => {
    if (!value || !lang || !fullFormat) {
        return initialValueStructure;
    }

    customDayjs.locale(lang);

    if (value instanceof Date) {
        const currentDate = new Date(value);
        return {
            formattedDate: customDayjs(value).format(fullFormat),
            isoDate: currentDate.toISOString(),
            originalDate: currentDate,
            dateValue: currentDate,
            timeValue: currentDate,
        };
    }

    if (!needFullMonth && fullFormat.length !== String(value)?.length) {
        let baseValueStructure = { ...initialValueStructure, formattedDate: value };

        const rawDate = value.slice(0, dateFormat?.length);
        const rawTime = value.slice((dateFormat?.length || 0) + 1);

        if (dateFormat && customDayjs(rawDate, dateFormat, true).isValid()) {
            baseValueStructure = {
                ...baseValueStructure,
                dateValue: customDayjs(rawDate, dateFormat).toDate(),
            };
        }

        if (timeFormat && customDayjs(rawTime, timeFormat, true).isValid()) {
            baseValueStructure = {
                ...baseValueStructure,
                timeValue: customDayjs(value, fullFormat).toDate(),
            };
        }

        return baseValueStructure;
    }

    if (customDayjs(value, fullFormat).isValid()) {
        const isoDate = customDayjs(value, fullFormat).toISOString();
        const originalDate = customDayjs(value, fullFormat).toDate();
        const formattedDate = customDayjs(value, fullFormat).format(fullFormat);

        return { formattedDate, isoDate, originalDate, dateValue: originalDate, timeValue: originalDate };
    }

    return { ...initialValueStructure, formattedDate: value };
};
