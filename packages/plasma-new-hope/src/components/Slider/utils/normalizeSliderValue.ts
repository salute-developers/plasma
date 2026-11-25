import { roundValueToStep } from './roundValueToStep';

export const normalizeSliderValue = (
    value: number,
    min: number,
    max: number,
    step: number,
    roundingMode?: 'ceil' | 'floor',
) => {
    const clampedValue = Math.max(min, Math.min(value, max));
    const roundedValue = roundValueToStep(clampedValue, min, step, roundingMode);

    // max может не принадлежать сетке шага нативного input[type="range"].
    return roundedValue > max ? roundValueToStep(max, min, step, 'floor') : Math.max(min, roundedValue);
};
