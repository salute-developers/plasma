/* eslint-disable no-continue */
import throttle from 'lodash.throttle';
import { useRef, useEffect, useCallback, useMemo, useLayoutEffect, useState } from 'react';

import { useDebouncedFunction } from '../../hooks';

import type { UseCarouselOptions } from './types';
import VerySmoothScroll from './VerySmoothScroll';
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
    cssScroll = false,
    throttleMs = THROTTLE_DEFAULT_MS,
    debounceMs = DEBOUNCE_DEFAULT_MS,
}: UseCarouselOptions): UseCarouselHookResult => {
    const prevIndex = useRef<number | null>(null);
    const direction = useRef<boolean | null>(null);
    const offset = useRef(0);
    const scrollRef = useRef<HTMLElement | null>(null);
    const trackRef = useRef<HTMLElement | null>(null);

    const smoothScroller = useMemo(() => {
        return new VerySmoothScroll({ cssScroll });
    }, [cssScroll]);

    useLayoutEffect(() => {
        if (cssScroll === false) {
            if (scrollRef.current) {
                smoothScroller.setElement(scrollRef.current);
            }
        } else if (trackRef.current) {
            smoothScroller.setElement(trackRef.current);
        }
    }, [smoothScroller]);

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
                if (animatedScrollByIndex === true) {
                    const kek = getCalculatedPos({
                        scrollEl,
                        items,
                        axis,
                        index: i,
                        offset: offset.current,
                        scrollAlign,
                    });
                    smoothScroller.goAbsolute(kek, axis === 'x' ? 'horizontal' : 'vertical');
                } else {
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
                }
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
            throttledDetectActiveItem();
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

// function getRealTrackPosition(track: HTMLElement, axis: UseCarouselOptions['axis']) {
//     const rect = track.getBoundingClientRect();

//     return Math.abs(rect[axis]) + track.offsetLeft;
// }

// function translateToPosition(
//     track: HTMLElement,
//     axis: UseCarouselOptions['axis'],
//     position: number,
//     animated: boolean,
// ): void {
//     if (animated) {
//         track.style.transform = axis === 'x' ? `translateX(${-position}px)` : `translateY(${-position}px)`;
//     } else {
//         track.style.transitionProperty = 'none';
//         track.style.transform = axis === 'x' ? `translateX(${-position}px)` : `translateY(${-position}px)`;
//         requestAnimationFrame(() => {
//             track.style.transitionProperty = '';
//         });
//     }
// }

function getDestination(
    itemSize: number,
    itemStart: number,
    carouselSize: number,
    trackOffset: number,
    scrollAlign: UseCarouselOptions['scrollAlign'],
): number {
    switch (scrollAlign) {
        case 'center': {
            const relativeMiddle = itemStart + trackOffset + itemSize / 2;

            return relativeMiddle - carouselSize / 2;
        }
        case 'start': {
            return itemStart;
        }
        case 'end': {
            return 2 * trackOffset + itemStart + itemSize - carouselSize;
        }
        case 'activeDirection': {
            return itemStart;
        }
        default:
            return itemStart;
    }
}

// const EVENT_OPTIONS = { capture: true };

export function useCSSCarousel({ index, axis, scrollAlign = 'center' }: UseCarouselOptions) {
    const [prevIndex, setPrevIndex] = useState<number | null>(null);
    const carouselRef = useRef<HTMLElement | null>(null);
    const trackRef = useRef<HTMLElement | null>(null);
    // const onIndexChangeRef = useRef(onIndexChange);

    const scrollToIndex = useMemo(() => {
        const offsetKey = axis === 'x' ? 'offsetLeft' : 'offsetTop';
        const sizeKey = axis === 'x' ? 'offsetWidth' : 'offsetHeight';

        return (nextIndex: number, currentIndex: number | null, align: UseCarouselOptions['scrollAlign']) => {
            const track = trackRef.current;
            const carousel = carouselRef.current;

            if (track && carousel) {
                const itemsNumber = track.children.length;
                const itemToScrollTo = track.querySelector<HTMLElement>(`[data-carousel-item-index="${nextIndex}"]`);

                if (itemToScrollTo) {
                    const itemSize = itemToScrollTo[sizeKey];
                    const carouselSize = carousel[sizeKey];
                    const trackSize = track[sizeKey];
                    const trackStart = track[offsetKey];
                    const itemStart = itemToScrollTo[offsetKey];
                    const trackEnd = trackSize - carouselSize + trackStart;

                    const toPos = getDestination(itemSize, itemStart, carouselSize, trackStart, align);

                    let pos = 0;

                    if (toPos < 0) {
                        pos = 0;
                    } else if (toPos > trackEnd) {
                        pos = trackEnd;
                    } else {
                        pos = toPos;
                    }

                    if (currentIndex !== null && Math.abs(nextIndex - currentIndex) !== itemsNumber - 1) {
                        track.style.transform = axis === 'x' ? `translateX(${-pos}px)` : `translateY(${-pos}px)`;
                    } else {
                        track.style.transitionTimingFunction = 'step-start';
                        track.style.transform = axis === 'x' ? `translateX(${-pos}px)` : `translateY(${-pos}px)`;
                        setTimeout(() => {
                            track.style.transitionTimingFunction = '';
                        });
                    }
                }
            }
        };
    }, [axis]);

    if (index !== prevIndex) {
        scrollToIndex(index, prevIndex, scrollAlign);
        setPrevIndex(index);
    }

    useLayoutEffect(() => {
        // надо вызвать первый раз, чтобы проскролить до initialIndex
        scrollToIndex(index, null, scrollAlign);
    }, []);

    // useLayoutEffect(() => {
    //     const track = trackRef.current;

    //     function callOnIndexChangeCallback(event: TransitionEvent) {
    //         if (onIndexChangeRef.current && track && event.propertyName === 'transform' && event.target === track) {
    //             const activeItem = track.querySelector('[data-carousel-item-selected="true"]');
    //             if (activeItem) {
    //                 const activeItemIndex = activeItem.getAttribute('data-carousel-item-index');
    //                 if (activeItemIndex !== null) {
    //                     onIndexChangeRef.current(Number(activeItemIndex));
    //                 }
    //             }
    //         }
    //     }

    //     if (track) {
    //         track.addEventListener('transitionend', callOnIndexChangeCallback, EVENT_OPTIONS);
    //     }

    //     return () => {
    //         if (track) {
    //             track.removeEventListener('transitionend', callOnIndexChangeCallback, EVENT_OPTIONS);
    //         }
    //     };
    // }, []);

    return {
        scrollRef: carouselRef,
        trackRef,
    };
}
