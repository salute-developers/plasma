import { describe, expect, it } from 'vitest';

import { normalizeDates } from './normalizeDates';

const format = 'DD.MM.YYYY';
const min = new Date(2023, 5, 10);
const max = new Date(2023, 5, 20);

const normalize = (originalDate: Date, includeEdgeDates: boolean) =>
    normalizeDates({ originalDate, lang: 'ru', format, includeEdgeDates, min, max }).formattedNormalizedDate;

describe('normalizeDates', () => {
    it('keeps a date inside the range', () => {
        const date = new Date(2023, 5, 15);

        expect(normalizeDates({ originalDate: date, lang: 'ru', format, min, max })).toEqual({
            normalizedDate: date,
            formattedNormalizedDate: '15.06.2023',
        });
    });

    describe('includeEdgeDates=true', () => {
        it('moves a date before min to min', () => {
            expect(normalize(new Date(2023, 5, 1), true)).toBe('10.06.2023');
        });

        it('keeps min and max themselves', () => {
            expect(normalize(min, true)).toBe('10.06.2023');
            expect(normalize(max, true)).toBe('20.06.2023');
        });

        it('moves a date after max to max', () => {
            expect(normalize(new Date(2023, 5, 30), true)).toBe('20.06.2023');
        });
    });

    describe('includeEdgeDates=false', () => {
        it('moves a date before or equal to min to the next day after min', () => {
            expect(normalize(new Date(2023, 5, 1), false)).toBe('11.06.2023');
            expect(normalize(min, false)).toBe('11.06.2023');
        });

        it('moves a date after or equal to max to the day before max', () => {
            expect(normalize(new Date(2023, 5, 30), false)).toBe('19.06.2023');
            expect(normalize(max, false)).toBe('19.06.2023');
        });
    });

    it('returns Date#toString without a format', () => {
        const date = new Date(2023, 5, 15);

        expect(normalizeDates({ originalDate: date, lang: 'ru' }).formattedNormalizedDate).toBe(date.toString());
    });
});
