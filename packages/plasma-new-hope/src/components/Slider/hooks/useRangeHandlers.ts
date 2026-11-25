import type { ChangeEvent, KeyboardEvent, SyntheticEvent } from 'react';

import { normalizeSliderValue } from '../utils/normalizeSliderValue';

const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(value, max));

export interface UseRangeHandlersParams {
    min: number;
    max: number;
    value: number;
    step?: number;
    roundingMode?: 'ceil' | 'floor';
    multipleStepSize: number;
    isControlled: boolean;
    onSetValue: (value: number) => void;
    onEmit: (value: number) => void;
    onCommit?: (value: number) => void;
}

export const useRangeHandlers = ({
    min,
    max,
    value,
    step,
    roundingMode,
    multipleStepSize,
    isControlled,
    onSetValue,
    onEmit,
    onCommit,
}: UseRangeHandlersParams) => {
    const normalizeValue = (newValue: number) =>
        roundingMode && step ? normalizeSliderValue(newValue, min, max, step, roundingMode) : newValue;

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = normalizeValue(Number(e.target.value));
        if (Number.isNaN(newValue)) {
            return;
        }

        if (!isControlled) {
            onSetValue(newValue);
        }

        onEmit(newValue);
    };

    const handleChangeCommitted = (e: SyntheticEvent<HTMLInputElement>) => {
        const newValue = normalizeValue(Number((e.target as HTMLInputElement).value));
        if (Number.isNaN(newValue)) {
            return;
        }

        if (onCommit) {
            onCommit(newValue);
        }
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key !== 'PageUp' && e.key !== 'PageDown') {
            return;
        }

        e.preventDefault();
        const pageStep = Math.round(((max - min) * multipleStepSize) / 100);
        const raw = clamp(e.key === 'PageUp' ? value + pageStep : value - pageStep, min, max);
        const newValue = step ? normalizeSliderValue(raw, min, max, step, roundingMode) : raw;
        if (Number.isNaN(newValue)) {
            return;
        }

        if (!isControlled) {
            onSetValue(newValue);
        }

        onEmit(newValue);
        if (onCommit) {
            onCommit(newValue);
        }
    };

    return { handleChange, handleChangeCommitted, handleKeyDown };
};
