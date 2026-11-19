import { describe, expect, it } from 'vitest';

import { roundValueToStep } from '../../utils/roundValueToStep';

describe('roundValueToStep', () => {
    it.each([
        [50.05, 0, 0.1, 50],
        [50.06, 0, 0.1, 50.1],
        [0.16, 0.05, 0.1, 0.15],
    ])('keeps nearest-step rounding by default: %s, min=%s, step=%s', (value, min, step, expected) => {
        expect(roundValueToStep(value, min, step)).toBe(expected);
    });

    it.each([
        ['ceil', 50.05, 0, 0.1, 50.1],
        ['floor', 50.05, 0, 0.1, 50],
        ['ceil', 0.16, 0.05, 0.1, 0.25],
        ['floor', 0.16, 0.05, 0.1, 0.15],
        ['ceil', -1.29, -10, 0.1, -1.2],
        ['floor', -1.29, -10, 0.1, -1.3],
        ['ceil', 1.5e-7, 0, 1e-7, 2e-7],
        ['floor', 1.5e-7, 0, 1e-7, 1e-7],
        ['ceil', 1e-20, 0, 1, 1],
        ['floor', -1e-20, 0, 1, -1],
    ] as const)('rounds %s: %s, min=%s, step=%s', (mode, value, min, step, expected) => {
        expect(roundValueToStep(value, min, step, mode)).toBe(expected);
    });

    it.each(['ceil', 'floor'] as const)('keeps on-step values stable with %s', (mode) => {
        for (const [value, min, step] of [
            [0.3, 0, 0.1],
            [0.7, 0, 0.1],
            [0.15, 0.05, 0.1],
            [100.3, 100, 0.1],
            [-0.3, -1, 0.1],
            [3e-7, 0, 1e-7],
        ]) {
            const rounded = roundValueToStep(value, min, step, mode);

            expect(rounded).toBe(value);
            expect(roundValueToStep(rounded, min, step, mode)).toBe(value);
        }

        expect(roundValueToStep(0.1 + 0.2, 0, 0.1, mode)).toBe(0.3);
    });

    it.each(['ceil', 'floor', undefined] as const)('does not round without a step: %s', (mode) => {
        expect(roundValueToStep(50.05, 0, 0, mode)).toBe(50.05);
    });
});
