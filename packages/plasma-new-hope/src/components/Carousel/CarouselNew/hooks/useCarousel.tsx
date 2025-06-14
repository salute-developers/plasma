import React, { useEffect, useCallback, useRef, useMemo } from 'react';
import throttle from 'lodash.throttle';

import { CarouselNewProps as CarouselProps, ScrollAlign } from '../Carousel.types';

/**
 * Подсчет смещения из-за паддингов.
 */
export const getCalculatedOffset = (scrollEl: Element, trackEl: Element) => {
    const paddingProp = 'paddingLeft';
    return parseInt(getComputedStyle(scrollEl)[paddingProp], 10) + parseInt(getComputedStyle(trackEl)[paddingProp], 10);
};

const positionModByScrollAlign = ({
    scrollAlign,
    position,
    carouselSize,
    itemSize,
    offset,
    scrollStart,
}: {
    scrollAlign: ScrollAlign;
    position: number;
    carouselSize: number;
    itemSize: number;
    offset: number;
    scrollStart: number;
}) => {
    if (scrollAlign === 'start') {
        const paddingOffset = 0;
        return position + paddingOffset;
    }
    if (scrollAlign === 'center') {
        return position - carouselSize / 2 + itemSize / 2;
    }
    if (scrollAlign === 'end') {
        return position - carouselSize + itemSize + offset;
    }
    if (scrollAlign === 'activeDirection') {
        if (position >= scrollStart + carouselSize - itemSize) {
            return position - carouselSize + itemSize + offset;
        }
        if (position > scrollStart) {
            return scrollStart;
        }
    }
    return position;
};

/**
 * Подсчет скролла до переданного индекса.
 */
export const getCalculatedPos = ({
    scrollEl,
    items,
    index,
    offset,
    scrollAlign,
}: {
    scrollEl: HTMLElement;
    items: HTMLCollectionOf<HTMLElement>;
    index: number;
    offset: number;
    scrollAlign: ScrollAlign;
}) => {
    let position = scrollAlign === 'center' ? offset : 0;

    if (items.item(index) === null) {
        return position;
    }

    for (let i = 0; i < index; i++) {
        position += items.item(i)?.offsetWidth ?? 0;
    }

    const carouselSize = scrollEl.offsetWidth;
    const itemSize = items.item(index)?.offsetWidth ?? 0;
    const scrollStart = scrollEl.scrollLeft;

    return positionModByScrollAlign({
        scrollAlign,
        position,
        carouselSize,
        itemSize,
        offset,
        scrollStart,
    });
};

const DEFAULT_DURATION = 300;

// https://css-tricks.com/emulating-css-timing-functions-javascript/
const tfs = {
    linear: (t: number) => t,
    // eslint-disable-next-line
    easeIn: (t: number) => Math.pow(t, 1.675),
    // eslint-disable-next-line
    easeOut: (t: number) => 1 - Math.pow(1 - t, 1.675),
    easeInOut: (t: number) => 0.5 * (Math.sin((t - 0.5) * Math.PI) + 1),
};

export type TimingFunction = keyof typeof tfs;

/**
 * Плавная прокрутка по горизонтали
 * @param {Element} elem
 * @param {number} pos
 * @param {number} duration
 * @param {string} timingFunction
 */
export const animatedScrollToX = (
    elem: Element,
    pos: number,
    duration: number = DEFAULT_DURATION,
    timingFunction: TimingFunction = 'easeInOut',
): void => {
    let startTime: number;
    const startX = elem.scrollLeft;
    const endX = Math.max(0, Math.min(elem.scrollWidth - elem.clientWidth, pos));

    const handleNewAnimationFrame = (): void => {
        startTime = startTime || Date.now();
        const timePos = Math.min(1, Math.max(1, Date.now() - startTime) / duration);
        const scrollPos = tfs[timingFunction](timePos);
        const left = startX + (endX - startX) * scrollPos;
        elem.scrollTo({ left });
        if (timePos !== 1) window.requestAnimationFrame(handleNewAnimationFrame);
    };

    window.requestAnimationFrame(handleNewAnimationFrame);
};

/**
 * Прокрутка к указанной позиции с анимацией или без.
 */
export const scrollToPos = ({
    scrollEl,
    pos,
    animated,
    duration,
    timingFunction,
}: {
    scrollEl: HTMLElement;
    pos: number;
    animated?: boolean;
    duration?: number;
    timingFunction?: TimingFunction;
}) => {
    if (Math.abs(pos - scrollEl.scrollLeft) > 1) {
        if (animated) {
            animatedScrollToX(scrollEl, pos, duration, timingFunction);
        } else {
            scrollEl.scrollTo({ left: pos });
        }
    }
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

export function getCarouselItems(track: HTMLElement): HTMLCollectionOf<HTMLElement> {
    return track.children as HTMLCollectionOf<HTMLElement>;
}

export function useDebouncedFunction(func: (...args: any) => any, delay: number, cleanUp?: boolean) {
    const timeoutRef = useRef<number>();

    /**
     * Очистка таймера
     */
    function clearTimer() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = undefined;
        }
    }

    /**
     * Очищаем таймер при анмаунте компонента, если cleanUp выставлен в true
     * и тем самым отменяем последний запланированный вызов
     */
    useEffect(() => (cleanUp ? clearTimer : undefined), [cleanUp]);

    return (...args: any[]) => {
        clearTimer();
        timeoutRef.current = setTimeout(() => func(...args), delay);
    };
}

type UseCarouselOptions = Pick<CarouselProps, 'scrollAlign'> & {
    index: number;
    throttleMs?: number;
    debounceMs?: number;
    detectActive?: boolean;
    detectThreshold?: number;
    onIndexChange?: (e: any) => void;
};

type UseCarouselHookResult = {
    scrollRef: React.RefObject<HTMLDivElement>;
    trackRef: React.RefObject<HTMLDivElement>;
};

const THROTTLE_DEFAULT_MS = 100;
const DEBOUNCE_DEFAULT_MS = 150;

export const useCarousel = ({
    index,
    onIndexChange,
    detectActive = false,
    detectThreshold = 0.5,
    scrollAlign = 'center',
    throttleMs = THROTTLE_DEFAULT_MS,
    debounceMs = DEBOUNCE_DEFAULT_MS,
}: UseCarouselOptions): UseCarouselHookResult => {
    const prevIndex = useRef<number | null>(null);
    const offset = useRef(0);
    const scrollRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const axis = 'x';

    /**
     * Для того, чтобы не спамить изменениями индекса.
     * Задержка дебаунса слегка больше, чем у тротлинга.
     * Таким образом, событие срабатывает при завершении скролла.
     */
    const debouncedOnIndexChange = useDebouncedFunction((i: number) => onIndexChange?.(i), debounceMs);

    /**
     * Вычисление центрального элемента.
     * Подсчет: от 0 до 1, какое количество ширины/высоты
     * каждого элемента находится по центру скролла.
     */
    const throttledDetectActiveItem = useMemo(() => {
        return throttle(() => {
            if (!detectActive || scrollRef.current === null || trackRef.current === null) {
                return;
            }

            /**
             * Правая (или нижняя для Оу) граница элемента.
             */
            let itemEdge = offset.current;

            /**
             * Смещение (отрицательный или положительный отступ)
             * и размер карусели (для Ox - ширина, для Oy - высота).
             */
            const scrollPos = scrollRef.current[axis === 'x' ? 'scrollLeft' : 'scrollTop'];
            const scrollSize = scrollRef.current[axis === 'x' ? 'offsetWidth' : 'offsetHeight'];

            /**
             * Граница скролла (видимой части).
             * Смещение + размер.
             */
            const scrollEdge = scrollPos + scrollSize;

            const items = getCarouselItems(trackRef.current);

            /**
             * Проходим по всему списку, суммируя ширины элементов,
             * пока не найдем один элемент, чей центр будет в центре карусели.
             */
            for (let itemIndex = 0; itemIndex < items.length; itemIndex++) {
                const item = items.item(itemIndex);

                if (item === null) {
                    // eslint-disable-next-line no-continue
                    continue;
                }

                /**
                 * Для Ox - ширина, для Oy - высота.
                 */
                const itemSize = item[axis === 'x' ? 'offsetWidth' : 'offsetHeight'];

                /**
                 * Все элементы правее вьюпорта выпадают из процедуры.
                 * Сравниваем по предыдущему элементу.
                 * [ ... ] ...|n| <- Левый край элемента за пределами начала видимой части
                 */
                if (itemEdge > scrollEdge) {
                    // eslint-disable-next-line no-continue
                    continue;
                }

                itemEdge += itemSize;

                /**
                 * Все элементы левее вьюпорта выпадают из процедуры.
                 * Сравниваем по текущему элементу.
                 * Правый край элемента за пределами начала видимой части -> |p|... [ ... ]
                 */
                if (scrollPos > itemEdge) {
                    // eslint-disable-next-line no-continue
                    continue;
                }

                const itemSlot = getItemSlot(
                    itemIndex,
                    itemEdge,
                    itemSize,
                    scrollPos,
                    scrollSize,
                    scrollAlign,
                    prevIndex.current ?? 0,
                    offset.current,
                );

                if (itemSlot !== null) {
                    if (detectThreshold && Math.abs(itemSlot) <= detectThreshold) {
                        debouncedOnIndexChange?.(itemIndex);
                    }
                }
            }
        }, throttleMs);
    }, [debouncedOnIndexChange, detectActive, detectThreshold, scrollAlign, throttleMs]);

    /**
     * Прокрутка до нужной позиции индекса.
     */
    const toIndex = useCallback(
        (i: number) => {
            const scrollEl = scrollRef.current;
            const items = trackRef.current ? getCarouselItems(trackRef.current) : null;

            if (scrollEl && items && items.length > 0 && i >= 0) {
                scrollToPos({
                    scrollEl,
                    pos: getCalculatedPos({
                        scrollEl,
                        items,
                        index: i,
                        offset: offset.current,
                        scrollAlign,
                    }),
                });
                prevIndex.current = i;
            }
        },
        [scrollAlign],
    );

    useEffect(() => {
        if (scrollRef.current && trackRef.current) {
            offset.current = getCalculatedOffset(scrollRef.current, trackRef.current);
        }
    }, []);

    /**
     * Операции на маунте/анмаунте компонента.
     * Создать слушатели событи и т.п.
     */
    useEffect(() => {
        const carouselElement = scrollRef.current;

        if (carouselElement) {
            carouselElement.addEventListener('scroll', throttledDetectActiveItem);
        }

        return () => {
            if (carouselElement) {
                carouselElement.removeEventListener('scroll', throttledDetectActiveItem);
            }
        };
    }, [throttledDetectActiveItem]);

    /**
     * Прокрутка до нужной позиции индекса, если индекс изменился.
     */
    useEffect(() => {
        if (index !== prevIndex.current) {
            toIndex(index);
        }
    }, [index, toIndex]);

    return {
        scrollRef,
        trackRef,
    };
};
