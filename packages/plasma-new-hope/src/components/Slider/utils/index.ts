import { MutableRefObject } from 'react';

/**
 * Расчитать значение слайдера с учетом его координат и шага изменений.
 * @param {number} handleCenterXRelative
 * @param {number} stepSize
 * @param {number} min
 * @param {number} max
 * @return {number}
 */
export function getSliderThumbValue(handleCenterPosRelative: number, stepSize: number, min: number, max: number) {
    const newValue = Math.round(handleCenterPosRelative / stepSize) + min;

    return Math.min(Math.max(newValue, min), max);
}

/**
 * Расчитывает значение отступа слайдера на основе его положения (справа, слева) на отрезке слайдера.
 * Значение используется для правильного расчета ограничения движения слайдера.
 * @param ref
 * @param {'left' | 'right'} side
 * @return Array<number>
 */
export function getOffsets(
    ref: ((instance: HTMLDivElement | null) => void) | MutableRefObject<HTMLDivElement | null> | null,
    side?: 'left' | 'right',
    isVertical?: boolean,
): number[] {
    if (!ref || !('current' in ref) || !ref.current || !side) {
        return [0, 0];
    }

    const size = isVertical ? ref.current.clientHeight : ref.current.clientWidth;

    if (side === 'left') {
        return [0, size];
    }

    if (side === 'right') {
        return [size, 0];
    }

    return [0, 0];
}

export const sizeData = {
    s: {
        small: {
            indent: 0.5,
            fontSizeMultiplier: 16,
        },
        large: {
            indent: 0.625,
            fontSizeMultiplier: 16,
        },
    },
    m: {
        small: {
            indent: 0.5,
            fontSizeMultiplier: 16,
        },
        large: {
            indent: 0.625,
            fontSizeMultiplier: 16,
        },
    },
    l: {
        small: {
            indent: 0.5,
            fontSizeMultiplier: 16,
        },
        large: {
            indent: 0.625,
            fontSizeMultiplier: 16,
        },
    },
};
