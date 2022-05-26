import { useCallback, useState } from 'react';

import { ScrollAxis, ScrollAlign } from './types';
import { useRemoteListener } from './useRemoteListener';

/**
 * Подсчет смещения из-за паддингов.
 */
export const getCalculatedOffset = (scrollEl: Element, trackEl: Element, axis: ScrollAxis) => {
    const paddingProp = axis === 'x' ? 'paddingLeft' : 'paddingTop';
    return parseInt(getComputedStyle(scrollEl)[paddingProp], 10) + parseInt(getComputedStyle(trackEl)[paddingProp], 10);
};

const round = (n: number) => Math.round(n * 100) / 100;

/**
 * Получить позицию (слот) айтема в каруселе.
 * Каждый айтем имеет свой слот относительно вьюпорта карусели.
 */
export const getItemSlot = (
    itemIndex: number,
    itemEnd: number,
    itemSize: number,
    scrollStart: number,
    scrollSize: number,
    scrollAlign: ScrollAlign,
    prevIndex = 0,
    offset = 0,
) => {
    /**
     * Граница и центр скролла (видимой части).
     * Смещение + размер.
     */
    const scrollEnd = scrollStart + scrollSize;
    const scrollCenter = scrollStart + scrollSize / 2;
    const itemCenter = itemEnd - itemSize / 2;

    if (scrollAlign === 'center') {
        return round((itemCenter - scrollCenter) / itemSize);
    }
    if (scrollAlign === 'start') {
        return round((itemEnd - itemSize - scrollStart) / itemSize);
    }
    if (scrollAlign === 'end') {
        return round((itemEnd - (scrollSize + scrollStart)) / itemSize);
    }
    if (scrollAlign === 'activeDirection') {
        const prevStart = offset + itemSize * prevIndex;
        const prevEnd = prevStart + itemSize;
        const prevVisible = prevEnd > scrollStart && prevStart < scrollEnd;

        if (!prevVisible) {
            if (prevIndex < itemIndex) {
                return round((itemEnd - (scrollSize + scrollStart)) / itemSize);
            }
            return round((itemEnd - itemSize - scrollStart) / itemSize);
        }
    }
    return null;
};

export function debounceByFrames<FN extends (...args: any[]) => void>(fn: FN, framesToDebounce = 0) {
    if (framesToDebounce === 0) {
        return fn;
    }

    let timeoutId: number | null = null;
    let framesCounter = 0;

    return (...args: Parameters<FN>) => {
        const tick = () => {
            if (framesCounter === framesToDebounce - 1) {
                timeoutId = null;
                framesCounter = 0;
                fn(...args);
            } else {
                framesCounter++;
                timeoutId = requestAnimationFrame(tick);
            }
        };

        if (timeoutId !== null) {
            framesCounter = 0;
            cancelAnimationFrame(timeoutId);
        }

        timeoutId = requestAnimationFrame(tick);
    };
}

// eslint-disable-next-line space-before-function-paren
export function throttleByFrames<FN extends (...args: any[]) => void>(fn: FN, framesToThrottle = 0) {
    if (framesToThrottle === 0) {
        return fn;
    }

    let isWaited = false;
    let framesCounter = 0;

    const tick = () => {
        if (framesCounter === framesToThrottle - 1) {
            isWaited = false;
            framesCounter = 0;
        } else {
            framesCounter++;
            requestAnimationFrame(tick);
        }
    };

    return (...args: Parameters<FN>) => {
        if (isWaited) {
            return;
        }

        fn(...args);
        isWaited = true;

        tick();
    };
}

const throttlingParamsDefault = {
    leading: true,
    trailing: false,
};

/**
 * Хук для навигации. Слушает нажатие кнопок на пульте/клавиатуре.
 */
export function useRemoteHandlers({
    initialIndex = 0,
    axis,
    delayFrames,
    longDelayFrames,
    min,
    max,
    count = 1,
    longCount = 5,
}: {
    initialIndex: number;
    axis: ScrollAxis;
    delayFrames: number;
    longDelayFrames: number;
    min: number;
    max: number;
    count?: number;
    longCount?: number;
    throttlingParams?: typeof throttlingParamsDefault;
}) {
    const indexState = useState(initialIndex);
    const [, setIndex] = indexState;

    const step = useCallback(
        throttleByFrames(
            (cmd: '+' | '-') =>
                setIndex((prevIndex) => {
                    if (cmd === '+') {
                        return prevIndex + count <= max ? prevIndex + count : min;
                    }
                    return prevIndex - count >= min ? prevIndex - count : max;
                }),
            delayFrames,
        ),
        [min, max],
    );
    const jump = useCallback(
        throttleByFrames(
            (cmd: '+' | '-') =>
                setIndex((prevIndex) => {
                    if (cmd === '+') {
                        return prevIndex + longCount <= max ? prevIndex + longCount : min;
                    }
                    return prevIndex - longCount >= min ? prevIndex - longCount : max;
                }),
            longDelayFrames,
        ),
        [min, max],
    );

    useRemoteListener((key, ev) => {
        ev.preventDefault();
        if (axis === 'x') {
            switch (key) {
                case 'LEFT':
                    step('-');
                    break;
                case 'RIGHT':
                    step('+');
                    break;
                case 'LONG_LEFT':
                    jump('-');
                    break;
                case 'LONG_RIGHT':
                    jump('+');
                    break;
                default:
                    break;
            }
        } else {
            switch (key) {
                case 'UP':
                    step('-');
                    break;
                case 'DOWN':
                    step('+');
                    break;
                case 'LONG_UP':
                    jump('-');
                    break;
                case 'LONG_DOWN':
                    jump('+');
                    break;
                default:
                    break;
            }
        }
    });

    return indexState;
}
