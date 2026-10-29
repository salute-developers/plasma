import { describe, expect, it } from 'vitest';

import { getOriginalDates } from './getOriginalDates';

const empty = { formattedDate: '', isoDate: '', originalDate: undefined };

describe('getOriginalDates', () => {
    it.each([
        ['an empty value', '', 'ru', 'DD.MM.YYYY'],
        ['no lang', '14.06.2023', undefined, 'DD.MM.YYYY'],
        ['no format', '14.06.2023', 'ru', undefined],
    ])('returns empty values for %s', (_, value, lang, format) => {
        expect(getOriginalDates(value, lang, format)).toEqual(empty);
    });

    it('formats a Date and returns a copy of it', () => {
        const date = new Date(2023, 5, 14);
        const result = getOriginalDates(date, 'ru', 'DD.MM.YYYY');

        expect(result).toEqual({
            formattedDate: '14.06.2023',
            isoDate: date.toISOString(),
            originalDate: date,
        });
        expect(result.originalDate).not.toBe(date);
    });

    it('parses a string by format', () => {
        const date = new Date(2023, 5, 14);

        expect(getOriginalDates('06/14/2023', 'ru', 'MM/DD/YYYY')).toEqual({
            formattedDate: '06/14/2023',
            isoDate: date.toISOString(),
            originalDate: date,
        });
    });

    it('returns the raw string without a date when it cannot be parsed', () => {
        expect(getOriginalDates('14.06', 'ru', 'DD.MM.YYYY')).toEqual({ ...empty, formattedDate: '14.06' });
        expect(getOriginalDates('abc', 'ru', 'DD.MM.YYYY')).toEqual({ ...empty, formattedDate: 'abc' });
    });

    it('formats month names in the given locale', () => {
        const date = new Date(2023, 5, 14);

        expect(getOriginalDates(date, 'en', 'DD MMMM YYYY').formattedDate).toBe('14 June 2023');
        expect(getOriginalDates(date, 'ru', 'DD MMMM YYYY').formattedDate).toBe('14 июня 2023');
    });
});
