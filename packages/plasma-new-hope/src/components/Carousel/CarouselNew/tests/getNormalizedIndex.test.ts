import { describe, expect, it } from 'vitest';

import { getNormalizedIndex } from '../utils/getNormalizedIndex';

describe('getNormalizedIndex', () => {
    it.each([false, true])('returns zero for an empty carousel (loop=%s)', (loop) => {
        expect(getNormalizedIndex(3, 0, loop)).toBe(0);
    });

    it.each([
        [-3, 0],
        [0, 0],
        [2, 2],
        [4, 4],
        [5, 4],
        [12, 4],
    ])('clamps index %s to %s without loop', (index, expected) => {
        expect(getNormalizedIndex(index, 5, false)).toBe(expected);
    });

    it.each([
        [-11, 4],
        [-6, 4],
        [-1, 4],
        [0, 0],
        [2, 2],
        [5, 0],
        [11, 1],
    ])('wraps index %s to %s with loop', (index, expected) => {
        expect(getNormalizedIndex(index, 5, true)).toBe(expected);
    });

    it.each([false, true])('always selects the only slide (loop=%s)', (loop) => {
        expect(getNormalizedIndex(-5, 1, loop)).toBe(0);
        expect(getNormalizedIndex(5, 1, loop)).toBe(0);
    });
});
