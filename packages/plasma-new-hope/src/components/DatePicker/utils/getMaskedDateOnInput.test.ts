import { describe, expect, it } from 'vitest';

import { getMaskedDateOnInput } from './getMaskedDateOnInput';

const format = 'MM/DD/YYYY';
const delimiter = '/';

const mask = (value: string, prevValue?: string) => getMaskedDateOnInput(value, format, delimiter, prevValue);

describe('getMaskedDateOnInput', () => {
    it('returns an empty string for an empty value', () => {
        expect(mask('')).toBe('');
        expect(getMaskedDateOnInput()).toBe('');
    });

    it('returns the value as is without a format, a delimiter or for a month name format', () => {
        expect(getMaskedDateOnInput('06x', undefined, delimiter)).toBe('06x');
        expect(getMaskedDateOnInput('06x', format, '')).toBe('06x');
        expect(getMaskedDateOnInput('14 ию', 'DD MMMM YYYY', ' ')).toBe('14 ию');
    });

    it('adds a delimiter when the next format char is a delimiter', () => {
        expect(mask('06')).toBe('06/');
        expect(mask('06/14')).toBe('06/14/');
    });

    it('keeps the value while a part is not complete', () => {
        expect(mask('0')).toBe('0');
        expect(mask('06/1')).toBe('06/1');
    });

    it('removes chars other than digits and the delimiter', () => {
        expect(mask('0a6')).toBe('06/');
        expect(mask('06.14')).toBe('0614');
    });

    it('cuts the value to the format length', () => {
        expect(mask('06/14/20231')).toBe('06/14/2023');
    });

    it('removes the delimiter together with the digit on backspace', () => {
        expect(mask('06/14', '06/14/')).toBe('06/1');
        expect(mask('06', '06/')).toBe('0');
    });

    it('works with another delimiter', () => {
        expect(getMaskedDateOnInput('14', 'DD.MM.YYYY', '.')).toBe('14.');
    });
});
