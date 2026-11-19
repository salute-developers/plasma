import { describe, expect, it } from 'vitest';

import { normalizeSliderValue } from '../../utils/normalizeSliderValue';

describe('normalizeSliderValue', () => {
    it.each([
        ['floor', 20, 0, 10, 3, 9],
        ['ceil', 20, 0, 10, 3, 9],
        ['ceil', 9.5, 0, 10, 3, 9],
        ['floor', 10, 0, 10, 3, 9],
        ['ceil', 6, 0, 10, 3, 6],
        ['floor', 6, 0, 10, 3, 6],
        ['ceil', -20, 0, 10, 3, 0],
        ['floor', -20, 0, 10, 3, 0],
        ['ceil', 1, 0, 2, 3, 0],
        ['floor', 1, 0, 2, 3, 0],
        ['ceil', 4.8, -5, 5, 3, 4],
        ['floor', 20, -5, 5, 3, 4],
        ['ceil', 1.01, 0.05, 1.02, 0.1, 0.95],
        ['floor', 1.2, 0.05, 1.02, 0.1, 0.95],
        [undefined, 11, 0, 11, 3, 9],
    ] as const)('normalizes %s, value=%s, range=[%s, %s], step=%s', (mode, value, min, max, step, expected) => {
        const normalized = normalizeSliderValue(value, min, max, step, mode);

        expect(normalized).toBe(expected);
        expect(normalizeSliderValue(normalized, min, max, step, mode)).toBe(expected);
    });
});
