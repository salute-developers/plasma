/* eslint-disable no-continue */
import throttle from 'lodash.throttle';
import { useRef, useEffect, useCallback, useMemo } from 'react';

import { useDebouncedFunction } from '../../hooks';

import type { BasicProps, DetectionProps } from './types';
import { scrollToPos, getCalculatedPos, getCalculatedOffset, getItemSlot, getCarouselItems } from './utils';

type UseCarouselHookResult = {
    scrollRef: React.MutableRefObject<HTMLElement | null>;
    trackRef: React.MutableRefObject<HTMLElement | null>;
};

const THROTTLE_DEFAULT_MS = 100;
const DEBOUNCE_DEFAULT_MS = 150;

export const useCarousel = ({
    index,
    axis,
    detectActive = false,
    detectThreshold = 0.5,
    scrollAlign = 'center',
    scaleCallback,
    scaleResetCallback,
    onIndexChange,
    onDetectActiveItem,
    animatedScrollByIndex = false,
    throttleMs = THROTTLE_DEFAULT_MS,
    debounceMs = DEBOUNCE_DEFAULT_MS,
    withUseVirtual = false,
}: BasicProps & Omit<Partial<DetectionProps>, 'detectActive'> & { detectActive?: boolean }): UseCarouselHookResult => {
    const prevIndex = useRef<number | null>(null);
    const direction = useRef<boolean | null>(null);
    const offset = useRef(0);
    const scrollRef = useRef<HTMLElement | null>(null);
    const trackRef = useRef<HTMLElement | null>(null);

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

            /**
             * Элементы перед, после и в видимой части.
             * перед [ ВИДИМЫЕ ] после
             */
            const prevItems: HTMLElement[] = [];
            const nextItems: HTMLElement[] = [];
            let count = 0;

            const items = getCarouselItems(trackRef.current);

            /**
             * Проходим по всему списку, суммируя ширины элементов,
             * пока не найдем один элемент, чей центр будет в центре карусели.
             */
            for (let itemIndex = 0; itemIndex < items.length; itemIndex++) {
                const item = items.item(itemIndex);

                if (item === null) {
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
                    if (scaleCallback && scaleResetCallback) {
                        nextItems.push(item);
                    }
                    continue;
                }

                itemEdge += itemSize;

                /**
                 * Все элементы левее вьюпорта выпадают из процедуры.
                 * Сравниваем по текущему элементу.
                 * Правый край элемента за пределами начала видимой части -> |p|... [ ... ]
                 */
                if (scrollPos > itemEdge) {
                    if (scaleCallback && scaleResetCallback) {
                        prevItems.push(item);
                    }
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
                        onDetectActiveItem?.(itemIndex);
                        debouncedOnIndexChange?.(itemIndex);
                    }

                    if (scaleCallback) {
                        scaleCallback(item, itemSlot);
                        /**
                         * Количество айтемов в видимой части.
                         */
                        count++;
                    }
                }
            }

            if (scaleCallback && scaleResetCallback) {
                window.requestAnimationFrame(() => {
                    if (direction.current) {
                        if (nextItems.length) {
                            nextItems.splice(0, count).forEach((elem) => scaleCallback(elem, count));
                            if (nextItems.length) {
                                nextItems.splice(0, count).forEach((elem) => scaleResetCallback(elem));
                            }
                        }
                    } else if (prevItems.length) {
                        const prItemsRev = prevItems.reverse();
                        prItemsRev.splice(0, count).forEach((elem) => scaleCallback(elem, count * -1));
                        if (prItemsRev.length) {
                            prItemsRev.splice(0, count).forEach((elem) => scaleResetCallback(elem));
                        }
                    }
                });
            }
        }, throttleMs);
    }, [
        axis,
        debouncedOnIndexChange,
        detectActive,
        detectThreshold,
        onDetectActiveItem,
        scaleCallback,
        scaleResetCallback,
        scrollAlign,
        throttleMs,
    ]);

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
                        axis,
                        index: i,
                        offset: offset.current,
                        scrollAlign,
                    }),
                    axis,
                    /**
                     * Без анимации при переходе на другой конец списка
                     */
                    animated:
                        animatedScrollByIndex &&
                        (prevIndex.current === null || Math.abs(i - prevIndex.current) !== items.length - 1),
                });
                prevIndex.current = i;
            }
        },
        [animatedScrollByIndex, axis, scrollAlign],
    );

    useEffect(() => {
        if (scrollRef.current && trackRef.current) {
            offset.current = getCalculatedOffset(scrollRef.current, trackRef.current, axis);
        }
    }, [axis]);

    /**
     * Операции на маунте/анмаунте компонента.
     * Создать слушатели событи и т.п.
     */
    useEffect(() => {
        if (withUseVirtual === true) {
            return;
        }

        const carouselElement = scrollRef.current;

        if (carouselElement) {
            carouselElement.addEventListener('scroll', throttledDetectActiveItem);
        }

        return () => {
            if (carouselElement) {
                carouselElement.removeEventListener('scroll', throttledDetectActiveItem);
            }
        };
    }, [throttledDetectActiveItem, withUseVirtual]);

    /**
     * Нужно вызвать только при первом рендере
     */
    useEffect(() => {
        if (withUseVirtual === false) {
            requestAnimationFrame(() => {
                /**
                 * Прокрутка до начального индекса.
                 */
                toIndex(index);

                /**
                 * Если на момент запуска карусель уже находится на нужной позиции,
                 * событие скролла не произойдет, не сработает и определение центра,
                 * необходимо вызвать его вручную.
                 */
                throttledDetectActiveItem();
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [withUseVirtual]);

    /**
     * Прокрутка до нужной позиции индекса, если индекс изменился.
     */
    useEffect(() => {
        if (withUseVirtual === false && index !== prevIndex.current) {
            toIndex(index);
        }
    }, [index, toIndex, withUseVirtual]);

    return {
        scrollRef,
        trackRef,
    };
};
