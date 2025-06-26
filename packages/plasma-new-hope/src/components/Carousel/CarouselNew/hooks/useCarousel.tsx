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
};

type UseCarouselHookResult = {
    scrollRef: RefObject<HTMLDivElement>;
    trackRef: RefObject<HTMLDivElement>;
};

export const useCarousel = ({ index, scrollAlign }: UseCarouselOptions): UseCarouselHookResult => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    // Прокрутка до нужной позиции индекса, если индекс изменился.
    useEffect(() => {
        if (!scrollRef.current || !trackRef.current) {
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

            scrollRef.current.scrollTo({ left: pos });
        }
    }, [index]);

    return {
        scrollRef,
        trackRef,
    };
};
