import { RefObject } from 'react';

import { CarouselNewProps } from '../Carousel.types';

import { getCalculatedPos } from './getCalculatedPos';

// Вычисляет индекс слайда, чья целевая scroll-позиция ближе всего к текущему scrollLeft.
export const getClosestIndex = ({
    scrollRef,
    trackRef,
    scrollAlign,
    itemAttribute,
}: {
    scrollRef: RefObject<HTMLDivElement>;
    trackRef: RefObject<HTMLDivElement>;
    scrollAlign: CarouselNewProps['scrollAlign'];
    itemAttribute: string;
}) => {
    if (!scrollRef.current || !trackRef.current) {
        return 0;
    }

    const itemsCollection = trackRef.current.children;
    const items = Array.from(itemsCollection) as HTMLElement[];

    if (!items.length) {
        return 0;
    }

    const currentLeft = scrollRef.current.scrollLeft;
    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;
    const hasIndexedItems = items.some((item) => item.hasAttribute(itemAttribute));
    const itemsToProcess = hasIndexedItems ? items.filter((item) => item.hasAttribute(itemAttribute)) : items;

    for (let itemIndex = 0; itemIndex < itemsToProcess.length; itemIndex++) {
        const item = itemsToProcess[itemIndex];
        const parsedIndex = item.getAttribute(itemAttribute);
        const index = parsedIndex === null ? itemIndex : Number(parsedIndex);

        const pos = getCalculatedPos({
            scrollRef,
            trackRef,
            itemsCollection,
            index,
            scrollAlign,
            itemAttribute,
        });

        const distance = Math.abs(pos - currentLeft);

        if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = index;
        }
    }

    return closestIndex;
};
