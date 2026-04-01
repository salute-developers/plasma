import { useEffect, useRef, RefObject } from 'react';

import { CarouselNewProps as CarouselProps } from '../Carousel.types';

/**
 * Подсчет отступа для скролла до переданного индекса.
 */
export const getCalculatedPos = ({
    scrollRef,
    trackRef,
    itemsCollection,
    index,
    scrollAlign,
}: {
    scrollRef: RefObject<HTMLDivElement>;
    trackRef: RefObject<HTMLDivElement>;
    itemsCollection: HTMLCollection;
    index: number;
    scrollAlign: CarouselProps['scrollAlign'];
}): number => {
    const item = itemsCollection.item(index);

    if (!item || !trackRef.current || !scrollRef.current) {
        return 0;
    }

    const itemRect = item.getBoundingClientRect();
    const trackRect = trackRef.current.getBoundingClientRect();
    const scrollRect = scrollRef.current.getBoundingClientRect();

    const left = itemRect.left - trackRect.left + trackRef.current.scrollLeft;

    switch (scrollAlign) {
        case 'start': {
            return left;
        }
        case 'center': {
            return left - scrollRect.width / 2 + itemRect.width / 2;
        }
        case 'end': {
            return left - scrollRect.width + itemRect.width;
        }
        default: {
            return 0;
        }
    }
};

type UseCarouselOptions = Pick<CarouselProps, 'scrollAlign'> & {
    index: number;
    onChangeIndex: (index: number) => void;
    swipeEnabled: boolean;
};

type UseCarouselHookResult = {
    scrollRef: RefObject<HTMLDivElement>;
    trackRef: RefObject<HTMLDivElement>;
};

const getClosestIndex = ({
    scrollRef,
    trackRef,
    scrollAlign,
}: {
    scrollRef: RefObject<HTMLDivElement>;
    trackRef: RefObject<HTMLDivElement>;
    scrollAlign: CarouselProps['scrollAlign'];
}) => {
    if (!scrollRef.current || !trackRef.current) {
        return 0;
    }

    const itemsCollection = trackRef.current.children;

    if (!itemsCollection.length) {
        return 0;
    }

    const currentLeft = scrollRef.current.scrollLeft;
    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    for (let itemIndex = 0; itemIndex < itemsCollection.length; itemIndex++) {
        const pos = getCalculatedPos({
            scrollRef,
            trackRef,
            itemsCollection,
            index: itemIndex,
            scrollAlign,
        });

        const distance = Math.abs(pos - currentLeft);

        if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = itemIndex;
        }
    }

    return closestIndex;
};

export const useCarousel = ({
    index,
    scrollAlign,
    onChangeIndex,
    swipeEnabled,
}: UseCarouselOptions): UseCarouselHookResult => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const isFirstRender = useRef(true);
    const isInteracting = useRef(false);

    // Прокрутка до нужной позиции индекса, если индекс изменился.
    useEffect(() => {
        if (!scrollRef.current || !trackRef.current || isInteracting.current) {
            return;
        }

        const itemsCollection = trackRef.current.children;

        if (itemsCollection && itemsCollection.length > 0) {
            const pos = getCalculatedPos({
                scrollRef,
                trackRef,
                itemsCollection,
                index,
                scrollAlign,
            });

            scrollRef.current.scrollTo({ left: pos, behavior: isFirstRender.current ? 'instant' : 'smooth' });
        }

        if (isFirstRender.current) {
            isFirstRender.current = false;
        }
    }, [index, scrollAlign]);

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

        const restoreScrollBehavior = () => {
            scrollElement.style.scrollBehavior = initialScrollBehavior;
            scrollElement.style.scrollSnapType = initialScrollSnapType;
        };

        const resetInteraction = () => {
            activePointerId = null;
            isInteracting.current = false;
            restoreScrollBehavior();
        };

        const finishInteraction = () => {
            const nextIndex = getClosestIndex({
                scrollRef,
                trackRef,
                scrollAlign,
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
                      })
                    : scrollElement.scrollLeft;

            resetInteraction();
            scrollElement.scrollTo({ left: nextPos, behavior: 'smooth' });
            onChangeIndex(nextIndex);
        };

        const startInteraction = ({ clientX }: { clientX: number }) => {
            startX = clientX;
            startScrollLeft = scrollElement.scrollLeft;
            initialScrollBehavior = scrollElement.style.scrollBehavior;
            initialScrollSnapType = scrollElement.style.scrollSnapType;
            scrollElement.style.scrollBehavior = 'auto';
            scrollElement.style.scrollSnapType = 'none';
            isInteracting.current = true;
        };

        const moveInteraction = ({ clientX }: { clientX: number }) => {
            if (activePointerId === null) {
                return;
            }

            const diffX = clientX - startX;

            scrollElement.scrollLeft = startScrollLeft - diffX;
        };

        const onPointerMove = (event: PointerEvent) => {
            if (event.pointerId !== activePointerId) {
                return;
            }

            moveInteraction({ clientX: event.clientX });

            if (event.cancelable) {
                event.preventDefault();
            }
        };

        const stopPointerInteraction = (event: PointerEvent) => {
            if (event.pointerId !== activePointerId) {
                return;
            }

            if (scrollElement.hasPointerCapture(event.pointerId)) {
                scrollElement.releasePointerCapture(event.pointerId);
            }

            finishInteraction();
        };

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
    };
};
