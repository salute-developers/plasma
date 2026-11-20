import { describe, expect, it } from 'vitest';

import { getActiveIndex, getInitialData, getTargetIndex } from '../ui/Dots/utils';

describe('getInitialData', () => {
    it.each([
        [-1, 10, 5, [0, 5]],
        [10, 10, 5, [9, 5]],
        [3, 10, 5, [3, 5]],
        [1, 3, 10, [1, 3]],
        [0, 1, 10, [0, 1]],
    ])('normalizes index=%s, count=%s, visibleCount=%s', (index, count, visibleCount, expected) => {
        expect(getInitialData(index, count, visibleCount)).toEqual(expected);
    });
});

describe('getActiveIndex', () => {
    it.each([
        [0, true, 20, 5, 0],
        [1, false, 20, 5, 1],
        [10, true, 20, 5, 2],
        [10, false, 20, 5, 2],
        [18, true, 20, 5, 3],
        [19, false, 20, 5, 4],
        [10, true, 20, 6, 3],
        [10, false, 20, 6, 2],
        [4, true, 5, 5, 4],
        [10, true, 20, 1, 0],
    ])('maps index=%s, right=%s, count=%s, visibleCount=%s to dot %s', (index, right, count, visibleCount, dot) => {
        expect(getActiveIndex(index, right, count, visibleCount)).toBe(dot);
    });
});

describe('getTargetIndex', () => {
    it.each([
        [4, 3, 2, 1, 5, 3],
        [2, 3, 2, 1, 5, 1],
        [0, 3, 1, 3, 5, 0],
        [9, 3, 2, 6, 5, 4],
    ])('keeps the target dot in the visible range', (index, previous, active, difference, count, expected) => {
        expect(getTargetIndex(index, previous, active, difference, count)).toBe(expected);
    });
});
