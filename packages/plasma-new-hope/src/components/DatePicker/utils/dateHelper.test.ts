import { describe, expect, it } from 'vitest';

import { getDateFormatDelimiter, needFullMonth } from './dateHelper';

describe('needFullMonth', () => {
    it.each([
        ['DD MMMM YYYY', true],
        ['DD MMM YYYY', true],
        ['DD.MM.YYYY', false],
        ['YYYY-MM-DD', false],
    ])('%s -> %s', (format, expected) => {
        expect(needFullMonth(format)).toBe(expected);
    });
});

describe('getDateFormatDelimiter', () => {
    it.each([
        ['DD.MM.YYYY', '.'],
        ['MM/DD/YYYY', '/'],
        ['YYYY-MM-DD', '-'],
        ['DD MMMM YYYY', ' '],
        ['DDMMYYYY', ''],
    ])('%s -> %j', (format, expected) => {
        expect(getDateFormatDelimiter(format)).toBe(expected);
    });

    it('returns an empty string without a format', () => {
        expect(getDateFormatDelimiter()).toBe('');
        expect(getDateFormatDelimiter('')).toBe('');
    });
});
