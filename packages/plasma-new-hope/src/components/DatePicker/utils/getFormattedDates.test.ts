import { describe, expect, it } from 'vitest';

import { getFormattedDates } from './getFormattedDates';

const base = { delimiter: '.', lang: 'ru' as const, format: 'DD.MM.YYYY' };

describe('getFormattedDates', () => {
    it('returns the formatted value, ISO and date for a valid string', () => {
        const date = new Date(2023, 5, 14);

        expect(getFormattedDates({ ...base, value: '14.06.2023' })).toEqual({
            formattedDate: '14.06.2023',
            isoDate: date.toISOString(),
            originalDate: date,
        });
    });

    it('formats a Date value', () => {
        expect(getFormattedDates({ ...base, value: new Date(2023, 5, 14) }).formattedDate).toBe('14.06.2023');
    });

    it('normalizes the date by min and max', () => {
        const min = new Date(2023, 5, 10);
        const max = new Date(2023, 5, 20);

        expect(getFormattedDates({ ...base, value: '01.06.2023', min, includeEdgeDates: true })).toMatchObject({
            formattedDate: '10.06.2023',
            originalDate: min,
        });
        expect(getFormattedDates({ ...base, value: '30.06.2023', max, includeEdgeDates: false })).toMatchObject({
            formattedDate: '19.06.2023',
            originalDate: new Date(2023, 5, 19),
        });
    });

    it('returns an incomplete value as is without a date', () => {
        expect(getFormattedDates({ ...base, value: '14.06' })).toEqual({
            formattedDate: '14.06',
            isoDate: '',
            originalDate: undefined,
        });
    });

    it('cuts an invalid value to the format length', () => {
        expect(getFormattedDates({ ...base, value: 'ab.cd.efghijk' }).formattedDate).toBe('ab.cd.efgh');
    });

    it('does not cut an invalid value for a format with a month name', () => {
        expect(
            getFormattedDates({ ...base, delimiter: ' ', format: 'DD MMMM YYYY', value: 'неверная дата' })
                .formattedDate,
        ).toBe('неверная дата');
    });

    it('returns an empty value for an empty input', () => {
        expect(getFormattedDates({ ...base, value: '' })).toEqual({
            formattedDate: '',
            isoDate: '',
            originalDate: undefined,
        });
    });
});
