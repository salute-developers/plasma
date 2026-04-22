import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState, RefObject } from 'react';
import { defaultRangeExtractor, useVirtualizer } from '@tanstack/react-virtual';

import { CarouselNewProps as CarouselProps } from '../Carousel.types';
import { getGapWidth, getClosestIndex, getCalculatedPos } from '../utils';
import { VIRTUAL_OVERSCAN, DEFAULT_ESTIMATED_SLIDE_WIDTH, ITEM_VIRTUAL_ATTRIBUTE } from '../Carousel';

type UseCarouselOptions = Pick<CarouselProps, 'scrollAlign' | 'gap'> & {
    index: number;
    onChangeIndex: (index: number) => void;
    swipeEnabled: boolean;
    slidesAmount: number;
    virtual?: boolean;
};

type UseCarouselHookResult = {
    scrollRef: RefObject<HTMLDivElement>;
    trackRef: RefObject<HTMLDivElement>;
    virtualItems: ReturnType<ReturnType<typeof useVirtualizer>['getVirtualItems']>;
    beforeSpacerWidth: number;
    afterSpacerWidth: number;
    measureVirtualItem: (index: number) => (element: HTMLDivElement | null) => void;
};

// Хук инкапсулирует scroll, swipe и виртуализацию трека карусели.
export const useCarousel = ({
    index,
    scrollAlign,
    onChangeIndex,
    swipeEnabled,
    slidesAmount,
    gap,
    virtual = false,
}: UseCarouselOptions): UseCarouselHookResult => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const isFirstRender = useRef(true);
    const isInteracting = useRef(false);
    const pendingVirtualIndexRef = useRef<number | null>(virtual ? index : null);
    const virtualizerRef = useRef<typeof virtualizer | null>(null);
    const measuredElementsRef = useRef<Record<number, HTMLDivElement | null>>({});
    const measureCallbacksRef = useRef<Record<number, (element: HTMLDivElement | null) => void>>({});
    const [virtualGap, setVirtualGap] = useState(0);
    const [fallbackSlideWidth, setFallbackSlideWidth] = useState(DEFAULT_ESTIMATED_SLIDE_WIDTH);
    const [measuredSlideWidths, setMeasuredSlideWidths] = useState<Record<number, number>>({});
    const [isBootstrappingVirtual, setIsBootstrappingVirtual] = useState(virtual && index > 0);

    const runWithoutScrollAnimation = useCallback((callback: () => void) => {
        const scrollElement = scrollRef.current;

        if (!scrollElement) {
            callback();

            return;
        }

        const initialScrollBehavior = scrollElement.style.scrollBehavior;

        scrollElement.style.scrollBehavior = 'auto';
        callback();

        window.requestAnimationFrame(() => {
            if (scrollRef.current) {
                scrollRef.current.style.scrollBehavior = initialScrollBehavior;
            }
        });
    }, []);

    // Считывает gap и стартовую ширину viewport для первичной оценки размера слайда.
    useLayoutEffect(() => {
        if (!virtual) {
            setVirtualGap(0);
            setFallbackSlideWidth(DEFAULT_ESTIMATED_SLIDE_WIDTH);

            return;
        }

        setVirtualGap(getGapWidth(trackRef.current));
        setFallbackSlideWidth(scrollRef.current?.clientWidth || DEFAULT_ESTIMATED_SLIDE_WIDTH);
    }, [gap, virtual]);

    // Сбрасывает измерения при смене набора слайдов или режима виртуализации.
    useEffect(() => {
        setMeasuredSlideWidths({});
    }, [slidesAmount, virtual]);

    // Строит estimateSize для virtualizer по реальным измерениям или fallback-ширине.
    const estimatedSlideWidth = useMemo(() => {
        const measuredWidths = Object.values(measuredSlideWidths);

        if (measuredWidths.length === 0) {
            return fallbackSlideWidth;
        }

        return measuredWidths.reduce((sum, width) => sum + width, 0) / measuredWidths.length;
    }, [fallbackSlideWidth, measuredSlideWidths]);

    // Настраивает virtualizer.
    const virtualizer = useVirtualizer({
        count: slidesAmount,
        enabled: virtual,
        horizontal: true,
        overscan: VIRTUAL_OVERSCAN,
        gap: virtualGap,
        indexAttribute: ITEM_VIRTUAL_ATTRIBUTE,
        getScrollElement: () => scrollRef.current,
        estimateSize: () => estimatedSlideWidth,
        rangeExtractor: (range) => {
            if (!isBootstrappingVirtual) {
                return defaultRangeExtractor(range);
            }

            const bootstrapEnd = Math.min(slidesAmount - 1, Math.max(range.endIndex, index + VIRTUAL_OVERSCAN));

            return Array.from({ length: bootstrapEnd + 1 }, (_, currentIndex) => currentIndex);
        },
    });
    virtualizerRef.current = virtualizer;

    // Переизмеряет virtualizer после уточнения средней ширины виртуальных слайдов.
    useEffect(() => {
        if (virtual) {
            virtualizer.measure();
        }
    }, [estimatedSlideWidth, virtual, virtualizer]);

    const virtualItems = virtualizer.getVirtualItems();

    const beforeWidth = virtualItems[0]?.start ?? 0;
    const afterWidth = slidesAmount
        ? Math.max(0, virtualizer.getTotalSize() - (virtualItems[virtualItems.length - 1]?.end ?? 0))
        : 0;
    const beforeSpacerWidth = beforeWidth > 0 ? Math.max(0, beforeWidth - virtualGap) : 0;
    const afterSpacerWidth = afterWidth > 0 ? Math.max(0, afterWidth - virtualGap) : 0;

    // Измеряет реальную ширину виртуального слайда и сохраняет её для последующих расчётов.
    const measureVirtualItem = useCallback((virtualIndex: number) => {
        if (!measureCallbacksRef.current[virtualIndex]) {
            measureCallbacksRef.current[virtualIndex] = (element: HTMLDivElement | null) => {
                if (measuredElementsRef.current[virtualIndex] === element) {
                    return;
                }

                measuredElementsRef.current[virtualIndex] = element;

                if (!element) {
                    return;
                }

                virtualizerRef.current?.measureElement(element);

                const { width } = element.getBoundingClientRect();

                setMeasuredSlideWidths((prevState) => {
                    if (prevState[virtualIndex] === width) {
                        return prevState;
                    }

                    return {
                        ...prevState,
                        [virtualIndex]: width,
                    };
                });
            };
        }

        return measureCallbacksRef.current[virtualIndex];
    }, []);

    // Прокручивает карусель при смене index.
    // Строго в layout-phase, чтобы стартовый кадр сразу был на нужном слайде до первого пеинта.
    useLayoutEffect(() => {
        if (!scrollRef.current || !trackRef.current || isInteracting.current) {
            return;
        }

        if (virtual) {
            if (isFirstRender.current) {
                return;
            }

            pendingVirtualIndexRef.current = index;

            virtualizer.scrollToIndex(index, {
                align: scrollAlign,
                behavior: 'smooth',
            });

            return;
        }

        const itemsCollection = trackRef.current.children;

        if (itemsCollection.length > 0) {
            const pos = getCalculatedPos({
                scrollRef,
                trackRef,
                itemsCollection,
                index,
                scrollAlign,
                itemAttribute: ITEM_VIRTUAL_ATTRIBUTE,
            });

            if (isFirstRender.current) {
                runWithoutScrollAnimation(() => {
                    scrollRef.current?.scrollTo({ left: pos, behavior: 'auto' });
                });
            } else {
                scrollRef.current.scrollTo({ left: pos, behavior: 'smooth' });
            }
        }

        if (isFirstRender.current) {
            isFirstRender.current = false;
        }
    }, [index, scrollAlign, virtual, virtualizer]);

    // После появления целевого виртуального слайда в DOM выполняет точный scroll с учётом scrollAlign.
    useLayoutEffect(() => {
        if (!virtual || !scrollRef.current || !trackRef.current || pendingVirtualIndexRef.current !== index) {
            return;
        }

        const targetElement = trackRef.current.querySelector<HTMLElement>(`[${ITEM_VIRTUAL_ATTRIBUTE}="${index}"]`);

        if (!targetElement) {
            return;
        }

        const itemsCollection = trackRef.current.children;
        const pos = getCalculatedPos({
            scrollRef,
            trackRef,
            itemsCollection,
            index,
            scrollAlign,
            itemAttribute: ITEM_VIRTUAL_ATTRIBUTE,
        });

        if (isFirstRender.current) {
            runWithoutScrollAnimation(() => {
                scrollRef.current?.scrollTo({ left: pos, behavior: 'auto' });
            });
        } else {
            scrollRef.current.scrollTo({
                left: pos,
                behavior: 'smooth',
            });
        }
        pendingVirtualIndexRef.current = null;

        if (isFirstRender.current) {
            isFirstRender.current = false;
        }

        if (isBootstrappingVirtual) {
            setIsBootstrappingVirtual(false);
        }
    }, [index, isBootstrappingVirtual, scrollAlign, virtual, virtualItems]);

    // Подключает pointer drag/swipe и доводит карусель до ближайшего слайда после завершения жеста.
    useEffect(() => {
        const scrollElement = scrollRef.current;

        if (!scrollElement) {
            return;
        }

        let startX = 0;
        let startScrollLeft = 0;
        let activePointerId: number | null = null;
        let initialScrollBehavior = '';
        let initialScrollSnapType = '';

        // Возвращает inline-настройки scroll после завершения drag-взаимодействия.
        const restoreScrollBehavior = () => {
            scrollElement.style.scrollBehavior = initialScrollBehavior;
            scrollElement.style.scrollSnapType = initialScrollSnapType;
        };

        // Сбрасывает служебное состояние drag/swipe.
        const resetInteraction = () => {
            activePointerId = null;
            isInteracting.current = false;
            restoreScrollBehavior();
        };

        // Находит ближайший слайд и завершает drag точным скроллом к нему.
        const finishInteraction = () => {
            const nextIndex = getClosestIndex({
                scrollRef,
                trackRef,
                scrollAlign,
                itemAttribute: ITEM_VIRTUAL_ATTRIBUTE,
            });
            const itemsCollection = trackRef.current?.children;
            const nextPos =
                itemsCollection && itemsCollection.length
                    ? getCalculatedPos({
                          scrollRef,
                          trackRef,
                          itemsCollection,
                          index: nextIndex,
                          scrollAlign,
                          itemAttribute: ITEM_VIRTUAL_ATTRIBUTE,
                      })
                    : scrollElement.scrollLeft;

            resetInteraction();
            scrollElement.scrollTo({ left: nextPos, behavior: 'smooth' });
            onChangeIndex(nextIndex);
        };

        // Запоминает стартовую точку drag и временно отключает smooth/snap на время жеста.
        const startInteraction = ({ clientX }: { clientX: number }) => {
            startX = clientX;
            startScrollLeft = scrollElement.scrollLeft;
            initialScrollBehavior = scrollElement.style.scrollBehavior;
            initialScrollSnapType = scrollElement.style.scrollSnapType;
            scrollElement.style.scrollBehavior = 'auto';
            scrollElement.style.scrollSnapType = 'none';
            isInteracting.current = true;
        };

        // Сдвигает scrollLeft в соответствии с текущим смещением указателя.
        const moveInteraction = ({ clientX }: { clientX: number }) => {
            if (activePointerId === null) {
                return;
            }

            const diffX = clientX - startX;

            scrollElement.scrollLeft = startScrollLeft - diffX;
        };

        // Обрабатывает перемещение активного указателя во время drag.
        const onPointerMove = (event: PointerEvent) => {
            if (event.pointerId !== activePointerId) {
                return;
            }

            moveInteraction({ clientX: event.clientX });

            if (event.cancelable) {
                event.preventDefault();
            }
        };

        // Завершает pointer-взаимодействие и отпускает pointer capture.
        const stopPointerInteraction = (event: PointerEvent) => {
            if (event.pointerId !== activePointerId) {
                return;
            }

            if (scrollElement.hasPointerCapture(event.pointerId)) {
                scrollElement.releasePointerCapture(event.pointerId);
            }

            finishInteraction();
        };

        // Стартует drag только для допустимых primary-pointer событий.
        const onPointerDown = (event: PointerEvent) => {
            if (!swipeEnabled || !event.isPrimary || (event.pointerType === 'mouse' && event.button !== 0)) {
                return;
            }

            activePointerId = event.pointerId;
            startInteraction({ clientX: event.clientX });
            scrollElement.setPointerCapture(event.pointerId);
        };

        if (swipeEnabled) {
            scrollElement.addEventListener('pointerdown', onPointerDown);
            scrollElement.addEventListener('pointermove', onPointerMove);
            scrollElement.addEventListener('pointerup', stopPointerInteraction);
            scrollElement.addEventListener('pointercancel', stopPointerInteraction);
        }

        return () => {
            resetInteraction();
            scrollElement.removeEventListener('pointerdown', onPointerDown);
            scrollElement.removeEventListener('pointermove', onPointerMove);
            scrollElement.removeEventListener('pointerup', stopPointerInteraction);
            scrollElement.removeEventListener('pointercancel', stopPointerInteraction);
        };
    }, [onChangeIndex, scrollAlign, swipeEnabled]);

    return {
        scrollRef,
        trackRef,
        virtualItems,
        beforeSpacerWidth,
        afterSpacerWidth,
        measureVirtualItem,
    };
};
