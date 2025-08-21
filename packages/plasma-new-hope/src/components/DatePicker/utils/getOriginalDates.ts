import { customDayjs } from 'src/utils/datejs';
import type { DateType } from 'src/components/Calendar/Calendar.types';

const initialValueStructure = {
    isoDate: '',
    originalDate: undefined,
    formattedDate: '',
};

export const getOriginalDates = (value: string | DateType, lang?: string, format?: string) => {
    if (!value || !lang || !format) {
        return initialValueStructure;
    }

    customDayjs.locale(lang);

    if (value instanceof Date) {
        return {
            formattedDate: customDayjs(value).format(format),
            isoDate: new Date(value).toISOString(),
            originalDate: new Date(value),
        };
    }

    if (customDayjs(value, format).isValid()) {
        const isoDate = customDayjs(value, format).toISOString();
        const originalDate = customDayjs(value, format).toDate();
        const formattedDate = customDayjs(value, format).format(format);

        return { formattedDate, isoDate, originalDate };
    }

    return { ...initialValueStructure, formattedDate: value };
};
