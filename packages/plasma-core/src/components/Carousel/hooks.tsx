/* eslint-disable no-continue */
import throttle from 'lodash.throttle';
import { useRef, useEffect, useCallback, useMemo, useReducer, useState } from 'react';

import { useDebouncedFunction } from '../../hooks';

import type { UseCarouselOptions } from './types';
import { scrollToPos, getCalculatedPos, getCalculatedOffset, getItemSlot, getCarouselItems } from './utils';

type UseCarouselHookResult = {
    scrollRef: React.MutableRefObject<HTMLElement | null>;
    trackRef: React.MutableRefObject<HTMLElement | null>;
};

const THROTTLE_DEFAULT_MS = 100;
const DEBOUNCE_DEFAULT_MS = 150;

const noop = () => {};

export const useCarousel = ({
    index,
    axis,
    detectActive = false,
    detectThreshold = 0.5,
    scrollAlign = 'center',
    scaleCallback,
    scaleResetCallback,
    onIndexChange = noop,
    onDetectActiveItem,
    animatedScrollByIndex = false,
    throttleMs = THROTTLE_DEFAULT_MS,
    debounceMs = DEBOUNCE_DEFAULT_MS,
}: UseCarouselOptions): UseCarouselHookResult => {
    const prevIndex = useRef<number | null>(null);
    const offset = useRef(0);
    const scrollRef = useRef<HTMLElement | null>(null);
    const trackRef = useRef<HTMLElement | null>(null);
    const itemsObserver = useRef<IntersectionObserver | null>(null);
    const visibleItems = useRef<Set<HTMLElement>>(new Set());
    const [isVisibleItemsUpdated, setIsVisibleItemsUpdated] = useReducer((v) => v + 1, 0);
    const [prevIsVisibleItemsUpdated] = useState(isVisibleItemsUpdated);

    const scaleResetCallbackRef = useRef(scaleResetCallback);

    useEffect(() => {
        scaleResetCallbackRef.current = scaleResetCallback;
    }, [scaleResetCallback]);

    useEffect(() => {
        let mutationObserver: MutationObserver | null = null;

        if (scrollRef.current && trackRef.current) {
            const intersectionObserver = new IntersectionObserver(
                (entries) => {
                    for (let i = 0; i < entries.length; i++) {
                        const entry = entries[i];

                        if (entry.isIntersecting === true) {
                            visibleItems.current.add(entry.target as HTMLElement);
                        } else {
                            visibleItems.current.delete(entry.target as HTMLElement);

                            requestAnimationFrame(() => {
                                scaleResetCallbackRef.current?.(entry.target as HTMLElement);
                            });
                        }
                        setIsVisibleItemsUpdated();
                    }
                },
                { root: scrollRef.current },
            );

            const items = getCarouselItems(trackRef.current);

            for (let i = 0; i < items.length; i++) {
                const item = items.item(i);

                if (item) {
                    intersectionObserver.observe(item);
                }
            }

            mutationObserver = new MutationObserver((mutationList) => {
                for (let i = 0; i < mutationList.length; i++) {
                    const mutation = mutationList[i];

                    if (mutation.type === 'childList') {
                        const { addedNodes, removedNodes } = mutation;

                        for (let j = 0; j < addedNodes.length; j++) {
                            const item = addedNodes.item(j);

                            if (item) {
                                intersectionObserver.observe(item as HTMLElement);
                            }
                        }

                        for (let j = 0; j < removedNodes.length; j++) {
                            const item = removedNodes.item(j);

                            if (item) {
                                intersectionObserver.unobserve(item as HTMLElement);
                            }
                        }
                    }
                }
            });

            mutationObserver.observe(trackRef.current, { attributes: false, subtree: false, childList: true });

            itemsObserver.current = intersectionObserver;
        }

        return () => {
            itemsObserver.current?.disconnect();
            mutationObserver?.disconnect();
            visibleItems.current.clear();
        };
    }, []);

    /**
     * Для того, чтобы не спамить изменениями индекса.
     * Задержка дебаунса слегка больше, чем у тротлинга.
     * Таким образом, событие срабатывает при завершении скролла.
     */
    const debouncedOnIndexChange = useDebouncedFunction(onIndexChange, debounceMs);

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
             * Смещение (отрицательный или положительный отступ)
             * и размер карусели (для Ox - ширина, для Oy - высота).
             */
            const scrollPos = scrollRef.current[axis === 'x' ? 'scrollLeft' : 'scrollTop'];
            const scrollSize = scrollRef.current[axis === 'x' ? 'offsetWidth' : 'offsetHeight'];

            visibleItems.current.forEach((item) => {
                /**
                 * Для Ox - ширина, для Oy - высота.
                 */
                const itemSize = item[axis === 'x' ? 'offsetWidth' : 'offsetHeight'];
                const itemOffset = item[axis === 'x' ? 'offsetLeft' : 'offsetTop'];

                const itemEnd = itemOffset + itemSize;

                const itemIndex = Number(item.getAttribute('data-carousel-index'));

                const itemSlot = getItemSlot(
                    itemIndex,
                    itemEnd,
                    itemSize,
                    scrollPos,
                    scrollSize,
                    scrollAlign,
                    prevIndex.current ?? 0,
                    offset.current,
                );

                if (detectThreshold && Math.abs(itemSlot) <= detectThreshold) {
                    onDetectActiveItem?.(itemIndex);
                    debouncedOnIndexChange(itemIndex);
                }

                if (scaleCallback) {
                    requestAnimationFrame(() => {
                        scaleCallback(item, itemSlot);
                    });
                }
            });
        }, throttleMs);
    }, [
        axis,
        debouncedOnIndexChange,
        detectActive,
        detectThreshold,
        onDetectActiveItem,
        scaleCallback,
        scrollAlign,
        throttleMs,
    ]);

    /**
     * вызываем только на первое изменение visibleItems,
     * потому что в useEffect не акутальные visibleItems
     */
    if (prevIsVisibleItemsUpdated !== isVisibleItemsUpdated) {
        if (detectActive) {
            throttledDetectActiveItem();
        }
    }

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
     * Нужно вызвать только при первом рендере
     */
    useEffect(() => {
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
            // throttledDetectActiveItem();
        });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
